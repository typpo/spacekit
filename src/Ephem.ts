const METERS_IN_AU = 149597870700;
const SECONDS_IN_DAY = 86400;

// TODO(ian): Allow multiple valid attrs for a single quantity and map them
// internally to a single canonical attribute.
const EPHEM_VALID_ATTRS = new Set([
  'a', // Semi-major axis
  'e', // Eccentricity
  'i', // Inclination
  'q', // Perihelion distance

  'epoch',
  'period', // in days
  'tp', // time of perihelion

  'ma', // Mean anomaly
  'n', // Mean motion
  'L', // Mean longitude

  'om', // Longitude of Ascending Node
  'w', // Argument of Perihelion = Longitude of Perihelion - Longitude of Ascending Node
  'wBar', // Longitude of Perihelion = Longitude of Ascending Node + Argument of Perihelion

  'GM', // Gravitational constant of more massive body
]);

// Which of these are angular measurements.
const ANGLE_UNITS = new Set(['i', 'ma', 'n', 'L', 'om', 'w', 'wBar']);

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
  constructor(initialValues, units = 'rad', locked = false) {
    this._attrs = {};
    this._locked = false;

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

    this._locked = locked;
  }

  /**
   * Sets an ephemerides attribute.
   * @param {String} attr The name of the attribute (e.g. 'a')
   * @param {Number} val The value of the attribute (e.g. 0.5)
   * @param {'deg'|'rad'} units The unit of angle provided, if applicable.
   */
  set(attr, val, units = 'rad') {
    if (this._locked) {
      throw new Error('Attempted to modify locked (immutable) Ephem object');
    }

    if (!EPHEM_VALID_ATTRS.has(attr)) {
      console.warn(`Invalid ephem attr: ${attr}`);
      return false;
    }

    // Store everything in radians.
    // TODO(ian): Make sure value can't be set with bogus units.
    if (units === 'deg') {
      this._attrs[attr] = (val * Math.PI) / 180;
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
      return (this._attrs[attr] * 180) / Math.PI;
    }
    return this._attrs[attr];
  }

  /**
   * @private
   * Infers values of some ephemerides attributes if the required information
   * is available.
   */
  fill() {
    // Perihelion distance and semimajor axis
    const e = this.get('e');
    if (!isDef(e)) {
      throw new Error('Must define eccentricity "e" in an orbit');
    }

    // Semimajor axis and perihelion distance
    let a = this.get('a');
    let q = this.get('q');
    if (isDef(a)) {
      if (!isDef(q)) {
        if (e >= 1.0) {
          throw new Error(
            'Must provide perihelion distance "q" if eccentricity "e" is greater than 1',
          );
        }
        q = a * (1.0 - e);
        this.set('q', q);
      }
    } else if (isDef(q)) {
      a = q / (1.0 - e);
      this.set('a', a);
    } else {
      throw new Error(
        'Must define semimajor axis "a" or perihelion distance "q" in an orbit',
      );
    }

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
    const aMeters = a * METERS_IN_AU;
    const n = this.get('n');
    const GM = this.get('GM');
    let period = this.get('period');

    if (!isDef(period) && isDef(a)) {
      period =
        (2 * Math.PI * Math.sqrt((aMeters * aMeters * aMeters) / GM)) /
        SECONDS_IN_DAY;
      this.set('period', period);
    }

    if (isDef(period) && !isDef(n)) {
      // Set radians
      const newN = (2.0 * Math.PI) / period;
      this.set('n', newN);
    } else if (isDef(n) && !isDef(period)) {
      this.set('period', (2.0 * Math.PI) / n);
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

  /**
   * Make this ephem object immutable.
   */
  lock() {
    this._locked = true;
  }

  copy() {
    return new Ephem(
      {
        GM: this.get('GM'),
        epoch: this.get('epoch'),
        a: this.get('a'),
        e: this.get('e'),
        i: this.get('i'),
        om: this.get('om'),
        ma: this.get('ma'),
        w: this.get('w'),
      },
      'rad',
    );
  }
}

/**
 * Standard gravitational parameter for objects orbiting these bodies.
 * Units in m^3/s^2
 */
export const GM = {
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
  PLUTO_CHARON: 9.7700000000000068e11,
};
