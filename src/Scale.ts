import type { Vector3 } from 'three';

import type { Coordinate3d, CoordinateXYZ } from './Coordinates';

let scaleFactor = 1.0;

/**
 * Set the number of units per AU.
 */
export function setScaleFactor(val: number) {
  scaleFactor = val;
}

/**
 * Get the number of units per AU.
 */
export function getScaleFactor(): number {
  return scaleFactor;
}

export function rescalePos(pos: CoordinateXYZ): CoordinateXYZ {
  pos.x *= scaleFactor;
  pos.y *= scaleFactor;
  pos.z *= scaleFactor;
  return pos;
}

export function rescaleArray(XYZ: Coordinate3d): Coordinate3d {
  return [XYZ[0] * scaleFactor, XYZ[1] * scaleFactor, XYZ[2] * scaleFactor];
}

export function rescaleXYZ(X: number, Y: number, Z: number): Coordinate3d {
  return [X * scaleFactor, Y * scaleFactor, Z * scaleFactor];
}

export function rescaleVector(vec: Vector3): Vector3 {
  return vec.multiplyScalar(scaleFactor);
}

export function rescaleNumber(x: number): number {
  return scaleFactor * x;
}
