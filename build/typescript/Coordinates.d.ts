export declare type Coordinate3d = [number, number, number];
export declare type CoordinateXYZ = {
    x: number;
    y: number;
    z: number;
};
export default class Coordinates {
    static sphericalToCartesian(ra: number, dec: number, dist: number): Coordinate3d;
    /**
     * See https://en.wikipedia.org/wiki/Ecliptic_coordinate_system#Converting_Cartesian_vector
     */
    static equatorialToEcliptic_Cartesian(x: number, y: number, z: number, tilt: number): Coordinate3d;
    static eclipticToEquatorial_Cartesian(x: number, y: number, z: number, tilt: number): Coordinate3d;
    /**
     * Get Earth's obliquity and nutation at a given date.
     * @param {Number} jd JD date
     * @return {Object} Object with attributes "obliquity" and "nutation" provided
     * in radians
     */
    static getNutationAndObliquity(jd?: number): {
        nutation: number;
        obliquity: number;
    };
    /**
     * Get Earth's obliquity at a given date.
     * @param {Number} jd JD date
     * @return {Number} Obliquity in radians
     */
    static getObliquity(jd?: number): number;
}
