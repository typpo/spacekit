import * as THREE from 'three';
import julian from 'julian';

import { rescaleArray, rescaleXYZ } from './Scale';
import { EphemerisTable } from './EphemerisTable';

const sin = Math.sin;
const cos = Math.cos;
const sqrt = Math.sqrt;

const DEFAULT_LEAD_TRAIL_YEARS = 10;
const DEFAULT_SAMPLE_POINTS = 360;
const DEFAULT_ORBIT_PATH_SETTINGS = {
  leadDurationYears: DEFAULT_LEAD_TRAIL_YEARS,
  trailDurationYears: DEFAULT_LEAD_TRAIL_YEARS,
  numberSamplePoints: DEFAULT_SAMPLE_POINTS,
};

/**
 * Special cube root function that assumes input is always positive.
 */
function cbrt(x) {
  return Math.exp(Math.log(x) / 3.0);
}

/**
 * Enum of orbital types.
 */
export const OrbitType = Object.freeze({
  UNKNOWN: 0,
  PARABOLIC: 1,
  HYPERBOLIC: 2,
  ELLIPTICAL: 3,
  TABLE: 4,
});

/**
 * Get the type of orbit. Returns one of OrbitType.PARABOLIC, HYPERBOLIC,
 * ELLIPTICAL, or UNKNOWN.
 * @return {OrbitType} Name of orbit type
 */
export function getOrbitType(ephem) {
  if (ephem instanceof EphemerisTable) {
    return OrbitType.TABLE;
  }

  let e = ephem.get('e');
  if (e > 0.8 && e < 1.2) {
    return OrbitType.PARABOLIC;
  } else if (e > 1.2) {
    return OrbitType.HYPERBOLIC;
  } else {
    return OrbitType.ELLIPTICAL;
  }
}

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
export class Orbit {
  /**
   * @param {(Ephem | EphemerisTable)} ephem The ephemerides that define this orbit.
   * @param {Object} options
   * @param {Object} options.color The color of the orbital ellipse.
   * @param {Object} options.orbitPathSettings settings for the path
   * @param {Object} options.orbitPathSettings.leadDurationYears orbit path lead time in years
   * @param {Object} options.orbitPathSettings.trailDurationYears orbit path trail time in years
   * @param {Object} options.orbitPathSettings.numberSamplePoints number of points to use when drawing the orbit line
   * Only applicable for non-elliptical and ephemeris table orbits.
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
     * configuring orbit path lead/trail data
     */
    if (!this._options.orbitPathSettings) {
      this._options.orbitPathSettings = JSON.parse(
        JSON.stringify(DEFAULT_ORBIT_PATH_SETTINGS),
      );
    }

    if (!this._options.orbitPathSettings.leadDurationYears) {
      this._options.orbitPathSettings.leadDurationYears = DEFAULT_LEAD_TRAIL_YEARS;
    }

    if (!this._options.orbitPathSettings.trailDurationYears) {
      this._options.orbitPathSettings.trailDurationYears = DEFAULT_LEAD_TRAIL_YEARS;
    }

    if (!this._options.orbitPathSettings.numberSamplePoints) {
      this._options.orbitPathSettings.numberSamplePoints = DEFAULT_SAMPLE_POINTS;
    }

    /**
     * Cached orbital points.
     * @type {Array.<THREE.Vector3>}
     */
    this._orbitPoints = null;

    /**
     * Cached ecliptic drop lines.
     * @type {Array.<THREE.Vector3>}
     */
    this._eclipticDropLines = null;

    /**
     * Cached orbit shape.
     * @type {THREE.Line}
     */
    this._orbitShape = null;

    /**
     * Time span of the drawn orbit line
     */
    this._orbitStart = 0;
    this._orbitStop = 0;
  }

  /**
   * Get heliocentric position of object at a given JD.
   * @param {Number} jd Date value in JD.
   * @param {boolean} debug Set true for debug output.
   * @return {Array.<Number>} [X, Y, Z] coordinates
   */
  getPositionAtTime(jd, debug) {
    // Note: logic below must match the vertex shader.

    // This position calculation is used to create orbital ellipses.
    switch (getOrbitType(this._ephem)) {
      case OrbitType.PARABOLIC:
        return this.getPositionAtTimeNearParabolic(jd, debug);
      case OrbitType.HYPERBOLIC:
        return this.getPositionAtTimeHyperbolic(jd, debug);
      case OrbitType.ELLIPTICAL:
        return this.getPositionAtTimeElliptical(jd, debug);
      case OrbitType.TABLE:
        return this.getPositionAtTimeTable(jd, debug);
    }
    throw new Error('No handler for this type of orbit');
  }

  getPositionAtTimeParabolic(jd, debug) {
    // See https://stjarnhimlen.se/comp/ppcomp.html#17
    const eph = this._ephem;

    // The Guassian gravitational constant
    const k = 0.01720209895;

    // Perihelion distance
    const q = eph.get('q');

    // Compute time since perihelion
    const d = jd - eph.get('tp');

    const H = (d * (k / sqrt(2))) / sqrt(q * q * q);
    const h = 1.5 * H;
    const g = sqrt(1.0 + h * h);
    const s = cbrt(g + h) - cbrt(g - h);

    // True anomaly
    const v = 2.0 * Math.atan(s);
    // Heliocentric distance
    const r = q * (1.0 + s * s);

    return this.vectorToHeliocentric(v, r);
  }

  getPositionAtTimeNearParabolic(jd, debug) {
    // See https://stjarnhimlen.se/comp/ppcomp.html#17
    const eph = this._ephem;

    // The Guassian gravitational constant
    const k = 0.01720209895;

    // Eccentricity
    const e = eph.get('e');

    // Perihelion distance
    const q = eph.get('q');

    // Compute time since perihelion
    const d = jd - eph.get('tp');

    const a = 0.75 * d * k * sqrt((1 + e) / (q * q * q));
    const b = sqrt(1 + a * a);
    const W = cbrt(b + a) - cbrt(b - a);
    const f = (1 - e) / (1 + e);

    const a1 = 2 / 3 + (2 / 5) * W * W;
    const a2 = 7 / 5 + (33 / 35) * W * W + (37 / 175) * W ** 4;
    const a3 =
      W * W * (432 / 175 + (956 / 1125) * W * W + (84 / 1575) * W ** 4);

    const C = (W * W) / (1 + W * W);
    const g = f * C * C;
    const w = W * (1 + f * C * (a1 + a2 * g + a3 * g * g));

    // True anomaly
    const v = 2 * Math.atan(w);
    // Heliocentric distance
    const r = (q * (1 + w * w)) / (1 + w * w * f);

    return this.vectorToHeliocentric(v, r);
  }

  getPositionAtTimeHyperbolic(jd, debug) {
    // See https://stjarnhimlen.se/comp/ppcomp.html#17
    const eph = this._ephem;

    // Eccentricity
    const e = eph.get('e');

    // Perihelion distance
    const q = eph.get('q');

    // Semimajor axis
    const a = eph.get('a');

    // Mean anomaly
    const ma = eph.get('ma');

    // Calculate mean anomaly at jd
    const n = eph.get('n', 'rad');
    const epoch = eph.get('epoch');
    const d = jd - epoch;

    const M = ma + n * d;

    let F0 = M;
    for (let count = 0; count < 100; count++) {
      const F1 =
        (M + e * (F0 * Math.cosh(F0) - Math.sinh(F0))) /
        (e * Math.cosh(F0) - 1);
      const lastdiff = Math.abs(F1 - F0);
      F0 = F1;

      if (lastdiff < 0.0000001) {
        break;
      }
    }
    const F = F0;

    const v = 2 * Math.atan(sqrt((e + 1) / (e - 1))) * Math.tanh(F / 2);
    const r = (a * (1 - e * e)) / (1 + e * cos(v));

    return this.vectorToHeliocentric(v, r);
  }

  getPositionAtTimeElliptical(jd, debug) {
    const eph = this._ephem;

    // Eccentricity
    const e = eph.get('e');

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
    for (let count = 0; count < 100; count++) {
      const E1 = M + e * sin(E0);
      const lastdiff = Math.abs(E1 - E0);
      E0 = E1;

      if (lastdiff < 0.0000001) {
        break;
      }
    }
    const E = E0;
    const v = 2 * Math.atan(sqrt((1 + e) / (1 - e)) * Math.tan(E / 2));

    // Radius vector, in AU
    const a = eph.get('a');
    const r = (a * (1 - e * e)) / (1 + e * cos(v));

    return this.vectorToHeliocentric(v, r);
  }

  getPositionAtTimeTable(jd, debug) {
    const point = this._ephem.getPositionAtTime(jd);
    return rescaleXYZ(point[0], point[1], point[2]);
  }

  /**
   * Given true anomaly and heliocentric distance, returns the scaled heliocentric coordinates (X, Y, Z)
   * @param {Number} v True anomaly
   * @param {Number} r Heliocentric distance
   * @return {Array.<Number>} Heliocentric coordinates
   */
  vectorToHeliocentric(v, r) {
    const eph = this._ephem;

    // Inclination, Longitude of ascending node, Longitude of perihelion
    const i = eph.get('i', 'rad');
    const o = eph.get('om', 'rad');
    const p = eph.get('wBar', 'rad');

    // Heliocentric coords
    const X = r * (cos(o) * cos(v + p - o) - sin(o) * sin(v + p - o) * cos(i));
    const Y = r * (sin(o) * cos(v + p - o) + cos(o) * sin(v + p - o) * cos(i));
    const Z = r * (sin(v + p - o) * sin(i));

    return rescaleXYZ(X, Y, Z);
  }

  /**
   * Returns whether the requested epoch is within the current orbit's definition
   * @param jd
   * @returns {boolean|boolean} true if it is within the orbit span, false if not
   */
  timeInRenderedOrbitSpan(jd) {
    return jd >= this._orbitStart && jd <= this._orbitStop;
  }

  /**
   * Calculates, caches, and returns the orbit state for this orbit around this time
   * @param jd center time of the orbit (only used for ephemeris table ephemeris)
   * @param forceCompute forces the recomputing of the orbit on this call
   * @returns {THREE.Line}
   */
  getOrbitShape(jd, forceCompute = false) {
    // For hyperbolic and parabolic orbits, decide on a time range to draw
    // them.
    // TODO(ian): Should we compute around current position, not time of perihelion?
    const orbitType = getOrbitType(this._ephem);
    const tp = orbitType === OrbitType.TABLE ? jd : this._ephem.get('tp');
    const centerDate = tp ? tp : julian.toJulianDay(new Date());
    const startJd =
      centerDate - this._options.orbitPathSettings.trailDurationYears * 365.0;
    const endJd =
      centerDate + this._options.orbitPathSettings.leadDurationYears * 365.0;
    const step =
      (endJd - startJd) / this._options.orbitPathSettings.numberSamplePoints;

    this._orbitStart = startJd;
    this._orbitStop = endJd;

    if (forceCompute) {
      this._orbitShape = undefined;
      this._eclipticDropLines = undefined;
    }

    if (this._orbitShape) {
      return this._orbitShape;
    }

    switch (orbitType) {
      case OrbitType.HYPERBOLIC:
        return this.getLine(
          this.getPositionAtTimeHyperbolic.bind(this),
          startJd,
          endJd,
          step,
        );
      case OrbitType.PARABOLIC:
        return this.getLine(
          this.getPositionAtTimeNearParabolic.bind(this),
          startJd,
          endJd,
          step,
        );
      case OrbitType.ELLIPTICAL:
        return this.getEllipse();
      case OrbitType.TABLE:
        return this.getTableOrbit(startJd, endJd, step);
    }
    throw new Error('Unknown orbit shape');
  }

  /**
   * Compute a line between a given date range.
   * @private
   */
  getLine(orbitFn, startJd, endJd, step) {
    const points = [];
    for (let jd = startJd; jd <= endJd; jd += step) {
      const pos = orbitFn(jd);
      points.push(new THREE.Vector3(pos[0], pos[1], pos[2]));
    }

    const pointsGeometry = new THREE.Geometry();
    pointsGeometry.vertices = points;

    return this.generateAndCacheOrbitShape(pointsGeometry);
  }

  /**
   * Returns the orbit for a table lookup orbit definition
   * @private
   * @param startJd start of orbit in JDate format
   * @param stopJd end of orbit in JDate format
   * @param step step size in days
   * @returns {THREE.Line}
   */
  getTableOrbit(startJd, stopJd, step) {
    const rawPoints = this._ephem.getPositions(startJd, stopJd, step);
    const points = rawPoints
      .map(values => rescaleArray(values))
      .map(values => new THREE.Vector3(values[0], values[1], values[2]));
    const pointGeometry = new THREE.Geometry();
    pointGeometry.vertices = points;

    return this.generateAndCacheOrbitShape(pointGeometry);
  }

  /**
   * @private
   * @return {THREE.Line} The ellipse object that represents this orbit.
   */
  getEllipse() {
    const pointGeometry = this.getEllipsePoints();
    return this.generateAndCacheOrbitShape(pointGeometry);
  }

  /**
   * @private
   * @return {Array.<THREE.Vector3>} List of points
   */
  getEllipsePoints() {
    const eph = this._ephem;

    const period = eph.get('period');
    const ecc = eph.get('e');
    const step = period / this._options.orbitPathSettings.numberSamplePoints;

    const pts = [];
    let prevPos;
    for (let time = 0; time < period; time += step) {
      const pos = this.getPositionAtTime(time);
      if (isNaN(pos[0]) || isNaN(pos[1]) || isNaN(pos[2])) {
        console.error(
          'NaN position value - you may have bad or incomplete data in the following ephemeris:',
        );
        console.error(eph);
      }
      const vector = new THREE.Vector3(pos[0], pos[1], pos[2]);
      if (
        prevPos &&
        Math.abs(prevPos[0] - pos[0]) +
          Math.abs(prevPos[1] - pos[1]) +
          Math.abs(prevPos[2] - pos[2]) >
          120
      ) {
        // Don't render bogus or very large ellipses.
        points.vertices = [];
        return points;
      }
      prevPos = pos;
      pts.push(vector);
    }
    pts.push(pts[0]);

    const pointGeometry = new THREE.Geometry();
    pointGeometry.vertices = pts;
    return pointGeometry;
  }

  /**
   * @private
   */
  generateAndCacheOrbitShape(pointGeometry) {
    this._orbitPoints = pointGeometry;
    this._orbitShape = new THREE.Line(
      pointGeometry,
      new THREE.LineBasicMaterial({
        color: new THREE.Color(this._options.color || 0x444444),
      }),
      THREE.LineStrip,
    );
    return this._orbitShape;
  }

  /**
   * A geometry containing line segments that run between the orbit ellipse and
   * the ecliptic plane of the solar system. This is a useful visual effect
   * that makes it easy to tell when an orbit goes below or above the ecliptic
   * plane.
   * @return {THREE.Geometry} A geometry with many line segments.
   */
  getLinesToEcliptic() {
    if (this._eclipticDropLines) {
      return this._eclipticDropLines;
    }

    if (!this._orbitPoints) {
      this.getOrbitShape();
    }
    const points = this._orbitPoints;
    const geometry = new THREE.Geometry();

    points.vertices.forEach(vertex => {
      geometry.vertices.push(vertex);
      geometry.vertices.push(new THREE.Vector3(vertex.x, vertex.y, 0));
    });

    this._eclipticDropLines = new THREE.LineSegments(
      geometry,
      new THREE.LineBasicMaterial({
        color: this._options.eclipticLineColor || 0x333333,
      }),
      THREE.LineStrip,
    );

    return this._eclipticDropLines;
  }

  /**
   * Get the color of this orbit.
   * @return {Number} The hexadecimal color of the orbital ellipse.
   */
  getHexColor() {
    return this._orbitShape.material.color.getHex();
  }

  /**
   * @param {Number} hexVal The hexadecimal color of the orbital ellipse.
   */
  setHexColor(hexVal) {
    this._orbitShape.material.color = new THREE.Color(hexVal);
  }

  /**
   * Get the visibility of this orbit.
   * @return {boolean} Whether the orbital ellipse is visible. Note that
   * although the ellipse may not be visible, it is still present in the
   * underlying Scene and Simultation.
   */
  getVisibility() {
    return this._orbitShape.visible;
  }

  /**
   * Change the visibility of this orbit.
   * @param {boolean} val Whether to show the orbital ellipse.
   */
  setVisibility(val) {
    this._orbitShape.visible = val;
  }
}
