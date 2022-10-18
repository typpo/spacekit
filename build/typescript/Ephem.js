"use strict";
exports.__esModule = true;
exports.Ephem = exports.GM = void 0;
var METERS_IN_AU = 149597870700;
var SECONDS_IN_DAY = 86400;
// TODO(ian): Allow multiple valid attrs for a single quantity and map them
// internally to a single canonical attribute.
var EPHEM_VALID_ATTRS = new Set([
    'a',
    'e',
    'i',
    'q',
    'epoch',
    'period',
    'tp',
    'ma',
    'n',
    'L',
    'om',
    'w',
    'wBar',
    'GM', // Gravitational constant of more massive body
]);
// Which of these are angular measurements.
var ANGLE_UNITS = new Set([
    'i',
    'ma',
    'n',
    'L',
    'om',
    'w',
    'wBar',
]);
/**
 * Standard gravitational parameter for objects orbiting these bodies.
 * Units in m^3/s^2
 */
exports.GM = {
    // See https://space.stackexchange.com/questions/22948/where-to-find-the-best-values-for-standard-gravitational-parameters-of-solar-sys and https://naif.jpl.nasa.gov/pub/naif/generic_kernels/pck/gm_de431.tpc
    SUN: 1.3271244004193938e20,
    MERCURY: 2.2031780000000021e13,
    VENUS: 3.2485859200000006e14,
    EARTH_MOON: 4.0350323550225981e14,
    MARS: 4.2828375214000022e13,
    JUPITER: 1.2671276480000021e17,
    SATURN: 3.7940585200000003e16,
    URANUS: 5.794548600000008e15,
    NEPTUNE: 6.8365271005800236e15,
    PLUTO_CHARON: 9.7700000000000068e11
};
// Returns true if object is a number.
function isDef(obj) {
    return typeof obj !== 'undefined' && Number.isFinite(obj);
}
/**
 * A class representing Kepler ephemerides.
 * @example
 * ```
 * const NEPTUNE = new Ephem({
 *   epoch: 2458426.500000000,
 *   a: 3.009622263428050E+01,
 *   e: 7.362571187193770E-03,
 *   i: 1.774569249829094E+00,
 *   om: 1.318695882492132E+02,
 *   w: 2.586226409499831E+02,
 *   ma: 3.152804988924479E+02,
 * }, 'deg'),
 * ```
 */
var Ephem = /** @class */ (function () {
    /**
     * @param {Object} initialValues A dictionary of initial values. Not all values
     * are required as some may be inferred from others.
     * @param {Number} initialValues.a Semimajor axis
     * @param {Number} initialValues.e Eccentricity
     * @param {Number} initialValues.i Inclination
     * @param {Number} initialValues.epoch Epoch in JD
     * @param {Number} initialValues.period Period in days
     * @param {Number} initialValues.ma Mean anomaly
     * @param {Number} initialValues.n Mean motion
     * @param {Number} initialValues.L Mean longitude
     * @param {Number} initialValues.om Longitude of Ascending Node
     * @param {Number} initialValues.w Argument of Perihelion
     * @param {Number} initialValues.wBar Longitude of Perihelion
     * @param {GM} initialValues.GM Standard gravitational parameter in km^3/s^2.
     * Defaults to GM.SUN.  @see {GM}
     * @param {'deg'|'rad'} units The unit of angles in the list of initial values.
     */
    function Ephem(initialValues, units, locked) {
        if (units === void 0) { units = 'rad'; }
        if (locked === void 0) { locked = false; }
        this.attrs = {};
        this.locked = false;
        for (var attr in initialValues) {
            if (initialValues.hasOwnProperty(attr)) {
                var actualUnits = ANGLE_UNITS.has(attr) ? units : null;
                this.set(attr, initialValues[attr], actualUnits);
            }
        }
        if (typeof this.attrs.GM === 'undefined') {
            this.attrs.GM = exports.GM.SUN;
        }
        this.fill();
        if (this.get('e') > 0.9 && typeof this.getUnsafe('tp') === 'undefined') {
            console.warn('You must specify "tp" (time of perihelion) for highly eccentric orbits');
        }
        this.locked = locked;
    }
    /**
     * Sets an ephemerides attribute.
     * @param {String} attr The name of the attribute (e.g. 'a')
     * @param {Number} val The value of the attribute (e.g. 0.5)
     * @param {'deg'|'rad'} units The unit of angle provided, if applicable.
     */
    Ephem.prototype.set = function (attr, val, units) {
        if (units === void 0) { units = 'rad'; }
        if (this.locked) {
            throw new Error('Attempted to modify locked (immutable) Ephem object');
        }
        if (!EPHEM_VALID_ATTRS.has(attr)) {
            console.warn("Invalid ephem attr: ".concat(attr));
            return false;
        }
        // Store everything in radians.
        // TODO(ian): Make sure value can't be set with bogus units.
        if (units === 'deg') {
            this.attrs[attr] = (val * Math.PI) / 180;
        }
        else {
            this.attrs[attr] = val;
        }
        return true;
    };
    /**
     * Gets an ephemerides attribute, but may return undefined if it's not set.
     * @param {String} attr The name of the attribute (e.g. 'a')
     * @param {'deg'|'rad'} units The unit of angle desired, if applicable. This
     * input is ignored for values that are not angle measurements.
     * @return {Number} Ephemeris attribute value, or undefined
     */
    Ephem.prototype.getUnsafe = function (attr, units) {
        if (units === void 0) { units = 'rad'; }
        if (units === 'deg') {
            var attrVal = this.attrs[attr];
            if (typeof attrVal === 'undefined') {
                return undefined;
            }
            return (attrVal * 180) / Math.PI;
        }
        return this.attrs[attr];
    };
    /**
     * Gets an ephemerides attribute.
     * @param {String} attr The name of the attribute (e.g. 'a')
     * @param {'deg'|'rad'} units The unit of angle desired, if applicable. This
     * input is ignored for values that are not angle measurements.
     * @return {Number} Ephemeris attribute value
     */
    Ephem.prototype.get = function (attr, units) {
        if (units === void 0) { units = 'rad'; }
        var retVal = this.getUnsafe(attr, units);
        if (typeof retVal === 'undefined') {
            console.info(this.attrs);
            throw new Error("Attempted to get ephemeris value '".concat(attr, "' but it was undefined"));
        }
        return retVal;
    };
    /**
     * @private
     * Infers values of some ephemerides attributes if the required information
     * is available.
     */
    Ephem.prototype.fill = function () {
        // Perihelion distance and semimajor axis
        var e = this.getUnsafe('e');
        if (!isDef(e)) {
            console.info(this.attrs);
            throw new Error('Must define eccentricity "e" in an orbit');
        }
        // Semimajor axis and perihelion distance
        var a = this.getUnsafe('a');
        var q = this.getUnsafe('q');
        if (isDef(a)) {
            if (!isDef(q)) {
                if (e >= 1.0) {
                    throw new Error('Must provide perihelion distance "q" if eccentricity "e" is greater than 1');
                }
                q = a * (1.0 - e);
                this.set('q', q);
            }
        }
        else if (isDef(q)) {
            a = q / (1.0 - e);
            this.set('a', a);
        }
        else {
            throw new Error('Must define semimajor axis "a" or perihelion distance "q" in an orbit');
        }
        // Longitude/Argument of Perihelion and Long. of Ascending Node
        var w = this.getUnsafe('w');
        var wBar = this.getUnsafe('wBar');
        var om = this.getUnsafe('om');
        if (isDef(w) && isDef(om) && !isDef(wBar)) {
            wBar = w + om;
            this.set('wBar', wBar);
        }
        else if (isDef(wBar) && isDef(om) && !isDef(w)) {
            w = wBar - om;
            this.set('w', w);
        }
        else if (isDef(w) && isDef(wBar) && !isDef(om)) {
            om = wBar - w;
            this.set('om', om);
        }
        // Mean motion and period
        var aMeters = a * METERS_IN_AU;
        var n = this.getUnsafe('n');
        var GM = this.getUnsafe('GM');
        var period = this.getUnsafe('period');
        if (!isDef(period) && isDef(a)) {
            if (!isDef(GM)) {
                throw new Error('Expected ephemeris attribute GM to be set');
            }
            period =
                (2 * Math.PI * Math.sqrt((aMeters * aMeters * aMeters) / GM)) /
                    SECONDS_IN_DAY;
            this.set('period', period);
        }
        if (e < 1.0) {
            // Only work with mean motion for elliptical orbits.
            if (isDef(period) && !isDef(n)) {
                // Set radians
                var newN = (2.0 * Math.PI) / period;
                this.set('n', newN);
            }
            else if (isDef(n) && !isDef(period)) {
                this.set('period', (2.0 * Math.PI) / n);
            }
        }
        // Mean longitude
        var ma = this.getUnsafe('ma');
        var L = this.getUnsafe('L');
        if (!isDef(L) && isDef(om) && isDef(w) && isDef(ma)) {
            L = om + w + ma;
            this.set('L', L);
        }
        // Mean anomaly
        if (!isDef(ma)) {
            // MA = Mean longitude - Longitude of perihelion
            this.set('ma', L - wBar);
        }
        //  TODO(ian): Handle no om
    };
    /**
     * Make this ephem object immutable.
     */
    Ephem.prototype.lock = function () {
        this.locked = true;
    };
    Ephem.prototype.copy = function () {
        return new Ephem({
            GM: this.getUnsafe('GM'),
            epoch: this.getUnsafe('epoch'),
            a: this.getUnsafe('a'),
            e: this.getUnsafe('e'),
            i: this.getUnsafe('i'),
            om: this.getUnsafe('om'),
            ma: this.getUnsafe('ma'),
            w: this.getUnsafe('w')
        }, 'rad');
    };
    return Ephem;
}());
exports.Ephem = Ephem;
