import Units from './Units';

export type Coordinate3d = [number, number, number];
export type CoordinateXYZ = {
  x: number;
  y: number;
  z: number;
};

const J2000: number = 2451545.0;

export default class Coordinates {
  static sphericalToCartesian(
    ra: number,
    dec: number,
    dist: number,
  ): Coordinate3d {
    // See http://www.stargazing.net/kepler/rectang.html
    return [
      dist * Math.cos(ra) * Math.cos(dec),
      dist * Math.sin(ra) * Math.cos(dec),
      dist * Math.sin(dec),
    ];
  }

  /**
   * See https://en.wikipedia.org/wiki/Ecliptic_coordinate_system#Converting_Cartesian_vector
   */
  static equatorialToEcliptic_Cartesian(
    x: number,
    y: number,
    z: number,
    tilt: number,
  ): Coordinate3d {
    return [
      x,
      Math.cos(tilt) * y + Math.sin(tilt) * z,
      -Math.sin(tilt) * y + Math.cos(tilt) * z,
    ];
  }

  static eclipticToEquatorial_Cartesian(
    x: number,
    y: number,
    z: number,
    tilt: number,
  ): Coordinate3d {
    return [
      x,
      Math.cos(tilt) * y + -Math.sin(tilt) * z,
      Math.sin(tilt) * y + Math.cos(tilt) * z,
    ];
  }

  /**
   * Get Earth's obliquity and nutation at a given date.
   * @param {Number} jd JD date
   * @return {Object} Object with attributes "obliquity" and "nutation" provided
   * in radians
   */
  static getNutationAndObliquity(jd: number = J2000): {
    nutation: number;
    obliquity: number;
  } {
    const t = (jd - J2000) / 36525;
    const omega = Units.rad(
      125.04452 - 1934.136261 * t + 0.0020708 * t * t + (t * t + t) / 450000,
    );
    const Lsun = Units.rad(280.4665 + 36000.7698 * t);
    const Lmoon = Units.rad(218.3165 + 481267.8813 * t);

    const nutation =
      (-17.2 / 3600) * Math.sin(omega) -
      (-1.32 / 3600) * Math.sin(2 * Lsun) -
      (0.23 / 3600) * Math.sin(2 * Lmoon) +
      Units.deg((0.21 / 3600) * Math.sin(2 * omega));

    const obliquity_zero =
      23 +
      26.0 / 60 +
      21.448 / 3600 -
      (46.815 / 3600) * t -
      (0.00059 / 3600) * t * t +
      (0.001813 / 3600) * t * t * t;
    const obliquity_delta =
      (9.2 / 3600) * Math.cos(omega) +
      (0.57 / 3600) * Math.cos(2 * Lsun) +
      (0.1 / 3600) * Math.cos(2 * Lmoon) -
      (0.09 / 3600) * Math.cos(2 * omega);
    const obliquity = obliquity_zero + obliquity_delta;

    return {
      nutation: Units.rad(nutation),
      obliquity: Units.rad(obliquity),
    };
  }

  /**
   * Get Earth's obliquity at a given date.
   * @param {Number} jd JD date
   * @return {Number} Obliquity in radians
   */
  static getObliquity(jd: number = J2000): number {
    return this.getNutationAndObliquity(jd).obliquity;
  }
}
