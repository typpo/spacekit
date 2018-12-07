EPHEM_VALID_ATTRS = new Set([
  'a', // Semi-major axis
  'e', // Eccentricity
  'i', // Eccentricity

  'epoch',
  'period',

  'ma', // Mean anomaly
  'n', // Mean motion?

  'om', // Longitude of Ascending Node
  'w', // Argument of Perihelion = Longitude of Perihelion - Longitude of Ascending Node
  'w_bar', // Longitude of Perihelion = Longitude of Ascending Node + Argument of Perihelion

]);

class Ephem {
  // Note that Ephem always takes values in RADIANS, not degrees

  constructor(initialValues) {
    this._attrs = {};

    for (let attr in initialValues) {
      if (initialValues.hasOwnProperty(attr)) {
        this.set(attr, initialValues[attr]);
      }
    }
    this.fill();
  }

  set(attr, val, units='rad') {
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

  get(attr, units='rad') {
    if (units === 'deg') {
      return this._attrs[attr] * 180 / Math.PI;
    }
    return this._attrs[attr];
  }

  fill() {
    // Longitude/Argument of Perihelion and Long. of Ascending Node
    const w = this.get('w');
    const wBar = this.get('w_bar');
    const om = this.get('om');
    if (w && om && !wBar) {
      this.set('w_bar',  w + om);
    } else if (wBar && om && !w) {
      this.set('w', wBar - om);
    } else if (w && wBar && !om) {
      this.set('om', wBar - w);
    }

    // Mean motion / period
    const a = this.get('a');
    const period = this.get('period');
    const n = this.get('n');

    if (!period && a) {
      this.set('period', Math.sqrt(Math.pow(a, 3)) * 365.25);
    }

    if (period && !n) {
      // Set radians
      this.set('n', 2.0 * Math.PI / period);
    } else if (n && !period) {
      this.set('period', 2.0 * Math.PI / n);
    }
  }
}
