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
export declare function getNormalizedPointer(screen: ScreenPosition, width: number, height: number): ScreenPosition;
export declare function findParentPickMatch(target: Object3dLike | null | undefined, objectsByUuid: Map<string, SpaceObject>): SpaceObject | undefined;
export declare function findClosestPickCandidate(screen: ScreenPosition, candidates: PickCandidate[]): {
    candidate: PickCandidate;
    distancePx: number;
} | undefined;
export {};
