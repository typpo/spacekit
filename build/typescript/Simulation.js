"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Simulation = void 0;
var THREE = __importStar(require("three"));
// @ts-ignore
var julian_1 = __importDefault(require("julian"));
var stats_module_1 = __importDefault(require("three/examples/jsm/libs/stats.module"));
var postprocessing_1 = require("postprocessing");
var Camera_1 = __importDefault(require("./Camera"));
var KeplerParticles_1 = require("./KeplerParticles");
var EphemPresets_1 = require("./EphemPresets");
var ShapeObject_1 = require("./ShapeObject");
var Skybox_1 = require("./Skybox");
var SpaceObject_1 = require("./SpaceObject");
var SphereObject_1 = require("./SphereObject");
var StaticParticles_1 = require("./StaticParticles");
var Stars_1 = require("./Stars");
var util_1 = require("./util");
var Scale_1 = require("./Scale");
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
var Simulation = /** @class */ (function () {
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
    function Simulation(simulationElt, options) {
        this.simulationElt = simulationElt;
        this.options = options || {};
        this.options.basePath = this.options.basePath || (0, util_1.getDefaultBasePath)();
        this.jd =
            typeof this.options.jd === 'undefined'
                ? Number((0, julian_1["default"])(this.options.startDate || new Date()))
                : this.options.jd;
        this.jdDelta = this.options.jdDelta;
        this.jdPerSecond = this.options.jdPerSecond || 100;
        this.isPaused = options.startPaused || false;
        this.onTick = undefined;
        this.enableCameraDrift = false;
        this.cameraDefaultPos = (0, Scale_1.rescaleArray)([0, -10, 5]);
        if (this.options.camera) {
            this.enableCameraDrift = !!this.options.camera.enableDrift;
            if (this.options.camera.initialPosition) {
                this.cameraDefaultPos = (0, Scale_1.rescaleArray)(this.options.camera.initialPosition);
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
            (0, Scale_1.setScaleFactor)(this.options.unitsPerAu);
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
        this.camera = new Camera_1["default"](this.getContext());
        this.composer = undefined;
        // Orbit particle system must be initialized after scene is created and
        // scale is set.
        this.particles = new KeplerParticles_1.KeplerParticles({
            textureUrl: this.options.particleTextureUrl ||
                '{{assets}}/sprites/smallparticle.png',
            jd: this.jd,
            maxNumParticles: this.options.maxNumParticles,
            defaultSize: this.options.particleDefaultSize
        }, this);
        this.init();
        this.animate();
    }
    /**
     * @private
     */
    Simulation.prototype.init = function () {
        var _this = this;
        // Camera
        this.camera
            .get3jsCamera()
            .position.set(this.cameraDefaultPos[0], this.cameraDefaultPos[1], this.cameraDefaultPos[2]);
        // window.cam = camera.get3jsCamera();
        // Events
        this.simulationElt.onmousedown = this.simulationElt.ontouchstart = function () {
            // When user begins interacting with the visualization, disable camera
            // drift.
            _this.enableCameraDrift = false;
        };
        (function () {
            var listenToCameraEvents = false;
            _this.camera.get3jsCameraControls().addEventListener('change', function () {
                // Camera will send a few initial events - ignore these.
                if (listenToCameraEvents) {
                    _this.staticForcedUpdate();
                }
            });
            setTimeout(function () {
                // Send an update when the visualization is done loading.
                _this.staticForcedUpdate();
                listenToCameraEvents = true;
                _this.initialRenderComplete = true;
            }, 0);
        })();
        this.simulationElt.addEventListener('resize', function () {
            _this.resizeUpdate();
        });
        window.addEventListener('resize', function () {
            _this.resizeUpdate();
        });
        // Helper
        if (this.options.debug) {
            if (this.options.debug.showGrid) {
                var gridHelper = new THREE.GridHelper(undefined, undefined);
                gridHelper.geometry.rotateX(Math.PI / 2);
                this.scene.add(gridHelper);
            }
            if (this.options.debug.showAxes) {
                this.scene.add(new THREE.AxesHelper(0.5));
            }
            if (this.options.debug.showStats) {
                this.stats = new stats_module_1["default"]();
                this.stats.showPanel(0);
                this.simulationElt.appendChild(this.stats.dom);
            }
        }
        // Set up effect composer, etc.
        this.initPasses();
    };
    /**
     * @private
     */
    Simulation.prototype.initRenderer = function () {
        // TODO(ian): Upgrade to webgl 2. See https://discourse.threejs.org/t/webgl2-breaking-custom-shader/16603/4
        var renderer = new THREE.WebGL1Renderer({
            antialias: true
        });
        console.info('Max texture resolution:', renderer.capabilities.maxTextureSize);
        var maxPrecision = renderer.capabilities.getMaxPrecision('highp');
        if (maxPrecision !== 'highp') {
            console.warn("Shader maximum precision is \"".concat(maxPrecision, "\", GPU rendering may not be accurate."));
        }
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(this.simulationElt.offsetWidth, this.simulationElt.offsetHeight);
        this.simulationElt.appendChild(renderer.domElement);
        return renderer;
    };
    /**
     * @private
     */
    Simulation.prototype.initPasses = function () {
        //const smaaEffect = new SMAAEffect(assets.get("smaa-search"), assets.get("smaa-area"));
        //smaaEffect.colorEdgesMaterial.setEdgeDetectionThreshold(0.065);
        var camera = this.camera.get3jsCamera();
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
        var bloomEffect = new postprocessing_1.BloomEffect({
            width: 240,
            height: 240,
            luminanceThreshold: 0.2
        });
        bloomEffect.blendMode.opacity.value = 2.3;
        var renderPass = new postprocessing_1.RenderPass(this.scene, camera);
        renderPass.renderToScreen = false;
        var effectPass = new postprocessing_1.EffectPass(camera, 
        /*smaaEffect, godRaysEffect*/ bloomEffect);
        effectPass.renderToScreen = true;
        var composer = new postprocessing_1.EffectComposer(this.renderer);
        composer.addPass(renderPass);
        composer.addPass(effectPass);
        this.composer = composer;
    };
    /**
     * @private
     */
    Simulation.prototype.update = function (force) {
        if (force === void 0) { force = false; }
        for (var objId in this.subscribedObjects) {
            if (this.subscribedObjects.hasOwnProperty(objId)) {
                this.subscribedObjects[objId].update(this.jd, force);
            }
        }
    };
    /**
     * Performs a forced update of all elements in the view. This is used for when the system isn't animating but the
     * objects need to update their data to properly capture things like updated label positions.
     * @private
     */
    Simulation.prototype.staticForcedUpdate = function () {
        if (this.isPaused) {
            var now = Date.now();
            var timeDelta = now - this.lastStaticCameraUpdateTime;
            var threshold = 30;
            // TODO(ian): Also do this based on viewport change. Otherwise things like scrolling don't work well.
            if (timeDelta > threshold) {
                this.update(true /* force */);
                this.lastStaticCameraUpdateTime = now;
            }
        }
    };
    /**
     * @private
     * Updates the size of the control and forces a refresh of components whenever the control is being resized.
     */
    Simulation.prototype.resizeUpdate = function () {
        var now = Date.now();
        var timeDelta = now - this.lastResizeUpdateTime;
        var threshold = 30;
        if (timeDelta > threshold) {
            var newWidth = this.simulationElt.offsetWidth;
            var newHeight = this.simulationElt.offsetHeight;
            if (newWidth === 0 && newHeight === 0) {
                return;
            }
            var camera = this.camera.get3jsCamera();
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            this.renderer.setSize(newWidth, newHeight);
            this.staticForcedUpdate();
            this.lastResizeUpdateTime = now;
        }
    };
    /**
     * @private
     * TODO(ian): Move this into Camera
     */
    Simulation.prototype.doCameraDrift = function () {
        // Follow floating path around
        var timer = 0.0001 * Date.now();
        var pos = this.cameraDefaultPos;
        var cam = this.camera.get3jsCamera();
        cam.position.x = pos[0] + (pos[0] * (Math.cos(timer) + 1)) / 3;
        cam.position.z = pos[2] + (pos[2] * (Math.sin(timer) + 1)) / 3;
    };
    /**
     * @private
     */
    Simulation.prototype.animate = function () {
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
            }
            else {
                // N jd per second
                this.jd += this.jdPerSecond / this.fps;
            }
            var timeDelta = (Date.now() - this.lastUpdatedTime) / 1000;
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
    };
    /**
     * Add a spacekit object (usually a SpaceObject) to the visualization.
     * @see SpaceObject
     * @param {Object} obj Object to add to visualization
     * @param {boolean} noUpdate Set to true if object does not need to be
     * animated.
     */
    Simulation.prototype.addObject = function (obj, noUpdate) {
        var _this = this;
        if (noUpdate === void 0) { noUpdate = false; }
        obj.get3jsObjects().map(function (x) {
            _this.scene.add(x);
        });
        if (!noUpdate) {
            // Call for updates as time passes.
            var objId = obj.getId();
            if (this.subscribedObjects[objId]) {
                console.error("Object id is not unique: \"".concat(objId, "\". This could prevent objects from updating correctly."));
            }
            this.subscribedObjects[objId] = obj;
        }
    };
    /**
     * Removes an object from the visualization.
     * @param {Object} obj Object to remove
     */
    Simulation.prototype.removeObject = function (obj) {
        var _this = this;
        // TODO(ian): test this and avoid memory leaks...
        obj.get3jsObjects().map(function (x) {
            _this.scene.remove(x);
        });
        if (typeof obj.removalCleanup === 'function') {
            obj.removalCleanup();
        }
        delete this.subscribedObjects[obj.getId()];
    };
    /**
     * Shortcut for creating a new SpaceObject belonging to this visualization.
     * Takes any SpaceObject arguments.
     * @see SpaceObject
     */
    // @ts-ignore
    Simulation.prototype.createObject = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // @ts-ignore
        return new (SpaceObject_1.SpaceObject.bind.apply(SpaceObject_1.SpaceObject, __spreadArray(__spreadArray([void 0], args, false), [this], false)))();
    };
    /**
     * Shortcut for creating a new ShapeObject belonging to this visualization.
     * Takes any ShapeObject arguments.
     * @see ShapeObject
     */
    // @ts-ignore
    Simulation.prototype.createShape = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // @ts-ignore
        return new (ShapeObject_1.ShapeObject.bind.apply(ShapeObject_1.ShapeObject, __spreadArray(__spreadArray([void 0], args, false), [this], false)))();
    };
    /**
     * Shortcut for creating a new SphereOjbect belonging to this visualization.
     * Takes any SphereObject arguments.
     * @see SphereObject
     */
    // @ts-ignore
    Simulation.prototype.createSphere = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // @ts-ignore
        return new (SphereObject_1.SphereObject.bind.apply(SphereObject_1.SphereObject, __spreadArray(__spreadArray([void 0], args, false), [this], false)))();
    };
    /**
     * Shortcut for creating a new StaticParticles object belonging to this visualization.
     * Takes any StaticParticles arguments.
     * @see SphereObject
     */
    // @ts-ignore
    Simulation.prototype.createStaticParticles = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // @ts-ignore
        return new (StaticParticles_1.StaticParticles.bind.apply(StaticParticles_1.StaticParticles, __spreadArray(__spreadArray([void 0], args, false), [this], false)))();
    };
    /**
     * Shortcut for creating a new Skybox belonging to this visualization. Takes
     * any Skybox arguments.
     * @see Skybox
     */
    // @ts-ignore
    Simulation.prototype.createSkybox = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // @ts-ignore
        return new (Skybox_1.Skybox.bind.apply(Skybox_1.Skybox, __spreadArray(__spreadArray([void 0], args, false), [this], false)))();
    };
    /**
     * Shortcut for creating a new Stars object belonging to this visualization.
     * Takes any Stars arguments.
     * @see Stars
     */
    // @ts-ignore
    Simulation.prototype.createStars = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length) {
            // @ts-ignore
            return new (Stars_1.Stars.bind.apply(Stars_1.Stars, __spreadArray(__spreadArray([void 0], args, false), [this], false)))();
        }
        // No arguments supplied
        return new Stars_1.Stars({}, this);
    };
    /**
     * Creates an ambient light source. This will dimly light everything in the
     * visualization.
     * @param {Number} color Color of light, default 0x333333
     */
    Simulation.prototype.createAmbientLight = function (color) {
        if (color === void 0) { color = 0x333333; }
        this.scene.add(new THREE.AmbientLight(color));
        this.useLightSources = true;
    };
    /**
     * Creates a light source. This will make the shape of your objects visible
     * and provide some contrast.
     * @param {Array.<Number>} pos Position of light source. Defaults to moving
     * with camera.
     * @param {Number} color Color of light, default 0xFFFFFF
     */
    Simulation.prototype.createLight = function (pos, color) {
        var _this = this;
        if (pos === void 0) { pos = undefined; }
        if (color === void 0) { color = 0xffffff; }
        if (this.lightPosition) {
            console.warn("Spacekit doesn't support more than one light source for SphereObjects");
        }
        this.lightPosition = new THREE.Vector3();
        // Pointlight is for standard meshes created by ShapeObjects.
        // TODO(ian): Remove this point light.
        var pointLight = new THREE.PointLight();
        if (typeof pos === 'undefined') {
            // The light comes from the camera.
            // FIXME(ian): This only affects the point source.
            this.camera.get3jsCameraControls().addEventListener('change', function () {
                _this.lightPosition.copy(_this.camera.get3jsCamera().position);
                pointLight.position.copy(_this.camera.get3jsCamera().position);
            });
        }
        else {
            var rescaled = (0, Scale_1.rescaleArray)(pos);
            this.lightPosition.set(rescaled[0], rescaled[1], rescaled[2]);
            pointLight.position.set(rescaled[0], rescaled[1], rescaled[2]);
        }
        this.scene.add(pointLight);
        this.useLightSources = true;
    };
    Simulation.prototype.getLightPosition = function () {
        return this.lightPosition;
    };
    Simulation.prototype.isUsingLightSources = function () {
        return this.useLightSources;
    };
    /**
     * Returns a promise that receives a NaturalSatellites object when it is
     * resolved.
     * @return {Promise<NaturalSatellites>} NaturalSatellites object that is
     * ready to load.
     *
     * @see {NaturalSatellites}
     */
    Simulation.prototype.loadNaturalSatellites = function () {
        return new EphemPresets_1.NaturalSatellites(this).load();
    };
    /**
     * Installs a scroll handler that only renders the visualization while it is
     * in the user's viewport.
     *
     * The scroll handler currently binds to the window object only.
     */
    Simulation.prototype.renderOnlyInViewport = function () {
        var _this = this;
        var previouslyInView = true;
        var isInView = function () {
            var rect = _this.simulationElt.getBoundingClientRect();
            var windowHeight = window.innerHeight || document.documentElement.clientHeight;
            var windowWidth = window.innerWidth || document.documentElement.clientWidth;
            var vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
            var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
            return vertInView && horInView;
        };
        window.addEventListener('scroll', function () {
            var inView = isInView();
            if (previouslyInView && !inView) {
                // Went out of view
                _this.renderEnabled = false;
                previouslyInView = false;
            }
            else if (!previouslyInView && inView) {
                // Came into view
                _this.renderEnabled = true;
                window.requestAnimationFrame(_this.animate);
                previouslyInView = true;
            }
        });
        if (!isInView()) {
            // Initial state is render enabled, so disable it if currently out of
            // view.
            this.renderEnabled = false;
            previouslyInView = false;
        }
    };
    /**
     * Adjust camera position so that the object fits within the viewport. If
     * applicable, this function will fit around the object's orbit.
     * @param {SpaceObject} spaceObj Object to fit within viewport.
     * @param {Number} offset Add some extra room in the viewport. Increase to be
     * further zoomed out, decrease to be closer. Default 3.0.
     */
    Simulation.prototype.zoomToFit = function (spaceObj, offset) {
        if (offset === void 0) { offset = 3.0; }
        return __awaiter(this, void 0, void 0, function () {
            var orbit, obj, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        orbit = spaceObj.getOrbit();
                        if (!orbit) return [3 /*break*/, 1];
                        _a = orbit.getOrbitShape();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, spaceObj.getBoundingObject()];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        obj = _a;
                        if (obj) {
                            this.doZoomToFit(obj, offset);
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    /**
     * @private
     * Perform the actual zoom to fit behavior.
     * @param {Object3D} obj Three.js object to fit within viewport.
     * @param {Number} offset Add some extra room in the viewport. Increase to be
     * further zoomed out, decrease to be closer. Default 3.0.
     */
    Simulation.prototype.doZoomToFit = function (obj, offset) {
        var boundingBox = new THREE.Box3();
        boundingBox.setFromObject(obj);
        var center = new THREE.Vector3();
        boundingBox.getCenter(center);
        var size = new THREE.Vector3();
        boundingBox.getSize(size);
        // Get the max side of the bounding box (fits to width OR height as needed)
        var camera = this.camera.get3jsCamera();
        var maxDim = Math.max(size.x, size.y, size.z);
        var fov = camera.fov * (Math.PI / 180);
        var cameraZ = Math.abs((maxDim / 2) * Math.tan(fov * 2)) * offset;
        var objectWorldPosition = new THREE.Vector3();
        obj.getWorldPosition(objectWorldPosition);
        var directionVector = camera.position.sub(objectWorldPosition); // Get vector from camera to object
        var unitDirectionVector = directionVector.normalize(); // Convert to unit vector
        var newpos = unitDirectionVector.multiplyScalar(cameraZ);
        camera.position.x = newpos.x;
        camera.position.y = newpos.y;
        camera.position.z = newpos.z;
        camera.updateProjectionMatrix();
        // Update default camera pos so if drift is on, camera will drift around
        // its new position.
        this.cameraDefaultPos = [newpos.x, newpos.y, newpos.z];
    };
    /**
     * Run the animation
     */
    Simulation.prototype.start = function () {
        this.lastUpdatedTime = Date.now();
        this.isPaused = false;
    };
    /**
     * Stop the animation
     */
    Simulation.prototype.stop = function () {
        this.isPaused = true;
    };
    /**
     * Gets the current JD date of the simulation
     * @return {Number} JD date
     */
    Simulation.prototype.getJd = function () {
        return this.jd;
    };
    /**
     * Sets the JD date of the simulation.
     * @param {Number} val JD date
     */
    Simulation.prototype.setJd = function (val) {
        this.jd = val;
        this.update(true);
    };
    /**
     * Get a date object representing local date and time of the simulation.
     * @return {Date} Date of simulation
     */
    Simulation.prototype.getDate = function () {
        return julian_1["default"].toDate(this.jd);
    };
    /**
     * Set the local date and time of the simulation.
     * @param {Date} date Date of simulation
     */
    Simulation.prototype.setDate = function (date) {
        this.setJd(Number((0, julian_1["default"])(date)));
    };
    /**
     * Get the JD per frame of the visualization.
     */
    Simulation.prototype.getJdDelta = function () {
        if (!this.jdDelta) {
            return this.jdPerSecond / this.fps;
        }
        return this.jdDelta;
    };
    /**
     * Set the JD per frame of the visualization. This will override any
     * existing "JD per second" setting.
     * @param {Number} delta JD per frame
     */
    Simulation.prototype.setJdDelta = function (delta) {
        this.jdDelta = delta;
    };
    /**
     * Get the JD change per second of the visualization.
     * @return {Number | undefined} JD per second, undefined if jd per second is
     * not set.
     */
    Simulation.prototype.getJdPerSecond = function () {
        if (this.jdDelta) {
            // Jd per second can vary
            return undefined;
        }
        return this.jdPerSecond;
    };
    /**
     * Set the JD change per second of the visualization.
     * @param {Number} x JD per second
     */
    Simulation.prototype.setJdPerSecond = function (x) {
        // Delta overrides jd per second, so unset it.
        this.jdDelta = undefined;
        this.jdPerSecond = x;
    };
    /**
     * Get an object that contains useful context for this visualization
     * @return {Object} Context object
     */
    Simulation.prototype.getContext = function () {
        return {
            simulation: this,
            options: this.options,
            objects: {
                particles: this.particles,
                camera: this.camera,
                scene: this.scene,
                renderer: this.renderer,
                composer: this.composer
            },
            container: {
                width: this.simulationElt.offsetWidth,
                height: this.simulationElt.offsetHeight
            }
        };
    };
    /**
     * Get the element containing this simulation
     * @return {HTMLElement} The html container of this simulation
     */
    Simulation.prototype.getSimulationElement = function () {
        return this.simulationElt;
    };
    /**
     * Get the Camera and CameraControls wrapper object
     * @return {Camera} The Camera wrapper
     */
    Simulation.prototype.getViewer = function () {
        return this.camera;
    };
    /**
     * Get the three.js scene object
     * @return {THREE.Scene} The THREE.js scene object
     */
    Simulation.prototype.getScene = function () {
        return this.scene;
    };
    /**
     * Get the three.js renderer
     * @return {THREE.WebGL1Renderer} The THREE.js renderer
     */
    Simulation.prototype.getRenderer = function () {
        return this.renderer;
    };
    /**
     * Enable or disable camera drift.
     * @param {boolean} driftOn True if you want the camera to float around a bit
     */
    Simulation.prototype.setCameraDrift = function (driftOn) {
        this.enableCameraDrift = driftOn;
    };
    return Simulation;
}());
exports.Simulation = Simulation;
exports["default"] = Simulation;
