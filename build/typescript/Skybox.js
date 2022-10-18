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
exports.__esModule = true;
exports.SkyboxPresets = exports.Skybox = void 0;
var THREE = __importStar(require("three"));
var util_1 = require("./util");
/**
 * A class that adds a skybox (technically a skysphere) to a visualization.
 */
var Skybox = /** @class */ (function () {
    /**
     * @param {Object} options Options
     * @param {String} options.textureUrl Texture to use
     * @param {String} options.basePath Base path to simulation supporting files
     * @param {Simulation} simulation Simulation object
     */
    function Skybox(options, simulation) {
        // TODO(ian): Support for actual box instead of sphere...
        this.options = options;
        this.id = "__skybox_".concat(new Date().getTime());
        // User passed in Simulation
        this.simulation = simulation;
        this.context = simulation.getContext();
        this.mesh = undefined;
        this.init();
    }
    /**
     * @private
     */
    Skybox.prototype.init = function () {
        var geometry = new THREE.SphereBufferGeometry(1e10, 32, 32);
        var fullTextureUrl = (0, util_1.getFullTextureUrl)(this.options.textureUrl, this.context.options.basePath);
        var texture = new THREE.TextureLoader().load(fullTextureUrl);
        var material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.BackSide
        });
        var sky = new THREE.Mesh(geometry, material);
        // See this thread on orientation of milky way:
        // https://www.physicsforums.com/threads/orientation-of-the-earth-sun-and-solar-system-in-the-milky-way.888643/
        sky.rotation.x = 0;
        sky.rotation.y = (-1 / 12) * Math.PI;
        sky.rotation.z = (8 / 5) * Math.PI;
        // We're on the inside of the skybox, so invert it to correct it.
        sky.scale.set(-1, 1, 1);
        this.mesh = sky;
        if (this.simulation) {
            this.simulation.addObject(this, true /* noUpdate */);
        }
    };
    /**
     * A list of THREE.js objects that are used to compose the skybox.
     * @return {THREE.Object3D[]} Skybox mesh
     */
    Skybox.prototype.get3jsObjects = function () {
        if (this.mesh) {
            return [this.mesh];
        }
        return [];
    };
    /**
     * Get the unique ID of this object.
     * @return {String} id
     */
    Skybox.prototype.getId = function () {
        return this.id;
    };
    Skybox.prototype.update = function () {
        // Skyboxes don't update
    };
    return Skybox;
}());
exports.Skybox = Skybox;
/**
 * Preset skybox objects that you can use to add a skybox to your
 * visualization.
 * @example
 * ```
 * const skybox = viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);
 * ```
 */
exports.SkyboxPresets = {
    ESO_GIGAGALAXY: {
        textureUrl: '{{assets}}/skybox/eso_milkyway.jpg'
    },
    ESO_LITE: {
        textureUrl: '{{assets}}/skybox/eso_lite.png'
    },
    NASA_TYCHO: {
        // from https://svs.gsfc.nasa.gov/3895
        textureUrl: '{{assets}}/skybox/nasa_tycho.jpg'
    }
};
