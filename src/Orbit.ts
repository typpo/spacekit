import * as THREE from 'three';
import julian from 'julian';

import EphemerisTable from './EphemerisTable';
import { Ephem } from './Ephem';
import { rescaleArray, rescaleXYZ } from './Scale';

import type { Coordinate3d } from './Coordinates';

import type { LineBasicMaterial } from 'three';

export enum OrbitType {
  UNKNOWN = 0,
  PARABOLIC = 1,
  HYPERBOLIC = 2,
  ELLIPTICAL = 3,
  TABLE = 4,
}

interface OrbitOptions {
  color?: number;
  eclipticLineColor?: number;
  orbitPathSettings?: {
    leadDurationYears?: number;
    trailDurationYears?: number;
    numberSamplePoints?: number;
  };
}

const { sin, cos, sqrt } = Math;

const DEFAULT_LEAD_TRAIL_YEARS = 10;
const DEFAULT_SAMPLE_POINTS = 360;
const DEFAULTorbit_PATH_SETTINGS = {
  leadDurationYears: DEFAULT_LEAD_TRAIL_YEARS,
  trailDurationYears: DEFAULT_LEAD_TRAIL_YEARS,
  numberSamplePoints: DEFAULT_SAMPLE_POINTS,
};
const MAX_NUM_ECLIPTIC_DROPLINES = 90;

/**
 * Special cube root function that assumes input is always positive.
 */
function cbrt(x) {
  return Math.exp(Math.log(x) / 3.0);
}

/**
 * Get the type of orbit. Returns one of OrbitType.PARABOLIC, HYPERBOLIC,
 * ELLIPTICAL, or UNKNOWN.
 * @param {(Ephem | EphemerisTable)} Ephemeris
 * @return {OrbitType} Name of orbit type
 */
export function getOrbitType(ephem: Ephem | EphemerisTable): OrbitType {
  if (ephem instanceof EphemerisTable) {
    return OrbitType.TABLE;
  }

  const e = ephem.get('e');
  if (e > 0.9 && e < 1.2) {
    return OrbitType.PARABOLIC;
  }
  if (e > 1.2) {
    return OrbitType.HYPERBOLIC;
  }
  return OrbitType.ELLIPTICAL;
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
  private ephem: Ephem | EphemerisTable;

  private options: OrbitOptions;

  private orbitPoints?: THREE.Geometry;

  private eclipticDropLines?: THREE.LineSegments;

  private orbitShape?: THREE.Line;

  private orbitStart?: number;

  private orbitStop: number;

  private orbitType: OrbitType;

  /**
   * @param {(Ephem | EphemerisTable)} ephem The ephemerides that define this orbit.
   * @param {Object} options
   * @param {Number} options.color The color of the orbital ellipse.
   * @param {Number} options.eclipticLineColor The color of lines drawn
   * @param {Object} options.orbitPathSettings settings for the path
   * @param {Number} options.orbitPathSettings.leadDurationYears orbit path lead time in years
   * @param {Number} options.orbitPathSettings.trailDurationYears orbit path trail time in years
   * @param {Number} options.orbitPathSettings.numberSamplePoints number of
   * points to use when drawing the orbit line. Only applicable for
   * non-elliptical and ephemeris table orbits.
   * perpendicular to the ecliptic in order to illustrate depth (defaults to
   * 0x333333).
   */
  constructor(ephem, options) {
    /**
     * Ephem object
     * @type {(Ephem | EphemerisTable)}
     */
    this.ephem = ephem;

    /**
     * Options (see class definition for details)
     */
    this.options = options || {};

    /**
     * configuring orbit path lead/trail data
     */
    if (!this.options.orbitPathSettings) {
      this.options.orbitPathSettings = JSON.parse(
        JSON.stringify(DEFAULTorbit_PATH_SETTINGS),
      );
    }

    if (!this.options.orbitPathSettings.leadDurationYears) {
      this.options.orbitPathSettings.leadDurationYears =
        DEFAULT_LEAD_TRAIL_YEARS;
    }

    if (!this.options.orbitPathSettings.trailDurationYears) {
      this.options.orbitPathSettings.trailDurationYears =
        DEFAULT_LEAD_TRAIL_YEARS;
    }

    if (!this.options.orbitPathSettings.numberSamplePoints) {
      this.options.orbitPathSettings.numberSamplePoints = DEFAULT_SAMPLE_POINTS;
    }

    /**
     * Cached orbital points.
     * @type {Array.<THREE.Geometry>}
     */
    this.orbitPoints = null;

    /**
     * Cached ecliptic drop lines.
     * @type {Array.<THREE.LineSegments>}
     */
    this.eclipticDropLines = null;

    /**
     * Cached orbit shape.
     * @type {THREE.Line}
     */
    this.orbitShape = null;

    /**
     * Time span of the drawn orbit line
     */
    this.orbitStart = 0;
    this.orbitStop = 0;

    /**
     * Orbit type
     * @type {OrbitType}
     */
    this.orbitType = getOrbitType(this.ephem);
  }

  /**
   * Get heliocentric position of object at a given JD.
   * @param {Number} jd Date value in JD.
   * @param {boolean} debug Set true for debug output.
   * @return {Array.<Number>} [X, Y, Z] coordinates
   */
  getPositionAtTime(jd: number, debug: boolean = false): Coordinate3d {
    // Note: logic below must match the vertex shader.

    // This position calculation is used to create orbital ellipses.
    switch (this.orbitType) {
      case OrbitType.PARABOLIC:
        return this.getPositionAtTimeNearParabolic(jd, debug);
      case OrbitType.HYPERBOLIC:
        return this.getPositionAtTimeHyperbolic(jd, debug);
      case OrbitType.ELLIPTICAL:
        return this.getPositionAtTimeElliptical(jd, debug);
      case OrbitType.TABLE:
        return this.getPositionAtTimeTable(jd, debug);
      default:
        throw new Error('No handler for this type of orbit');
    }
  }

  getPositionAtTimeParabolic(jd: number, debug: boolean = false): Coordinate3d {
    // See https://stjarnhimlen.se/comp/ppcomp.html#17
    const eph = this.ephem;
    if (eph instanceof EphemerisTable) {
      throw new Error('Attempted to compute coordinates from ephemeris table');
    }

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

  getPositionAtTimeNearParabolic(jd: number, debug: boolean = false): Coordinate3d {
    // See https://stjarnhimlen.se/comp/ppcomp.html#17
    const eph = this.ephem;
    if (eph instanceof EphemerisTable) {
      throw new Error('Attempted to compute coordinates from ephemeris table');
    }

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

  getPositionAtTimeHyperbolic(jd: number, debug: boolean = false): Coordinate3d {
    // See https://stjarnhimlen.se/comp/ppcomp.html#17
    const eph = this.ephem;
    if (eph instanceof EphemerisTable) {
      throw new Error('Attempted to compute coordinates from ephemeris table');
    }

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

  getPositionAtTimeElliptical(jd: number, debug: boolean = false): Coordinate3d {
    const eph = this.ephem;
    if (eph instanceof EphemerisTable) {
      throw new Error('Attempted to compute coordinates from ephemeris table');
    }

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

  getPositionAtTimeTable(jd: number, debug: boolean = false): Coordinate3d {
    if (this.ephem instanceof EphemerisTable) {
      const point = this.ephem.getPositionAtTime(jd);
      return rescaleXYZ(point[0], point[1], point[2]);
    }
    throw new Error('Attempted to read ephemeris table of non-table data');
  }

  /**
   * Given true anomaly and heliocentric distance, returns the scaled heliocentric coordinates (X, Y, Z)
   * @param {Number} v True anomaly
   * @param {Number} r Heliocentric distance
   * @return {Array.<Number>} Heliocentric coordinates
   */
  vectorToHeliocentric(v: number, r: number): Coordinate3d {
    const eph = this.ephem;
    if (eph instanceof EphemerisTable) {
      throw new Error('Attempted to compute coordinates from ephemeris table');
    }

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
   * Returns whether the requested epoch is within the current orbit's
   * definition. Used only for ephemeris tables.
   * @param {Number} jd
   * @return {boolean} true if it is within the orbit span, false if not
   */
  needsUpdateForTime(jd) {
    if (this.orbitType === OrbitType.TABLE) {
      return jd < this.orbitStart || jd > this.orbitStop;
    }
    // Renderings for other types are static.
    return false;
  }

  /**
   * Calculates, caches, and returns the orbit state for this orbit around this time
   * @param {Number} jd center time of the orbit (only used for ephemeris table ephemeris)
   * @param {boolean} forceCompute forces the recomputing of the orbit on this call
   * @return {THREE.Line}
   */
  getOrbitShape(jd?: number, forceCompute = false) {
    if (forceCompute) {
      if (this.orbitShape) {
        this.orbitShape.geometry.dispose();
        (this.orbitShape.material as LineBasicMaterial).dispose();
      }
      this.orbitShape = undefined;

      this.orbitPoints = undefined;

      if (this.eclipticDropLines) {
        this.eclipticDropLines.geometry.dispose();
        (this.eclipticDropLines.material as LineBasicMaterial).dispose();
      }
      this.eclipticDropLines = undefined;
    }

    if (this.orbitShape) {
      return this.orbitShape;
    }

    if (this.orbitType === OrbitType.ELLIPTICAL) {
      return this.getEllipse();
    }

    // Decide on a time range to draw orbits.
    // TODO(ian): Should we compute around current position, not time of perihelion?
    let tp;
    if (this.ephem instanceof EphemerisTable) {
      tp = jd;
    } else {
      tp = this.ephem.get('tp');
    }
    // Use current date as a fallback if time of perihelion is not available.
    const centerDate = tp ? tp : julian.toJulianDay(new Date());
    const startJd =
      centerDate - this.options.orbitPathSettings.trailDurationYears * 365.25;
    const endJd =
      centerDate + this.options.orbitPathSettings.leadDurationYears * 365.25;
    const step =
      (endJd - startJd) / this.options.orbitPathSettings.numberSamplePoints;

    this.orbitStart = startJd;
    this.orbitStop = endJd;

    switch (this.orbitType) {
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
      case OrbitType.TABLE:
        return this.getTableOrbit(startJd, endJd, step);
      default:
        throw new Error('Unknown orbit shape');
    }
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
   * @param {Number} startJd start of orbit in JDate format
   * @param {Number} stopJd end of orbit in JDate format
   * @param {Number} step step size in days
   * @return {THREE.Line}
   */
  getTableOrbit(startJd, stopJd, step) {
    if (this.ephem instanceof Ephem) {
      throw new Error(
        'Attempted to compute table orbit on non-table ephemeris',
      );
    }
    const rawPoints = this.ephem.getPositions(startJd, stopJd, step);
    const points = rawPoints
      .map((values) => rescaleArray(values))
      .map((values) => new THREE.Vector3(values[0], values[1], values[2]));
    const pointGeometry = new THREE.Geometry();
    pointGeometry.vertices = points;

    return this.generateAndCacheOrbitShape(pointGeometry);
  }

  /**
   * @private
   * @return {THREE.Line} The ellipse object that represents this orbit.
   */
  getEllipse() {
    const pointGeometry = this.getEllipseGeometry();
    return this.generateAndCacheOrbitShape(pointGeometry);
  }

  /**
   * @private
   * @return {THREE.Geometry} A THREE.js geometry
   */
  getEllipseGeometry() {
    const eph = this.ephem;
    if (eph instanceof EphemerisTable) {
      throw new Error('Attempted to compute coordinates from ephemeris table');
    }

    const a = eph.get('a');
    const ecc = eph.get('e');

    const twoPi = Math.PI * 2;
    const step = twoPi / 90;
    const pts = [];
    for (let E = 0; E < twoPi; E += step) {
      const v = 2 * Math.atan(sqrt((1 + ecc) / (1 - ecc)) * Math.tan(E / 2));
      const r = (a * (1 - ecc * ecc)) / (1 + ecc * cos(v));
      const pos = this.vectorToHeliocentric(v, r);

      if (isNaN(pos[0]) || isNaN(pos[1]) || isNaN(pos[2])) {
        console.error(
          'NaN position value - you may have bad or incomplete data in the following ephemeris:',
        );
        console.error(eph);
      }
      pts.push(new THREE.Vector3(pos[0], pos[1], pos[2]));
    }
    pts.push(pts[0]);

    const pointGeometry = new THREE.Geometry();
    pointGeometry.vertices = pts;
    return pointGeometry;
  }

  /**
   * @private
   */
  generateAndCacheOrbitShape(pointGeometry: THREE.Geometry) {
    this.orbitPoints = pointGeometry;
    this.orbitShape = new THREE.Line(
      pointGeometry,
      new THREE.LineBasicMaterial({
        color: new THREE.Color(this.options.color || 0x444444),
      }),
      THREE.LineStrip,
    );
    return this.orbitShape;
  }

  /**
   * A geometry containing line segments that run between the orbit ellipse and
   * the ecliptic plane of the solar system. This is a useful visual effect
   * that makes it easy to tell when an orbit goes below or above the ecliptic
   * plane.
   * @return {THREE.LineSegments} A geometry with many line segments.
   */
  getLinesToEcliptic(): THREE.LineSegments {
    if (this.eclipticDropLines) {
      return this.eclipticDropLines;
    }

    if (!this.orbitPoints) {
      // Generate the orbitPoints cache.
      this.getOrbitShape();
    }
    const points = this.orbitPoints;
    const geometry = new THREE.Geometry();

    // Place a cap on visible lines, for large or highly inclined orbits.
    points.vertices.forEach((vertex, idx) => {
      // Drop last point because it's a repeat of the first point.
      if (
        idx === points.vertices.length - 1 &&
        this.orbitType === OrbitType.ELLIPTICAL
      ) {
        return;
      }
      geometry.vertices.push(vertex);
      geometry.vertices.push(new THREE.Vector3(vertex.x, vertex.y, 0));
    });

    this.eclipticDropLines = new THREE.LineSegments(
      geometry,
      new THREE.LineBasicMaterial({
        color: this.options.eclipticLineColor || 0x333333,
        blending: THREE.AdditiveBlending,
      }),
      THREE.LineStrip,
    );

    return this.eclipticDropLines;
  }

  /**
   * Get the color of this orbit.
   * @return {Number} The hexadecimal color of the orbital ellipse.
   */
  getHexColor(): number {
    return (this.orbitShape.material as LineBasicMaterial).color.getHex();
  }

  /**
   * @param {Number} hexVal The hexadecimal color of the orbital ellipse.
   */
  setHexColor(hexVal: number) {
    (this.orbitShape.material as LineBasicMaterial).color = new THREE.Color(
      hexVal,
    );
  }

  /**
   * Get the visibility of this orbit.
   * @return {boolean} Whether the orbital ellipse is visible. Note that
   * although the ellipse may not be visible, it is still present in the
   * underlying Scene and Simultation.
   */
  getVisibility(): boolean {
    return this.orbitShape.visible;
  }

  /**
   * Change the visibility of this orbit.
   * @param {boolean} val Whether to show the orbital ellipse.
   */
  setVisibility(val: boolean) {
    this.orbitShape.visible = val;
  }
}
