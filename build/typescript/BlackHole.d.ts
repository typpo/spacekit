import * as THREE from 'three';
import type { Coordinate3d } from './Coordinates';
import type { Simulation, SimulationObject } from './Simulation';
export interface BlackHoleOptions {
    /** Mass in solar masses. Required; controls all physical length/time scales. */
    massSolar: number;
    /** Center in AU. Default [0, 0, 0]. */
    position?: Coordinate3d;
    /** Normal to the accretion disk in scene coordinates. Default [0, 0, 1]. */
    diskNormal?: Coordinate3d;
    /** False for an isolated, dark black hole. */
    accretionDisk?: false | {
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
        /** Artistic animation multiplier, >= 0. Default 1; does not change Doppler shifts. */
        rotationSpeed?: number;
    };
    /** Display exposure, positive. Default 1. */
    exposure?: number;
    /** Default 'high': 1024 adaptive RK4 steps; 'low': 768 coarser steps. */
    quality?: 'low' | 'high';
    /**
     * Optional caller-owned equirectangular sky, with north at +Z and longitude
     * zero at +X (center of texture). Replaces the background with a lensed sky.
     * Use on only one black hole per scene; ordinary scene meshes are not lensed.
     */
    backgroundTexture?: THREE.Texture;
}
/**
 * A stationary Schwarzschild black hole, with GPU null-geodesic ray tracing.
 * Models light around an isolated non-spinning, uncharged mass; it does not
 * change Spacekit's Kepler orbits or simulate accretion hydrodynamics.
 * Requires WebGL EXT_frag_depth and highp fragment precision.
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
    constructor(id: string, options: BlackHoleOptions, simulation: Simulation);
    getId(): string;
    get3jsObjects(): THREE.Object3D[];
    /** Physical radii in AU, independent of the simulation's display scale. */
    getPhysicalRadii(): {
        eventHorizonAu: number;
        photonSphereAu: number;
        iscoAu: number;
        shadowImpactParameterAu: number;
    };
    setPosition(position: Coordinate3d): void;
    update(jd: number): void;
    /** Change the pattern's speed without a phase jump; leaves orbital Doppler shifts alone. */
    setRotationSpeed(value: number): void;
    /** Change the chosen outer gas boundary, in Schwarzschild radii. */
    setDiskOuterRadius(value: number): void;
    /** Adjust the atmosphere without recreating the disk or resetting its animation. */
    setDiskAspectRatio(value: number): void;
    setDiskEnabled(enabled: boolean): void;
    /** Called by Simulation.removeObject; caller-owned sky textures are preserved. */
    removalCleanup(): void;
    /** Remove from the scene and release GPU resources. Safe to call repeatedly. */
    dispose(): void;
}
