import { SphereObject } from './SphereObject';
import type { SpaceObjectOptions } from './SpaceObject';
import type { Simulation } from './Simulation';
export declare class BlackHoleObject extends SphereObject {
    private uniforms;
    constructor(id: string, options: SpaceObjectOptions, simulation: Simulation);
    init(): boolean;
    update(): void;
}
