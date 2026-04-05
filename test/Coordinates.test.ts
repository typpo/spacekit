import Coordinates from '../src/Coordinates';
import Units from '../src/Units';

describe('Coordinates nutation and obliquity', () => {
  test('J2000 nutation matches the corrected formula', () => {
    const { nutation } = Coordinates.getNutationAndObliquity();

    expect(Units.deg(nutation) * 3600).toBeCloseTo(-14.031356821395898, 10);
  });

  test('Future-date nutation and obliquity keep the corrected omega polynomial', () => {
    const { nutation, obliquity } =
      Coordinates.getNutationAndObliquity(2816795.0);

    expect(Units.deg(nutation) * 3600).toBeCloseTo(12.706758495219976, 9);
    expect(Units.deg(obliquity) * 3600).toBeCloseTo(83907.91817446056, 9);
  });
});
