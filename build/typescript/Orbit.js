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
exports.Orbit = exports.OrbitType = void 0;
var THREE = __importStar(require("three"));
// @ts-ignore
var julian_1 = __importDefault(require("julian"));
var Ephem_1 = require("./Ephem");
var EphemerisTable_1 = require("./EphemerisTable");
var Scale_1 = require("./Scale");
var OrbitType;
(function (OrbitType) {
    OrbitType[OrbitType["UNKNOWN"] = 0] = "UNKNOWN";
    OrbitType[OrbitType["PARABOLIC"] = 1] = "PARABOLIC";
    OrbitType[OrbitType["HYPERBOLIC"] = 2] = "HYPERBOLIC";
    OrbitType[OrbitType["ELLIPTICAL"] = 3] = "ELLIPTICAL";
    OrbitType[OrbitType["TABLE"] = 4] = "TABLE";
})(OrbitType = exports.OrbitType || (exports.OrbitType = {}));
var sin = Math.sin, cos = Math.cos, sqrt = Math.sqrt;
var DEFAULT_LEAD_TRAIL_YEARS = 10;
var DEFAULT_SAMPLE_POINTS = 360;
var DEFAULT_ORBIT_PATH_SETTINGS = {
    leadDurationYears: DEFAULT_LEAD_TRAIL_YEARS,
    trailDurationYears: DEFAULT_LEAD_TRAIL_YEARS,
    numberSamplePoints: DEFAULT_SAMPLE_POINTS
};
/**
 * Special cube root function that assumes input is always positive.
 */
function cbrt(x) {
    return Math.exp(Math.log(x) / 3.0);
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
var Orbit = /** @class */ (function () {
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
    function Orbit(ephem, options) {
        var _a, _b, _c;
        /**
         * Ephem object
         * @type {(Ephem | EphemerisTable)}
         */
        this.ephem = ephem;
        /**
         * Options (see class definition for details)
         */
        this.options = options || {};
        /**
         * configuring orbit path lead/trail data
         */
        if (!this.options.orbitPathSettings) {
            this.options.orbitPathSettings = JSON.parse(JSON.stringify(DEFAULT_ORBIT_PATH_SETTINGS));
        }
        if (!((_a = this.options.orbitPathSettings) === null || _a === void 0 ? void 0 : _a.leadDurationYears)) {
            this.options.orbitPathSettings.leadDurationYears =
                DEFAULT_LEAD_TRAIL_YEARS;
        }
        if (!((_b = this.options.orbitPathSettings) === null || _b === void 0 ? void 0 : _b.trailDurationYears)) {
            this.options.orbitPathSettings.trailDurationYears =
                DEFAULT_LEAD_TRAIL_YEARS;
        }
        if (!((_c = this.options.orbitPathSettings) === null || _c === void 0 ? void 0 : _c.numberSamplePoints)) {
            this.options.orbitPathSettings.numberSamplePoints =
                DEFAULT_SAMPLE_POINTS;
        }
        /**
         * Cached orbital points.
         * @type {Array.<THREE.BufferGeometry>}
         */
        this.orbitPoints = undefined;
        /**
         * Cached ecliptic drop lines.
         * @type {Array.<THREE.LineSegments>}
         */
        this.eclipticDropLines = undefined;
        /**
         * Cached orbit shape.
         * @type {THREE.Line}
         */
        this.orbitShape = undefined;
        /**
         * Time span of the drawn orbit line
         */
        this.orbitStart = 0;
        this.orbitStop = 0;
        /**
         * Orbit type
         * @type {OrbitType}
         */
        this.orbitType = Orbit.getOrbitType(this.ephem);
    }
    /**
     * Get heliocentric position of object at a given JD.
     * @param {Number} jd Date value in JD.
     * @param {boolean} debug Set true for debug output.
     * @return {Array.<Number>} [X, Y, Z] coordinates
     */
    Orbit.prototype.getPositionAtTime = function (jd, debug) {
        // Note: logic below must match the vertex shader.
        if (debug === void 0) { debug = false; }
        // This position calculation is used to create orbital ellipses.
        switch (this.orbitType) {
            case OrbitType.PARABOLIC:
                return this.getPositionAtTimeNearParabolic(jd, debug);
            case OrbitType.HYPERBOLIC:
                return this.getPositionAtTimeHyperbolic(jd, debug);
            case OrbitType.ELLIPTICAL:
                return this.getPositionAtTimeElliptical(jd, debug);
            case OrbitType.TABLE:
                return this.getPositionAtTimeTable(jd, debug);
            default:
                throw new Error('No handler for this type of orbit');
        }
    };
    Orbit.prototype.getPositionAtTimeParabolic = function (jd, debug) {
        if (debug === void 0) { debug = false; }
        // See https://stjarnhimlen.se/comp/ppcomp.html#17
        var eph = this.ephem;
        if (eph instanceof EphemerisTable_1.EphemerisTable) {
            throw new Error('Attempted to compute coordinates from ephemeris table');
        }
        // The Guassian gravitational constant
        var k = 0.01720209895;
        // Perihelion distance
        var q = eph.get('q');
        // Compute time since perihelion
        var d = jd - eph.get('tp');
        var H = (d * (k / sqrt(2))) / sqrt(q * q * q);
        var h = 1.5 * H;
        var g = sqrt(1.0 + h * h);
        var s = cbrt(g + h) - cbrt(g - h);
        // True anomaly
        var v = 2.0 * Math.atan(s);
        // Heliocentric distance
        var r = q * (1.0 + s * s);
        return this.vectorToHeliocentric(v, r);
    };
    Orbit.prototype.getPositionAtTimeNearParabolic = function (jd, debug) {
        if (debug === void 0) { debug = false; }
        // See https://stjarnhimlen.se/comp/ppcomp.html#17
        var eph = this.ephem;
        if (eph instanceof EphemerisTable_1.EphemerisTable) {
            throw new Error('Attempted to compute coordinates from ephemeris table');
        }
        // The Guassian gravitational constant
        var k = 0.01720209895;
        // Eccentricity
        var e = eph.get('e');
        // Perihelion distance
        var q = eph.get('q');
        // Compute time since perihelion
        var d = jd - eph.get('tp');
        var a = 0.75 * d * k * sqrt((1 + e) / (q * q * q));
        var b = sqrt(1 + a * a);
        var W = cbrt(b + a) - cbrt(b - a);
        var f = (1 - e) / (1 + e);
        var a1 = 2 / 3 + (2 / 5) * W * W;
        var a2 = 7 / 5 + (33 / 35) * W * W + (37 / 175) * Math.pow(W, 4);
        var a3 = W * W * (432 / 175 + (956 / 1125) * W * W + (84 / 1575) * Math.pow(W, 4));
        var C = (W * W) / (1 + W * W);
        var g = f * C * C;
        var w = W * (1 + f * C * (a1 + a2 * g + a3 * g * g));
        // True anomaly
        var v = 2 * Math.atan(w);
        // Heliocentric distance
        var r = (q * (1 + w * w)) / (1 + w * w * f);
        return this.vectorToHeliocentric(v, r);
    };
    Orbit.prototype.getPositionAtTimeHyperbolic = function (jd, debug) {
        if (debug === void 0) { debug = false; }
        // See https://stjarnhimlen.se/comp/ppcomp.html#17
        var eph = this.ephem;
        if (eph instanceof EphemerisTable_1.EphemerisTable) {
            throw new Error('Attempted to compute coordinates from ephemeris table');
        }
        // Eccentricity
        var e = eph.get('e');
        // Semimajor axis
        var a = eph.get('a');
        // Mean anomaly
        var ma = eph.get('ma');
        // Calculate mean anomaly at jd
        var n = eph.get('n', 'rad');
        var epoch = eph.get('epoch');
        var d = jd - epoch;
        var M = ma + n * d;
        var F0 = M;
        for (var count = 0; count < 100; count++) {
            var F1 = (M + e * (F0 * Math.cosh(F0) - Math.sinh(F0))) /
                (e * Math.cosh(F0) - 1);
            var lastdiff = Math.abs(F1 - F0);
            F0 = F1;
            if (lastdiff < 0.0000001) {
                break;
            }
        }
        var F = F0;
        var v = 2 * Math.atan(sqrt((e + 1) / (e - 1))) * Math.tanh(F / 2);
        var r = (a * (1 - e * e)) / (1 + e * cos(v));
        return this.vectorToHeliocentric(v, r);
    };
    Orbit.prototype.getPositionAtTimeElliptical = function (jd, debug) {
        if (debug === void 0) { debug = false; }
        var eph = this.ephem;
        if (eph instanceof EphemerisTable_1.EphemerisTable) {
            throw new Error('Attempted to compute coordinates from ephemeris table');
        }
        // Eccentricity
        var e = eph.get('e');
        // Mean anomaly
        var ma = eph.get('ma', 'rad');
        // Calculate mean anomaly at jd
        var n = eph.get('n', 'rad');
        var epoch = eph.get('epoch');
        var d = jd - epoch;
        var M = ma + n * d;
        if (debug) {
            console.info('period=', eph.get('period'));
            console.info('n=', n);
            console.info('ma=', ma);
            console.info('d=', d);
            console.info('M=', M);
        }
        // Estimate eccentric and true anom using iterative approx
        var E0 = M;
        for (var count = 0; count < 100; count++) {
            var E1 = M + e * sin(E0);
            var lastdiff = Math.abs(E1 - E0);
            E0 = E1;
            if (lastdiff < 0.0000001) {
                break;
            }
        }
        var E = E0;
        var v = 2 * Math.atan(sqrt((1 + e) / (1 - e)) * Math.tan(E / 2));
        // Radius vector, in AU
        var a = eph.get('a');
        var r = (a * (1 - e * e)) / (1 + e * cos(v));
        return this.vectorToHeliocentric(v, r);
    };
    Orbit.prototype.getPositionAtTimeTable = function (jd, debug) {
        if (debug === void 0) { debug = false; }
        if (this.ephem instanceof EphemerisTable_1.EphemerisTable) {
            var point = this.ephem.getPositionAtTime(jd);
            return (0, Scale_1.rescaleXYZ)(point[0], point[1], point[2]);
        }
        throw new Error('Attempted to read ephemeris table of non-table data');
    };
    /**
     * Given true anomaly and heliocentric distance, returns the scaled heliocentric coordinates (X, Y, Z)
     * @param {Number} v True anomaly
     * @param {Number} r Heliocentric distance
     * @return {Array.<Number>} Heliocentric coordinates
     */
    Orbit.prototype.vectorToHeliocentric = function (v, r) {
        var eph = this.ephem;
        if (eph instanceof EphemerisTable_1.EphemerisTable) {
            throw new Error('Attempted to compute coordinates from ephemeris table');
        }
        // Inclination, Longitude of ascending node, Longitude of perihelion
        var i = eph.get('i', 'rad');
        var o = eph.get('om', 'rad');
        var p = eph.get('wBar', 'rad');
        // Heliocentric coords
        var X = r * (cos(o) * cos(v + p - o) - sin(o) * sin(v + p - o) * cos(i));
        var Y = r * (sin(o) * cos(v + p - o) + cos(o) * sin(v + p - o) * cos(i));
        var Z = r * (sin(v + p - o) * sin(i));
        return (0, Scale_1.rescaleXYZ)(X, Y, Z);
    };
    /**
     * Returns whether the requested epoch is within the current orbit's
     * definition. Used only for ephemeris tables.
     * @param {Number} jd
     * @return {boolean} true if it is within the orbit span, false if not
     */
    Orbit.prototype.needsUpdateForTime = function (jd) {
        if (this.orbitType === OrbitType.TABLE) {
            return jd < this.orbitStart || jd > this.orbitStop;
        }
        // Renderings for other types are static.
        return false;
    };
    /**
     * Calculates, caches, and returns the orbit state for this orbit around this time
     * @param {Number} jd center time of the orbit (only used for ephemeris table ephemeris)
     * @param {boolean} forceCompute forces the recomputing of the orbit on this call
     * @return {THREE.Line}
     */
    Orbit.prototype.getOrbitShape = function (jd, forceCompute) {
        if (forceCompute === void 0) { forceCompute = false; }
        if (forceCompute) {
            if (this.orbitShape) {
                this.orbitShape.geometry.dispose();
                this.orbitShape.material.dispose();
            }
            this.orbitShape = undefined;
            this.orbitPoints = undefined;
            if (this.eclipticDropLines) {
                this.eclipticDropLines.geometry.dispose();
                this.eclipticDropLines.material.dispose();
            }
            this.eclipticDropLines = undefined;
        }
        if (this.orbitShape) {
            // Orbit shape is already computed.
            return this.orbitShape;
        }
        if (this.orbitType === OrbitType.ELLIPTICAL) {
            return this.getEllipse();
        }
        // Decide on a time range to draw orbits.
        // TODO(ian): Should we compute around current position, not time of perihelion?
        var tp;
        if (this.ephem instanceof EphemerisTable_1.EphemerisTable) {
            tp = jd;
        }
        else {
            tp = this.ephem.getUnsafe('tp');
        }
        // Use current date as a fallback if time of perihelion is not available.
        var centerDate = tp ? tp : julian_1["default"].toJulianDay(new Date());
        var startJd = centerDate - this.options.orbitPathSettings.trailDurationYears * 365.25;
        var endJd = centerDate + this.options.orbitPathSettings.leadDurationYears * 365.25;
        var step = (endJd - startJd) / this.options.orbitPathSettings.numberSamplePoints;
        this.orbitStart = startJd;
        this.orbitStop = endJd;
        switch (this.orbitType) {
            case OrbitType.HYPERBOLIC:
                return this.getLine(this.getPositionAtTimeHyperbolic.bind(this), startJd, endJd, step);
            case OrbitType.PARABOLIC:
                return this.getLine(this.getPositionAtTimeNearParabolic.bind(this), startJd, endJd, step);
            case OrbitType.TABLE:
                return this.getTableOrbit(startJd, endJd, step);
            default:
                throw new Error('Unknown orbit shape');
        }
    };
    /**
     * Compute a line between a given date range.
     * @private
     */
    Orbit.prototype.getLine = function (orbitFn, startJd, endJd, step) {
        var points = [];
        for (var jd = startJd; jd <= endJd; jd += step) {
            var pos = orbitFn(jd);
            points.push(new THREE.Vector3(pos[0], pos[1], pos[2]));
        }
        return this.generateAndCacheOrbitShape(points);
    };
    /**
     * Returns the orbit for a table lookup orbit definition
     * @private
     * @param {Number} startJd start of orbit in JDate format
     * @param {Number} stopJd end of orbit in JDate format
     * @param {Number} step step size in days
     * @return {THREE.Line}
     */
    Orbit.prototype.getTableOrbit = function (startJd, stopJd, step) {
        if (this.ephem instanceof Ephem_1.Ephem) {
            throw new Error('Attempted to compute table orbit on non-table ephemeris');
        }
        var rawPoints = this.ephem.getPositions(startJd, stopJd, step);
        var points = rawPoints
            .map(function (values) { return (0, Scale_1.rescaleArray)(values); })
            .map(function (values) { return new THREE.Vector3(values[0], values[1], values[2]); });
        return this.generateAndCacheOrbitShape(points);
    };
    /**
     * @private
     * @return {THREE.Line} The ellipse object that represents this orbit.
     */
    Orbit.prototype.getEllipse = function () {
        var points = this.getEllipsePoints();
        return this.generateAndCacheOrbitShape(points);
    };
    /**
     * @private
     * @return {THREE.Vector3[]} A THREE.js geometry
     */
    Orbit.prototype.getEllipsePoints = function () {
        var eph = this.ephem;
        if (eph instanceof EphemerisTable_1.EphemerisTable) {
            throw new Error('Attempted to compute coordinates from ephemeris table');
        }
        var a = eph.get('a');
        var ecc = eph.get('e');
        var twoPi = Math.PI * 2;
        var step = twoPi / 90;
        var pts = [];
        for (var E = 0; E < twoPi; E += step) {
            var v = 2 * Math.atan(sqrt((1 + ecc) / (1 - ecc)) * Math.tan(E / 2));
            var r = (a * (1 - ecc * ecc)) / (1 + ecc * cos(v));
            var pos = this.vectorToHeliocentric(v, r);
            if (isNaN(pos[0]) || isNaN(pos[1]) || isNaN(pos[2])) {
                console.error('NaN position value - you may have bad or incomplete data in the following ephemeris:');
                console.error(eph);
            }
            pts.push(new THREE.Vector3(pos[0], pos[1], pos[2]));
        }
        pts.push(pts[0]);
        return pts;
    };
    /**
     * @private
     * @return {THREE.Line} Line object
     */
    Orbit.prototype.generateAndCacheOrbitShape = function (pointVectors) {
        this.orbitPoints = pointVectors;
        this.orbitShape = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pointVectors), new THREE.LineBasicMaterial({
            color: new THREE.Color(this.options.color || 0x444444)
        }));
        return this.orbitShape;
    };
    /**
     * A geometry containing line segments that run between the orbit ellipse and
     * the ecliptic plane of the solar system. This is a useful visual effect
     * that makes it easy to tell when an orbit goes below or above the ecliptic
     * plane.
     * @return {THREE.LineSegments} A geometry with many line segments.
     */
    Orbit.prototype.getLinesToEcliptic = function () {
        var _this = this;
        if (this.eclipticDropLines) {
            return this.eclipticDropLines;
        }
        if (!this.orbitPoints) {
            // Generate the orbitPoints cache.
            this.getOrbitShape();
        }
        // Place a cap on visible lines, for large or highly inclined orbits.
        var points = this.orbitPoints || [];
        var filteredPoints = [];
        points.forEach(function (vertex, idx) {
            // Drop last point because it's a repeat of the first point.
            if (idx === points.length - 1 &&
                _this.orbitType === OrbitType.ELLIPTICAL) {
                return;
            }
            filteredPoints.push(vertex);
            filteredPoints.push(new THREE.Vector3(vertex.x, vertex.y, 0));
        });
        var geometry = new THREE.BufferGeometry().setFromPoints(filteredPoints);
        this.eclipticDropLines = new THREE.LineSegments(geometry, new THREE.LineBasicMaterial({
            color: this.options.eclipticLineColor || 0x333333,
            blending: THREE.AdditiveBlending
        }));
        return this.eclipticDropLines;
    };
    /**
     * Get the color of this orbit.
     * @return {Number} The hexadecimal color of the orbital ellipse.
     */
    Orbit.prototype.getHexColor = function () {
        return this.getOrbitShape().material.color.getHex();
    };
    /**
     * @param {Number} hexVal The hexadecimal color of the orbital ellipse.
     */
    Orbit.prototype.setHexColor = function (hexVal) {
        this.getOrbitShape().material.color =
            new THREE.Color(hexVal);
    };
    /**
     * Get the visibility of this orbit.
     * @return {boolean} Whether the orbital ellipse is visible. Note that
     * although the ellipse may not be visible, it is still present in the
     * underlying Scene and Simultation.
     */
    Orbit.prototype.getVisibility = function () {
        return this.getOrbitShape().visible;
    };
    /**
     * Change the visibility of this orbit.
     * @param {boolean} val Whether to show the orbital ellipse.
     */
    Orbit.prototype.setVisibility = function (val) {
        this.getOrbitShape().visible = val;
    };
    /**
     * Get the type of orbit. Returns one of OrbitType.PARABOLIC, HYPERBOLIC,
     * ELLIPTICAL, or UNKNOWN.
     * @param {(Ephem | EphemerisTable)} Ephemeris
     * @return {OrbitType} Name of orbit type
     */
    Orbit.getOrbitType = function (ephem) {
        if (ephem instanceof EphemerisTable_1.EphemerisTable) {
            return OrbitType.TABLE;
        }
        var e = ephem.get('e');
        if (e > 0.9 && e < 1.2) {
            return OrbitType.PARABOLIC;
        }
        if (e > 1.2) {
            return OrbitType.HYPERBOLIC;
        }
        return OrbitType.ELLIPTICAL;
    };
    return Orbit;
}());
exports.Orbit = Orbit;
