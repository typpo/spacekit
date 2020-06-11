import * as SpacekitMath from './Math';
import * as Units from './Units';
import * as Util from './util';

/**
 * A class representing an ephemeris look-up table for defining a space object.
 * @example
 */

// Constants
const MAX_INTERPOLATION_ORDER = 20;
const INCREASING_JDATE_SEARCH_METHOD = (a, b) => {
  return a[0] - b;
};

//Default Values
const DEFAULT_UNITS = {
  distance: 'au',
  time: 'day',
};

const DEFAULT_EPHEM_TYPE = 'cartesianposvel';
const DEFAULT_INTERPOLATION_TYPE = 'lagrange';
const DEFAULT_INTERPOLATION_ORDER = 5;

//Allowable unit types
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
  /**
   * @param {Object} ephemerisData Look up ephemeris data to initialize the table with and the properties of it
   * @param {Array.<Array.<Number>>} ephemerisData.data the ephemeris data appropriate for the specified ephemeris type
   * @param {String} ephemerisData.ephemerisType the type of ephemeres data here (defaults to 'cartesianposvel')
   * @param {String} ephemerisData.distanceUnits the distance units for this data (defaults to AU
   * @param {String} ephemerisData.timeUnits the distance units for this data (defaults to day)
   * @param {String} ephemerisData.interpolationType the type of interpolater to use (defaults to 'lagrange')
   * @param {Number} ephemerisData.interpolationOrder the order of the interpolator to use (defaults to 5)
   */
  constructor(ephemerisData) {
    this._units = JSON.parse(JSON.stringify(DEFAULT_UNITS));
    this._ephemType = DEFAULT_EPHEM_TYPE;
    this._interpolationType = DEFAULT_INTERPOLATION_TYPE;
    this._interpolationOrder = DEFAULT_INTERPOLATION_ORDER;

    if (!ephemerisData) {
      throw 'EphemerisTable must be initialized with an ephemeris data structure';
    }

    if (
      !ephemerisData.data ||
      !Array.isArray(ephemerisData.data) ||
      ephemerisData.data.length === 0 ||
      !Array.isArray(ephemerisData.data[0])
    ) {
      throw 'EphemerisTable must be initialized with a structure containing an array of arrays of ephemeris data';
    }
    this._data = JSON.parse(JSON.stringify(ephemerisData.data));

    if (ephemerisData.distanceUnits) {
      if (!DISTANCE_UNITS.has(ephemerisData.distanceUnits)) {
        throw `Unknown distance units: ${ephemerisData.distanceUnits}`;
      }
      this._units.distance = ephemerisData.distanceUnits;
    }

    if (ephemerisData.timeUnits) {
      if (!TIME_UNITS.has(ephemerisData.timeUnits)) {
        throw `Unknown time units: ${ephemerisData.timeUnits}`;
      }
      this._units.time = ephemerisData.timeUnits;
    }

    if (ephemerisData.ephemerisType) {
      if (!EPHEM_TYPES.has(ephemerisData.ephemerisType)) {
        throw `Unknown ephemeris type: ${ephemerisData.ephemerisType}`;
      }
      this._ephemType = ephemerisData.ephemerisType;
    }

    if (ephemerisData.interpolationType) {
      if (!INTERPOLATION_TYPES.has(ephemerisData.interpolationType)) {
        throw `Unknown interpolation type: ${ephemerisData.interpolationType}`;
      }
      this._interpolationType = ephemerisData.interpolationType;
    }

    if (ephemerisData.interpolationOrder !== undefined) {
      if (
        ephemerisData.interpolationOrder < 1 ||
        ephemerisData.interpolationOrder > MAX_INTERPOLATION_ORDER
      ) {
        throw `Interpolation order must be >0 and <${MAX_INTERPOLATION_ORDER}: ${ephemerisData.interpolationOrder}`;
      }
      this._interpolationOrder = ephemerisData.interpolationOrder;
    }

    if (
      this._units.distance !== DEFAULT_UNITS.distance ||
      this._units.time !== DEFAULT_UNITS.time
    ) {
      const distanceMultiplier = this.calcDistanceMultiplier(
        this._units.distance,
      );
      const timeMultiplier = this.calcTimeMultiplier(this._units.time);
      this._data.forEach(line => {
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
  getPositionAtTime(jd) {
    if (jd <= this._data[0][0]) {
      return [this._data[0][1], this._data[0][2], this._data[0][3]];
    }

    const last = this._data[this._data.length - 1];
    if (jd >= last[0]) {
      return [last[1], last[2], last[3]];
    }

    const { startIndex, stopIndex } = this.calcBoundingIndices(jd);
    const x = SpacekitMath.interpolate(
      this._data,
      jd,
      startIndex,
      stopIndex,
      0,
      1,
    );
    const y = SpacekitMath.interpolate(
      this._data,
      jd,
      startIndex,
      stopIndex,
      0,
      2,
    );
    const z = SpacekitMath.interpolate(
      this._data,
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
  getPositions(startJd, stopJd, stepDays) {
    if (startJd > stopJd) {
      throw `Requested start needs to be after requested stop`;
    }

    if (stepDays <= 0.0) {
      throw 'Step days needs to be greater than zero';
    }

    let result = [];
    for (let t = startJd; t <= stopJd; t += stepDays) {
      result.push(this.getPositionAtTime(t));
    }

    return result;
  }

  /**
   * @private
   */
  calcDistanceMultiplier(unitType) {
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
  calcTimeMultiplier(unitType) {
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
  calcBoundingIndices(jd) {
    const halfSampleSize = Math.floor(this._interpolationOrder / 2);
    let closestIndex = Util.binarySearch(
      this._data,
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

    let stopIndex = startIndex + Number(this._interpolationOrder);
    if (stopIndex >= this._data.length) {
      stopIndex = this._data.length - 1;
      if (this._data.length > halfSampleSize) {
        startIndex = stopIndex - halfSampleSize;
      }
    }

    return { startIndex: startIndex, stopIndex: stopIndex };
  }
}
