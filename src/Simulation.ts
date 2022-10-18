import * as THREE from 'three';
// @ts-ignore
import julian from 'julian';
import Stats from 'three/examples/jsm/libs/stats.module';
import {
  BloomEffect,
  EffectComposer,
  EffectPass,
  RenderPass,
  // @ts-ignore
} from 'postprocessing';

import type { Scene, Object3D, Vector3, WebGL1Renderer } from 'three';

import Camera from './Camera';
import { KeplerParticles } from './KeplerParticles';
import { NaturalSatellites } from './EphemPresets';
import { ShapeObject } from './ShapeObject';
import { Skybox } from './Skybox';
import { SpaceObject } from './SpaceObject';
import { SphereObject } from './SphereObject';
import { StaticParticles } from './StaticParticles';
import { Stars } from './Stars';
import { getDefaultBasePath } from './util';
import { setScaleFactor, rescaleArray } from './Scale';

import type { Coordinate3d } from './Coordinates';

// TODO(ian): Make this an interface.
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
export class Simulation {
  public onTick?: () => void;

  private simulationElt: HTMLCanvasElement;

  private options: SpacekitOptions;

  private jd: number;

  private jdDelta?: number;

  private jdPerSecond: number;

  private isPaused: boolean;

  private enableCameraDrift: boolean;

  private cameraDefaultPos: Coordinate3d;

  private camera: Camera;

  private useLightSources: boolean;

  private lightPosition?: Vector3;

  private subscribedObjects: Record<string, SimulationObject>;

  private particles: KeplerParticles;

  private stats?: Stats;

  private fps: number;

  private lastUpdatedTime: number;

  private lastStaticCameraUpdateTime: number;

  private lastResizeUpdateTime: number;

  private renderEnabled: boolean;

  private initialRenderComplete: boolean;

  private scene: Scene;

  private renderer: WebGL1Renderer;

  private composer?: EffectComposer;

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
  constructor(simulationElt: HTMLCanvasElement, options: SpacekitOptions) {
    this.simulationElt = simulationElt;
    this.options = options || {};
    this.options.basePath = this.options.basePath || getDefaultBasePath();

    this.jd =
      typeof this.options.jd === 'undefined'
        ? Number(julian(this.options.startDate || new Date()))
        : this.options.jd;
    this.jdDelta = this.options.jdDelta;
    this.jdPerSecond = this.options.jdPerSecond || 100;
    this.isPaused = options.startPaused || false;
    this.onTick = undefined;

    this.enableCameraDrift = false;
    this.cameraDefaultPos = rescaleArray([0, -10, 5]);
    if (this.options.camera) {
      this.enableCameraDrift = !!this.options.camera.enableDrift;
      if (this.options.camera.initialPosition) {
        this.cameraDefaultPos = rescaleArray(
          this.options.camera.initialPosition,
        );
      }
    }

    this.useLightSources = false;
    this.lightPosition = undefined;

    this.subscribedObjects = {};

    // This makes controls.lookAt and other objects treat the positive Z axis
    // as "up" direction.
    THREE.Object3D.DefaultUp = new THREE.Vector3(0, 0, 1);

    // Scale
    if (this.options.unitsPerAu) {
      setScaleFactor(this.options.unitsPerAu);
    }

    // stats.js panel
    this.stats = undefined;
    this.fps = 1;

    this.lastUpdatedTime = Date.now();
    this.lastStaticCameraUpdateTime = Date.now();
    this.lastResizeUpdateTime = Date.now();

    // Rendering
    this.renderEnabled = true;
    this.initialRenderComplete = false;
    this.animate = this.animate.bind(this);

    this.renderer = this.initRenderer();
    this.scene = new THREE.Scene();
    this.camera = new Camera(this.getContext());
    this.composer = undefined;

    // Orbit particle system must be initialized after scene is created and
    // scale is set.
    this.particles = new KeplerParticles(
      {
        textureUrl:
          this.options.particleTextureUrl ||
          '{{assets}}/sprites/smallparticle.png',
        jd: this.jd,
        maxNumParticles: this.options.maxNumParticles,
        defaultSize: this.options.particleDefaultSize,
      },
      this,
    );

    this.init();
    this.animate();
  }

  /**
   * @private
   */
  private init() {
    // Camera
    this.camera
      .get3jsCamera()
      .position.set(
        this.cameraDefaultPos[0],
        this.cameraDefaultPos[1],
        this.cameraDefaultPos[2],
      );
    // window.cam = camera.get3jsCamera();

    // Events
    this.simulationElt.onmousedown = this.simulationElt.ontouchstart = () => {
      // When user begins interacting with the visualization, disable camera
      // drift.
      this.enableCameraDrift = false;
    };

    (() => {
      let listenToCameraEvents = false;
      this.camera.get3jsCameraControls().addEventListener('change', () => {
        // Camera will send a few initial events - ignore these.
        if (listenToCameraEvents) {
          this.staticForcedUpdate();
        }
      });
      setTimeout(() => {
        // Send an update when the visualization is done loading.
        this.staticForcedUpdate();
        listenToCameraEvents = true;
        this.initialRenderComplete = true;
      }, 0);
    })();

    this.simulationElt.addEventListener('resize', () => {
      this.resizeUpdate();
    });

    window.addEventListener('resize', () => {
      this.resizeUpdate();
    });

    // Helper
    if (this.options.debug) {
      if (this.options.debug.showGrid) {
        const gridHelper = new THREE.GridHelper(undefined, undefined);
        gridHelper.geometry.rotateX(Math.PI / 2);
        this.scene.add(gridHelper);
      }
      if (this.options.debug.showAxes) {
        this.scene.add(new THREE.AxesHelper(0.5));
      }
      if (this.options.debug.showStats) {
        this.stats = new (Stats as any)();
        this.stats!.showPanel(0);
        this.simulationElt.appendChild(this.stats!.dom);
      }
    }

    // Set up effect composer, etc.
    this.initPasses();
  }

  /**
   * @private
   */
  private initRenderer(): THREE.WebGL1Renderer {
    // TODO(ian): Upgrade to webgl 2. See https://discourse.threejs.org/t/webgl2-breaking-custom-shader/16603/4
    const renderer = new THREE.WebGL1Renderer({
      antialias: true,
      //logarithmicDepthBuffer: true,
    });
    console.info(
      'Max texture resolution:',
      renderer.capabilities.maxTextureSize,
    );

    const maxPrecision = renderer.capabilities.getMaxPrecision('highp');
    if (maxPrecision !== 'highp') {
      console.warn(
        `Shader maximum precision is "${maxPrecision}", GPU rendering may not be accurate.`,
      );
    }

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(
      this.simulationElt.offsetWidth,
      this.simulationElt.offsetHeight,
    );

    this.simulationElt.appendChild(renderer.domElement);

    return renderer;
  }

  /**
   * @private
   */
  private initPasses() {
    //const smaaEffect = new SMAAEffect(assets.get("smaa-search"), assets.get("smaa-area"));
    //smaaEffect.colorEdgesMaterial.setEdgeDetectionThreshold(0.065);

    const camera = this.camera.get3jsCamera();

    /*
    const sunGeometry = new THREE.SphereBufferGeometry(
      rescaleNumber(0.004),
      16,
    );
    const sunMaterial = new THREE.MeshBasicMaterial({
      color: 0xffddaa,
      transparent: true,
      depthWrite: false,
      fog: false,
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    const rescaled = rescaleArray([0.1, 0.1, 0.0]);
    sun.position.set(rescaled[0], rescaled[1], rescaled[2]);
    sun.updateMatrix();
    sun.updateMatrixWorld();

    const godRaysEffect = new GodRaysEffect(camera, sun, {
      color: 0xfff5f2,
      blur: false,
    });
    */
    //godRaysEffect.dithering = true;

    const bloomEffect = new BloomEffect({
      width: 240,
      height: 240,
      luminanceThreshold: 0.2,
    });
    bloomEffect.blendMode.opacity.value = 2.3;

    const renderPass = new RenderPass(this.scene, camera);
    renderPass.renderToScreen = false;

    const effectPass = new EffectPass(
      camera,
      /*smaaEffect, godRaysEffect*/ bloomEffect,
    );
    effectPass.renderToScreen = true;

    const composer = new EffectComposer(this.renderer);
    composer.addPass(renderPass);
    composer.addPass(effectPass);
    this.composer = composer;
  }

  /**
   * @private
   */
  private update(force = false) {
    for (const objId in this.subscribedObjects) {
      if (this.subscribedObjects.hasOwnProperty(objId)) {
        this.subscribedObjects[objId].update(this.jd, force);
      }
    }
  }

  /**
   * Performs a forced update of all elements in the view. This is used for when the system isn't animating but the
   * objects need to update their data to properly capture things like updated label positions.
   * @private
   */
  private staticForcedUpdate() {
    if (this.isPaused) {
      const now = Date.now();
      const timeDelta = now - this.lastStaticCameraUpdateTime;
      const threshold = 30;
      // TODO(ian): Also do this based on viewport change. Otherwise things like scrolling don't work well.
      if (timeDelta > threshold) {
        this.update(true /* force */);
        this.lastStaticCameraUpdateTime = now;
      }
    }
  }

  /**
   * @private
   * Updates the size of the control and forces a refresh of components whenever the control is being resized.
   */
  private resizeUpdate() {
    const now = Date.now();
    const timeDelta = now - this.lastResizeUpdateTime;
    const threshold = 30;

    if (timeDelta > threshold) {
      const newWidth = this.simulationElt.offsetWidth;
      const newHeight = this.simulationElt.offsetHeight;
      if (newWidth === 0 && newHeight === 0) {
        return;
      }
      const camera = this.camera.get3jsCamera();
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      this.renderer.setSize(newWidth, newHeight);
      this.staticForcedUpdate();
      this.lastResizeUpdateTime = now;
    }
  }

  /**
   * @private
   * TODO(ian): Move this into Camera
   */
  private doCameraDrift() {
    // Follow floating path around
    const timer = 0.0001 * Date.now();
    const pos = this.cameraDefaultPos;
    const cam = this.camera.get3jsCamera();
    cam.position.x = pos[0] + (pos[0] * (Math.cos(timer) + 1)) / 3;
    cam.position.z = pos[2] + (pos[2] * (Math.sin(timer) + 1)) / 3;
  }

  /**
   * @private
   */
  private animate() {
    if (!this.renderEnabled && this.initialRenderComplete) {
      return;
    }

    window.requestAnimationFrame(this.animate);

    if (this.stats) {
      this.stats.begin();
    }

    if (!this.isPaused) {
      if (this.jdDelta) {
        this.jd += this.jdDelta;
      } else {
        // N jd per second
        this.jd += this.jdPerSecond / this.fps;
      }

      const timeDelta = (Date.now() - this.lastUpdatedTime) / 1000;
      this.lastUpdatedTime = Date.now();
      this.fps = 1 / timeDelta || 1;

      // Update objects in this simulation
      this.update();
    }

    // Update camera drifting, if applicable
    if (this.enableCameraDrift) {
      this.doCameraDrift();
    }
    this.camera.update();

    // Update three.js scene
    this.renderer.render(this.scene, this.camera.get3jsCamera());
    //this.composer.render(0.1);

    if (this.onTick) {
      this.onTick();
    }

    if (this.stats) {
      this.stats.end();
    }
  }

  /**
   * Add a spacekit object (usually a SpaceObject) to the visualization.
   * @see SpaceObject
   * @param {Object} obj Object to add to visualization
   * @param {boolean} noUpdate Set to true if object does not need to be
   * animated.
   */
  addObject(obj: SimulationObject, noUpdate: boolean = false) {
    obj.get3jsObjects().map((x) => {
      this.scene.add(x);
    });

    if (!noUpdate) {
      // Call for updates as time passes.
      const objId = obj.getId();
      if (this.subscribedObjects[objId]) {
        console.error(
          `Object id is not unique: "${objId}". This could prevent objects from updating correctly.`,
        );
      }
      this.subscribedObjects[objId] = obj;
    }
  }

  /**
   * Removes an object from the visualization.
   * @param {Object} obj Object to remove
   */
  removeObject(obj: SpaceObject) {
    // TODO(ian): test this and avoid memory leaks...
    obj.get3jsObjects().map((x) => {
      this.scene.remove(x);
    });

    if (typeof obj.removalCleanup === 'function') {
      obj.removalCleanup();
    }
    delete this.subscribedObjects[obj.getId()];
  }

  /**
   * Shortcut for creating a new SpaceObject belonging to this visualization.
   * Takes any SpaceObject arguments.
   * @see SpaceObject
   */
  // @ts-ignore
  createObject(...args): SpaceObject {
    // @ts-ignore
    return new SpaceObject(...args, this);
  }

  /**
   * Shortcut for creating a new ShapeObject belonging to this visualization.
   * Takes any ShapeObject arguments.
   * @see ShapeObject
   */
  // @ts-ignore
  createShape(...args): ShapeObject {
    // @ts-ignore
    return new ShapeObject(...args, this);
  }

  /**
   * Shortcut for creating a new SphereOjbect belonging to this visualization.
   * Takes any SphereObject arguments.
   * @see SphereObject
   */
  // @ts-ignore
  createSphere(...args): SphereObject {
    // @ts-ignore
    return new SphereObject(...args, this);
  }

  /**
   * Shortcut for creating a new StaticParticles object belonging to this visualization.
   * Takes any StaticParticles arguments.
   * @see SphereObject
   */
  // @ts-ignore
  createStaticParticles(...args): StaticParticles {
    // @ts-ignore
    return new StaticParticles(...args, this);
  }

  /**
   * Shortcut for creating a new Skybox belonging to this visualization. Takes
   * any Skybox arguments.
   * @see Skybox
   */
  // @ts-ignore
  createSkybox(...args): Skybox {
    // @ts-ignore
    return new Skybox(...args, this);
  }

  /**
   * Shortcut for creating a new Stars object belonging to this visualization.
   * Takes any Stars arguments.
   * @see Stars
   */
  // @ts-ignore
  createStars(...args): Stars {
    if (args.length) {
      // @ts-ignore
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
  createAmbientLight(color: number = 0x333333) {
    this.scene.add(new THREE.AmbientLight(color));
    this.useLightSources = true;
  }

  /**
   * Creates a light source. This will make the shape of your objects visible
   * and provide some contrast.
   * @param {Array.<Number>} pos Position of light source. Defaults to moving
   * with camera.
   * @param {Number} color Color of light, default 0xFFFFFF
   */
  createLight(
    pos: Coordinate3d | undefined = undefined,
    color: number = 0xffffff,
  ) {
    if (this.lightPosition) {
      console.warn(
        "Spacekit doesn't support more than one light source for SphereObjects",
      );
    }
    this.lightPosition = new THREE.Vector3();

    // Pointlight is for standard meshes created by ShapeObjects.
    // TODO(ian): Remove this point light.
    const pointLight = new THREE.PointLight();

    if (typeof pos === 'undefined') {
      // The light comes from the camera.
      // FIXME(ian): This only affects the point source.
      this.camera.get3jsCameraControls().addEventListener('change', () => {
        this.lightPosition!.copy(this.camera.get3jsCamera().position);
        pointLight.position.copy(this.camera.get3jsCamera().position);
      });
    } else {
      const rescaled = rescaleArray(pos);
      this.lightPosition.set(rescaled[0], rescaled[1], rescaled[2]);
      pointLight.position.set(rescaled[0], rescaled[1], rescaled[2]);
    }

    this.scene.add(pointLight);
    this.useLightSources = true;
  }

  getLightPosition(): Vector3 | undefined {
    return this.lightPosition;
  }

  isUsingLightSources(): boolean {
    return this.useLightSources;
  }

  /**
   * Returns a promise that receives a NaturalSatellites object when it is
   * resolved.
   * @return {Promise<NaturalSatellites>} NaturalSatellites object that is
   * ready to load.
   *
   * @see {NaturalSatellites}
   */
  loadNaturalSatellites(): Promise<NaturalSatellites> {
    return new NaturalSatellites(this).load();
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
      const rect = this.simulationElt.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const windowWidth =
        window.innerWidth || document.documentElement.clientWidth;
      const vertInView =
        rect.top <= windowHeight && rect.top + rect.height >= 0;
      const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

      return vertInView && horInView;
    };

    window.addEventListener('scroll', () => {
      const inView = isInView();
      if (previouslyInView && !inView) {
        // Went out of view
        this.renderEnabled = false;
        previouslyInView = false;
      } else if (!previouslyInView && inView) {
        // Came into view
        this.renderEnabled = true;
        window.requestAnimationFrame(this.animate);
        previouslyInView = true;
      }
    });

    if (!isInView()) {
      // Initial state is render enabled, so disable it if currently out of
      // view.
      this.renderEnabled = false;
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
  async zoomToFit(
    spaceObj: SpaceObject,
    offset: number = 3.0,
  ): Promise<boolean> {
    const orbit = spaceObj.getOrbit();
    const obj = orbit
      ? orbit.getOrbitShape()
      : await spaceObj.getBoundingObject();
    if (obj) {
      this.doZoomToFit(obj, offset);
      return true;
    }
    return false;
  }

  /**
   * @private
   * Perform the actual zoom to fit behavior.
   * @param {Object3D} obj Three.js object to fit within viewport.
   * @param {Number} offset Add some extra room in the viewport. Increase to be
   * further zoomed out, decrease to be closer. Default 3.0.
   */
  private doZoomToFit(obj: Object3D, offset: number) {
    const boundingBox = new THREE.Box3();
    boundingBox.setFromObject(obj);

    const center = new THREE.Vector3();
    boundingBox.getCenter(center);
    const size = new THREE.Vector3();
    boundingBox.getSize(size);

    // Get the max side of the bounding box (fits to width OR height as needed)
    const camera = this.camera.get3jsCamera();
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    const cameraZ = Math.abs((maxDim / 2) * Math.tan(fov * 2)) * offset;

    const objectWorldPosition = new THREE.Vector3();
    obj.getWorldPosition(objectWorldPosition);
    const directionVector = camera.position.sub(objectWorldPosition); // Get vector from camera to object
    const unitDirectionVector = directionVector.normalize(); // Convert to unit vector

    const newpos = unitDirectionVector.multiplyScalar(cameraZ);
    camera.position.x = newpos.x;
    camera.position.y = newpos.y;
    camera.position.z = newpos.z;
    camera.updateProjectionMatrix();

    // Update default camera pos so if drift is on, camera will drift around
    // its new position.
    this.cameraDefaultPos = [newpos.x, newpos.y, newpos.z];
  }

  /**
   * Run the animation
   */
  start() {
    this.lastUpdatedTime = Date.now();
    this.isPaused = false;
  }

  /**
   * Stop the animation
   */
  stop() {
    this.isPaused = true;
  }

  /**
   * Gets the current JD date of the simulation
   * @return {Number} JD date
   */
  getJd(): number {
    return this.jd;
  }

  /**
   * Sets the JD date of the simulation.
   * @param {Number} val JD date
   */
  setJd(val: number) {
    this.jd = val;
    this.update(true);
  }

  /**
   * Get a date object representing local date and time of the simulation.
   * @return {Date} Date of simulation
   */
  getDate(): Date {
    return julian.toDate(this.jd);
  }

  /**
   * Set the local date and time of the simulation.
   * @param {Date} date Date of simulation
   */
  setDate(date: Date) {
    this.setJd(Number(julian(date)));
  }

  /**
   * Get the JD per frame of the visualization.
   */
  getJdDelta() {
    if (!this.jdDelta) {
      return this.jdPerSecond / this.fps;
    }
    return this.jdDelta;
  }

  /**
   * Set the JD per frame of the visualization. This will override any
   * existing "JD per second" setting.
   * @param {Number} delta JD per frame
   */
  setJdDelta(delta: number) {
    this.jdDelta = delta;
  }

  /**
   * Get the JD change per second of the visualization.
   * @return {Number | undefined} JD per second, undefined if jd per second is
   * not set.
   */
  getJdPerSecond(): number | undefined {
    if (this.jdDelta) {
      // Jd per second can vary
      return undefined;
    }
    return this.jdPerSecond;
  }

  /**
   * Set the JD change per second of the visualization.
   * @param {Number} x JD per second
   */
  setJdPerSecond(x: number) {
    // Delta overrides jd per second, so unset it.
    this.jdDelta = undefined;

    this.jdPerSecond = x;
  }

  /**
   * Get an object that contains useful context for this visualization
   * @return {Object} Context object
   */
  getContext(): SimulationContext {
    return {
      simulation: this,
      options: this.options,
      objects: {
        particles: this.particles,
        camera: this.camera,
        scene: this.scene,
        renderer: this.renderer,
        composer: this.composer,
      },
      container: {
        width: this.simulationElt.offsetWidth,
        height: this.simulationElt.offsetHeight,
      },
    };
  }

  /**
   * Get the element containing this simulation
   * @return {HTMLElement} The html container of this simulation
   */
  getSimulationElement(): HTMLCanvasElement {
    return this.simulationElt;
  }

  /**
   * Get the Camera and CameraControls wrapper object
   * @return {Camera} The Camera wrapper
   */
  getViewer(): Camera {
    return this.camera;
  }

  /**
   * Get the three.js scene object
   * @return {THREE.Scene} The THREE.js scene object
   */
  getScene(): THREE.Scene {
    return this.scene;
  }

  /**
   * Get the three.js renderer
   * @return {THREE.WebGL1Renderer} The THREE.js renderer
   */
  getRenderer(): THREE.WebGL1Renderer {
    return this.renderer;
  }

  /**
   * Enable or disable camera drift.
   * @param {boolean} driftOn True if you want the camera to float around a bit
   */
  setCameraDrift(driftOn: boolean) {
    this.enableCameraDrift = driftOn;
  }
}

export default Simulation;
