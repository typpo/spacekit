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

/**
 * A dictionary containing ephemerides of planets and other well-known objects.
 * @example
 * const planet1 = viz.createObject('planet1', {
 *   ephem: EphemPresets.MERCURY,
 * });
 */
export const EphemPresets = {
  // See https://ssd.jpl.nasa.gov/?planet_pos and https://ssd.jpl.nasa.gov/txt/p_elem_t1.txt
  MERCURY: new Ephem(
    {
      epoch: 2458426.5,
      a: 3.870968969437096e-1,
      e: 2.056515875393916e-1,
      i: 7.003891682749818,
      om: 4.830774804443502e1,
      w: 2.917940253442659e1,
      ma: 2.56190975209273e2,
    },
    'deg',
  ),
  VENUS: new Ephem(
    {
      epoch: 2458426.5,
      a: 7.233458663591554e-1,
      e: 6.762510759617694e-3,
      i: 3.394567787211735,
      om: 7.662534150657346e1,
      w: 5.474567447560867e1,
      ma: 2.756687596099721e2,
    },
    'deg',
  ),
  EARTH: new Ephem(
    {
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
    },
    'deg',
  ),
  MOON: new Ephem(
    {
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
      ma: 5.053270083636792e1,
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
    },
    'deg',
  ),
  MARS: new Ephem(
    {
      epoch: 2458426.5,
      a: 1.52371401537107,
      e: 9.336741335309606e-2,
      i: 1.848141099825311,
      om: 4.950420572080223e1,
      w: 2.866965847685386e2,
      ma: 2.538237617924876e1,
    },
    'deg',
  ),
  JUPITER: new Ephem(
    {
      epoch: 2458426.5,
      a: 5.20180355911023,
      e: 4.89912558249006e-2,
      i: 1.303560894624275,
      om: 1.005203828847816e2,
      w: 2.73736301845404e2,
      ma: 2.31939544389401e2,
    },
    'deg',
  ),
  SATURN: new Ephem(
    {
      epoch: 2458426.5,
      a: 9.577177295536776,
      e: 5.101889921719987e-2,
      i: 2.482782449972317,
      om: 1.136154964073247e2,
      w: 3.394422648650336e2,
      ma: 1.870970898012944e2,
    },
    'deg',
  ),
  URANUS: new Ephem(
    {
      epoch: 2458426.5,
      a: 1.914496966635462e1,
      e: 4.832662948112808e-2,
      i: 7.697511134483724e-1,
      om: 7.414239045667875e1,
      w: 9.942704504702185e1,
      ma: 2.202603033874267e2,
    },
    'deg',
  ),
  NEPTUNE: new Ephem(
    {
      epoch: 2458426.5,
      a: 3.00962226342805e1,
      e: 7.36257118719377e-3,
      i: 1.774569249829094,
      om: 1.318695882492132e2,
      w: 2.586226409499831e2,
      ma: 3.152804988924479e2,
    },
    'deg',
  ),
  PLUTO: new Ephem(
    {
      epoch: 2454000.5,
      a: 39.4450697257,
      e: 0.250248713478,
      i: 17.0890009196,
      om: 110.376957955,
      w: 112.597141677,
      ma: 25.2471897122,
    },
    'deg',
  ),
};
