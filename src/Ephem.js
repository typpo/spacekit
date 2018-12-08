EPHEM_VALID_ATTRS = new Set([
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

class Ephem {
  // Note that Ephem always takes values in RADIANS, not degrees

  constructor(initialValues, degOrRad = 'rad') {
    this._attrs = {};

    for (const attr in initialValues) {
      if (initialValues.hasOwnProperty(attr)) {
        const units = ANGLE_UNITS.has(attr) ? degOrRad : null;
        this.set(attr, initialValues[attr], units);
      }
    }
    this.fill();
  }

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

  get(attr, units = 'rad') {
    if (units === 'deg') {
      return this._attrs[attr] * 180 / Math.PI;
    }
    return this._attrs[attr];
  }

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

const EphemPresets = {
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
    epoch: 2458158.5,
    a: 0.723330322769284,
    e: 0.0068019089280646,
    i: 3.39448880350495,
    om: 76.6283945443639,
    w: 54.7479347468155,
    ma: 205.951622809866,
  }, 'deg'),
  EARTH: new Ephem({
    epoch: 2458158.5,
    a: 1.00018124620021,
    e: 0.0170294002582618,
    i: 0.00305619282011758,
    om: 170.257153523923,
    w: 292.047407867444,
    ma: 37.6233515502107,
  }, 'deg'),
  MARS: new Ephem({
    epoch: 2458158.5,
    a: 1.52377511445157,
    e: 0.0933879643016512,
    i: 1.84829721005382,
    om: 49.5084724581293,
    w: 286.599882025617,
    ma: 235.827701941868,
  }, 'deg'),
  JUPITER: new Ephem({
    epoch: 2458158.5,
    a: 5.20281940398345,
    e: 0.048786890578606,
    i: 1.30373102346039,
    om: 100.513619104295,
    w: 273.637938450013,
    ma: 207.130930305131,
  }, 'deg'),
  SATURN: new Ephem({
    epoch: 2458158.5,
    a: 9.57711316383313,
    e: 0.0510164856005507,
    i: 2.48500215402577,
    om: 113.608367654034,
    w: 340.065550585899,
    ma: 177.741612368432,
  }, 'deg'),
  URANUS: new Ephem({
    epoch: 2458158.5,
    a: 19.1335328814279,
    e: 0.0491802721925962,
    i: 0.772728704931158,
    om: 73.9200295471449,
    w: 99.5614367595071,
    ma: 214.010064939569,
  }, 'deg'),
  NEPTUNE: new Ephem({
    epoch: 2458158.5,
    a: 30.0610495838975,
    e: 0.00680342377434227,
    i: 1.76597143552021,
    om: 131.693387158015,
    w: 267.299086015533,
    ma: 304.566722809717,
  }, 'deg'),
};
