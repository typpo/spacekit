import * as THREE from 'three';

function boundsTarget(): THREE.WebGLRenderTarget {
  return new THREE.WebGLRenderTarget(1, 1, {
    format: THREE.RGFormat,
    type: THREE.FloatType,
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    depthBuffer: false,
    stencilBuffer: false,
  });
}

/** Conservative depth bounds for 8x8 and 64x64 framebuffer tiles. */
export class BlackHoleDepthHierarchy {
  readonly fine = boundsTarget();
  readonly coarse = boundsTarget();
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.Camera();
  private readonly quad = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    new THREE.ShaderMaterial({
      uniforms: {
        source: { value: null },
        sourceSize: { value: new THREE.Vector2() },
        sourceIsBounds: { value: false },
      },
      vertexShader: `void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }`,
      fragmentShader: `
        uniform sampler2D source;
        uniform vec2 sourceSize;
        uniform bool sourceIsBounds;
        void main() {
          ivec2 origin = ivec2(gl_FragCoord.xy) * 8;
          vec2 bounds = vec2(1.0, 0.0);
          for (int y = 0; y < 8; y++) {
            for (int x = 0; x < 8; x++) {
              ivec2 pixel = origin + ivec2(x, y);
              if (any(greaterThanEqual(pixel, ivec2(sourceSize)))) continue;
              vec2 value = texelFetch(source, pixel, 0).rg;
              if (!sourceIsBounds) value.y = value.x < 1.0 ? value.x : 0.0;
              bounds.x = min(bounds.x, value.x);
              bounds.y = max(bounds.y, value.y);
            }
          }
          gl_FragColor = vec4(bounds, 0.0, 1.0);
        }`,
      depthTest: false,
      depthWrite: false,
      blending: THREE.NoBlending,
      toneMapped: false,
    }),
  );

  constructor() {
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);
    this.fine.texture.name = 'black-hole-depth-fine';
    this.coarse.texture.name = 'black-hole-depth-coarse';
  }

  // Called inside scene capture, which owns restoration of renderer state.
  render(
    renderer: THREE.WebGLRenderer,
    depth: THREE.Texture,
    width: number,
    height: number,
  ): void {
    const uniforms = this.quad.material.uniforms;
    uniforms.source.value = depth;
    uniforms.sourceIsBounds.value = false;
    for (const target of [this.fine, this.coarse]) {
      uniforms.sourceSize.value.set(width, height);
      width = Math.ceil(width / 8);
      height = Math.ceil(height / 8);
      if (target.width !== width || target.height !== height)
        target.setSize(width, height);
      renderer.setRenderTarget(target);
      renderer.render(this.scene, this.camera);
      uniforms.source.value = target.texture;
      uniforms.sourceIsBounds.value = true;
    }
  }

  dispose(): void {
    this.fine.dispose();
    this.coarse.dispose();
    this.quad.geometry.dispose();
    this.quad.material.dispose();
  }
}
