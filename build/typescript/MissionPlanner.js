"use strict";
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
exports.__esModule = true;
exports.findActiveLeg = exports.planMission = void 0;
var Brachistochrone_1 = require("./Brachistochrone");
var Spacecraft_1 = require("./Spacecraft");
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
function planMission(input) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (!input.spacecraft) {
        throw new Error('MissionPlanInput requires a spacecraft');
    }
    if (!Array.isArray(input.legs) || input.legs.length === 0) {
        throw new Error('MissionPlanInput requires at least one leg');
    }
    if (!Number.isFinite(input.startJd)) {
        throw new Error('MissionPlanInput.startJd must be a finite number');
    }
    var drive = input.spacecraft.drive();
    // Phase 1: compute brachistochrone for each leg, accumulating Δv.
    var planned = [];
    var cursorJd = input.startJd;
    var totalDeltaVMs = 0;
    for (var i = 0; i < input.legs.length; i++) {
        var leg = input.legs[i];
        var accelG = (_a = leg.accelG) !== null && _a !== void 0 ? _a : drive.maxAccelG;
        var orbitPhaseDays = (_b = leg.orbitPhaseDays) !== null && _b !== void 0 ? _b : 0;
        // For the first leg, leg.departureJd overrides startJd if provided.
        var departureJd = i === 0
            ? (_c = leg.departureJd) !== null && _c !== void 0 ? _c : cursorJd
            : (_d = leg.departureJd) !== null && _d !== void 0 ? _d : cursorJd + orbitPhaseDays;
        var result = (0, Brachistochrone_1.solveBrachistochrone)({
            originEphem: leg.originEphem,
            targetEphem: leg.targetEphem,
            departureJd: departureJd,
            accelG: accelG
        });
        var legDeltaVMs = result.totalDeltaVMs;
        totalDeltaVMs += legDeltaVMs;
        var label = (_e = leg.label) !== null && _e !== void 0 ? _e : "Leg ".concat(i + 1);
        var originName = (_f = leg.originName) !== null && _f !== void 0 ? _f : "Origin ".concat(i + 1);
        var targetName = (_g = leg.targetName) !== null && _g !== void 0 ? _g : "Target ".concat(i + 1);
        planned.push({
            index: i,
            label: label,
            originName: originName,
            targetName: targetName,
            departureJd: departureJd,
            arrivalJd: result.arrivalJd,
            orbitPhaseDays: orbitPhaseDays,
            accelG: accelG,
            result: result,
            legDeltaVMs: legDeltaVMs,
            // populated below in phase 2
            propellantBurnedTonnes: 0,
            wetMassDepartureTonnes: 0,
            wetMassArrivalTonnes: 0
        });
        cursorJd = result.arrivalJd;
    }
    // Phase 2: compute total propellant required for total Δv.
    var dryMassTonnes = input.spacecraft.dryMassTonnes();
    var initialPropResult = (0, Spacecraft_1.propellantForDeltaV)(dryMassTonnes, totalDeltaVMs, drive);
    var initialWetMassTonnes = initialPropResult.wetMassTonnes;
    var initialPropellantTonnes = initialPropResult.propellantMassTonnes;
    // Phase 3: walk the rocket equation forward to back-allocate per-leg
    // propellant burn. m(after leg) = m(before leg) · exp(−Δv_leg / v_e).
    var wetMass = initialWetMassTonnes;
    var perLegPropellant = [];
    for (var _i = 0, planned_1 = planned; _i < planned_1.length; _i++) {
        var p = planned_1[_i];
        p.wetMassDepartureTonnes = wetMass;
        var wetAfter = wetMass * Math.exp(-p.legDeltaVMs / drive.exhaustVelocityMs);
        p.propellantBurnedTonnes = wetMass - wetAfter;
        p.wetMassArrivalTonnes = wetAfter;
        wetMass = wetAfter;
        // Per-leg "what would this leg cost if flown solo" — useful for charts.
        perLegPropellant.push((0, Spacecraft_1.propellantForDeltaV)(dryMassTonnes, p.legDeltaVMs, drive));
    }
    var lastArrival = planned.length > 0 ? planned[planned.length - 1].arrivalJd : input.startJd;
    var totalDurationDays = lastArrival - input.startJd;
    return {
        legs: planned,
        totalDurationDays: totalDurationDays,
        totalDeltaVMs: totalDeltaVMs,
        initialPropellantTonnes: initialPropellantTonnes,
        initialWetMassTonnes: initialWetMassTonnes,
        initialPropellantFraction: initialPropResult.propellantFraction,
        feasible: initialPropResult.feasible,
        spacecraft: input.spacecraft,
        perLegPropellant: perLegPropellant
    };
}
exports.planMission = planMission;
/**
 * Find the leg active at a given simulation time (seconds since the first
 * leg's departure). Returns the leg's index and the fraction of progress
 * through it (0 = leg start, 1 = leg arrival), or null if outside any leg.
 *
 * Used by the UI to highlight which leg is currently in flight on the
 * scrubber and which leg's telemetry to show.
 */
function findActiveLeg(mission, tSinceMissionStartS) {
    if (mission.legs.length === 0)
        return null;
    var firstDeparture = mission.legs[0].departureJd;
    var tAbsoluteJd = firstDeparture + tSinceMissionStartS / 86400;
    for (var i = 0; i < mission.legs.length; i++) {
        var leg = mission.legs[i];
        if (tAbsoluteJd < leg.departureJd) {
            // Before this leg: must be in the previous leg's orbit phase.
            return {
                legIndex: i - 1 >= 0 ? i - 1 : 0,
                legFraction: 1,
                inOrbitPhase: true
            };
        }
        if (tAbsoluteJd <= leg.arrivalJd) {
            var f = (tAbsoluteJd - leg.departureJd) / (leg.arrivalJd - leg.departureJd);
            return { legIndex: i, legFraction: f, inOrbitPhase: false };
        }
    }
    // Past the last arrival.
    return {
        legIndex: mission.legs.length - 1,
        legFraction: 1,
        inOrbitPhase: true
    };
}
exports.findActiveLeg = findActiveLeg;
