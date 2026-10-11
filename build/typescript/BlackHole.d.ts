import * as THREE from 'three';
import type { Coordinate3d } from './Coordinates';
import type { Simulation, SimulationObject } from './Simulation';
/** Optional accretion-disk appearance and animation settings. */
export interface AccretionDiskOptions {
    /** In Schwarzschild radii, at least 3 (the ISCO). Default 3. */
    innerRadius?: number;
    /** In Schwarzschild radii, greater than innerRadius. Default 12. */
    outerRadius?: number;
    /** Maximum mean midplane rest-frame temperature in Kelvin. Default 6500. */
    temperature?: number;
    /** Vertical optical depth of the emitting layer. Default 2. */
    opticalDepth?: number;
    /** RMS density height H / cylindrical radius, 0.02–0.3. Default 0.025. */
    aspectRatio?: number;
    /** Illustrative turbulent density/emission contrast, from 0 to 1. Default 0.65. */
    turbulence?: number;
    /** Disk animation multiplier, >= 0. Default 1; does not change Doppler shifts. */
    rotationSpeed?: number;
}
/** Physical radii in AU, independent of the simulation's display scale. */
export interface BlackHoleRadii {
    eventHorizonAu: number;
    photonSphereAu: number;
    iscoAu: number;
    shadowImpactParameterAu: number;
}
export interface BlackHoleOptions {
    /** Mass in solar masses. Required; controls all physical length/time scales. */
    massSolar: number;
    /** Center in AU. Default [0, 0, 0]. */
    position?: Coordinate3d;
    /** Normal to the accretion disk in scene coordinates. Default [0, 0, 1]. */
    diskNormal?: Coordinate3d;
    /** Omit for the default disk, or false to hide it. */
    accretionDisk?: AccretionDiskOptions | false;
    /** Display exposure, positive. Default 1. */
    exposure?: number;
    /** Default 'high': 1024 adaptive RK4 steps; 'low': 768 coarser steps. */
    quality?: 'low' | 'high';
    /**
     * Lens the camera image, including meshes, sprites, lines and particles.
     * Default false. Screen-space approximation for perspective cameras.
     * Requires WebGL 2; uses captured finite source distances.
     * Enable on at most one black hole per simulation.
     */
    lensScene?: boolean;
    /**
     * Optional caller-owned equirectangular sky, with north at +Z and longitude
     * zero at +X (center of texture). Replaces the background with a lensed sky.
     * Set colorSpace to THREE.SRGBColorSpace for display-color images.
     * Use on only one black hole per scene. Enable lensScene to also lens objects.
     */
    backgroundTexture?: THREE.Texture;
}
/**
 * A stationary Schwarzschild black hole, with GPU null-geodesic ray tracing.
 * Models light around an isolated non-spinning, uncharged mass; it does not
 * change Spacekit's Kepler orbits or simulate accretion hydrodynamics.
 * Requires WebGL 2 and highp fragment precision.
 */
export declare class BlackHole implements SimulationObject {
    private readonly id;
    private readonly simulation;
    private readonly unitsPerAu;
    private readonly radiusAu;
    private readonly epochJd;
    private animationSpeed;
    private animationOffsetSeconds;
    private readonly mesh;
    private disposed;
    private sceneCapture?;
    constructor(id: string, options: BlackHoleOptions, simulation: Simulation);
    getId(): string;
    get3jsObjects(): THREE.Object3D[];
    /** Physical radii in AU, independent of the simulation's display scale. */
    getPhysicalRadii(): BlackHoleRadii;
    setPosition(position: Coordinate3d): void;
    update(jd: number): void;
    /** Change the disk animation multiplier without a phase jump; does not spin the black hole. */
    setRotationSpeed(value: number): void;
    /** Change the chosen outer gas boundary, in Schwarzschild radii. */
    setDiskOuterRadius(value: number): void;
    /** Adjust the atmosphere without recreating the disk or resetting its animation. */
    setDiskAspectRatio(value: number): void;
    setDiskEnabled(enabled: boolean): void;
    /** Toggle scene distortion without changing the disk, sky or simulation time. */
    setSceneLensingEnabled(enabled: boolean): void;
    private assertSceneLensingAvailable;
    /** Called by Simulation.removeObject; caller-owned sky textures are preserved. */
    removalCleanup(): void;
    /** Remove from the scene and release GPU resources. Safe to call repeatedly. */
    dispose(): void;
}
