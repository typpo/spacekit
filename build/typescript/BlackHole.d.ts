import * as THREE from 'three';
import type { Coordinate3d } from './Coordinates';
import type { Simulation, SimulationObject } from './Simulation';
export interface BlackHoleOptions {
    /** Position of the black hole in AU. Defaults to the origin. */
    position?: Coordinate3d;
    /** Mass in solar masses. Defaults to 4.3 million (Sagittarius A*). */
    mass?: number;
    /**
     * Schwarzschild radius in AU. Overrides the radius derived from `mass`.
     * Useful for making small black holes visible at solar system scales.
     */
    schwarzschildRadius?: number;
    /**
     * Radius, in Schwarzschild radii, of the region in which light rays are
     * traced exactly. Defaults to 60.
     */
    lensRadius?: number;
    /**
     * Fraction of `lensRadius` beyond which the deflection is eased to zero so
     * the lensed image joins the rest of the scene seamlessly. Defaults to 0.5.
     */
    lensFalloffStart?: number;
    /** Normal of the accretion disk (spin axis). Defaults to [0, 0, 1]. */
    diskNormal?: Coordinate3d;
    accretionDisk?: {
        /** Show the accretion disk. Defaults to true. */
        enable?: boolean;
        /** Inner radius of the disk in rs. Defaults to the ISCO, 3 rs. */
        innerRadius?: number;
        /** Outer radius of the disk in rs. Defaults to 15. */
        outerRadius?: number;
        /**
         * Luminosity of the disk as a fraction of the Eddington luminosity, which
         * sets its temperature. Defaults to 0.1.
         */
        eddingtonRatio?: number;
        /**
         * Maximum local temperature of the disk in Kelvin, before redshift.
         * Overrides the temperature derived from the mass and `eddingtonRatio`.
         */
        peakTemperature?: number;
        /** Brightness multiplier applied before tone mapping. Defaults to 0.8. */
        exposure?: number;
        /**
         * Strength of turbulent structure in the disk gas, from 0 (a perfectly
         * smooth Novikov-Thorne disk) to 1. The pattern is carried around by
         * Keplerian differential rotation. Defaults to 0.6.
         */
        turbulence?: number;
        /**
         * Real-world seconds for gas at the inner edge of the disk to complete an
         * orbit. Outer gas moves slower, following Kepler's third law. The true
         * period is minutes to hours for supermassive black holes and
         * milliseconds for stellar ones, so this is a visual time scale.
         * Defaults to 8.
         */
        rotationPeriod?: number;
    };
    environmentMap?: {
        /**
         * Resolution of each face of the cube map of the surrounding scene that
         * is lensed by the black hole. Defaults to a value that matches the
         * screen resolution, up to 1024.
         */
        resolution?: number;
        /**
         * Re-render the surroundings every N frames. Set to 0 to only render
         * them on demand with `refreshEnvironment()`. Defaults to 1.
         */
        updateInterval?: number;
    };
}
/**
 * A non-rotating (Schwarzschild) black hole.
 *
 * The black hole is rendered by tracing light rays backward from the camera
 * along null geodesics of the Schwarzschild metric. This produces the black
 * hole's shadow, the photon ring, and gravitational lensing of everything
 * behind it, including Einstein rings and secondary images.
 *
 * It can optionally be surrounded by a thin, optically thick accretion disk
 * whose temperature follows the general relativistic Novikov-Thorne profile.
 * Disk light is shifted by gravitational redshift and relativistic Doppler
 * beaming, so the approaching side of the disk looks brighter and bluer.
 *
 * @example
 * ```
 * const blackHole = viz.createBlackHole({
 *   position: [0, 0, 0],
 *   mass: 4.3e6,
 *   diskNormal: [0, 0.2, 1],
 * });
 * ```
 */
export declare class BlackHole implements SimulationObject {
    private id;
    private options;
    private simulation;
    private context;
    private position;
    private schwarzschildRadiusScene;
    private lensRadius;
    private localFrame;
    private localFrameInverse;
    private mesh;
    private material;
    private cubeRenderTarget;
    private cubeCamera;
    private frameCount;
    private needsEnvironmentRefresh;
    private lastFrameTime;
    private lastJd;
    /**
     * @param {String} id Unique id of this object
     * @param {BlackHoleOptions} options Options
     * @param {Simulation} simulation Simulation object
     */
    constructor(id: string, options: BlackHoleOptions, simulation: Simulation);
    /**
     * Pick a cube map resolution whose pixels subtend about the same angle as
     * the screen's, so that lensed stars and sprites look like unlensed ones.
     * @private
     */
    private getDefaultEnvironmentResolution;
    /**
     * @private
     */
    private createMaterial;
    /**
     * Update the uniforms that depend on the camera used to render the scene.
     * @private
     */
    private updateCameraUniforms;
    /**
     * Called by the simulation right before each frame is drawn.
     */
    beforeRender(): void;
    /**
     * Re-render the surroundings of the black hole that are seen through its
     * gravitational lens.
     */
    refreshEnvironment(): void;
    /**
     * Move the black hole.
     * @param {Array.<Number>} pos Position in AU
     */
    setPosition(pos: Coordinate3d): void;
    /**
     * Get the position of the black hole, in scene units.
     * @return {THREE.Vector3} Position
     */
    getPosition(): THREE.Vector3;
    /**
     * @return {Number} Mass in solar masses
     */
    getMass(): number;
    /**
     * Standard gravitational parameter of the black hole, for use as the `GM`
     * of an `Ephem` orbiting it.
     * @return {Number} GM in m^3/s^2
     */
    getGM(): number;
    /**
     * @return {Number} Schwarzschild radius (event horizon radius) in AU
     */
    getSchwarzschildRadius(): number;
    /**
     * Get the unique ID of this object.
     * @return {String} id
     */
    getId(): string;
    /**
     * A list of THREE.js objects that are used to compose the black hole.
     * @return {THREE.Object3D[]} Objects
     */
    get3jsObjects(): THREE.Object3D[];
    update(): void;
    /**
     * Release GPU resources.
     */
    removalCleanup(): void;
}
