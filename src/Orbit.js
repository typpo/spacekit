import * as THREE from 'three';
import julian from 'julian';

import { rescaleXYZ } from './Scale';

const pi = Math.PI;
const sin = Math.sin;
const cos = Math.cos;
const sqrt = Math.sqrt;

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
  PARABOLIC: 1,
  HYPERBOLIC: 2,
  ELLIPTICAL: 3,
  UNKNOWN: 4,
});

/**
 * Get the type of orbit. Returns one of OrbitType.PARABOLIC, HYPERBOLIC,
 * ELLIPTICAL, or UNKNOWN.
 * @return {OrbitType} Name of orbit type
 */
export function getOrbitType(ephem) {
  let e = ephem.get('e');
  if (e > 0.8 && e < 1.2) {
    return OrbitType.PARABOLIC;
  } else if (e > 1.2) {
    return OrbitType.HYPERBOLIC;
  } else {
    return OrbitType.ELLIPTICAL;
  }
  return OrbitType.UNKNOWN;
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
    this._ellipsePoints = null;

    /**
     * Cached ellipse.
     * @type {THREE.Line}
     */
    this._orbitShape = null;
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

  getOrbitShape() {
    // For hyperbolic and parabolic orbits, decide on a time range to draw
    // them.
    // TODO(ian): Should we compute around current position, not time of perihelion?
    const tp = this._ephem.get('tp');
    const centerDate = tp ? julian.toDate(tp) : new Date();

    // Default to +- 10 years
    // TODO(ian): A way to configure this logic
    const startJd = julian.toJulianDay(
      new Date(
        centerDate.getFullYear() - 10,
        centerDate.getMonth(),
        centerDate.getDate(),
      ),
    );
    const endJd = julian.toJulianDay(
      new Date(
        centerDate.getFullYear() + 10,
        centerDate.getMonth(),
        centerDate.getDate(),
      ),
    );

    switch (getOrbitType(this._ephem)) {
      case OrbitType.HYPERBOLIC:
        return this.getLine(
          this.getPositionAtTimeHyperbolic.bind(this),
          startJd,
          endJd,
        );
      case OrbitType.PARABOLIC:
        return this.getLine(
          this.getPositionAtTimeNearParabolic.bind(this),
          startJd,
          endJd,
        );
      case OrbitType.ELLIPTICAL:
        return this.getEllipse();
    }
    throw new Error('Unknown orbit shape');
  }

  /**
   * Compute a line between a given date range.
   */
  getLine(orbitFn, startJd, endJd, step) {
    if (this._orbitShape) {
      return this._orbitShape;
    }

    const loopStep = step ? step : (endJd - startJd) / 1000.0;
    const points = [];
    for (let jd = startJd; jd <= endJd; jd += loopStep) {
      const pos = orbitFn(jd);
      points.push(new THREE.Vector3(pos[0], pos[1], pos[2]));
    }
    console.info('Computed', points.length, 'segements for line orbit');

    const pointsGeometry = new THREE.Geometry();
    pointsGeometry.vertices = points;

    this._orbitShape = new THREE.Line(
      pointsGeometry,
      new THREE.LineBasicMaterial({
        color: new THREE.Color(this._options.color || 0x444444),
      }),
      THREE.LineStrip,
    );
    return this._orbitShape;
  }

  /**
   * @return {THREE.Line} The ellipse object that represents this orbit.
   */
  getEllipse() {
    if (this._orbitShape) {
      return this._orbitShape;
    }
    const pointGeometry = this.getEllipsePoints();
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
   * @private
   * @return {Array.<THREE.Vector3>} List of points
   */
  getEllipsePoints() {
    if (this._ellipsePoints) {
      return this._ellipsePoints;
    }

    const eph = this._ephem;

    const period = eph.get('period');
    const ecc = eph.get('e');
    // const minSegments = ecc > 0.4 ? 100 : 50;
    const minSegments = 360;
    const numSegments = Math.max(period / 8, minSegments);
    const step = period / numSegments;

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

    this._ellipsePoints = new THREE.Geometry();
    this._ellipsePoints.vertices = pts;

    return this._ellipsePoints;
  }

  /**
   * A geometry containing line segments that run between the orbit ellipse and
   * the ecliptic plane of the solar system. This is a useful visual effect
   * that makes it easy to tell when an orbit goes below or above the ecliptic
   * plane.
   * @return {THREE.Geometry} A geometry with many line segments.
   */
  getLinesToEcliptic() {
    const points = this.getEllipsePoints();
    const geometry = new THREE.Geometry();

    points.vertices.forEach(vertex => {
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
