import { Ephem } from '../src/Ephem';
import { Orbit } from '../src/Orbit';
import { getOrbitShaderVertex } from '../src/shaders';

describe('Hyperbolic orbit calculations', () => {
  test("uses the corrected true-anomaly formula for 'Oumuamua", () => {
    const orbit = new Orbit(
      new Ephem(
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
      ),
      {},
    );

    const [x, y, z] = orbit.getPositionAtTime(2458080.5);
    const radius = Math.sqrt(x * x + y * y + z * z);

    expect(radius).toBeCloseTo(2.0249705285, 10);
  });

  test('keeps the hyperbolic shader formula parenthesized', () => {
    expect(getOrbitShaderVertex()).toContain(
      'float v = 2.0 * atan(sqrt((e + 1.0) / (e - 1.0)) * tanh(F / 2.0));',
    );
  });
});
