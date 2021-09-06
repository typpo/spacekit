import * as THREE from 'three';
import { EffectComposer } from 'postprocessing';
import type { Scene, Vector3, WebGL1Renderer } from 'three';
import Camera from './Camera';
import { KeplerParticles } from './KeplerParticles';
import { NaturalSatellites } from './EphemPresets';
import { ShapeObject } from './ShapeObject';
import { Skybox } from './Skybox';
import { SpaceObject } from './SpaceObject';
import { SphereObject } from './SphereObject';
import { StaticParticles } from './StaticParticles';
import { Stars } from './Stars';
import type { Coordinate3d } from './Coordinates';
export interface SimulationObject {
    update: (jd: number, force: boolean) => void;
    get3jsObjects(): THREE.Object3D[];
    getId(): string;
}
interface CameraOptions {
    initialPosition?: Coordinate3d;
    enableDrift?: boolean;
}
interface DebugOptions {
    showAxes?: boolean;
    showGrid?: boolean;
    showStats?: boolean;
}
interface SpacekitOptions {
    basePath: string;
    startDate?: Date;
    jd?: number;
    jdDelta?: number;
    jdPerSecond?: number;
    unitsPerAu?: number;
    startPaused?: boolean;
    maxNumParticles?: number;
    particleTextureUrl?: string;
    particleDefaultSize?: number;
    camera?: CameraOptions;
    debug?: DebugOptions;
}
export interface SimulationContext {
    simulation: Simulation;
    options: SpacekitOptions;
    objects: {
        renderer: WebGL1Renderer;
        camera: Camera;
        scene: Scene;
        particles: KeplerParticles;
        composer?: EffectComposer;
    };
    container: {
        width: number;
        height: number;
    };
}
/**
 * The main entrypoint of a visualization.
 *
 * This class wraps a THREE.js scene, controls, skybox, etc in an animated
 * Simulation.
 *
 * @example
 * ```
 * const sim = new Spacekit.Simulation(document.getElementById('my-container'), {
 *  basePath: '../path/to/assets',
 *  startDate: Date.now(),
 *  jd: 0.0,
 *  jdDelta: 10.0,
 *  jdPerSecond: 100.0,  // overrides jdDelta
 *  startPaused: false,
 *  unitsPerAu: 1.0,
 *  maxNumParticles: 2**16,
 *  camera: {
 *    initialPosition: [0, -10, 5],
 *    enableDrift: false,
 *  },
 *  debug: {
 *    showAxes: false,
 *    showGrid: false,
 *    showStats: false,
 *  },
 * });
 * ```
 */
export declare class Simulation {
    onTick?: () => void;
    private simulationElt;
    private options;
    private jd;
    private jdDelta?;
    private jdPerSecond;
    private isPaused;
    private enableCameraDrift;
    private cameraDefaultPos;
    private camera;
    private useLightSources;
    private lightPosition?;
    private subscribedObjects;
    private particles;
    private stats?;
    private fps;
    private lastUpdatedTime;
    private lastStaticCameraUpdateTime;
    private lastResizeUpdateTime;
    private renderEnabled;
    private initialRenderComplete;
    private scene;
    private renderer;
    private composer?;
    /**
     * @param {HTMLCanvasElement} simulationElt The container for this simulation.
     * @param {Object} options for simulation
     * @param {String} options.basePath Path to simulation assets and data
     * @param {Date} options.startDate The start date and time for this
     * simulation.
     * @param {Number} options.jd The JD date of this simulation.
     * Defaults to 0
     * @param {Number} options.jdDelta The number of JD to add every tick of
     * the simulation.
     * @param {Number} options.jdPerSecond The number of jd to add every second.
     * Use this instead of `jdDelta` for constant motion that does not vary with
     * framerate.  Defaults to 100.
     * @param {Number} options.unitsPerAu The number of "position" units in the
     * simulation that represent an AU. This is an optional setting that you may
     * use if the default (1 unit = 1 AU) is too small for your simulation (e.g.
     * if you are representing a planetary system). Depending on your graphics
     * card, you may begin to notice inaccuracies at fractional scales of GL
     * units, so it becomes necessary to scale the whole visualization.  Defaults
     * to 1.0.
     * @param {boolean} options.startPaused Whether the simulation should start
     * in a paused state.
     * @param {Number} options.maxNumParticles The maximum number of particles in
     * the visualization. Try choosing a number that is larger than your
     * particles, but not too much larger. It's usually good enough to choose the
     * next highest power of 2. If you're not showing many particles (tens of
     * thousands+), you don't need to worry about this.
     * @param {String} options.particleTextureUrl The texture for the default
     * particle system.
     * @param {Number} options.particleDefaultSize The default size for the
     * particle system.
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
    constructor(simulationElt: HTMLCanvasElement, options: SpacekitOptions);
    /**
     * @private
     */
    private init;
    /**
     * @private
     */
    private initRenderer;
    /**
     * @private
     */
    private initPasses;
    /**
     * @private
     */
    private update;
    /**
     * Performs a forced update of all elements in the view. This is used for when the system isn't animating but the
     * objects need to update their data to properly capture things like updated label positions.
     * @private
     */
    private staticForcedUpdate;
    /**
     * @private
     * Updates the size of the control and forces a refresh of components whenever the control is being resized.
     */
    private resizeUpdate;
    /**
     * @private
     * TODO(ian): Move this into Camera
     */
    private doCameraDrift;
    /**
     * @private
     */
    private animate;
    /**
     * Add a spacekit object (usually a SpaceObject) to the visualization.
     * @see SpaceObject
     * @param {Object} obj Object to add to visualization
     * @param {boolean} noUpdate Set to true if object does not need to be
     * animated.
     */
    addObject(obj: SimulationObject, noUpdate?: boolean): void;
    /**
     * Removes an object from the visualization.
     * @param {Object} obj Object to remove
     */
    removeObject(obj: SpaceObject): void;
    /**
     * Shortcut for creating a new SpaceObject belonging to this visualization.
     * Takes any SpaceObject arguments.
     * @see SpaceObject
     */
    createObject(...args: any[]): SpaceObject;
    /**
     * Shortcut for creating a new ShapeObject belonging to this visualization.
     * Takes any ShapeObject arguments.
     * @see ShapeObject
     */
    createShape(...args: any[]): ShapeObject;
    /**
     * Shortcut for creating a new SphereOjbect belonging to this visualization.
     * Takes any SphereObject arguments.
     * @see SphereObject
     */
    createSphere(...args: any[]): SphereObject;
    /**
     * Shortcut for creating a new StaticParticles object belonging to this visualization.
     * Takes any StaticParticles arguments.
     * @see SphereObject
     */
    createStaticParticles(...args: any[]): StaticParticles;
    /**
     * Shortcut for creating a new Skybox belonging to this visualization. Takes
     * any Skybox arguments.
     * @see Skybox
     */
    createSkybox(...args: any[]): Skybox;
    /**
     * Shortcut for creating a new Stars object belonging to this visualization.
     * Takes any Stars arguments.
     * @see Stars
     */
    createStars(...args: any[]): Stars;
    /**
     * Creates an ambient light source. This will dimly light everything in the
     * visualization.
     * @param {Number} color Color of light, default 0x333333
     */
    createAmbientLight(color?: number): void;
    /**
     * Creates a light source. This will make the shape of your objects visible
     * and provide some contrast.
     * @param {Array.<Number>} pos Position of light source. Defaults to moving
     * with camera.
     * @param {Number} color Color of light, default 0xFFFFFF
     */
    createLight(pos?: Coordinate3d | undefined, color?: number): void;
    getLightPosition(): Vector3 | undefined;
    isUsingLightSources(): boolean;
    /**
     * Returns a promise that receives a NaturalSatellites object when it is
     * resolved.
     * @return {Promise<NaturalSatellites>} NaturalSatellites object that is
     * ready to load.
     *
     * @see {NaturalSatellites}
     */
    loadNaturalSatellites(): Promise<NaturalSatellites>;
    /**
     * Installs a scroll handler that only renders the visualization while it is
     * in the user's viewport.
     *
     * The scroll handler currently binds to the window object only.
     */
    renderOnlyInViewport(): void;
    /**
     * Adjust camera position so that the object fits within the viewport. If
     * applicable, this function will fit around the object's orbit.
     * @param {SpaceObject} spaceObj Object to fit within viewport.
     * @param {Number} offset Add some extra room in the viewport. Increase to be
     * further zoomed out, decrease to be closer. Default 3.0.
     */
    zoomToFit(spaceObj: SpaceObject, offset?: number): Promise<boolean>;
    /**
     * @private
     * Perform the actual zoom to fit behavior.
     * @param {Object3D} obj Three.js object to fit within viewport.
     * @param {Number} offset Add some extra room in the viewport. Increase to be
     * further zoomed out, decrease to be closer. Default 3.0.
     */
    private doZoomToFit;
    /**
     * Run the animation
     */
    start(): void;
    /**
     * Stop the animation
     */
    stop(): void;
    /**
     * Gets the current JD date of the simulation
     * @return {Number} JD date
     */
    getJd(): number;
    /**
     * Sets the JD date of the simulation.
     * @param {Number} val JD date
     */
    setJd(val: number): void;
    /**
     * Get a date object representing local date and time of the simulation.
     * @return {Date} Date of simulation
     */
    getDate(): Date;
    /**
     * Set the local date and time of the simulation.
     * @param {Date} date Date of simulation
     */
    setDate(date: Date): void;
    /**
     * Get the JD per frame of the visualization.
     */
    getJdDelta(): number;
    /**
     * Set the JD per frame of the visualization. This will override any
     * existing "JD per second" setting.
     * @param {Number} delta JD per frame
     */
    setJdDelta(delta: number): void;
    /**
     * Get the JD change per second of the visualization.
     * @return {Number | undefined} JD per second, undefined if jd per second is
     * not set.
     */
    getJdPerSecond(): number | undefined;
    /**
     * Set the JD change per second of the visualization.
     * @param {Number} x JD per second
     */
    setJdPerSecond(x: number): void;
    /**
     * Get an object that contains useful context for this visualization
     * @return {Object} Context object
     */
    getContext(): SimulationContext;
    /**
     * Get the element containing this simulation
     * @return {HTMLElement} The html container of this simulation
     */
    getSimulationElement(): HTMLCanvasElement;
    /**
     * Get the Camera and CameraControls wrapper object
     * @return {Camera} The Camera wrapper
     */
    getViewer(): Camera;
    /**
     * Get the three.js scene object
     * @return {THREE.Scene} The THREE.js scene object
     */
    getScene(): THREE.Scene;
    /**
     * Get the three.js renderer
     * @return {THREE.WebGL1Renderer} The THREE.js renderer
     */
    getRenderer(): THREE.WebGL1Renderer;
    /**
     * Enable or disable camera drift.
     * @param {boolean} driftOn True if you want the camera to float around a bit
     */
    setCameraDrift(driftOn: boolean): void;
}
export default Simulation;
