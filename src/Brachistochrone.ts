/**
 * Brachistochrone trajectory solver for high-thrust, high-Δv propulsion.
 *
 * A "brachistochrone" trajectory in space-propulsion literature refers to a
 * constant-acceleration flight profile where a vehicle accelerates for the
 * first half of the trip, performs a 180° flip ("flip and burn"), then
 * decelerates for the second half. This is the natural mission profile for
 * any drive whose specific impulse is so high that propellant cost is
 * dominated by Δv rather than burn time.
 *
 * For chemical rockets this is a non-starter (you can't carry the propellant).
 * For fusion drives — including the proton-boron (p-¹¹B) directed-exhaust
 * concept — it becomes the natural mission profile.
 *
 * This module solves three coupled problems for a single-leg voyage between
 * two solar-system bodies:
 *
 *   1. Lead-angle rendezvous: the target body moves during the flight, so the
 *      ship must aim at where the target *will be* at arrival, not where it is
 *      at departure. We iterate t_arrival to fixed point.
 *
 *   2. Brachistochrone Δv: for constant acceleration `a` over distance `d`,
 *      time-of-flight is `t = 2·sqrt(d/a)` and the spent Δv is `2·sqrt(d·a)`.
 *
 *   3. Velocity matching: a real rendezvous requires arriving at zero velocity
 *      relative to the target. The ship inherits the origin's heliocentric
 *      velocity at departure and must shed that plus arrive matching the
 *      target's heliocentric velocity. The additional Δv is the magnitude of
 *      `v_origin − v_target` evaluated at departure / arrival respectively.
 *
 * Solar gravity is intentionally neglected during transit. For a high-thrust
 * fusion drive, the gravitational deflection is a few percent of trajectory
 * length over inner-system trips and grows for outer-planet trips; this
 * is acknowledged as a concept-demo simplification. A future v2 could
 * integrate Newton's equations during flight; for now, the trajectory is
 * rendered as a straight line in heliocentric coordinates between the
 * (moving) origin departure point and the (lead-angle-corrected) target
 * arrival point.
 */

import { Orbit } from './Orbit';
import type { Ephem } from './Ephem';
import type { Coordinate3d } from './Coordinates';

// Physical constants
const AU_M = 1.495978707e11; // meters per AU
const DAY_S = 86400; // seconds per day
const G0 = 9.80665; // m/s², standard gravity
const C = 2.99792458e8; // m/s, speed of light (for sanity checks)

/**
 * Inputs to the brachistochrone solver. All times in Julian days (jd) per
 * Spacekit convention; positions are in AU; accelerations are in g.
 */
export interface BrachistochroneInput {
  /** Origin body's orbital elements (e.g. EphemPresets.EARTH). */
  originEphem: Ephem;

  /** Target body's orbital elements (e.g. EphemPresets.JUPITER). */
  targetEphem: Ephem;

  /** Departure time, Julian date. */
  departureJd: number;

  /**
   * Constant proper acceleration of the ship in units of standard gravity
   * (g = 9.80665 m/s²). Default 0.43 g matches the paper's 10-day Earth-
   * Jupiter reference profile.
   */
  accelG: number;

  /**
   * Number of fixed-point iterations for the lead-angle solve. Five
   * iterations converge to ~10⁻⁹ AU for inner-system trips and ~10⁻⁶ AU
   * for trans-Neptunian trips.
   */
  iterations?: number;

  /**
   * Number of trajectory sample points returned for visualization. The
   * solver returns equally-spaced (in time) heliocentric positions
   * including departure and arrival.
   */
  trajectorySamples?: number;

  /**
   * Initial guess for time-of-flight in days. Used to seed the iteration.
   * Defaults to 30 days, which is a good guess for inner-system trips and
   * still converges quickly for outer planets.
   */
  initialFlightDaysGuess?: number;
}

/** A single trajectory sample. */
export interface TrajectorySample {
  /** Julian date at this sample. */
  jd: number;
  /** Time since departure in seconds. */
  tSinceDepartureS: number;
  /** Heliocentric position [x, y, z] in AU. */
  position: Coordinate3d;
  /** Mission phase at this sample. */
  phase: 'BOOST' | 'DECEL';
}

/** Result of the brachistochrone solve. */
export interface BrachistochroneResult {
  /** Heliocentric position of origin body at departure, in AU. */
  r0: Coordinate3d;

  /** Heliocentric position of target body at arrival, in AU. */
  r1: Coordinate3d;

  /** Total flight time in seconds. */
  flightTimeS: number;

  /** Total flight time in days (convenience). */
  flightTimeDays: number;

  /** Arrival Julian date (departureJd + flightTimeDays). */
  arrivalJd: number;

  /** Straight-line distance between r0 and r1 at arrival, in meters. */
  distanceM: number;

  /** Same distance in AU (convenience). */
  distanceAu: number;

  /**
   * Pure brachistochrone Δv: `2·sqrt(d·a)`. Does not include velocity
   * matching at endpoints. This is what the paper's Section 4.3 uses.
   */
  brachistochroneDeltaVMs: number;

  /**
   * Velocity-matching Δv addendum: `|v_origin(departure) − v_target(arrival)|`
   * in m/s. Required to depart from origin's orbital frame and arrive at
   * rest relative to target.
   */
  velocityMatchDeltaVMs: number;

  /** Total Δv: brachistochrone + velocity matching, in m/s. */
  totalDeltaVMs: number;

  /** Same total Δv in km/s (convenience). */
  totalDeltaVKms: number;

  /** Peak velocity at flip-and-burn midpoint, in m/s. */
  peakVelocityMs: number;

  /** Number of solver iterations performed. */
  iterationsRun: number;

  /** Equally-spaced trajectory samples for rendering. */
  trajectory: TrajectorySample[];
}

/**
 * Numerically estimate a body's heliocentric velocity at a given Julian date
 * by central differencing the Kepler-propagated position. Step size is half
 * a day, which is small enough for solar-system bodies (whose orbits are
 * smooth on day-scale) and large enough to avoid catastrophic cancellation.
 *
 * Returns velocity in AU per day. Multiply by AU_M / DAY_S to get m/s.
 */
function bodyVelocityAuPerDay(
  ephem: Ephem,
  jd: number,
): Coordinate3d {
  const orbit = new Orbit(ephem, {});
  const dt = 0.5; // days
  const pPlus = orbit.getPositionAtTime(jd + dt, false) as Coordinate3d;
  const pMinus = orbit.getPositionAtTime(jd - dt, false) as Coordinate3d;
  return [
    (pPlus[0] - pMinus[0]) / (2 * dt),
    (pPlus[1] - pMinus[1]) / (2 * dt),
    (pPlus[2] - pMinus[2]) / (2 * dt),
  ];
}

function vecSub(a: Coordinate3d, b: Coordinate3d): Coordinate3d {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function vecMag(v: Coordinate3d): number {
  return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
}

function vecLerp(
  a: Coordinate3d,
  b: Coordinate3d,
  t: number,
): Coordinate3d {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ];
}

/**
 * Position along a brachistochrone profile at fractional progress `f` in
 * [0, 1]. The first half is constant +a acceleration; the second half is
 * constant −a (decel). The position curve in 1D is:
 *
 *   s(f) = ½·d·(2f)²       for f ≤ ½  (boost)
 *   s(f) = d − ½·d·(2(1−f))² for f > ½  (decel)
 *
 * This evaluates to s(0)=0, s(½)=d/2, s(1)=d, with smooth velocity peaking
 * at f = ½. The position interpolates linearly along the chord r0→r1.
 *
 * Note: the chord's endpoints are computed in heliocentric coordinates and
 * the chord is straight. This neglects the gradual heliocentric motion of
 * the origin body during flight (origin's position at jd > departureJd is
 * not used). This is the concept-demo approximation; the trajectory line
 * still appears curved in screen space because the *target's* arrival
 * position has been corrected via lead-angle, so the line points at where
 * the target will be at arrival, not where it was at departure.
 */
function brachPositionAtFraction(
  r0: Coordinate3d,
  r1: Coordinate3d,
  f: number,
): Coordinate3d {
  let s: number;
  if (f <= 0.5) {
    const x = 2 * f;
    s = 0.5 * x * x; // 0..½
  } else {
    const x = 2 * (1 - f);
    s = 1 - 0.5 * x * x; // ½..1
  }
  return vecLerp(r0, r1, s);
}

/**
 * Solve a single-leg brachistochrone voyage between two solar-system bodies.
 *
 * Algorithm:
 *   1. Compute origin position r0 = bodyPosition(originEphem, departureJd).
 *   2. Initial guess for arrival: t_arr = departureJd + initialFlightDaysGuess.
 *   3. For up to `iterations` rounds:
 *        a. r1 = bodyPosition(targetEphem, t_arr).
 *        b. d = |r1 − r0| in meters.
 *        c. t_flight = 2·sqrt(d / a), where a = accelG · 9.80665 m/s².
 *        d. New t_arr = departureJd + t_flight / 86400.
 *        e. Break if |Δt_arr| < 1 second.
 *   4. Compute brachistochrone Δv = 2·sqrt(d·a).
 *   5. Compute velocity matching Δv from |v_origin(departureJd) − v_target(t_arr)|.
 *   6. Sample trajectory at requested resolution.
 */
export function solveBrachistochrone(
  input: BrachistochroneInput,
): BrachistochroneResult {
  const {
    originEphem,
    targetEphem,
    departureJd,
    accelG,
    iterations = 8,
    trajectorySamples = 200,
    initialFlightDaysGuess = 30,
  } = input;

  if (accelG === undefined || accelG === null || !Number.isFinite(accelG) || accelG <= 0) {
    throw new Error('accelG must be a positive finite number');
  }
  if (iterations < 1) {
    throw new Error('iterations must be at least 1');
  }
  if (trajectorySamples < 2) {
    throw new Error('trajectorySamples must be at least 2');
  }

  const accelMs2 = accelG * G0;

  const originOrbit = new Orbit(originEphem, {});
  const targetOrbit = new Orbit(targetEphem, {});

  const r0 = originOrbit.getPositionAtTime(departureJd, false) as Coordinate3d;

  let arrivalJd = departureJd + initialFlightDaysGuess;
  let r1: Coordinate3d = targetOrbit.getPositionAtTime(arrivalJd, false) as Coordinate3d;
  let flightTimeS = 0;
  let distanceM = 0;
  let iterationsRun = 0;

  const oneSecondInDays = 1 / 86400;

  for (let iter = 0; iter < iterations; iter++) {
    iterationsRun = iter + 1;
    r1 = targetOrbit.getPositionAtTime(arrivalJd, false) as Coordinate3d;
    const dAu = vecMag(vecSub(r1, r0));
    distanceM = dAu * AU_M;
    flightTimeS = 2 * Math.sqrt(distanceM / accelMs2);
    const newArrivalJd = departureJd + flightTimeS / DAY_S;
    const converged = Math.abs(newArrivalJd - arrivalJd) < oneSecondInDays;
    arrivalJd = newArrivalJd;
    if (converged) break;
  }
  // Always do a final recompute against the committed arrivalJd so that
  // r1, distanceM, and flightTimeS are mutually consistent — required when
  // the iteration budget is exhausted before convergence.
  r1 = targetOrbit.getPositionAtTime(arrivalJd, false) as Coordinate3d;
  {
    const dAuFinal = vecMag(vecSub(r1, r0));
    distanceM = dAuFinal * AU_M;
    flightTimeS = 2 * Math.sqrt(distanceM / accelMs2);
    arrivalJd = departureJd + flightTimeS / DAY_S;
  }

  // Brachistochrone Δv: 2·sqrt(d·a). For a = 0.43g, d = 5 AU,
  // this gives ~3.5e6 m/s ≈ 0.012c, matching paper Section 4.3.
  const brachistochroneDeltaVMs = 2 * Math.sqrt(distanceM * accelMs2);

  // Peak velocity at midpoint = sqrt(d·a) = brachistochrone Δv / 2.
  const peakVelocityMs = Math.sqrt(distanceM * accelMs2);

  // Velocity matching: standard heuristic used in propulsion-feasibility
  // literature (see e.g. Atomic Rockets / Nyrath's torchship analyses) to
  // approximate the additional Δv beyond the pure brachistochrone result.
  //
  // The brachistochrone Δv `2·sqrt(d·a)` assumes the ship starts and ends at
  // rest in some chosen inertial frame, which is not literally true here:
  // we evaluate the chord r1 − r0 in the heliocentric frame, but the ship
  // inherits the origin body's heliocentric velocity at departure and must
  // arrive at the target body's heliocentric velocity (zero relative
  // velocity) for rendezvous. The "true" minimum Δv is the solution to a
  // boundary-value problem (Pontryagin's maximum principle); the linear
  // approximation `Δv_total ≈ 2·sqrt(d·a) + |v_origin − v_target|` is a
  // mixed-frame heuristic that is exact when the orbital velocity terms
  // are aligned with the brachistochrone thrust direction and is otherwise
  // an upper bound on the additional cost. For inner-system trips where
  // |v_orbit| (~30 km/s) is much smaller than Δv_brach (~thousands of km/s)
  // the error is at the percent level. For low-acceleration trips to outer
  // planets this approximation may overstate the rendezvous cost.
  const v0AuDay = bodyVelocityAuPerDay(originEphem, departureJd);
  const v1AuDay = bodyVelocityAuPerDay(targetEphem, arrivalJd);
  const dvMatchAuDay = vecSub(v0AuDay, v1AuDay);
  const velocityMatchDeltaVMs =
    vecMag(dvMatchAuDay) * (AU_M / DAY_S);

  const totalDeltaVMs = brachistochroneDeltaVMs + velocityMatchDeltaVMs;

  // Sample trajectory uniformly in time so that animation playback at
  // constant rate produces correct visual speed (slow at endpoints, fast
  // at midpoint).
  const trajectory: TrajectorySample[] = [];
  for (let i = 0; i < trajectorySamples; i++) {
    const f = i / (trajectorySamples - 1);
    const tSinceDepartureS = f * flightTimeS;
    const position = brachPositionAtFraction(r0, r1, f);
    trajectory.push({
      jd: departureJd + tSinceDepartureS / DAY_S,
      tSinceDepartureS,
      position,
      phase: f <= 0.5 ? 'BOOST' : 'DECEL',
    });
  }

  return {
    r0,
    r1,
    flightTimeS,
    flightTimeDays: flightTimeS / DAY_S,
    arrivalJd,
    distanceM,
    distanceAu: distanceM / AU_M,
    brachistochroneDeltaVMs,
    velocityMatchDeltaVMs,
    totalDeltaVMs,
    totalDeltaVKms: totalDeltaVMs / 1000,
    peakVelocityMs,
    iterationsRun,
    trajectory,
  };
}

/**
 * Convenience: instantaneous brachistochrone state at a given fraction of
 * trip progress. Useful for animating the ship between sample frames.
 *
 * @param result a converged BrachistochroneResult
 * @param fraction progress in [0, 1]; 0 = departure, 1 = arrival
 */
export function brachistochroneStateAtFraction(
  result: BrachistochroneResult,
  fraction: number,
): {
  position: Coordinate3d;
  velocityMs: number;
  phase: 'BOOST' | 'FLIP' | 'DECEL' | 'ARRIVED';
  tSinceDepartureS: number;
} {
  const f = Math.max(0, Math.min(1, fraction));
  const position = brachPositionAtFraction(result.r0, result.r1, f);
  const tSinceDepartureS = f * result.flightTimeS;

  // Velocity profile: triangular wave peaking at f = 0.5.
  // v(f) = 2·v_peak·f for f ≤ 0.5; v(f) = 2·v_peak·(1−f) for f > 0.5.
  let velocityMs: number;
  let phase: 'BOOST' | 'FLIP' | 'DECEL' | 'ARRIVED';
  if (f >= 1) {
    velocityMs = 0;
    phase = 'ARRIVED';
  } else if (Math.abs(f - 0.5) < 0.001) {
    velocityMs = result.peakVelocityMs;
    phase = 'FLIP';
  } else if (f < 0.5) {
    velocityMs = 2 * result.peakVelocityMs * f;
    phase = 'BOOST';
  } else {
    velocityMs = 2 * result.peakVelocityMs * (1 - f);
    phase = 'DECEL';
  }

  return { position, velocityMs, phase, tSinceDepartureS };
}

// Internal exports for testing.
export const __brachistochroneTest = {
  AU_M,
  DAY_S,
  G0,
  C,
  vecSub,
  vecMag,
  vecLerp,
  brachPositionAtFraction,
  bodyVelocityAuPerDay,
};
