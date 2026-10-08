import * as THREE from 'three';
/** Split the camera image at the lens plane, preserving transparent layers. */
export declare class BlackHoleSceneCapture {
    readonly background: THREE.WebGLRenderTarget;
    readonly foreground: THREE.WebGLRenderTarget;
    readonly clearColor: THREE.Color;
    private readonly viewport;
    private readonly planeDepth;
    private readonly materials;
    private layerMaterial;
    render(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera, planeDepth: number): void;
    dispose(): void;
}
