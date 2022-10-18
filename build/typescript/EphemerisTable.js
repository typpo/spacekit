"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.EphemerisTable = void 0;
var SpacekitMath = __importStar(require("./Math"));
var Util = __importStar(require("./util"));
var Units_1 = __importDefault(require("./Units"));
// Constants
var MAX_INTERPOLATION_ORDER = 20;
var INCREASING_JDATE_SEARCH_METHOD = function (a, b) { return a[0] - b; };
// Default Values
var DEFAULT_UNITS = {
    distance: 'au',
    time: 'day'
};
var DEFAULT_EPHEM_TYPE = 'cartesianposvel';
var DEFAULT_INTERPOLATION_TYPE = 'lagrange';
var DEFAULT_INTERPOLATION_ORDER = 5;
// Allowable unit types
var DISTANCE_UNITS = new Set(['km', 'au']);
var EPHEM_TYPES = new Set(['cartesianposvel']);
var INTERPOLATION_TYPES = new Set(['lagrange']);
var TIME_UNITS = new Set(['day', 'sec']);
/**
 * This class encapsulates the data and necessary methods for operating with look up ephemeris data.
 * Users of the class pass in their ephemeris data as a data structure with the data and the settings for the ephemeris.
 * The settings include things like the units, and the ephemeris representation. The ephemeris data itself is an array
 * of arrays where each line constitute the necessary components of the line.
 *
 * For 'cartesianposvel' style ephemeris each line of data looks like: [Julian Date, X, Y, Z, Vx, Vy, Vz]
 */
var EphemerisTable = /** @class */ (function () {
    /**
     * @param {Object} ephemerisData Look up ephemeris data to initialize the table with and the properties of it
     * @param {Array.<Array.<Number>>} ephemerisData.data the ephemeris data appropriate for the specified ephemeris type
     * @param {String} ephemerisData.ephemerisType the type of ephemeres data here (defaults to 'cartesianposvel')
     * @param {String} ephemerisData.distanceUnits the distance units for this data (defaults to AU
     * @param {String} ephemerisData.timeUnits the distance units for this data (defaults to day)
     * @param {String} ephemerisData.interpolationType the type of interpolater to use (defaults to 'lagrange')
     * @param {Number} ephemerisData.interpolationOrder the order of the interpolator to use (defaults to 5)
     */
    function EphemerisTable(ephemerisData) {
        this.units = JSON.parse(JSON.stringify(DEFAULT_UNITS));
        this.ephemType = DEFAULT_EPHEM_TYPE;
        this.interpolationType = DEFAULT_INTERPOLATION_TYPE;
        this.interpolationOrder = DEFAULT_INTERPOLATION_ORDER;
        if (!ephemerisData) {
            throw new Error('EphemerisTable must be initialized with an ephemeris data structure');
        }
        if (!ephemerisData.data ||
            !Array.isArray(ephemerisData.data) ||
            ephemerisData.data.length === 0 ||
            !Array.isArray(ephemerisData.data[0])) {
            throw new Error('EphemerisTable must be initialized with a structure containing an array of arrays of ephemeris data');
        }
        this.data = JSON.parse(JSON.stringify(ephemerisData.data));
        if (ephemerisData.distanceUnits) {
            if (!DISTANCE_UNITS.has(ephemerisData.distanceUnits)) {
                throw new Error("Unknown distance units: ".concat(ephemerisData.distanceUnits));
            }
            this.units.distance = ephemerisData.distanceUnits;
        }
        if (ephemerisData.timeUnits) {
            if (!TIME_UNITS.has(ephemerisData.timeUnits)) {
                throw new Error("Unknown time units: ".concat(ephemerisData.timeUnits));
            }
            this.units.time = ephemerisData.timeUnits;
        }
        if (ephemerisData.ephemerisType) {
            if (!EPHEM_TYPES.has(ephemerisData.ephemerisType)) {
                throw new Error("Unknown ephemeris type: ".concat(ephemerisData.ephemerisType));
            }
            this.ephemType = ephemerisData.ephemerisType;
        }
        if (ephemerisData.interpolationType) {
            if (!INTERPOLATION_TYPES.has(ephemerisData.interpolationType)) {
                throw new Error("Unknown interpolation type: ".concat(ephemerisData.interpolationType));
            }
            this.interpolationType = ephemerisData.interpolationType;
        }
        if (ephemerisData.interpolationOrder !== undefined) {
            if (ephemerisData.interpolationOrder < 1 ||
                ephemerisData.interpolationOrder > MAX_INTERPOLATION_ORDER) {
                throw new Error("Interpolation order must be >0 and <".concat(MAX_INTERPOLATION_ORDER, ": ").concat(ephemerisData.interpolationOrder));
            }
            this.interpolationOrder = ephemerisData.interpolationOrder;
        }
        if (this.units.distance !== DEFAULT_UNITS.distance ||
            this.units.time !== DEFAULT_UNITS.time) {
            var distanceMultiplier_1 = this.calcDistanceMultiplier(this.units.distance);
            var timeMultiplier_1 = this.calcTimeMultiplier(this.units.time);
            this.data.forEach(function (line) {
                line[1] *= distanceMultiplier_1;
                line[2] *= distanceMultiplier_1;
                line[3] *= distanceMultiplier_1;
                line[4] *= distanceMultiplier_1 * timeMultiplier_1;
                line[5] *= distanceMultiplier_1 * timeMultiplier_1;
                line[6] *= distanceMultiplier_1 * timeMultiplier_1;
            });
        }
    }
    /**
     * Calculates the interpolated position for the given requested date. If the requested date is before the first
     * point it returns the first point. If the requested date is after the last point it returns the last point.
     * @param {Number} jd of the requested time
     * @returns {Number[]|*[]} x, y, z position in the ephemeris table's reference frame
     */
    EphemerisTable.prototype.getPositionAtTime = function (jd) {
        if (jd <= this.data[0][0]) {
            return [this.data[0][1], this.data[0][2], this.data[0][3]];
        }
        var last = this.data[this.data.length - 1];
        if (jd >= last[0]) {
            return [last[1], last[2], last[3]];
        }
        var _a = this.calcBoundingIndices(jd), startIndex = _a.startIndex, stopIndex = _a.stopIndex;
        var x = SpacekitMath.interpolate(this.data, jd, startIndex, stopIndex, 0, 1);
        var y = SpacekitMath.interpolate(this.data, jd, startIndex, stopIndex, 0, 2);
        var z = SpacekitMath.interpolate(this.data, jd, startIndex, stopIndex, 0, 3);
        return [x, y, z];
    };
    /**
     * Given the start and stop time returns a uniform ephemeris history.
     * @param {Number} startJd the requested start date
     * @param {Number} stopJd the requested stop date
     * @param {Number} stepDays the step size of the data requested in days (can be fractional days)
     * @returns {number[][]}
     */
    EphemerisTable.prototype.getPositions = function (startJd, stopJd, stepDays) {
        if (startJd > stopJd) {
            throw new Error("Requested start needs to be after requested stop");
        }
        if (stepDays <= 0.0) {
            throw new Error('Step days needs to be greater than zero');
        }
        var result = [];
        for (var t = startJd; t <= stopJd; t += stepDays) {
            result.push(this.getPositionAtTime(t));
        }
        return result;
    };
    /**
     * @private
     */
    EphemerisTable.prototype.calcDistanceMultiplier = function (unitType) {
        switch (unitType) {
            case 'au':
                return 1.0;
            case 'km':
                return Units_1["default"].kmToAu(1);
            default:
                throw new Error('Unknown distance unit type: ' + unitType);
        }
    };
    /**
     * @private
     */
    EphemerisTable.prototype.calcTimeMultiplier = function (unitType) {
        switch (unitType) {
            case 'day':
                return 1.0;
            case 'sec':
                return 1 / 86400.0;
            default:
                throw new Error('Unknown time unit type: ' + unitType);
        }
    };
    /**
     * @private
     */
    EphemerisTable.prototype.calcBoundingIndices = function (jd) {
        var halfSampleSize = Math.floor(this.interpolationOrder / 2);
        var closestIndex = Util.binarySearch(this.data, jd, INCREASING_JDATE_SEARCH_METHOD);
        if (closestIndex < 0) {
            closestIndex = ~closestIndex - 1;
        }
        var startIndex = closestIndex - halfSampleSize;
        if (startIndex < 0) {
            startIndex = 0;
        }
        var stopIndex = startIndex + Number(this.interpolationOrder);
        if (stopIndex >= this.data.length) {
            stopIndex = this.data.length - 1;
            if (this.data.length > halfSampleSize) {
                startIndex = stopIndex - halfSampleSize;
            }
        }
        return { startIndex: startIndex, stopIndex: stopIndex };
    };
    return EphemerisTable;
}());
exports.EphemerisTable = EphemerisTable;
