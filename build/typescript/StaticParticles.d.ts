import * as THREE from 'three';
import type { Coordinate3d } from './Coordinates';
import type { Simulation, SimulationObject } from './Simulation';
interface StaticParticleOptions {
    defaultColor: number;
    size: number;
}
/**
 * Simulates a static particle field in whichever base reference the simulation is in.
 */
export declare class StaticParticles implements SimulationObject {
    private id;
    private options;
    private simulation;
    private points;
    private pointObject?;
    /**
     *
     * @param {String} id Unique ID for this object
     * @param {Array.Array.<Number>} points an array of X,Y,Z cartesian points, one for each particle
     * @param {Object} options container
     * @param {Color} options.defaultColor color to use for all particles can be a THREE string color name or hex value
     * @param {Number} options.size the size of each particle
     * @param {Simulation} simulation Simulation object
     */
    constructor(id: string, points: Coordinate3d[], options: StaticParticleOptions, simulation: Simulation);
    init(): void;
    /**
     * A list of THREE.js objects that are used to compose the particle system.
     * @return {THREE.Object3D} Point geometry
     */
    get3jsObjects(): THREE.Object3D[];
    /**
     * Get the unique ID of this object.
     * @return {String} id
     */
    getId(): string;
    update(): void;
}
export {};
