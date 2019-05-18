const METERS_IN_AU = 149597870700;
const SECONDS_IN_DAY = 86400;

// TODO(ian): Allow multiple valid attrs for a single quantity and map them
// internally to a single canonical attribute.
const EPHEM_VALID_ATTRS = new Set([
  'a', // Semi-major axis
  'e', // Eccentricity
  'i', // Inclination

  'epoch',
  'period',

  'ma', // Mean anomaly
  'n', // Mean motion
  'L', // Mean longitude

  'om', // Longitude of Ascending Node
  'w', // Argument of Perihelion = Longitude of Perihelion - Longitude of Ascending Node
  'wBar', // Longitude of Perihelion = Longitude of Ascending Node + Argument of Perihelion
]);

// Which of these are angular measurements.
const ANGLE_UNITS = new Set([
  'i', 'ma', 'n', 'L', 'om', 'w', 'wBar',
]);

// Returns true if object is defined.
function isDef(obj) {
  return typeof obj !== 'undefined';
}

/**
 * A class representing Kepler ephemerides.
 * @example
 * const NEPTUNE = new Ephem({
 *   epoch: 2458426.500000000,
 *   a: 3.009622263428050E+01,
 *   e: 7.362571187193770E-03,
 *   i: 1.774569249829094E+00,
 *   om: 1.318695882492132E+02,
 *   w: 2.586226409499831E+02,
 *   ma: 3.152804988924479E+02,
 * }, 'deg'),
 */
export class Ephem {
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
  constructor(initialValues, units = 'rad') {
    this._attrs = {};

    for (const attr in initialValues) {
      if (initialValues.hasOwnProperty(attr)) {
        const actualUnits = ANGLE_UNITS.has(attr) ? units : null;
        this.set(attr, initialValues[attr], actualUnits);
      }
    }

    if (typeof this._attrs.GM === 'undefined') {
      this._attrs.GM = GM.SUN;
    }
    this.fill();
  }

  /**
   * Sets an ephemerides attribute.
   * @param {String} attr The name of the attribute (e.g. 'a')
   * @param {Number} val The value of the attribute (e.g. 0.5)
   * @param {'deg'|'rad'} units The unit of angle provided, if applicable.
   */
  set(attr, val, units = 'rad') {
    if (!EPHEM_VALID_ATTRS.has(attr)) {
      console.warn(`Invalid ephem attr: ${attr}`);
      return false;
    }

    // Store everything in radians.
    // TODO(ian): Make sure value can't be set with bogus units.
    if (units === 'deg') {
      this._attrs[attr] = val * Math.PI / 180;
    } else {
      this._attrs[attr] = val;
    }
    return true;
  }

  /**
   * Gets an ephemerides attribute.
   * @param {String} attr The name of the attribute (e.g. 'a')
   * @param {'deg'|'rad'} units The unit of angle desired, if applicable. This
   * input is ignored for values that are not angle measurements.
   */
  get(attr, units = 'rad') {
    if (units === 'deg') {
      return this._attrs[attr] * 180 / Math.PI;
    }
    return this._attrs[attr];
  }

  /**
   * @private
   * Infers values of some ephemerides attributes if the required information
   * is available.
   */
  fill() {
    // Longitude/Argument of Perihelion and Long. of Ascending Node
    let w = this.get('w');
    let wBar = this.get('wBar');
    let om = this.get('om');
    if (isDef(w) && isDef(om) && !isDef(wBar)) {
      wBar = w + om;
      this.set('wBar', wBar);
    } else if (isDef(wBar) && isDef(om) && !isDef(w)) {
      w = wBar - om;
      this.set('w', w);
    } else if (isDef(w) && isDef(wBar) && !isDef(om)) {
      om = wBar - w;
      this.set('om', om);
    }

    // Mean motion and period
    const a = this.get('a');
    const aMeters = a * METERS_IN_AU;
    const n = this.get('n');
    const GM = this.get('GM');
    let period = this.get('period');

    if (!isDef(period) && isDef(a)) {
      period = 2 * Math.PI * Math.sqrt((aMeters * aMeters * aMeters) / GM) / SECONDS_IN_DAY;
      this.set('period', period);
    }

    if (isDef(period) && !isDef(n)) {
      // Set radians
      const newN = 2.0 * Math.PI / period;
      this.set('n', newN);
    } else if (isDef(n) && !isDef(period)) {
      this.set('period', 2.0 * Math.PI / n);
    }

    // Mean longitude
    const ma = this.get('ma');
    let L = this.get('L');
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
  }
}

/**
 * Standard gravitational parameter for objects orbiting these bodies.
 * Units in m^3/s^2
 */
export const GM = {
  // See https://space.stackexchange.com/questions/22948/where-to-find-the-best-values-for-standard-gravitational-parameters-of-solar-sys and https://naif.jpl.nasa.gov/pub/naif/generic_kernels/pck/gm_de431.tpc
  SUN: 1.3271244004193938E+20,
  MERCURY: 2.2031780000000021E+13,
  VENUS: 3.2485859200000006E+14,
  EARTH_MOON: 4.0350323550225981E+14,
  MARS: 4.2828375214000022E+13,
  JUPITER: 1.2671276480000021E+17,
  SATURN: 3.7940585200000003E+16,
  URANUS: 5.7945486000000080E+15,
  NEPTUNE: 6.8365271005800236E+15,
  PLUTO_CHARON: 9.7700000000000068E+11,
};

/**
 * A dictionary containing ephemerides of planets and other well-known objects.
 * @example
 * const planet1 = viz.createObject('planet1', {
 *   ephem: EphemPresets.MERCURY,
 * });
 */
export const EphemPresets = {
  // See https://ssd.jpl.nasa.gov/?planet_pos and https://ssd.jpl.nasa.gov/txt/p_elem_t1.txt
  MERCURY: new Ephem({
    epoch: 2458426.500000000,
    a: 3.870968969437096E-01,
    e: 2.056515875393916E-01,
    i: 7.003891682749818E+00,
    om: 4.830774804443502E+01,
    w: 2.917940253442659E+01,
    ma: 2.561909752092730E+02,
  }, 'deg'),
  VENUS: new Ephem({
    epoch: 2458426.500000000,
    a: 7.233458663591554E-01,
    e: 6.762510759617694E-03,
    i: 3.394567787211735E+00,
    om: 7.662534150657346E+01,
    w: 5.474567447560867E+01,
    ma: 2.756687596099721E+02,
  }, 'deg'),
  EARTH: new Ephem({
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
    L: 100.46457166,

    /*
      epoch: 2458426.500000000,
      a: 1.000618919441359E+00,
      e: 1.676780871638673E-02,
      i: 0,
      om: 1.888900932218542E+02,
      w: 2.718307282052625E+02,
      ma: 3.021792498388233E+02,
     */
  }, 'deg'),
  MOON: new Ephem({
    GM: 0.39860e6,

    // Geocentric
    epoch: 2458621.500000000,
    a: 2.582517063772124E-03,
    e: 4.582543645168888E-02,
    i: 5.102060246928811E+00,
    om: 1.085916732144811E+02,
    w: 6.180561793729225E+01,
    ma: 5.053270083636792E+01,
    /*
     * heliocentric
    epoch: 2458621.500000000,
    a: 1.078855621785179E+00,
    e: 6.333300212090676E-02,
    i: 7.211217382317713E-02,
    om: 6.722057157026397E+01,
    w: 1.503642883585293E+02,
    ma: 1.666758688084831E+01,
   */
  }, 'deg'),
  MARS: new Ephem({
    epoch: 2458426.500000000,
    a: 1.523714015371070E+00,
    e: 9.336741335309606E-02,
    i: 1.848141099825311E+00,
    om: 4.950420572080223E+01,
    w: 2.866965847685386E+02,
    ma: 2.538237617924876E+01,
  }, 'deg'),
  JUPITER: new Ephem({
    epoch: 2458426.500000000,
    a: 5.201803559110230E+00,
    e: 4.899125582490060E-02,
    i: 1.303560894624275E+00,
    om: 1.005203828847816E+02,
    w: 2.737363018454040E+02,
    ma: 2.319395443894010E+02,
  }, 'deg'),
  SATURN: new Ephem({
    epoch: 2458426.500000000,
    a: 9.577177295536776E+00,
    e: 5.101889921719987E-02,
    i: 2.482782449972317E+00,
    om: 1.136154964073247E+02,
    w: 3.394422648650336E+02,
    ma: 1.870970898012944E+02,
  }, 'deg'),
  URANUS: new Ephem({
    epoch: 2458426.500000000,
    a: 1.914496966635462E+01,
    e: 4.832662948112808E-02,
    i: 7.697511134483724E-01,
    om: 7.414239045667875E+01,
    w: 9.942704504702185E+01,
    ma: 2.202603033874267E+02,
  }, 'deg'),
  NEPTUNE: new Ephem({
    epoch: 2458426.500000000,
    a: 3.009622263428050E+01,
    e: 7.362571187193770E-03,
    i: 1.774569249829094E+00,
    om: 1.318695882492132E+02,
    w: 2.586226409499831E+02,
    ma: 3.152804988924479E+02,
  }, 'deg'),
};
