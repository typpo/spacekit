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
exports.__esModule = true;
exports.SpaceObjectPresets = exports.SpaceObject = void 0;
var THREE = __importStar(require("three"));
var EphemPresets_1 = require("./EphemPresets");
var Orbit_1 = require("./Orbit");
var util_1 = require("./util");
var Scale_1 = require("./Scale");
/**
 * @private
 * Minimum number of degrees per day an object must move in order for its
 * position to be updated in the visualization.
 */
// const MIN_DEG_MOVE_PER_DAY: number = 0.05;
/**
 * @private
 * Number of milliseconds between label position updates.
 */
var LABEL_UPDATE_MS = 30;
/**
 * @private
 * Converts [X, Y, Z] position in visualization to pixel coordinates.
 */
function toScreenXY(position, camera, canvas) {
    var pos = new THREE.Vector3(position[0], position[1], position[2]);
    pos.project(camera);
    return {
        x: ((pos.x + 1) * canvas.clientWidth) / 2,
        y: ((-pos.y + 1) * canvas.clientHeight) / 2
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
var SpaceObject = /** @class */ (function () {
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
    function SpaceObject(id, options, simulation, autoInit) {
        if (autoInit === void 0) { autoInit = true; }
        this._id = id;
        this._options = options || {};
        this._object3js = undefined;
        this._useEphemTable = this._options.ephemTable !== undefined;
        this._isStaticObject = !this._options.ephem && !this._useEphemTable;
        this._simulation = simulation;
        this._context = simulation.getContext();
        this._label = undefined;
        this._showLabel = false;
        this._lastLabelUpdate = 0;
        // this._lastPositionUpdate = 0;
        this._position = (0, Scale_1.rescaleArray)(this._options.position || [0, 0, 0]);
        this._orbitAround = undefined;
        this._scale = this._options.scale || [1, 1, 1];
        // The method of rendering used for this object (e.g. SPRITE, PARTICLESYSTEM).
        this._renderMethod = undefined;
        // The index of this particle in the KeplerParticles system, if applicable.
        this._particleIndex = undefined;
        // Number of degrees moved per day. Used to limit the number of orbit
        // updates for very slow moving objects.
        /*
        this._degreesPerDay = this._options.ephem
          ? this._options.ephem.get('n', 'deg')
          : undefined;
        */
        this._initialized = false;
        if (autoInit && !this.init()) {
            console.warn("SpaceObject ".concat(id, ": failed to initialize"));
        }
    }
    /**
     * Initializes label and three.js objects. Called automatically unless you've
     * set autoInit to false in constructor (this init is suppressed by some
     * child classes).
     */
    SpaceObject.prototype.init = function () {
        this.renderObject();
        if (this._options.labelText) {
            var labelElt = this.createLabel();
            this._simulation.getSimulationElement().appendChild(labelElt);
            this._label = labelElt;
            this._showLabel = true;
        }
        /**
         * Caching of THREE.js objects for orbitPath
         */
        this._orbitPath = undefined;
        this._eclipticLines = undefined;
        this.update(this._simulation.getJd(), true /* force */);
        this._initialized = true;
        return true;
    };
    /**
     * @protected
     * Used by child classes to set the object that gets its position updated.
     * @param {THREE.Object3D} obj Any THREE.js object
     */
    SpaceObject.prototype.setPositionedObject = function (obj) {
        this._object3js = obj;
    };
    /**
     * @private
     * Build the THREE.js object for this SpaceObject.
     */
    SpaceObject.prototype.renderObject = function () {
        if (this.isStaticObject()) {
            if (!this._renderMethod) {
                // TODO(ian): It kinda sucks to have SpaceObject care about
                // renderMethod, which is set by children.
                // Create a stationary sprite.
                this._object3js = this.createSprite();
                if (this._simulation) {
                    // Add it all to visualization.
                    this._simulation.addObject(this, false /* noUpdate */);
                }
                this._renderMethod = 'SPRITE';
            }
        }
        else {
            // Create the orbit no matter what - it's used to get current position
            // for CPU-positioned objects (e.g. child RotatingObjects, SphereObjects,
            // ShapeObjects).
            // TODO(ian): Only do this if we need to compute orbit position on the
            // CPU or display an orbit path.
            this._orbit = this.createOrbit();
            if (!this._options.hideOrbit && this._simulation) {
                // Add it all to visualization.
                this._simulation.addObject(this, false /* noUpdate */);
            }
            if (this._useEphemTable) {
                if (!this._renderMethod) {
                    this._object3js = this.createSprite();
                    if (this._simulation) {
                        this._simulation.addObject(this, true);
                    }
                    this._renderMethod = 'SPRITE';
                }
            }
            if (!this._renderMethod) {
                if (!this._options.ephem) {
                    throw new Error('Attempting to create a particle system, but ephemeris are not available.');
                }
                // Create a particle representing this object on the GPU.
                this._particleIndex = this._context.objects.particles.addParticle(this._options.ephem, {
                    particleSize: this._options.particleSize,
                    color: this.getColor()
                });
                this._renderMethod = 'PARTICLESYSTEM';
            }
        }
    };
    /**
     * @private
     * Builds the label div and adds it to the visualization
     * @return {HTMLElement} A div that contains the label for this object
     */
    SpaceObject.prototype.createLabel = function () {
        var text = document.createElement('div');
        text.className = 'spacekit__object-label';
        var _a = this._options, labelText = _a.labelText, labelUrl = _a.labelUrl;
        if (this._options.labelUrl) {
            text.innerHTML = "<div><a target=\"_blank\" href=\"".concat(labelUrl, "\">").concat(labelText, "</a></div>");
        }
        else {
            text.innerHTML = "<div>".concat(labelText, "</div>");
        }
        text.style.fontFamily = 'Arial';
        text.style.fontSize = '12px';
        text.style.color = '#fff';
        text.style.position = 'absolute';
        text.style.backgroundColor = '#0009';
        text.style.outline = '1px solid #5f5f5f';
        return text;
    };
    /**
     * @private
     * Updates the label's position
     * @param {Array.Number} newpos Position of the label in the visualization's
     * coordinate system
     */
    SpaceObject.prototype.updateLabelPosition = function (newpos) {
        if (!this._label) {
            throw new Error('Attempted to update label position without a label');
        }
        var label = this._label;
        var simulationElt = this._simulation.getSimulationElement();
        var pos = toScreenXY(newpos, this._simulation.getViewer().get3jsCamera(), simulationElt);
        var loc = {
            left: pos.x,
            top: pos.y,
            right: pos.x + label.clientWidth,
            bottom: pos.y + label.clientHeight
        };
        if (loc.left - 30 > 0 &&
            loc.right + 20 < simulationElt.clientWidth &&
            loc.top - 25 > 0 &&
            loc.bottom < simulationElt.clientHeight) {
            label.style.left = "".concat(loc.left - label.clientWidth / 2, "px");
            label.style.top = "".concat(loc.top - label.clientHeight - 8, "px");
            label.style.visibility = 'visible';
        }
        else {
            label.style.visibility = 'hidden';
        }
    };
    /**
     * @private
     * Builds the sprite for this object
     * @return {THREE.Sprite} A sprite object
     */
    SpaceObject.prototype.createSprite = function () {
        if (!this._options.textureUrl) {
            throw new Error('Cannot create sprite without a textureUrl');
        }
        var fullTextureUrl = (0, util_1.getFullTextureUrl)(this._options.textureUrl, this._context.options.basePath);
        var texture = new THREE.TextureLoader().load(fullTextureUrl);
        texture.encoding = THREE.LinearEncoding;
        var sprite = new THREE.Sprite(new THREE.SpriteMaterial({
            map: texture,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            color: this._options.theme ? this._options.theme.color : 0xffffff
        }));
        var scale = (0, Scale_1.rescaleArray)(this._scale);
        sprite.scale.set(scale[0], scale[1], scale[2]);
        var position = this.getPosition(this._simulation.getJd());
        sprite.position.set(position[0], position[1], position[2]);
        if (this.isStaticObject()) {
            sprite.updateMatrix();
            sprite.matrixAutoUpdate = false;
        }
        return sprite;
    };
    /**
     * @private
     * Builds the {Orbit} for this object
     * @return {Orbit} An orbit object
     */
    SpaceObject.prototype.createOrbit = function () {
        if (this._orbit) {
            return this._orbit;
        }
        var ephem = this._useEphemTable
            ? this._options.ephemTable
            : this._options.ephem;
        if (!ephem) {
            throw new Error('Cannot create orbit without Ephem or EphemerisTable');
        }
        return new Orbit_1.Orbit(ephem, {
            orbitPathSettings: this._options.orbitPathSettings,
            color: this._options.theme ? this._options.theme.orbitColor : undefined,
            eclipticLineColor: this._options.ecliptic
                ? this._options.ecliptic.lineColor
                : undefined
        });
    };
    /**
     * @private
     * Determines whether to update the position of an update. Don't update if JD
     * threshold is less than a certain amount.
     * @param {Number} afterJd Next JD
     * @return {boolean} Whether to update
     */
    SpaceObject.prototype.shouldUpdateObjectPosition = function (afterJd) {
        // TODO(ian): Reenable this as a function of zoom level, because as you get
        // closer the chopiness gets more noticeable.
        return true;
        /*
        if (!this._degreesPerDay || !this._lastPositionUpdate) {
          return true;
        }
        const degMove = this._degreesPerDay * (afterJd - this._lastPositionUpdate);
        if (degMove < MIN_DEG_MOVE_PER_DAY) {
          return false;
        }
        return true;
        */
    };
    /**
     * Make this object orbit another orbit.
     * @param {Object} spaceObj The SpaceObject that will serve as the origin of this object's orbit.
     */
    SpaceObject.prototype.orbitAround = function (spaceObj) {
        this._orbitAround = spaceObj;
    };
    /**
     * Updates the position of this object. Applicable only if this object is a
     * sprite and not a particle type.
     * @param {Number} x X position
     * @param {Number} y Y position
     * @param {Number} z Z position
     */
    SpaceObject.prototype.setPosition = function (x, y, z) {
        this._position[0] = (0, Scale_1.rescaleNumber)(x);
        this._position[1] = (0, Scale_1.rescaleNumber)(y);
        this._position[2] = (0, Scale_1.rescaleNumber)(z);
    };
    /**
     * Gets the visualization coordinates of this object at a given time.
     * @param {Number} jd JD date
     * @return {Array.<Number>} [X, Y,Z] coordinates
     */
    SpaceObject.prototype.getPosition = function (jd) {
        var pos = this._position;
        if (!this._orbit) {
            // Default implementation, a static object.
            return pos;
        }
        var posModified = this._orbit.getPositionAtTime(jd);
        if (this._orbitAround) {
            var parentPos = this._orbitAround.getPosition(jd);
            return [
                pos[0] + posModified[0] + parentPos[0],
                pos[1] + posModified[1] + parentPos[1],
                pos[2] + posModified[2] + parentPos[2],
            ];
        }
        return [
            pos[0] + posModified[0],
            pos[1] + posModified[1],
            pos[2] + posModified[2],
        ];
    };
    /**
     * Updates the object and its label positions for a given time.
     * @param {Number} jd JD date
     * @param {boolean} force Whether to force an update regardless of checks for
     * movement.
     */
    SpaceObject.prototype.update = function (jd, force) {
        var _a, _b, _c;
        if (force === void 0) { force = false; }
        var newpos;
        if (this._label) {
            // Labels must update, even for static objects.
            // TODO(ian): Determine this based on orbit and camera position change.
            var meetsLabelUpdateThreshold = +new Date() - this._lastLabelUpdate > LABEL_UPDATE_MS;
            var shouldUpdateLabelPos = force || (this._showLabel && meetsLabelUpdateThreshold);
            if (shouldUpdateLabelPos) {
                if (!newpos) {
                    newpos = this.getPosition(jd);
                }
                this.updateLabelPosition(newpos);
                this._lastLabelUpdate = +new Date();
            }
        }
        if (this.isStaticObject() && !force) {
            return;
        }
        var shouldUpdateObjectPosition = false;
        if (this._object3js || this._label) {
            shouldUpdateObjectPosition = force || this.shouldUpdateObjectPosition(jd);
        }
        if (this._object3js && shouldUpdateObjectPosition) {
            newpos = this.getPosition(jd);
            this._object3js.position.set(newpos[0], newpos[1], newpos[2]);
            // this._lastPositionUpdate = jd;
        }
        var orbitNeedsRefreshing = !this._orbitPath || ((_a = this._orbit) === null || _a === void 0 ? void 0 : _a.needsUpdateForTime(jd));
        if (this._orbit && !this._options.hideOrbit && orbitNeedsRefreshing) {
            if (this._orbitPath) {
                this._simulation.getScene().remove(this._orbitPath);
            }
            this._orbitPath = this._orbit.getOrbitShape(jd, true);
            this._simulation.getScene().add(this._orbitPath);
        }
        var eclipticNeedsRefreshing = !this._eclipticLines || orbitNeedsRefreshing;
        if (this._orbit &&
            this._options.ecliptic &&
            this._options.ecliptic.displayLines &&
            eclipticNeedsRefreshing) {
            if (this._eclipticLines) {
                this._simulation.getScene().remove(this._eclipticLines);
            }
            this._eclipticLines = this._orbit.getLinesToEcliptic();
            this._simulation.getScene().add(this._eclipticLines);
        }
        if (this._orbitAround) {
            var parentPos = this._orbitAround.getPosition(jd);
            if (this._renderMethod === 'PARTICLESYSTEM') {
                // TODO(ian): Only do this when the origin changes
                (_b = this._context.objects.particles) === null || _b === void 0 ? void 0 : _b.setParticleOrigin(this._particleIndex, parentPos);
            }
            if (!this._options.hideOrbit) {
                (_c = this._orbitPath) === null || _c === void 0 ? void 0 : _c.position.set(parentPos[0], parentPos[1], parentPos[2]);
            }
            if (!newpos) {
                newpos = this.getPosition(jd);
            }
        }
    };
    /**
     * Gets the THREE.js objects that represent this SpaceObject.  The first
     * object returned is the primary object.  Other objects may be returned,
     * such as rings, ellipses, etc.
     * @return {Array.<THREE.Object3D>} A list of THREE.js objects
     */
    SpaceObject.prototype.get3jsObjects = function () {
        var ret = [];
        if (this._object3js) {
            ret.push(this._object3js);
        }
        if (this._orbit) {
            if (this._orbitPath) {
                ret.push(this._orbitPath);
            }
            if (this._eclipticLines) {
                ret.push(this._eclipticLines);
            }
        }
        return ret;
    };
    /**
     * Specifies the object that is used to compute the bounding box. By default,
     * this will be the first THREE.js object in this class's list of objects.
     * @return {THREE.Object3D} THREE.js object
     */
    SpaceObject.prototype.getBoundingObject = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(this.get3jsObjects()[0])];
            });
        });
    };
    /**
     * Gets the color of this object. Usually this corresponds to the color of
     * the dot representing the object as well as its orbit.
     * @return {Number} A hexidecimal color value, e.g. 0xFFFFFF
     */
    SpaceObject.prototype.getColor = function () {
        if (this._options.theme) {
            return this._options.theme.color || 0xffffff;
        }
        return 0xffffff;
    };
    /**
     * Gets the {Orbit} object for this SpaceObject.
     * @return {Orbit} Orbit object
     */
    SpaceObject.prototype.getOrbit = function () {
        return this._orbit;
    };
    /**
     * Gets label visilibity status.
     * @return {boolean} Whether label is visible.
     */
    SpaceObject.prototype.getLabelVisibility = function () {
        return this._showLabel;
    };
    /**
     * Toggle the visilibity of the label.
     * @param {boolean} val Whether to show or hide.
     */
    SpaceObject.prototype.setLabelVisibility = function (val) {
        if (!this._label) {
            throw new Error('Attempted to set label visibility without a label');
        }
        if (val) {
            this._showLabel = true;
            this._label.style.display = 'block';
        }
        else {
            this._showLabel = false;
            this._label.style.display = 'none';
        }
    };
    /**
     * Gets the unique ID of this object.
     * @return {String} Unique ID
     */
    SpaceObject.prototype.getId = function () {
        return this._id;
    };
    /**
     * Determines whether object is static (can't change its position) or whether
     * its position can be updated (ie, it has ephemeris)
     * @return {boolean} Whether this object can change its position.
     */
    SpaceObject.prototype.isStaticObject = function () {
        return this._isStaticObject;
    };
    /**
     * Determines whether object is ready to be measured or added to scene.
     * @return {boolean} True if ready
     */
    SpaceObject.prototype.isReady = function () {
        return this._initialized;
    };
    SpaceObject.prototype.removalCleanup = function () {
        var _a;
        if (this._label) {
            this._simulation.getSimulationElement().removeChild(this._label);
            this._label = undefined;
        }
        if (this._particleIndex !== undefined) {
            (_a = this._context) === null || _a === void 0 ? void 0 : _a.objects.particles.hideParticle(this._particleIndex);
        }
    };
    return SpaceObject;
}());
exports.SpaceObject = SpaceObject;
var DEFAULT_PLANET_TEXTURE_URL = '{{assets}}/sprites/smallparticle.png';
/**
 * Useful presets for creating SpaceObjects.
 * @example
 * ```
 * const myobject = viz.addObject('planet1', Spacekit.SpaceObjectPresets.MERCURY);
 * ```
 */
exports.SpaceObjectPresets = {
    SUN: {
        textureUrl: '{{assets}}/sprites/lensflare0.png',
        position: [0, 0, 0]
    },
    MERCURY: {
        textureUrl: DEFAULT_PLANET_TEXTURE_URL,
        theme: {
            color: 0x913cee
        },
        ephem: EphemPresets_1.EphemPresets.MERCURY
    },
    VENUS: {
        textureUrl: DEFAULT_PLANET_TEXTURE_URL,
        theme: {
            color: 0xff7733
        },
        ephem: EphemPresets_1.EphemPresets.VENUS
    },
    EARTH: {
        textureUrl: DEFAULT_PLANET_TEXTURE_URL,
        theme: {
            color: 0x009acd
        },
        ephem: EphemPresets_1.EphemPresets.EARTH
    },
    MOON: {
        textureUrl: DEFAULT_PLANET_TEXTURE_URL,
        theme: {
            color: 0xffd700
        },
        ephem: EphemPresets_1.EphemPresets.MOON,
        // Special params
        particleSize: 6
    },
    MARS: {
        textureUrl: DEFAULT_PLANET_TEXTURE_URL,
        theme: {
            color: 0xa63a3a
        },
        ephem: EphemPresets_1.EphemPresets.MARS
    },
    JUPITER: {
        textureUrl: DEFAULT_PLANET_TEXTURE_URL,
        theme: {
            color: 0xffb90f
        },
        ephem: EphemPresets_1.EphemPresets.JUPITER
    },
    SATURN: {
        textureUrl: DEFAULT_PLANET_TEXTURE_URL,
        theme: {
            color: 0x336633
        },
        ephem: EphemPresets_1.EphemPresets.SATURN
    },
    URANUS: {
        textureUrl: DEFAULT_PLANET_TEXTURE_URL,
        theme: {
            color: 0x0099ff
        },
        ephem: EphemPresets_1.EphemPresets.URANUS
    },
    NEPTUNE: {
        textureUrl: DEFAULT_PLANET_TEXTURE_URL,
        theme: {
            color: 0x3333ff
        },
        ephem: EphemPresets_1.EphemPresets.NEPTUNE
    },
    PLUTO: {
        textureUrl: DEFAULT_PLANET_TEXTURE_URL,
        theme: {
            color: 0xccc0b0
        },
        ephem: EphemPresets_1.EphemPresets.PLUTO
    }
};
