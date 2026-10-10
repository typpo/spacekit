import * as THREE from 'three';
/** Conservative depth bounds for 8x8 and 64x64 framebuffer tiles. */
export declare class BlackHoleDepthHierarchy {
    readonly fine: THREE.WebGLRenderTarget<THREE.Texture<unknown, THREE.TextureEventMap>>;
    readonly coarse: THREE.WebGLRenderTarget<THREE.Texture<unknown, THREE.TextureEventMap>>;
    private readonly scene;
    private readonly camera;
    private readonly quad;
    constructor();
    render(renderer: THREE.WebGLRenderer, depth: THREE.Texture, width: number, height: number): void;
    dispose(): void;
}
