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
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
     * @param {Number} options.rotation.speed Rotates the object even though no time elapsed, degs/rendering tick
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
        _this._obj.name = _this._id + "-rot-obj";
        _this._renderMethod = 'ROTATING_OBJECT';
        _super.prototype.setPositionedObject.call(_this, _this._obj);
        _this._objectIsRotatable = !!_this._options.rotation;
        // Offset of axis angle
        // this._axisRotationAngleOffset = 0;
        _this._axisOfRotation = undefined;
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
                getAxes().forEach(function (axis) {
                    _this._materials.push(axis.material);
                    _this._geometries.push(axis.geometry);
                    _this._obj.add(axis);
                });
            }
            if (this._options.debug.showGrid) {
                var gridHelper = new THREE.GridHelper(3, 3, 0xff0000, 0xffeeee);
                gridHelper.geometry.rotateX(Math.PI / 2);
                this._materials.push(gridHelper.material);
                this._geometries.push(gridHelper.geometry);
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
        // Cacus
        // http://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_asteroid_detail&asteroid_id=1046
        // http://astro.troja.mff.cuni.cz/projects/asteroids3D/php.php?script=db_sky_projection&model_id=1863&jd=2443568.0
        // North Pole Ecliptic Longitude
        var eLon = Units_1["default"].rad(rotation.lambdaDeg || 0);
        // North Pole Ecliptic Latitude
        var eLat = Units_1["default"].rad(rotation.betaDeg || 0);
        // Current simulation time in JD
        var JD = this._simulation.getJd();
        // Z axis is ecliptic North, X towards the sun at March equinox, Y is 90 deg to the east from X.
        // Assume the object's Z-axis is its rotation axis. Rotate it to point to (lambda, beta).
        // see Fig. 1 from https://astropedia.astrogeology.usgs.gov/download/Docs/WGCCRE/WGCCRE2015reprint.pdf
        // NOTE: the above reference seems to have a mistake as it says 90deg - a0, whereas 90deg + a0 seems to be correct.
        var W = this._z_rotation(JD);
        if (typeof W !== 'undefined') {
            this._obj.rotateZ((Math.PI / 2) + eLon); // Rotate X-axis to the body equator
            this._obj.rotateX((Math.PI / 2) - eLat); // Rotate Z-axis to the correct lat and lon
            this._obj.rotateZ(W); // Rotate around the Z-axis to spin the body the correct amount
        }
    };
    RotatingObject.prototype._z_rotation = function (jd) {
        if (typeof this._options.rotation === 'undefined') {
            return undefined;
        }
        var _a = this._options.rotation, period = _a.period, yorp = _a.yorp, phi0 = _a.phi0, jd0 = _a.jd0;
        if (typeof jd0 === 'undefined') {
            return undefined;
        }
        return (Units_1["default"].rad(phi0 || 0) +
            ((2 * Math.PI) / period) * (jd - jd0) +
            (1 / 2) * (yorp || 0) * Math.pow(jd - jd0, 2)) % (2 * Math.PI);
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
            if (this._axisOfRotation) {
                // this._obj.rotateOnAxis(this._axisOfRotation, 0.01);
            }
            if (this._options.rotation.speed) {
                this._obj.rotateZ(Units_1["default"].rad(this._options.rotation.speed));
            }
            else {
                // Rotate the object around the Z axis
                var z_rot = this._z_rotation(jd);
                if (typeof z_rot !== 'undefined') {
                    this._obj.rotation.z = z_rot;
                }
            }
        }
        // Update position
        _super.prototype.update.call(this, jd, force);
    };
    /**
     * Gets the THREE.js objects that represent this SpaceObject.
     * @return {Array.<THREE.Object>} A list of THREE.js objects
     */
    RotatingObject.prototype.get3jsObjects = function () {
        var ret = _super.prototype.get3jsObjects.call(this);
        // NOTE: super.setPositionedObject(this._obj) in constructor already includes this._obj in the list
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
