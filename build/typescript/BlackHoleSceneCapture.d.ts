import * as THREE from 'three';
import { BlackHoleDepthHierarchy } from './BlackHoleDepthHierarchy';
/** Camera-clipped color/depth layers for screen-space scene lensing. */
export declare class BlackHoleSceneCapture {
    readonly background: THREE.WebGLRenderTarget<THREE.Texture<unknown, THREE.TextureEventMap>>;
    readonly transparent: THREE.WebGLRenderTarget<THREE.Texture<unknown, THREE.TextureEventMap>>;
    readonly surfaces: THREE.WebGLRenderTarget<THREE.Texture<unknown, THREE.TextureEventMap>>;
    readonly foreground: THREE.WebGLRenderTarget<THREE.Texture<unknown, THREE.TextureEventMap>>;
    readonly clearColor: THREE.Color;
    readonly viewProjection: THREE.Matrix4;
    readonly depthRange: THREE.Vector2;
    readonly size: THREE.Vector2;
    readonly backgroundBounds: BlackHoleDepthHierarchy;
    readonly transparentBounds: BlackHoleDepthHierarchy;
    readonly surfaceBounds: BlackHoleDepthHierarchy;
    depthHierarchyEnabled: boolean;
    hasDepthHierarchy: boolean;
    hasTransparent: boolean;
    hasSurfaces: boolean;
    private readonly camera;
    private readonly viewport;
    private readonly compositeScene;
    private readonly composite;
    constructor();
    private clipCamera;
    render(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera, planeDistance: number): void;
    dispose(): void;
}
