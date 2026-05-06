import {
  Spacecraft,
  DRIVE_PB11_REFERENCE,
  propellantForDeltaV,
  deltaVForWetMass,
  spacecraftStateAfterDeltaV,
} from '../src/Spacecraft';

const C = 2.998e8;

describe('propellantForDeltaV', () => {
  test('paper reference: 1000 t dry, Δv ≈ 0.012c, v_e = 0.034c → propellant fraction 28-31%', () => {
    // Martin (2026) Section 4.3: 10-day Earth-Jupiter brachistochrone with
    // Δv ≈ 0.012c yields propellant fraction 27-31% across the table's
    // scenarios (idealized, adiabatic, with smearing). Our v_e = 0.034c
    // assumes the smearing factor is already applied.
    const r = propellantForDeltaV(
      1000,
      0.012 * C,
      DRIVE_PB11_REFERENCE,
    );
    expect(r.propellantFraction).toBeGreaterThan(0.27);
    expect(r.propellantFraction).toBeLessThan(0.32);
    expect(r.feasible).toBe(true);
  });

  test('mass ratio formula: m_initial/m_final = exp(Δv/v_e)', () => {
    // Use the spec's exact v_e to avoid precision-of-c quibbles.
    const r = propellantForDeltaV(
      100,
      DRIVE_PB11_REFERENCE.exhaustVelocityMs,
      DRIVE_PB11_REFERENCE,
    );
    expect(r.massRatio).toBeCloseTo(Math.E, 9);
  });

  test('wet mass = dry + propellant', () => {
    const r = propellantForDeltaV(500, 0.01 * C, DRIVE_PB11_REFERENCE);
    expect(r.wetMassTonnes).toBeCloseTo(
      500 + r.propellantMassTonnes,
      9,
    );
  });

  test('zero Δv requires zero propellant', () => {
    const r = propellantForDeltaV(1000, 0, DRIVE_PB11_REFERENCE);
    expect(r.propellantMassTonnes).toBeCloseTo(0, 9);
    expect(r.massRatio).toBeCloseTo(1, 9);
    expect(r.propellantFraction).toBeCloseTo(0, 9);
  });

  test('large Δv (Δv > v_e × log(2)) yields infeasible (>60%) propellant fraction', () => {
    const r = propellantForDeltaV(
      1000,
      DRIVE_PB11_REFERENCE.exhaustVelocityMs * Math.log(3), // m₀/m_f = 3 → frac = 2/3
      DRIVE_PB11_REFERENCE,
    );
    expect(r.propellantFraction).toBeCloseTo(2 / 3, 5);
    expect(r.feasible).toBe(false);
  });

  test('rejects non-finite or non-positive dry mass', () => {
    expect(() => propellantForDeltaV(0, 1000, DRIVE_PB11_REFERENCE)).toThrow();
    expect(() => propellantForDeltaV(-1, 1000, DRIVE_PB11_REFERENCE)).toThrow();
    expect(() => propellantForDeltaV(NaN, 1000, DRIVE_PB11_REFERENCE)).toThrow();
  });

  test('rejects negative Δv', () => {
    expect(() => propellantForDeltaV(100, -1, DRIVE_PB11_REFERENCE)).toThrow();
  });
});

describe('deltaVForWetMass', () => {
  test('inverse of propellantForDeltaV', () => {
    const dry = 1000;
    const dvIn = 0.012 * C;
    const r = propellantForDeltaV(dry, dvIn, DRIVE_PB11_REFERENCE);
    const dvOut = deltaVForWetMass(
      dry,
      dry + r.propellantMassTonnes,
      DRIVE_PB11_REFERENCE,
    );
    expect(dvOut).toBeCloseTo(dvIn, 0);
  });

  test('wet = dry → Δv = 0', () => {
    expect(deltaVForWetMass(500, 500, DRIVE_PB11_REFERENCE)).toBeCloseTo(0, 9);
  });

  test('rejects wet < dry', () => {
    expect(() =>
      deltaVForWetMass(500, 400, DRIVE_PB11_REFERENCE),
    ).toThrow();
  });
});

describe('Spacecraft class', () => {
  test('constructs with valid config', () => {
    const ship = new Spacecraft({
      name: 'Reference Vessel',
      drive: DRIVE_PB11_REFERENCE,
      mass: { dryMassTonnes: 1000, propellantMassTonnes: 0 },
    });
    expect(ship.name()).toBe('Reference Vessel');
    expect(ship.dryMassTonnes()).toBe(1000);
    expect(ship.drive()).toBe(DRIVE_PB11_REFERENCE);
  });

  test('default name when omitted', () => {
    const ship = new Spacecraft({
      drive: DRIVE_PB11_REFERENCE,
      mass: { dryMassTonnes: 100, propellantMassTonnes: 0 },
    });
    expect(ship.name()).toBe('Unnamed Vessel');
  });

  test('loadPropellantForDeltaV mutates mass and returns result', () => {
    const ship = new Spacecraft({
      drive: DRIVE_PB11_REFERENCE,
      mass: { dryMassTonnes: 1000, propellantMassTonnes: 0 },
    });
    const r = ship.loadPropellantForDeltaV(0.012 * C);
    expect(ship.config.mass.propellantMassTonnes).toBeCloseTo(
      r.propellantMassTonnes,
      9,
    );
    expect(r.propellantFraction).toBeGreaterThan(0.27);
    expect(r.propellantFraction).toBeLessThan(0.32);
  });

  test('currentDeltaVCapacityMs reflects loaded propellant', () => {
    const ship = new Spacecraft({
      drive: DRIVE_PB11_REFERENCE,
      mass: { dryMassTonnes: 1000, propellantMassTonnes: 0 },
    });
    const dvLoaded = 0.012 * C;
    ship.loadPropellantForDeltaV(dvLoaded);
    expect(ship.currentDeltaVCapacityMs()).toBeCloseTo(dvLoaded, 0);
  });

  test('rejects missing drive', () => {
    expect(() =>
      new Spacecraft({
        // @ts-expect-error
        drive: undefined,
        mass: { dryMassTonnes: 100, propellantMassTonnes: 0 },
      }),
    ).toThrow();
  });

  test('rejects non-positive dry mass', () => {
    expect(() =>
      new Spacecraft({
        drive: DRIVE_PB11_REFERENCE,
        mass: { dryMassTonnes: 0, propellantMassTonnes: 0 },
      }),
    ).toThrow();
  });
});

describe('spacecraftStateAfterDeltaV', () => {
  const ship = new Spacecraft({
    drive: DRIVE_PB11_REFERENCE,
    mass: { dryMassTonnes: 1000, propellantMassTonnes: 0 },
  });
  const dvBudget = 0.012 * C;
  ship.loadPropellantForDeltaV(dvBudget);

  test('at Δv=0, all propellant remains and wet mass is full', () => {
    const s = ship.stateAfterDeltaV(0);
    expect(s.deltaVSpentMs).toBe(0);
    expect(s.remainingPropellantTonnes).toBeCloseTo(
      ship.config.mass.propellantMassTonnes,
      6,
    );
    expect(s.propellantFractionRemaining).toBeCloseTo(1, 6);
    expect(s.deltaVRemainingMs).toBeCloseTo(dvBudget, 0);
    expect(s.currentWetMassTonnes).toBeCloseTo(
      ship.dryMassTonnes() + ship.config.mass.propellantMassTonnes,
      6,
    );
  });

  test('at Δv=full budget, propellant approx zero and dry mass remains', () => {
    const s = ship.stateAfterDeltaV(dvBudget);
    expect(s.remainingPropellantTonnes).toBeLessThan(0.5); // floating-point slop
    expect(s.propellantFractionRemaining).toBeLessThan(0.001);
    expect(s.deltaVRemainingMs).toBeCloseTo(0, 0);
    expect(s.currentWetMassTonnes).toBeCloseTo(ship.dryMassTonnes(), 0);
  });

  test('at Δv=half budget, propellant remaining is between 0 and full and follows exp law', () => {
    const s = ship.stateAfterDeltaV(dvBudget / 2);
    expect(s.remainingPropellantTonnes).toBeGreaterThan(0);
    expect(s.remainingPropellantTonnes).toBeLessThan(
      ship.config.mass.propellantMassTonnes,
    );
    // For exponential mass loss m(t) = m_0 · exp(−Δv/v_e), at Δv = Δv_total/2
    // we have m_at_half / m_initial = 1/√R where R = m_0/m_dry.
    // Therefore propellant burned at half-Δv is (1 − 1/√R)·m_initial, which
    // is GREATER than half the total propellant (1 − 1/R)·m_initial. So the
    // sign of the deviation is "more than half burned at half-Δv", because
    // late-stage Δv is cheaper per kg once the ship has shed mass.
    const propBurned =
      ship.config.mass.propellantMassTonnes - s.remainingPropellantTonnes;
    expect(propBurned).toBeGreaterThan(
      ship.config.mass.propellantMassTonnes / 2,
    );
  });

  test('rejects negative or absurd Δv', () => {
    expect(() => ship.stateAfterDeltaV(-1)).toThrow();
    expect(() =>
      ship.stateAfterDeltaV(ship.drive().exhaustVelocityMs * 100),
    ).toThrow();
  });
});

describe('DRIVE_PB11_REFERENCE constants', () => {
  test('exhaust velocity is 0.034c (with smearing)', () => {
    expect(DRIVE_PB11_REFERENCE.exhaustVelocityMs / C).toBeCloseTo(0.034, 4);
  });
  test('reference acceleration is 0.43 g', () => {
    expect(DRIVE_PB11_REFERENCE.maxAccelG).toBeCloseTo(0.43, 5);
  });
  test('label is set', () => {
    expect(DRIVE_PB11_REFERENCE.label).toMatch(/p-/);
    expect(DRIVE_PB11_REFERENCE.label).toMatch(/Martin/);
  });
});
