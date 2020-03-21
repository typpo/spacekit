import * as THREE from 'three';
import julian from 'julian';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import {
  EffectComposer,
  BlendFunction,
  EffectPass,
  GodRaysEffect,
  BloomEffect,
  KernelSize,
  SMAAEffect,
  RenderPass,
} from 'postprocessing';

import { Camera } from './Camera';
import { KeplerParticles } from './KeplerParticles';
import { NaturalSatellites } from './EphemPresets';
import { ShapeObject } from './ShapeObject';
import { Skybox } from './Skybox';
import { SpaceObject } from './SpaceObject';
import { SphereObject } from './SphereObject';
import { Stars } from './Stars';
import { getDefaultBasePath } from './util';
import { setScaleFactor, rescaleArray, rescaleNumber } from './Scale';

/**
 * The main entrypoint of a visualization.
 *
 * This class wraps a THREE.js scene, controls, skybox, etc in an animated
 * Simulation.
 *
 * @example
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
 */
export class Simulation {
  /**
   * @param {HTMLElement} simulationElt The container for this simulation.
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
  constructor(simulationElt, options) {
    this._simulationElt = simulationElt;
    this._options = options || {};
    this._options.basePath = this._options.basePath || getDefaultBasePath();

    this._jd =
      typeof this._options.jd === 'undefined'
        ? julian.toJulianDay(this._options.startDate) || 0
        : this._options.jd;
    this._jdDelta = this._options.jdDelta;
    this._jdPerSecond = this._options.jdPerSecond || 100;
    this._isPaused = options.startPaused || false;
    this.onTick = null;

    this._enableCameraDrift = false;
    this._cameraDefaultPos = rescaleArray([0, -10, 5]);
    if (this._options.camera) {
      this._enableCameraDrift = !!this._options.camera.enableDrift;
      if (this._options.camera.initialPosition) {
        this._cameraDefaultPos = rescaleArray(
          this._options.camera.initialPosition,
        );
      }
    }

    this._camera = null;
    this._isUsingLightSources = false;
    this._lightPosition = null;

    this._subscribedObjects = {};
    this._particles = null;

    // stats.js panel
    this._stats = null;
    this._fps = 1;
    this._lastUpdatedTime = Date.now();

    // Rendering
    this._renderEnabled = true;
    this.animate = this.animate.bind(this);

    this._scene = null;
    this._renderer = null;
    this._composer = null;

    this.init();
    this.animate();
  }

  /**
   * @private
   */
  init() {
    this.initRenderer();

    // Misc
    // This makes controls.lookAt and other objects treat the positive Z axis
    // as "up" direction.
    THREE.Object3D.DefaultUp = new THREE.Vector3(0, 0, 1);

    // Scale
    if (this._options.unitsPerAu) {
      setScaleFactor(this._options.unitsPerAu);
    }

    // Scene
    const scene = new THREE.Scene();
    this._scene = scene;

    // Camera
    const camera = new Camera(this.getContext());
    camera
      .get3jsCamera()
      .position.set(
        this._cameraDefaultPos[0],
        this._cameraDefaultPos[1],
        this._cameraDefaultPos[2],
      );
    window.cam = camera.get3jsCamera();
    this._camera = camera;

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
        this._scene.add(new THREE.AxesHelper(0.5));
      }
      if (this._options.debug.showStats) {
        this._stats = new Stats();
        this._stats.showPanel(0);
        this._simulationElt.appendChild(this._stats.dom);
      }
    }

    // Orbit particle system must be initialized after scene is created.
    this._particles = new KeplerParticles(
      {
        textureUrl:
          this._options.particleTextureUrl ||
          '{{assets}}/sprites/smallparticle.png',
        jd: this._jd,
        maxNumParticles: this._options.maxNumParticles,
        defaultSize: this._options.particleDefaultSize,
      },
      this,
    );

    // Set up effect composer, etc.
    this.initPasses();
  }

  /**
   * @private
   */
  initRenderer() {
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      //logarithmicDepthBuffer: true,
    });
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    console.info(
      'Max texture resolution:',
      renderer.capabilities.maxTextureSize,
    );

    const maxPrecision = renderer.capabilities.getMaxPrecision();
    if (maxPrecision !== 'highp') {
      console.warn(
        `Shader maximum precision is "${maxPrecision}", GPU rendering may not be accurate.`,
      );
    }

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(
      this._simulationElt.offsetWidth,
      this._simulationElt.offsetHeight,
    );

    this._simulationElt.appendChild(renderer.domElement);

    this._renderer = renderer;
  }

  /**
   * @private
   */
  initPasses() {
    //const smaaEffect = new SMAAEffect(assets.get("smaa-search"), assets.get("smaa-area"));
    //smaaEffect.colorEdgesMaterial.setEdgeDetectionThreshold(0.065);

    const camera = this._camera.get3jsCamera();

    /*
    const sunGeometry = new THREE.SphereBufferGeometry(
      rescaleNumber(0.004),
      16,
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

    const bloomEffect = new BloomEffect(this._scene, camera, {
      width: 240,
      height: 240,
      luminanceThreshold: 0.2,
    });
    bloomEffect.inverted = true;
    bloomEffect.blendMode.opacity.value = 2.3;

    const renderPass = new RenderPass(this._scene, camera);
    renderPass.renderToScreen = false;

    const effectPass = new EffectPass(
      camera,
      /*smaaEffect, godRaysEffect*/ bloomEffect,
    );
    effectPass.renderToScreen = true;

    const composer = new EffectComposer(this._renderer);
    composer.addPass(renderPass);
    composer.addPass(effectPass);
    this._composer = composer;
  }

  /**
   * @private
   */
  update() {
    for (const objId in this._subscribedObjects) {
      if (this._subscribedObjects.hasOwnProperty(objId)) {
        this._subscribedObjects[objId].update(this._jd);
      }
    }
  }

  /**
   * @private
   * TODO(ian): Move this into Camera
   */
  doCameraDrift() {
    // Follow floating path around
    const timer = 0.0001 * Date.now();
    const pos = this._cameraDefaultPos;
    const cam = this._camera.get3jsCamera();
    cam.position.x = pos[0] + (pos[0] * (Math.cos(timer) + 1)) / 3;
    cam.position.z = pos[2] + (pos[2] * (Math.sin(timer) + 1)) / 3;
  }

  /**
   * @private
   */
  animate() {
    if (!this._renderEnabled) {
      return;
    }

    window.requestAnimationFrame(this.animate);

    if (this._stats) {
      this._stats.begin();
    }

    if (!this._isPaused) {
      if (this._jdDelta) {
        this._jd += this._jdDelta;
      } else {
        // N jd per second
        this._jd += this._jdPerSecond / this._fps;
      }

      const timeDelta = (Date.now() - this._lastUpdatedTime) / 1000;
      this._lastUpdatedTime = Date.now();
      this._fps = 1 / timeDelta || 1;
    }

    // Update objects in this simulation
    this.update();

    // Update camera drifting, if applicable
    if (this._enableCameraDrift) {
      this.doCameraDrift();
    }
    this._camera.update();

    // Update three.js scene
    this._renderer.render(this._scene, this._camera.get3jsCamera());
    //this._composer.render(0.1);

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
    obj.get3jsObjects().map(x => {
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
    obj.get3jsObjects().map(x => {
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
   * Shortcut for creating a new SphereOjbect belonging to this visualization.
   * Takes any SphereObject arguments.
   * @see SphereObject
   */
  createSphere(...args) {
    return new SphereObject(...args, this);
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
   * Shortcut for creating a new Stars object belonging to this visualization.
   * Takes any Stars arguments.
   * @see Stars
   */
  createStars(...args) {
    if (args.length) {
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
  createAmbientLight(color = 0x333333) {
    this._scene.add(new THREE.AmbientLight(color));
    this._isUsingLightSources = true;
  }

  /**
   * Creates a light source. This will make the shape of your objects visible
   * and provide some contrast.
   * @param {Array.<Number>} pos Position of light source. Defaults to moving
   * with camera.
   * @param {Number} color Color of light, default 0xFFFFFF
   */
  createLight(pos = undefined, color = 0xffffff) {
    if (this._lightPosition) {
      console.warn(
        "Spacekit doesn't support more than one light source for SphereObjects",
      );
    }
    this._lightPosition = new THREE.Vector3();

    // Pointlight is for standard meshes created by ShapeObjects.
    // TODO(ian): Remove this point light.
    const pointLight = new THREE.PointLight();

    if (typeof pos !== 'undefined') {
      const rescaled = rescaleArray(pos);
      this._lightPosition.set(rescaled[0], rescaled[1], rescaled[2]);
      pointLight.position.set(rescaled[0], rescaled[1], rescaled[2]);
    } else {
      // The light comes from the camera.
      // FIXME(ian): This only affects the point source.
      this._camera.get3jsCameraControls().addEventListener('change', () => {
        this._lightPosition.copy(this._camera.get3jsCamera().position);
        pointLight.position.copy(this._camera.get3jsCamera().position);
      });
    }

    this._scene.add(pointLight);
    this._isUsingLightSources = true;
  }

  getLightPosition() {
    return this._lightPosition;
  }

  isUsingLightSources() {
    return this._isUsingLightSources;
  }

  /**
   * Returns a promise that receives a NaturalSatellites object when it is
   * resolved.  @return {Promise<NaturalSatellites>} NaturalSatellites object
   * that is ready to load.
   *
   * @see {NaturalSatellites}
   */
  loadNaturalSatellites() {
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
      const rect = this._simulationElt.getBoundingClientRect();
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
        this._renderEnabled = false;
        previouslyInView = false;
      } else if (!previouslyInView && inView) {
        // Came into view
        this._renderEnabled = true;
        window.requestAnimationFrame(this.animate);
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
      const obj = orbit ? orbit.getOrbitShape() : spaceObj.getBoundingObject();
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
   * @param {SpaceObject} obj Object to fit within viewport.
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
    const camera = this._camera.get3jsCamera();
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
   * Gets the current JD date of the simulation
   * @return {Number} JD date
   */
  getJd() {
    return this._jd;
  }

  /**
   * Sets the JD date of the simulation.
   * @param {Number} val JD date
   */
  setJd(val) {
    this._jd = val;
  }

  /**
   * Get a date object representing local date and time of the simulation.
   * @return {Date} Date of simulation
   */
  getDate() {
    return julian.toDate(this._jd);
  }

  /**
   * Set the local date and time of the simulation.
   * @param {Date} date Date of simulation
   */
  setDate(date) {
    this.setJd(julian(date));
  }

  /**
   * Get the JD per frame of the visualization.
   */
  getJdDelta() {
    if (!this._jdDelta) {
      return this._jdPerSecond / this._fps;
    }
    return this._jdDelta;
  }

  /**
   * Set the JD per frame of the visualization. This will override any
   * existing "JD per second" setting.
   * @param {Number} delta JD per frame
   */
  setJdDelta(delta) {
    this._jdDelta = delta;
  }

  /**
   * Get the JD change per second of the visualization.
   * @return {Number} JD per second
   */
  getJdPerSecond() {
    if (this._jdDelta) {
      // Jd per second can vary
      return undefined;
    }
    return this._jdPerSecond;
  }

  /**
   * Set the JD change per second of the visualization.
   * @return {Number} x JD per second
   */
  setJdPerSecond(x) {
    // Delta overrides jd per second, so unset it.
    this._jdDelta = undefined;

    this._jdPerSecond = x;
  }

  /**
   * Get an object that contains useful context for this visualization
   * @return {Object} Context object
   */
  getContext() {
    return {
      simulation: this,
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
   * Get the Camera and CameraControls wrapper object
   * @return {Camera} The Camera wrapper
   */
  getViewer() {
    return this._camera;
  }

  /**
   * Get the three.js scene object
   * @return {THREE.Scene} The THREE.js scene object
   */
  getScene() {
    return this._scene;
  }

  /**
   * Enable or disable camera drift.
   * @param {boolean} driftOn True if you want the camera to float around a bit
   */
  setCameraDrift(driftOn) {
    this._enableCameraDrift = driftOn;
  }
}
