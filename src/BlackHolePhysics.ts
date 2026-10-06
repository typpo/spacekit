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

import Units from './Units';

/** Speed of light, km/s */
export const SPEED_OF_LIGHT_KM_S = 299792.458;

/** Gravitational parameter of the Sun (GM), km^3/s^2 */
export const GM_SUN_KM3_S2 = 1.32712440018e11;

/** Event horizon radius, in Schwarzschild radii. */
export const EVENT_HORIZON_RADIUS = 1;

/** Radius of the photon sphere (unstable circular light orbits), in rs. */
export const PHOTON_SPHERE_RADIUS = 1.5;

/** Radius of the innermost stable circular orbit, in rs. */
export const ISCO_RADIUS = 3;

/**
 * Critical impact parameter, in rs. Light approaching from infinity with a
 * smaller impact parameter is captured by the black hole. This is the radius
 * of the black hole "shadow" seen by a distant observer: 3 * sqrt(3) / 2 rs.
 */
export const CRITICAL_IMPACT_PARAMETER = (3 * Math.sqrt(3)) / 2;

/**
 * Schwarzschild radius in km for a black hole of the given mass.
 * @param {Number} massSolar Mass in solar masses
 * @return {Number} rs in km
 */
export function schwarzschildRadiusKm(massSolar: number): number {
  return (
    (2 * GM_SUN_KM3_S2 * massSolar) /
    (SPEED_OF_LIGHT_KM_S * SPEED_OF_LIGHT_KM_S)
  );
}

/**
 * Schwarzschild radius in AU for a black hole of the given mass.
 * @param {Number} massSolar Mass in solar masses
 * @return {Number} rs in AU
 */
export function schwarzschildRadiusAu(massSolar: number): number {
  return Units.kmToAu(schwarzschildRadiusKm(massSolar));
}

/**
 * Angular velocity of a circular (Keplerian) geodesic orbit at radius r, as
 * measured by an observer at infinity. Units of c / rs.
 */
export function orbitalAngularVelocity(r: number): number {
  // Omega = sqrt(M / r^3) with M = 1/2 in units of rs.
  return Math.sqrt(0.5 / (r * r * r));
}

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
export function novikovThorneFlux(r: number): number {
  if (r <= ISCO_RADIUS) {
    return 0;
  }
  // Work in units of M where x = sqrt(r / M).
  const x = Math.sqrt(2 * r);
  const xms = Math.sqrt(2 * ISCO_RADIUS);
  const s3 = Math.sqrt(3);
  const integral =
    x -
    xms -
    (s3 / 2) *
      (Math.log((x - s3) / (x + s3)) - Math.log((xms - s3) / (xms + s3)));
  return (1.5 * integral) / (Math.pow(x, 5) * (x * x - 3));
}

/**
 * Numerically evaluates the general relativistic thin-disk flux from first
 * principles (orbital energy, angular momentum and angular velocity of
 * circular geodesics). Used to check `novikovThorneFlux`.
 * @param {Number} r Radius in rs
 * @param {Number} steps Integration steps
 * @return {Number} Flux, same normalization as `novikovThorneFlux`
 */
export function novikovThorneFluxNumeric(r: number, steps = 20000): number {
  if (r <= ISCO_RADIUS) {
    return 0;
  }
  // Units of M (G = c = M = 1).
  const E = (rm: number) => (1 - 2 / rm) / Math.sqrt(1 - 3 / rm);
  const L = (rm: number) => Math.sqrt(rm) / Math.sqrt(1 - 3 / rm);
  const Omega = (rm: number) => Math.pow(rm, -1.5);
  const d = (f: (x: number) => number, x: number) => {
    const h = 1e-5 * x;
    return (f(x + h) - f(x - h)) / (2 * h);
  };

  const rm = 2 * r;
  const rms = 2 * ISCO_RADIUS;
  let integral = 0;
  const dr = (rm - rms) / steps;
  for (let i = 0; i < steps; i++) {
    const x = rms + (i + 0.5) * dr;
    integral += (E(x) - Omega(x) * L(x)) * d(L, x) * dr;
  }
  const eMinusOmegaL = E(rm) - Omega(rm) * L(rm);
  // sqrt(-g) = r in the equatorial plane of the Schwarzschild metric.
  return (-d(Omega, rm) / (rm * eMinusOmegaL * eMinusOmegaL)) * integral;
}

/**
 * Finds the radius and value of the maximum disk temperature. Since T ~
 * F^(1/4), the temperature peaks where the flux peaks.
 * @param {Number} outerRadius Outer radius of disk, in rs
 * @return {{radius: number, flux: number}} Location and flux of the peak
 */
export function novikovThorneFluxPeak(outerRadius = 100): {
  radius: number;
  flux: number;
} {
  let radius = ISCO_RADIUS;
  let flux = 0;
  const steps = 4000;
  for (let i = 1; i <= steps; i++) {
    const r = ISCO_RADIUS + ((outerRadius - ISCO_RADIUS) * i) / steps;
    const f = novikovThorneFlux(r);
    if (f > flux) {
      flux = f;
      radius = r;
    }
  }
  return { radius, flux };
}

/** Stefan-Boltzmann constant, W m^-2 K^-4 */
const STEFAN_BOLTZMANN = 5.670374419e-8;

/** Eddington luminance per solar mass (ionized hydrogen), W */
const EDDINGTON_LUMINOSITY_PER_SOLAR_MASS = 1.2572e31;

/**
 * Radiative efficiency of a thin disk around a Schwarzschild black hole: the
 * fraction of rest mass energy released before matter plunges in from the
 * ISCO, 1 - sqrt(8/9), about 5.7%.
 */
export const DISK_RADIATIVE_EFFICIENCY = 1 - Math.sqrt(8 / 9);

/**
 * Maximum effective temperature of a Novikov-Thorne accretion disk.
 *
 * @param {Number} massSolar Black hole mass in solar masses
 * @param {Number} eddingtonRatio Disk luminosity as a fraction of the
 * Eddington luminosity
 * @return {Number} Peak temperature in Kelvin
 */
export function diskPeakTemperature(
  massSolar: number,
  eddingtonRatio: number,
): number {
  const c = SPEED_OF_LIGHT_KM_S * 1000;
  const luminosity =
    eddingtonRatio * EDDINGTON_LUMINOSITY_PER_SOLAR_MASS * massSolar;
  const accretionRate = luminosity / (DISK_RADIATIVE_EFFICIENCY * c * c);
  // Gravitational radius GM / c^2 in meters.
  const rg = (GM_SUN_KM3_S2 * 1e9 * massSolar) / (c * c);
  // Restore units to the flux, which is in units of Mdot c^2 / (4 pi rg^2).
  const flux =
    ((accretionRate * c * c) / (4 * Math.PI * rg * rg)) *
    novikovThorneFluxPeak().flux;
  return Math.pow(flux / STEFAN_BOLTZMANN, 0.25);
}

/**
 * Local effective temperature of the disk at radius r, relative to the
 * maximum temperature of the disk.
 * @param {Number} r Radius in rs
 * @return {Number} T(r) / T_max, between 0 and 1
 */
export function diskTemperatureRatio(r: number): number {
  return Math.pow(novikovThorneFlux(r) / novikovThorneFluxPeak().flux, 0.25);
}

/**
 * Impact parameter b = L / E of a photon (in rs) passing through `pos` with
 * coordinate direction `dir`, using the conserved quantities of the
 * Schwarzschild orbit equation as integrated by the ray tracer.
 */
export function impactParameter(pos: number[], dir: number[]): number {
  const r = norm(pos);
  const h = norm(cross(pos, dir));
  const v2 = dot(dir, dir);
  // |v|^2 / h^2 - rs / r^3 = 1 / b^2 is conserved along the ray.
  const invB2 = v2 / (h * h) - 1 / (r * r * r);
  return invB2 > 0 ? 1 / Math.sqrt(invB2) : 0;
}

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
export function diskRedshiftFactor(r: number, lambda: number): number {
  // nu_emit / nu_obs = u^t (1 - Omega * lambda), u^t = 1 / sqrt(1 - 3M / r).
  return Math.sqrt(1 - 1.5 / r) / (1 - orbitalAngularVelocity(r) * lambda);
}

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
export function residualDeflection(pos: number[], dir: number[]): number {
  const d = normalize(dir);
  const along = dot(pos, d);
  const b = norm(cross(pos, d));
  if (b === 0) {
    return 0;
  }
  const s = along / Math.sqrt(b * b + along * along);
  return (1 / b) * (1 - 1.5 * s + 0.5 * s * s * s);
}

// CIE 1931 2-degree color matching functions, multi-lobe Gaussian fit from
// Wyman, Sloan & Shirley (2013), "Simple Analytic Approximations to the CIE
// XYZ Color Matching Functions".
function lobe(x: number, mu: number, s1: number, s2: number): number {
  const t = (x - mu) / (x < mu ? s1 : s2);
  return Math.exp(-0.5 * t * t);
}

function cieXyz(nm: number): [number, number, number] {
  return [
    1.056 * lobe(nm, 599.8, 37.9, 31.0) +
      0.362 * lobe(nm, 442.0, 16.0, 26.7) -
      0.065 * lobe(nm, 501.1, 20.4, 26.2),
    0.821 * lobe(nm, 568.8, 46.9, 40.5) + 0.286 * lobe(nm, 530.9, 16.3, 31.1),
    1.217 * lobe(nm, 437.0, 11.8, 36.0) + 0.681 * lobe(nm, 459.0, 26.0, 13.8),
  ];
}

/** Second radiation constant hc / k, in nm * K. */
const C2_NM_K = 1.438777e7;

/**
 * Planck spectral radiance with an arbitrary constant factor removed.
 * @param {Number} nm Wavelength in nm
 * @param {Number} temperature Temperature in K
 */
export function planck(nm: number, temperature: number): number {
  const um = nm / 1000;
  return 1 / (Math.pow(um, 5) * (Math.exp(C2_NM_K / (nm * temperature)) - 1));
}

/**
 * Number of samples and range used to integrate a spectrum over the visible
 * band. Keep in sync with the black hole fragment shader.
 */
export const SPECTRUM_SAMPLES = 32;
export const SPECTRUM_MIN_NM = 380;
export const SPECTRUM_MAX_NM = 780;

/**
 * CIE XYZ tristimulus values of a blackbody (arbitrary normalization).
 * @param {Number} temperature Temperature in K
 * @return {Array.<Number>} XYZ
 */
export function blackbodyXyz(temperature: number): [number, number, number] {
  const xyz: [number, number, number] = [0, 0, 0];
  const step = (SPECTRUM_MAX_NM - SPECTRUM_MIN_NM) / SPECTRUM_SAMPLES;
  for (let i = 0; i < SPECTRUM_SAMPLES; i++) {
    const nm = SPECTRUM_MIN_NM + (i + 0.5) * step;
    const b = planck(nm, temperature);
    const cmf = cieXyz(nm);
    xyz[0] += b * cmf[0] * step;
    xyz[1] += b * cmf[1] * step;
    xyz[2] += b * cmf[2] * step;
  }
  return xyz;
}

/**
 * Convert CIE XYZ to linear sRGB (D65).
 */
export function xyzToLinearSrgb(xyz: number[]): [number, number, number] {
  const [x, y, z] = xyz;
  return [
    3.2406 * x - 1.5372 * y - 0.4986 * z,
    -0.9689 * x + 1.8758 * y + 0.0415 * z,
    0.0557 * x - 0.204 * y + 1.057 * z,
  ];
}

/**
 * Linear sRGB color of a blackbody, normalized so the brightest channel is 1.
 * @param {Number} temperature Temperature in K
 * @return {Array.<Number>} RGB, each between 0 and 1
 */
export function blackbodyColor(temperature: number): [number, number, number] {
  const rgb = xyzToLinearSrgb(blackbodyXyz(temperature)).map((c) =>
    Math.max(c, 0),
  );
  const max = Math.max(rgb[0], rgb[1], rgb[2]);
  return [rgb[0] / max, rgb[1] / max, rgb[2] / max];
}

/**
 * Visible luminance (CIE Y) of a blackbody, arbitrary normalization.
 * @param {Number} temperature Temperature in K
 */
export function blackbodyLuminance(temperature: number): number {
  return blackbodyXyz(temperature)[1];
}

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
export const GEODESIC_STEP_FACTOR = 0.06;
export const GEODESIC_MIN_STEP = 0.005;
export const GEODESIC_MAX_STEP = 2.0;
export const GEODESIC_MAX_STEPS = 400;

/**
 * Accelerate the ray along the Schwarzschild orbit equation. In rs units the
 * null geodesic d^2u/dphi^2 + u = 3 M u^2 is equivalent to the "force law"
 * x'' = -(3/2) h^2 x / r^5, where h = |x cross x'| is conserved.
 */
function geodesicAcceleration(p: number[], h2: number): number[] {
  const r2 = dot(p, p);
  const k = (-1.5 * h2) / (r2 * r2 * Math.sqrt(r2));
  return [p[0] * k, p[1] * k, p[2] * k];
}

/**
 * Advances a ray by one fourth-order Runge-Kutta step.
 */
export function geodesicStep(
  p: number[],
  v: number[],
  h2: number,
  dt: number,
): [number[], number[]] {
  const add = (a: number[], b: number[], s: number) => [
    a[0] + b[0] * s,
    a[1] + b[1] * s,
    a[2] + b[2] * s,
  ];
  const k1v = geodesicAcceleration(p, h2);
  const k1p = v;
  const k2v = geodesicAcceleration(add(p, k1p, dt / 2), h2);
  const k2p = add(v, k1v, dt / 2);
  const k3v = geodesicAcceleration(add(p, k2p, dt / 2), h2);
  const k3p = add(v, k2v, dt / 2);
  const k4v = geodesicAcceleration(add(p, k3p, dt), h2);
  const k4p = add(v, k3v, dt);
  const s = dt / 6;
  return [
    [0, 1, 2].map(
      (i) => p[i] + s * (k1p[i] + 2 * k2p[i] + 2 * k3p[i] + k4p[i]),
    ),
    [0, 1, 2].map(
      (i) => v[i] + s * (k1v[i] + 2 * k2v[i] + 2 * k3v[i] + k4v[i]),
    ),
  ];
}

/**
 * Step size used by the ray tracer at radius r.
 */
export function geodesicStepSize(r: number): number {
  return Math.min(
    Math.max(GEODESIC_STEP_FACTOR * r, GEODESIC_MIN_STEP),
    GEODESIC_MAX_STEP,
  );
}

/**
 * Traces a light ray in the Schwarzschild spacetime, using the same scheme
 * as the GPU ray tracer. Positions are in rs, relative to the black hole.
 *
 * @param {Array.<Number>} origin Starting point of the ray
 * @param {Array.<Number>} direction Starting direction of the ray
 * @param {Number} boundaryRadius Integrate until the ray leaves this radius
 * @return {GeodesicTraceResult} Result
 */
export function traceGeodesic(
  origin: number[],
  direction: number[],
  boundaryRadius: number,
): GeodesicTraceResult {
  const d0 = normalize(direction);
  let p = origin.slice();
  let v = d0.slice();

  if (norm(p) > boundaryRadius) {
    // Move a ray that starts outside the boundary to where it enters, and
    // apply the weak-field deflection accumulated on the way there.
    const entry = boundaryEntry(p, v, boundaryRadius);
    if (!entry) {
      return { captured: false, direction: d0, deflection: 0, steps: 0 };
    }
    const bend = residualDeflection(p, v) - residualDeflection(entry, v);
    v = bendTowardCenter(entry, v, bend);
    p = entry;
  }

  const h = cross(p, v);
  const h2 = dot(h, h);

  for (let i = 0; i < GEODESIC_MAX_STEPS; i++) {
    const r = norm(p);
    if (r < EVENT_HORIZON_RADIUS) {
      return { captured: true, direction: [], deflection: 0, steps: i };
    }
    if (r > boundaryRadius && dot(p, v) > 0) {
      const dir = bendTowardCenter(p, normalize(v), residualDeflection(p, v));
      return {
        captured: false,
        direction: dir,
        deflection: Math.acos(Math.min(1, Math.max(-1, dot(dir, d0)))),
        steps: i,
      };
    }
    [p, v] = geodesicStep(p, v, h2, geodesicStepSize(r));
  }
  // Rays that orbit the photon sphere for longer than the step budget are
  // treated as captured, as the shader does.
  return {
    captured: true,
    direction: [],
    deflection: 0,
    steps: GEODESIC_MAX_STEPS,
  };
}

/**
 * Point where a straight ray from `origin` along unit vector `dir` enters a
 * sphere of the given radius centered on the black hole, or undefined if it
 * misses. Computed relative to the point of closest approach, which keeps
 * precision when the origin is far away.
 */
export function boundaryEntry(
  origin: number[],
  dir: number[],
  radius: number,
): number[] | undefined {
  const along = dot(origin, dir);
  if (along > 0) {
    return undefined;
  }
  const closest = [
    origin[0] - along * dir[0],
    origin[1] - along * dir[1],
    origin[2] - along * dir[2],
  ];
  const b2 = dot(closest, closest);
  if (b2 >= radius * radius) {
    return undefined;
  }
  const s = Math.sqrt(radius * radius - b2);
  return [0, 1, 2].map((i) => closest[i] - s * dir[i]);
}

/**
 * Rotates unit vector `dir` by `angle` radians toward the black hole at the
 * origin, within the plane containing `pos` and `dir`.
 */
export function bendTowardCenter(
  pos: number[],
  dir: number[],
  angle: number,
): number[] {
  const along = dot(pos, dir);
  const perp = [
    pos[0] - along * dir[0],
    pos[1] - along * dir[1],
    pos[2] - along * dir[2],
  ];
  const len = norm(perp);
  if (len === 0) {
    return dir.slice();
  }
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return [0, 1, 2].map((i) => c * dir[i] - (s * perp[i]) / len);
}

function dot(a: number[], b: number[]): number {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function cross(a: number[], b: number[]): number[] {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

function norm(a: number[]): number {
  return Math.sqrt(dot(a, a));
}

function normalize(a: number[]): number[] {
  const n = norm(a);
  return [a[0] / n, a[1] / n, a[2] / n];
}
