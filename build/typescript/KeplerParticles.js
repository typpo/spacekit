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
exports.KeplerParticles = void 0;
var THREE = __importStar(require("three"));
var util_1 = require("./util");
var shaders_1 = require("./shaders");
var Orbit_1 = require("./Orbit");
var DEFAULT_PARTICLE_COUNT = 4096;
/**
 * Compute mean anomaly at date.  Used for elliptical and hyperbolic orbits.
 */
function getM(ephem, jd) {
    var d = jd - ephem.get('epoch');
    return ephem.get('ma') + ephem.get('n') * d;
}
var PARABOLIC_K = 0.01720209895;
function getA0(ephem, jd) {
    var tp = ephem.get('tp');
    var e = ephem.get('e');
    var q = ephem.get('q');
    var d = jd - tp;
    return 0.75 * d * PARABOLIC_K * Math.sqrt((1 + e) / (q * q * q));
}
/**
 * An efficient way to render many objects in space with Kepler orbits.
 * Primarily used by Simulation to render all non-static objects.
 * @see Simulation
 */
var KeplerParticles = /** @class */ (function () {
    /**
     * @param {Object} options Options container
     * @param {Object} options.textureUrl Template url for sprite
     * @param {Object} options.basePath Base path for simulation supporting files
     * @param {Number} options.jd JD date value
     * @param {Number} options.maxNumParticles Maximum number of particles to display. Defaults to 4096
     * @param {Number} options.defaultSize Default size of particles. Note this
     * can be overriden by SpaceObject particleSize. Defaults to 25
     * @param {Object} contextOrSimulation Simulation context or object
     */
    function KeplerParticles(options, contextOrSimulation) {
        var _this = this;
        this.options = options;
        this.id = "KeplerParticles__".concat(KeplerParticles.instanceCount);
        this.simulation = contextOrSimulation;
        this.context = contextOrSimulation.getContext();
        // Whether Points object has been added to the Simulation/Scene. This
        // happens lazily when the first data point is added in order to prevent
        // WebGL render warnings.
        this.addedToScene = false;
        // Number of particles in the scene.
        this.particleCount = 0;
        if (!this.options.textureUrl) {
            throw new Error('ParticleSystem requires textureUrl to be set');
        }
        var defaultMapTexture = (0, util_1.getThreeJsTexture)(this.options.textureUrl, this.context.options.basePath);
        this.uniforms = {
            texture: { value: defaultMapTexture }
        };
        var particleCount = this.options.maxNumParticles || DEFAULT_PARTICLE_COUNT;
        this.elements = [];
        this.attributes = {
            size: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
            origin: new THREE.BufferAttribute(new Float32Array(particleCount * 3), 3),
            position: new THREE.BufferAttribute(new Float32Array(particleCount * 3), 3),
            fuzzColor: new THREE.BufferAttribute(new Float32Array(particleCount * 3), 3),
            a: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
            e: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
            i: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
            om: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
            ma: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
            n: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
            w: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
            wBar: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
            q: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
            M: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
            a0: new THREE.BufferAttribute(new Float32Array(particleCount), 1)
        };
        this.attributes.M.setUsage(THREE.DynamicDrawUsage);
        this.attributes.a0.setUsage(THREE.DynamicDrawUsage);
        var geometry = new THREE.BufferGeometry();
        geometry.setDrawRange(0, 0);
        Object.keys(this.attributes).forEach(function (attributeName) {
            var attribute = _this.attributes[attributeName];
            geometry.setAttribute(attributeName, attribute);
        });
        var shader = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: (0, shaders_1.getOrbitShaderVertex)(),
            fragmentShader: (0, shaders_1.getOrbitShaderFragment)(),
            depthTest: true,
            depthWrite: false,
            transparent: true
        });
        this.shaderMaterial = shader;
        this.geometry = geometry;
        this.particleSystem = new THREE.Points(geometry, shader);
    }
    /**
     * Add a particle to this particle system.
     * @param {Ephem} ephem Kepler ephemeris
     * @param {Object} options Options container
     * @param {Number} options.particleSize Size of particles
     * @param {Number} options.color Color of particles
     * @return {Number} The index of this article in the attribute list.
     */
    KeplerParticles.prototype.addParticle = function (ephem, options) {
        if (options === void 0) { options = {}; }
        this.elements.push(ephem);
        var attributes = this.attributes;
        var offset = this.particleCount++;
        attributes.size.set([options.particleSize || this.options.defaultSize || 15], offset);
        var color = new THREE.Color(options.color || 0xffffff);
        attributes.fuzzColor.set([color.r, color.g, color.b], offset * 3);
        attributes.origin.set([0, 0, 0], offset * 3);
        attributes.a.set([ephem.get('a')], offset);
        attributes.e.set([ephem.get('e')], offset);
        attributes.i.set([ephem.get('i', 'rad')], offset);
        attributes.om.set([ephem.get('om', 'rad')], offset);
        attributes.wBar.set([ephem.get('wBar', 'rad')], offset);
        attributes.q.set([ephem.get('q')], offset);
        if (Orbit_1.Orbit.getOrbitType(ephem) === Orbit_1.OrbitType.PARABOLIC) {
            attributes.a0.set([getA0(ephem, this.options.jd || 0)], offset);
        }
        else {
            attributes.M.set([getM(ephem, this.options.jd || 0)], offset);
        }
        // TODO(ian): Set the update range
        for (var attributeKey in attributes) {
            if (attributes.hasOwnProperty(attributeKey)) {
                attributes[attributeKey].needsUpdate = true;
            }
        }
        this.geometry.setDrawRange(0, this.particleCount);
        if (!this.addedToScene && this.simulation) {
            // This happens lazily when the first data point is added in order to
            // prevent WebGL render warnings.
            this.simulation.addObject(this);
            this.addedToScene = true;
        }
        return offset;
    };
    /**
     * Hides the particle at the given offset so it is no longer drawn. The particle still takes up space in the array
     * though.
     * @param offset
     */
    KeplerParticles.prototype.hideParticle = function (offset) {
        var attributes = this.attributes;
        attributes.size.set([0], offset);
        for (var attributeKey in attributes) {
            if (attributes.hasOwnProperty(attributeKey)) {
                attributes[attributeKey].needsUpdate = true;
            }
        }
    };
    /**
     * Changes the size of the particle at the given offset to the given size. Setting the size to 0 hides the particle.
     * @param {Number} size The new size of this particle
     * @param {Number} offset The location of this particle in the attributes * array
     */
    KeplerParticles.prototype.setParticleSize = function (size, offset) {
        var attributes = this.attributes;
        attributes.size.set([size], offset);
        for (var attributeKey in attributes) {
            if (attributes.hasOwnProperty(attributeKey)) {
                attributes[attributeKey].needsUpdate = true;
            }
        }
    };
    /**
     * Changes the color of the particle at the given offset to the given color.
     * @param {Number} colorValue The new color of this particle (e.g. hex number)
     * @param {Number} offset The location of this particle in the attributes * array
     */
    KeplerParticles.prototype.setParticleColor = function (colorValue, offset) {
        var attributes = this.attributes;
        var _a = new THREE.Color(colorValue), r = _a.r, g = _a.g, b = _a.b;
        attributes.fuzzColor.set([r, g, b], offset * 3);
        for (var attributeKey in attributes) {
            if (attributes.hasOwnProperty(attributeKey)) {
                attributes[attributeKey].needsUpdate = true;
            }
        }
    };
    /**
     * Change the `origin` attribute of a particle.
     * @param {Number} offset The location of this particle in the attributes * array.
     * @param {Array.<Number>} newOrigin The new XYZ coordinates of the body that this particle orbits.
     */
    KeplerParticles.prototype.setParticleOrigin = function (offset, newOrigin) {
        this.attributes.origin.set(newOrigin, offset * 3);
        this.attributes.origin.needsUpdate = true;
    };
    /**
     * Update the position for all particles
     * @param {Number} jd JD date
     */
    KeplerParticles.prototype.update = function (jd) {
        var Ms = [];
        var a0s = [];
        for (var i = 0; i < this.elements.length; i++) {
            var ephem = this.elements[i];
            var M = void 0, a0 = void 0;
            if (Orbit_1.Orbit.getOrbitType(ephem) === Orbit_1.OrbitType.PARABOLIC) {
                a0 = getA0(ephem, jd);
                M = 0;
            }
            else {
                a0 = 0;
                M = getM(ephem, jd);
            }
            Ms.push(M);
            a0s.push(a0);
        }
        this.attributes.M.set(Ms);
        this.attributes.M.needsUpdate = true;
        this.attributes.a0.set(a0s);
        this.attributes.a0.needsUpdate = true;
    };
    /**
     * Get THREE.js objects that comprise this point cloud
     * @return {Array.<THREE.Object3D>} List of objects to add to THREE.js scene
     */
    KeplerParticles.prototype.get3jsObjects = function () {
        return [this.particleSystem];
    };
    /**
     * Get unique id for this object.
     * @return {String} Unique id
     */
    KeplerParticles.prototype.getId = function () {
        return this.id;
    };
    return KeplerParticles;
}());
exports.KeplerParticles = KeplerParticles;
KeplerParticles.instanceCount = 0;
