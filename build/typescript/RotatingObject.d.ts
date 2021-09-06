import * as THREE from 'three';
import { SpaceObject } from './SpaceObject';
import type { Simulation } from './Simulation';
import type { SpaceObjectOptions } from './SpaceObject';
/**
 * This class simulates an object that spins according to provided rotational
 * parameters.
 */
export declare class RotatingObject extends SpaceObject {
    protected _obj: THREE.Object3D;
    protected _materials: THREE.Material[];
    private _objectIsRotatable;
    private _axisOfRotation?;
    constructor(id: string, options: SpaceObjectOptions, simulation: Simulation, autoInit?: boolean);
    init(): boolean;
    initRotation(): void;
    /**
     * Updates the object and its label positions for a given time.
     * @param {Number} jd JD date
     */
    update(jd: number, force?: boolean): void;
    /**
     * Gets the THREE.js objects that represent this SpaceObject.
     * @return {Array.<THREE.Object>} A list of THREE.js objects
     */
    get3jsObjects(): THREE.Object3D[];
    /**
     * Begin rotating this object.
     */
    startRotation(): void;
    /**
     * Stop rotation of this object.
     */
    stopRotation(): void;
}
