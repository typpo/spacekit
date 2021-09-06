import * as THREE from 'three';
import { Orbit } from './Orbit';
import type { Coordinate3d } from './Coordinates';
import type { Ephem } from './Ephem';
import type { EphemerisTable } from './EphemerisTable';
import type { Simulation, SimulationContext, SimulationObject } from './Simulation';
export interface SpaceObjectOptions {
    position?: Coordinate3d;
    scale?: [number, number, number];
    particleSize?: number;
    labelText?: string;
    labelUrl?: string;
    hideOrbit?: boolean;
    axialTilt?: number;
    color?: number;
    radius?: number;
    levelsOfDetail?: {
        radii: number;
        segments: number;
    }[];
    atmosphere?: {
        color?: number;
        innerSizeRatio?: number;
        outerSizeRatio?: number;
        enable?: boolean;
    };
    orbitPathSettings?: {
        leadDurationYears?: number;
        trailDurationYears?: number;
        numberSamplePoints?: number;
    };
    ephem?: Ephem;
    ephemTable?: EphemerisTable;
    textureUrl?: string;
    basePath?: string;
    rotation?: {
        enable: boolean;
        period: number;
        speed?: number;
        lambdaDeg?: number;
        betaDeg?: number;
        yorp?: number;
        phi0?: number;
        jd0?: number;
    };
    shape?: {
        shapeUrl?: string;
        color?: number;
    };
    ecliptic?: {
        lineColor?: number;
        displayLines?: boolean;
    };
    theme?: {
        color?: number;
        orbitColor?: number;
    };
    debug?: {
        showAxes: boolean;
        showGrid: boolean;
    };
}
/**
 * An object that can be added to a visualization.
 * @example
 * ```
 * const myObject = viz.addObject('planet1', {
 *   position: [0, 0, 0],
 *   scale: [1, 1, 1],
 *   particleSize: 5,
 *   labelText: 'My object',
 *   labelUrl: 'http://...',
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
 *     orbitColor: 0x888888,
 *   },
 * });
 * ```
 */
export declare class SpaceObject implements SimulationObject {
    protected _id: string;
    protected _options: SpaceObjectOptions;
    protected _simulation: Simulation;
    protected _context: SimulationContext;
    protected _renderMethod?: 'SPRITE' | 'PARTICLESYSTEM' | 'ROTATING_OBJECT' | 'SPHERE';
    protected _initialized: boolean;
    private _object3js?;
    private _useEphemTable;
    private _isStaticObject;
    private _label?;
    private _showLabel;
    private _lastLabelUpdate;
    private _position;
    private _orbitAround?;
    private _scale;
    private _particleIndex?;
    private _orbitPath?;
    private _eclipticLines?;
    private _orbit?;
    /**
     * @param {String} id Unique id of this object
     * @param {Object} options Options container
     * @param {Array.<Number>} options.position [X, Y, Z] heliocentric coordinates of object. Defaults to [0, 0, 0]
     * @param {Array.<Number>} options.scale Scale of object on each [X, Y, Z] axis. Defaults to [1, 1, 1]
     * @param {Number} options.particleSize Size of particle if this object is a Kepler object being represented as a particle.
     * @param {String} options.labelText Text label to display above object (set undefined for no label)
     * @param {String} options.labelUrl Label becomes a link that goes to this url.
     * @param {boolean} options.hideOrbit If true, don't show an orbital ellipse. Defaults false.
     * @param {Object} options.orbitPathSettings Contains settings for defining the orbit path
     * @param {Object} options.orbitPathSettings.leadDurationYears orbit path lead time in years
     * @param {Object} options.orbitPathSettings.trailDurationYears orbit path trail time in years
     * @param {Object} options.orbitPathSettings.numberSamplePoints number of
     * points to use when drawing the orbit line. Only applicable for
     * non-elliptical and ephemeris table orbits.
     * @param {Ephem} options.ephem Ephemerides for this orbit
     * @param {EphemerisTable} options.ephemTable ephemeris table object which represents look up ephemeris
     * @param {String} options.textureUrl Texture for sprite
     * @param {String} options.basePath Base path for simulation assets and data
     * @param {Object} options.ecliptic Contains settings related to ecliptic
     * @param {Number} options.ecliptic.lineColor Hex color of lines that run perpendicular to ecliptic. @see Orbit
     * @param {boolean} options.ecliptic.displayLines Whether to show ecliptic lines. Defaults false.
     * @param {Object} options.theme Contains settings related to appearance of orbit
     * @param {Number} options.theme.color Hex color of the object, if applicable
     * @param {Number} options.theme.orbitColor Hex color of the orbit
     * @param {Simulation} contextOrSimulation Simulation context or simulation object
     * @param {boolean} autoInit Automatically initialize this object. If false
     * you must call init() manually.
     */
    constructor(id: string, options: SpaceObjectOptions, simulation: Simulation, autoInit?: boolean);
    /**
     * Initializes label and three.js objects. Called automatically unless you've
     * set autoInit to false in constructor (this init is suppressed by some
     * child classes).
     */
    init(): boolean;
    /**
     * @protected
     * Used by child classes to set the object that gets its position updated.
     * @param {THREE.Object3D} obj Any THREE.js object
     */
    protected setPositionedObject(obj: THREE.Object3D): void;
    /**
     * @private
     * Build the THREE.js object for this SpaceObject.
     */
    private renderObject;
    /**
     * @private
     * Builds the label div and adds it to the visualization
     * @return {HTMLElement} A div that contains the label for this object
     */
    private createLabel;
    /**
     * @private
     * Updates the label's position
     * @param {Array.Number} newpos Position of the label in the visualization's
     * coordinate system
     */
    private updateLabelPosition;
    /**
     * @private
     * Builds the sprite for this object
     * @return {THREE.Sprite} A sprite object
     */
    private createSprite;
    /**
     * @private
     * Builds the {Orbit} for this object
     * @return {Orbit} An orbit object
     */
    private createOrbit;
    /**
     * @private
     * Determines whether to update the position of an update. Don't update if JD
     * threshold is less than a certain amount.
     * @param {Number} afterJd Next JD
     * @return {boolean} Whether to update
     */
    private shouldUpdateObjectPosition;
    /**
     * Make this object orbit another orbit.
     * @param {Object} spaceObj The SpaceObject that will serve as the origin of this object's orbit.
     */
    orbitAround(spaceObj: SpaceObject): void;
    /**
     * Updates the position of this object. Applicable only if this object is a
     * sprite and not a particle type.
     * @param {Number} x X position
     * @param {Number} y Y position
     * @param {Number} z Z position
     */
    setPosition(x: number, y: number, z: number): void;
    /**
     * Gets the visualization coordinates of this object at a given time.
     * @param {Number} jd JD date
     * @return {Array.<Number>} [X, Y,Z] coordinates
     */
    getPosition(jd: number): Coordinate3d;
    /**
     * Updates the object and its label positions for a given time.
     * @param {Number} jd JD date
     * @param {boolean} force Whether to force an update regardless of checks for
     * movement.
     */
    update(jd: number, force?: boolean): void;
    /**
     * Gets the THREE.js objects that represent this SpaceObject.  The first
     * object returned is the primary object.  Other objects may be returned,
     * such as rings, ellipses, etc.
     * @return {Array.<THREE.Object3D>} A list of THREE.js objects
     */
    get3jsObjects(): THREE.Object3D[];
    /**
     * Specifies the object that is used to compute the bounding box. By default,
     * this will be the first THREE.js object in this class's list of objects.
     * @return {THREE.Object3D} THREE.js object
     */
    getBoundingObject(): Promise<THREE.Object3D>;
    /**
     * Gets the color of this object. Usually this corresponds to the color of
     * the dot representing the object as well as its orbit.
     * @return {Number} A hexidecimal color value, e.g. 0xFFFFFF
     */
    getColor(): number;
    /**
     * Gets the {Orbit} object for this SpaceObject.
     * @return {Orbit} Orbit object
     */
    getOrbit(): Orbit | undefined;
    /**
     * Gets label visilibity status.
     * @return {boolean} Whether label is visible.
     */
    getLabelVisibility(): boolean;
    /**
     * Toggle the visilibity of the label.
     * @param {boolean} val Whether to show or hide.
     */
    setLabelVisibility(val: boolean): void;
    /**
     * Gets the unique ID of this object.
     * @return {String} Unique ID
     */
    getId(): string;
    /**
     * Determines whether object is static (can't change its position) or whether
     * its position can be updated (ie, it has ephemeris)
     * @return {boolean} Whether this object can change its position.
     */
    isStaticObject(): boolean;
    /**
     * Determines whether object is ready to be measured or added to scene.
     * @return {boolean} True if ready
     */
    isReady(): boolean;
    removalCleanup(): void;
}
/**
 * Useful presets for creating SpaceObjects.
 * @example
 * ```
 * const myobject = viz.addObject('planet1', Spacekit.SpaceObjectPresets.MERCURY);
 * ```
 */
export declare const SpaceObjectPresets: {
    SUN: {
        textureUrl: string;
        position: number[];
    };
    MERCURY: {
        textureUrl: string;
        theme: {
            color: number;
        };
        ephem: Ephem;
    };
    VENUS: {
        textureUrl: string;
        theme: {
            color: number;
        };
        ephem: Ephem;
    };
    EARTH: {
        textureUrl: string;
        theme: {
            color: number;
        };
        ephem: Ephem;
    };
    MOON: {
        textureUrl: string;
        theme: {
            color: number;
        };
        ephem: Ephem;
        particleSize: number;
    };
    MARS: {
        textureUrl: string;
        theme: {
            color: number;
        };
        ephem: Ephem;
    };
    JUPITER: {
        textureUrl: string;
        theme: {
            color: number;
        };
        ephem: Ephem;
    };
    SATURN: {
        textureUrl: string;
        theme: {
            color: number;
        };
        ephem: Ephem;
    };
    URANUS: {
        textureUrl: string;
        theme: {
            color: number;
        };
        ephem: Ephem;
    };
    NEPTUNE: {
        textureUrl: string;
        theme: {
            color: number;
        };
        ephem: Ephem;
    };
    PLUTO: {
        textureUrl: string;
        theme: {
            color: number;
        };
        ephem: Ephem;
    };
};
