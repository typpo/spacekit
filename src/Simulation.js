import julian from 'julian';

import { Camera } from './Camera';
import { Skybox } from './Skybox';
import { ShapeObject } from './ShapeObject';
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
 *  camera: {
 *    position: [0, -10, 5],
 *    enableDrift: false,
 *  },
 *  debug: {
 *    showAxes: false,
 *    showGrid: false,
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

    this._enableCameraDrift = false;
    this._cameraDefaultPos = [0, -10, 5];
    if (this._options.camera) {
      this._enableCameraDrift = !!this._options.camera.enableDrift;
      this._cameraDefaultPos = this._options.camera.initialPosition || this._cameraDefaultPos;
    }

    this._camera = null;
    this._cameraControls = null;

    this._subscribedObjects = {};
    this._particles = null;

    this._renderEnabled = true;
    this._boundAnimate = this.animate.bind(this);

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
    // TODO(ian): Set maxDistance to prevent camera farplane cutoff.
    // See https://discourse.threejs.org/t/camera-zoom-to-fit-object/936/6
    this._cameraControls = new THREE.TrackballControls(this._camera, this._simulationElt);
    this._cameraControls.userPanSpeed = 20;
    this._cameraControls.rotateSpeed = 2;

    // Events
    this._simulationElt.onmousedown = this._simulationElt.ontouchstart = () => {
      // When user begins interacting with the visualization, disable camera
      // drift.
      this._enableCameraDrift = false;
    };

    // Helper
    if (this._options.debug) {
      if (this._options.debug.showGrid) {
        const gridHelper = new THREE.GridHelper();
        gridHelper.geometry.rotateX(Math.PI / 2);
        this._scene.add(gridHelper);
      }
      if (this._options.debug.showAxes) {
        this._scene.add(new THREE.AxesHelper(5));
      }
      if (this._options.debug.showStats) {
        this._stats = new Stats();
        this._stats.showPanel(0);
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
  doCameraDrift() {
    // Follow floating path around
    const timer = 0.0001 * Date.now();
    const pos = this._cameraDefaultPos;
    this._camera.position.x = pos[0] + pos[0] * (Math.cos(timer) + 1) / 3;
    this._camera.position.z = pos[2] + pos[2] * (Math.sin(timer) + 1) / 3;
  }

  /**
   * @private
   */
  animate() {
    if (!this._renderEnabled) {
      return;
    }

    window.requestAnimationFrame(this._boundAnimate);

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
    if (this._enableCameraDrift) {
      this.doCameraDrift();
    }
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
   * Shortcut for creating a new ShapeObject belonging to this visualization.
   * Takes any ShapeObject arguments.
   * @see ShapeObject
   */
  createShape(...args) {
    return new ShapeObject(...args, this);
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
   * Creates an ambient light source. This will dimly light everything in the
   * visualization.
   * @param {Number} color Color of light, default 0x333333
   */
  createAmbientLight(color = 0x333333) {
    this._scene.add(new THREE.AmbientLight(color));
  }

  /**
   * Creates a light source. This will make the shape of your objects visible
   * and provide some contrast.
   * @param {Array.<Number>} pos Position of light source. Defaults to moving
   * with camera.
   * @param {Number} color Color of light, default 0xFFFFFF
   */
  createLight(pos = undefined, color = 0xFFFFFF) {
    const pointLight = new THREE.PointLight(color, 1, 0, 2);
    if (typeof pos !== 'undefined') {
      pointLight.position.set(pos[0], pos[1], pos[2]);
    } else {
      this._cameraControls.addEventListener('change', () => {
        pointLight.position.copy(this._camera.position);
      });
    }
    this._scene.add(pointLight);
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
      const rect = this._simulationElt.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
      const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
      const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

      return (vertInView && horInView);
    };

    window.addEventListener('scroll', () => {
      const inView = isInView();
      if (previouslyInView && !inView) {
        // Went out of view
        this._renderEnabled = false;
        previouslyInView = false;
      } else if (!previouslyInView && inView) {
        // Came into view
        this._renderEnabled = true;
        window.requestAnimationFrame(this._boundAnimate);
        previouslyInView = true;
      }
    });

    if (!isInView()) {
      // Initial state is render enabled, so disable it if currently out of
      // view.
      this._renderEnabled = false;
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
  zoomToFit(spaceObj, offset = 3.0) {
    const checkZoomFit = () => {
      const orbit = spaceObj.getOrbit();
      const obj = orbit ? orbit.getEllipse() : spaceObj.get3jsObjects()[0];
      if (obj) {
        this.doZoomToFit(obj, offset);
        return true;
      }
      return false;
    };

    // Wait until the object has been fully created.
    const bePatient = () => {
      if (!checkZoomFit()) {
        setTimeout(() => {
          bePatient();
        }, 100);
      }
    };
    bePatient();
  }

  /**
   * @private
   * Perform the actual zoom to fit behavior.
   * @param {SpaceObject} spaceObj Object to fit within viewport.
   * @param {Number} offset Add some extra room in the viewport. Increase to be
   * further zoomed out, decrease to be closer. Default 3.0.
   */
  doZoomToFit(obj, offset) {
    const boundingBox = new THREE.Box3();
    boundingBox.setFromObject(obj);

    const center = new THREE.Vector3();
    boundingBox.getCenter(center);
    const size = new THREE.Vector3();
    boundingBox.getSize(size);

    // Get the max side of the bounding box (fits to width OR height as needed)
    const camera = this._camera;
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    const cameraZ = Math.abs(maxDim / 2 * Math.tan(fov * 2)) * offset;

    const objectWorldPosition = new THREE.Vector3();
    obj.getWorldPosition(objectWorldPosition);
    const directionVector = camera.position.sub(objectWorldPosition); 	// Get vector from camera to object
    const unitDirectionVector = directionVector.normalize(); // Convert to unit vector

    const newpos = unitDirectionVector.multiplyScalar(cameraZ);
    camera.position.x = newpos.x;
    camera.position.y = newpos.y;
    camera.position.z = newpos.z;
    camera.updateProjectionMatrix();

    // Update default camera pos so if drift is on, camera will drift around
    // its new position.
    this._cameraDefaultPos = [newpos.x, newpos.y, newpos.z];
  }

  /**
   * Run the animation
   */
  start() {
    this._lastUpdatedTime = Date.now();
    this._isPaused = false;
  }

  /**
   * Stop the animation
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
        camera: this._camera,
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

  /**
   * Get the three.js controls
   * @return {THREE.TrackballControls} THREE.js controls object
   */
  getControls() {
    return this._cameraControls;
  }

  /**
   * Enable or disable camera drift.
   * @param {boolean} driftOn True if you want the camera to float around a bit
   */
  setCameraDrift(driftOn) {
    this._enableCameraDrift = driftOn;
  }
}
