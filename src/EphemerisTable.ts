import * as SpacekitMath from './Math';
import * as Util from './util';

import Units from './Units';

import type { Coordinate3d } from './Coordinates';

/**
 * A class representing an ephemeris look-up table for defining a space object.
 */

// Types
type InterpolationType = 'lagrange';
type EphemType = 'cartesianposvel';
type DistanceUnits = 'au' | 'km';
type TimeUnits = 'day' | 'sec';

interface EphemerisTableUnits {
  distance: DistanceUnits;
  time: TimeUnits;
}

interface EphemerisTableData {
  data: number[][];
  // TODO(ian): Add the valid strings to typing.
  ephemerisType: EphemType;
  distanceUnits: DistanceUnits;
  timeUnits: TimeUnits;
  interpolationType: InterpolationType;
  interpolationOrder: number;
}

// Constants
const MAX_INTERPOLATION_ORDER = 20;
const INCREASING_JDATE_SEARCH_METHOD = (a: number[], b: number) => a[0] - b;

// Default Values
const DEFAULT_UNITS: EphemerisTableUnits = {
  distance: 'au',
  time: 'day',
};

const DEFAULT_EPHEM_TYPE = 'cartesianposvel';
const DEFAULT_INTERPOLATION_TYPE = 'lagrange';
const DEFAULT_INTERPOLATION_ORDER = 5;

// Allowable unit types
const DISTANCE_UNITS = new Set(['km', 'au']);
const EPHEM_TYPES = new Set(['cartesianposvel']);
const INTERPOLATION_TYPES = new Set(['lagrange']);
const TIME_UNITS = new Set(['day', 'sec']);

/**
 * This class encapsulates the data and necessary methods for operating with look up ephemeris data.
 * Users of the class pass in their ephemeris data as a data structure with the data and the settings for the ephemeris.
 * The settings include things like the units, and the ephemeris representation. The ephemeris data itself is an array
 * of arrays where each line constitute the necessary components of the line.
 *
 * For 'cartesianposvel' style ephemeris each line of data looks like: [Julian Date, X, Y, Z, Vx, Vy, Vz]
 */
export class EphemerisTable {
  private units: EphemerisTableUnits;

  private ephemType: EphemType;

  private interpolationType: InterpolationType;

  private interpolationOrder: number;

  private data: number[][];

  /**
   * @param {Object} ephemerisData Look up ephemeris data to initialize the table with and the properties of it
   * @param {Array.<Array.<Number>>} ephemerisData.data the ephemeris data appropriate for the specified ephemeris type
   * @param {String} ephemerisData.ephemerisType the type of ephemeres data here (defaults to 'cartesianposvel')
   * @param {String} ephemerisData.distanceUnits the distance units for this data (defaults to AU
   * @param {String} ephemerisData.timeUnits the distance units for this data (defaults to day)
   * @param {String} ephemerisData.interpolationType the type of interpolater to use (defaults to 'lagrange')
   * @param {Number} ephemerisData.interpolationOrder the order of the interpolator to use (defaults to 5)
   */
  constructor(ephemerisData: EphemerisTableData) {
    this.units = JSON.parse(JSON.stringify(DEFAULT_UNITS));
    this.ephemType = DEFAULT_EPHEM_TYPE;
    this.interpolationType = DEFAULT_INTERPOLATION_TYPE;
    this.interpolationOrder = DEFAULT_INTERPOLATION_ORDER;

    if (!ephemerisData) {
      throw new Error(
        'EphemerisTable must be initialized with an ephemeris data structure',
      );
    }

    if (
      !ephemerisData.data ||
      !Array.isArray(ephemerisData.data) ||
      ephemerisData.data.length === 0 ||
      !Array.isArray(ephemerisData.data[0])
    ) {
      throw new Error(
        'EphemerisTable must be initialized with a structure containing an array of arrays of ephemeris data',
      );
    }
    this.data = JSON.parse(JSON.stringify(ephemerisData.data));

    if (ephemerisData.distanceUnits) {
      if (!DISTANCE_UNITS.has(ephemerisData.distanceUnits)) {
        throw new Error(
          `Unknown distance units: ${ephemerisData.distanceUnits}`,
        );
      }
      this.units.distance = ephemerisData.distanceUnits;
    }

    if (ephemerisData.timeUnits) {
      if (!TIME_UNITS.has(ephemerisData.timeUnits)) {
        throw new Error(`Unknown time units: ${ephemerisData.timeUnits}`);
      }
      this.units.time = ephemerisData.timeUnits;
    }

    if (ephemerisData.ephemerisType) {
      if (!EPHEM_TYPES.has(ephemerisData.ephemerisType)) {
        throw new Error(
          `Unknown ephemeris type: ${ephemerisData.ephemerisType}`,
        );
      }
      this.ephemType = ephemerisData.ephemerisType;
    }

    if (ephemerisData.interpolationType) {
      if (!INTERPOLATION_TYPES.has(ephemerisData.interpolationType)) {
        throw new Error(
          `Unknown interpolation type: ${ephemerisData.interpolationType}`,
        );
      }
      this.interpolationType = ephemerisData.interpolationType;
    }

    if (ephemerisData.interpolationOrder !== undefined) {
      if (
        ephemerisData.interpolationOrder < 1 ||
        ephemerisData.interpolationOrder > MAX_INTERPOLATION_ORDER
      ) {
        throw new Error(
          `Interpolation order must be >0 and <${MAX_INTERPOLATION_ORDER}: ${ephemerisData.interpolationOrder}`,
        );
      }
      this.interpolationOrder = ephemerisData.interpolationOrder;
    }

    if (
      this.units.distance !== DEFAULT_UNITS.distance ||
      this.units.time !== DEFAULT_UNITS.time
    ) {
      const distanceMultiplier = this.calcDistanceMultiplier(
        this.units.distance,
      );
      const timeMultiplier = this.calcTimeMultiplier(this.units.time);
      this.data.forEach((line) => {
        line[1] *= distanceMultiplier;
        line[2] *= distanceMultiplier;
        line[3] *= distanceMultiplier;
        line[4] *= distanceMultiplier * timeMultiplier;
        line[5] *= distanceMultiplier * timeMultiplier;
        line[6] *= distanceMultiplier * timeMultiplier;
      });
    }
  }

  /**
   * Calculates the interpolated position for the given requested date. If the requested date is before the first
   * point it returns the first point. If the requested date is after the last point it returns the last point.
   * @param {Number} jd of the requested time
   * @returns {Number[]|*[]} x, y, z position in the ephemeris table's reference frame
   */
  getPositionAtTime(jd: number): Coordinate3d {
    if (jd <= this.data[0][0]) {
      return [this.data[0][1], this.data[0][2], this.data[0][3]];
    }

    const last = this.data[this.data.length - 1];
    if (jd >= last[0]) {
      return [last[1], last[2], last[3]];
    }

    const { startIndex, stopIndex } = this.calcBoundingIndices(jd);
    const x = SpacekitMath.interpolate(
      this.data,
      jd,
      startIndex,
      stopIndex,
      0,
      1,
    );
    const y = SpacekitMath.interpolate(
      this.data,
      jd,
      startIndex,
      stopIndex,
      0,
      2,
    );
    const z = SpacekitMath.interpolate(
      this.data,
      jd,
      startIndex,
      stopIndex,
      0,
      3,
    );

    return [x, y, z];
  }

  /**
   * Given the start and stop time returns a uniform ephemeris history.
   * @param {Number} startJd the requested start date
   * @param {Number} stopJd the requested stop date
   * @param {Number} stepDays the step size of the data requested in days (can be fractional days)
   * @returns {number[][]}
   */
  getPositions(
    startJd: number,
    stopJd: number,
    stepDays: number,
  ): Coordinate3d[] {
    if (startJd > stopJd) {
      throw new Error(`Requested start needs to be after requested stop`);
    }

    if (stepDays <= 0.0) {
      throw new Error('Step days needs to be greater than zero');
    }

    const result: Coordinate3d[] = [];
    for (let t = startJd; t <= stopJd; t += stepDays) {
      result.push(this.getPositionAtTime(t));
    }

    return result;
  }

  /**
   * @private
   */
  private calcDistanceMultiplier(unitType: DistanceUnits): number {
    switch (unitType) {
      case 'au':
        return 1.0;
      case 'km':
        return Units.kmToAu(1);
      default:
        throw new Error('Unknown distance unit type: ' + unitType);
    }
  }

  /**
   * @private
   */
  private calcTimeMultiplier(unitType: TimeUnits): number {
    switch (unitType) {
      case 'day':
        return 1.0;
      case 'sec':
        return 1 / 86400.0;
      default:
        throw new Error('Unknown time unit type: ' + unitType);
    }
  }

  /**
   * @private
   */
  private calcBoundingIndices(jd: number): {
    startIndex: number;
    stopIndex: number;
  } {
    const halfSampleSize = Math.floor(this.interpolationOrder / 2);
    let closestIndex = Util.binarySearch(
      this.data,
      jd,
      INCREASING_JDATE_SEARCH_METHOD,
    );
    if (closestIndex < 0) {
      closestIndex = ~closestIndex - 1;
    }
    let startIndex = closestIndex - halfSampleSize;
    if (startIndex < 0) {
      startIndex = 0;
    }

    let stopIndex = startIndex + Number(this.interpolationOrder);
    if (stopIndex >= this.data.length) {
      stopIndex = this.data.length - 1;
      if (this.data.length > halfSampleSize) {
        startIndex = stopIndex - halfSampleSize;
      }
    }

    return { startIndex: startIndex, stopIndex: stopIndex };
  }
}
