import * as THREE from 'three';
import { BlackHoleDepthHierarchy } from './BlackHoleDepthHierarchy';

type Renderable = THREE.Object3D & {
  material: THREE.Material | THREE.Material[];
};

// Steps use whole framebuffer pixels per axis; narrower gaps can be skipped.
const POINT_SMOOTHING_STEP_PIXELS = 2;
const POINT_SMOOTHING_STEPS = 8;

const bounds = new THREE.Sphere();

/**
 * Whether the material draws vertices where the geometry puts them. Custom
 * vertex shaders may move them, unless marked with
 * `userData.spacekitStandardTransform`.
 */
function keepsGeometryBounds(material: THREE.Material): boolean {
  if ((material as THREE.ShaderMaterial).isShaderMaterial) {
    return material.userData.spacekitStandardTransform === true;
  }
  return (
    material.onBeforeCompile === THREE.Material.prototype.onBeforeCompile &&
    !(material as THREE.MeshStandardMaterial).displacementMap
  );
}

/**
 * The nearest view depth that any of these objects can reach, Infinity when
 * none reaches the depth range, or 0 when one has no trustworthy bounds.
 */
function nearestDepth(
  objects: { object: THREE.Object3D; sources: THREE.Material[] }[],
  camera: THREE.Camera,
  near: number,
  far: number,
): number {
  let nearest = Infinity;
  for (const { object, sources } of objects) {
    const geometry = (object as THREE.Mesh).geometry as
      | THREE.BufferGeometry
      | undefined;
    if (
      !object.frustumCulled ||
      (object as THREE.InstancedMesh).isInstancedMesh ||
      (object as THREE.SkinnedMesh).isSkinnedMesh ||
      !sources.every(keepsGeometryBounds)
    ) {
      return 0;
    }
    if ((object as THREE.Sprite).isSprite) {
      // Sprite corners are offset across the view plane, at the center depth.
      bounds.set(bounds.center.setFromMatrixPosition(object.matrixWorld), 0);
    } else if (geometry) {
      if (!geometry.boundingSphere) geometry.computeBoundingSphere();
      if (!geometry.boundingSphere) return 0;
      bounds.copy(geometry.boundingSphere).applyMatrix4(object.matrixWorld);
    } else {
      return 0;
    }
    const depth = -bounds.center.applyMatrix4(camera.matrixWorldInverse).z;
    if (!Number.isFinite(depth) || !Number.isFinite(bounds.radius)) return 0;
    if (depth - bounds.radius >= far || depth + bounds.radius <= near) continue;
    nearest = Math.min(nearest, depth - bounds.radius);
  }
  return nearest;
}

function captureTarget(samples = 0): THREE.WebGLRenderTarget {
  const target = new THREE.WebGLRenderTarget(1, 1, {
    samples,
    resolveDepthBuffer: false,
  });
  // Preserve dark tones in 8-bit storage; WebGL encodes writes and decodes
  // samples while keeping capture blending and lens compositing linear.
  target.texture.colorSpace = THREE.SRGBColorSpace;
  // MSAA depth resolves are implementation-defined; capture depth separately.
  if (!samples)
    target.depthTexture = new THREE.DepthTexture(1, 1, THREE.UnsignedIntType);
  return target;
}

/** Camera-clipped color/depth layers for screen-space scene lensing. */
export class BlackHoleSceneCapture {
  readonly background = captureTarget();
  readonly transparent = captureTarget();
  readonly surfaces = captureTarget();
  /** Scratch color with the main frame's 4x MSAA; ends with the foreground. */
  readonly foreground = captureTarget(4);
  // Single-sample scratch: depth for the multisampled color passes, and both
  // color and depth for points and sprites. Their shapes come from texture
  // alpha, which multisampling does not antialias.
  private readonly scratch = captureTarget();
  private readonly emptyScene = new THREE.Scene();
  readonly clearColor = new THREE.Color();
  readonly viewProjection = new THREE.Matrix4();
  readonly depthRange = new THREE.Vector2();
  readonly size = new THREE.Vector2();
  readonly backgroundBounds = new BlackHoleDepthHierarchy();
  readonly transparentBounds = new BlackHoleDepthHierarchy();
  readonly surfaceBounds = new BlackHoleDepthHierarchy();
  hasTransparent = false;
  hasSurfaces = false;
  private readonly camera = new THREE.PerspectiveCamera();
  private readonly viewport = new THREE.Vector4();
  private readonly compositeScene = new THREE.Scene();
  private readonly composite = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    new THREE.ShaderMaterial({
      uniforms: {
        color: { value: this.foreground.texture },
        depth: { value: this.scratch.depthTexture },
        smoothingStep: { value: new THREE.Vector2() },
      },
      vertexShader: `varying vec2 sampleUv;
        void main() { sampleUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
      fragmentShader: `varying vec2 sampleUv;
        uniform sampler2D color;
        uniform sampler2D depth;
        uniform vec2 smoothingStep;
        float light(vec4 sampleColor) {
          return max(max(sampleColor.r, sampleColor.g), max(sampleColor.b, sampleColor.a));
        }
        void main() {
          vec4 sampleColor = texture2D(color, sampleUv);
          float weight = light(sampleColor);
          // Additive black padding contributes neither light nor coverage.
          if (weight == 0.0) discard;
          gl_FragColor = sampleColor;
          float sampleDepth = texture2D(depth, sampleUv).x;
          // Multisampling covers edge pixels whose centers the single-sample
          // depth pass missed. They belong to the nearest adjacent surface.
          if (sampleDepth == 1.0) {
            vec2 texelSize = 1.0 / vec2(textureSize(depth, 0));
            for (int x = -1; x <= 1; x++) {
              for (int y = -1; y <= 1; y++) {
                sampleDepth = min(sampleDepth,
                  texture2D(depth, sampleUv + vec2(float(x), float(y)) * texelSize).x);
              }
            }
          }
          if (smoothingStep.x > 0.0 && sampleDepth < 1.0) {
            // Smooth overlapping sprite depths along eight directions to avoid
            // lensing each square separately. Stop at each sampled gap so
            // separate sprites keep their own depths.
            float weightedDepth = weight * sampleDepth;
            for (int x = -1; x <= 1; x++) {
              for (int y = -1; y <= 1; y++) {
                if (x == 0 && y == 0) continue;
                // Whole-pixel steps stay on texel centers.
                vec2 offset = vec2(float(x), float(y)) * smoothingStep;
                for (int i = 1; i <= ${POINT_SMOOTHING_STEPS}; i++) {
                  vec2 uv = sampleUv + offset * float(i);
                  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) break;
                  float neighborDepth = texture2D(depth, uv).x;
                  float neighborWeight = neighborDepth < 1.0 ? light(texture2D(color, uv)) : 0.0;
                  if (neighborWeight == 0.0) break;
                  weight += neighborWeight;
                  weightedDepth += neighborWeight * neighborDepth;
                }
              }
            }
            sampleDepth = weightedDepth / weight;
          }
          gl_FragDepth = sampleDepth;
        }`,
      transparent: true,
      premultipliedAlpha: true,
      toneMapped: false,
    }),
  );

  constructor() {
    this.camera.matrixAutoUpdate = false;
    this.composite.frustumCulled = false;
    this.compositeScene.add(this.composite);
  }

  private clipCamera(
    source: THREE.PerspectiveCamera,
    near: number,
    far: number,
  ): void {
    this.camera.copy(source, false);
    this.camera.matrixAutoUpdate = false;
    this.camera.near = near;
    this.camera.far = far;
    // Preserve the caller's asymmetric frustum / view offset and change only
    // the perspective depth mapping. No source shader modification is needed.
    const projection = this.camera.projectionMatrix;
    projection.elements[10] = -(far + near) / (far - near);
    projection.elements[14] = (-2 * far * near) / (far - near);
    this.camera.projectionMatrixInverse.copy(projection).invert();
  }

  // Merge captured color and the single-sample depth scratch into a layer.
  private compositeLayer(
    renderer: THREE.WebGLRenderer,
    color: THREE.WebGLRenderTarget,
    target: THREE.WebGLRenderTarget,
    smoothingPixels: number,
    underneath: boolean,
  ): void {
    const composite = this.composite.material;
    composite.uniforms.color.value = color.texture;
    renderer.setRenderTarget(target);
    composite.uniforms.smoothingStep.value.set(
      smoothingPixels / this.size.x,
      smoothingPixels / this.size.y,
    );
    composite.depthFunc = THREE.LessEqualDepth;
    composite.depthWrite = true;
    composite.blending = THREE.NormalBlending;
    renderer.render(this.compositeScene, this.camera);
    if (!underneath) return;
    // A nearer translucent pixel must not reject light behind it. Blend
    // farther fragments underneath without replacing the nearest depth.
    // The strict depth test excludes pixels handled by the first pass.
    composite.depthFunc = THREE.GreaterDepth;
    composite.depthWrite = false;
    composite.blending = THREE.CustomBlending;
    composite.blendSrc = THREE.OneMinusDstAlphaFactor;
    composite.blendDst = THREE.OneFactor;
    renderer.render(this.compositeScene, this.camera);
  }

  render(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.Camera,
    planeDistance: number,
  ): void {
    if (!(camera as THREE.PerspectiveCamera).isPerspectiveCamera) {
      throw new Error('Black hole scene lensing requires a perspective camera');
    }
    for (const bounds of [
      this.backgroundBounds,
      this.transparentBounds,
      this.surfaceBounds,
    ])
      bounds.allocate(renderer);
    const sourceCamera = camera as THREE.PerspectiveCamera;
    const previousTarget = renderer.getRenderTarget();
    const cubeFace = renderer.getActiveCubeFace();
    const mipLevel = renderer.getActiveMipmapLevel();
    const autoClear = renderer.autoClear;
    const clearAlpha = renderer.getClearAlpha();
    const xrEnabled = renderer.xr.enabled;
    const shadowAutoUpdate = renderer.shadowMap.autoUpdate;
    const background = scene.background;
    renderer.getClearColor(this.clearColor);
    renderer.getCurrentViewport(this.viewport);
    this.size.set(Math.max(1, this.viewport.z), Math.max(1, this.viewport.w));
    for (const target of [
      this.background,
      this.transparent,
      this.foreground,
      this.scratch,
    ]) {
      if (target.width !== this.size.x || target.height !== this.size.y) {
        target.setSize(this.size.x, this.size.y);
      }
    }
    // A distant Skybox must remain in the background capture. Starting at the
    // lens plane also avoids the simulation camera's very small near plane.
    const near = Math.max(
      sourceCamera.near,
      planeDistance > 0 ? planeDistance : sourceCamera.far,
    );
    const far = Math.max(sourceCamera.far, 1e11, near * 1e5);
    this.depthRange.set(near, far);
    const objects: {
      object: Renderable;
      sources: THREE.Material[];
      mask: number;
      background: boolean;
      surface: boolean;
      transparent: boolean;
      z: number;
      groupOrder: number;
    }[] = [];
    const position = new THREE.Vector3();
    const materials = new Map<
      THREE.Material,
      Pick<
        THREE.Material,
        | 'depthWrite'
        | 'depthTest'
        | 'colorWrite'
        | 'blending'
        | 'blendSrc'
        | 'blendDst'
        | 'blendEquation'
        | 'blendSrcAlpha'
        | 'blendDstAlpha'
        | 'blendEquationAlpha'
      >
    >();
    const hidden: THREE.Object3D[] = [];
    const clear = (target: THREE.WebGLRenderTarget) => {
      renderer.setRenderTarget(target);
      renderer.setClearColor(0, 0);
      renderer.state.buffers.color.setMask(true);
      renderer.state.buffers.depth.setMask(true);
      renderer.clear();
    };
    try {
      scene.traverse((object) => {
        if (object.userData.spacekitBlackHole && object.visible) {
          hidden.push(object);
          object.visible = false;
        }
      });
      scene.traverseVisible((object) => {
        const renderable = object as Renderable;
        if (!renderable.material) return;
        const sources = scene.overrideMaterial
          ? [scene.overrideMaterial]
          : Array.isArray(renderable.material)
          ? renderable.material
          : [renderable.material];
        let parent = object.parent;
        while (parent && !(parent as THREE.Group).isGroup)
          parent = parent.parent;
        const background =
          !scene.overrideMaterial &&
          object.userData.spacekitBackground === true;
        objects.push({
          object: renderable,
          sources,
          mask: object.layers.mask,
          background,
          surface: (object as THREE.Mesh).isMesh === true,
          transparent:
            !background &&
            sources.some(
              (material) =>
                material.transparent ||
                !material.depthWrite ||
                !material.depthTest,
            ),
          z: position
            .setFromMatrixPosition(object.matrixWorld)
            .applyMatrix4(camera.matrixWorldInverse).z,
          groupOrder: parent?.renderOrder ?? 0,
        });
        sources.forEach((material) => {
          if (materials.has(material)) return;
          materials.set(material, {
            depthWrite: material.depthWrite,
            depthTest: material.depthTest,
            colorWrite: material.colorWrite,
            blending: material.blending,
            blendSrc: material.blendSrc,
            blendDst: material.blendDst,
            blendEquation: material.blendEquation,
            blendSrcAlpha: material.blendSrcAlpha,
            blendDstAlpha: material.blendDstAlpha,
            blendEquationAlpha: material.blendEquationAlpha,
          });
          if (material.blending === THREE.AdditiveBlending) {
            // Preserve additive RGB but not the opaque alpha of the Sun JPEG.
            material.blending = THREE.CustomBlending;
            material.blendSrc = material.premultipliedAlpha
              ? THREE.OneFactor
              : THREE.SrcAlphaFactor;
            material.blendDst = THREE.OneFactor;
            material.blendEquation = THREE.AddEquation;
            material.blendSrcAlpha = THREE.ZeroFactor;
            material.blendDstAlpha = THREE.OneFactor;
            material.blendEquationAlpha = THREE.AddEquation;
          }
        });
      });
      renderer.xr.enabled = false;
      renderer.shadowMap.autoUpdate = false;
      renderer.autoClear = false;
      this.clipCamera(sourceCamera, near, far);
      this.composite.layers.mask = camera.layers.mask;
      this.viewProjection.multiplyMatrices(
        this.camera.projectionMatrix,
        this.camera.matrixWorldInverse,
      );
      objects.forEach(({ object, mask, transparent }) => {
        object.layers.mask = transparent ? 0 : mask;
      });
      clear(this.foreground);
      renderer.render(scene, this.camera);
      // Infinite sky writes no depth, so the depth pass can leave it out.
      scene.background = null;
      const opaque: THREE.Material[] = [];
      objects.forEach(({ object, sources, background, transparent }) => {
        if (background) object.layers.mask = 0;
        else if (!transparent) opaque.push(...sources);
      });
      opaque.forEach((material) => {
        material.colorWrite = false;
      });
      clear(this.scratch);
      renderer.render(scene, this.camera);
      opaque.forEach((material) => {
        material.colorWrite = materials.get(material)!.colorWrite;
      });
      clear(this.background);
      this.compositeLayer(renderer, this.foreground, this.background, 0, false);
      clear(this.transparent);
      const transparentObjects = objects.filter(
        (entry) => entry.transparent && (entry.mask & camera.layers.mask) !== 0,
      );
      this.hasTransparent = transparentObjects.some((entry) => !entry.surface);
      this.hasSurfaces = transparentObjects.some((entry) => entry.surface);
      if (this.hasSurfaces) {
        if (
          this.surfaces.width !== this.size.x ||
          this.surfaces.height !== this.size.y
        ) {
          this.surfaces.setSize(this.size.x, this.size.y);
        }
        clear(this.surfaces);
      }
      // Match ordinary transparent sorting. Layers use the nearest contributing
      // depth; intersecting transparent surfaces retain screen-space limits.
      transparentObjects.sort(
        (a, b) =>
          a.groupOrder - b.groupOrder ||
          a.object.renderOrder - b.object.renderOrder ||
          a.z - b.z ||
          a.object.id - b.object.id,
      );
      objects.forEach(({ object }) => {
        object.layers.mask = 0;
      });
      for (const entry of transparentObjects) {
        entry.object.layers.mask = entry.mask;
        const sprites =
          (entry.object as THREE.Points).isPoints ||
          (entry.object as THREE.Sprite).isSprite;
        // Color first, with the material's own depth settings. Forcing depth
        // writes here would let each sprite's transparent corners hide the
        // particles drawn after it in the same draw call. Until its final
        // capture, the foreground target is multisampled scratch.
        const color = sprites ? this.scratch : this.foreground;
        clear(color);
        renderer.render(scene, this.camera);
        // Then the nearest depth of everything drawn, without touching color.
        // The composite discards empty pixels and smooths overlapping points.
        entry.sources.forEach((material) => {
          material.depthWrite = material.depthTest = true;
          material.colorWrite = false;
        });
        if (!sprites) clear(this.scratch);
        renderer.render(scene, this.camera);
        entry.sources.forEach((material) => {
          const original = materials.get(material)!;
          material.depthWrite = original.depthWrite;
          material.depthTest = original.depthTest;
          material.colorWrite = original.colorWrite;
        });
        entry.object.layers.mask = 0;
        // Keep surfaces at their own distance instead of moving a ring to the
        // depth of a faint particle overlapping it in the captured image.
        this.compositeLayer(
          renderer,
          color,
          entry.surface ? this.surfaces : this.transparent,
          (entry.object as THREE.Points).isPoints
            ? POINT_SMOOTHING_STEP_PIXELS
            : 0,
          true,
        );
      }
      objects.forEach(({ object, mask, background }) => {
        // Infinite sky belongs only to the background color capture. It must
        // neither enter finite-depth tracing nor cover the lens as foreground.
        object.layers.mask = background ? 0 : mask;
      });
      clear(this.foreground);
      const foregroundFar = Math.min(near, sourceCamera.far);
      const content = nearestDepth(
        objects.filter(
          (entry) =>
            !entry.background && (entry.mask & camera.layers.mask) !== 0,
        ),
        camera,
        sourceCamera.near,
        foregroundFar,
      );
      if (near > sourceCamera.near && content < foregroundFar) {
        // Spacekit's near plane is tiny. Starting the depth range there leaves
        // nearby surfaces only a few depth steps apart, so a veil could fail
        // its depth test against the surface behind it. Start at the nearest
        // bounded content instead, keeping a margin for rounding. Objects
        // without trustworthy bounds keep the camera's own near plane.
        this.clipCamera(
          sourceCamera,
          Math.max(sourceCamera.near, 0.5 * content),
          foregroundFar,
        );
        renderer.render(scene, this.camera);
      } else {
        // Resolve the cleared samples; clearing alone does not.
        renderer.render(this.emptyScene, this.camera);
      }
      this.backgroundBounds.render(renderer, this.background);
      if (this.hasTransparent)
        this.transparentBounds.render(renderer, this.transparent);
      if (this.hasSurfaces) this.surfaceBounds.render(renderer, this.surfaces);
    } finally {
      materials.forEach((original, material) =>
        Object.assign(material, original),
      );
      objects.forEach(({ object, mask }) => {
        object.layers.mask = mask;
      });
      hidden.forEach((object) => {
        object.visible = true;
      });
      scene.background = background;
      renderer.setRenderTarget(previousTarget, cubeFace, mipLevel);
      renderer.setClearColor(this.clearColor, clearAlpha);
      renderer.autoClear = autoClear;
      renderer.xr.enabled = xrEnabled;
      renderer.shadowMap.autoUpdate = shadowAutoUpdate;
    }
  }

  dispose(): void {
    this.backgroundBounds.dispose();
    this.transparentBounds.dispose();
    this.surfaceBounds.dispose();
    for (const target of [
      this.background,
      this.transparent,
      this.surfaces,
      this.foreground,
      this.scratch,
    ])
      target.dispose();
    this.composite.geometry.dispose();
    this.composite.material.dispose();
  }
}
