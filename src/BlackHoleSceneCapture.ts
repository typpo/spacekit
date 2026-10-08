import * as THREE from 'three';

type Renderable = THREE.Object3D & {
  material: THREE.Material | THREE.Material[];
};

/** Split the camera image at the lens plane, preserving transparent layers. */
export class BlackHoleSceneCapture {
  readonly background = new THREE.WebGLRenderTarget(1, 1);
  readonly foreground = new THREE.WebGLRenderTarget(1, 1);
  readonly clearColor = new THREE.Color();
  private readonly viewport = new THREE.Vector4();
  private readonly planeDepth = { value: 1 };
  private readonly materials = new Map<
    THREE.Material,
    { version: number; layers: [THREE.Material, THREE.Material] }
  >();

  private layerMaterial(
    source: THREE.Material,
    foreground: boolean,
  ): THREE.Material {
    let entry = this.materials.get(source);
    if (!entry || entry.version !== source.version) {
      if (entry) entry.layers.forEach((material) => material.dispose());
      const layers = [false, true].map((front) => {
        const material = source.clone();
        const onBeforeCompile = source.onBeforeCompile;
        material.onBeforeCompile = (shader, renderer) => {
          onBeforeCompile.call(material, shader, renderer);
          shader.uniforms.blackHolePlaneDepth = this.planeDepth;
          // Retain each object's vertex transform and fragment shader: this
          // also works with GPU Kepler particles, sprites, lines and skinning.
          shader.fragmentShader =
            'uniform highp float blackHolePlaneDepth;\n' +
            shader.fragmentShader.replace(
              /void\s+main\s*\(\s*(?:void)?\s*\)\s*\{/,
              `void main() {
                if ((gl_FragCoord.z < blackHolePlaneDepth) != ${
                  front ? 'true' : 'false'
                }) discard;`,
            );
        };
        material.customProgramCacheKey = () =>
          source.customProgramCacheKey() + ':black-hole-layer:' + front;
        return material;
      }) as [THREE.Material, THREE.Material];
      entry = { version: source.version, layers };
      this.materials.set(source, entry);
    }
    const material = entry.layers[foreground ? 1 : 0];
    // copy() preserves changing opacity/maps/colors/point sizes, as well as
    // blending/depth settings. Avoid ShaderMaterial.copy's deep uniform clone;
    // share the uniform values so GPU animation remains current in both passes.
    if (source instanceof THREE.ShaderMaterial) {
      THREE.Material.prototype.copy.call(material, source);
      (material as THREE.ShaderMaterial).uniforms = { ...source.uniforms };
    } else {
      material.copy(source);
    }
    if (source.blending === THREE.AdditiveBlending) {
      // Additive light contributes RGB, not coverage. The Sun's opaque JPEG
      // has black padding which must not replace the sky with a black square.
      material.blending = THREE.CustomBlending;
      material.blendSrc = source.premultipliedAlpha
        ? THREE.OneFactor
        : THREE.SrcAlphaFactor;
      material.blendDst = THREE.OneFactor;
      material.blendEquation = THREE.AddEquation;
      material.blendSrcAlpha = THREE.ZeroFactor;
      material.blendDstAlpha = THREE.OneFactor;
      material.blendEquationAlpha = THREE.AddEquation;
    }
    return material;
  }

  render(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.Camera,
    planeDepth: number,
  ): void {
    const previousTarget = renderer.getRenderTarget();
    const cubeFace = renderer.getActiveCubeFace();
    const mipLevel = renderer.getActiveMipmapLevel();
    const autoClear = renderer.autoClear;
    const clearAlpha = renderer.getClearAlpha();
    const xrEnabled = renderer.xr.enabled;
    const shadowAutoUpdate = renderer.shadowMap.autoUpdate;
    const background = scene.background;
    const overrideMaterial = scene.overrideMaterial;
    renderer.getClearColor(this.clearColor);
    renderer.getCurrentViewport(this.viewport);
    this.planeDepth.value = planeDepth;
    const width = Math.max(1, this.viewport.z);
    const height = Math.max(1, this.viewport.w);
    if (this.background.width !== width || this.background.height !== height) {
      this.background.setSize(width, height);
      this.foreground.setSize(width, height);
    }
    const hidden: THREE.Object3D[] = [];
    const replaced: [Renderable, THREE.Material | THREE.Material[]][] = [];
    const used = new Set<THREE.Material>();
    try {
      scene.traverse((object) => {
        if (object.userData.spacekitBlackHole && object.visible) {
          hidden.push(object);
          object.visible = false;
        }
      });
      scene.traverseVisible((object) => {
        const renderable = object as Renderable;
        if (renderable.material)
          replaced.push([renderable, renderable.material]);
      });
      renderer.xr.enabled = false;
      renderer.shadowMap.autoUpdate = false;
      renderer.autoClear = false;
      for (const front of [false, true]) {
        replaced.forEach(([object, original]) => {
          const layer = (material: THREE.Material) => {
            used.add(material);
            return this.layerMaterial(material, front);
          };
          object.material = Array.isArray(original)
            ? original.map(layer)
            : layer(original);
        });
        scene.background = front ? null : background;
        if (overrideMaterial) {
          used.add(overrideMaterial);
          scene.overrideMaterial = this.layerMaterial(overrideMaterial, front);
        }
        renderer.setRenderTarget(front ? this.foreground : this.background);
        renderer.setClearColor(0, 0);
        renderer.state.buffers.color.setMask(true);
        renderer.state.buffers.depth.setMask(true);
        renderer.clear();
        renderer.render(scene, camera);
      }
    } finally {
      replaced.forEach(([object, material]) => (object.material = material));
      hidden.forEach((object) => (object.visible = true));
      scene.background = background;
      scene.overrideMaterial = overrideMaterial;
      renderer.setRenderTarget(previousTarget, cubeFace, mipLevel);
      renderer.setClearColor(this.clearColor, clearAlpha);
      renderer.autoClear = autoClear;
      renderer.xr.enabled = xrEnabled;
      renderer.shadowMap.autoUpdate = shadowAutoUpdate;
      this.materials.forEach((entry, source) => {
        if (!used.has(source)) {
          entry.layers.forEach((material) => material.dispose());
          this.materials.delete(source);
        }
      });
    }
  }

  dispose(): void {
    this.background.dispose();
    this.foreground.dispose();
    this.materials.forEach(({ layers }) =>
      layers.forEach((material) => material.dispose()),
    );
    this.materials.clear();
  }
}
