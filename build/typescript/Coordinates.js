"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Units_1 = __importDefault(require("./Units"));
var J2000 = 2451545.0;
var Coordinates = /** @class */ (function () {
    function Coordinates() {
    }
    Coordinates.sphericalToCartesian = function (ra, dec, dist) {
        // See http://www.stargazing.net/kepler/rectang.html
        return [
            dist * Math.cos(ra) * Math.cos(dec),
            dist * Math.sin(ra) * Math.cos(dec),
            dist * Math.sin(dec),
        ];
    };
    /**
     * See https://en.wikipedia.org/wiki/Ecliptic_coordinate_system#Converting_Cartesian_vector
     */
    Coordinates.equatorialToEcliptic_Cartesian = function (x, y, z, tilt) {
        return [
            x,
            Math.cos(tilt) * y + Math.sin(tilt) * z,
            -Math.sin(tilt) * y + Math.cos(tilt) * z,
        ];
    };
    Coordinates.eclipticToEquatorial_Cartesian = function (x, y, z, tilt) {
        return [
            x,
            Math.cos(tilt) * y + -Math.sin(tilt) * z,
            Math.sin(tilt) * y + Math.cos(tilt) * z,
        ];
    };
    /**
     * Get Earth's obliquity and nutation at a given date.
     * @param {Number} jd JD date
     * @return {Object} Object with attributes "obliquity" and "nutation" provided
     * in radians
     */
    Coordinates.getNutationAndObliquity = function (jd) {
        if (jd === void 0) { jd = J2000; }
        var t = (jd - J2000) / 36525;
        var omega = Units_1["default"].rad(125.04452 - 1934.136261 * t + 0.0020708 * t * t + (t * t + t) / 450000);
        var Lsun = Units_1["default"].rad(280.4665 + 36000.7698 * t);
        var Lmoon = Units_1["default"].rad(218.3165 + 481267.8813 * t);
        var nutation = (-17.2 / 3600) * Math.sin(omega) -
            (-1.32 / 3600) * Math.sin(2 * Lsun) -
            (0.23 / 3600) * Math.sin(2 * Lmoon) +
            Units_1["default"].deg((0.21 / 3600) * Math.sin(2 * omega));
        var obliquity_zero = 23 +
            26.0 / 60 +
            21.448 / 3600 -
            (46.815 / 3600) * t -
            (0.00059 / 3600) * t * t +
            (0.001813 / 3600) * t * t * t;
        var obliquity_delta = (9.2 / 3600) * Math.cos(omega) +
            (0.57 / 3600) * Math.cos(2 * Lsun) +
            (0.1 / 3600) * Math.cos(2 * Lmoon) -
            (0.09 / 3600) * Math.cos(2 * omega);
        var obliquity = obliquity_zero + obliquity_delta;
        return {
            nutation: Units_1["default"].rad(nutation),
            obliquity: Units_1["default"].rad(obliquity)
        };
    };
    /**
     * Get Earth's obliquity at a given date.
     * @param {Number} jd JD date
     * @return {Number} Obliquity in radians
     */
    Coordinates.getObliquity = function (jd) {
        if (jd === void 0) { jd = J2000; }
        return this.getNutationAndObliquity(jd).obliquity;
    };
    return Coordinates;
}());
exports["default"] = Coordinates;
