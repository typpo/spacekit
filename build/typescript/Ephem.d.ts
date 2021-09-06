declare type EphemAttribute = 'a' | 'e' | 'i' | 'q' | 'epoch' | 'period' | 'tp' | 'ma' | 'n' | 'L' | 'om' | 'w' | 'wBar' | 'GM';
interface EphemAttributes {
    a?: number;
    e?: number;
    i?: number;
    q?: number;
    epoch?: number;
    period?: number;
    tp?: number;
    ma?: number;
    n?: number;
    L?: number;
    om?: number;
    w?: number;
    wBar?: number;
    GM?: number;
}
/**
 * Standard gravitational parameter for objects orbiting these bodies.
 * Units in m^3/s^2
 */
export declare const GM: {
    SUN: number;
    MERCURY: number;
    VENUS: number;
    EARTH_MOON: number;
    MARS: number;
    JUPITER: number;
    SATURN: number;
    URANUS: number;
    NEPTUNE: number;
    PLUTO_CHARON: number;
};
/**
 * A class representing Kepler ephemerides.
 * @example
 * ```
 * const NEPTUNE = new Ephem({
 *   epoch: 2458426.500000000,
 *   a: 3.009622263428050E+01,
 *   e: 7.362571187193770E-03,
 *   i: 1.774569249829094E+00,
 *   om: 1.318695882492132E+02,
 *   w: 2.586226409499831E+02,
 *   ma: 3.152804988924479E+02,
 * }, 'deg'),
 * ```
 */
export declare class Ephem {
    private attrs;
    private locked;
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
    constructor(initialValues: EphemAttributes, units?: 'rad' | 'deg', locked?: boolean);
    /**
     * Sets an ephemerides attribute.
     * @param {String} attr The name of the attribute (e.g. 'a')
     * @param {Number} val The value of the attribute (e.g. 0.5)
     * @param {'deg'|'rad'} units The unit of angle provided, if applicable.
     */
    set(attr: EphemAttribute, val: number, units?: 'deg' | 'rad'): boolean;
    /**
     * Gets an ephemerides attribute, but may return undefined if it's not set.
     * @param {String} attr The name of the attribute (e.g. 'a')
     * @param {'deg'|'rad'} units The unit of angle desired, if applicable. This
     * input is ignored for values that are not angle measurements.
     * @return {Number} Ephemeris attribute value, or undefined
     */
    getUnsafe(attr: EphemAttribute, units?: 'deg' | 'rad'): number | undefined;
    /**
     * Gets an ephemerides attribute.
     * @param {String} attr The name of the attribute (e.g. 'a')
     * @param {'deg'|'rad'} units The unit of angle desired, if applicable. This
     * input is ignored for values that are not angle measurements.
     * @return {Number} Ephemeris attribute value
     */
    get(attr: EphemAttribute, units?: 'deg' | 'rad'): number;
    /**
     * @private
     * Infers values of some ephemerides attributes if the required information
     * is available.
     */
    private fill;
    /**
     * Make this ephem object immutable.
     */
    lock(): void;
    copy(): Ephem;
}
export {};
