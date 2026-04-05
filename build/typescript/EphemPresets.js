"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.NaturalSatellites = exports.EphemPresets = void 0;
var Units_1 = __importDefault(require("./Units"));
var Ephem_1 = require("./Ephem");
var Coordinates_1 = __importDefault(require("./Coordinates"));
var util_1 = require("./util");
/**
 * A dictionary containing ephemerides of planets and other well-known objects.
 * @example
 * ```
 * const planet1 = viz.createObject('planet1', {
 *   ephem: EphemPresets.MERCURY,
 * });
 * ```
 */
exports.EphemPresets = {
    // See https://ssd.jpl.nasa.gov/?planet_pos and https://ssd.jpl.nasa.gov/txt/p_elem_t1.txt
    MERCURY: new Ephem_1.Ephem({
        epoch: 2458426.5,
        a: 3.870968969437096e-1,
        e: 2.056515875393916e-1,
        i: 7.003891682749818,
        om: 4.830774804443502e1,
        w: 2.917940253442659e1,
        ma: 2.56190975209273e2
    }, 'deg', true /* locked */),
    VENUS: new Ephem_1.Ephem({
        epoch: 2458426.5,
        a: 7.233458663591554e-1,
        e: 6.762510759617694e-3,
        i: 3.394567787211735,
        om: 7.662534150657346e1,
        w: 5.474567447560867e1,
        ma: 2.756687596099721e2
    }, 'deg', true /* locked */),
    EARTH: new Ephem_1.Ephem({
        // Taken from https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html
        /*
      epoch: 2451545.0,
      a: 1.00000011,
      e: 0.01671022,
      i: 0.00005,
      om: -11.26064,
      wBar: 102.94719,
      L: 100.46435,
      */
        // https://ssd.jpl.nasa.gov/txt/p_elem_t1.txt
        epoch: 2451545.0,
        a: 1.00000261,
        e: 0.01671123,
        i: -0.00001531,
        om: 0.0,
        wBar: 102.93768193,
        L: 100.46457166
    }, 'deg', true /* locked */),
    MOON: new Ephem_1.Ephem({
        // https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html
        GM: Ephem_1.GM.EARTH_MOON,
        // Geocentric
        // https://ssd.jpl.nasa.gov/horizons.cgi#results
        epoch: 2458621.5,
        a: 2.582517063772124e-3,
        e: 4.582543645168888e-2,
        i: 5.102060246928811,
        om: 1.085916732144811e2,
        w: 6.180561793729225e1,
        ma: 5.053270083636792e1
    }, 'deg', true /* locked */),
    MARS: new Ephem_1.Ephem({
        epoch: 2458426.5,
        a: 1.52371401537107,
        e: 9.336741335309606e-2,
        i: 1.848141099825311,
        om: 4.950420572080223e1,
        w: 2.866965847685386e2,
        ma: 2.538237617924876e1
    }, 'deg', true /* locked */),
    JUPITER: new Ephem_1.Ephem({
        epoch: 2458426.5,
        a: 5.20180355911023,
        e: 4.89912558249006e-2,
        i: 1.303560894624275,
        om: 1.005203828847816e2,
        w: 2.73736301845404e2,
        ma: 2.31939544389401e2
    }, 'deg', true /* locked */),
    SATURN: new Ephem_1.Ephem({
        epoch: 2458426.5,
        a: 9.577177295536776,
        e: 5.101889921719987e-2,
        i: 2.482782449972317,
        om: 1.136154964073247e2,
        w: 3.394422648650336e2,
        ma: 1.870970898012944e2
    }, 'deg', true /* locked */),
    URANUS: new Ephem_1.Ephem({
        epoch: 2458426.5,
        a: 1.914496966635462e1,
        e: 4.832662948112808e-2,
        i: 7.697511134483724e-1,
        om: 7.414239045667875e1,
        w: 9.942704504702185e1,
        ma: 2.202603033874267e2
    }, 'deg', true /* locked */),
    NEPTUNE: new Ephem_1.Ephem({
        epoch: 2458426.5,
        a: 3.00962226342805e1,
        e: 7.36257118719377e-3,
        i: 1.774569249829094,
        om: 1.318695882492132e2,
        w: 2.586226409499831e2,
        ma: 3.152804988924479e2
    }, 'deg', true /* locked */),
    PLUTO: new Ephem_1.Ephem({
        epoch: 2454000.5,
        a: 39.4450697257,
        e: 0.250248713478,
        i: 17.0890009196,
        om: 110.376957955,
        w: 112.597141677,
        ma: 25.2471897122
    }, 'deg', true /* locked */)
};
var NATURAL_SATELLITE_EQUATORIAL_POLES = {
    // J2000 pole orientations from NAIF PCK pck00011.tpc.
    Pluto: {
        ra: 132.993,
        dec: -6.163
    },
    Uranus: {
        ra: 257.311,
        dec: -15.175
    }
};
var J2000_OBLIQUITY = Coordinates_1["default"].getObliquity();
var REFERENCE_PLANE_Z_AXIS = [0, 0, 1];
var VECTOR_EPSILON = 1e-12;
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function normalizeDegrees(angleDeg) {
    var normalized = angleDeg % 360;
    return normalized < 0 ? normalized + 360 : normalized;
}
function dotProduct(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function crossProduct(a, b) {
    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0],
    ];
}
function magnitude(vector) {
    return Math.sqrt(dotProduct(vector, vector));
}
function normalizeVector(vector) {
    var vectorMagnitude = magnitude(vector);
    if (vectorMagnitude < VECTOR_EPSILON) {
        throw new Error('Cannot normalize zero-length vector');
    }
    return vector.map(function (value) { return value / vectorMagnitude; });
}
function transformToReferenceFrame(vector, basis) {
    return [
        basis[0][0] * vector[0] +
            basis[1][0] * vector[1] +
            basis[2][0] * vector[2],
        basis[0][1] * vector[0] +
            basis[1][1] * vector[1] +
            basis[2][1] * vector[2],
        basis[0][2] * vector[0] +
            basis[1][2] * vector[1] +
            basis[2][2] * vector[2],
    ];
}
function equatorialToEcliptic(vector) {
    return Coordinates_1["default"].equatorialToEcliptic_Cartesian(vector[0], vector[1], vector[2], J2000_OBLIQUITY);
}
function getReferencePlanePole(moon) {
    switch (moon['Element Type']) {
        case 'Laplace': {
            var ra = Number(moon.RA);
            var dec = Number(moon.Dec);
            if (Number.isFinite(ra) && Number.isFinite(dec)) {
                return { ra: ra, dec: dec };
            }
            return undefined;
        }
        case 'Equatorial':
            return NATURAL_SATELLITE_EQUATORIAL_POLES[moon.Planet];
        default:
            return undefined;
    }
}
function getReferencePlaneBasis(pole) {
    var zAxis = normalizeVector(Coordinates_1["default"].sphericalToCartesian(Units_1["default"].rad(pole.ra), Units_1["default"].rad(pole.dec), 1));
    var xAxis = crossProduct(REFERENCE_PLANE_Z_AXIS, zAxis);
    if (magnitude(xAxis) < VECTOR_EPSILON) {
        xAxis = [1, 0, 0];
    }
    xAxis = normalizeVector(xAxis);
    var yAxis = normalizeVector(crossProduct(zAxis, xAxis));
    return [xAxis, yAxis, zAxis];
}
function getPeriapsisDirection(inclinationDeg, nodeDeg, periapsisDeg) {
    var inclination = Units_1["default"].rad(inclinationDeg);
    var node = Units_1["default"].rad(nodeDeg);
    var periapsis = Units_1["default"].rad(periapsisDeg);
    return [
        Math.cos(node) * Math.cos(periapsis) -
            Math.sin(node) * Math.sin(periapsis) * Math.cos(inclination),
        Math.sin(node) * Math.cos(periapsis) +
            Math.cos(node) * Math.sin(periapsis) * Math.cos(inclination),
        Math.sin(periapsis) * Math.sin(inclination),
    ];
}
function getOrbitalPole(inclinationDeg, nodeDeg) {
    var inclination = Units_1["default"].rad(inclinationDeg);
    var node = Units_1["default"].rad(nodeDeg);
    return [
        Math.sin(node) * Math.sin(inclination),
        -Math.cos(node) * Math.sin(inclination),
        Math.cos(inclination),
    ];
}
function convertReferencePlaneAnglesToEcliptic(moon) {
    if (moon['Element Type'] === 'Ecliptic') {
        return {
            i: Number(moon.i),
            om: Number(moon.node),
            w: Number(moon.w)
        };
    }
    var pole = getReferencePlanePole(moon);
    if (!pole) {
        throw new Error("Missing reference plane pole for ".concat(moon.Planet, " ").concat(moon['Sat.'], " (").concat(moon['Element Type'], ")"));
    }
    var referenceBasis = getReferencePlaneBasis(pole);
    var periapsisDirection = getPeriapsisDirection(Number(moon.i), Number(moon.node), Number(moon.w));
    var orbitalPole = getOrbitalPole(Number(moon.i), Number(moon.node));
    var eclipticPeriapsis = normalizeVector(equatorialToEcliptic(transformToReferenceFrame(periapsisDirection, referenceBasis)));
    var eclipticPole = normalizeVector(equatorialToEcliptic(transformToReferenceFrame(orbitalPole, referenceBasis)));
    var inclination = Math.acos(clamp(eclipticPole[2], -1, 1));
    var nodeVector = [-eclipticPole[1], eclipticPole[0], 0];
    var nodeMagnitude = magnitude(nodeVector);
    var node = 0;
    var periapsis = 0;
    if (nodeMagnitude < VECTOR_EPSILON) {
        periapsis = Math.atan2(eclipticPeriapsis[1], eclipticPeriapsis[0]);
    }
    else {
        var ascendingNode = normalizeVector(nodeVector);
        var transverseAxis = normalizeVector(crossProduct(eclipticPole, ascendingNode));
        node = Math.atan2(ascendingNode[1], ascendingNode[0]);
        periapsis = Math.atan2(dotProduct(eclipticPeriapsis, transverseAxis), dotProduct(eclipticPeriapsis, ascendingNode));
    }
    return {
        i: Units_1["default"].deg(inclination),
        om: normalizeDegrees(Units_1["default"].deg(node)),
        w: normalizeDegrees(Units_1["default"].deg(periapsis))
    };
}
/**
 * A class for fetching orbital elements of natural satellites in our solar
 * system.
 */
var NaturalSatellites = /** @class */ (function () {
    function NaturalSatellites(simulation) {
        var _this = this;
        this._simulation = simulation;
        this._context = simulation.getContext();
        this._satellitesByPlanet = {};
        var dataUrl = (0, util_1.getFullUrl)('{{data}}/processed/natural-satellites.json', this._context.options.basePath);
        this._readyPromise = new Promise(function (resolve, reject) {
            fetch(dataUrl)
                .then(function (resp) { return resp.json(); })
                .then(function (moons) {
                moons.forEach(function (moon) {
                    var planetName = moon.Planet.toLowerCase();
                    if (!_this._satellitesByPlanet[planetName]) {
                        _this._satellitesByPlanet[planetName] = [];
                    }
                    switch (moon['Element Type']) {
                        case 'Ecliptic':
                        case 'Equatorial':
                        case 'Laplace':
                            break;
                        default:
                            console.warn("Ephemeris type not yet implemented: ".concat(moon['Element Type']));
                            return;
                    }
                    var eclipticAngles = convertReferencePlaneAnglesToEcliptic(moon);
                    var ephemGM;
                    switch (moon.Planet) {
                        case 'Earth':
                            ephemGM = Ephem_1.GM.EARTH_MOON;
                            break;
                        case 'Pluto':
                            ephemGM = Ephem_1.GM.PLUTO_CHARON;
                            break;
                        default:
                            ephemGM = Ephem_1.GM[moon.Planet.toUpperCase()];
                    }
                    if (!ephemGM) {
                        console.error("Could not look up GM for ".concat(moon.Planet));
                    }
                    var ephem = new Ephem_1.Ephem({
                        GM: ephemGM,
                        epoch: Number(moon['Epoch JD']),
                        a: Units_1["default"].kmToAu(Number(moon.a)),
                        e: Number(moon.e),
                        i: eclipticAngles.i,
                        w: eclipticAngles.w,
                        om: eclipticAngles.om,
                        ma: Number(moon.M)
                    }, 'deg', true /* locked */);
                    _this._satellitesByPlanet[planetName].push({
                        name: moon['Sat.'],
                        elementType: moon['Element Type'],
                        tags: new Set(moon['tags'].split(',')),
                        ephem: ephem
                    });
                });
                console.info('Loaded', moons.length, 'natural satellites');
                resolve(_this);
            })["catch"](function (err) {
                reject(err);
            });
        });
    }
    /**
     * Get a list of satellites and their orbital elements for a given planet.
     * @param {String} planetName Name of a planet, e.g. "Jupiter"
     * @return {Object} List containing a list of dictionaries with information
     * on each satellite.
     */
    NaturalSatellites.prototype.getSatellitesForPlanet = function (planetName) {
        return this._satellitesByPlanet[planetName.toLowerCase()];
    };
    NaturalSatellites.prototype.load = function () {
        return this._readyPromise;
    };
    return NaturalSatellites;
}());
exports.NaturalSatellites = NaturalSatellites;
