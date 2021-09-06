import type { Coordinate3d } from './Coordinates';
/**
 * A class representing an ephemeris look-up table for defining a space object.
 */
declare type InterpolationType = 'lagrange';
declare type EphemType = 'cartesianposvel';
declare type DistanceUnits = 'au' | 'km';
declare type TimeUnits = 'day' | 'sec';
interface EphemerisTableData {
    data: number[][];
    ephemerisType: EphemType;
    distanceUnits: DistanceUnits;
    timeUnits: TimeUnits;
    interpolationType: InterpolationType;
    interpolationOrder: number;
}
/**
 * This class encapsulates the data and necessary methods for operating with look up ephemeris data.
 * Users of the class pass in their ephemeris data as a data structure with the data and the settings for the ephemeris.
 * The settings include things like the units, and the ephemeris representation. The ephemeris data itself is an array
 * of arrays where each line constitute the necessary components of the line.
 *
 * For 'cartesianposvel' style ephemeris each line of data looks like: [Julian Date, X, Y, Z, Vx, Vy, Vz]
 */
export declare class EphemerisTable {
    private units;
    private ephemType;
    private interpolationType;
    private interpolationOrder;
    private data;
    /**
     * @param {Object} ephemerisData Look up ephemeris data to initialize the table with and the properties of it
     * @param {Array.<Array.<Number>>} ephemerisData.data the ephemeris data appropriate for the specified ephemeris type
     * @param {String} ephemerisData.ephemerisType the type of ephemeres data here (defaults to 'cartesianposvel')
     * @param {String} ephemerisData.distanceUnits the distance units for this data (defaults to AU
     * @param {String} ephemerisData.timeUnits the distance units for this data (defaults to day)
     * @param {String} ephemerisData.interpolationType the type of interpolater to use (defaults to 'lagrange')
     * @param {Number} ephemerisData.interpolationOrder the order of the interpolator to use (defaults to 5)
     */
    constructor(ephemerisData: EphemerisTableData);
    /**
     * Calculates the interpolated position for the given requested date. If the requested date is before the first
     * point it returns the first point. If the requested date is after the last point it returns the last point.
     * @param {Number} jd of the requested time
     * @returns {Number[]|*[]} x, y, z position in the ephemeris table's reference frame
     */
    getPositionAtTime(jd: number): Coordinate3d;
    /**
     * Given the start and stop time returns a uniform ephemeris history.
     * @param {Number} startJd the requested start date
     * @param {Number} stopJd the requested stop date
     * @param {Number} stepDays the step size of the data requested in days (can be fractional days)
     * @returns {number[][]}
     */
    getPositions(startJd: number, stopJd: number, stepDays: number): Coordinate3d[];
    /**
     * @private
     */
    private calcDistanceMultiplier;
    /**
     * @private
     */
    private calcTimeMultiplier;
    /**
     * @private
     */
    private calcBoundingIndices;
}
export {};
