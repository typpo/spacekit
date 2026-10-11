import * as THREE from 'three';

// Depth bounds are stored as the bit patterns of non-negative floats, which
// order exactly like the floats themselves. RG32UI is color-renderable in every
// WebGL 2 context, so the bounds are exact and need no extension.
function boundsTarget(name: string): THREE.WebGLRenderTarget {
  const target = new THREE.WebGLRenderTarget(1, 1, {
    format: THREE.RGIntegerFormat,
    type: THREE.UnsignedIntType,
    internalFormat: 'RG32UI',
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    depthBuffer: false,
    stencilBuffer: false,
  });
  target.texture.name = name;
  return target;
}

function reduceMaterial(
  sourceType: string,
  read: string,
): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3,
    uniforms: {
      source: { value: null },
      sourceSize: { value: new THREE.Vector2() },
    },
    vertexShader: `void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }`,
    fragmentShader: `
      uniform highp ${sourceType} source;
      uniform vec2 sourceSize;
      layout(location = 0) out highp uvec4 bounds;
      void main() {
        ivec2 origin = ivec2(gl_FragCoord.xy) * 8;
        uvec2 range = uvec2(floatBitsToUint(1.0), 0u);
        for (int y = 0; y < 8; y++) {
          for (int x = 0; x < 8; x++) {
            ivec2 pixel = origin + ivec2(x, y);
            if (any(greaterThanEqual(pixel, ivec2(sourceSize)))) continue;
            ${read}
            range = uvec2(min(range.x, value.x), max(range.y, value.y));
          }
        }
        bounds = uvec4(range, 0u, 0u);
      }`,
    depthTest: false,
    depthWrite: false,
    blending: THREE.NoBlending,
    toneMapped: false,
  });
}

/** Conservative depth bounds for 8x8 and 64x64 framebuffer tiles. */
export class BlackHoleDepthHierarchy {
  readonly fine = boundsTarget('black-hole-depth-fine');
  readonly coarse = boundsTarget('black-hole-depth-coarse');
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.Camera();
  // Empty pixels (depth 1) widen only the minimum.
  private readonly fromDepth = reduceMaterial(
    'sampler2D',
    `float depth = texelFetch(source, pixel, 0).x;
            uvec2 value = uvec2(floatBitsToUint(depth), depth < 1.0 ? floatBitsToUint(depth) : 0u);`,
  );
  private readonly fromBounds = reduceMaterial(
    'usampler2D',
    'uvec2 value = texelFetch(source, pixel, 0).rg;',
  );
  private readonly quad = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    this.fromDepth,
  );

  constructor() {
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);
  }

  // The lens program binds every layer's bounds to a usampler2D, including
  // layers that are empty this frame. Integer samplers need allocated storage.
  allocate(renderer: THREE.WebGLRenderer): void {
    renderer.initRenderTarget(this.fine);
    renderer.initRenderTarget(this.coarse);
  }

  // Called inside scene capture, which owns restoration of renderer state,
  // including autoClear: integer targets must not be cleared with floats.
  render(renderer: THREE.WebGLRenderer, source: THREE.WebGLRenderTarget): void {
    let { width, height } = source;
    let texture: THREE.Texture | null = source.depthTexture;
    for (const target of [this.fine, this.coarse]) {
      const material = target === this.fine ? this.fromDepth : this.fromBounds;
      material.uniforms.source.value = texture;
      material.uniforms.sourceSize.value.set(width, height);
      width = Math.ceil(width / 8);
      height = Math.ceil(height / 8);
      target.setSize(width, height);
      this.quad.material = material;
      renderer.setRenderTarget(target);
      renderer.render(this.scene, this.camera);
      texture = target.texture;
    }
  }

  dispose(): void {
    this.fine.dispose();
    this.coarse.dispose();
    this.quad.geometry.dispose();
    this.fromDepth.dispose();
    this.fromBounds.dispose();
  }
}
