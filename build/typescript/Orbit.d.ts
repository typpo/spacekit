import * as THREE from 'three';
import { Ephem } from './Ephem';
import { EphemerisTable } from './EphemerisTable';
import type { Coordinate3d } from './Coordinates';
export declare enum OrbitType {
    UNKNOWN = 0,
    PARABOLIC = 1,
    HYPERBOLIC = 2,
    ELLIPTICAL = 3,
    TABLE = 4
}
interface OrbitOptions {
    color?: number;
    eclipticLineColor?: number;
    orbitPathSettings?: {
        leadDurationYears?: number;
        trailDurationYears?: number;
        numberSamplePoints?: number;
    };
}
/**
 * A class that builds a visual representation of a Kepler orbit.
 * @example
 * ```
 * const orbit = new Spacekit.Orbit({
 *   ephem: new Spacekit.Ephem({...}),
 *   options: {
 *     color: 0xFFFFFF,
 *     eclipticLineColor: 0xCCCCCC,
 *   },
 * });
 * ```
 */
export declare class Orbit {
    private ephem;
    private options;
    private orbitPoints?;
    private eclipticDropLines?;
    private orbitShape?;
    private orbitStart;
    private orbitStop;
    private orbitType;
    /**
     * @param {(Ephem | EphemerisTable)} ephem The ephemeris that define this orbit.
     * @param {Object} options
     * @param {Number} options.color The color of the orbital ellipse.
     * @param {Number} options.eclipticLineColor The color of lines drawn
     * @param {Object} options.orbitPathSettings settings for the path
     * @param {Number} options.orbitPathSettings.leadDurationYears orbit path lead time in years
     * @param {Number} options.orbitPathSettings.trailDurationYears orbit path trail time in years
     * @param {Number} options.orbitPathSettings.numberSamplePoints number of
     * points to use when drawing the orbit line. Only applicable for
     * non-elliptical and ephemeris table orbits.  perpendicular to the ecliptic
     * in order to illustrate depth (defaults to 0x333333).
     */
    constructor(ephem: Ephem | EphemerisTable, options: OrbitOptions);
    /**
     * Get heliocentric position of object at a given JD.
     * @param {Number} jd Date value in JD.
     * @param {boolean} debug Set true for debug output.
     * @return {Array.<Number>} [X, Y, Z] coordinates
     */
    getPositionAtTime(jd: number, debug?: boolean): Coordinate3d;
    getPositionAtTimeParabolic(jd: number, debug?: boolean): Coordinate3d;
    getPositionAtTimeNearParabolic(jd: number, debug?: boolean): Coordinate3d;
    getPositionAtTimeHyperbolic(jd: number, debug?: boolean): Coordinate3d;
    getPositionAtTimeElliptical(jd: number, debug?: boolean): Coordinate3d;
    getPositionAtTimeTable(jd: number, debug?: boolean): Coordinate3d;
    /**
     * Given true anomaly and heliocentric distance, returns the scaled heliocentric coordinates (X, Y, Z)
     * @param {Number} v True anomaly
     * @param {Number} r Heliocentric distance
     * @return {Array.<Number>} Heliocentric coordinates
     */
    vectorToHeliocentric(v: number, r: number): Coordinate3d;
    /**
     * Returns whether the requested epoch is within the current orbit's
     * definition. Used only for ephemeris tables.
     * @param {Number} jd
     * @return {boolean} true if it is within the orbit span, false if not
     */
    needsUpdateForTime(jd: number): boolean;
    /**
     * Calculates, caches, and returns the orbit state for this orbit around this time
     * @param {Number} jd center time of the orbit (only used for ephemeris table ephemeris)
     * @param {boolean} forceCompute forces the recomputing of the orbit on this call
     * @return {THREE.Line}
     */
    getOrbitShape(jd?: number, forceCompute?: boolean): THREE.Line;
    /**
     * Compute a line between a given date range.
     * @private
     */
    private getLine;
    /**
     * Returns the orbit for a table lookup orbit definition
     * @private
     * @param {Number} startJd start of orbit in JDate format
     * @param {Number} stopJd end of orbit in JDate format
     * @param {Number} step step size in days
     * @return {THREE.Line}
     */
    private getTableOrbit;
    /**
     * @private
     * @return {THREE.Line} The ellipse object that represents this orbit.
     */
    private getEllipse;
    /**
     * @private
     * @return {THREE.Vector3[]} A THREE.js geometry
     */
    private getEllipsePoints;
    /**
     * @private
     * @return {THREE.Line} Line object
     */
    private generateAndCacheOrbitShape;
    /**
     * A geometry containing line segments that run between the orbit ellipse and
     * the ecliptic plane of the solar system. This is a useful visual effect
     * that makes it easy to tell when an orbit goes below or above the ecliptic
     * plane.
     * @return {THREE.LineSegments} A geometry with many line segments.
     */
    getLinesToEcliptic(): THREE.LineSegments;
    /**
     * Get the color of this orbit.
     * @return {Number} The hexadecimal color of the orbital ellipse.
     */
    getHexColor(): number;
    /**
     * @param {Number} hexVal The hexadecimal color of the orbital ellipse.
     */
    setHexColor(hexVal: number): void;
    /**
     * Get the visibility of this orbit.
     * @return {boolean} Whether the orbital ellipse is visible. Note that
     * although the ellipse may not be visible, it is still present in the
     * underlying Scene and Simultation.
     */
    getVisibility(): boolean;
    /**
     * Change the visibility of this orbit.
     * @param {boolean} val Whether to show the orbital ellipse.
     */
    setVisibility(val: boolean): void;
    /**
     * Get the type of orbit. Returns one of OrbitType.PARABOLIC, HYPERBOLIC,
     * ELLIPTICAL, or UNKNOWN.
     * @param {(Ephem | EphemerisTable)} Ephemeris
     * @return {OrbitType} Name of orbit type
     */
    static getOrbitType(ephem: Ephem | EphemerisTable): OrbitType;
}
export {};
