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
