import * as THREE from 'three';

import Coordinates, { Coordinate3d } from './Coordinates';

type Matrix3 = [Coordinate3d, Coordinate3d, Coordinate3d];

// IAU 1958 galactic-to-equatorial frame relation in J2000 coordinates.
const EQUATORIAL_TO_GALACTIC_MATRIX: Matrix3 = [
  [-0.0548755604, -0.8734370902, -0.4838350155],
  [0.4941094279, -0.44482963, 0.7469822445],
  [-0.867666149, -0.1980763734, 0.4559837762],
];

function transpose3(matrix: Matrix3): Matrix3 {
  return [
    [matrix[0][0], matrix[1][0], matrix[2][0]],
    [matrix[0][1], matrix[1][1], matrix[2][1]],
    [matrix[0][2], matrix[1][2], matrix[2][2]],
  ];
}

function multiplyMatrix3Vector(
  matrix: Matrix3,
  vector: Coordinate3d,
): Coordinate3d {
  return [
    matrix[0][0] * vector[0] +
      matrix[0][1] * vector[1] +
      matrix[0][2] * vector[2],
    matrix[1][0] * vector[0] +
      matrix[1][1] * vector[1] +
      matrix[1][2] * vector[2],
    matrix[2][0] * vector[0] +
      matrix[2][1] * vector[1] +
      matrix[2][2] * vector[2],
  ];
}

function makeMatrix4From3x3(matrix: Matrix3): THREE.Matrix4 {
  return new THREE.Matrix4().set(
    matrix[0][0],
    matrix[0][1],
    matrix[0][2],
    0,
    matrix[1][0],
    matrix[1][1],
    matrix[1][2],
    0,
    matrix[2][0],
    matrix[2][1],
    matrix[2][2],
    0,
    0,
    0,
    0,
    1,
  );
}

function getEquatorialToEclipticTransform(obliquity: number): THREE.Matrix4 {
  return new THREE.Matrix4().set(
    1,
    0,
    0,
    0,
    0,
    Math.cos(obliquity),
    Math.sin(obliquity),
    0,
    0,
    -Math.sin(obliquity),
    Math.cos(obliquity),
    0,
    0,
    0,
    0,
    1,
  );
}

const GALACTIC_TO_EQUATORIAL_MATRIX = transpose3(
  EQUATORIAL_TO_GALACTIC_MATRIX,
);

export function transformGalacticToEcliptic(
  vector: Coordinate3d,
  obliquity: number = Coordinates.getObliquity(),
): Coordinate3d {
  const equatorialVector = multiplyMatrix3Vector(
    GALACTIC_TO_EQUATORIAL_MATRIX,
    vector,
  );

  return Coordinates.equatorialToEcliptic_Cartesian(
    equatorialVector[0],
    equatorialVector[1],
    equatorialVector[2],
    obliquity,
  );
}

export function getGalacticToEclipticTransform(
  obliquity: number = Coordinates.getObliquity(),
): THREE.Matrix4 {
  return getEquatorialToEclipticTransform(obliquity).multiply(
    makeMatrix4From3x3(GALACTIC_TO_EQUATORIAL_MATRIX),
  );
}
