import type { Vector3 } from 'three';
import type { Coordinate3d, CoordinateXYZ } from './Coordinates';
/**
 * Set the number of units per AU.
 */
export declare function setScaleFactor(val: number): void;
/**
 * Get the number of units per AU.
 */
export declare function getScaleFactor(): number;
export declare function rescalePos(pos: CoordinateXYZ): CoordinateXYZ;
export declare function rescaleArray(XYZ: Coordinate3d): Coordinate3d;
export declare function rescaleXYZ(X: number, Y: number, Z: number): Coordinate3d;
export declare function rescaleVector(vec: Vector3): Vector3;
export declare function rescaleNumber(x: number): number;
