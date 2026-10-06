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
/** Speed of light, km/s */
export declare const SPEED_OF_LIGHT_KM_S = 299792.458;
/** Gravitational parameter of the Sun (GM), km^3/s^2 */
export declare const GM_SUN_KM3_S2 = 132712440018;
/** Event horizon radius, in Schwarzschild radii. */
export declare const EVENT_HORIZON_RADIUS = 1;
/** Radius of the photon sphere (unstable circular light orbits), in rs. */
export declare const PHOTON_SPHERE_RADIUS = 1.5;
/** Radius of the innermost stable circular orbit, in rs. */
export declare const ISCO_RADIUS = 3;
/**
 * Critical impact parameter, in rs. Light approaching from infinity with a
 * smaller impact parameter is captured by the black hole. This is the radius
 * of the black hole "shadow" seen by a distant observer: 3 * sqrt(3) / 2 rs.
 */
export declare const CRITICAL_IMPACT_PARAMETER: number;
/**
 * Schwarzschild radius in km for a black hole of the given mass.
 * @param {Number} massSolar Mass in solar masses
 * @return {Number} rs in km
 */
export declare function schwarzschildRadiusKm(massSolar: number): number;
/**
 * Schwarzschild radius in AU for a black hole of the given mass.
 * @param {Number} massSolar Mass in solar masses
 * @return {Number} rs in AU
 */
export declare function schwarzschildRadiusAu(massSolar: number): number;
/**
 * Angular velocity of a circular (Keplerian) geodesic orbit at radius r, as
 * measured by an observer at infinity. Units of c / rs.
 */
export declare function orbitalAngularVelocity(r: number): number;
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
export declare function novikovThorneFlux(r: number): number;
/**
 * Numerically evaluates the general relativistic thin-disk flux from first
 * principles (orbital energy, angular momentum and angular velocity of
 * circular geodesics). Used to check `novikovThorneFlux`.
 * @param {Number} r Radius in rs
 * @param {Number} steps Integration steps
 * @return {Number} Flux, same normalization as `novikovThorneFlux`
 */
export declare function novikovThorneFluxNumeric(r: number, steps?: number): number;
/**
 * Finds the radius and value of the maximum disk temperature. Since T ~
 * F^(1/4), the temperature peaks where the flux peaks.
 * @param {Number} outerRadius Outer radius of disk, in rs
 * @return {{radius: number, flux: number}} Location and flux of the peak
 */
export declare function novikovThorneFluxPeak(outerRadius?: number): {
    radius: number;
    flux: number;
};
/**
 * Radiative efficiency of a thin disk around a Schwarzschild black hole: the
 * fraction of rest mass energy released before matter plunges in from the
 * ISCO, 1 - sqrt(8/9), about 5.7%.
 */
export declare const DISK_RADIATIVE_EFFICIENCY: number;
/**
 * Maximum effective temperature of a Novikov-Thorne accretion disk.
 *
 * @param {Number} massSolar Black hole mass in solar masses
 * @param {Number} eddingtonRatio Disk luminosity as a fraction of the
 * Eddington luminosity
 * @return {Number} Peak temperature in Kelvin
 */
export declare function diskPeakTemperature(massSolar: number, eddingtonRatio: number): number;
/**
 * Local effective temperature of the disk at radius r, relative to the
 * maximum temperature of the disk.
 * @param {Number} r Radius in rs
 * @return {Number} T(r) / T_max, between 0 and 1
 */
export declare function diskTemperatureRatio(r: number): number;
/**
 * Impact parameter b = L / E of a photon (in rs) passing through `pos` with
 * coordinate direction `dir`, using the conserved quantities of the
 * Schwarzschild orbit equation as integrated by the ray tracer.
 */
export declare function impactParameter(pos: number[], dir: number[]): number;
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
export declare function diskRedshiftFactor(r: number, lambda: number): number;
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
export declare function diskObservedIntensity(r: number, lambda: number): number;
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
export declare function residualDeflection(pos: number[], dir: number[]): number;
/**
 * Planck spectral radiance with an arbitrary constant factor removed.
 * @param {Number} nm Wavelength in nm
 * @param {Number} temperature Temperature in K
 */
export declare function planck(nm: number, temperature: number): number;
/**
 * Number of samples and range used to integrate a spectrum over the visible
 * band. Keep in sync with the black hole fragment shader.
 */
export declare const SPECTRUM_SAMPLES = 32;
export declare const SPECTRUM_MIN_NM = 380;
export declare const SPECTRUM_MAX_NM = 780;
/**
 * CIE XYZ tristimulus values of a blackbody (arbitrary normalization).
 * @param {Number} temperature Temperature in K
 * @return {Array.<Number>} XYZ
 */
export declare function blackbodyXyz(temperature: number): [number, number, number];
/**
 * Convert CIE XYZ to linear sRGB (D65).
 */
export declare function xyzToLinearSrgb(xyz: number[]): [number, number, number];
/**
 * Linear sRGB color of a blackbody, normalized so the brightest channel is 1.
 * @param {Number} temperature Temperature in K
 * @return {Array.<Number>} RGB, each between 0 and 1
 */
export declare function blackbodyColor(temperature: number): [number, number, number];
/**
 * Visible luminance (CIE Y) of a blackbody, arbitrary normalization.
 * @param {Number} temperature Temperature in K
 */
export declare function blackbodyLuminance(temperature: number): number;
/**
 * Result of tracing a light ray past a black hole.
 */
export interface GeodesicTraceResult {
    /** True if the ray fell through the event horizon. */
    captured: boolean;
    /** Final direction of the ray at infinity (unit vector), if it escaped. */
    direction: number[];
    /** Total deflection angle in radians, if it escaped. */
    deflection: number;
    /** Number of integration steps used. */
    steps: number;
}
/**
 * Integration settings for the ray tracer. Keep in sync with the black hole
 * fragment shader.
 */
export declare const GEODESIC_STEP_FACTOR = 0.06;
export declare const GEODESIC_MIN_STEP = 0.005;
export declare const GEODESIC_MAX_STEP = 2;
export declare const GEODESIC_MAX_STEPS = 400;
/**
 * Advances a ray by one fourth-order Runge-Kutta step.
 */
export declare function geodesicStep(p: number[], v: number[], h2: number, dt: number): [number[], number[]];
/**
 * Step size used by the ray tracer at radius r.
 */
export declare function geodesicStepSize(r: number): number;
/**
 * Traces a light ray in the Schwarzschild spacetime, using the same scheme
 * as the GPU ray tracer. Positions are in rs, relative to the black hole.
 *
 * @param {Array.<Number>} origin Starting point of the ray
 * @param {Array.<Number>} direction Starting direction of the ray
 * @param {Number} boundaryRadius Integrate until the ray leaves this radius
 * @return {GeodesicTraceResult} Result
 */
export declare function traceGeodesic(origin: number[], direction: number[], boundaryRadius: number): GeodesicTraceResult;
/**
 * Point where a straight ray from `origin` along unit vector `dir` enters a
 * sphere of the given radius centered on the black hole, or undefined if it
 * misses. Computed relative to the point of closest approach, which keeps
 * precision when the origin is far away.
 */
export declare function boundaryEntry(origin: number[], dir: number[], radius: number): number[] | undefined;
/**
 * Rotates unit vector `dir` by `angle` radians toward the black hole at the
 * origin, within the plane containing `pos` and `dir`.
 */
export declare function bendTowardCenter(pos: number[], dir: number[], angle: number): number[];
