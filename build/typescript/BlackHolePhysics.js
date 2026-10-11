"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCHWARZSCHILD_CRITICAL_IMPACT = exports.METERS_PER_AU = exports.SOLAR_GM = exports.SPEED_OF_LIGHT = void 0;
exports.schwarzschildRadiusAu = schwarzschildRadiusAu;
exports.schwarzschildOrbitalPeriodSeconds = schwarzschildOrbitalPeriodSeconds;
exports.stepSchwarzschildRay = stepSchwarzschildRay;
/** Schwarzschild geometry. Distances used by the ray solver are in horizon radii. */
exports.SPEED_OF_LIGHT = 299792458;
// IAU 2015 nominal solar mass parameter (m^3 s^-2), avoiding uncertainty in G.
exports.SOLAR_GM = 1.3271244e20;
exports.METERS_PER_AU = 149597870700;
exports.SCHWARZSCHILD_CRITICAL_IMPACT = (3 * Math.sqrt(3)) / 2;
function schwarzschildRadiusAu(massSolar) {
    if (!Number.isFinite(massSolar) || massSolar <= 0) {
        throw new Error('Black hole massSolar must be finite and positive');
    }
    return (2 * exports.SOLAR_GM * massSolar) / Math.pow(exports.SPEED_OF_LIGHT, 2) / exports.METERS_PER_AU;
}
/** Circular geodesic period, measured at infinity, at r >= 3 horizon radii. */
function schwarzschildOrbitalPeriodSeconds(massSolar, radiusInSchwarzschildRadii) {
    var rs = schwarzschildRadiusAu(massSolar) * exports.METERS_PER_AU;
    if (!Number.isFinite(radiusInSchwarzschildRadii) ||
        radiusInSchwarzschildRadii < 3) {
        throw new Error('Stable circular orbits require radius >= 3 Schwarzschild radii');
    }
    return (((2 * Math.PI * rs) / exports.SPEED_OF_LIGHT) *
        Math.sqrt(2 * Math.pow(radiusInSchwarzschildRadii, 3)));
}
/**
 * Reference null-geodesic solver, also useful for checking the GPU integrator.
 * u = rs/r, v = du/dphi; u'' = 1.5 u^2 - u. The conserved quantity is
 * v^2 + u^2 - u^3 = 1/b^2. See guides/black-holes.md for conventions.
 */
function stepSchwarzschildRay(u, v, step) {
    var acceleration = function (x) { return 1.5 * x * x - x; };
    var a = acceleration(u);
    var b = acceleration(u + (step * v) / 2);
    var c = acceleration(u + (step * (v + (step * a) / 2)) / 2);
    var d = acceleration(u + step * (v + (step * b) / 2));
    return [
        u +
            (step *
                (v +
                    2 * (v + (step * a) / 2) +
                    2 * (v + (step * b) / 2) +
                    (v + step * c))) /
                6,
        v + (step * (a + 2 * b + 2 * c + d)) / 6,
    ];
}
