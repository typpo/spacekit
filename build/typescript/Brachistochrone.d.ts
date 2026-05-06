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
import type { Ephem } from './Ephem';
import type { Coordinate3d } from './Coordinates';
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
declare function bodyVelocityAuPerDay(ephem: Ephem, jd: number): Coordinate3d;
declare function vecSub(a: Coordinate3d, b: Coordinate3d): Coordinate3d;
declare function vecMag(v: Coordinate3d): number;
declare function vecLerp(a: Coordinate3d, b: Coordinate3d, t: number): Coordinate3d;
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
declare function brachPositionAtFraction(r0: Coordinate3d, r1: Coordinate3d, f: number): Coordinate3d;
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
export declare function solveBrachistochrone(input: BrachistochroneInput): BrachistochroneResult;
/**
 * Convenience: instantaneous brachistochrone state at a given fraction of
 * trip progress. Useful for animating the ship between sample frames.
 *
 * @param result a converged BrachistochroneResult
 * @param fraction progress in [0, 1]; 0 = departure, 1 = arrival
 */
export declare function brachistochroneStateAtFraction(result: BrachistochroneResult, fraction: number): {
    position: Coordinate3d;
    velocityMs: number;
    phase: 'BOOST' | 'FLIP' | 'DECEL' | 'ARRIVED';
    tSinceDepartureS: number;
};
export declare const __brachistochroneTest: {
    AU_M: number;
    DAY_S: number;
    G0: number;
    C: number;
    vecSub: typeof vecSub;
    vecMag: typeof vecMag;
    vecLerp: typeof vecLerp;
    brachPositionAtFraction: typeof brachPositionAtFraction;
    bodyVelocityAuPerDay: typeof bodyVelocityAuPerDay;
};
export {};
