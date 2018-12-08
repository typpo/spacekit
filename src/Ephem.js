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

class Ephem {
  // Note that Ephem always takes values in RADIANS, not degrees

  constructor(initialValues) {
    this._attrs = {};

    for (const attr in initialValues) {
      if (initialValues.hasOwnProperty(attr)) {
        this.set(attr, initialValues[attr]);
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
    ma: 174.79252722 * Math.PI / 180,
    epoch: 2451545.0,
    a: 0.38709927,
    e: 0.20563593,
    i: 7.00497902 * Math.PI / 180,
    w_bar: 77.45779628 * Math.PI / 180,
    w: 29.12703035 * Math.PI / 180,
    L: 252.25032350 * Math.PI / 180,
    om: 48.33076593 * Math.PI / 180,
    period: 87.969,
  }),
  VENUS: new Ephem({
    ma: 50.37663232 * Math.PI / 180,
    epoch: 2451545.0,
    a: 0.72333566,
    e: 0.00677672,
    i: 3.39467605 * Math.PI / 180,
    w_bar: 131.60246718 * Math.PI / 180,
    w: 54.92262463 * Math.PI / 180,
    L: 181.97909950 * Math.PI / 180,
    om: 76.67984255 * Math.PI / 180,
    period: 224.701,
  }),
  EARTH: new Ephem({
    // TODO(ian): Make it so I don't have to convert everything to radians.
    ma: -2.47311027 * Math.PI / 180,
    epoch: 2451545.0,
    a: 1.00000261,
    e: 0.01671123,
    i: 0.00001531 * Math.PI / 180,
    w_bar: 102.93768193 * Math.PI / 180,
    w: 102.93768193 * Math.PI / 180,
    L: 100.46457166 * Math.PI / 180,
    om: 0,
    period: 365.256,
  }),
  MARS: new Ephem({
    ma: 19.39019754 * Math.PI / 180,
    epoch: 2451545.0,
    a: 1.52371034,
    e: 0.09339410,
    i: 1.84969142 * Math.PI / 180,
    w_bar: -23.94362959 * Math.PI / 180,
    w: -73.5031685 * Math.PI / 180,
    L: -4.55343205 * Math.PI / 180,
    om: 49.55953891 * Math.PI / 180,
    period: 686.980,
  }),
  JUPITER: new Ephem({
    ma: 19.66796068 * Math.PI / 180,
    epoch: 2451545.0,
    a: 5.20288700,
    e: 0.04838624,
    i: 1.30439695 * Math.PI / 180,
    w_bar: 14.72847983 * Math.PI / 180,
    w: -85.74542926 * Math.PI / 180,
    L: 34.39644051 * Math.PI / 180,
    om: 100.47390909 * Math.PI / 180,
    period: 4332.589,
  }),
  SATURN: new Ephem({
    ma: 145.143217 * Math.PI / 180,
    epoch: 2451545.0,
    a: 9.53707032,
    e: 0.05415060,
    i: 2.48446 * Math.PI / 180,
    w_bar: 92.43194 * Math.PI / 180,
    L: 49.94432 * Math.PI / 180,
    om: 113.71504 * Math.PI / 180,
    period: 10759.22,
  }),
  URANUS: new Ephem({
    ma: 207.0243 * Math.PI / 180,
    epoch: 2451545.0,
    a: 19.19126393,
    e: 0.04716771,
    i: 0.76986 * Math.PI / 180,
    w_bar: 170.96424 * Math.PI / 180,
    L: 313.23218 * Math.PI / 180,
    om: 74.22988 * Math.PI / 180,
    period: 30685.4,
  }),
  NEPTUNE: new Ephem({
    ma: 289.8025 * Math.PI / 180,
    epoch: 2451545.0,
    a: 30.06896348,
    e: 0.00858587,
    i: 1.76917 * Math.PI / 180,
    w_bar: 44.97135 * Math.PI / 180,
    L: 304.88003 * Math.PI / 180,
    om: 131.72169 * Math.PI / 180,
    period: 60189,
  }),
};
