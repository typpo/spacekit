import * as THREE from 'three';
/** Camera-clipped color/depth layers for screen-space scene lensing. */
export declare class BlackHoleSceneCapture {
    readonly background: THREE.WebGLRenderTarget;
    readonly transparent: THREE.WebGLRenderTarget;
    readonly foreground: THREE.WebGLRenderTarget;
    readonly clearColor: THREE.Color;
    readonly viewProjection: THREE.Matrix4;
    readonly depthRange: THREE.Vector2;
    readonly size: THREE.Vector2;
    hasTransparent: boolean;
    private readonly camera;
    private readonly viewport;
    private readonly compositeScene;
    private readonly composite;
    constructor();
    private clipCamera;
    render(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera, planeDistance: number): void;
    dispose(): void;
}
