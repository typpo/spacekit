import * as Math from '../src/Math';

describe('Interpolation Tests', () => {
  test.each([
    [3, 9],
    [2.5, 6.25],
  ])('Test simple interpolation x=%f', (xValue, expectedYValue) => {
    // y = f(x) = x^2
    const data = [
      [0, 0],
      [1, 1],
      [2, 4],
      [3, 9],
      [4, 16],
      [5, 25],
      [6, 36],
    ];
    const firstRowIndex = 1;
    const lastRowIndex = 4;
    const xIndex = 0;
    const yIndex = 1;
    const actualYValue = Math.interpolate(
      data,
      xValue,
      firstRowIndex,
      lastRowIndex,
      xIndex,
      yIndex,
    );
    expect(actualYValue).toBeCloseTo(expectedYValue, 12);
  });

  test.each([
    [-5, -1667],
    [-3, -261],
    [0, 3],
    [3, -75],
    [5, -877],
    [-2.5, -138.25],
    [0.01, 3.03990298],
    [3.9, -281.3412],
  ])(
    'Test 10th order interpolation 4th order poly x=%f',
    (xValue, expectedYValue) => {
      // y = f(x) = -2x^4 + 3x^3 - x^2 +4x +3
      const data = [
        [-5, -1667],
        [-4, -733],
        [-3, -261],
        [-2, -65],
        [-1, -7],
        [0, 3],
        [1, 7],
        [2, -1],
        [3, -75],
        [4, -317],
        [5, -877],
      ];
      const firstRowIndex = 0;
      const lastRowIndex = data.length - 1;
      const xIndex = 0;
      const yIndex = 1;
      const actualYValue = Math.interpolate(
        data,
        xValue,
        firstRowIndex,
        lastRowIndex,
        xIndex,
        yIndex,
      );
      expect(actualYValue).toBeCloseTo(expectedYValue, 12);
    },
  );

  test.each([
    [0, 0],
    [1, 1],
    [2, 4],
    [0.5, 0.25],
  ])('Test beginning data x=%f', (xValue, expectedYValue) => {
    // y = f(x) = x^2
    const data = [
      [0, 0],
      [1, 1],
      [2, 4],
      [3, 9],
      [4, 16],
      [5, 25],
      [6, 36],
    ];
    const firstRowIndex = 0;
    const lastRowIndex = 2;
    const xIndex = 0;
    const yIndex = 1;
    const actualYValue = Math.interpolate(
      data,
      xValue,
      firstRowIndex,
      lastRowIndex,
      xIndex,
      yIndex,
    );
    expect(actualYValue).toBeCloseTo(expectedYValue, 12);
  });

  test.each([
    [0, 0],
    [1, 1],
    [2, 4],
    [0.5, 0.25],
  ])('Test end data x=%f', (xValue, expectedYValue) => {
    // y = f(x) = x^2
    const data = [
      [0, 0],
      [1, 1],
      [2, 4],
      [3, 9],
      [4, 16],
      [5, 25],
      [6, 36],
    ];
    const firstRowIndex = 0;
    const lastRowIndex = 2;
    const xIndex = 0;
    const yIndex = 1;
    const actualYValue = Math.interpolate(
      data,
      xValue,
      firstRowIndex,
      lastRowIndex,
      xIndex,
      yIndex,
    );
    expect(actualYValue).toBeCloseTo(expectedYValue, 12);
  });

  test.each([
    [0, 0],
    [1, 1],
    [0.5, 0.5],
    [1.5, 1.5],
  ])('Test linear interpolation x=%f', (xValue, expectedYValue) => {
    // y = f(x) = x^2
    const data = [
      [0, 0],
      [1, 1],
      [2, 4],
      [3, 9],
      [4, 16],
      [5, 25],
      [6, 36],
    ];
    const firstRowIndex = 0;
    const lastRowIndex = 1;
    const xIndex = 0;
    const yIndex = 1;
    const actualYValue = Math.interpolate(
      data,
      xValue,
      firstRowIndex,
      lastRowIndex,
      xIndex,
      yIndex,
    );
    expect(actualYValue).toBeCloseTo(expectedYValue, 12);
  });
});
