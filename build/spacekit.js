var Spacekit = (function (exports) {
  'use strict';

  /**
   * A simple wrapper for Three.js camera.
   */
  class Camera {
    /**
     * @param {Object} context The simulation context
     */
    constructor(context) {
      // TODO(ian): Accept either context or container
      this._context = context;

      this.init();
    }

    init() {
      const containerWidth = this._context.container.width;
      const containerHeight = this._context.container.height;
      this._camera = new THREE.PerspectiveCamera(50, containerWidth / containerHeight, 0.001, 100000);
    }

    /**
     * @returns {Object} The THREE.js camera object.
     */
    get3jsCamera() {
      return this._camera;
    }
  }

  function rad(val) {
    return val * Math.PI / 180;
  }

  function deg(val) {
    return val * 180 / Math.PI;
  }

  function hoursToDeg(val) {
    return val * 15.0;
  }

  function sexagesimalToDecimalRa(raHour, raMin, raSec) {
    // https://astronomy.stackexchange.com/questions/24518/convert-a-decimal-into-ra-or-dec
    return raHour * 15.0 + raMin / 4.0 + raSec / 240.0;
  }

  function sexagesimalToDecimalDec(decDeg, decMin, decSec, isObserverBelowEquator = false) {
    const posneg = isObserverBelowEquator ? -1 : 1;
    return decDeg + decMin / 60.0 + posneg * decSec / 3600.0;
  }

  function decimalToSexagesimalRa(decimal) {
    const val = parseFloat(decimal);
    const raHour = Math.trunc(val / 15.0);
    const raMin = Math.trunc((val - raHour * 15.0) * 4.0);
    const raSec = (val - raHour * 15.0 - raMin / 4.0) * 240.0;
    return [raHour, raMin, raSec];
  }

  function decimalToSexagesimalDec(decimal, isObserverBelowEquator = false) {
    const val = parseFloat(decimal);
    const posneg = isObserverBelowEquator ? -1 : 1;

    const decDeg = Math.trunc(val);
    const decMin = Math.trunc((val - posneg * decDeg) * 60.0 * posneg);
    const decSec = (val - posneg * decDeg - posneg * decMin / 60.0) * 3600.0 * posneg;
    return [decDeg, decMin, decSec];
  }

  const J2000 = 2451545.0;

  function sphericalToCartesian(ra, dec, dist) {
    // See http://www.stargazing.net/kepler/rectang.html
    return [
      dist * Math.cos(ra) * Math.cos(dec),
      dist * Math.sin(ra) * Math.cos(dec),
      dist * Math.sin(dec),
    ];
  }

  function equatorialToEcliptic_Cartesian(x, y, z, jd = J2000) {
    const obliquity = getObliquity(jd);

    return [
      x,
      Math.cos(obliquity) * y + Math.sin(obliquity) * z,
      -Math.sin(obliquity) * y + Math.cos(obliquity) * z,
    ];
  }

  /**
   * Get Earth's obliquity and nutation at a given date.
   * @param {Number} jd JD date
   * @return {Object} Object with attributes "obliquity" and "nutation" provided
   * in radians
   */
  function getNutationAndObliquity(jd = J2000) {
    const t = (jd - J2000) / 36525;
    const omega = rad(125.04452 - 1934.136261 * t + 0.0020708 * t * t + (t * t + t) / 450000);
    const Lsun = rad(280.4665 + 36000.7698 * t);
    const Lmoon = rad(218.3165 + 481267.8813 * t);

    const nutation = (-17.20 / 3600) * Math.sin(omega) - (-1.32 / 3600) * Math.sin(2 * Lsun) - (0.23 / 3600) * Math.sin(2 * Lmoon) + deg((0.21 / 3600) * Math.sin(2 * omega));

    const obliquity_zero = 23 + 26.0 / 60 + 21.448 / 3600 - (46.8150 / 3600) * t - (0.00059 / 3600) * t * t + (0.001813 / 3600) * t * t * t;
    const obliquity_delta = (9.20 / 3600) * Math.cos(omega) + (0.57 / 3600) * Math.cos(2 * Lsun) + (0.10 / 3600) * Math.cos(2 * Lmoon) - (0.09 / 3600) * Math.cos(2 * omega);
    const obliquity = obliquity_zero + obliquity_delta;

    return {
      nutation: rad(nutation),
      obliquity: rad(obliquity),
    };
  }

  /**
   * Get Earth's obliquity at a given date.
   * @param {Number} jd JD date
   * @return {Number} Obliquity in radians
   */
  function getObliquity(jd = J2000) {
    return getNutationAndObliquity(jd).obliquity;
  }

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
  class Ephem {
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
  const GM = {
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
  const EphemPresets = {
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

  /**
   * A class that builds a visual representation of a Kepler orbit.
   * @example
   * const orbit = new Spacekit.Orbit({
   *   ephem: new Spacekit.Ephem({...}),
   *   options: {
   *     color: 0xFFFFFF,
   *     eclipticLineColor: 0xCCCCCC,
   *   },
   * });
   */
  class Orbit {
    /**
     * @param {Ephem} ephem The ephemerides that define this orbit.
     * @param {Object} options
     * @param {Object} options.color The color of the orbital ellipse.
     * @param {Object} options.eclipticLineColor The color of lines drawn
     * perpendicular to the ecliptic in order to illustrate depth (defaults to
     * 0x333333).
     */
    constructor(ephem, options) {
      /**
       * Ephem object
       * @type {Ephem}
       */
      this._ephem = ephem;

      /**
       * Options (see class definition for details)
       */
      this._options = options || {};

      /**
       * Cached orbital points.
       * @type {Array.<THREE.Vector3>}
       */
      this._points = null;

      /**
       * Cached ellipse.
       * @type {THREE.Line}
       */
      this._ellipse = null;
    }

    /**
     * @private
     * @return {Array.<THREE.Vector3>} List of points
     */
    getOrbitPoints() {
      if (this._points) {
        return this._points;
      }

      const eph = this._ephem;

      const period = eph.get('period');
      const ecc = eph.get('e');
      const minSegments = ecc > 0.4 ? 100 : 50;
      const numSegments = Math.max(period / 2, minSegments);
      const step = period / numSegments;

      const pts = [];
      let prevPos;
      for (let time = 0; time < period; time += step) {
        const pos = this.getPositionAtTime(time);
        if (isNaN(pos[0]) || isNaN(pos[1]) || isNaN(pos[2])) {
          console.error('NaN position value - you may have bad or incomplete data in the following ephemeris:');
          console.error(eph);
        }
        const vector = new THREE.Vector3(pos[0], pos[1], pos[2]);
        if (prevPos && Math.abs(prevPos[0] - pos[0])
                       + Math.abs(prevPos[1] - pos[1])
                       + Math.abs(prevPos[2] - pos[2]) > 120) {
          // Don't render bogus or very large ellipses.
          points.vertices = [];
          return points;
        }
        prevPos = pos;
        pts.push(vector);
      }
      pts.push(pts[0]);

      this._points = new THREE.Geometry();
      this._points.vertices = pts;

      return this._points;
    }

    /**
     * Get heliocentric position of object at a given JD.
     * @param {Number} jd Date value in JD.
     * @param {boolean} debug Set true for debug output.
     * @return {Array.<Number>} [X, Y, Z] coordinates
     */
    getPositionAtTime(jd, debug) {
      // Note: logic below must match the vertex shader.

      const pi = Math.PI;
      const sin = Math.sin;
      const cos = Math.cos;

      const eph = this._ephem;

      // This position calculation is used to create orbital ellipses.
      let e = eph.get('e');
      if (e >= 1) {
        e = 0.999999999999;
      }

      // Mean anomaly
      const ma = eph.get('ma', 'rad');

      // Calculate mean anomaly at jd
      const n = eph.get('n', 'rad');
      const epoch = eph.get('epoch');
      const d = jd - epoch;

      const M = ma + n * d;
      if (debug) {
        console.info('period=', eph.get('period'));
        console.info('n=', n);
        console.info('ma=', ma);
        console.info('d=', d);
        console.info('M=', M);
      }

      // Estimate eccentric and true anom using iterative approx
      let E0 = M;
      let lastdiff;
      do {
        const E1 = M + e * sin(E0);
        lastdiff = Math.abs(E1 - E0);
        E0 = E1;
      } while (lastdiff > 0.0000001);
      const E = E0;
      const v = 2 * Math.atan(Math.sqrt((1 + e) / (1 - e)) * Math.tan(E / 2));

      // Radius vector, in AU
      const a = eph.get('a');
      const r = a * (1 - e * e) / (1 + e * cos(v));

      // Inclination, Longitude of ascending node, Longitude of perihelion
      const i = eph.get('i', 'rad');
      const o = eph.get('om', 'rad');
      const p = eph.get('wBar', 'rad');

      // Heliocentric coords
      const X = r * (cos(o) * cos(v + p - o) - sin(o) * sin(v + p - o) * cos(i));
      const Y = r * (sin(o) * cos(v + p - o) + cos(o) * sin(v + p - o) * cos(i));
      const Z = r * (sin(v + p - o) * sin(i));
      return [X, Y, Z];
    }

    /**
     * @return {THREE.Line} The ellipse object that represents this orbit.
     */
    getEllipse() {
      if (!this._ellipse) {
        const pointGeometry = this.getOrbitPoints();
        this._ellipse = new THREE.Line(pointGeometry,
          new THREE.LineBasicMaterial({
            color: this._options.color,
          }), THREE.LineStrip);
      }
      return this._ellipse;
    }

    /**
     * A geometry containing line segments that run between the orbit ellipse and
     * the ecliptic plane of the solar system. This is a useful visual effect
     * that makes it easy to tell when an orbit goes below or above the ecliptic
     * plane.
     * @return {THREE.Geometry} A geometry with many line segments.
     */
    getLinesToEcliptic() {
      const points = this.getOrbitPoints();
      const geometry = new THREE.Geometry();

      points.vertices.forEach((vertex) => {
        geometry.vertices.push(vertex);
        geometry.vertices.push(new THREE.Vector3(vertex.x, vertex.y, 0));
      });

      return new THREE.LineSegments(
        geometry,
        new THREE.LineBasicMaterial({
          color: this._options.eclipticLineColor || 0x333333,
        }),
        THREE.LineStrip,
      );
    }

    /**
     * Get the color of this orbit.
     * @return {Number} The hexadecimal color of the orbital ellipse.
     */
    getHexColor() {
      return this._ellipse.material.color.getHex();
    }

    /**
     * @param {Number} hexVal The hexadecimal color of the orbital ellipse.
     */
    setHexColor(hexVal) {
      return this._ellipse.material.color = new THREE.Color(hexVal);
    }

    /**
     * Get the visibility of this orbit.
     * @return {boolean} Whether the orbital ellipse is visible. Note that
     * although the ellipse may not be visible, it is still present in the
     * underlying Scene and Simultation.
     */
    getVisibility() {
      return this._ellipse.visible;
    }

    /**
     * Change the visibility of this orbit.
     * @param {boolean} val Whether to show the orbital ellipse.
     */
    setVisibility(val) {
      return this._ellipse.visible = val;
    }
  }

  var julian = convert;
  var toDate = convertToDate;

  var toJulianDay_1 = toJulianDay;
  var toMillisecondsInJulianDay_1 = toMillisecondsInJulianDay;
  var fromJulianDayAndMilliseconds_1 = fromJulianDayAndMilliseconds;

  var DAY = 86400000;
  var HALF_DAY = DAY / 2;
  var UNIX_EPOCH_JULIAN_DATE = 2440587.5;
  var UNIX_EPOCH_JULIAN_DAY = 2440587;

  function convert(date) {
    return (toJulianDay(date) + (toMillisecondsInJulianDay(date) / DAY)).toFixed(6);
  }
  function convertToDate(julian) {
    return new Date((Number(julian) - UNIX_EPOCH_JULIAN_DATE) * DAY);
  }
  function toJulianDay(date) {
    return ~~((+date + HALF_DAY) / DAY) + UNIX_EPOCH_JULIAN_DAY;
  }
  function toMillisecondsInJulianDay(date) {
    return (+date + HALF_DAY) % DAY;
  }
  function fromJulianDayAndMilliseconds(day, ms) {
    return (day - UNIX_EPOCH_JULIAN_DATE) * DAY + ms;
  }julian.toDate = toDate;
  julian.toJulianDay = toJulianDay_1;
  julian.toMillisecondsInJulianDay = toMillisecondsInJulianDay_1;
  julian.fromJulianDayAndMilliseconds = fromJulianDayAndMilliseconds_1;

  /**
   * @ignore
   */
  const DEFAULT_TEXTURE_URL = '{{assets}}/sprites/fuzzyparticle.png';

  /**
   * Returns the complete URL to a texture given a basepath and a template url.
   * @param {String} template URL containing optional template parameters
   * @param {String} basePath Base path for simulation data and assets.
   * @example
   * getFullTextureUrl('{{assets}}/images/mysprite.png', '/path/to/assets')
   * => '/path/to/assets/images/mysprite.png'
   */
  function getFullTextureUrl(template, basePath) {
    return getFullUrl(template || DEFAULT_TEXTURE_URL, basePath);
  }

  /**
   * Returns the complete URL to a texture given a basepath and a template url.
   * @param {String} template URL containing optional template parameters
   * @param {String} basePath Base path
   * @example
   * getFullUrl('{{assets}}/images/mysprite.png', '/path/to/assets')
   * => '/path/to/assets/images/mysprite.png'
   */
  function getFullUrl(template, basePath) {
    return template.replace('{{assets}}', `${basePath}/assets`)
      .replace('{{data}}', `${basePath}/data`);
  }

  /**
   * @private
   * Minimum number of degrees per day an object must move in order for its
   * position to be updated in the visualization.
   */
  const MIN_DEG_MOVE_PER_DAY = 0.5;

  /**
   * @private
   * Number of milliseconds between label position updates.
   */
  const LABEL_UPDATE_MS = 30;

  /**
   * @private
   * Converts (X, Y, Z) position in visualization to pixel coordinates.
   */
  function toScreenXY(position, camera, canvas) {
    const pos = new THREE.Vector3(position[0], position[1], position[2]);
    const projScreenMat = new THREE.Matrix4();
    projScreenMat.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    pos.applyMatrix4(projScreenMat);
    return {
      x: (pos.x + 1) * canvas.clientWidth / 2,
      y: (-pos.y + 1) * canvas.clientHeight / 2,
    };
  }

  /**
   * An object that can be added to a visualization.
   * @example
   * const myObject = viz.addObject('planet1', {
   *   position: [0, 0, 0],
   *   scale: [1, 1, 1],
   *   labelText: 'My object',
   *   hideOrbit: false,
   *   ephem: new Spacekit.Ephem({...}),
   *   textureUrl: '/path/to/spriteTexture.png',
   *   basePath: '/base',
   *   ecliptic: {
   *     lineColor: 0xCCCCCC,
   *     displayLines: false,
   *   },
   *   theme: {
   *     color: 0xFFFFFF,
   *   },
   * });
   */
  class SpaceObject {
    /**
     * @param {String} id Unique id of this object
     * @param {Object} options Options container
     * @param {Array.<Number>} options.position [X, Y, Z] heliocentric coordinates of object. Defaults to [0, 0, 0]
     * @param {Array.<Number>} options.scale Scale of object on each [X, Y, Z] axis. Defaults to [1, 1, 1]
     * @param {String} options.labelText Text label to display above object (set undefined for no label)
     * @param {boolean} options.hideOrbit If true, don't show an orbital ellipse. Defaults false.
     * @param {Ephem} options.ephem Ephemerides for this orbit
     * @param {String} options.textureUrl Texture for sprite
     * @param {String} options.basePath Base path for simulation assets and data
     * @param {Object} options.ecliptic Contains settings related to ecliptic
     * @param {Number} options.ecliptic.lineColor Hex color of lines that run perpendicular to ecliptic. @see Orbit
     * @param {boolean} options.ecliptic.displayLines Whether to show ecliptic lines. Defaults false.
     * @param {Object} options.theme Contains settings related to appearance of orbit
     * @param {Number} options.theme.color Hex color of the orbit
     * @param {Object} contextOrSimulation Simulation context or simulation object
     * @param {boolean} autoInit Automatically initialize this object. If false
     * you must call init() manually.
     */
    constructor(id, options, contextOrSimulation, autoInit = true) {
      this._id = id;
      this._options = options || {};

      // if (contextOrSimulation instanceOf Simulation) {
      {
        // User passed in Simulation
        this._simulation = contextOrSimulation;
        this._context = contextOrSimulation.getContext();
      }

      this._label = null;
      this._lastLabelUpdate = 0;

      this._position = this._options.position || [0, 0, 0];
      this._scale = this._options.scale || [1, 1, 1];

      // Number of degrees moved per day. Used to limit the number of orbit
      // updates for very slow moving objects.
      this._degreesPerDay = this._options.ephem ? this._options.ephem.get('n', 'deg') : Number.MAX_VALUE;

      this._initialized = false;
      if (autoInit && !this.init()) {
        console.warn(`SpaceObject ${id}: failed to initialize`);
      }
    }

    /**
     * Initializes label and three.js objects. Called automatically unless you've
     * set autoInit to false in constructor (this init is suppressed by some
     * child classes).
     */
    init() {
      if (this.isStaticObject()) {
        // Create a stationary sprite.
        this._object3js = this.createSprite();
        if (this._simulation) {
          // Add it all to visualization.
          this._simulation.addObject(this, false /* noUpdate */);
        }
      } else {
        if (!this._options.hideOrbit) {
          // Orbit is initialized before sprite because sprite may be positioned
          // according to orbit.
          this._orbit = this.createOrbit();

          if (this._simulation) {
            // Add it all to visualization.
            this._simulation.addObject(this, false /* noUpdate */);
          }
        }

        // Don't create a sprite - do it on the GPU instead.
        this._context.objects.particles.addParticle(this._options.ephem, {
          particleSize: this._options.particleSize,
          color: this.getColor(),
        });
      }
      if (this._options.labelText) {
        const labelElt = this.createLabel();
        this._simulation.getSimulationElement().appendChild(labelElt);
        this._label = labelElt;
      }
      this._initialized = true;
      return true;
    }

    /**
     * @private
     * Builds the label div and adds it to the visualization
     * @return {HTMLElement} A div that contains the label for this object
     */
    createLabel() {
      const text = document.createElement('div');
      text.className = 'spacekit__object-label';
      text.innerHTML = `<div>${this._options.labelText}</div>`;
      text.style.fontFamily = 'Arial';
      text.style.fontSize = '12px';
      text.style.color = '#fff';
      text.style.position = 'absolute';
      text.style.marginLeft = '1.5em';

      text.style.backgroundColor = '#0009';
      text.style.borderRadius = '4px';
      text.style.padding = '0px 1px';
      text.style.border = '1px solid #5f5f5f';

      return text;
    }

    /**
     * @private
     * Updates the label's position
     * @param {Array.Number} newpos Position of the label in the visualization's
     * coordinate system
     */
    updateLabelPosition(newpos) {
      const label = this._label;
      const simulationElt = this._simulation.getSimulationElement();
      const pos = toScreenXY(newpos, this._simulation.getCamera(), simulationElt);
      const loc = {
        left: pos.x - 30, top: pos.y - 25, right: pos.x + label.clientWidth - 20, bottom: pos.y + label.clientHeight,
      };
      if (loc.left > 0 && loc.right < simulationElt.clientWidth
          && loc.top > 0 && loc.bottom < simulationElt.clientHeight) {
        label.style.left = `${loc.left}px`;
        label.style.top = `${loc.top}px`;
        label.style.visibility = 'visible';
      } else {
        label.style.visibility = 'hidden';
      }
    }

    /**
     * @private
     * Builds the sprite for this object
     * @return {THREE.Sprite} A sprite object
     */
    createSprite() {
      const fullTextureUrl = getFullTextureUrl(
        this._options.textureUrl,
        this._context.options.basePath,
      );
      const texture = new THREE.TextureLoader().load(fullTextureUrl);
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
        map: texture,
        blending: THREE.AdditiveBlending,
        color: 0xffffff,
      }));
      sprite.scale.set.apply(this, this._scale);
      const position = this.getPosition(this._simulation.getJd());
      sprite.position.set(position[0], position[1], position[2]);


      if (this.isStaticObject()) {
        sprite.matrixAutoUpdate = false;
      }

      return sprite;

      /*
      const light = new THREE.PointLight( 0xffffff, 1.5, 2000 );
      light.position.set.apply(this, this._position);

      const lensflare = new THREE.Lensflare();
      lensflare.addElement(new THREE.LensflareElement(texture, 500, 0, new
                                                      THREE.Color(0xffffff),
                                                      THREE.AdditiveBlending));

      light.add(lensflare);
      return light;
     */
    }

    /**
     * @private
     * Builds the {Orbit} for this object
     * @return {Orbit} An orbit object
     */
    createOrbit() {
      if (this._orbit) {
        return this._orbit;
      }
      return new Orbit(this._options.ephem, {
        color: this.getColor(),
        eclipticLineColor: this._options.ecliptic ? this._options.ecliptic.lineColor : null,
      });
    }

    /**
     * @private
     * Determines whether to update the position of an update. Don't update if JD
     * threshold is less than a certain amount.
     * TODO(ian): This should also be a function of zoom level, because as you get
     * closer the chopiness gets more noticeable.
     * @param {Number} afterJd Next JD
     * @return {boolean} Whether to update
     */
    shouldUpdateObjectPosition(afterJd) {
      const degMove = this._degreesPerDay * (afterJd - this._lastJdUpdated);
      if (degMove < MIN_DEG_MOVE_PER_DAY) {
        return false;
      }
      return true;
    }

    /**
     * Updates the position of this object. Applicable only if this object is a
     * sprite and not a particle type.
     * @param {Number} x X position
     * @param {Number} y Y position
     * @param {Number} z Z position
     */
    setPosition(x, y, z) {
      this._position[0] = x;
      this._position[1] = y;
      this._position[2] = z;
    }

    /**
     * Gets the visualization coordinates of this object at a given time.
     * @param {Number} jd JD date
     * @return {Array.<Number>} [X, Y,Z] coordinates
     */
    getPosition(jd) {
      const pos = this._position;
      if (!this._orbit) {
        // Default implementation, a static object.
        return pos;
      }

      const posModified = this._orbit.getPositionAtTime(jd);
      return [
        pos[0] + posModified[0],
        pos[1] + posModified[1],
        pos[2] + posModified[2],
      ];
    }

    /**
     * Updates the object and its label positions for a given time.
     * @param {Number} jd JD date
     */
    update(jd) {
      if (this.isStaticObject()) {
        return;
      }

      let newpos;
      let shouldUpdateObjectPosition = false;
      if (this._object3js || this._label) {
        shouldUpdateObjectPosition = this.shouldUpdateObjectPosition(jd);
      }
      if (this._object3js && shouldUpdateObjectPosition) {
        newpos = this.getPosition(jd);
        this._object3js.position.set(newpos[0], newpos[1], newpos[2]);
      }

      // TODO(ian): Determine this based on orbit and camera position change.
      const shouldUpdateLabelPos = +new Date() - this._lastLabelUpdate > LABEL_UPDATE_MS;
      if (this._label && shouldUpdateLabelPos) {
        if (!newpos) {
          newpos = this.getPosition(jd);
        }
        this.updateLabelPosition(newpos);
        this._lastLabelUpdate = +new Date();
      }
      this._lastJdUpdated = jd;
    }

    /**
     * Gets the THREE.js objects that represent this SpaceObject.
     * @return {Array.<THREE.Object>} A list of THREE.js objects
     */
    get3jsObjects() {
      const ret = [];
      if (this._object3js) {
        ret.push(this._object3js);
      }
      if (this._orbit) {
        ret.push(this._orbit.getEllipse());
        if (this._options.ecliptic && this._options.ecliptic.displayLines) {
          ret.push(this._orbit.getLinesToEcliptic());
        }
      }
      return ret;
    }

    /**
     * Gets the color of this object. Usually this corresponds to the color of
     * the dot representing the object as well as its orbit.
     * @return {Number} A hexidecimal color value, e.g. 0xFFFFFF
     */
    getColor() {
      if (this._options.theme) {
        return this._options.theme.color || 0xffffff;
      }
      return 0xffffff;
    }

    /**
     * Gets the {Orbit} object for this SpaceObject.
     * @return {Orbit} Orbit object
     */
    getOrbit() {
      return this._orbit;
    }

    /**
     * Gets the unique ID of this object.
     * @return {String} Unique ID
     */
    getId() {
      return this._id;
    }

    /**
     * Determines whether object is static (can't change its position) or whether
     * its position can be updated (ie, it has ephemeris)
     * @return {boolean} Whether this object can change its position.
     */
    isStaticObject() {
      return !this._options.ephem;
    }

    /**
     * Determines whether object is ready to be measured or added to scene.
     * @return {boolean} True if ready
     */
    isReady() {
      return this._initialized;
    }
  }

  const DEFAULT_PLANET_TEXTURE_URL = '{{assets}}/sprites/smallparticle.png';

  /**
   * Useful presets for creating SpaceObjects.
   * @example
   * const myobject = viz.addObject('planet1', Spacekit.SpaceObjectPresets.MERCURY);
   */
  const SpaceObjectPresets = {
    SUN: {
      textureUrl: '{{assets}}/sprites/sunsprite.png',
      position: [0, 0, 0],
    },
    MERCURY: {
      textureUrl: DEFAULT_PLANET_TEXTURE_URL,
      theme: {
        color: 0x913CEE,
      },
      ephem: EphemPresets.MERCURY,
    },
    VENUS: {
      textureUrl: DEFAULT_PLANET_TEXTURE_URL,
      theme: {
        color: 0xFF7733,
      },
      ephem: EphemPresets.VENUS,
    },
    EARTH: {
      textureUrl: DEFAULT_PLANET_TEXTURE_URL,
      theme: {
        color: 0x009ACD,
      },
      ephem: EphemPresets.EARTH,
    },
    MARS: {
      textureUrl: DEFAULT_PLANET_TEXTURE_URL,
      theme: {
        color: 0xA63A3A,
      },
      ephem: EphemPresets.MARS,
    },
    JUPITER: {
      textureUrl: DEFAULT_PLANET_TEXTURE_URL,
      theme: {
        color: 0xFFB90F,
      },
      ephem: EphemPresets.JUPITER,
    },
    SATURN: {
      textureUrl: DEFAULT_PLANET_TEXTURE_URL,
      theme: {
        color: 0x336633,
      },
      ephem: EphemPresets.SATURN,
    },
    URANUS: {
      textureUrl: DEFAULT_PLANET_TEXTURE_URL,
      theme: {
        color: 0x0099FF,
      },
      ephem: EphemPresets.URANUS,
    },
    NEPTUNE: {
      textureUrl: DEFAULT_PLANET_TEXTURE_URL,
      theme: {
        color: 0x3333FF,
      },
      ephem: EphemPresets.NEPTUNE,
    },
  };

  const deg2rad = Math.PI / 180;
  const rad2deg = 180 / Math.PI;

  THREE.Object3D.prototype.rotateAroundWorldAxis = (function () {
    // https://stackoverflow.com/questions/31953608/rotate-object-on-specific-axis-anywhere-in-three-js-including-outside-of-mesh

    // rotate object around axis in world space (the axis passes through point)
    // axis is assumed to be normalized
    // assumes object does not have a rotated parent

    const q = new THREE.Quaternion();

    return function rotateAroundWorldAxis(point, axis, angle) {
      q.setFromAxisAngle(axis, angle);

      this.applyQuaternion(q);

      this.position.sub(point);
      this.position.applyQuaternion(q);
      this.position.add(point);

      return this;
    };
  }());

  class ShapeObject extends SpaceObject {
    /**
     * @param {Object} options.shape Shape specification
     * @param {String} options.shape.url Path to shapefile
     * @param {Number} options.shape.color Color of shape materials. Default 0xcccccc
     * @param {boolean} options.shape.enableRotation Show rotation of object
     * @param {Number} options.shape.rotationSpeed Factor that determines
     * @param {Object} options.shape.debug Debug options
     * @param {boolean} options.shape.debug.showAxes Show axes
     * rotation speed. Default 0.5
     * @see SpaceObject
     */
    constructor(id, options, contextOrSimulation) {
      super(id, options, contextOrSimulation, false /* autoInit */);
      if (!options.shape) {
        console.error('ShapeObject requires an options.shape object');
        return;
      }

      // The THREE.js object
      this._obj = undefined;
      this._eclipticOrigin = undefined;

      // Offset of axis angle
      this._axisRotationAngleOffset = 0;
      this._axisOfRotation = undefined;

      // Keep track of materials that comprise this object.
      this._asteroidMaterials = [];

      this.init();
    }

    /**
     * @private
     */
    init() {
      const manager = new THREE.LoadingManager();
      manager.onProgress = (item, loaded, total) => {
        console.info(this._id, item, 'loading progress:', loaded, '/', total);
      };
      const loader = new THREE.OBJLoader(manager);
      loader.load(this._options.shape.url, (object) => {
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            const material = new THREE.MeshStandardMaterial({
              color: this._options.shape.color || 0xcccccc,
            });
            child.material = material;
            child.geometry.scale(0.05, 0.05, 0.05);
            /*
            child.geometry.computeFaceNormals();
            child.geometry.computeVertexNormals();
            child.geometry.computeBoundingBox();
           */
            this._asteroidMaterials.push(material);
          }
        });

        const parent = new THREE.Object3D();
        parent.add(object);

        if (this._options.debug && this._options.debug.showAxes) {
          this.getAxes().forEach(axis => parent.add(axis));

          const gridHelper = new THREE.GridHelper(3, 3, 0xff0000, 0xffeeee);
          gridHelper.geometry.rotateX(Math.PI / 2);
          parent.add(gridHelper);
        }

        this._obj = parent;

        // Initialize the rotation at 0,0,0.
        this.initRotation();

        // Then move the object to its position.
        const pos = this._options.position;
        if (pos) {
          this._obj.position.set(pos[0], pos[1], pos[2]);
        }

        if (this._simulation) {
          // Add it all to visualization.
          this._simulation.addObject(this, false /* noUpdate */);
        }

        this._initialized = true;
      });

      // TODO(ian): Create an orbit if applicable
    }

    initRotation() {
      // Formula
      // https://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_description

      // Testing this asteroid:
      // http://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_asteroid_detail&asteroid_id=1504
      // Model 2691
      const PI = Math.PI;

      // Cacus
      // http://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_asteroid_detail&asteroid_id=1046
      // http://astro.troja.mff.cuni.cz/projects/asteroids3D/php.php?script=db_sky_projection&model_id=1863&jd=2443568.0

      // Latitude
      const lambda = 251 * deg2rad;

      // Longitude
      const beta = -63 * deg2rad;
      this._obj.rotateY(-(PI / 2 - beta));
      this._obj.rotateZ(-lambda);
      // this._obj.rotateZ(zAdjust);

      const eclipticOrigin = new THREE.Object3D();
      /*
      // Set up ecliptic
      const geometry = new THREE.SphereGeometry(0.05, 32, 32);
      const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
      const pointOfAries = new THREE.Mesh( geometry, material );
      //pointOfAries.position.set(5, 0, 0);
      eclipticOrigin.add(pointOfAries);
      eclipticOrigin.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), lambda);
      eclipticOrigin.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), -beta);

      eclipticOrigin.updateMatrixWorld();
      const poleProjectionPoint = new THREE.Vector3();
      pointOfAries.getWorldPosition(poleProjectionPoint);
      */
      this._eclipticOrigin = eclipticOrigin;
      // this._obj.lookAt(poleProjectionPoint);

      // this._obj.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), zAdjust + PI);
    }

    getAxes() {
      return [
        this.getAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(3, 0, 0), 0xff0000),
        this.getAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 3, 0), 0x00ff00),
        this.getAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 3), 0x0000ff),
      ];
    }

    getAxis(src, dst, color) {
      const geom = new THREE.Geometry();
      const mat = new THREE.LineBasicMaterial({ linewidth: 3, color });

      geom.vertices.push(src.clone());
      geom.vertices.push(dst.clone());

      const axis = new THREE.Line(geom, mat, THREE.LineSegments);
      axis.computeLineDistances();
      return axis;
    }

    /**
     * Gets the THREE.js objects that represent this SpaceObject.
     * @return {Array.<THREE.Object>} A list of THREE.js objects
     */
    get3jsObjects() {
      const ret = super.get3jsObjects();
      ret.push(this._obj);
      ret.push(this._eclipticOrigin);
      return ret;
    }

    /**
     * Updates the object and its label positions for a given time.
     * @param {Number} jd JD date
     */
    update() {
      if (this._obj && this._options.shape.enableRotation) {
        // For now, just rotate on X axis.
        const speed = this._options.shape.rotationSpeed || 0.5;
        this._obj.rotation.x += (speed * (Math.PI / 180));
        this._obj.rotation.x %= 360;
      }
      if (this._axisOfRotation) ;
      // this._obj.rotateZ(0.015)
      // this._obj.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), 0.01);
      // TODO(ian): Update position if there is an associated orbit
    }
  }

  /**
   * A class that adds a skybox (technically a skysphere) to a visualization.
   */
  class Skybox {
    /**
     * @param {Object} options Options
     * @param {String} options.textureUrl Texture to use
     * @param {String} options.basePath Base path to simulation supporting files
     * @param {Object} contextOrSimulation Simulation context or simulation
     * object
     */
    constructor(options, contextOrSimulation) {
      // TODO(ian): Support for actual box instead of sphere...
      this._options = options;
      this._id = `__skybox_${new Date().getTime()}`;

      // if (contextOrSimulation instanceOf Simulation) {
      {
        // User passed in Simulation
        this._simulation = contextOrSimulation;
        this._context = contextOrSimulation.getContext();
      }

      this._mesh = undefined;

      this.init();
    }

    /**
     * @private
     */
    init() {
      const geometry = new THREE.SphereBufferGeometry(1e10, 32, 32);

      const fullTextureUrl = getFullTextureUrl(this._options.textureUrl,
        this._context.options.basePath);
      const texture = new THREE.TextureLoader().load(fullTextureUrl);

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.BackSide,
      });

      const sky = new THREE.Mesh(geometry, material);

      // See this thread on orientation of milky way:
      // https://www.physicsforums.com/threads/orientation-of-the-earth-sun-and-solar-system-in-the-milky-way.888643/
      sky.rotation.x = 0;
      sky.rotation.y = -1 / 12 * Math.PI;
      sky.rotation.z = 8 / 5 * Math.PI;

      // We're on the inside of the skybox, so invert it to correct it.
      sky.scale.set(-1, 1, 1);

      this._mesh = sky;

      if (this._simulation) {
        this._simulation.addObject(this, true /* noUpdate */);
      }
    }

    /**
     * A list of THREE.js objects that are used to compose the skybox.
     * @return {THREE.Object} Skybox mesh
     */
    get3jsObjects() {
      return [this._mesh];
    }

    /**
     * Get the unique ID of this object.
     * @return {String} id
     */
    getId() {
      return this._id;
    }
  }

  /**
   * Preset skybox objects that you can use to add a skybox to your
   * visualization.
   * @example
   * const skybox = viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);
   */
  const SkyboxPresets = {
    ESO_GIGAGALAXY: {
      textureUrl: '{{assets}}/skybox/eso_milkyway.jpg',
    },
    ESO_LITE: {
      textureUrl: '{{assets}}/skybox/eso_lite.png',
    },
    NASA_TYCHO: {
      // from https://svs.gsfc.nasa.gov/3895
      textureUrl: '{{assets}}/skybox/nasa_tycho.jpg',
    },
  };

  /**
   * @ignore
   */
  const ORBIT_SHADER_FRAGMENT = `
    varying vec3 vColor;
    uniform sampler2D texture;

    void main() {
      gl_FragColor = vec4(vColor, 1.0);
      gl_FragColor = gl_FragColor * texture2D(texture, gl_PointCoord);
    }
`;

  /**
   * @ignore
   */
  const ORBIT_SHADER_VERTEX = `
    uniform float jd;

    attribute vec3 fuzzColor;
    varying vec3 vColor;

    attribute float size;

    attribute float a;
    attribute float e;
    attribute float i;
    attribute float om;
    attribute float ma;
    attribute float n;
    attribute float w;
    attribute float wBar;
    attribute float epoch;

    vec3 getAstroPos() {
      float i_rad = i;
      float o_rad = om;
      float p_rad = wBar;
      float ma_rad = ma;
      float n_rad = n;

      float d = jd - epoch;
      float M = ma_rad + n_rad * d;

      // Estimate eccentric and true anom using iterative approximation (this
      // is normally an intergral).
      float E0 = M;
      float E1 = M + e * sin(E0);
      float lastdiff = abs(E1-E0);
      E0 = E1;
      for (int foo=0; foo < 25; foo++) {
        E1 = M + e * sin(E0);
        lastdiff = abs(E1-E0);
        E0 = E1;
        if (lastdiff < 0.0000001) {
          break;
        }
      }

      float E = E0;
      float v = 2.0 * atan(sqrt((1.0+e)/(1.0-e)) * tan(E/2.0));

      // Compute radius vector.
      float r = a * (1.0 - e*e) / (1.0 + e * cos(v));

      // Compute heliocentric coords.
      float X = r * (cos(o_rad) * cos(v + p_rad - o_rad) - sin(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Y = r * (sin(o_rad) * cos(v + p_rad - o_rad) + cos(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Z = r * (sin(v + p_rad - o_rad) * sin(i_rad));
      return vec3(X, Y, Z);
    }

    vec3 getAstroPosFast() {
      float M1 = ma + (jd - epoch) * n;
      float theta = M1 + 2. * e * sin(M1);

      float cosT = cos(theta);

      float r = a * (1. - e * e) / (1. + e * cosT);
      float v0 = r * cosT;
      float v1 = r * sin(theta);

      float sinOm = sin(om);
      float cosOm = cos(om);
      float sinW = sin(w);
      float cosW = cos(w);
      float sinI = sin(i);
      float cosI = cos(i);

      float X = v0 * (cosOm * cosW - sinOm * sinW * cosI) + v1 * (-1. * cosOm * sinW - sinOm * cosW * cosI);
      float Y = v0 * (sinOm * cosW + cosOm * sinW * cosI) + v1 * (-1. * sinOm * sinW + cosOm * cosW * cosI);
      float Z = v0 * (sinW * sinI) + v1 * (cosW * sinI);

      return vec3(X, Y, Z);
    }

    void main() {
      vColor = fuzzColor;

      //vec3 newpos = getAstroPosFast();
      vec3 newpos = getAstroPos();
      vec4 mvPosition = modelViewMatrix * vec4(newpos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      gl_PointSize = size;
    }
`;

  const STAR_SHADER_FRAGMENT = `
    varying vec3 vColor;
    void main() {
        gl_FragColor = vec4(vColor, 1.0);
    }
`;

  const STAR_SHADER_VERTEX = `
    attribute float size;
    varying vec3 vColor;

    void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size;
        gl_Position = projectionMatrix * mvPosition;
    }
`;

  const DEFAULT_PARTICLE_COUNT = 1024;

  /**
   * An efficient way to render many objects in space with Kepler orbits.
   * Primarily used by Simulation to render all non-static objects.
   * @see Simulation
   */
  class SpaceParticles {
    /**
     * @param {Object} options Options container
     * @param {Object} options.textureUrl Template url for sprite
     * @param {Object} options.basePath Base path for simulation supporting files
     * @param {Number} options.jd JD date value
     * @param {Number} options.maxNumParticles Maximum number of particles to display. Defaults to 1024
     * @param {Object} contextOrSimulation Simulation context or object
     */
    constructor(options, contextOrSimulation) {
      this._options = options;

      this._id = `SpaceParticles__${SpaceParticles.instanceCount}`;

      // TODO(ian): Add to ctx
      {
        // User passed in Simulation
        this._simulation = contextOrSimulation;
        this._context = contextOrSimulation.getContext();
      }

      // Whether Points object has been added to the Simulation/Scene. This
      // happens lazily when the first data point is added in order to prevent
      // WebGL render warnings.
      this._addedToScene = false;

      // Number of particles in the scene.
      this._particleCount = 0;

      this._attributes = null;
      this._uniforms = null;
      this._geometry = null;
      this._shaderMaterial = null;
      this._particleSystem = null;

      this.init();
    }

    /**
     * @private
     */
    init() {
      this.createParticleSystem();
    }

    /**
     * @private
     */
    createParticleSystem() {
      const fullTextureUrl = getFullTextureUrl(
        this._options.textureUrl,
        this._context.options.basePath,
      );
      const defaultMapTexture = new THREE.TextureLoader().load(fullTextureUrl);

      this._uniforms = {
        jd: { value: this._options.jd || 0 },
        texture: { value: defaultMapTexture },
      };

      const particleCount = this._options.maxNumParticles || DEFAULT_PARTICLE_COUNT;
      this._attributes = {
        size: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
        position: new THREE.BufferAttribute(new Float32Array(particleCount * 3), 3),
        fuzzColor: new THREE.BufferAttribute(new Float32Array(particleCount * 3), 3),

        a: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
        e: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
        i: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
        om: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
        ma: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
        n: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
        w: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
        wBar: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
        epoch: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      };

      const geometry = new THREE.BufferGeometry();
      geometry.setDrawRange(0, 0);
      Object.keys(this._attributes).forEach((attributeName) => {
        const attribute = this._attributes[attributeName];
        // attribute.setDynamic(true);
        geometry.addAttribute(attributeName, attribute);
      });

      const shader = new THREE.ShaderMaterial({
        uniforms: this._uniforms,
        vertexShader: ORBIT_SHADER_VERTEX,
        fragmentShader: ORBIT_SHADER_FRAGMENT,

        depthTest: false,
        transparent: true,
      });


      this._shaderMaterial = shader;
      this._geometry = geometry;
      this._particleSystem = new THREE.Points(geometry, shader);
    }

    /**
     * Add a particle to this particle system.
     * @param {Ephem} ephem Kepler ephemeris
     * @param {Object} options Options container
     * @param {Number} options.particleSize Size of particles
     * @param {Number} options.color Color of particles
     */
    addParticle(ephem, options = {}) {
      const attributes = this._attributes;
      const offset = this._particleCount++;

      attributes.size.set([options.particleSize || 15], offset);
      const color = new THREE.Color(options.color || 0xffffff);
      attributes.fuzzColor.set([color.r, color.g, color.b], offset * 3);

      attributes.a.set([ephem.get('a')], offset);
      attributes.e.set([ephem.get('e')], offset);
      attributes.i.set([ephem.get('i', 'rad')], offset);
      attributes.om.set([ephem.get('om', 'rad')], offset);
      attributes.ma.set([ephem.get('ma', 'rad')], offset);
      attributes.n.set([ephem.get('n', 'rad')], offset);
      attributes.w.set([ephem.get('w', 'rad')], offset);
      attributes.wBar.set([ephem.get('wBar', 'rad')], offset);
      attributes.epoch.set([ephem.get('epoch')], offset);

      // TODO(ian): Set the update range
      for (const attributeKey in attributes) {
        if (attributes.hasOwnProperty(attributeKey)) {
          attributes[attributeKey].needsUpdate = true;
        }
      }
      this._shaderMaterial.needsUpdate = true;
      this._geometry.setDrawRange(0, this._particleCount);
      this._geometry.needsUpdate = true;

      if (!this._addedToScene && this._simulation) {
        // This happens lazily when the first data point is added in order to
        // prevent WebGL render warnings.
        this._simulation.addObject(this);
        this._addedToScene = true;
      }
    }

    /**
     * Update the position for all particles
     * @param {Number} jd JD date
     */
    update(jd) {
      this._uniforms.jd.value = jd;
    }

    /**
     * Get THREE.js objects that comprise this point cloud
     * @return {Array.<THREE.Object>} List of objects to add to THREE.js scene
     */
    get3jsObjects() {
      return [this._particleSystem];
    }

    /**
     * Get unique id for this object.
     * @return {String} Unique id
     */
    getId() {
      return this._id;
    }
  }

  SpaceParticles.instanceCount = 0;

  /**
   * Maps spectral class to star color
   * @param temperature {Number} Star temperature in Kelvin
   * @return {Number} Color for star of given spectral class
   */
  function getColorForStar(temp) {
    if (temp >= 30000) return 0x92B5FF;
    if (temp >= 10000) return 0xA2C0FF;
    if (temp >= 7500) return 0xd5e0ff;
    if (temp >= 6000) return 0xf9f5ff;
    if (temp >= 5200) return 0xffede3;
    if (temp >= 3700) return 0xffdab5;
    if (temp >= 2400) return 0xffb56c;
    return 0xffb56c;
  }

  function getSizeForStar(mag, minSize) {
    if (mag < 2.0) return minSize * 4;
    if (mag < 4.0) return minSize * 2;
    if (mag < 6.0) return minSize;
    return 1;
  }

  class Stars {
    /**
     * @param {Number} options.minimumStarSize The size of the smallest stars.
     * Defaults to 0.5
     */
    constructor(options, contextOrSimulation) {
      this._options = options;
      this._id = `__stars_${new Date().getTime()}`;

      // if (contextOrSimulation instanceOf Simulation) {
      {
        // User passed in Simulation
        this._simulation = contextOrSimulation;
        this._context = contextOrSimulation.getContext();
      }

      this._stars = undefined;

      this.init();
    }

    init() {
      const dataUrl = getFullUrl('{{data}}/bsc_processed.json', this._context.options.basePath);

      fetch(dataUrl).then(resp => resp.json()).then((library) => {
        const n = library.length;

        const geometry = new THREE.BufferGeometry();

        const positions = new Float32Array(n * 3);
        const colors = new Float32Array(n * 3);
        const sizes = new Float32Array(n);

        geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.addAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.addAttribute('size', new THREE.BufferAttribute(sizes, 1));

        library.forEach((star, idx) => {
          const [ra, dec, temp, mag] = star;

          const raRad = rad(hoursToDeg(ra));
          const decRad = rad(dec);

          const cartesianSpherical = sphericalToCartesian(raRad, decRad, 1e9);
          const pos = equatorialToEcliptic_Cartesian(cartesianSpherical[0], cartesianSpherical[1], cartesianSpherical[2]);

          positions.set(pos, idx * 3);

          const color = new THREE.Color(getColorForStar(temp));
          colors.set(color.toArray(), idx * 3);

          if (idx < 1) {
            sizes[idx] = 50;
            colors.set([1, 0, 0], idx * 3);
          } else {
            sizes[idx] = getSizeForStar(mag, this._options.minimumStarSize || 0.5 /* minSize */);
          }
        });

        const material = new THREE.ShaderMaterial({
          uniforms: {},
          vertexShader: STAR_SHADER_VERTEX,
          fragmentShader: STAR_SHADER_FRAGMENT,
          transparent: true,
          vertexColors: THREE.VertexColors,
        });

        this._stars = new THREE.Points(geometry, material);

        if (this._simulation) {
          this._simulation.addObject(this, true /* noUpdate */);
        }
      });
    }

    /**
     * A list of THREE.js objects that are used to compose the skybox.
     * @return {THREE.Object} Skybox mesh
     */
    get3jsObjects() {
      return [this._stars];
    }

    /**
     * Get the unique ID of this object.
     * @return {String} id
     */
    getId() {
      return this._id;
    }
  }

  /**
   * The main entrypoint of a visualization.
   *
   * This class wraps a THREE.js scene, controls, skybox, etc in an animated
   * Simulation.
   *
   * @example
   * const sim = new Spacekit.Simulation('my-container', {
   *  startDate: Date.now(),
   *  jd: 0.0,
   *  jdDelta: 10.0,
   *  jdPerSecond: 100.0,  // overrides jdDelta
   *  startPaused: false,
   *  maxNumParticles: 2**16,
   *  camera: {
   *    position: [0, -10, 5],
   *    enableDrift: false,
   *  },
   *  debug: {
   *    showAxes: false,
   *    showGrid: false,
   *    showStats: false,
   *  },
   * });
   */
  class Simulation {
    /**
     * @param {HTMLElement} simulationElt The container for this simulation.
     * @param {Object} options for simulation
     * @param {String} basePath Path to simulation assets and data
     * @param {Date} options.startDate The start date and time for this
     * simulation.
     * @param {Number} options.jd The JD date of this simulation.
     * Defaults to 0
     * @param {Number} options.jdDelta The number of JD to add every tick of
     * the simulation.
     * @param {Number} options.jdPerSecond The number of jd to add every
     * second. Use this instead of `jdDelta` for constant motion that does not
     * vary with framerate. Defaults to 100
     * @param {boolean} options.startPaused Whether the simulation should start
     * in a paused state.
     * @param {Number} options.maxNumParticles The maximum number of particles in
     * the visualization. Try choosing a number that is larger than your
     * particles, but not too much larger. It's usually good enough to choose the
     * next highest power of 2. If you're not showing many particles (tens of
     * thousands+), you don't need to worry about this.
     * @param {Object} options.camera Options for camera
     * @param {Array.<Number>} options.camera.initialPosition Initial X, Y, Z
     * coordinates of the camera. Defaults to [0, -10, 5].
     * @param {boolean} options.camera.enableDrift Set true to have the camera
     * float around slightly. False by default.
     * @param {Object} options.debug Options dictating debug state.
     * @param {boolean} options.debug.showAxes Show X, Y, and Z axes
     * @param {boolean} options.debug.showGrid Show grid on XY plane
     * @param {boolean} options.debug.showStats Show FPS and other stats
     * (requires stats.js).
     */
    constructor(simulationElt, options) {
      this._simulationElt = simulationElt;
      this._options = options || {};

      this._jd = this._options.jd || julian.toJulianDay(this._options.startDate) || 0;
      this._jdDelta = this._options.jdDelta;
      this._jdPerSecond = this._options.jdPerSecond || 100;
      this._isPaused = options.startPaused || false;
      this.onTick = null;

      this._scene = null;
      this._renderer = null;

      this._enableCameraDrift = false;
      this._cameraDefaultPos = [0, -10, 5];
      if (this._options.camera) {
        this._enableCameraDrift = !!this._options.camera.enableDrift;
        this._cameraDefaultPos = this._options.camera.initialPosition || this._cameraDefaultPos;
      }

      this._camera = null;
      this._cameraControls = null;

      this._subscribedObjects = {};
      this._particles = null;

      this._renderEnabled = true;
      this._boundAnimate = this.animate.bind(this);

      // stats.js panel
      this._stats = null;
      this._fps = 1;
      this._lastUpdatedTime = Date.now();

      this.init();
      this.animate();
    }

    /**
     * @private
     */
    init() {
      this.initRenderer();

      // Misc
      // This makes controls.lookAt and other objects treat the positive Z axis
      // as "up" direction.
      THREE.Object3D.DefaultUp = new THREE.Vector3(0, 0, 1);

      // Scene
      this._scene = new THREE.Scene();

      // Camera
      this._camera = new Camera(this.getContext()).get3jsCamera();
      this._camera.position.set(this._cameraDefaultPos[0],
        this._cameraDefaultPos[1],
        this._cameraDefaultPos[2]);
      window.cam = this._camera;

      // Controls
      // TODO(ian): Set maxDistance to prevent camera farplane cutoff.
      // See https://discourse.threejs.org/t/camera-zoom-to-fit-object/936/6
      this._cameraControls = new THREE.TrackballControls(this._camera, this._simulationElt);
      this._cameraControls.userPanSpeed = 20;
      this._cameraControls.rotateSpeed = 2;

      // Events
      this._simulationElt.onmousedown = this._simulationElt.ontouchstart = () => {
        // When user begins interacting with the visualization, disable camera
        // drift.
        this._enableCameraDrift = false;
      };

      // Helper
      if (this._options.debug) {
        if (this._options.debug.showGrid) {
          const gridHelper = new THREE.GridHelper();
          gridHelper.geometry.rotateX(Math.PI / 2);
          this._scene.add(gridHelper);
        }
        if (this._options.debug.showAxes) {
          this._scene.add(new THREE.AxesHelper(0.5));
        }
        if (this._options.debug.showStats) {
          this._stats = new Stats();
          this._stats.showPanel(0);
          this._simulationElt.appendChild(this._stats.dom);
        }
      }

      // Orbit particle system must be initialized after scene is created.
      this._particles = new SpaceParticles({
        textureUrl: '{{assets}}/sprites/smallparticle.png',
        jd: this._jd,
        maxNumParticles: this._options.maxNumParticles,
      }, this);
    }

    /**
     * @private
     */
    initRenderer() {
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(this._simulationElt.offsetWidth, this._simulationElt.offsetHeight);

      this._simulationElt.appendChild(renderer.domElement);

      this._renderer = renderer;
    }

    /**
     * @private
     */
    update() {
      for (const objId in this._subscribedObjects) {
        if (this._subscribedObjects.hasOwnProperty(objId)) {
          this._subscribedObjects[objId].update(this._jd);
        }
      }
    }

    /**
     * @private
     */
    doCameraDrift() {
      // Follow floating path around
      const timer = 0.0001 * Date.now();
      const pos = this._cameraDefaultPos;
      this._camera.position.x = pos[0] + pos[0] * (Math.cos(timer) + 1) / 3;
      this._camera.position.z = pos[2] + pos[2] * (Math.sin(timer) + 1) / 3;
    }

    /**
     * @private
     */
    animate() {
      if (!this._renderEnabled) {
        return;
      }

      window.requestAnimationFrame(this._boundAnimate);

      if (this._stats) {
        this._stats.begin();
      }

      if (!this._isPaused) {
        if (this._jdDelta) {
          this._jd += this._jdDelta;
        } else {
          // N jd per second
          this._jd += (this._jdPerSecond) / this._fps;
        }

        const timeDelta = (Date.now() - this._lastUpdatedTime) / 1000;
        this._lastUpdatedTime = Date.now();
        this._fps = (1 / timeDelta) || 1;
      }

      // Update objects in this simulation
      this.update();
      // Update camera drifting, if applicable
      if (this._enableCameraDrift) {
        this.doCameraDrift();
      }
      // Handle trackball movements
      this._cameraControls.update();
      // Update three.js scene
      this._renderer.render(this._scene, this._camera);

      if (this.onTick) {
        this.onTick();
      }

      if (this._stats) {
        this._stats.end();
      }
    }

    /**
     * Add a spacekit object (usually a SpaceObject) to the visualization.
     * @see SpaceObject
     * @param {Object} obj Object to add to visualization
     * @param {boolean} noUpdate Set to true if object does not need to be
     * animated.
     */
    addObject(obj, noUpdate = false) {
      obj.get3jsObjects().map((x) => {
        this._scene.add(x);
      });

      if (!noUpdate) {
        // Call for updates as time passes.
        this._subscribedObjects[obj.getId()] = obj;
      }
    }

    /**
     * Removes an object from the visualization.
     * @param {Object} obj Object to remove
     */
    removeObject(obj) {
      // TODO(ian): test this and avoid memory leaks...
      obj.get3jsObjects().map((x) => {
        this._scene.remove(x);
      });

      delete this._subscribedObjects[obj.getId()];
    }

    /**
     * Shortcut for creating a new SpaceObject belonging to this visualization.
     * Takes any SpaceObject arguments.
     * @see SpaceObject
     */
    createObject(...args) {
      return new SpaceObject(...args, this);
    }

    /**
     * Shortcut for creating a new ShapeObject belonging to this visualization.
     * Takes any ShapeObject arguments.
     * @see ShapeObject
     */
    createShape(...args) {
      return new ShapeObject(...args, this);
    }

    /**
     * Shortcut for creating a new Skybox belonging to this visualization. Takes
     * any Skybox arguments.
     * @see Skybox
     */
    createSkybox(...args) {
      return new Skybox(...args, this);
    }

    /**
     * Shortcut for creating a new Stars object belonging to this visualization.
     * Takes any Stars arguments.
     * @see Stars
     */
    createStars(...args) {
      if (args.length) {
        return new Stars(...args, this);
      }
      // No arguments supplied
      return new Stars({}, this);
    }

    /**
     * Creates an ambient light source. This will dimly light everything in the
     * visualization.
     * @param {Number} color Color of light, default 0x333333
     */
    createAmbientLight(color = 0x333333) {
      this._scene.add(new THREE.AmbientLight(color));
    }

    /**
     * Creates a light source. This will make the shape of your objects visible
     * and provide some contrast.
     * @param {Array.<Number>} pos Position of light source. Defaults to moving
     * with camera.
     * @param {Number} color Color of light, default 0xFFFFFF
     */
    createLight(pos = undefined, color = 0xFFFFFF) {
      const pointLight = new THREE.PointLight(color, 1, 0, 2);
      if (typeof pos !== 'undefined') {
        pointLight.position.set(pos[0], pos[1], pos[2]);
      } else {
        this._cameraControls.addEventListener('change', () => {
          pointLight.position.copy(this._camera.position);
        });
      }
      this._scene.add(pointLight);
    }

    /**
     * Installs a scroll handler that only renders the visualization while it is
     * in the user's viewport.
     *
     * The scroll handler currently binds to the window object only.
     */
    renderOnlyInViewport() {
      let previouslyInView = true;
      const isInView = () => {
        const rect = this._simulationElt.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
        const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

        return (vertInView && horInView);
      };

      window.addEventListener('scroll', () => {
        const inView = isInView();
        if (previouslyInView && !inView) {
          // Went out of view
          this._renderEnabled = false;
          previouslyInView = false;
        } else if (!previouslyInView && inView) {
          // Came into view
          this._renderEnabled = true;
          window.requestAnimationFrame(this._boundAnimate);
          previouslyInView = true;
        }
      });

      if (!isInView()) {
        // Initial state is render enabled, so disable it if currently out of
        // view.
        this._renderEnabled = false;
        previouslyInView = false;
      }
    }

    /**
     * Adjust camera position so that the object fits within the viewport. If
     * applicable, this function will fit around the object's orbit.
     * @param {SpaceObject} spaceObj Object to fit within viewport.
     * @param {Number} offset Add some extra room in the viewport. Increase to be
     * further zoomed out, decrease to be closer. Default 3.0.
     */
    zoomToFit(spaceObj, offset = 3.0) {
      const checkZoomFit = () => {
        const orbit = spaceObj.getOrbit();
        const obj = orbit ? orbit.getEllipse() : spaceObj.get3jsObjects()[0];
        if (obj) {
          this.doZoomToFit(obj, offset);
          return true;
        }
        return false;
      };

      // Wait until the object has been fully created.
      const bePatient = () => {
        if (!checkZoomFit()) {
          setTimeout(() => {
            bePatient();
          }, 100);
        }
      };
      bePatient();
    }

    /**
     * @private
     * Perform the actual zoom to fit behavior.
     * @param {SpaceObject} spaceObj Object to fit within viewport.
     * @param {Number} offset Add some extra room in the viewport. Increase to be
     * further zoomed out, decrease to be closer. Default 3.0.
     */
    doZoomToFit(obj, offset) {
      const boundingBox = new THREE.Box3();
      boundingBox.setFromObject(obj);

      const center = new THREE.Vector3();
      boundingBox.getCenter(center);
      const size = new THREE.Vector3();
      boundingBox.getSize(size);

      // Get the max side of the bounding box (fits to width OR height as needed)
      const camera = this._camera;
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      const cameraZ = Math.abs(maxDim / 2 * Math.tan(fov * 2)) * offset;

      const objectWorldPosition = new THREE.Vector3();
      obj.getWorldPosition(objectWorldPosition);
      const directionVector = camera.position.sub(objectWorldPosition); 	// Get vector from camera to object
      const unitDirectionVector = directionVector.normalize(); // Convert to unit vector

      const newpos = unitDirectionVector.multiplyScalar(cameraZ);
      camera.position.x = newpos.x;
      camera.position.y = newpos.y;
      camera.position.z = newpos.z;
      camera.updateProjectionMatrix();

      // Update default camera pos so if drift is on, camera will drift around
      // its new position.
      this._cameraDefaultPos = [newpos.x, newpos.y, newpos.z];
    }

    /**
     * Run the animation
     */
    start() {
      this._lastUpdatedTime = Date.now();
      this._isPaused = false;
    }

    /**
     * Stop the animation
     */
    stop() {
      this._isPaused = true;
    }

    /**
     * Gets the current JD date of the simulation
     * @return {Number} JD date
     */
    getJd() {
      return this._jd;
    }

    /**
     * Sets the JD date of the simulation.
     * @param {Number} val JD date
     */
    setJd(val) {
      this._jd = val;
    }

    /**
     * Get a date object representing current date and time of the simulation.
     * @return {Date} Date of simulation
     */
    getDate() {
      return julian.toDate(this._jd);
    }

    /**
     * Set the date and time of the simulation.
     * @param {Date} date Date of simulation
     */
    setDate(date) {
      this.setJd(julian.toJulianDay(date));
    }

    /**
     * Get the JD per frame of the visualization.
     */
    getJdDelta() {
      if (!this._jdDelta) {
        return this._jdPerSecond / this._fps;
      }
      return this._jdDelta;
    }

    /**
     * Set the JD per frame of the visualization. This will override any
     * existing "JD per second" setting.
     * @param {Number} delta JD per frame
     */
    setJdDelta(delta) {
      this._jdDelta = delta;
    }

    /**
     * Get the JD change per second of the visualization.
     * @return {Number} JD per second
     */
    getJdPerSecond() {
      if (this._jdDelta) {
        // Jd per second can vary
        return undefined;
      }
      return this._jdPerSecond;
    }

    /**
     * Set the JD change per second of the visualization.
     * @return {Number} x JD per second
     */
    setJdPerSecond(x) {
      // Delta overrides jd per second, so unset it.
      this._jdDelta = undefined;

      this._jdPerSecond = x;
    }

    /**
     * Get an object that contains useful context for this visualization
     * @return {Object} Context object
     */
    getContext() {
      return {
        options: this._options,
        objects: {
          particles: this._particles,
          camera: this._camera,
        },
        container: {
          width: this._simulationElt.offsetWidth,
          height: this._simulationElt.offsetHeight,
        },
      };
    }

    /**
     * Get the element containing this simulation
     * @return {HTMLElement} The html container of this simulation
     */
    getSimulationElement() {
      return this._simulationElt;
    }

    /**
     * Get the three.js camera
     * @return {THREE.Camera} The THREE.js camera object
     */
    getCamera() {
      return this._camera;
    }

    /**
     * Get the three.js scene object
     * @return {THREE.Scene} The THREE.js scene object
     */
    getScene() {
      return this._scene;
    }

    /**
     * Get the three.js controls
     * @return {THREE.TrackballControls} THREE.js controls object
     */
    getControls() {
      return this._cameraControls;
    }

    /**
     * Enable or disable camera drift.
     * @param {boolean} driftOn True if you want the camera to float around a bit
     */
    setCameraDrift(driftOn) {
      this._enableCameraDrift = driftOn;
    }
  }

  exports.Camera = Camera;
  exports.sphericalToCartesian = sphericalToCartesian;
  exports.equatorialToEcliptic_Cartesian = equatorialToEcliptic_Cartesian;
  exports.getNutationAndObliquity = getNutationAndObliquity;
  exports.getObliquity = getObliquity;
  exports.Ephem = Ephem;
  exports.GM = GM;
  exports.EphemPresets = EphemPresets;
  exports.Orbit = Orbit;
  exports.Simulation = Simulation;
  exports.Skybox = Skybox;
  exports.SkyboxPresets = SkyboxPresets;
  exports.SpaceObject = SpaceObject;
  exports.SpaceObjectPresets = SpaceObjectPresets;
  exports.SpaceParticles = SpaceParticles;
  exports.Stars = Stars;
  exports.rad = rad;
  exports.deg = deg;
  exports.hoursToDeg = hoursToDeg;
  exports.sexagesimalToDecimalRa = sexagesimalToDecimalRa;
  exports.sexagesimalToDecimalDec = sexagesimalToDecimalDec;
  exports.decimalToSexagesimalRa = decimalToSexagesimalRa;
  exports.decimalToSexagesimalDec = decimalToSexagesimalDec;

  return exports;

}({}));
