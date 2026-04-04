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

describe('Declination conversions', () => {
  test('Converts southern sexagesimal declination to decimal degrees', () => {
    expect(Units.sexagesimalToDecimalDec(-12, 30, 0)).toBeCloseTo(-12.5, 12);
  });

  test('Converts southern decimal declination to sexagesimal components', () => {
    expect(Units.decimalToSexagesimalDec(-12.5)).toEqual([-12, 30, 0]);
  });
});
