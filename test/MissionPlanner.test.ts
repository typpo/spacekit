import { EphemPresets } from '../src/EphemPresets';
import {
  Spacecraft,
  DRIVE_PB11_REFERENCE,
} from '../src/Spacecraft';
import {
  planMission,
  findActiveLeg,
  PlannedMission,
} from '../src/MissionPlanner';

const DEPART_JD_2026_MAY = 2461166.5;

function makeShip(dryMassTonnes = 1000): Spacecraft {
  return new Spacecraft({
    name: 'Test Vessel',
    drive: DRIVE_PB11_REFERENCE,
    mass: { dryMassTonnes, propellantMassTonnes: 0 },
  });
}

describe('Single-leg mission (Earth → Jupiter)', () => {
  let mission: PlannedMission;

  beforeAll(() => {
    mission = planMission({
      spacecraft: makeShip(),
      startJd: DEPART_JD_2026_MAY,
      legs: [
        {
          label: 'Outbound to Jupiter',
          originEphem: EphemPresets.EARTH,
          originName: 'Earth',
          targetEphem: EphemPresets.JUPITER,
          targetName: 'Jupiter',
        },
      ],
    });
  });

  test('produces exactly one leg', () => {
    expect(mission.legs.length).toBe(1);
  });

  test('total duration matches the leg flight time', () => {
    expect(mission.totalDurationDays).toBeCloseTo(
      mission.legs[0].result.flightTimeDays,
      6,
    );
  });

  test('initial propellant fraction is in the paper-feasible range', () => {
    // With ~10-day Jupiter brachistochrone Δv ≈ 0.012c plus velocity match,
    // total Δv should give propellant fraction in [25%, 45%] depending on
    // synodic phase at chosen depart date.
    expect(mission.initialPropellantFraction).toBeGreaterThan(0.2);
    expect(mission.initialPropellantFraction).toBeLessThan(0.5);
  });

  test('feasible is true', () => {
    expect(mission.feasible).toBe(true);
  });

  test('per-leg propellant burn equals total propellant for single-leg mission', () => {
    const burned = mission.legs[0].propellantBurnedTonnes;
    expect(burned).toBeCloseTo(mission.initialPropellantTonnes, 0);
  });

  test('wet mass arrival equals dry mass for single-leg mission (all prop spent)', () => {
    const dry = mission.spacecraft.dryMassTonnes();
    expect(mission.legs[0].wetMassArrivalTonnes).toBeCloseTo(dry, 0);
  });
});

describe('Multi-leg mission (Earth → Saturn → Neptune)', () => {
  let mission: PlannedMission;

  beforeAll(() => {
    mission = planMission({
      spacecraft: makeShip(),
      startJd: DEPART_JD_2026_MAY,
      legs: [
        {
          label: 'Outbound to Saturn',
          originEphem: EphemPresets.EARTH,
          originName: 'Earth',
          targetEphem: EphemPresets.SATURN,
          targetName: 'Saturn',
        },
        {
          label: 'On to Neptune',
          originEphem: EphemPresets.SATURN,
          originName: 'Saturn',
          targetEphem: EphemPresets.NEPTUNE,
          targetName: 'Neptune',
          orbitPhaseDays: 5,
        },
      ],
    });
  });

  test('produces two legs in sequence', () => {
    expect(mission.legs.length).toBe(2);
  });

  test('leg 2 departs after leg 1 arrives plus orbit phase', () => {
    const leg1 = mission.legs[0];
    const leg2 = mission.legs[1];
    expect(leg2.departureJd).toBeCloseTo(leg1.arrivalJd + 5, 5);
  });

  test('total Δv is sum of leg Δvs', () => {
    const sum = mission.legs.reduce((acc, l) => acc + l.legDeltaVMs, 0);
    expect(mission.totalDeltaVMs).toBeCloseTo(sum, 0);
  });

  test('total propellant burned across legs equals initial propellant load', () => {
    const burned = mission.legs.reduce(
      (acc, l) => acc + l.propellantBurnedTonnes,
      0,
    );
    expect(burned).toBeCloseTo(mission.initialPropellantTonnes, 0);
  });

  test('wet mass at end of leg N equals wet mass at start of leg N+1', () => {
    expect(mission.legs[0].wetMassArrivalTonnes).toBeCloseTo(
      mission.legs[1].wetMassDepartureTonnes,
      6,
    );
  });

  test('cumulative wet mass strictly decreases', () => {
    expect(mission.legs[0].wetMassArrivalTonnes).toBeLessThan(
      mission.legs[0].wetMassDepartureTonnes,
    );
    expect(mission.legs[1].wetMassArrivalTonnes).toBeLessThan(
      mission.legs[1].wetMassDepartureTonnes,
    );
  });

  test('initial propellant fraction is higher than single-leg Jupiter (more Δv → more prop)', () => {
    const jupiterOnly = planMission({
      spacecraft: makeShip(),
      startJd: DEPART_JD_2026_MAY,
      legs: [
        {
          originEphem: EphemPresets.EARTH,
          targetEphem: EphemPresets.JUPITER,
        },
      ],
    });
    expect(mission.initialPropellantFraction).toBeGreaterThan(
      jupiterOnly.initialPropellantFraction,
    );
  });

  test('total duration spans first departure to last arrival', () => {
    const last = mission.legs[mission.legs.length - 1].arrivalJd;
    expect(mission.totalDurationDays).toBeCloseTo(
      last - DEPART_JD_2026_MAY,
      5,
    );
  });
});

describe('findActiveLeg', () => {
  const mission = planMission({
    spacecraft: makeShip(),
    startJd: DEPART_JD_2026_MAY,
    legs: [
      {
        originEphem: EphemPresets.EARTH,
        targetEphem: EphemPresets.MARS,
      },
      {
        originEphem: EphemPresets.MARS,
        targetEphem: EphemPresets.JUPITER,
        orbitPhaseDays: 3,
      },
    ],
  });

  test('t=0 returns leg 0 at fraction 0', () => {
    const a = findActiveLeg(mission, 0);
    expect(a).not.toBeNull();
    expect(a!.legIndex).toBe(0);
    expect(a!.legFraction).toBeCloseTo(0, 5);
    expect(a!.inOrbitPhase).toBe(false);
  });

  test('mid-leg-0 returns leg 0 at fraction ≈0.5', () => {
    const halfFlightS =
      ((mission.legs[0].arrivalJd - mission.legs[0].departureJd) * 86400) / 2;
    const a = findActiveLeg(mission, halfFlightS);
    expect(a!.legIndex).toBe(0);
    expect(a!.legFraction).toBeCloseTo(0.5, 2);
    expect(a!.inOrbitPhase).toBe(false);
  });

  test('after leg-0 arrival but before leg-1 departure → orbit phase', () => {
    const tAfterLeg0Arrival =
      (mission.legs[0].arrivalJd - DEPART_JD_2026_MAY) * 86400 + 86400; // 1 day after arrival
    const a = findActiveLeg(mission, tAfterLeg0Arrival);
    expect(a!.inOrbitPhase).toBe(true);
    expect(a!.legIndex).toBe(0);
  });

  test('mid-leg-1 returns leg 1 at intermediate fraction', () => {
    const tInLeg1 =
      ((mission.legs[1].departureJd +
        (mission.legs[1].arrivalJd - mission.legs[1].departureJd) / 3 -
        DEPART_JD_2026_MAY) *
        86400);
    const a = findActiveLeg(mission, tInLeg1);
    expect(a!.legIndex).toBe(1);
    expect(a!.legFraction).toBeGreaterThan(0.2);
    expect(a!.legFraction).toBeLessThan(0.45);
    expect(a!.inOrbitPhase).toBe(false);
  });

  test('past last arrival → final leg, fraction 1, inOrbitPhase=true', () => {
    const tFar =
      ((mission.legs[1].arrivalJd - DEPART_JD_2026_MAY) * 86400) + 100 * 86400;
    const a = findActiveLeg(mission, tFar);
    expect(a!.legIndex).toBe(mission.legs.length - 1);
    expect(a!.legFraction).toBe(1);
    expect(a!.inOrbitPhase).toBe(true);
  });
});

describe('Input validation', () => {
  test('rejects missing spacecraft', () => {
    expect(() =>
      planMission({
        // @ts-expect-error
        spacecraft: undefined,
        startJd: DEPART_JD_2026_MAY,
        legs: [{ originEphem: EphemPresets.EARTH, targetEphem: EphemPresets.MARS }],
      }),
    ).toThrow();
  });

  test('rejects empty legs array', () => {
    expect(() =>
      planMission({
        spacecraft: makeShip(),
        startJd: DEPART_JD_2026_MAY,
        legs: [],
      }),
    ).toThrow();
  });

  test('rejects non-finite startJd', () => {
    expect(() =>
      planMission({
        spacecraft: makeShip(),
        startJd: NaN,
        legs: [{ originEphem: EphemPresets.EARTH, targetEphem: EphemPresets.MARS }],
      }),
    ).toThrow();
  });
});
