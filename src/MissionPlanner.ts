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

import {
  solveBrachistochrone,
  BrachistochroneResult,
} from './Brachistochrone';
import type { Ephem } from './Ephem';
import {
  Spacecraft,
  PropellantResult,
  propellantForDeltaV,
} from './Spacecraft';

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
export function planMission(input: MissionPlanInput): PlannedMission {
  if (!input.spacecraft) {
    throw new Error('MissionPlanInput requires a spacecraft');
  }
  if (!Array.isArray(input.legs) || input.legs.length === 0) {
    throw new Error('MissionPlanInput requires at least one leg');
  }
  if (!Number.isFinite(input.startJd)) {
    throw new Error('MissionPlanInput.startJd must be a finite number');
  }

  const drive = input.spacecraft.drive();

  // Phase 1: compute brachistochrone for each leg, accumulating Δv.
  const planned: PlannedLeg[] = [];
  let cursorJd = input.startJd;
  let totalDeltaVMs = 0;

  for (let i = 0; i < input.legs.length; i++) {
    const leg = input.legs[i];
    const accelG = leg.accelG ?? drive.maxAccelG;
    const orbitPhaseDays = leg.orbitPhaseDays ?? 0;

    // For the first leg, leg.departureJd overrides startJd if provided.
    const departureJd =
      i === 0
        ? leg.departureJd ?? cursorJd
        : leg.departureJd ?? cursorJd + orbitPhaseDays;

    const result = solveBrachistochrone({
      originEphem: leg.originEphem,
      targetEphem: leg.targetEphem,
      departureJd,
      accelG,
    });

    const legDeltaVMs = result.totalDeltaVMs;
    totalDeltaVMs += legDeltaVMs;

    const label = leg.label ?? `Leg ${i + 1}`;
    const originName = leg.originName ?? `Origin ${i + 1}`;
    const targetName = leg.targetName ?? `Target ${i + 1}`;

    planned.push({
      index: i,
      label,
      originName,
      targetName,
      departureJd,
      arrivalJd: result.arrivalJd,
      orbitPhaseDays,
      accelG,
      result,
      legDeltaVMs,
      // populated below in phase 2
      propellantBurnedTonnes: 0,
      wetMassDepartureTonnes: 0,
      wetMassArrivalTonnes: 0,
    });

    cursorJd = result.arrivalJd;
  }

  // Phase 2: compute total propellant required for total Δv.
  const dryMassTonnes = input.spacecraft.dryMassTonnes();
  const initialPropResult = propellantForDeltaV(
    dryMassTonnes,
    totalDeltaVMs,
    drive,
  );
  const initialWetMassTonnes = initialPropResult.wetMassTonnes;
  const initialPropellantTonnes = initialPropResult.propellantMassTonnes;

  // Phase 3: walk the rocket equation forward to back-allocate per-leg
  // propellant burn. m(after leg) = m(before leg) · exp(−Δv_leg / v_e).
  let wetMass = initialWetMassTonnes;
  const perLegPropellant: PropellantResult[] = [];
  for (const p of planned) {
    p.wetMassDepartureTonnes = wetMass;
    const wetAfter = wetMass * Math.exp(-p.legDeltaVMs / drive.exhaustVelocityMs);
    p.propellantBurnedTonnes = wetMass - wetAfter;
    p.wetMassArrivalTonnes = wetAfter;
    wetMass = wetAfter;
    // Per-leg "what would this leg cost if flown solo" — useful for charts.
    perLegPropellant.push(propellantForDeltaV(dryMassTonnes, p.legDeltaVMs, drive));
  }

  const lastArrival =
    planned.length > 0 ? planned[planned.length - 1].arrivalJd : input.startJd;
  const totalDurationDays = lastArrival - input.startJd;

  return {
    legs: planned,
    totalDurationDays,
    totalDeltaVMs,
    initialPropellantTonnes,
    initialWetMassTonnes,
    initialPropellantFraction: initialPropResult.propellantFraction,
    feasible: initialPropResult.feasible,
    spacecraft: input.spacecraft,
    perLegPropellant,
  };
}

/**
 * Find the leg active at a given simulation time (seconds since the first
 * leg's departure). Returns the leg's index and the fraction of progress
 * through it (0 = leg start, 1 = leg arrival), or null if outside any leg.
 *
 * Used by the UI to highlight which leg is currently in flight on the
 * scrubber and which leg's telemetry to show.
 */
export function findActiveLeg(
  mission: PlannedMission,
  tSinceMissionStartS: number,
): { legIndex: number; legFraction: number; inOrbitPhase: boolean } | null {
  if (mission.legs.length === 0) return null;
  const firstDeparture = mission.legs[0].departureJd;
  const tAbsoluteJd = firstDeparture + tSinceMissionStartS / 86400;
  for (let i = 0; i < mission.legs.length; i++) {
    const leg = mission.legs[i];
    if (tAbsoluteJd < leg.departureJd) {
      // Before this leg: must be in the previous leg's orbit phase.
      return {
        legIndex: i - 1 >= 0 ? i - 1 : 0,
        legFraction: 1, // arrived at previous target
        inOrbitPhase: true,
      };
    }
    if (tAbsoluteJd <= leg.arrivalJd) {
      const f =
        (tAbsoluteJd - leg.departureJd) / (leg.arrivalJd - leg.departureJd);
      return { legIndex: i, legFraction: f, inOrbitPhase: false };
    }
  }
  // Past the last arrival.
  return {
    legIndex: mission.legs.length - 1,
    legFraction: 1,
    inOrbitPhase: true,
  };
}
