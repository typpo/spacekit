import type { Coordinate3d } from './Coordinates';
import type { SpaceObject } from './SpaceObject';

export interface ScreenPosition {
  x: number;
  y: number;
}

export interface PickCandidate {
  object: SpaceObject;
  point?: Coordinate3d;
  radiusPx: number;
  screen: ScreenPosition;
}

interface Object3dLike {
  parent?: Object3dLike | null;
  uuid: string;
}

export function getNormalizedPointer(
  screen: ScreenPosition,
  width: number,
  height: number,
): ScreenPosition {
  return {
    x: (screen.x / width) * 2 - 1,
    y: -(screen.y / height) * 2 + 1,
  };
}

export function findParentPickMatch(
  target: Object3dLike | null | undefined,
  objectsByUuid: Map<string, SpaceObject>,
): SpaceObject | undefined {
  let current = target;
  while (current) {
    const matched = objectsByUuid.get(current.uuid);
    if (matched) {
      return matched;
    }
    current = current.parent ?? undefined;
  }
  return undefined;
}

export function findClosestPickCandidate(
  screen: ScreenPosition,
  candidates: PickCandidate[],
): { candidate: PickCandidate; distancePx: number } | undefined {
  let bestMatch:
    | {
        candidate: PickCandidate;
        distancePx: number;
      }
    | undefined;

  candidates.forEach((candidate) => {
    const dx = candidate.screen.x - screen.x;
    const dy = candidate.screen.y - screen.y;
    const distancePx = Math.hypot(dx, dy);
    if (distancePx > candidate.radiusPx) {
      return;
    }

    if (!bestMatch || distancePx < bestMatch.distancePx) {
      bestMatch = {
        candidate,
        distancePx,
      };
    }
  });

  return bestMatch;
}
