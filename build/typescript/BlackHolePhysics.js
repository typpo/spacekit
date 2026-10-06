"use strict";
/**
 * Physics helpers for Schwarzschild (non-rotating) black holes.
 *
 * Unless stated otherwise, lengths are expressed in units of the
 * Schwarzschild radius rs = 2GM/c^2, so the event horizon is at r = 1, the
 * photon sphere is at r = 1.5, and the innermost stable circular orbit (ISCO)
 * is at r = 3. Time is expressed in units of rs / c.
 *
 * The GLSL ray tracer in `shaders.ts` mirrors these functions. They are
 * implemented here as well so the physics can be verified in tests.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.bendTowardCenter = exports.boundaryEntry = exports.traceGeodesic = exports.geodesicStepSize = exports.geodesicStep = exports.GEODESIC_MAX_STEPS = exports.GEODESIC_MAX_STEP = exports.GEODESIC_MIN_STEP = exports.GEODESIC_STEP_FACTOR = exports.blackbodyLuminance = exports.blackbodyColor = exports.xyzToLinearSrgb = exports.blackbodyXyz = exports.SPECTRUM_MAX_NM = exports.SPECTRUM_MIN_NM = exports.SPECTRUM_SAMPLES = exports.planck = exports.residualDeflection = exports.diskObservedIntensity = exports.gaussianSlabColumn = exports.erf = exports.diskHalfThicknessProfile = exports.shakuraSunyaevStructure = exports.diskThicknessScale = exports.diskHalfThickness = exports.diskRedshiftFactor = exports.impactParameter = exports.diskTemperatureRatio = exports.diskPeakTemperature = exports.DISK_RADIATIVE_EFFICIENCY = exports.novikovThorneFluxPeak = exports.novikovThorneFluxNumeric = exports.novikovThorneFlux = exports.orbitalAngularVelocity = exports.schwarzschildRadiusAu = exports.schwarzschildRadiusKm = exports.CRITICAL_IMPACT_PARAMETER = exports.ISCO_RADIUS = exports.PHOTON_SPHERE_RADIUS = exports.EVENT_HORIZON_RADIUS = exports.GM_SUN_KM3_S2 = exports.SPEED_OF_LIGHT_KM_S = void 0;
var Units_1 = __importDefault(require("./Units"));
/** Speed of light, km/s */
exports.SPEED_OF_LIGHT_KM_S = 299792.458;
/** Gravitational parameter of the Sun (GM), km^3/s^2 */
exports.GM_SUN_KM3_S2 = 1.32712440018e11;
/** Event horizon radius, in Schwarzschild radii. */
exports.EVENT_HORIZON_RADIUS = 1;
/** Radius of the photon sphere (unstable circular light orbits), in rs. */
exports.PHOTON_SPHERE_RADIUS = 1.5;
/** Radius of the innermost stable circular orbit, in rs. */
exports.ISCO_RADIUS = 3;
/**
 * Critical impact parameter, in rs. Light approaching from infinity with a
 * smaller impact parameter is captured by the black hole. This is the radius
 * of the black hole "shadow" seen by a distant observer: 3 * sqrt(3) / 2 rs.
 */
exports.CRITICAL_IMPACT_PARAMETER = (3 * Math.sqrt(3)) / 2;
/**
 * Schwarzschild radius in km for a black hole of the given mass.
 * @param {Number} massSolar Mass in solar masses
 * @return {Number} rs in km
 */
function schwarzschildRadiusKm(massSolar) {
    return ((2 * exports.GM_SUN_KM3_S2 * massSolar) /
        (exports.SPEED_OF_LIGHT_KM_S * exports.SPEED_OF_LIGHT_KM_S));
}
exports.schwarzschildRadiusKm = schwarzschildRadiusKm;
/**
 * Schwarzschild radius in AU for a black hole of the given mass.
 * @param {Number} massSolar Mass in solar masses
 * @return {Number} rs in AU
 */
function schwarzschildRadiusAu(massSolar) {
    return Units_1["default"].kmToAu(schwarzschildRadiusKm(massSolar));
}
exports.schwarzschildRadiusAu = schwarzschildRadiusAu;
/**
 * Angular velocity of a circular (Keplerian) geodesic orbit at radius r, as
 * measured by an observer at infinity. Units of c / rs.
 */
function orbitalAngularVelocity(r) {
    // Omega = sqrt(M / r^3) with M = 1/2 in units of rs.
    return Math.sqrt(0.5 / (r * r * r));
}
exports.orbitalAngularVelocity = orbitalAngularVelocity;
/**
 * Relativistic radiative flux emitted by one face of a thin accretion disk
 * (Novikov & Thorne 1973; Page & Thorne 1974), for a Schwarzschild black
 * hole with the inner edge of the disk at the ISCO.
 *
 * The returned value is the flux in units of Mdot c^2 / (4 pi (GM/c^2)^2),
 * using the closed-form solution of the Page-Thorne integral.
 *
 * @param {Number} r Radius in rs
 * @return {Number} Flux (arbitrary normalization). Zero inside the ISCO.
 */
function novikovThorneFlux(r) {
    if (r <= exports.ISCO_RADIUS) {
        return 0;
    }
    // Work in units of M where x = sqrt(r / M).
    var x = Math.sqrt(2 * r);
    var xms = Math.sqrt(2 * exports.ISCO_RADIUS);
    var s3 = Math.sqrt(3);
    var integral = x -
        xms -
        (s3 / 2) *
            (Math.log((x - s3) / (x + s3)) - Math.log((xms - s3) / (xms + s3)));
    return (1.5 * integral) / (Math.pow(x, 5) * (x * x - 3));
}
exports.novikovThorneFlux = novikovThorneFlux;
/**
 * Numerically evaluates the general relativistic thin-disk flux from first
 * principles (orbital energy, angular momentum and angular velocity of
 * circular geodesics). Used to check `novikovThorneFlux`.
 * @param {Number} r Radius in rs
 * @param {Number} steps Integration steps
 * @return {Number} Flux, same normalization as `novikovThorneFlux`
 */
function novikovThorneFluxNumeric(r, steps) {
    if (steps === void 0) { steps = 20000; }
    if (r <= exports.ISCO_RADIUS) {
        return 0;
    }
    // Units of M (G = c = M = 1).
    var E = function (rm) { return (1 - 2 / rm) / Math.sqrt(1 - 3 / rm); };
    var L = function (rm) { return Math.sqrt(rm) / Math.sqrt(1 - 3 / rm); };
    var Omega = function (rm) { return Math.pow(rm, -1.5); };
    var d = function (f, x) {
        var h = 1e-5 * x;
        return (f(x + h) - f(x - h)) / (2 * h);
    };
    var rm = 2 * r;
    var rms = 2 * exports.ISCO_RADIUS;
    var integral = 0;
    var dr = (rm - rms) / steps;
    for (var i = 0; i < steps; i++) {
        var x = rms + (i + 0.5) * dr;
        integral += (E(x) - Omega(x) * L(x)) * d(L, x) * dr;
    }
    var eMinusOmegaL = E(rm) - Omega(rm) * L(rm);
    // sqrt(-g) = r in the equatorial plane of the Schwarzschild metric.
    return (-d(Omega, rm) / (rm * eMinusOmegaL * eMinusOmegaL)) * integral;
}
exports.novikovThorneFluxNumeric = novikovThorneFluxNumeric;
/**
 * Finds the radius and value of the maximum disk temperature. Since T ~
 * F^(1/4), the temperature peaks where the flux peaks.
 * @param {Number} outerRadius Outer radius of disk, in rs
 * @return {{radius: number, flux: number}} Location and flux of the peak
 */
function novikovThorneFluxPeak(outerRadius) {
    if (outerRadius === void 0) { outerRadius = 100; }
    var radius = exports.ISCO_RADIUS;
    var flux = 0;
    var steps = 4000;
    for (var i = 1; i <= steps; i++) {
        var r = exports.ISCO_RADIUS + ((outerRadius - exports.ISCO_RADIUS) * i) / steps;
        var f = novikovThorneFlux(r);
        if (f > flux) {
            flux = f;
            radius = r;
        }
    }
    return { radius: radius, flux: flux };
}
exports.novikovThorneFluxPeak = novikovThorneFluxPeak;
/** Stefan-Boltzmann constant, W m^-2 K^-4 */
var STEFAN_BOLTZMANN = 5.670374419e-8;
/** Eddington luminance per solar mass (ionized hydrogen), W */
var EDDINGTON_LUMINOSITY_PER_SOLAR_MASS = 1.2572e31;
/**
 * Radiative efficiency of a thin disk around a Schwarzschild black hole: the
 * fraction of rest mass energy released before matter plunges in from the
 * ISCO, 1 - sqrt(8/9), about 5.7%.
 */
exports.DISK_RADIATIVE_EFFICIENCY = 1 - Math.sqrt(8 / 9);
/**
 * Maximum effective temperature of a Novikov-Thorne accretion disk.
 *
 * @param {Number} massSolar Black hole mass in solar masses
 * @param {Number} eddingtonRatio Disk luminosity as a fraction of the
 * Eddington luminosity
 * @return {Number} Peak temperature in Kelvin
 */
function diskPeakTemperature(massSolar, eddingtonRatio) {
    var c = exports.SPEED_OF_LIGHT_KM_S * 1000;
    var luminosity = eddingtonRatio * EDDINGTON_LUMINOSITY_PER_SOLAR_MASS * massSolar;
    var accretionRate = luminosity / (exports.DISK_RADIATIVE_EFFICIENCY * c * c);
    // Gravitational radius GM / c^2 in meters.
    var rg = (exports.GM_SUN_KM3_S2 * 1e9 * massSolar) / (c * c);
    // Restore units to the flux, which is in units of Mdot c^2 / (4 pi rg^2).
    var flux = ((accretionRate * c * c) / (4 * Math.PI * rg * rg)) *
        novikovThorneFluxPeak().flux;
    return Math.pow(flux / STEFAN_BOLTZMANN, 0.25);
}
exports.diskPeakTemperature = diskPeakTemperature;
/**
 * Local effective temperature of the disk at radius r, relative to the
 * maximum temperature of the disk.
 * @param {Number} r Radius in rs
 * @return {Number} T(r) / T_max, between 0 and 1
 */
function diskTemperatureRatio(r) {
    return Math.pow(novikovThorneFlux(r) / novikovThorneFluxPeak().flux, 0.25);
}
exports.diskTemperatureRatio = diskTemperatureRatio;
/**
 * Impact parameter b = L / E of a photon (in rs) passing through `pos` with
 * coordinate direction `dir`, using the conserved quantities of the
 * Schwarzschild orbit equation as integrated by the ray tracer.
 */
function impactParameter(pos, dir) {
    var r = norm(pos);
    var h = norm(cross(pos, dir));
    var v2 = dot(dir, dir);
    // |v|^2 / h^2 - rs / r^3 = 1 / b^2 is conserved along the ray.
    var invB2 = v2 / (h * h) - 1 / (r * r * r);
    return invB2 > 0 ? 1 / Math.sqrt(invB2) : 0;
}
exports.impactParameter = impactParameter;
/**
 * Ratio of observed to emitted frequency, g = nu_obs / nu_emit, for light
 * emitted by disk material on a circular orbit at radius r and received by a
 * distant observer. Combines gravitational redshift, time dilation and the
 * relativistic Doppler effect.
 *
 * @param {Number} r Emission radius in rs
 * @param {Number} lambda Photon angular momentum about the disk axis per unit
 * energy (L_z / E), in rs. Positive when the photon moves in the same sense
 * as the disk rotation.
 * @return {Number} Frequency shift factor g
 */
function diskRedshiftFactor(r, lambda) {
    // nu_emit / nu_obs = u^t (1 - Omega * lambda), u^t = 1 / sqrt(1 - 3M / r).
    return Math.sqrt(1 - 1.5 / r) / (1 - orbitalAngularVelocity(r) * lambda);
}
exports.diskRedshiftFactor = diskRedshiftFactor;
/**
 * Half-thickness of a radiation-pressure supported thin disk (Shakura &
 * Sunyaev 1973), in rs. In the inner disk, where radiation pressure
 * dominates, H = (3 kappa Mdot / (8 pi c)) (1 - sqrt(r_in / r)), which in
 * terms of the Eddington ratio is (3/4) (L / L_Edd) / eta rs times the same
 * radial factor. It is independent of the black hole mass.
 *
 * @param {Number} r Radius in rs
 * @param {Number} eddingtonRatio Disk luminosity over Eddington luminosity
 * @return {Number} Half-thickness in rs
 */
function diskHalfThickness(r, eddingtonRatio) {
    if (r <= exports.ISCO_RADIUS) {
        return 0;
    }
    return diskThicknessScale(eddingtonRatio) * (1 - Math.sqrt(exports.ISCO_RADIUS / r));
}
exports.diskHalfThickness = diskHalfThickness;
/**
 * Coefficient of the radial factor in `diskHalfThickness`, in rs.
 */
function diskThicknessScale(eddingtonRatio) {
    return (0.75 * eddingtonRatio) / exports.DISK_RADIATIVE_EFFICIENCY;
}
exports.diskThicknessScale = diskThicknessScale;
// CGS constants for the disk structure solver. The gas is ionized hydrogen,
// consistent with the Eddington luminosity used for the accretion rate.
var CGS_G = 6.6743e-8;
var CGS_C = 2.99792458e10;
var CGS_K = 1.380649e-16;
var CGS_PROTON_MASS = 1.67262192e-24;
var CGS_SIGMA = 5.670374419e-5;
var CGS_SOLAR_MASS = 1.98847e33;
var MEAN_MOLECULAR_WEIGHT = 0.5;
var ELECTRON_SCATTERING_OPACITY = 0.4;
// Kramers free-free opacity coefficient used by Shakura & Sunyaev (1973).
var FREE_FREE_OPACITY = 6.4e22;
/**
 * Solves the Shakura-Sunyaev (1973) alpha-disk equations at radius r:
 * angular momentum transport (nu Sigma = Mdot f / 3 pi, nu = alpha c_s H),
 * vertical hydrostatic balance (H = c_s / Omega), gas plus radiation
 * pressure, radiative diffusion (4 sigma T^4 / 3 tau = F) and electron
 * scattering plus free-free opacity.
 *
 * Solving the full equations rather than using the asymptotic fits lets the
 * disk move smoothly between the radiation-pressure dominated inner region,
 * where H is constant, and the gas-pressure dominated outer regions, where
 * the disk flares (H ~ r^(21/20) to r^(9/8)).
 *
 * @param {Number} r Radius in rs
 * @param {Number} massSolar Black hole mass in solar masses
 * @param {Number} eddingtonRatio Disk luminosity over Eddington luminosity
 * @param {Number} alpha Shakura-Sunyaev viscosity parameter
 * @return {DiskStructure} Structure, or undefined inside the ISCO
 */
function shakuraSunyaevStructure(r, massSolar, eddingtonRatio, alpha) {
    if (alpha === void 0) { alpha = 0.1; }
    if (r <= exports.ISCO_RADIUS || eddingtonRatio <= 0) {
        return undefined;
    }
    var mass = massSolar * CGS_SOLAR_MASS;
    var rsCm = (2 * CGS_G * mass) / (CGS_C * CGS_C);
    var radius = r * rsCm;
    var omega = Math.sqrt((CGS_G * mass) / (radius * radius * radius));
    var f = 1 - Math.sqrt(exports.ISCO_RADIUS / r);
    var eddington = (4 * Math.PI * CGS_G * mass * CGS_C) / ELECTRON_SCATTERING_OPACITY;
    var accretionRate = (eddingtonRatio * eddington) / (exports.DISK_RADIATIVE_EFFICIENCY * CGS_C * CGS_C);
    var flux = (3 * CGS_G * mass * accretionRate * f) /
        (8 * Math.PI * radius * radius * radius);
    // Everything follows from H: viscosity, surface density, density, and the
    // midplane temperature that carries the flux out by radiative diffusion.
    var solveAt = function (h) {
        var surfaceDensity = (accretionRate * f) / (3 * Math.PI * alpha * h * h * omega);
        var density = surfaceDensity / (2 * h);
        var residual = function (t) {
            return Math.pow(t, 4) -
                (3 *
                    (ELECTRON_SCATTERING_OPACITY +
                        FREE_FREE_OPACITY * density * Math.pow(t, -3.5)) *
                    surfaceDensity *
                    flux) /
                    (8 * CGS_SIGMA);
        };
        var lo = 1;
        var hi = 1e10;
        for (var i = 0; i < 100; i++) {
            var mid = Math.sqrt(lo * hi);
            if (residual(mid) > 0) {
                hi = mid;
            }
            else {
                lo = mid;
            }
        }
        var temperature = Math.sqrt(lo * hi);
        var gasPressure = (density * CGS_K * temperature) /
            (MEAN_MOLECULAR_WEIGHT * CGS_PROTON_MASS);
        var radiationPressure = ((4 * CGS_SIGMA) / (3 * CGS_C)) * Math.pow(temperature, 4);
        return {
            surfaceDensity: surfaceDensity,
            temperature: temperature,
            gasPressure: gasPressure,
            radiationPressure: radiationPressure,
            // Pressure needed for hydrostatic balance minus pressure available.
            imbalance: density * h * h * omega * omega - gasPressure - radiationPressure
        };
    };
    var lo = 1e-8 * radius;
    var hi = 10 * radius;
    for (var i = 0; i < 100; i++) {
        var mid = Math.sqrt(lo * hi);
        if (solveAt(mid).imbalance > 0) {
            hi = mid;
        }
        else {
            lo = mid;
        }
    }
    var h = Math.sqrt(lo * hi);
    var solution = solveAt(h);
    return {
        halfThickness: h / rsCm,
        midplaneTemperature: solution.temperature,
        surfaceDensity: solution.surfaceDensity,
        radiationPressureFraction: solution.radiationPressure /
            (solution.radiationPressure + solution.gasPressure)
    };
}
exports.shakuraSunyaevStructure = shakuraSunyaevStructure;
/**
 * Disk half-thickness from `shakuraSunyaevStructure`, sampled at radii
 * spaced evenly in log r between the ISCO and `outerRadius`.
 *
 * @return {{logMin: number, logMax: number, heights: number[]}} Natural log
 * of the first and last radius, and H (in rs) at each sample
 */
function diskHalfThicknessProfile(outerRadius, massSolar, eddingtonRatio, alpha, samples) {
    if (alpha === void 0) { alpha = 0.1; }
    if (samples === void 0) { samples = 128; }
    // Start just outside the ISCO, where the thickness goes to zero.
    var logMin = Math.log(exports.ISCO_RADIUS * 1.0001);
    var logMax = Math.log(Math.max(outerRadius, exports.ISCO_RADIUS * 1.01));
    var heights = [];
    for (var i = 0; i < samples; i++) {
        var r = Math.exp(logMin + ((logMax - logMin) * i) / (samples - 1));
        var structure = shakuraSunyaevStructure(r, massSolar, eddingtonRatio, alpha);
        heights.push(structure ? structure.halfThickness : 0);
    }
    return { logMin: logMin, logMax: logMax, heights: heights };
}
exports.diskHalfThicknessProfile = diskHalfThicknessProfile;
/**
 * Error function, Abramowitz & Stegun 7.1.26 (max error 1.5e-7). Mirrored
 * in the shader.
 */
function erf(x) {
    var sign = x < 0 ? -1 : 1;
    var ax = Math.abs(x);
    var t = 1 / (1 + 0.3275911 * ax);
    var y = 1 -
        ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) *
            t +
            0.254829592) *
            t *
            Math.exp(-ax * ax);
    return sign * y;
}
exports.erf = erf;
/**
 * Column density along a straight segment of length `length` through a
 * Gaussian slab exp(-z^2 / (2 sigma^2)), where the height changes linearly
 * from z0 to z1. Integrated exactly, so a thin slab is never stepped over.
 */
function gaussianSlabColumn(z0, z1, sigma, length) {
    var dz = z1 - z0;
    if (Math.abs(dz) < 1e-4 * sigma) {
        var zm = 0.5 * (z0 + z1);
        return length * Math.exp((-zm * zm) / (2 * sigma * sigma));
    }
    var k = Math.SQRT2 * sigma;
    return ((length / dz) * Math.sqrt(Math.PI / 2) * sigma * (erf(z1 / k) - erf(z0 / k)));
}
exports.gaussianSlabColumn = gaussianSlabColumn;
/**
 * Bolometric intensity of the disk seen by a distant observer, relative to
 * the hottest point of the disk as seen in its rest frame. Since I_nu / nu^3
 * is invariant along a ray, a blackbody at T is observed as a blackbody at
 * g * T, and the bolometric intensity (~ T^4) scales as g^4.
 *
 * @param {Number} r Emission radius in rs
 * @param {Number} lambda Photon L_z / E in rs (see `diskRedshiftFactor`)
 * @return {Number} Relative observed intensity
 */
function diskObservedIntensity(r, lambda) {
    var g = diskRedshiftFactor(r, lambda);
    return Math.pow(g, 4) * (novikovThorneFlux(r) / novikovThorneFluxPeak().flux);
}
exports.diskObservedIntensity = diskObservedIntensity;
/**
 * Remaining weak-field light deflection, in radians, for a ray at `pos`
 * moving in direction `dir` (both in rs) as it travels to infinity. Used to
 * extend rays that leave the region where geodesics are integrated.
 *
 * Integrates the transverse part of the orbit-equation acceleration
 * (3/2) rs h^2 / r^4 along the straight line to first order. This is the
 * distribution of bending in Schwarzschild coordinates, i.e. the same
 * coordinates the integrator uses, and it totals 2 rs / b for a full pass.
 */
function residualDeflection(pos, dir) {
    var d = normalize(dir);
    var along = dot(pos, d);
    var b = norm(cross(pos, d));
    if (b === 0) {
        return 0;
    }
    var s = along / Math.sqrt(b * b + along * along);
    return (1 / b) * (1 - 1.5 * s + 0.5 * s * s * s);
}
exports.residualDeflection = residualDeflection;
// CIE 1931 2-degree color matching functions, multi-lobe Gaussian fit from
// Wyman, Sloan & Shirley (2013), "Simple Analytic Approximations to the CIE
// XYZ Color Matching Functions".
function lobe(x, mu, s1, s2) {
    var t = (x - mu) / (x < mu ? s1 : s2);
    return Math.exp(-0.5 * t * t);
}
function cieXyz(nm) {
    return [
        1.056 * lobe(nm, 599.8, 37.9, 31.0) +
            0.362 * lobe(nm, 442.0, 16.0, 26.7) -
            0.065 * lobe(nm, 501.1, 20.4, 26.2),
        0.821 * lobe(nm, 568.8, 46.9, 40.5) + 0.286 * lobe(nm, 530.9, 16.3, 31.1),
        1.217 * lobe(nm, 437.0, 11.8, 36.0) + 0.681 * lobe(nm, 459.0, 26.0, 13.8),
    ];
}
/** Second radiation constant hc / k, in nm * K. */
var C2_NM_K = 1.438777e7;
/**
 * Planck spectral radiance with an arbitrary constant factor removed.
 * @param {Number} nm Wavelength in nm
 * @param {Number} temperature Temperature in K
 */
function planck(nm, temperature) {
    var um = nm / 1000;
    return 1 / (Math.pow(um, 5) * (Math.exp(C2_NM_K / (nm * temperature)) - 1));
}
exports.planck = planck;
/**
 * Number of samples and range used to integrate a spectrum over the visible
 * band. Keep in sync with the black hole fragment shader.
 */
exports.SPECTRUM_SAMPLES = 16;
exports.SPECTRUM_MIN_NM = 380;
exports.SPECTRUM_MAX_NM = 780;
/**
 * CIE XYZ tristimulus values of a blackbody (arbitrary normalization).
 * @param {Number} temperature Temperature in K
 * @return {Array.<Number>} XYZ
 */
function blackbodyXyz(temperature) {
    var xyz = [0, 0, 0];
    var step = (exports.SPECTRUM_MAX_NM - exports.SPECTRUM_MIN_NM) / exports.SPECTRUM_SAMPLES;
    for (var i = 0; i < exports.SPECTRUM_SAMPLES; i++) {
        var nm = exports.SPECTRUM_MIN_NM + (i + 0.5) * step;
        var b = planck(nm, temperature);
        var cmf = cieXyz(nm);
        xyz[0] += b * cmf[0] * step;
        xyz[1] += b * cmf[1] * step;
        xyz[2] += b * cmf[2] * step;
    }
    return xyz;
}
exports.blackbodyXyz = blackbodyXyz;
/**
 * Convert CIE XYZ to linear sRGB (D65).
 */
function xyzToLinearSrgb(xyz) {
    var x = xyz[0], y = xyz[1], z = xyz[2];
    return [
        3.2406 * x - 1.5372 * y - 0.4986 * z,
        -0.9689 * x + 1.8758 * y + 0.0415 * z,
        0.0557 * x - 0.204 * y + 1.057 * z,
    ];
}
exports.xyzToLinearSrgb = xyzToLinearSrgb;
/**
 * Linear sRGB color of a blackbody, normalized so the brightest channel is 1.
 * @param {Number} temperature Temperature in K
 * @return {Array.<Number>} RGB, each between 0 and 1
 */
function blackbodyColor(temperature) {
    var rgb = xyzToLinearSrgb(blackbodyXyz(temperature)).map(function (c) {
        return Math.max(c, 0);
    });
    var max = Math.max(rgb[0], rgb[1], rgb[2]);
    return [rgb[0] / max, rgb[1] / max, rgb[2] / max];
}
exports.blackbodyColor = blackbodyColor;
/**
 * Visible luminance (CIE Y) of a blackbody, arbitrary normalization.
 * @param {Number} temperature Temperature in K
 */
function blackbodyLuminance(temperature) {
    return blackbodyXyz(temperature)[1];
}
exports.blackbodyLuminance = blackbodyLuminance;
/**
 * Integration settings for the ray tracer. Keep in sync with the black hole
 * fragment shader.
 */
exports.GEODESIC_STEP_FACTOR = 0.06;
exports.GEODESIC_MIN_STEP = 0.005;
exports.GEODESIC_MAX_STEP = 2.0;
exports.GEODESIC_MAX_STEPS = 600;
/**
 * Accelerate the ray along the Schwarzschild orbit equation. In rs units the
 * null geodesic d^2u/dphi^2 + u = 3 M u^2 is equivalent to the "force law"
 * x'' = -(3/2) h^2 x / r^5, where h = |x cross x'| is conserved.
 */
function geodesicAcceleration(p, h2) {
    var r2 = dot(p, p);
    var k = (-1.5 * h2) / (r2 * r2 * Math.sqrt(r2));
    return [p[0] * k, p[1] * k, p[2] * k];
}
/**
 * Advances a ray by one fourth-order Runge-Kutta step.
 */
function geodesicStep(p, v, h2, dt) {
    var add = function (a, b, s) { return [
        a[0] + b[0] * s,
        a[1] + b[1] * s,
        a[2] + b[2] * s,
    ]; };
    var k1v = geodesicAcceleration(p, h2);
    var k1p = v;
    var k2v = geodesicAcceleration(add(p, k1p, dt / 2), h2);
    var k2p = add(v, k1v, dt / 2);
    var k3v = geodesicAcceleration(add(p, k2p, dt / 2), h2);
    var k3p = add(v, k2v, dt / 2);
    var k4v = geodesicAcceleration(add(p, k3p, dt), h2);
    var k4p = add(v, k3v, dt);
    var s = dt / 6;
    return [
        [0, 1, 2].map(function (i) { return p[i] + s * (k1p[i] + 2 * k2p[i] + 2 * k3p[i] + k4p[i]); }),
        [0, 1, 2].map(function (i) { return v[i] + s * (k1v[i] + 2 * k2v[i] + 2 * k3v[i] + k4v[i]); }),
    ];
}
exports.geodesicStep = geodesicStep;
/**
 * Step size used by the ray tracer at radius r.
 */
function geodesicStepSize(r) {
    return Math.min(Math.max(exports.GEODESIC_STEP_FACTOR * r, exports.GEODESIC_MIN_STEP), exports.GEODESIC_MAX_STEP);
}
exports.geodesicStepSize = geodesicStepSize;
/**
 * Traces a light ray in the Schwarzschild spacetime, using the same scheme
 * as the GPU ray tracer. Positions are in rs, relative to the black hole.
 *
 * @param {Array.<Number>} origin Starting point of the ray
 * @param {Array.<Number>} direction Starting direction of the ray
 * @param {Number} boundaryRadius Integrate until the ray leaves this radius
 * @return {GeodesicTraceResult} Result
 */
function traceGeodesic(origin, direction, boundaryRadius) {
    var _a;
    var d0 = normalize(direction);
    var p = origin.slice();
    var v = d0.slice();
    if (norm(p) > boundaryRadius) {
        // Move a ray that starts outside the boundary to where it enters, and
        // apply the weak-field deflection accumulated on the way there.
        var entry = boundaryEntry(p, v, boundaryRadius);
        if (!entry) {
            return { captured: false, direction: d0, deflection: 0, steps: 0 };
        }
        var bend = residualDeflection(p, v) - residualDeflection(entry, v);
        v = bendTowardCenter(entry, v, bend);
        p = entry;
    }
    var h = cross(p, v);
    var h2 = dot(h, h);
    for (var i = 0; i < exports.GEODESIC_MAX_STEPS; i++) {
        var r = norm(p);
        if (r < exports.EVENT_HORIZON_RADIUS) {
            return { captured: true, direction: [], deflection: 0, steps: i };
        }
        if (r > boundaryRadius && dot(p, v) > 0) {
            var dir = bendTowardCenter(p, normalize(v), residualDeflection(p, v));
            return {
                captured: false,
                direction: dir,
                deflection: Math.acos(Math.min(1, Math.max(-1, dot(dir, d0)))),
                steps: i
            };
        }
        _a = geodesicStep(p, v, h2, geodesicStepSize(r)), p = _a[0], v = _a[1];
    }
    // Rays that orbit the photon sphere for longer than the step budget are
    // treated as captured, as the shader does.
    return {
        captured: true,
        direction: [],
        deflection: 0,
        steps: exports.GEODESIC_MAX_STEPS
    };
}
exports.traceGeodesic = traceGeodesic;
/**
 * Point where a straight ray from `origin` along unit vector `dir` enters a
 * sphere of the given radius centered on the black hole, or undefined if it
 * misses. Computed relative to the point of closest approach, which keeps
 * precision when the origin is far away.
 */
function boundaryEntry(origin, dir, radius) {
    var along = dot(origin, dir);
    if (along > 0) {
        return undefined;
    }
    var closest = [
        origin[0] - along * dir[0],
        origin[1] - along * dir[1],
        origin[2] - along * dir[2],
    ];
    var b2 = dot(closest, closest);
    if (b2 >= radius * radius) {
        return undefined;
    }
    var s = Math.sqrt(radius * radius - b2);
    return [0, 1, 2].map(function (i) { return closest[i] - s * dir[i]; });
}
exports.boundaryEntry = boundaryEntry;
/**
 * Rotates unit vector `dir` by `angle` radians toward the black hole at the
 * origin, within the plane containing `pos` and `dir`.
 */
function bendTowardCenter(pos, dir, angle) {
    var along = dot(pos, dir);
    var perp = [
        pos[0] - along * dir[0],
        pos[1] - along * dir[1],
        pos[2] - along * dir[2],
    ];
    var len = norm(perp);
    if (len === 0) {
        return dir.slice();
    }
    var c = Math.cos(angle);
    var s = Math.sin(angle);
    return [0, 1, 2].map(function (i) { return c * dir[i] - (s * perp[i]) / len; });
}
exports.bendTowardCenter = bendTowardCenter;
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(a, b) {
    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0],
    ];
}
function norm(a) {
    return Math.sqrt(dot(a, a));
}
function normalize(a) {
    var n = norm(a);
    return [a[0] / n, a[1] / n, a[2] / n];
}
