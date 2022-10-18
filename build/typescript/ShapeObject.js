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
exports.ShapeObject = void 0;
var THREE = __importStar(require("three"));
var OBJLoader_1 = require("three/examples/jsm/loaders/OBJLoader");
var RotatingObject_1 = require("./RotatingObject");
var ShapeObject = /** @class */ (function (_super) {
    __extends(ShapeObject, _super);
    /**
     * @param {Object} options.shape Shape specification
     * @param {String} options.shape.type Type of object ("custom" or "sphere")
     * @param {String} options.shape.shapeUrl Path to shapefile if type is "custom"
     * @param {Number} options.shape.textureUrl Optional texture map for shape
     * @param {Number} options.shape.color Color of shape materials. Default 0xcccccc
     * @param {Number} options.shape.radius Radius, if applicable. Defaults to 1
     * @param {Object} options.shape.debug Debug options
     * @param {boolean} options.shape.debug.showAxes Show axes
     * rotation speed. Default 0.5
     * @see SpaceObject
     * @see RotatingObject
     */
    function ShapeObject(id, options, simulation) {
        var _this = this;
        var _a;
        _this = _super.call(this, id, options, simulation, false /* autoInit */) || this;
        if (!options.shape) {
            throw new Error('ShapeObject requires an options.shape object');
        }
        if (!((_a = options.shape) === null || _a === void 0 ? void 0 : _a.shapeUrl)) {
            throw new Error('Must specify shape.shapeUrl when creating a ShapeObject');
        }
        _this.shapeObj = undefined;
        var manager = new THREE.LoadingManager();
        manager.onProgress = function (item, loaded, total) {
            console.info(_this._id, item, 'loading progress:', loaded, '/', total);
        };
        _this.loadingPromise = new Promise(function (resolve) {
            var loader = new OBJLoader_1.OBJLoader(manager);
            // TODO(ian): Make shapeurl follow assetpath logic.
            loader.load(options.shape.shapeUrl, function (object) {
                object.traverse(function (child) {
                    if (child instanceof THREE.Mesh) {
                        var material = new THREE.MeshStandardMaterial({
                            color: _this._options.shape.color || 0xcccccc
                        });
                        child.material = material;
                        child.geometry.scale(0.05, 0.05, 0.05);
                        /*
                        child.geometry.computeFaceNormals();
                        child.geometry.computeVertexNormals();
                        child.geometry.computeBoundingBox();
                       */
                        _this._materials.push(material);
                    }
                });
                _this.shapeObj = object;
                _this._obj.add(object);
                if (_this._simulation) {
                    // Add it all to visualization.
                    _this._simulation.addObject(_this, false /* noUpdate */);
                }
                _this._initialized = true;
                resolve(_this.shapeObj);
            });
        });
        // TODO(ian): Create an orbit if applicable
        _super.prototype.init.call(_this);
        return _this;
    }
    /**
     * Specifies the object that is used to compute the bounding box.
     * @return {THREE.Object3D} THREE.js object
     */
    ShapeObject.prototype.getBoundingObject = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.loadingPromise];
            });
        });
    };
    return ShapeObject;
}(RotatingObject_1.RotatingObject));
exports.ShapeObject = ShapeObject;
