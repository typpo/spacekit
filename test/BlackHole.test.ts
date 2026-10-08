import * as THREE from 'three';
import { BlackHole } from '../src/BlackHole';
import {
  schwarzschildRadiusAu,
  schwarzschildOrbitalPeriodSeconds,
  SCHWARZSCHILD_CRITICAL_IMPACT,
  stepSchwarzschildRay,
  METERS_PER_AU,
} from '../src/BlackHolePhysics';
import { setScaleFactor } from '../src/Scale';
import { BlackHoleSceneCapture } from '../src/BlackHoleSceneCapture';

function trace(impact: number, step = 0.02) {
  let u = 0;
  let v = 1 / impact;
  let phi = 0;
  let maxError = 0;
  for (let i = 0; i < 512; i++) {
    const [nextU, nextV] = stepSchwarzschildRay(u, v, step);
    maxError = Math.max(
      maxError,
      Math.abs(nextV ** 2 + nextU ** 2 - nextU ** 3 - 1 / impact ** 2),
    );
    if (nextU >= 1) return { captured: true, phi, maxError };
    if (nextU < 0)
      return { captured: false, phi: phi + (step * u) / (u - nextU), maxError };
    u = nextU;
    v = nextV;
    phi += step;
  }
  throw new Error('Unresolved ray');
}

function simulation(unitsPerAu = 1) {
  return {
    addObject: jest.fn(),
    removeObject: jest.fn((object) => object.removalCleanup()),
    getJd: () => 2451545,
    getContext: () => ({
      options: { unitsPerAu },
      objects: {
        renderer: {
          extensions: { has: () => true },
          capabilities: { getMaxPrecision: () => 'highp' },
        },
      },
    }),
  } as any;
}

describe('Schwarzschild physics', () => {
  test('solar horizon, photon sphere, ISCO, and shadow have the expected scales', () => {
    const bh = new BlackHole('bh', { massSolar: 1 }, simulation());
    const radii = bh.getPhysicalRadii();
    expect(radii.eventHorizonAu * METERS_PER_AU).toBeCloseTo(2953.25008, 4);
    expect(radii.photonSphereAu / radii.eventHorizonAu).toBe(1.5);
    expect(radii.iscoAu / radii.eventHorizonAu).toBe(3);
    expect(radii.shadowImpactParameterAu / radii.eventHorizonAu).toBeCloseTo(
      2.598076211,
      9,
    );
    expect(schwarzschildRadiusAu(4e6) / schwarzschildRadiusAu(1)).toBeCloseTo(
      4e6,
    );
  });

  test('circular geodesic period at the ISCO scales linearly with mass', () => {
    expect(schwarzschildOrbitalPeriodSeconds(1, 3)).toBeCloseTo(
      0.0004548375056,
      10,
    );
    expect(schwarzschildOrbitalPeriodSeconds(4e6, 3)).toBeCloseTo(
      1819.35002,
      3,
    );
    expect(() => schwarzschildOrbitalPeriodSeconds(1, 2.9)).toThrow(/Stable/);
  });

  test('resolves the capture boundary at the critical impact parameter', () => {
    expect(trace(SCHWARZSCHILD_CRITICAL_IMPACT * 0.999).captured).toBe(true);
    expect(trace(SCHWARZSCHILD_CRITICAL_IMPACT * 1.001).captured).toBe(false);
  });

  test('recovers weak-field Einstein deflection 2 rs / b', () => {
    const ray = trace(1000);
    expect(ray.captured).toBe(false);
    expect(Math.abs((ray.phi - Math.PI) / (2 / 1000) - 1)).toBeLessThan(0.003);
  });

  test('preserves the null invariant and converges under step refinement', () => {
    const coarse = trace(3, 0.04);
    const fine = trace(3);
    expect(fine.maxError).toBeLessThan(1e-8);
    expect(fine.maxError).toBeLessThan(coarse.maxError / 8);
    expect(Math.abs(coarse.phi - fine.phi)).toBeLessThan(1e-5);
  });

  test('the photon sphere is an unstable circular null orbit', () => {
    let state: [number, number] = [2 / 3, 0];
    for (let i = 0; i < 500; i++) state = stepSchwarzschildRay(...state, 0.02);
    expect(state[0]).toBeCloseTo(2 / 3, 10);
    expect(state[1]).toBeCloseTo(0, 10);
  });
});

describe('BlackHole scene integration', () => {
  test('scene lensing has one owner, supports toggles, and releases ownership on removal', () => {
    const sim = simulation();
    const first = new BlackHole(
      'first',
      { massSolar: 4e6, lensScene: true },
      sim,
    );
    const second = new BlackHole('second', { massSolar: 4e6 }, sim);
    const registered = sim.addObject.mock.calls.length;
    expect(
      () => new BlackHole('third', { massSolar: 4e6, lensScene: true }, sim),
    ).toThrow(/Only one/);
    expect(sim.addObject).toHaveBeenCalledTimes(registered);
    expect(() => second.setSceneLensingEnabled(true)).toThrow(/Only one/);
    first.setSceneLensingEnabled(false);
    second.setSceneLensingEnabled(true);
    second.dispose();
    first.setSceneLensingEnabled(true);
    const capture = (first as any).sceneCapture;
    const dispose = jest.spyOn(capture.background, 'dispose');
    first.dispose();
    first.dispose();
    expect(dispose).toHaveBeenCalledTimes(1);
  });

  test('scene lensing works without a depth-texture extension', () => {
    const sim = simulation();
    sim.getContext = () => ({
      options: {},
      objects: {
        renderer: {
          extensions: { has: (name: string) => name !== 'WEBGL_depth_texture' },
          capabilities: { getMaxPrecision: () => 'highp' },
        },
      },
    });
    const hole = new BlackHole('bh', { massSolar: 4e6, lensScene: true }, sim);
    expect(sim.addObject).toHaveBeenCalledWith(hole);
    hole.dispose();
  });

  test('a failed scene capture restores caller materials and renderer state', () => {
    const capture = new BlackHoleSceneCapture();
    const scene = new THREE.Scene();
    const material = new THREE.SpriteMaterial({
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const sprite = new THREE.Sprite(material);
    const hole = new THREE.Object3D();
    hole.userData.spacekitBlackHole = true;
    scene.add(sprite, hole);
    const target = new THREE.WebGLRenderTarget(10, 20);
    let currentTarget = target;
    let clearColor = new THREE.Color(0x123456);
    let clearAlpha = 0.7;
    let renders = 0;
    const renderer = {
      autoClear: false,
      xr: { enabled: true },
      shadowMap: { autoUpdate: true },
      getRenderTarget: () => currentTarget,
      setRenderTarget: (next: THREE.WebGLRenderTarget) =>
        (currentTarget = next),
      getActiveCubeFace: () => 0,
      getActiveMipmapLevel: () => 0,
      getClearAlpha: () => clearAlpha,
      getClearColor: (color: THREE.Color) => color.copy(clearColor),
      setClearColor: (color: THREE.ColorRepresentation, alpha: number) => {
        clearColor = new THREE.Color(color);
        clearAlpha = alpha;
      },
      getCurrentViewport: (viewport: THREE.Vector4) =>
        viewport.set(0, 0, 10, 20),
      state: {
        buffers: {
          color: { setMask: jest.fn() },
          depth: { setMask: jest.fn() },
        },
      },
      clear: jest.fn(),
      render: () => {
        if (++renders === 2) throw new Error('capture failed');
      },
    };
    expect(() =>
      capture.render(
        renderer as any,
        scene,
        new THREE.PerspectiveCamera(),
        0.5,
      ),
    ).toThrow('capture failed');
    expect(currentTarget).toBe(target);
    expect(clearColor.getHex()).toBe(0x123456);
    expect(clearAlpha).toBe(0.7);
    expect(renderer.autoClear).toBe(false);
    expect(renderer.xr.enabled).toBe(true);
    expect(renderer.shadowMap.autoUpdate).toBe(true);
    expect(sprite.material).toBe(material);
    expect(material.blending).toBe(THREE.AdditiveBlending);
    expect(material.depthWrite).toBe(false);
    expect(hole.visible).toBe(true);
    capture.dispose();
    target.dispose();
  });

  test.each([0, -1, NaN, Infinity])('rejects invalid mass %p', (massSolar) => {
    const sim = simulation();
    expect(() => new BlackHole('bh', { massSolar }, sim)).toThrow(/massSolar/);
    expect(sim.addObject).not.toHaveBeenCalled();
  });

  test.each([
    { accretionDisk: { innerRadius: 2 } },
    { accretionDisk: { outerRadius: 3 } },
    { accretionDisk: { temperature: NaN } },
    { accretionDisk: { opticalDepth: 0 } },
    { accretionDisk: { opticalDepth: Infinity } },
    { accretionDisk: { aspectRatio: 0 } },
    { accretionDisk: { aspectRatio: 0.01 } },
    { accretionDisk: { aspectRatio: 0.31 } },
    { accretionDisk: { aspectRatio: NaN } },
    { accretionDisk: { turbulence: -0.1 } },
    { accretionDisk: { turbulence: 1.1 } },
    { accretionDisk: { turbulence: NaN } },
    { accretionDisk: { rotationSpeed: -1 } },
    { accretionDisk: { rotationSpeed: Infinity } },
    { accretionDisk: { rotationSpeed: NaN } },
    { position: [0, Infinity, 0] },
    { diskNormal: [0, 0, 0] },
    { exposure: 0 },
    { quality: 'invalid' },
  ])('rejects invalid options %p', (options) => {
    expect(
      () =>
        new BlackHole('bh', { massSolar: 1, ...options } as any, simulation()),
    ).toThrow();
  });

  test('accepts supported scale-height bounds without changing the physical radii', () => {
    for (const aspectRatio of [0.02, 0.06, 0.3]) {
      const hole = new BlackHole(
        'bh',
        { massSolar: 4e6, accretionDisk: { aspectRatio } },
        simulation(),
      );
      const mesh = hole.get3jsObjects()[0] as THREE.Mesh;
      expect(
        (mesh.material as THREE.ShaderMaterial).uniforms.diskAspectRatio.value,
      ).toBe(aspectRatio);
      expect(hole.getPhysicalRadii().eventHorizonAu).toBe(
        schwarzschildRadiusAu(4e6),
      );
    }
  });

  test('uses the owning simulation scale, supports moving, and keeps mass-derived dimensions', () => {
    setScaleFactor(999);
    const sim = simulation(100);
    const bh = new BlackHole(
      'bh',
      { massSolar: 4e6, position: [1, 2, 3] },
      sim,
    );
    const mesh = bh.get3jsObjects()[0] as THREE.Mesh;
    expect(mesh.position.toArray()).toEqual([100, 200, 300]);
    bh.setPosition([-1, 0, 2]);
    expect(mesh.position.toArray()).toEqual([-100, 0, 200]);
    expect(
      (mesh.material as THREE.ShaderMaterial).uniforms.horizonRadius.value,
    ).toBe(bh.getPhysicalRadii().eventHorizonAu * 100);
    expect(sim.addObject).toHaveBeenCalledWith(bh);
    setScaleFactor(1);
  });

  test('uses Julian time and handles scrubbing backward deterministically', () => {
    const bh = new BlackHole(
      'bh',
      { massSolar: 1, accretionDisk: false },
      simulation(),
    );
    const mesh = bh.get3jsObjects()[0] as THREE.Mesh;
    const uniforms = (mesh.material as THREE.ShaderMaterial).uniforms;
    expect(uniforms.diskEnabled.value).toBe(false);
    bh.update(2451545.5);
    expect(uniforms.timeSeconds.value).toBe(43200);
    bh.update(2451544.5);
    expect(uniforms.timeSeconds.value).toBe(-43200);
  });

  test('changes artistic speed continuously and supports freezing and backward scrubbing', () => {
    const sim = simulation();
    let jd = 2451545;
    sim.getJd = () => jd;
    const hole = new BlackHole(
      'bh',
      { massSolar: 4e6, accretionDisk: { rotationSpeed: 200 } },
      sim,
    );
    const mesh = hole.get3jsObjects()[0] as THREE.Mesh;
    const uniforms = (mesh.material as THREE.ShaderMaterial).uniforms;
    jd += 0.001;
    hole.update(jd);
    const phase = uniforms.timeSeconds.value;
    const physicalTime = (jd - 2451545) * 86400;
    expect(phase).toBeCloseTo(physicalTime * 200, 5);
    hole.setRotationSpeed(1000);
    expect(uniforms.timeSeconds.value).toBeCloseTo(phase, 5);
    const changedAt = jd;
    jd += 0.001;
    hole.update(jd);
    expect(uniforms.timeSeconds.value).toBeCloseTo(
      phase + (jd - changedAt) * 86400 * 1000,
      5,
    );
    jd = changedAt;
    hole.update(jd);
    expect(uniforms.timeSeconds.value).toBeCloseTo(phase, 5);
    hole.setRotationSpeed(0);
    jd += 1;
    hole.update(jd);
    expect(uniforms.timeSeconds.value).toBeCloseTo(phase, 5);
    expect(() => hole.setRotationSpeed(NaN)).toThrow(/rotationSpeed/);
    expect(uniforms.timeSeconds.value).toBeCloseTo(phase, 5);
  });

  test('edits disk geometry without replacing resources or restarting animation', () => {
    const hole = new BlackHole('bh', { massSolar: 4e6 }, simulation());
    const mesh = hole.get3jsObjects()[0] as THREE.Mesh;
    const material = mesh.material as THREE.ShaderMaterial;
    hole.update(2451545.01);
    const phase = material.uniforms.timeSeconds.value;
    hole.setDiskOuterRadius(100);
    hole.setDiskAspectRatio(0.06);
    hole.setDiskEnabled(false);
    hole.setDiskEnabled(true);
    expect(hole.get3jsObjects()[0]).toBe(mesh);
    expect(mesh.material).toBe(material);
    expect(material.uniforms.timeSeconds.value).toBe(phase);
    expect(material.uniforms.diskOuter.value).toBe(100);
    for (const outer of [0, 3, NaN, Infinity]) {
      expect(() => hole.setDiskOuterRadius(outer)).toThrow(/outerRadius/);
      expect(material.uniforms.diskOuter.value).toBe(100);
    }
    expect(() => hole.setDiskAspectRatio(0.5)).toThrow(/aspectRatio/);
    expect(material.uniforms.diskAspectRatio.value).toBe(0.06);
  });

  test('refreshes camera uniforms before rendering even while simulation time is paused', () => {
    const bh = new BlackHole(
      'bh',
      { massSolar: 1, diskNormal: [0, 1, 0] },
      simulation(),
    );
    const mesh = bh.get3jsObjects()[0] as THREE.Mesh;
    const camera = new THREE.PerspectiveCamera(50, 2, 0.01, 100);
    camera.position.set(1, 2, 3);
    camera.updateMatrixWorld();
    mesh.updateMatrixWorld();
    mesh.onBeforeRender(
      null as any,
      null as any,
      camera,
      null as any,
      null as any,
      null as any,
    );
    const uniforms = (mesh.material as THREE.ShaderMaterial).uniforms;
    expect(uniforms.cameraWorld.value.equals(camera.matrixWorld)).toBe(true);
    const normal = new THREE.Vector3(0, 0, 1).applyMatrix3(
      uniforms.diskToWorld.value,
    );
    expect(normal.distanceTo(new THREE.Vector3(0, 1, 0))).toBeLessThan(1e-10);
  });

  test('removal disposes owned resources once and preserves the caller sky texture', () => {
    const texture = new THREE.Texture();
    const bh = new BlackHole(
      'bh',
      { massSolar: 1, backgroundTexture: texture },
      simulation(),
    );
    const mesh = bh.get3jsObjects()[0] as THREE.Mesh;
    const geometryDispose = jest.spyOn(mesh.geometry, 'dispose');
    const materialDispose = jest.spyOn(
      mesh.material as THREE.Material,
      'dispose',
    );
    const textureDispose = jest.spyOn(texture, 'dispose');
    bh.dispose();
    bh.dispose();
    expect(geometryDispose).toHaveBeenCalledTimes(1);
    expect(materialDispose).toHaveBeenCalledTimes(1);
    expect(textureDispose).not.toHaveBeenCalled();
  });
});
