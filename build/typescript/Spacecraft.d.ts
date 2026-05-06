/**
 * Spacecraft model for high-thrust mission analysis.
 *
 * Holds drive parameters (specific impulse / exhaust velocity, acceleration),
 * mass partitioning (dry mass, propellant), and provides feasibility and
 * propellant-accounting helpers tied to brachistochrone Δv budgets via the
 * rocket equation.
 *
 * This is deliberately a plain physics class, not a Three.js / SpaceObject
 * subclass. Spacecraft do not follow Keplerian ephemerides — their position
 * is the output of a trajectory solver (see Brachistochrone). Rendering
 * (mesh, thrust glow, attitude orientation) lives in the consuming
 * application.
 *
 * Reference parameters from Martin (2026) "Phase Space Reframing for
 * Directed Fusion Exhaust":
 *   - exhaust velocity v_e ≈ 0.034c (with smearing factor applied)
 *   - acceleration profile 0.43g for the 10-day Earth-Jupiter reference mission
 *   - 1000-tonne reference vehicle yields propellant fraction ~28-31% for
 *     a brachistochrone Δv ≈ 0.012c.
 */
/** Drive specification: how the propulsion converts propellant mass to Δv. */
export interface DriveSpec {
    /**
     * Effective exhaust velocity in m/s. For p-¹¹B directed exhaust per
     * Martin (2026): v_e = 0.039c × √η_d_total. With smearing and capture
     * factored, η_d_total ≈ 0.765, giving v_e ≈ 0.034c ≈ 1.02e7 m/s.
     */
    exhaustVelocityMs: number;
    /**
     * Continuous proper acceleration available in g. The ship can produce
     * any thrust between 0 and a_max·m_total; for a brachistochrone profile
     * the ship runs at a_max throughout the boost and decel phases.
     */
    maxAccelG: number;
    /**
     * Specific impulse derived from exhaust velocity (convenience). Computed
     * lazily; do not set directly.
     */
    readonly ispS?: number;
    /**
     * Optional human-readable label, e.g. "p-¹¹B Directed Exhaust" or
     * "D-T Magnetic Confinement". Used in UI and PR comparisons.
     */
    label?: string;
}
/**
 * Default drive: p-¹¹B directed exhaust per Martin (2026) reference architecture.
 */
export declare const DRIVE_PB11_REFERENCE: DriveSpec;
/** Dry-mass and payload partitioning. */
export interface ShipMass {
    /** Structural + drive + radiator + payload mass, in tonnes. */
    dryMassTonnes: number;
    /**
     * Currently loaded propellant mass, in tonnes. May be set explicitly or
     * derived from a Δv budget via the rocket equation.
     */
    propellantMassTonnes: number;
}
/**
 * Full spacecraft definition. Drive + mass + an optional name.
 */
export interface SpacecraftConfig {
    name?: string;
    drive: DriveSpec;
    mass: ShipMass;
}
/**
 * Result of a propellant computation for a given Δv budget.
 */
export interface PropellantResult {
    /** Mass ratio m_initial / m_final = exp(Δv / v_e). */
    massRatio: number;
    /** Propellant mass required, in tonnes. */
    propellantMassTonnes: number;
    /** Total wet mass at departure (dry + propellant), in tonnes. */
    wetMassTonnes: number;
    /** Propellant mass fraction = propellant / wet, in [0, 1]. */
    propellantFraction: number;
    /** Δv used to compute (echoed for convenience), in m/s. */
    deltaVMs: number;
    /**
     * True iff the propellant fraction is at or below 0.6, which is the
     * paper's loose threshold for "operationally viable" interplanetary
     * transport. Higher fractions are physically possible but compete with
     * payload mass to the point of rendering missions impractical.
     */
    feasible: boolean;
}
/**
 * Compute propellant requirements via the Tsiolkovsky rocket equation.
 *
 * Given a dry mass and a required Δv budget, returns the propellant mass
 * needed and the resulting wet/dry split. Uses the relativistic-aware form
 * of the rocket equation only when Δv is a substantial fraction of c (the
 * Newtonian form is sufficient for our domain since Δv ~ 0.012c).
 *
 *     m_initial / m_final = exp(Δv / v_e)
 *     m_propellant = m_dry · (e^(Δv/v_e) − 1)
 */
export declare function propellantForDeltaV(dryMassTonnes: number, deltaVMs: number, drive: DriveSpec): PropellantResult;
/**
 * Inverse: given a wet mass budget, what Δv can the ship deliver?
 *
 *     Δv = v_e · ln(m_initial / m_final)
 */
export declare function deltaVForWetMass(dryMassTonnes: number, wetMassTonnes: number, drive: DriveSpec): number;
/**
 * Live spacecraft state: how much propellant has been spent at sim time t,
 * what wet mass remains, what current acceleration capability looks like.
 *
 * Propellant burn rate during a brachistochrone leg is constant in m/s of
 * Δv per second (since acceleration is constant), but mass loss rate per
 * second is m_dot = thrust / v_e = a · m / v_e — so it varies as the ship
 * gets lighter. We approximate this with the closed-form solution of the
 * rocket equation evaluated at the Δv accumulated so far.
 */
export interface SpacecraftLiveState {
    /** Wet mass remaining (dry + remaining propellant), in tonnes. */
    currentWetMassTonnes: number;
    /** Propellant remaining, in tonnes. */
    remainingPropellantTonnes: number;
    /** Δv spent so far (since departure), in m/s. */
    deltaVSpentMs: number;
    /** Δv remaining in the budget, in m/s. */
    deltaVRemainingMs: number;
    /** Current proper acceleration in m/s² (a_max in g × g₀). */
    currentAccelMs2: number;
    /** Fractional propellant remaining in [0, 1]. */
    propellantFractionRemaining: number;
}
/**
 * Snapshot the ship's mass / propellant state at a point during a leg.
 *
 * Inputs:
 *   - initialWetMassTonnes: wet mass at the start of this leg
 *   - drive: drive spec
 *   - deltaVSpentMs: integrated Δv used since the start of this leg
 *
 * The remaining propellant is computed by inverting the rocket equation
 * for the Δv spent, then subtracting from the leg's loaded propellant.
 */
export declare function spacecraftStateAfterDeltaV(initialWetMassTonnes: number, initialPropellantTonnes: number, drive: DriveSpec, deltaVSpentMs: number): SpacecraftLiveState;
/**
 * Spacecraft class: a thin wrapper around a SpacecraftConfig with
 * convenience methods for mission feasibility.
 */
export declare class Spacecraft {
    readonly config: SpacecraftConfig;
    constructor(config: SpacecraftConfig);
    name(): string;
    drive(): DriveSpec;
    dryMassTonnes(): number;
    /**
     * Load propellant required for the given Δv budget. Mutates `this.config.mass`.
     */
    loadPropellantForDeltaV(deltaVMs: number): PropellantResult;
    /**
     * Δv this ship can deliver with currently-loaded propellant.
     */
    currentDeltaVCapacityMs(): number;
    /**
     * Snapshot live state given Δv spent so far on the current leg.
     */
    stateAfterDeltaV(deltaVSpentMs: number): SpacecraftLiveState;
}
export declare const __spacecraftTest: {
    C: number;
};
