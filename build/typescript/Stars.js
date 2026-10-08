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
exports.Stars = void 0;
var THREE = __importStar(require("three"));
var Coordinates_1 = __importDefault(require("./Coordinates"));
var Units_1 = __importDefault(require("./Units"));
var shaders_1 = require("./shaders");
var util_1 = require("./util");
/**
 * Maps spectral class to star color
 * @param temp {Number} Star temperature in Kelvin
 * @return {Number} Color for star of given spectral class
 */
function getColorForStar(temp) {
    if (temp >= 30000)
        return 0x92b5ff;
    if (temp >= 10000)
        return 0xa2c0ff;
    if (temp >= 7500)
        return 0xd5e0ff;
    if (temp >= 6000)
        return 0xf9f5ff;
    if (temp >= 5200)
        return 0xffede3;
    if (temp >= 3700)
        return 0xffdab5;
    if (temp >= 2400)
        return 0xffb56c;
    return 0xffb56c;
}
/**
 * Returns the pixel size of a star.
 * @param mag {Number} Absolute magnitude of star
 * @param minSize {Number} Pixel size of the smallest star
 * @return {Number} Pixel size of star.
 */
function getSizeForStar(mag, minSize) {
    if (mag < 2.0)
        return minSize * 4;
    if (mag < 4.0)
        return minSize * 2;
    if (mag < 6.0)
        return minSize;
    return 1;
}
/**
 * Builds a starry background that is accurate for the Earth's position in
 * space.
 */
var Stars = /** @class */ (function () {
    /**
     * @param {Number} options.minSize The size of the smallest star.
     * Defaults to 0.75
     */
    function Stars(options, simulation) {
        this._options = options;
        this._id = "__stars_".concat(new Date().getTime());
        this._simulation = simulation;
        this._context = simulation.getContext();
        this._stars = undefined;
        this.init();
    }
    Stars.prototype.init = function () {
        var _this = this;
        var dataUrl = (0, util_1.getFullUrl)('{{data}}/processed/bsc.json', this._context.options.basePath);
        fetch(dataUrl)
            .then(function (resp) { return resp.json(); })
            .then(function (library) {
            var n = library.length;
            var geometry = new THREE.BufferGeometry();
            var positions = new Float32Array(n * 3);
            var colors = new Float32Array(n * 3);
            var sizes = new Float32Array(n);
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
            library.forEach(function (star, idx) {
                var ra = star[0], dec = star[1], temp = star[2], mag = star[3];
                var raRad = Units_1["default"].rad(Units_1["default"].hoursToDeg(ra));
                var decRad = Units_1["default"].rad(dec);
                var cartesianSpherical = Coordinates_1["default"].sphericalToCartesian(raRad, decRad, 1e9);
                var pos = Coordinates_1["default"].equatorialToEcliptic_Cartesian(cartesianSpherical[0], cartesianSpherical[1], cartesianSpherical[2], Coordinates_1["default"].getObliquity());
                positions.set(pos, idx * 3);
                var color = new THREE.Color(getColorForStar(temp));
                colors.set(color.toArray(), idx * 3);
                sizes[idx] = getSizeForStar(mag, _this._options.minSize || 3.0 /* minSize */);
            });
            var material = new THREE.ShaderMaterial({
                uniforms: {},
                vertexColors: true,
                vertexShader: shaders_1.STAR_SHADER_VERTEX,
                fragmentShader: shaders_1.STAR_SHADER_FRAGMENT,
                transparent: true
            });
            _this._stars = new THREE.Points(geometry, material);
            if (_this._simulation) {
                _this._simulation.addObject(_this, true /* noUpdate */);
            }
        });
    };
    /**
     * A list of THREE.js objects that are used to compose this object
     * @return {THREE.Object3D[]} Star objects
     */
    Stars.prototype.get3jsObjects = function () {
        if (this._stars) {
            return [this._stars];
        }
        return [];
    };
    /**
     * Get the unique ID of this object.
     * @return {String} id
     */
    Stars.prototype.getId = function () {
        return this._id;
    };
    Stars.prototype.update = function () {
        // Stars don't update
    };
    return Stars;
}());
exports.Stars = Stars;
