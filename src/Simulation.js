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
   * @param {Number} options.jed The JED start date for this simulation.
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
    this._camera.position.set(0, -10, 5);
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

    this.update();
    this._cameraControls.update();
    this._renderer.render(this._scene, this._camera);

    if (this.onTick) {
      this.onTick();
    }

    if (this._stats) {
      this._stats.end();
    }
  }

  addObject(obj, noUpdate = false) {
    obj.get3jsObjects().map((x) => {
      this._scene.add(x);
    });

    if (!noUpdate) {
      // Call for updates as time passes.
      this._subscribedObjects[obj.getId()] = obj;
    }
  }

  removeObject(obj) {
    // TODO(ian): test this and avoid memory leaks...
    obj.get3jsObjects().map((x) => {
      this._scene.remove(x);
    });

    delete this._subscribedObjects[obj.getId()];
  }

  createObject(...args) {
    return new SpaceObject(...args, this);
  }

  createSkybox(...args) {
    return new Skybox(...args, this);
  }

  start() {
    this._lastUpdatedTime = Date.now();
    this._isPaused = false;
  }

  stop() {
    this._isPaused = true;
  }

  getJed() {
    return this._jed;
  }

  setJed(val) {
    this._jed = val;
  }

  getDate() {
    return julian.toDate(this._jed);
  }

  setDate(date) {
    this.setJed(julian.toJulianDay(date));
  }

  setJedDelta(delta) {
    this._jedDelta = delta;
  }

  getJedDelta() {
    if (!this._jedDelta) {
      return this._jedPerSecond / this._fps;
    }
    return this._jedDelta;
  }

  setJedPerSecond(x) {
    // Delta overrides jed per second, so unset it.
    this._jedDelta = undefined;

    this._jedPerSecond = x;
  }

  getJedPerSecond() {
    if (this._jedDelta) {
      // Jed per second can vary
      return undefined;
    }
    return this._jedPerSecond;
  }

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

  getSimulationElement() {
    return this._simulationElt;
  }

  getCamera() {
    return this._camera;
  }
}
