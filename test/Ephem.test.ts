import { Ephem } from '../src/Ephem';
import { EphemPresets } from '../src/EphemPresets';

describe('Ephemeris behavior', () => {
  test.each([
    ['a', 1.2, undefined, 1.2, undefined],
    ['i', 1.2, 'deg', 1.2, 'deg'],
    ['ma', Math.PI * 2, 'rad', Math.PI * 2, 'rad'],
    ['om', Math.PI * 2, 'rad', 360, 'deg'],
  ])(
    'Set and get',
    (attribute, inputValue, inputUnits, expectedValue, expectedUnits) => {
      // Create a dummy ephemeris object
      const eph = new Ephem({
        a: 0,
        e: 0,
        i: 0,
      });

      eph.set(attribute, inputValue, inputUnits);
      expect(eph.get(attribute, expectedUnits)).toBeCloseTo(expectedValue, 10);
    },
  );

  test('Filling of missing data: q and wBar', () => {
    const eph = new Ephem({
      a: 2,
      e: 0.5,
      i: 30,
      w: 123,
      om: 0.456,
    });

    // Perihelion distance = a*(1-e)
    expect(eph.get('q')).toBeCloseTo(2 * (1 - 0.5), 10);
    // Longitude of perihelion = argument of perihelion + longitude of ascending node
    expect(eph.get('wBar')).toBeCloseTo(123 + 0.456);
  });

  test('Locked ephemeris cannot be changed', () => {
    const eph = new Ephem({
      a: 0,
      e: 0,
      i: 0,
    });
    eph.lock();

    expect(() => {
      eph.set('a', 2.5);
    }).toThrow();
  });

  test('Copied ephemeris are unique objects with the same values', () => {
    const eph1 = new Ephem({
      a: 2,
      e: 0.5,
      i: 30,
      w: 123,
      om: 0.456,
    });

    const eph2 = eph1.copy();
    eph2.set('a', 10);

    expect(eph2.get('a')).toBeCloseTo(10);
    expect(eph2.get('i')).toBeCloseTo(30);
    expect(eph1.get('a')).toBeCloseTo(2);
    expect(eph1.get('i')).toBeCloseTo(30);
  });

  test('Moon preset period uses the Earth-Moon system GM', () => {
    const periodDays = EphemPresets.MOON.get('period');

    expect(periodDays).toBeCloseTo(27.49131618922953, 10);
  });

  test('Hyperbolic orbits do not synthesize a NaN period', () => {
    const eph = new Ephem(
      {
        epoch: 2458080.5,
        a: -1.27234500742808,
        e: 1.201133796102373,
        q: 0.2559115812959116,
        n: 0.6867469493413392,
        i: 122.7417062847286,
        om: 24.59690955523242,
        w: 241.8105360304898,
        ma: 51.1576197938249,
        tp: 2458006.01,
      },
      'deg',
    );

    expect(eph.getUnsafe('period')).toBeUndefined();
    expect(eph.get('n', 'deg')).toBeCloseTo(0.6867469493413392, 12);
  });
});
