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
  'w_bar', // Longitude of Perihelion = Longitude of Ascending Node + Argument of Perihelion
]);

// Which of these are angular measurements.
const ANGLE_UNITS = new Set([
  'i', 'ma', 'n', 'L', 'om', 'w', 'w_bar',
]);

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
   * @param {Object} initialValues.a Semimajor axis
   * @param {Object} initialValues.e Eccentricity
   * @param {Object} initialValues.i Inclination
   * @param {Object} initialValues.epoch Epoch in JED
   * @param {Object} initialValues.period Period in days
   * @param {Object} initialValues.ma Mean anomaly
   * @param {Object} initialValues.n Mean motion
   * @param {Object} initialValues.L Mean longitude
   * @param {Object} initialValues.om Longitude of Ascending Node
   * @param {Object} initialValues.w Argument of Perihelion
   * @param {Object} initialValues.w_bar Longitude of Perihelion
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
    let wBar = this.get('w_bar');
    let om = this.get('om');
    if (w && om && !wBar) {
      wBar = w + om;
      this.set('w_bar', wBar);
    } else if (wBar && om && !w) {
      w = wBar - om;
      this.set('w', w);
    } else if (w && wBar && !om) {
      om = wBar - w;
      this.set('om', om);
    }

    // Mean motion / period
    const a = this.get('a');
    const n = this.get('n');
    let period = this.get('period');

    if (!period && a) {
      period = Math.sqrt(a * a * a) * 365.25;
      this.set('period', period);
    }

    if (period && !n) {
      // Set radians
      this.set('n', 2.0 * Math.PI / period);
    } else if (n && !period) {
      this.set('period', 2.0 * Math.PI / n);
    }

    // Mean longitude
    const ma = this.get('ma');
    let L = this.get('L');
    if (!L && om && w && ma) {
      L = om + w + ma;
    }
    //  TODO(ian): Handle no mean anomaly, no om
  }
}

/**
 * A dictionary containing ephemerides of planets and other well-known objects.
 * @example
 * const planet1 = viz.createObject('planet1', {
 *   ephem: EphemPresets.MERCURY,
 * });
 */
export const EphemPresets = {
  // See https://ssd.jpl.nasa.gov/?planet_pos
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
    epoch: 2458426.500000000,
    a: 1.000618919441359E+00,
    e: 1.676780871638673E-02,
    i: 0,
    om: 1.888900932218542E+02,
    w: 2.718307282052625E+02,
    ma: 3.021792498388233E+02,
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
