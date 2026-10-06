import {
  CRITICAL_IMPACT_PARAMETER,
  blackbodyColor,
  blackbodyLuminance,
  diskHalfThickness,
  diskHalfThicknessProfile,
  diskObservedIntensity,
  erf,
  gaussianSlabColumn,
  diskPeakTemperature,
  diskRedshiftFactor,
  diskTemperatureRatio,
  impactParameter,
  novikovThorneFlux,
  novikovThorneFluxNumeric,
  novikovThorneFluxPeak,
  residualDeflection,
  schwarzschildRadiusAu,
  schwarzschildRadiusKm,
  shakuraSunyaevStructure,
  traceGeodesic,
} from '../src/BlackHolePhysics';

// Fire a ray from far away along +x with impact parameter b (in rs).
function traceWithImpactParameter(b: number, boundaryRadius = 60) {
  return traceGeodesic([-1e9, b, 0], [1, 0, 0], boundaryRadius);
}

// Exact Schwarzschild deflection angle for impact parameter b (in rs):
// alpha = 2 * integral_0^u0 du / sqrt(1/b^2 - u^2 + u^3) - pi, where u0 = 1/r
// at closest approach.
function exactDeflection(b: number): number {
  const f = (u: number) => 1 / (b * b) - u * u + u * u * u;
  // Find the closest approach by bisection between u = 0 and the photon
  // sphere u = 2/3, where f first crosses zero.
  let lo = 0;
  let hi = 2 / 3;
  for (let i = 0; i < 200; i++) {
    const mid = (lo + hi) / 2;
    if (f(mid) > 0) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  const u0 = lo;
  // Substitute u = u0 (1 - t^2) to remove the endpoint singularity.
  const n = 200000;
  let integral = 0;
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n;
    integral += (2 * u0 * t) / Math.sqrt(f(u0 * (1 - t * t))) / n;
  }
  return 2 * integral - Math.PI;
}

describe('Schwarzschild radius', () => {
  test('is about 2.95 km per solar mass', () => {
    expect(schwarzschildRadiusKm(1)).toBeCloseTo(2.953, 3);
  });

  test('is about 0.085 AU for Sagittarius A*', () => {
    expect(schwarzschildRadiusAu(4.3e6)).toBeCloseTo(0.0849, 3);
  });
});

describe('light deflection', () => {
  test('matches the post-Newtonian expansion of the exact deflection', () => {
    for (const b of [20, 40]) {
      const result = traceWithImpactParameter(b);
      expect(result.captured).toBe(false);
      // Third-order expansion of the exact Schwarzschild deflection:
      // 4M/b + 15 pi M^2 / (4 b^2) + 128 M^3 / (3 b^3), with M = rs / 2.
      const expected =
        2 / b + (15 * Math.PI) / (16 * b * b) + 16 / (3 * b * b * b);
      expect(result.deflection).toBeCloseTo(expected, 3);
    }
  });

  test('matches the exact deflection integral in the strong field', () => {
    for (const b of [3, 4, 6, 10]) {
      const result = traceWithImpactParameter(b);
      expect(result.captured).toBe(false);
      expect(Math.abs(result.deflection - exactDeflection(b))).toBeLessThan(
        2e-3,
      );
    }
  });

  test('gives the same answer for any integration boundary', () => {
    const small = traceWithImpactParameter(20, 30).deflection;
    const large = traceWithImpactParameter(20, 240).deflection;
    expect(Math.abs(small - large)).toBeLessThan(5e-4);
  });

  test('bends light toward the black hole', () => {
    const result = traceWithImpactParameter(20);
    // Ray passes above (+y) the black hole, so it is bent toward -y.
    expect(result.direction[1]).toBeLessThan(0);
  });

  test('captures light inside the critical impact parameter', () => {
    expect(
      traceWithImpactParameter(CRITICAL_IMPACT_PARAMETER - 0.02).captured,
    ).toBe(true);
    expect(traceWithImpactParameter(1).captured).toBe(true);
    expect(
      traceWithImpactParameter(CRITICAL_IMPACT_PARAMETER + 0.02).captured,
    ).toBe(false);
  });

  test('deflects light by more than 180 degrees near the photon sphere', () => {
    const result = traceWithImpactParameter(CRITICAL_IMPACT_PARAMETER + 0.05);
    expect(result.captured).toBe(false);
    expect(result.direction[0]).toBeLessThan(0);
  });

  test('residual deflection of a full pass is 2 rs / b', () => {
    // Starting at the far side, heading in: the whole path remains.
    expect(residualDeflection([-1e9, 30, 0], [1, 0, 0])).toBeCloseTo(2 / 30, 6);
    // Starting at closest approach, half of the deflection remains.
    expect(residualDeflection([0, 30, 0], [1, 0, 0])).toBeCloseTo(1 / 30, 6);
  });

  test('impact parameter is recovered far from the hole', () => {
    expect(impactParameter([-1e5, 7, 0], [1, 0, 0])).toBeCloseTo(7, 3);
  });
});

describe('accretion disk', () => {
  test('closed-form Novikov-Thorne flux matches numerical integration', () => {
    for (const r of [3.5, 4.5, 8, 20]) {
      const exact = novikovThorneFlux(r);
      expect(novikovThorneFluxNumeric(r) / exact).toBeCloseTo(1, 3);
    }
  });

  test('flux vanishes at the ISCO and approaches the Newtonian disk far out', () => {
    expect(novikovThorneFlux(3)).toBe(0);
    const r = 1e6;
    // Shakura-Sunyaev flux with a zero-torque inner edge, units of M.
    const rm = 2 * r;
    const newtonian = (3 / (2 * rm ** 3)) * (1 - Math.sqrt(6 / rm));
    expect(novikovThorneFlux(r) / newtonian).toBeCloseTo(1, 2);
  });

  test('temperature peaks a few rs outside the ISCO', () => {
    const peak = novikovThorneFluxPeak();
    expect(peak.radius).toBeGreaterThan(4);
    expect(peak.radius).toBeLessThan(5);
    expect(diskTemperatureRatio(peak.radius)).toBeCloseTo(1, 5);
    expect(diskTemperatureRatio(30)).toBeLessThan(0.5);
  });

  test('peak temperature scales as M^(-1/4) and matches known disks', () => {
    // Stellar-mass black holes at a tenth of Eddington have ~1 keV disks.
    const stellar = diskPeakTemperature(10, 0.1);
    expect(stellar).toBeGreaterThan(2e6);
    expect(stellar).toBeLessThan(2e7);
    // Supermassive disks peak in the ultraviolet.
    const supermassive = diskPeakTemperature(1e8, 0.1);
    expect(supermassive).toBeGreaterThan(2e4);
    expect(supermassive).toBeLessThan(2e5);
    expect(stellar / supermassive).toBeCloseTo(Math.pow(1e7, 0.25), 6);
  });

  test('redshift factor reduces to gravitational redshift for lambda = 0', () => {
    // A static emitter would have sqrt(1 - rs/r); an orbiting one has the
    // additional transverse Doppler factor, giving sqrt(1 - 1.5 rs/r).
    expect(diskRedshiftFactor(6, 0)).toBeCloseTo(Math.sqrt(0.75), 10);
  });

  test('approaching side is blueshifted and receding side is redshifted', () => {
    const r = 6;
    // Photon emitted along the orbital velocity: lambda = +b.
    expect(diskRedshiftFactor(r, 5)).toBeGreaterThan(1);
    expect(diskRedshiftFactor(r, -5)).toBeLessThan(diskRedshiftFactor(r, 0));
  });
});

describe('observed disk intensity', () => {
  test('Doppler beaming makes the approaching side much brighter', () => {
    const r = 6;
    // Edge-on photons emitted along (+) or against (-) the orbital motion.
    const b = r / Math.sqrt(1 - 1 / r);
    const ratio = diskObservedIntensity(r, b) / diskObservedIntensity(r, -b);
    // g^4 with v ~ 0.35c at 6 rs gives more than an order of magnitude.
    expect(ratio).toBeGreaterThan(10);
  });

  test('falls off steeply with radius', () => {
    expect(diskObservedIntensity(30, 0)).toBeLessThan(
      0.05 * diskObservedIntensity(5, 0),
    );
  });
});

describe('disk thickness', () => {
  test('is a few percent of the radius at 10% Eddington', () => {
    const h = diskHalfThickness(10, 0.1);
    expect(h).toBeGreaterThan(0.3);
    expect(h / 10).toBeLessThan(0.1);
    expect(diskHalfThickness(3, 0.1)).toBe(0);
  });

  test('scales with the accretion rate', () => {
    expect(diskHalfThickness(8, 0.2) / diskHalfThickness(8, 0.1)).toBeCloseTo(
      2,
      10,
    );
  });

  test('structure solver reproduces the radiation-pressure dominated limit', () => {
    // Close in, radiation pressure dominates and H = 3 kappa Mdot f / 8 pi c.
    const s = shakuraSunyaevStructure(8, 4.3e6, 0.1)!;
    expect(s.radiationPressureFraction).toBeGreaterThan(0.99);
    expect(s.halfThickness / diskHalfThickness(8, 0.1)).toBeCloseTo(1, 2);
  });

  test('outer disk is gas-pressure supported and flares', () => {
    const inner = shakuraSunyaevStructure(10, 4.3e6, 0.02)!;
    const outer = shakuraSunyaevStructure(1000, 4.3e6, 0.02)!;
    expect(outer.radiationPressureFraction).toBeLessThan(0.2);
    // H keeps growing with radius instead of saturating.
    expect(outer.halfThickness).toBeGreaterThan(10 * inner.halfThickness);
    const h500 = shakuraSunyaevStructure(500, 4.3e6, 0.02)!.halfThickness;
    // Shakura-Sunyaev gas-pressure regions have H ~ r^(21/20) to r^(9/8).
    const slope = Math.log(outer.halfThickness / h500) / Math.log(2);
    expect(slope).toBeGreaterThan(1);
    expect(slope).toBeLessThan(1.15);
  });

  test('thickness profile is zero at the ISCO and spans the disk', () => {
    const profile = diskHalfThicknessProfile(40, 4.3e6, 0.02);
    expect(profile.heights[0]).toBeLessThan(0.01);
    expect(Math.exp(profile.logMax)).toBeCloseTo(40, 6);
    const last = profile.heights[profile.heights.length - 1];
    expect(last).toBeCloseTo(
      shakuraSunyaevStructure(40, 4.3e6, 0.02)!.halfThickness,
      6,
    );
  });

  test('erf approximation is accurate', () => {
    expect(erf(0)).toBeCloseTo(0, 6);
    expect(erf(0.5)).toBeCloseTo(0.5204999, 6);
    expect(erf(-1.5)).toBeCloseTo(-0.9661051, 6);
  });

  test('slab column matches numerical integration, even for thin slabs', () => {
    const numeric = (z0: number, z1: number, sigma: number, len: number) => {
      const n = 100000;
      let sum = 0;
      for (let i = 0; i < n; i++) {
        const z = z0 + ((i + 0.5) / n) * (z1 - z0);
        sum += Math.exp((-z * z) / (2 * sigma * sigma)) * (len / n);
      }
      return sum;
    };
    for (const [z0, z1, sigma, len] of [
      [-2, 3, 0.5, 4],
      [1, -1, 0.01, 0.5],
      [0.2, 0.2, 0.3, 1],
    ]) {
      expect(gaussianSlabColumn(z0, z1, sigma, len)).toBeCloseTo(
        numeric(z0, z1, sigma, len),
        5,
      );
    }
  });
});

describe('blackbody color', () => {
  test('6500 K is approximately white', () => {
    const [r, g, b] = blackbodyColor(6500);
    expect(r).toBeGreaterThan(0.9);
    expect(g).toBeGreaterThan(0.9);
    expect(b).toBeGreaterThan(0.85);
  });

  test('cool blackbodies are red and hot ones are blue', () => {
    const cool = blackbodyColor(2000);
    expect(cool[0]).toBe(1);
    expect(cool[2]).toBeLessThan(0.2);

    const hot = blackbodyColor(30000);
    expect(hot[2]).toBe(1);
    expect(hot[0]).toBeLessThan(0.8);
  });

  test('luminance increases with temperature', () => {
    expect(blackbodyLuminance(3000)).toBeLessThan(blackbodyLuminance(6000));
    expect(blackbodyLuminance(6000)).toBeLessThan(blackbodyLuminance(20000));
  });
});
