/** Schwarzschild geometry. Distances used by the ray solver are in horizon radii. */
export const SPEED_OF_LIGHT = 299792458;
// IAU 2015 nominal solar mass parameter (m^3 s^-2), avoiding uncertainty in G.
export const SOLAR_GM = 1.3271244e20;
export const METERS_PER_AU = 149597870700;
export const SCHWARZSCHILD_CRITICAL_IMPACT = (3 * Math.sqrt(3)) / 2;

export function schwarzschildRadiusAu(massSolar: number): number {
  if (!Number.isFinite(massSolar) || massSolar <= 0) {
    throw new Error('Black hole massSolar must be finite and positive');
  }
  return (2 * SOLAR_GM * massSolar) / SPEED_OF_LIGHT ** 2 / METERS_PER_AU;
}

/** Circular geodesic period, measured at infinity, at r >= 3 horizon radii. */
export function schwarzschildOrbitalPeriodSeconds(
  massSolar: number,
  radiusInSchwarzschildRadii: number,
): number {
  const rs = schwarzschildRadiusAu(massSolar) * METERS_PER_AU;
  if (
    !Number.isFinite(radiusInSchwarzschildRadii) ||
    radiusInSchwarzschildRadii < 3
  ) {
    throw new Error(
      'Stable circular orbits require radius >= 3 Schwarzschild radii',
    );
  }
  return (
    ((2 * Math.PI * rs) / SPEED_OF_LIGHT) *
    Math.sqrt(2 * radiusInSchwarzschildRadii ** 3)
  );
}

/**
 * Reference null-geodesic solver, also useful for checking the GPU integrator.
 * u = rs/r, v = du/dphi; u'' = 1.5 u^2 - u. The conserved quantity is
 * v^2 + u^2 - u^3 = 1/b^2. See guides/black-holes.md for conventions.
 */
export function stepSchwarzschildRay(
  u: number,
  v: number,
  step: number,
): [number, number] {
  const acceleration = (x: number) => 1.5 * x * x - x;
  const a = acceleration(u);
  const b = acceleration(u + (step * v) / 2);
  const c = acceleration(u + (step * (v + (step * a) / 2)) / 2);
  const d = acceleration(u + step * (v + (step * b) / 2));
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
