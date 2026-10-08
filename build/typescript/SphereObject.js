"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.SphereObject = void 0;
var THREE = __importStar(require("three"));
//import { TranslucentShader } from 'three/examples/jsm/shaders/TranslucentShader.js';
var Units_1 = __importDefault(require("./Units"));
var RotatingObject_1 = require("./RotatingObject");
var Scale_1 = require("./Scale");
var shaders_1 = require("./shaders");
/**
 * Simulates a planet or other object as a perfect sphere.
 */
var SphereObject = /** @class */ (function (_super) {
    __extends(SphereObject, _super);
    /**
     * @param {String} options.textureUrl Path to basic texture (optional)
     * @param {String} options.bumpMapUrl Path to bump map (optional)
     * @param {String} options.specularMapUrl Path to specular map (optional)
     * @param {Number} options.color Hex color of the sphere
     * @param {Number} options.axialTilt Axial tilt in degrees
     * @param {Number} options.radius Radius of sphere. Defaults to 1
     * @param {Object} options.levelsOfDetail List of {threshold: x, segments:
     * y}, where `threshold` is radii distance and `segments` is the number
     * number of sphere faces to render.
     * @param {Object} options.atmosphere Atmosphere options
     * @param {Object} options.atmosphere.enable Show atmosphere
     * @param {Object} options.atmosphere.color Atmosphere color
     * @param {Object} options.atmosphere.innerSizeRatio Size ratio of the inner
     * atmosphere to the radius of the sphere. Defaults to 0.025
     * @param {Object} options.atmosphere.outerSizeRatio Size ratio of the outer
     * atmosphere to the radius of the sphere. Defaults to 0.15
     * @param {Object} options.debug Debug options
     * @param {boolean} options.debug.showAxes Show axes
     * @see SpaceObject
     * @see RotatingObject
     */
    function SphereObject(id, options, simulation) {
        var _this = _super.call(this, id, options, simulation, false /* autoInit */) || this;
        _this.init();
        return _this;
    }
    SphereObject.prototype.init = function () {
        var _a;
        var map = null;
        if (this._options.textureUrl) {
            map = new THREE.TextureLoader().load(this._options.textureUrl);
        }
        var detailedObj = new THREE.LOD();
        var levelsOfDetail = this._options.levelsOfDetail || [
            { radii: 0, segments: 64 },
        ];
        var radius = this.getScaledRadius();
        for (var i = 0; i < levelsOfDetail.length; i += 1) {
            var level = levelsOfDetail[i];
            var sphereGeometry = new THREE.SphereGeometry(radius, level.segments, level.segments);
            var material = void 0;
            if (this._simulation.isUsingLightSources()) {
                console.warn("SphereObject ".concat(this._id, " requires a texture when using a light source."));
                var uniforms = {
                    sphereTexture: {
                        value: undefined
                    },
                    lightPos: {
                        value: new THREE.Vector3()
                    }
                };
                // TODO(ian): Handle if no map
                uniforms.sphereTexture.value = map;
                uniforms.lightPos.value.copy(this._simulation.getLightPosition());
                material = new THREE.ShaderMaterial({
                    uniforms: uniforms,
                    vertexShader: shaders_1.SPHERE_SHADER_VERTEX,
                    fragmentShader: shaders_1.SPHERE_SHADER_FRAGMENT,
                    transparent: true
                });
            }
            else {
                var color = (_a = this._options.color) !== null && _a !== void 0 ? _a : 0xbbbbbb;
                material = new THREE.MeshBasicMaterial({
                    map: map,
                    color: color
                });
            }
            var mesh = new THREE.Mesh(sphereGeometry, material);
            mesh.receiveShadow = true;
            mesh.castShadow = true;
            // Change the coordinate system to have Z-axis pointed up.
            mesh.rotation.x = Math.PI / 2;
            // Show this number of segments at distance >= radii * level.radii.
            detailedObj.addLevel(mesh, radius * level.radii);
        }
        // Add to the parent base object.
        this._obj.add(detailedObj);
        if (this._options.atmosphere && this._options.atmosphere.enable) {
            var atmosphere = this.renderFullAtmosphere();
            if (atmosphere) {
                this._obj.add(atmosphere);
            }
        }
        if (this._options.axialTilt) {
            this._obj.rotation.y += Units_1["default"].rad(this._options.axialTilt);
        }
        this._renderMethod = 'SPHERE';
        if (this._simulation) {
            // Add it all to visualization.
            this._simulation.addObject(this, false /* noUpdate */);
        }
        return _super.prototype.init.call(this);
    };
    /**
     * @private
     */
    SphereObject.prototype.getScaledRadius = function () {
        return (0, Scale_1.rescaleNumber)(this._options.radius || 1);
    };
    /**
     * @private
     * Model the atmosphere as two layers - a thick inner layer and a diffuse
     * outer one.
     */
    SphereObject.prototype.renderFullAtmosphere = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (!this._simulation.isUsingLightSources()) {
            console.warn('Cannot render atmosphere without a light source');
            return null;
        }
        var radius = this.getScaledRadius();
        var color = new THREE.Color((_c = (_b = (_a = this._options) === null || _a === void 0 ? void 0 : _a.atmosphere) === null || _b === void 0 ? void 0 : _b.color) !== null && _c !== void 0 ? _c : 0xffffff);
        var innerSize = radius * ((_f = (_e = (_d = this._options) === null || _d === void 0 ? void 0 : _d.atmosphere) === null || _e === void 0 ? void 0 : _e.innerSizeRatio) !== null && _f !== void 0 ? _f : 0.025);
        var outerSize = radius * ((_j = (_h = (_g = this._options) === null || _g === void 0 ? void 0 : _g.atmosphere) === null || _h === void 0 ? void 0 : _h.outerSizeRatio) !== null && _j !== void 0 ? _j : 0.15);
        var detailedObj = new THREE.Object3D();
        detailedObj.add(this.renderAtmosphereComponent(radius, innerSize, 0.8, 2.0, color));
        detailedObj.add(this.renderAtmosphereComponent(radius, outerSize, 0.5, 4.0, color));
        // Hide atmosphere beyond some multiple of radius distance.
        // TODO(ian): This effect is somewhat jarring when the atmosphere first
        // appears, also arbitrary...
        var ret = new THREE.LOD();
        ret.addLevel(detailedObj, 0);
        ret.addLevel(new THREE.Object3D(), radius * 24);
        return ret;
    };
    /**
     * @private
     * @param {Number} radius Radius of object
     * @param {Number} size Size of atmosphere
     * @param {Number} coefficient Coefficient value
     * @param {Number} power Power value
     * @param {THREE.Color} colorObj Color of atmosphere
     */
    SphereObject.prototype.renderAtmosphereComponent = function (radius, size, coefficient, power, colorObj) {
        var geometry = new THREE.SphereGeometry(radius + size, 32, 32);
        var uniforms = {
            c: { value: coefficient },
            p: { value: power },
            color: { value: colorObj },
            lightPos: { value: new THREE.Vector3() }
        };
        var lightPosition = this._simulation.getLightPosition();
        if (lightPosition) {
            uniforms.lightPos.value.copy(lightPosition);
        }
        // TODO(ian): Handle case where there is no light.
        var material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: shaders_1.ATMOSPHERE_SHADER_VERTEX,
            fragmentShader: shaders_1.ATMOSPHERE_SHADER_FRAGMENT,
            side: THREE.BackSide,
            transparent: true,
            depthWrite: false
        });
        return new THREE.Mesh(geometry, material);
    };
    /**
     * Add rings around this object.
     * @param {Number} innerRadiusKm Inner radius of ring.
     * @param {Number} outerRadiusKm Outer radius of ring.
     * @param {String} texturePath Full path to 1xN ring texture. (each pixel
     * represents the color of a full circle within the ring)
     * @param {Number} segments  Number of segments to use to render ring.
     * (optional)
     */
    SphereObject.prototype.addRings = function (innerRadiusKm, outerRadiusKm, texturePath, segments) {
        if (segments === void 0) { segments = 128; }
        var innerRadiusSize = (0, Scale_1.rescaleNumber)(Units_1["default"].kmToAu(innerRadiusKm));
        var outerRadiusSize = (0, Scale_1.rescaleNumber)(Units_1["default"].kmToAu(outerRadiusKm));
        var geometry = new THREE.RingGeometry(innerRadiusSize, outerRadiusSize, segments, 5, 0, Math.PI * 2);
        // TODO(ian): Load from base path.
        var map = new THREE.TextureLoader().load(texturePath);
        var material;
        if (this._simulation.isUsingLightSources()) {
            // TODO(ian): Follow recommendation for defining ShaderMaterials here:
            // https://discourse.threejs.org/t/cant-get-a-sampler2d-uniform-to-work-from-datatexture/6366/14?u=ianw
            var uniforms = THREE.UniformsUtils.merge([
                // TODO(ian): These failed due to type check. Remove?
                // THREE.UniformsLib.ambient,
                THREE.UniformsLib.lights,
                // THREE.UniformsLib.shadowmap,
                {
                    ringTexture: { value: null },
                    innerRadius: { value: innerRadiusSize },
                    outerRadius: { value: outerRadiusSize },
                    lightPos: { value: new THREE.Vector3() }
                },
            ]);
            uniforms.ringTexture.value = map;
            uniforms.lightPos.value.copy(this._simulation.getLightPosition());
            material = new THREE.ShaderMaterial({
                uniforms: uniforms,
                lights: true,
                vertexShader: shaders_1.RING_SHADER_VERTEX,
                fragmentShader: shaders_1.RING_SHADER_FRAGMENT,
                transparent: true,
                alphaTest: 0.1,
                side: THREE.DoubleSide
            });
        }
        else {
            material = new THREE.MeshBasicMaterial({
                map: map,
                side: THREE.DoubleSide,
                transparent: true,
                alphaTest: 0.1,
                opacity: 0.8
            });
        }
        var mesh = new THREE.Mesh(geometry, material);
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        this._obj.add(mesh);
    };
    return SphereObject;
}(RotatingObject_1.RotatingObject));
exports.SphereObject = SphereObject;
