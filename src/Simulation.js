import julian from 'julian';

import { Camera } from './Camera';
import { Skybox } from './Skybox';
import { SpaceObject } from './SpaceObject';
import { SpaceParticles } from './SpaceParticles';

/**
 * The main entrypoint of a visualization.
 *
 * This class wraps a THREE.js scene, controls, skybox, etc in an animated
 * Simulation.
 *
 * @example
 * const sim = new Spacekit.Simulation('my-container', {
 *  startDate: Date.now(),
 *  jed: 0.0,
 *  jedDelta: 10.0,
 *  jedPerSecond: 100.0,  // overrides jedDelta
 *  startPaused: false,
 *  maxNumParticles: 2**16,
 *  debug: {
 *    showAxesHelper: false,
 *    showStats: false,
 *  },
 * });
 */
export class Simulation {
  /**
   * @param {HTMLElement} simulationElt The container for this simulation.
   * @param {Object} options for simulation
   * @param {Date} options.startDate The start date and time for this
   * simulation.
   * @param {Number} options.jed The JED date of this simulation.
   * Defaults to 0
   * @param {Number} options.jedDelta The number of JED to add every tick of
   * the simulation.
   * @param {Number} options.jedPerSecond The number of jed to add every
   * second. Use this instead of `jedDelta` for constant motion that does not
   * vary with framerate. Defaults to 100
   * @param {boolean} options.startPaused Whether the simulation should start
   * in a paused state.
   * @param {Number} options.maxNumParticles The maximum number of particles in
   * the visualization. Try choosing a number that is larger than your
   * particles, but not too much larger. It's usually good enough to choose the
   * next highest power of 2. If you're not showing many particles (tens of
   * thousands+), you don't need to worry about this.
   * @param {Object} options.debug Options dictating debug state.
   * @param {boolean} options.debug.showAxesHelper Show X, Y, and Z axes
   * @param {boolean} options.debug.showStats Show FPS and other stats
   * (requires stats.js).
   */
  constructor(simulationElt, options) {
    this._simulationElt = simulationElt;
    this._options = options || {};

    this._jed = this._options.jed || julian.toJulianDay(this._options.startDate) || 0;
    this._jedDelta = this._options.jedDelta;
    this._jedPerSecond = this._options.jedPerSecond || 100;
    this._isPaused = options.startPaused || false;
    this.onTick = null;

    this._scene = null;
    this._renderer = null;

    this._cameraDefaultPos = [0, -10, 5];
    this._camera = null;
    this._cameraControls = null;

    this._subscribedObjects = {};
    this._particles = null;

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

    // Scene
    this._scene = new THREE.Scene();

    // Camera
    this._camera = new Camera(this.getContext()).get3jsCamera();
    this._camera.position.set(this._cameraDefaultPos[0],
                              this._cameraDefaultPos[1],
                              this._cameraDefaultPos[2]);
    window.cam = this._camera;

    // Controls
    this._cameraControls = new THREE.TrackballControls(this._camera, this._simulationElt);
    this._cameraControls.userPanSpeed = 20;
    this._cameraControls.rotateSpeed = 2;

    // Helper
    if (this._options.debug) {
      if (this._options.debug.showAxesHelper) {
        this._scene.add(new THREE.AxesHelper(5));
      }
      if (this._options.debug.showStats) {
        this._stats = new Stats();
        this._stats.showPanel(0);
        window.sssss = this._stats;
        this._simulationElt.appendChild(this._stats.dom);
      }
    }

    // Orbit particle system must be initialized after scene is created.
    this._particles = new SpaceParticles({
      textureUrl: '{{assets}}/sprites/smallparticle.png',
      jed: this._jed,
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
        this._subscribedObjects[objId].update(this._jed);
      }
    }
  }

  /**
   * @private
   */
  addCameraDrift() {
    // Follow floating path around
    var timer = 0.0001 * Date.now();
    this._camera.position.x = this._cameraDefaultPos[0] + Math.sin(timer);
    this._camera.position.z = this._cameraDefaultPos[2] + Math.sin(timer);

  }

  /**
   * @private
   */
  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    if (this._stats) {
      this._stats.begin();
    }

    if (!this._isPaused) {
      if (this._jedDelta) {
        this._jed += this._jedDelta;
      } else {
        // N jed per second
        this._jed += (this._jedPerSecond) / this._fps;
      }

      const timeDelta = (Date.now() - this._lastUpdatedTime) / 1000;
      this._lastUpdatedTime = Date.now();
      this._fps = (1 / timeDelta) || 1;
    }

    // Update objects in this simulation
    this.update();
    // Update camera drifting, if applicable
    this.addCameraDrift();
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
   * Shortcut for creating a new Skybox belonging to this visualization. Takes
   * any Skybox arguments.
   * @see Skybox
   */
  createSkybox(...args) {
    return new Skybox(...args, this);
  }

  /**
   * Start time
   */
  start() {
    this._lastUpdatedTime = Date.now();
    this._isPaused = false;
  }

  /**
   * Stop time
   */
  stop() {
    this._isPaused = true;
  }

  /**
   * Gets the current JED date of the simulation
   * @return {Number} JED date
   */
  getJed() {
    return this._jed;
  }

  /**
   * Sets the JED date of the simulation.
   * @param {Number} val JED date
   */
  setJed(val) {
    this._jed = val;
  }

  /**
   * Get a date object representing current date and time of the simulation.
   * @return {Date} Date of simulation
   */
  getDate() {
    return julian.toDate(this._jed);
  }

  /**
   * Set the date and time of the simulation.
   * @param {Date} date Date of simulation
   */
  setDate(date) {
    this.setJed(julian.toJulianDay(date));
  }

  /**
   * Get the JED per frame of the visualization.
   */
  getJedDelta() {
    if (!this._jedDelta) {
      return this._jedPerSecond / this._fps;
    }
    return this._jedDelta;
  }

  /**
   * Set the JED per frame of the visualization. This will override any
   * existing "JED per second" setting.
   * @param {Number} delta JED per frame
   */
  setJedDelta(delta) {
    this._jedDelta = delta;
  }

  /**
   * Get the JED change per second of the visualization.
   * @return {Number} JED per second
   */
  getJedPerSecond() {
    if (this._jedDelta) {
      // Jed per second can vary
      return undefined;
    }
    return this._jedPerSecond;
  }

  /**
   * Set the JED change per second of the visualization.
   * @return {Number} x JED per second
   */
  setJedPerSecond(x) {
    // Delta overrides jed per second, so unset it.
    this._jedDelta = undefined;

    this._jedPerSecond = x;
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
}
