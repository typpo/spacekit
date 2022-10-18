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
exports.RotatingObject = void 0;
var THREE = __importStar(require("three"));
var Units_1 = __importDefault(require("./Units"));
var SpaceObject_1 = require("./SpaceObject");
var Scale_1 = require("./Scale");
function getAxis(src, dst, color) {
    var mat = new THREE.LineBasicMaterial({ linewidth: 3, color: color });
    var geom = new THREE.BufferGeometry().setFromPoints([
        (0, Scale_1.rescaleVector)(src).clone(),
        (0, Scale_1.rescaleVector)(dst).clone(),
    ]);
    var axis = new THREE.Line(geom, mat);
    axis.computeLineDistances();
    return axis;
}
function getAxes() {
    return [
        getAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(3, 0, 0), 0xff0000),
        getAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 3, 0), 0x00ff00),
        getAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 3), 0x0000ff),
    ];
}
/**
 * This class simulates an object that spins according to provided rotational
 * parameters.
 */
var RotatingObject = /** @class */ (function (_super) {
    __extends(RotatingObject, _super);
    /*
     * FIXME(ian): This implementation is still WIP! Rotational parameters are not
     * used right now.
     * @param {boolean} options.rotation.enable Rotate the object
     * @param {Number} options.rotation.speed Factor that determines speed of rotation
     * @param {Number} options.rotation.lambdaDeg Ecliptic longitude lambda, in degrees
     * @param {Number} options.rotation.betaDeg Ecliptic longitude beta, in degrees
     * @param {Number} options.rotation.period Rotational period, in JD
     * @param {Number} options.rotation.yorp YORP coefficient, if any (defaults to 0)
     * @param {Number} options.rotation.phi0 Initial rotation phi, in degrees (defaults to 0)
     * @param {Number} options.rotation.jd0 JD epoch of rotational parameters
     * @see SpaceObject
     */
    function RotatingObject(id, options, simulation, autoInit) {
        if (autoInit === void 0) { autoInit = true; }
        var _this = _super.call(this, id, options, simulation, false /* autoInit */) || this;
        // The THREE.js object
        _this._obj = new THREE.Object3D();
        _this._renderMethod = 'ROTATING_OBJECT';
        _super.prototype.setPositionedObject.call(_this, _this._obj);
        _this._objectIsRotatable = false;
        if (_this._options.rotation) {
            _this._objectIsRotatable = true;
        }
        // Offset of axis angle
        // this._axisRotationAngleOffset = 0;
        _this._axisOfRotation = undefined;
        // Keep track of materials that comprise this object.
        _this._materials = [];
        if (autoInit) {
            _this.init();
        }
        return _this;
    }
    RotatingObject.prototype.init = function () {
        var _this = this;
        if (this._objectIsRotatable) {
            this.initRotation();
        }
        if (this._options.debug) {
            if (this._options.debug.showAxes) {
                getAxes().forEach(function (axis) { return _this._obj.add(axis); });
            }
            if (this._options.debug.showGrid) {
                var gridHelper = new THREE.GridHelper(3, 3, 0xff0000, 0xffeeee);
                gridHelper.geometry.rotateX(Math.PI / 2);
                this._obj.add(gridHelper);
            }
        }
        return _super.prototype.init.call(this);
    };
    RotatingObject.prototype.initRotation = function () {
        if (!this._options.rotation) {
            throw new Error('Must specify `rotation` option when creating a RotatingObject');
        }
        var rotation = this._options.rotation;
        if (typeof rotation.jd0 === 'undefined') {
            return;
        }
        // Formula
        // https://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_description
        // Testing this asteroid:
        // http://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_asteroid_detail&asteroid_id=1504
        // Model 2691
        var PI = Math.PI;
        // Cacus
        // http://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_asteroid_detail&asteroid_id=1046
        // http://astro.troja.mff.cuni.cz/projects/asteroids3D/php.php?script=db_sky_projection&model_id=1863&jd=2443568.0
        // Latitude
        var lambda = Units_1["default"].rad(rotation.lambdaDeg || 0);
        // Longitude
        var beta = Units_1["default"].rad(rotation.betaDeg || 0);
        // Other
        var P = rotation.period;
        var YORP = rotation.yorp || 0;
        var phi0 = Units_1["default"].rad(rotation.phi0 || 0);
        var JD = this._simulation.getJd();
        var JD0 = rotation.jd0;
        // Asteroid rotation
        // this._obj.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), lambda);
        // this._obj.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), beta);
        // Adjust Z axis according to time.
        var zAdjust = phi0 +
            ((2 * PI) / P) * (JD - JD0) +
            (1 / 2) * YORP * Math.pow(JD - JD0, 2);
        this._obj.rotateY(-(PI / 2 - beta));
        this._obj.rotateZ(-lambda);
        this._obj.rotateZ(zAdjust);
    };
    /**
     * Updates the object and its label positions for a given time.
     * @param {Number} jd JD date
     */
    RotatingObject.prototype.update = function (jd, force) {
        if (force === void 0) { force = false; }
        if (this._obj &&
            this._objectIsRotatable &&
            this._options.rotation &&
            this._options.rotation.enable) {
            // For now, just rotate on X axis.
            var speed = this._options.rotation.speed || 0.5;
            this._obj.rotation.z += speed * (Math.PI / 180);
            this._obj.rotation.z %= 360;
        }
        if (this._axisOfRotation) {
            // this._obj.rotateOnAxis(this._axisOfRotation, 0.01);
        }
        // this._obj.rotateZ(0.015)
        // this._obj.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), 0.01);
        // Update position
        _super.prototype.update.call(this, jd, force);
    };
    /**
     * Gets the THREE.js objects that represent this SpaceObject.
     * @return {Array.<THREE.Object>} A list of THREE.js objects
     */
    RotatingObject.prototype.get3jsObjects = function () {
        var ret = _super.prototype.get3jsObjects.call(this);
        // Add to the front, because this is the primary object.
        ret.unshift(this._obj);
        return ret;
    };
    /**
     * Begin rotating this object.
     */
    RotatingObject.prototype.startRotation = function () {
        if (!this._options.rotation) {
            throw new Error('Must specify `rotation` option when creating a RotatingObject');
        }
        this._options.rotation.enable = true;
    };
    /**
     * Stop rotation of this object.
     */
    RotatingObject.prototype.stopRotation = function () {
        if (!this._options.rotation) {
            throw new Error('Must specify `rotation` option when creating a RotatingObject');
        }
        this._options.rotation.enable = false;
    };
    return RotatingObject;
}(SpaceObject_1.SpaceObject));
exports.RotatingObject = RotatingObject;
