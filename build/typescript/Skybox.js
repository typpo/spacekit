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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.SkyboxPresets = exports.Skybox = exports.getSkyboxOrientationTransform = void 0;
var THREE = __importStar(require("three"));
var Coordinates_1 = __importDefault(require("./Coordinates"));
var Units_1 = __importDefault(require("./Units"));
var util_1 = require("./util");
var EQUATORIAL_TO_GALACTIC_MATRIX = [
    [-0.0548755604, -0.8734370902, -0.4838350155],
    [0.4941094279, -0.44482963, 0.7469822445],
    [-0.867666149, -0.1980763734, 0.4559837762],
];
function transpose3(matrix) {
    return matrix[0].map(function (_, colIdx) { return matrix.map(function (row) { return row[colIdx]; }); });
}
function makeMatrix4From3x3(matrix) {
    return new THREE.Matrix4().set(matrix[0][0], matrix[0][1], matrix[0][2], 0, matrix[1][0], matrix[1][1], matrix[1][2], 0, matrix[2][0], matrix[2][1], matrix[2][2], 0, 0, 0, 0, 1);
}
function getAstronomicalProjectionTransform() {
    return new THREE.Matrix4()
        .makeRotationX(Math.PI / 2)
        .multiply(new THREE.Matrix4().makeRotationY(Math.PI));
}
function getEquatorialToEclipticTransform(obliquity) {
    return new THREE.Matrix4().set(1, 0, 0, 0, 0, Math.cos(obliquity), Math.sin(obliquity), 0, 0, -Math.sin(obliquity), Math.cos(obliquity), 0, 0, 0, 0, 1);
}
function getGalacticToEclipticTransform(obliquity) {
    var galacticToEquatorial = makeMatrix4From3x3(transpose3(EQUATORIAL_TO_GALACTIC_MATRIX));
    return getEquatorialToEclipticTransform(obliquity).multiply(galacticToEquatorial);
}
function getSkyboxOrientationTransform(options, obliquity) {
    if (obliquity === void 0) { obliquity = Coordinates_1["default"].getObliquity(); }
    var nativeTextureAdjustment = new THREE.Matrix4();
    if (options.longitudeOffsetDeg) {
        nativeTextureAdjustment.multiply(new THREE.Matrix4().makeRotationZ(Units_1["default"].rad(options.longitudeOffsetDeg)));
    }
    if (options.mirrorLongitude) {
        nativeTextureAdjustment.multiply(new THREE.Matrix4().makeScale(1, -1, 1));
    }
    return getGalacticToEclipticTransform(obliquity)
        .multiply(nativeTextureAdjustment)
        .multiply(getAstronomicalProjectionTransform());
}
exports.getSkyboxOrientationTransform = getSkyboxOrientationTransform;
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
            side: THREE.BackSide,
            transparent: (this.options.opacity || 1) < 1,
            opacity: this.options.opacity || 1
        });
        var sky = new THREE.Mesh(geometry, material);
        sky.applyMatrix4(getSkyboxOrientationTransform(this.options));
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
        // Source: ESO eso0932a, a galaxy-centric Milky Way panorama with the
        // galactic plane horizontal and the bulge centered in the image.
        textureUrl: '{{assets}}/skybox/eso_milkyway.jpg',
        longitudeOffsetDeg: 180,
        mirrorLongitude: true
    },
    ESO_LITE: {
        // Derived from the same ESO galaxy-centric panorama convention as
        // ESO_GIGAGALAXY.
        textureUrl: '{{assets}}/skybox/eso_lite.png',
        longitudeOffsetDeg: 180,
        mirrorLongitude: true
    },
    NASA_TYCHO: {
        // Source: NASA SVS 3895 /vis/.../starmap_g8k.jpg, the galactic-coordinate
        // Deep Star Maps product. The bundled nasa_tycho.jpg matches that file
        // byte-for-byte.
        textureUrl: '{{assets}}/skybox/nasa_tycho.jpg',
        longitudeOffsetDeg: 180,
        mirrorLongitude: true
    }
};
