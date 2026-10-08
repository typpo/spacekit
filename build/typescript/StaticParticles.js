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
exports.StaticParticles = void 0;
var THREE = __importStar(require("three"));
var shaders_1 = require("./shaders");
var DEFAULT_PARTICLE_SIZE = 4;
var DEFAULT_COLOR = 0xffffff;
/**
 * Simulates a static particle field in whichever base reference the simulation is in.
 */
var StaticParticles = /** @class */ (function () {
    /**
     *
     * @param {String} id Unique ID for this object
     * @param {Array.Array.<Number>} points an array of X,Y,Z cartesian points, one for each particle
     * @param {Object} options container
     * @param {Color} options.defaultColor color to use for all particles can be a THREE string color name or hex value
     * @param {Number} options.size the size of each particle
     * @param {Simulation} simulation Simulation object
     */
    function StaticParticles(id, points, options, simulation) {
        this.options = options;
        this.id = id;
        // User passed in Simulation
        this.simulation = simulation;
        this.points = points;
        this.pointObject = undefined;
        this.init();
        this.simulation.addObject(this, true);
    }
    StaticParticles.prototype.init = function () {
        var positions = new Float32Array(this.points.length * 3);
        var colors = new Float32Array(this.points.length * 3);
        var sizes = new Float32Array(this.points.length);
        var color = new THREE.Color(DEFAULT_COLOR);
        if (this.options.defaultColor) {
            color = new THREE.Color(this.options.defaultColor);
        }
        var size = DEFAULT_PARTICLE_SIZE;
        if (this.options.size) {
            size = this.options.size;
        }
        for (var i = 0, l = this.points.length; i < l; i++) {
            var vertex = this.points[i];
            positions.set(vertex, i * 3);
            color.toArray(colors, i * 3);
            sizes[i] = size;
        }
        var geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        var material = new THREE.ShaderMaterial({
            vertexColors: true,
            vertexShader: shaders_1.STAR_SHADER_VERTEX,
            fragmentShader: shaders_1.STAR_SHADER_FRAGMENT,
            transparent: true
        });
        this.pointObject = new THREE.Points(geometry, material);
    };
    /**
     * A list of THREE.js objects that are used to compose the particle system.
     * @return {THREE.Object3D} Point geometry
     */
    StaticParticles.prototype.get3jsObjects = function () {
        if (this.pointObject) {
            return [this.pointObject];
        }
        return [];
    };
    /**
     * Get the unique ID of this object.
     * @return {String} id
     */
    StaticParticles.prototype.getId = function () {
        return this.id;
    };
    StaticParticles.prototype.update = function () {
        // Static particles don't update
    };
    return StaticParticles;
}());
exports.StaticParticles = StaticParticles;
