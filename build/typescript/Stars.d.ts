import * as THREE from 'three';
import type { Simulation, SimulationObject } from './Simulation';
interface StarOptions {
    minSize?: number;
}
/**
 * Builds a starry background that is accurate for the Earth's position in
 * space.
 */
export declare class Stars implements SimulationObject {
    private _id;
    private _options;
    private _simulation;
    private _context;
    private _stars?;
    /**
     * @param {Number} options.minSize The size of the smallest star.
     * Defaults to 0.75
     */
    constructor(options: StarOptions, simulation: Simulation);
    init(): void;
    /**
     * A list of THREE.js objects that are used to compose this object
     * @return {THREE.Object3D[]} Star objects
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
