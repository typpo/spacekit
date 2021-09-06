import { Ephem } from './Ephem';
import type { Simulation } from './Simulation';
/**
 * A dictionary containing ephemerides of planets and other well-known objects.
 * @example
 * ```
 * const planet1 = viz.createObject('planet1', {
 *   ephem: EphemPresets.MERCURY,
 * });
 * ```
 */
export declare const EphemPresets: {
    MERCURY: Ephem;
    VENUS: Ephem;
    EARTH: Ephem;
    MOON: Ephem;
    MARS: Ephem;
    JUPITER: Ephem;
    SATURN: Ephem;
    URANUS: Ephem;
    NEPTUNE: Ephem;
    PLUTO: Ephem;
};
/**
 * A class for fetching orbital elements of natural satellites in our solar
 * system.
 */
export declare class NaturalSatellites {
    private _simulation;
    private _context;
    private _satellitesByPlanet;
    private _readyPromise;
    constructor(simulation: Simulation);
    /**
     * Get a list of satellites and their orbital elements for a given planet.
     * @param {String} planetName Name of a planet, e.g. "Jupiter"
     * @return {Object} List containing a list of dictionaries with information
     * on each satellite.
     */
    getSatellitesForPlanet(planetName: string): {
        name: string;
        elementType: string;
        tags: Set<string>;
        ephem: Ephem;
    }[];
    load(): Promise<NaturalSatellites>;
}
