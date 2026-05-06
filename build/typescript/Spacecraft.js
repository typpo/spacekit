"use strict";
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
exports.__esModule = true;
exports.__spacecraftTest = exports.Spacecraft = exports.spacecraftStateAfterDeltaV = exports.deltaVForWetMass = exports.propellantForDeltaV = exports.DRIVE_PB11_REFERENCE = void 0;
var C = 2.99792458e8; // m/s
/**
 * Default drive: p-¹¹B directed exhaust per Martin (2026) reference architecture.
 */
exports.DRIVE_PB11_REFERENCE = {
    exhaustVelocityMs: 0.034 * C,
    maxAccelG: 0.43,
    label: 'p-¹¹B directed exhaust (Martin 2026 reference)'
};
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
function propellantForDeltaV(dryMassTonnes, deltaVMs, drive) {
    if (!Number.isFinite(dryMassTonnes) || dryMassTonnes <= 0) {
        throw new Error('dryMassTonnes must be a positive finite number');
    }
    if (!Number.isFinite(deltaVMs) || deltaVMs < 0) {
        throw new Error('deltaVMs must be a non-negative finite number');
    }
    if (!Number.isFinite(drive.exhaustVelocityMs) ||
        drive.exhaustVelocityMs <= 0) {
        throw new Error('drive.exhaustVelocityMs must be a positive finite number');
    }
    var massRatio = Math.exp(deltaVMs / drive.exhaustVelocityMs);
    var propellantMassTonnes = dryMassTonnes * (massRatio - 1);
    var wetMassTonnes = dryMassTonnes + propellantMassTonnes;
    var propellantFraction = propellantMassTonnes / wetMassTonnes;
    return {
        massRatio: massRatio,
        propellantMassTonnes: propellantMassTonnes,
        wetMassTonnes: wetMassTonnes,
        propellantFraction: propellantFraction,
        deltaVMs: deltaVMs,
        feasible: propellantFraction <= 0.6
    };
}
exports.propellantForDeltaV = propellantForDeltaV;
/**
 * Inverse: given a wet mass budget, what Δv can the ship deliver?
 *
 *     Δv = v_e · ln(m_initial / m_final)
 */
function deltaVForWetMass(dryMassTonnes, wetMassTonnes, drive) {
    if (!Number.isFinite(dryMassTonnes) || dryMassTonnes <= 0) {
        throw new Error('dryMassTonnes must be a positive finite number');
    }
    if (!Number.isFinite(wetMassTonnes) || wetMassTonnes < dryMassTonnes) {
        throw new Error('wetMassTonnes must be ≥ dryMassTonnes');
    }
    return drive.exhaustVelocityMs * Math.log(wetMassTonnes / dryMassTonnes);
}
exports.deltaVForWetMass = deltaVForWetMass;
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
function spacecraftStateAfterDeltaV(initialWetMassTonnes, initialPropellantTonnes, drive, deltaVSpentMs) {
    if (!Number.isFinite(deltaVSpentMs) ||
        deltaVSpentMs < 0 ||
        deltaVSpentMs > drive.exhaustVelocityMs * 50 // sanity ceiling: 50× v_e is absurd
    ) {
        throw new Error('deltaVSpentMs must be a finite, sensible non-negative number');
    }
    // m(t) = m_initial · exp(−Δv_spent / v_e)
    var currentWetMassTonnes = initialWetMassTonnes * Math.exp(-deltaVSpentMs / drive.exhaustVelocityMs);
    var propellantBurned = initialWetMassTonnes - currentWetMassTonnes;
    var remainingPropellantTonnes = Math.max(0, initialPropellantTonnes - propellantBurned);
    var dryMassTonnes = initialWetMassTonnes - initialPropellantTonnes;
    var propellantFractionRemaining = initialPropellantTonnes > 0
        ? remainingPropellantTonnes / initialPropellantTonnes
        : 0;
    // Total Δv in budget is what was loaded at departure.
    var deltaVTotalMs = drive.exhaustVelocityMs *
        Math.log((dryMassTonnes + initialPropellantTonnes) / dryMassTonnes);
    var deltaVRemainingMs = Math.max(0, deltaVTotalMs - deltaVSpentMs);
    var G0 = 9.80665;
    var currentAccelMs2 = drive.maxAccelG * G0;
    return {
        currentWetMassTonnes: currentWetMassTonnes,
        remainingPropellantTonnes: remainingPropellantTonnes,
        deltaVSpentMs: deltaVSpentMs,
        deltaVRemainingMs: deltaVRemainingMs,
        currentAccelMs2: currentAccelMs2,
        propellantFractionRemaining: propellantFractionRemaining
    };
}
exports.spacecraftStateAfterDeltaV = spacecraftStateAfterDeltaV;
/**
 * Spacecraft class: a thin wrapper around a SpacecraftConfig with
 * convenience methods for mission feasibility.
 */
var Spacecraft = /** @class */ (function () {
    function Spacecraft(config) {
        if (!config.drive) {
            throw new Error('Spacecraft requires a drive');
        }
        if (!config.mass || config.mass.dryMassTonnes <= 0) {
            throw new Error('Spacecraft requires positive dryMassTonnes');
        }
        this.config = config;
    }
    // Note: getters would be cleaner but Spacekit's tsconfig targets ES3 by
    // default (no `target` field), which forbids class accessors. Methods
    // are functionally equivalent.
    Spacecraft.prototype.name = function () {
        var _a;
        return (_a = this.config.name) !== null && _a !== void 0 ? _a : 'Unnamed Vessel';
    };
    Spacecraft.prototype.drive = function () {
        return this.config.drive;
    };
    Spacecraft.prototype.dryMassTonnes = function () {
        return this.config.mass.dryMassTonnes;
    };
    /**
     * Load propellant required for the given Δv budget. Mutates `this.config.mass`.
     */
    Spacecraft.prototype.loadPropellantForDeltaV = function (deltaVMs) {
        var result = propellantForDeltaV(this.dryMassTonnes(), deltaVMs, this.drive());
        this.config.mass.propellantMassTonnes = result.propellantMassTonnes;
        return result;
    };
    /**
     * Δv this ship can deliver with currently-loaded propellant.
     */
    Spacecraft.prototype.currentDeltaVCapacityMs = function () {
        var wet = this.dryMassTonnes() + this.config.mass.propellantMassTonnes;
        return deltaVForWetMass(this.dryMassTonnes(), wet, this.drive());
    };
    /**
     * Snapshot live state given Δv spent so far on the current leg.
     */
    Spacecraft.prototype.stateAfterDeltaV = function (deltaVSpentMs) {
        var wetMass = this.dryMassTonnes() + this.config.mass.propellantMassTonnes;
        return spacecraftStateAfterDeltaV(wetMass, this.config.mass.propellantMassTonnes, this.drive(), deltaVSpentMs);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
// Internal exports for testing.
exports.__spacecraftTest = { C: C };
