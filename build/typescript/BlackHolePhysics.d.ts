/** Schwarzschild geometry. Distances used by the ray solver are in horizon radii. */
export declare const SPEED_OF_LIGHT = 299792458;
export declare const SOLAR_GM = 132712440000000000000;
export declare const METERS_PER_AU = 149597870700;
export declare const SCHWARZSCHILD_CRITICAL_IMPACT: number;
export declare function schwarzschildRadiusAu(massSolar: number): number;
/** Circular geodesic period, measured at infinity, at r >= 3 horizon radii. */
export declare function schwarzschildOrbitalPeriodSeconds(massSolar: number, radiusInSchwarzschildRadii: number): number;
/**
 * Reference null-geodesic solver, also useful for checking the GPU integrator.
 * u = rs/r, v = du/dphi; u'' = 1.5 u^2 - u. The conserved quantity is
 * v^2 + u^2 - u^3 = 1/b^2. See guides/black-holes.md for conventions.
 */
export declare function stepSchwarzschildRay(u: number, v: number, step: number): [number, number];
