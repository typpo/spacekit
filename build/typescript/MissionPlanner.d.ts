/**
 * Multi-leg mission planner for high-thrust voyages.
 *
 * Orchestrates a sequence of brachistochrone legs (Earth → Mars → Ceres,
 * Earth → Saturn → Neptune, etc.) into a single unified mission timeline.
 * Tracks cumulative Δv, propellant burned, and feasibility across legs.
 *
 * Sequential brachistochrones are the natural mission profile for a fusion
 * drive: each leg is point-and-burn. Gravity assists, which dominate
 * chemical-rocket interplanetary trajectories, become unnecessary because
 * the drive's specific impulse is high enough that aim-and-thrust beats
 * any swing-by trick.
 */
import { BrachistochroneResult } from './Brachistochrone';
import type { Ephem } from './Ephem';
import { Spacecraft, PropellantResult } from './Spacecraft';
/** A single leg of a multi-leg mission. */
export interface MissionLeg {
    /** Optional human label (e.g. "Outbound to Saturn"). */
    label?: string;
    /** Origin body's orbital elements. */
    originEphem: Ephem;
    /** Origin body name for UI ("Earth", "Saturn", etc.). */
    originName?: string;
    /** Destination body's orbital elements. */
    targetEphem: Ephem;
    /** Destination body name for UI. */
    targetName?: string;
    /**
     * Departure Julian date for this leg. For the first leg this is the
     * mission start. For subsequent legs, defaults to the previous leg's
     * arrivalJd plus `orbitPhaseDays`.
     */
    departureJd?: number;
    /**
     * Days spent in orbit at the previous leg's destination before this leg
     * departs. Defaults to 0 (immediate departure on arrival). Useful for
     * surface ops or refueling.
     */
    orbitPhaseDays?: number;
    /**
     * Constant acceleration in g for this leg. Defaults to the ship's
     * `drive.maxAccelG`. May be lower if the user wants to throttle the
     * drive (less Δv but slower trip).
     */
    accelG?: number;
}
/** A single leg after planning, with computed brachistochrone result and bookkeeping. */
export interface PlannedLeg {
    index: number;
    label: string;
    originName: string;
    targetName: string;
    departureJd: number;
    arrivalJd: number;
    orbitPhaseDays: number;
    accelG: number;
    result: BrachistochroneResult;
    /** Δv added by this leg's brachistochrone profile (m/s). */
    legDeltaVMs: number;
    /** Propellant burned during this leg (tonnes), via rocket equation. */
    propellantBurnedTonnes: number;
    /** Wet mass at this leg's departure (tonnes). */
    wetMassDepartureTonnes: number;
    /** Wet mass at this leg's arrival (tonnes). */
    wetMassArrivalTonnes: number;
}
/** Result of planning a full mission. */
export interface PlannedMission {
    /** All planned legs, in order. */
    legs: PlannedLeg[];
    /** Total mission duration in days, from first departure to last arrival. */
    totalDurationDays: number;
    /** Total Δv across all legs, in m/s. */
    totalDeltaVMs: number;
    /** Initial propellant load required for the full mission, in tonnes. */
    initialPropellantTonnes: number;
    /** Initial wet mass at departure of leg 1, in tonnes. */
    initialWetMassTonnes: number;
    /**
     * Initial propellant fraction at departure of leg 1. Same value the
     * paper's Section 4.3 reports for a single-leg mission; for multi-leg
     * trips this aggregates the full Δv budget.
     */
    initialPropellantFraction: number;
    /** True iff initial propellant fraction ≤ 60%. */
    feasible: boolean;
    /** The ship spec used for this mission (for downstream UI). */
    spacecraft: Spacecraft;
    /** Per-leg propellant breakdown, mostly for charts. */
    perLegPropellant: PropellantResult[];
}
/** Inputs to plan(). */
export interface MissionPlanInput {
    spacecraft: Spacecraft;
    /** First leg's departure JD (required). */
    startJd: number;
    /** Sequence of legs. */
    legs: MissionLeg[];
}
/**
 * Plan a multi-leg mission.
 *
 * Algorithm:
 *   1. For each leg in order:
 *        a. Compute leg's departureJd: if first leg, use `startJd`. Otherwise
 *           use previous arrivalJd + orbitPhaseDays.
 *        b. Solve brachistochrone for this leg's r0, r1, t_arrival.
 *        c. Accumulate Δv.
 *   2. After all legs, compute total Δv → required propellant via
 *      rocket equation.
 *   3. Per-leg propellant burn is back-allocated by walking the rocket
 *      equation: at each leg's start, wet mass is what remains; burn
 *      this leg's Δv to get end wet mass.
 *
 * Note: the per-leg breakdown assumes no propellant is consumed during
 * orbit phases (drive is off). Real ops would burn small Δv for orbit
 * keeping; this is a concept-demo simplification.
 */
export declare function planMission(input: MissionPlanInput): PlannedMission;
/**
 * Find the leg active at a given simulation time (seconds since the first
 * leg's departure). Returns the leg's index and the fraction of progress
 * through it (0 = leg start, 1 = leg arrival), or null if outside any leg.
 *
 * Used by the UI to highlight which leg is currently in flight on the
 * scrubber and which leg's telemetry to show.
 */
export declare function findActiveLeg(mission: PlannedMission, tSinceMissionStartS: number): {
    legIndex: number;
    legFraction: number;
    inOrbitPhase: boolean;
} | null;
