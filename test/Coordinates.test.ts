import Coordinates from '../src/Coordinates';
import Units from '../src/Units';

describe('Coordinates nutation and obliquity', () => {
  test('J2000 nutation matches the corrected formula', () => {
    const { nutation } = Coordinates.getNutationAndObliquity();

    expect(Units.deg(nutation) * 3600).toBeCloseTo(-14.031356821395898, 10);
  });
});
