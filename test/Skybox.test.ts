import * as THREE from 'three';

import Coordinates from '../src/Coordinates';
import { getSkyboxOrientationTransform, SkyboxPresets } from '../src/Skybox';

const EQUATORIAL_TO_GALACTIC_MATRIX = [
  [-0.0548755604, -0.8734370902, -0.4838350155],
  [0.4941094279, -0.44482963, 0.7469822445],
  [-0.867666149, -0.1980763734, 0.4559837762],
];

function transpose3(matrix: number[][]): number[][] {
  return matrix[0].map((_, colIdx) => matrix.map((row) => row[colIdx]));
}

function multiplyMatrixVector(
  matrix: number[][],
  vector: [number, number, number],
): [number, number, number] {
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

function makeMatrix4From3x3(matrix: number[][]): THREE.Matrix4 {
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

function getExpectedSkyboxTransform(
  options: { longitudeOffsetDeg?: number; mirrorLongitude?: boolean } = {},
) {
  const obliquity = Coordinates.getObliquity();
  const nativeTextureAdjustment = new THREE.Matrix4();

  if (options.longitudeOffsetDeg) {
    nativeTextureAdjustment.multiply(
      new THREE.Matrix4().makeRotationZ(
        (options.longitudeOffsetDeg * Math.PI) / 180,
      ),
    );
  }

  if (options.mirrorLongitude) {
    nativeTextureAdjustment.multiply(new THREE.Matrix4().makeScale(1, -1, 1));
  }

  const galacticToEquatorial = makeMatrix4From3x3(
    transpose3(EQUATORIAL_TO_GALACTIC_MATRIX),
  );
  const equatorialToEcliptic = new THREE.Matrix4().set(
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
  const astronomicalProjection = new THREE.Matrix4()
    .makeRotationX(Math.PI / 2)
    .multiply(new THREE.Matrix4().makeRotationY(Math.PI));

  return equatorialToEcliptic
    .multiply(galacticToEquatorial)
    .multiply(nativeTextureAdjustment)
    .multiply(astronomicalProjection);
}

function transformVector(
  vector: [number, number, number],
  options: { longitudeOffsetDeg?: number; mirrorLongitude?: boolean } = {},
) {
  return new THREE.Vector3(...vector).applyMatrix4(
    getSkyboxOrientationTransform(options),
  );
}

function expectVectorToEqual(
  actual: THREE.Vector3,
  expected: [number, number, number],
) {
  expect(actual.x).toBeCloseTo(expected[0], 10);
  expect(actual.y).toBeCloseTo(expected[1], 10);
  expect(actual.z).toBeCloseTo(expected[2], 10);
}

describe('Skybox orientation transforms', () => {
  test('maps galactic north into the scene ecliptic frame', () => {
    const transformedPole = transformVector([0, 1, 0]);
    const galacticNorthInEquatorial = multiplyMatrixVector(
      transpose3(EQUATORIAL_TO_GALACTIC_MATRIX),
      [0, 0, 1],
    );
    const expectedPole = Coordinates.equatorialToEcliptic_Cartesian(
      galacticNorthInEquatorial[0],
      galacticNorthInEquatorial[1],
      galacticNorthInEquatorial[2],
      Coordinates.getObliquity(),
    );

    expect(transformedPole.x).toBeCloseTo(expectedPole[0], 10);
    expect(transformedPole.y).toBeCloseTo(expectedPole[1], 10);
    expect(transformedPole.z).toBeCloseTo(expectedPole[2], 10);
  });

  test('maps the center of a bulge-centered galactic map to galactic longitude zero', () => {
    const transformedCenter = new THREE.Vector3(1, 0, 0).applyMatrix4(
      getSkyboxOrientationTransform({
        longitudeOffsetDeg: 180,
        mirrorLongitude: true,
      }),
    );
    const galacticCenterInEquatorial = multiplyMatrixVector(
      transpose3(EQUATORIAL_TO_GALACTIC_MATRIX),
      [1, 0, 0],
    );
    const expectedCenter = Coordinates.equatorialToEcliptic_Cartesian(
      galacticCenterInEquatorial[0],
      galacticCenterInEquatorial[1],
      galacticCenterInEquatorial[2],
      Coordinates.getObliquity(),
    );

    expect(transformedCenter.x).toBeCloseTo(expectedCenter[0], 10);
    expect(transformedCenter.y).toBeCloseTo(expectedCenter[1], 10);
    expect(transformedCenter.z).toBeCloseTo(expectedCenter[2], 10);
  });

  test('applies longitude offsets in the texture native frame', () => {
    const rotated = new THREE.Vector3(-1, 0, 0).applyMatrix4(
      getSkyboxOrientationTransform({
        longitudeOffsetDeg: 90,
      }),
    );
    const expected = new THREE.Vector3(-1, 0, 0)
      .applyMatrix4(getExpectedSkyboxTransform({ longitudeOffsetDeg: 90 }));

    expectVectorToEqual(rotated, expected.toArray() as [
      number,
      number,
      number,
    ]);
  });

  test('can mirror native longitudes before mapping to scene space', () => {
    const mirrored = new THREE.Vector3(0, 1, 0).applyMatrix4(
      getSkyboxOrientationTransform({
        mirrorLongitude: true,
      }),
    );
    const expected = new THREE.Vector3(0, 1, 0)
      .applyMatrix4(getExpectedSkyboxTransform({ mirrorLongitude: true }));

    expectVectorToEqual(mirrored, expected.toArray() as [
      number,
      number,
      number,
    ]);
  });

  test('uses source-based galactic defaults for bundled skyboxes', () => {
    expect(SkyboxPresets.ESO_GIGAGALAXY.longitudeOffsetDeg).toBe(180);
    expect(SkyboxPresets.ESO_GIGAGALAXY.mirrorLongitude).toBe(true);
    expect(SkyboxPresets.ESO_LITE.longitudeOffsetDeg).toBe(180);
    expect(SkyboxPresets.ESO_LITE.mirrorLongitude).toBe(true);
    expect(SkyboxPresets.NASA_TYCHO.longitudeOffsetDeg).toBe(180);
    expect(SkyboxPresets.NASA_TYCHO.mirrorLongitude).toBe(true);
  });
});
