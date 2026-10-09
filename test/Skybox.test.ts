import * as THREE from 'three';

import { transformGalacticToEcliptic } from '../src/CoordinateTransforms';
import {
  getSkyboxOrientationTransform,
  Skybox,
  SkyboxPresets,
} from '../src/Skybox';

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

describe('Skybox sky layer', () => {
  test('is marked as distant sky that writes no depth', () => {
    const load = jest
      .spyOn(THREE.TextureLoader.prototype, 'load')
      .mockReturnValue(new THREE.Texture());
    const addObject = jest.fn();
    const simulation = {
      getContext: () => ({ options: { basePath: '' } }),
      addObject,
    };
    // @ts-ignore A minimal simulation is enough to build the mesh.
    const skybox = new Skybox({ textureUrl: 'sky.png' }, simulation);
    const [mesh] = skybox.get3jsObjects() as THREE.Mesh[];
    expect(mesh.userData.spacekitBackground).toBe(true);
    expect((mesh.material as THREE.Material).depthWrite).toBe(false);
    expect(mesh.renderOrder).toBe(-1);
    expect(addObject).toHaveBeenCalledWith(skybox, true);
    load.mockRestore();
  });
});
