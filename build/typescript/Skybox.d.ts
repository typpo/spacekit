import * as THREE from 'three';
import type { Simulation, SimulationObject } from './Simulation';
export interface SkyboxOptions {
    textureUrl: string;
    basePath?: string;
    /**
     * Native seam offset of the source equirectangular map, in degrees.
     * Use 180 when the image is centered on longitude 0 instead of placing
     * longitude 0 at the left edge.
     */
    longitudeOffsetDeg?: number;
    /**
     * Astronomical all-sky maps commonly increase longitude toward the left.
     * Set this when the source image uses that handedness.
     */
    mirrorLongitude?: boolean;
    opacity?: number;
}
export declare function getSkyboxOrientationTransform(options: Pick<SkyboxOptions, 'longitudeOffsetDeg' | 'mirrorLongitude'>, obliquity?: number): THREE.Matrix4;
/**
 * A class that adds a skybox (technically a skysphere) to a visualization.
 */
export declare class Skybox implements SimulationObject {
    private simulation;
    private context;
    private id;
    private options;
    private mesh?;
    /**
     * @param {Object} options Options
     * @param {String} options.textureUrl Texture to use
     * @param {String} options.basePath Base path to simulation supporting files
     * @param {Simulation} simulation Simulation object
     */
    constructor(options: SkyboxOptions, simulation: Simulation);
    /**
     * @private
     */
    private init;
    /**
     * A list of THREE.js objects that are used to compose the skybox.
     * @return {THREE.Object3D[]} Skybox mesh
     */
    get3jsObjects(): THREE.Object3D[];
    /**
     * Get the unique ID of this object.
     * @return {String} id
     */
    getId(): string;
    update(): void;
}
/**
 * Preset skybox objects that you can use to add a skybox to your
 * visualization.
 * @example
 * ```
 * const skybox = viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);
 * ```
 */
export declare const SkyboxPresets: Record<string, SkyboxOptions>;
