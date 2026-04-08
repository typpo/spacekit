import * as THREE from 'three';
import { Coordinate3d } from './Coordinates';
export declare function transformGalacticToEcliptic(vector: Coordinate3d, obliquity?: number): Coordinate3d;
export declare function getGalacticToEclipticTransform(obliquity?: number): THREE.Matrix4;
