"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.NaturalSatellites = exports.EphemPresets = void 0;
var Units_1 = __importDefault(require("./Units"));
var Ephem_1 = require("./Ephem");
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
        GM: 0.3986e6,
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
                    var ephemType;
                    switch (moon['Element Type']) {
                        case 'Ecliptic':
                            // Don't have to do anything
                            break;
                        case 'Equatorial':
                            // TODO(ian): Convert equatorial coords
                            ephemType = 'equatorial';
                            /*
                            throw new Error(
                              `Ephemeris type not yet implemented: ${ephemType}`,
                            );
                             */
                            break;
                        case 'Laplace':
                            // TODO(ian): Convert laplace coords
                            ephemType = 'equatorial';
                            /*
                            throw new Error(
                              `Ephemeris type not yet implemented: ${ephemType}`,
                            );
                             */
                            break;
                        default:
                            console.warn("Ephemeris type not yet implemented: ".concat(ephemType));
                            return;
                    }
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
                        i: Number(moon.i),
                        w: Number(moon.w),
                        om: Number(moon.node),
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
