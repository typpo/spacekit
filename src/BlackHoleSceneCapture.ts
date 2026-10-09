import * as THREE from 'three';

type Renderable = THREE.Object3D & {
  material: THREE.Material | THREE.Material[];
};

// Point sprites are drawn in framebuffer pixels, so depth smoothing is too.
const POINT_SMOOTHING_PIXELS = 16;
const POINT_SMOOTHING_SAMPLES = 32;

function depthTarget(): THREE.WebGLRenderTarget {
  const target = new THREE.WebGLRenderTarget(1, 1);
  target.depthTexture = new THREE.DepthTexture(1, 1, THREE.UnsignedIntType);
  return target;
}

/** Camera-clipped color/depth layers for screen-space scene lensing. */
export class BlackHoleSceneCapture {
  readonly background = depthTarget();
  readonly transparent = depthTarget();
  readonly surfaces = depthTarget();
  readonly foreground = depthTarget();
  readonly clearColor = new THREE.Color();
  readonly viewProjection = new THREE.Matrix4();
  readonly depthRange = new THREE.Vector2();
  readonly size = new THREE.Vector2();
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
        depth: { value: this.foreground.depthTexture },
        smoothingRadius: { value: new THREE.Vector2() },
      },
      vertexShader: `varying vec2 sampleUv;
        void main() { sampleUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
      fragmentShader: `varying vec2 sampleUv;
        uniform sampler2D color;
        uniform sampler2D depth;
        uniform vec2 smoothingRadius;
        float light(vec4 sampleColor) {
          return max(max(sampleColor.r, sampleColor.g), max(sampleColor.b, sampleColor.a));
        }
        void main() {
          vec4 sampleColor = texture2D(color, sampleUv);
          // Additive black padding contributes neither light nor coverage.
          if (light(sampleColor) == 0.0) discard;
          gl_FragColor = sampleColor;
          float sampleDepth = texture2D(depth, sampleUv).x;
          if (smoothingRadius.x > 0.0 && sampleDepth < 1.0) {
            // Overlapping sprites share one depth per pixel, which would lens
            // each square quad separately. Average nearby depths by light so
            // the batch bends as one continuous sheet.
            float weight = light(sampleColor);
            float weightedDepth = weight * sampleDepth;
            float covered = 0.0;
            for (int i = 0; i < ${POINT_SMOOTHING_SAMPLES}; i++) {
              float radius = sqrt((float(i) + 0.5) / ${POINT_SMOOTHING_SAMPLES}.0);
              float angle = float(i) * 2.39996323;
              vec2 uv = sampleUv + vec2(cos(angle), sin(angle)) * radius * smoothingRadius;
              float neighborDepth = texture2D(depth, uv).x;
              float neighborWeight = neighborDepth < 1.0 ? light(texture2D(color, uv)) : 0.0;
              weight += neighborWeight;
              weightedDepth += neighborWeight * neighborDepth;
              covered += neighborWeight > 0.0 ? 1.0 : 0.0;
            }
            // Preserve depth in sparse neighborhoods; fade smoothing in from
            // 60% to 90% coverage, using the samples already gathered above.
            float density = covered / ${POINT_SMOOTHING_SAMPLES}.0;
            sampleDepth = mix(sampleDepth, weightedDepth / weight, smoothstep(0.6, 0.9, density));
          }
          gl_FragDepthEXT = sampleDepth;
        }`,
      extensions: { fragDepth: true },
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

  render(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.Camera,
    planeDistance: number,
  ): void {
    if (!(camera as THREE.PerspectiveCamera).isPerspectiveCamera) {
      throw new Error('Black hole scene lensing requires a perspective camera');
    }
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
    for (const target of [this.background, this.transparent, this.foreground]) {
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
      clear(this.background);
      renderer.render(scene, this.camera);
      scene.background = null;
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
        // Reuse the foreground target as temporary storage until its final
        // capture, avoiding another full-resolution color/depth allocation.
        clear(this.foreground);
        // Color first, with the material's own depth settings. Forcing depth
        // writes here would let each sprite's transparent corners hide the
        // particles drawn after it in the same draw call.
        renderer.render(scene, this.camera);
        // Then the nearest depth of everything drawn, without touching color.
        // The composite discards empty pixels; overlapping particles within
        // one renderable still share a single captured depth per pixel, so
        // the composite smooths point depths.
        entry.sources.forEach((material) => {
          material.depthWrite = material.depthTest = true;
          material.colorWrite = false;
        });
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
        renderer.setRenderTarget(
          entry.surface ? this.surfaces : this.transparent,
        );
        const composite = this.composite.material;
        composite.uniforms.smoothingRadius.value
          .set(1 / this.size.x, 1 / this.size.y)
          .multiplyScalar(
            (entry.object as THREE.Points).isPoints
              ? POINT_SMOOTHING_PIXELS
              : 0,
          );
        composite.depthFunc = THREE.LessEqualDepth;
        composite.depthWrite = true;
        composite.blending = THREE.NormalBlending;
        renderer.render(this.compositeScene, this.camera);
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
      objects.forEach(({ object, mask, background }) => {
        // Infinite sky belongs only to the background color capture. It must
        // neither enter finite-depth tracing nor cover the lens as foreground.
        object.layers.mask = background ? 0 : mask;
      });
      clear(this.foreground);
      if (near > sourceCamera.near) {
        this.clipCamera(
          sourceCamera,
          sourceCamera.near,
          Math.min(near, sourceCamera.far),
        );
        renderer.render(scene, this.camera);
      }
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
    for (const target of [
      this.background,
      this.transparent,
      this.surfaces,
      this.foreground,
    ])
      target.dispose();
    this.composite.geometry.dispose();
    this.composite.material.dispose();
  }
}
