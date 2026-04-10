import {
  findClosestPickCandidate,
  findParentPickMatch,
  getNormalizedPointer,
} from '../src/Interaction';

describe('Interaction helpers', () => {
  test('normalizes screen coordinates to device coordinates', () => {
    expect(getNormalizedPointer({ x: 50, y: 25 }, 200, 100)).toEqual({
      x: -0.5,
      y: 0.5,
    });
  });

  test('matches a raycast hit against a registered parent object', () => {
    const root = {
      uuid: 'root',
    };
    const child = {
      parent: root,
      uuid: 'child',
    };
    const matched = { getId: () => 'earth' } as never;

    const result = findParentPickMatch(
      child,
      new Map([['root', matched]]),
    );

    expect(result).toBe(matched);
  });

  test('returns the closest candidate that falls within pick radius', () => {
    const near = { getId: () => 'near' } as never;
    const far = { getId: () => 'far' } as never;

    const result = findClosestPickCandidate(
      { x: 100, y: 100 },
      [
        {
          object: far,
          radiusPx: 30,
          screen: { x: 120, y: 120 },
        },
        {
          object: near,
          radiusPx: 15,
          screen: { x: 108, y: 104 },
        },
      ],
    );

    expect(result).toBeDefined();
    expect(result!.candidate.object).toBe(near);
    expect(result!.distancePx).toBeCloseTo(Math.hypot(8, 4));
  });

  test('returns undefined when all candidates fall outside the pick radius', () => {
    const result = findClosestPickCandidate(
      { x: 0, y: 0 },
      [
        {
          object: { getId: () => 'none' } as never,
          radiusPx: 10,
          screen: { x: 25, y: 0 },
        },
      ],
    );

    expect(result).toBeUndefined();
  });
});
