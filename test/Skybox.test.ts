import * as THREE from 'three';

import { transformGalacticToEcliptic } from '../src/CoordinateTransforms';
import { getSkyboxOrientationTransform, SkyboxPresets } from '../src/Skybox';

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
    expectVectorToEqual(
      transformVector([0, 1, 0]),
      transformGalacticToEcliptic([0, 0, 1]),
    );
  });

  test('maps the center of a bulge-centered galactic map to galactic longitude zero', () => {
    expectVectorToEqual(
      transformVector([1, 0, 0], {
        longitudeOffsetDeg: 180,
        mirrorLongitude: true,
      }),
      transformGalacticToEcliptic([1, 0, 0]),
    );
  });

  test('applies longitude offsets in the texture native frame', () => {
    expectVectorToEqual(
      transformVector([-1, 0, 0], {
        longitudeOffsetDeg: 90,
      }),
      transformGalacticToEcliptic([0, 1, 0]),
    );
  });

  test('can mirror native longitudes before mapping to scene space', () => {
    expectVectorToEqual(
      transformVector([0, 0, 1], {
        mirrorLongitude: true,
      }),
      transformGalacticToEcliptic([0, -1, 0]),
    );
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
