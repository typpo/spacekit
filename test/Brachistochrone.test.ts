import { EphemPresets } from '../src/EphemPresets';
import {
  solveBrachistochrone,
  brachistochroneStateAtFraction,
  __test,
} from '../src/Brachistochrone';

const { AU_M, G0, vecMag, vecSub } = __test;

// Departure JD ≈ 2026-05-06. Use a hardcoded JD so tests are deterministic
// regardless of system clock.
const DEPART_JD_2026_MAY = 2461166.5;

describe('Brachistochrone solver', () => {
  describe('Earth → Mars at 0.43g', () => {
    const result = solveBrachistochrone({
      originEphem: EphemPresets.EARTH,
      targetEphem: EphemPresets.MARS,
      departureJd: DEPART_JD_2026_MAY,
      accelG: 0.43,
    });

    test('flight time is on order of a few days', () => {
      // Earth–Mars distance varies from ~0.5 AU (opposition) to ~2.5 AU (conjunction).
      // At 0.43g, t = 2·sqrt(d/a). For d = 1 AU = 1.5e11 m, a = 4.22 m/s²:
      //   t = 2·sqrt(1.5e11/4.22) ≈ 3.77e5 s ≈ 4.4 days.
      // So Earth-Mars at 0.43g is in the 2-7 day range across the synodic cycle.
      expect(result.flightTimeDays).toBeGreaterThan(1);
      expect(result.flightTimeDays).toBeLessThan(15);
    });

    test('lead-angle iteration converges', () => {
      // Should converge within the default 8 iterations.
      expect(result.iterationsRun).toBeLessThanOrEqual(8);
    });

    test('distance is reasonable for inner-planet pair', () => {
      expect(result.distanceAu).toBeGreaterThan(0.3);
      expect(result.distanceAu).toBeLessThan(2.7);
    });

    test('brachistochrone Δv is small relative to c', () => {
      const c = 2.998e8;
      // Earth-Mars Δv at 0.43g is around 0.005-0.01c.
      expect(result.brachistochroneDeltaVMs / c).toBeLessThan(0.02);
      expect(result.brachistochroneDeltaVMs / c).toBeGreaterThan(0.001);
    });

    test('velocity-match Δv is much smaller than brachistochrone Δv', () => {
      // Velocity matching is on the order of 30 km/s (orbital speeds),
      // brachistochrone Δv is on the order of 1000s of km/s. Ratio < 5%.
      expect(result.velocityMatchDeltaVMs).toBeLessThan(
        0.05 * result.brachistochroneDeltaVMs,
      );
    });

    test('trajectory samples have monotonic time and span departure→arrival', () => {
      const traj = result.trajectory;
      expect(traj.length).toBe(200);
      expect(traj[0].tSinceDepartureS).toBeCloseTo(0, 5);
      expect(traj[traj.length - 1].tSinceDepartureS).toBeCloseTo(
        result.flightTimeS,
        5,
      );
      for (let i = 1; i < traj.length; i++) {
        expect(traj[i].tSinceDepartureS).toBeGreaterThan(
          traj[i - 1].tSinceDepartureS,
        );
      }
    });

    test('first sample is at origin r0 and last at arrival r1', () => {
      const traj = result.trajectory;
      expect(vecMag(vecSub(traj[0].position, result.r0))).toBeLessThan(1e-9);
      expect(
        vecMag(vecSub(traj[traj.length - 1].position, result.r1)),
      ).toBeLessThan(1e-9);
    });

    test('phases split BOOST/DECEL at midpoint', () => {
      const traj = result.trajectory;
      const mid = Math.floor(traj.length / 2);
      // Around the midpoint we transition; just verify both phases appear.
      const phases = new Set(traj.map((t) => t.phase));
      expect(phases.has('BOOST')).toBe(true);
      expect(phases.has('DECEL')).toBe(true);
    });
  });

  describe('Earth → Jupiter at 0.43g (paper reference mission)', () => {
    const result = solveBrachistochrone({
      originEphem: EphemPresets.EARTH,
      targetEphem: EphemPresets.JUPITER,
      departureJd: DEPART_JD_2026_MAY,
      accelG: 0.43,
    });

    test('flight time is roughly 10 days (paper Section 4.4)', () => {
      // The paper's reference mission says "10-day Earth-Jupiter brachistochrone".
      // This is for d ~ 5 AU (close to opposition); at conjunction d > 6 AU
      // and the trip would be longer. Allow a broad window since the actual
      // distance depends on the synodic phase at the chosen departure date.
      expect(result.flightTimeDays).toBeGreaterThan(7);
      expect(result.flightTimeDays).toBeLessThan(15);
    });

    test('brachistochrone Δv is around 0.012c (paper Section 4.3 for Δv ≈ 0.012c)', () => {
      const c = 2.998e8;
      // Paper says Δv ≈ 0.012c for 10-day Jupiter brachistochrone.
      // Our solver at converged distance should be in [0.008c, 0.018c]
      // depending on synodic phase at chosen departure.
      expect(result.brachistochroneDeltaVMs / c).toBeGreaterThan(0.007);
      expect(result.brachistochroneDeltaVMs / c).toBeLessThan(0.02);
    });

    test('peak velocity is half the brachistochrone Δv', () => {
      expect(result.peakVelocityMs).toBeCloseTo(
        result.brachistochroneDeltaVMs / 2,
        -3, // tolerance in m/s; -3 means within ±0.5 km/s
      );
    });
  });

  describe('Earth → Pluto at 0.43g', () => {
    const result = solveBrachistochrone({
      originEphem: EphemPresets.EARTH,
      targetEphem: EphemPresets.PLUTO,
      departureJd: DEPART_JD_2026_MAY,
      accelG: 0.43,
    });

    test('flight time is on order of weeks', () => {
      // d ~ 35-50 AU depending on synodic phase. At 0.43g:
      //   t = 2·sqrt(d/a). For d = 40 AU = 6e12 m: t ≈ 2·sqrt(6e12/4.22)
      //     ≈ 2.4e6 s ≈ 28 days.
      expect(result.flightTimeDays).toBeGreaterThan(20);
      expect(result.flightTimeDays).toBeLessThan(60);
    });

    test('lead angle correction is significant for outer planets', () => {
      // Pluto moves slowly (~5 km/s heliocentric) but the trip lasts weeks.
      // The arrival position should differ from the departure-time position
      // of Pluto by something measurable.
      const targetOrbit = (require('../src/Orbit') as any).Orbit;
      const pos0 = new targetOrbit(EphemPresets.PLUTO).getPositionAtTime(
        DEPART_JD_2026_MAY,
      );
      const drift = vecMag(vecSub(result.r1, pos0));
      // Pluto orbital velocity ~4.7 km/s ~ 0.0027 AU/day. Over ~28 days
      // we expect ~0.07 AU drift. Allow a wide range.
      expect(drift).toBeGreaterThan(0.001);
      expect(drift).toBeLessThan(2);
    });
  });

  describe('Non-convergence safety', () => {
    test('with iterations=1 the result is still self-consistent (r1, distanceM, flightTimeS, arrivalJd all agree)', () => {
      // Force the solver to hit the iteration budget before converging.
      const r = solveBrachistochrone({
        originEphem: EphemPresets.EARTH,
        targetEphem: EphemPresets.PLUTO,
        departureJd: DEPART_JD_2026_MAY,
        accelG: 0.43,
        iterations: 1,
        initialFlightDaysGuess: 1, // intentionally bad guess
      });
      // distanceM should equal |r1 - r0| * AU_M
      const expectedDistanceM = vecMag(vecSub(r.r1, r.r0)) * 1.495978707e11;
      expect(r.distanceM).toBeCloseTo(expectedDistanceM, -3);
      // flightTimeS should equal 2*sqrt(distanceM / a)
      const a = r.brachistochroneDeltaVMs / 2; // peakV = sqrt(d*a) = brach/2 → a = brach²/(4d)
      const accelMs2 = (r.brachistochroneDeltaVMs * r.brachistochroneDeltaVMs) / (4 * r.distanceM);
      const expectedFlightTime = 2 * Math.sqrt(r.distanceM / accelMs2);
      expect(r.flightTimeS).toBeCloseTo(expectedFlightTime, -3);
      // arrivalJd should equal departureJd + flightTimeS / 86400
      expect(r.arrivalJd).toBeCloseTo(
        DEPART_JD_2026_MAY + r.flightTimeS / 86400,
        5,
      );
    });
  });

  describe('Acceleration sensitivity', () => {
    test('higher accel reduces flight time roughly as 1/sqrt(a)', () => {
      const lowAccel = solveBrachistochrone({
        originEphem: EphemPresets.EARTH,
        targetEphem: EphemPresets.MARS,
        departureJd: DEPART_JD_2026_MAY,
        accelG: 0.1,
      });
      const highAccel = solveBrachistochrone({
        originEphem: EphemPresets.EARTH,
        targetEphem: EphemPresets.MARS,
        departureJd: DEPART_JD_2026_MAY,
        accelG: 1.0,
      });
      // t ∝ 1/sqrt(a) so t_low/t_high ≈ sqrt(a_high/a_low) = sqrt(10) ≈ 3.16.
      // Allow slack because Mars's position differs by t_arrival.
      const ratio = lowAccel.flightTimeDays / highAccel.flightTimeDays;
      expect(ratio).toBeGreaterThan(2.5);
      expect(ratio).toBeLessThan(4);
    });

    test('higher accel increases brachistochrone Δv as sqrt(a)', () => {
      const a1 = solveBrachistochrone({
        originEphem: EphemPresets.EARTH,
        targetEphem: EphemPresets.MARS,
        departureJd: DEPART_JD_2026_MAY,
        accelG: 0.1,
      });
      const a2 = solveBrachistochrone({
        originEphem: EphemPresets.EARTH,
        targetEphem: EphemPresets.MARS,
        departureJd: DEPART_JD_2026_MAY,
        accelG: 0.4,
      });
      // d is roughly the same (Mars hasn't moved much), so
      // Δv ∝ sqrt(a). Ratio of Δvs should be ~sqrt(4) = 2.
      const ratio = a2.brachistochroneDeltaVMs / a1.brachistochroneDeltaVMs;
      expect(ratio).toBeGreaterThan(1.7);
      expect(ratio).toBeLessThan(2.3);
    });
  });

  describe('Input validation', () => {
    test('rejects negative or zero acceleration', () => {
      expect(() =>
        solveBrachistochrone({
          originEphem: EphemPresets.EARTH,
          targetEphem: EphemPresets.MARS,
          departureJd: DEPART_JD_2026_MAY,
          accelG: 0,
        }),
      ).toThrow();
      expect(() =>
        solveBrachistochrone({
          originEphem: EphemPresets.EARTH,
          targetEphem: EphemPresets.MARS,
          departureJd: DEPART_JD_2026_MAY,
          accelG: -1,
        }),
      ).toThrow();
    });

    test('rejects iterations < 1', () => {
      expect(() =>
        solveBrachistochrone({
          originEphem: EphemPresets.EARTH,
          targetEphem: EphemPresets.MARS,
          departureJd: DEPART_JD_2026_MAY,
          accelG: 0.43,
          iterations: 0,
        }),
      ).toThrow();
    });

    test('rejects trajectorySamples < 2', () => {
      expect(() =>
        solveBrachistochrone({
          originEphem: EphemPresets.EARTH,
          targetEphem: EphemPresets.MARS,
          departureJd: DEPART_JD_2026_MAY,
          accelG: 0.43,
          trajectorySamples: 1,
        }),
      ).toThrow();
    });
  });
});

describe('brachistochroneStateAtFraction', () => {
  const result = solveBrachistochrone({
    originEphem: EphemPresets.EARTH,
    targetEphem: EphemPresets.MARS,
    departureJd: DEPART_JD_2026_MAY,
    accelG: 0.43,
  });

  test('f=0 returns origin position with phase BOOST and zero velocity', () => {
    const s = brachistochroneStateAtFraction(result, 0);
    expect(s.tSinceDepartureS).toBeCloseTo(0, 5);
    expect(s.velocityMs).toBeCloseTo(0, 5);
    expect(s.phase).toBe('BOOST');
    expect(vecMag(vecSub(s.position, result.r0))).toBeLessThan(1e-9);
  });

  test('f=1 returns arrival position with phase ARRIVED and zero velocity', () => {
    const s = brachistochroneStateAtFraction(result, 1);
    expect(s.velocityMs).toBeCloseTo(0, 5);
    expect(s.phase).toBe('ARRIVED');
    expect(vecMag(vecSub(s.position, result.r1))).toBeLessThan(1e-9);
  });

  test('f=0.5 returns midpoint with peak velocity and FLIP phase', () => {
    const s = brachistochroneStateAtFraction(result, 0.5);
    expect(s.velocityMs).toBeCloseTo(result.peakVelocityMs, -3);
    expect(s.phase).toBe('FLIP');
  });

  test('f=0.25 (boost phase) has positive velocity and BOOST phase', () => {
    const s = brachistochroneStateAtFraction(result, 0.25);
    expect(s.velocityMs).toBeGreaterThan(0);
    expect(s.velocityMs).toBeLessThan(result.peakVelocityMs);
    expect(s.phase).toBe('BOOST');
  });

  test('f=0.75 (decel phase) has positive velocity and DECEL phase', () => {
    const s = brachistochroneStateAtFraction(result, 0.75);
    expect(s.velocityMs).toBeGreaterThan(0);
    expect(s.velocityMs).toBeLessThan(result.peakVelocityMs);
    expect(s.phase).toBe('DECEL');
  });

  test('clamps fraction outside [0, 1]', () => {
    const sBefore = brachistochroneStateAtFraction(result, -0.5);
    const sAfter = brachistochroneStateAtFraction(result, 1.5);
    expect(vecMag(vecSub(sBefore.position, result.r0))).toBeLessThan(1e-9);
    expect(vecMag(vecSub(sAfter.position, result.r1))).toBeLessThan(1e-9);
  });
});

describe('Internal helpers', () => {
  test('vecMag and vecSub agree on simple cases', () => {
    expect(vecMag([3, 4, 0])).toBeCloseTo(5, 9);
    expect(vecSub([1, 2, 3], [0, 0, 0])).toEqual([1, 2, 3]);
  });

  test('AU and G constants match SI', () => {
    expect(AU_M).toBeCloseTo(1.496e11, -8);
    expect(G0).toBeCloseTo(9.80665, 5);
  });
});
