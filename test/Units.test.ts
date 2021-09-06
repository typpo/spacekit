import Units from '../src/Units';

describe('Angular Conversions', () => {
  test.each([
    [0.0, 0.0],
    [180.0, Math.PI],
  ])('Converts %f deg to %f radians', (deg, rad) => {
    expect(Units.rad(deg)).toBeCloseTo(rad, 12);
  });

  test.each([
    [0.0, 0.0],
    [Math.PI, 180.0],
  ])('Converts %f rad to %f deg', (rad, deg) => {
    expect(Units.deg(rad)).toBeCloseTo(deg, 12);
  });
});

describe('Length conversions', () => {
  test('Convert km to au', () => {
    expect(Units.kmToAu(149597870.7)).toBeCloseTo(1, 11);
  });

  test('Convert au to km', () => {
    expect(Units.auToKm(1)).toBeCloseTo(149597870.7, 11);
  });
});
