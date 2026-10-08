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
var THREE = __importStar(require("three"));
var OrbitControls_1 = require("three/examples/jsm/controls/OrbitControls");
var Scale_1 = require("./Scale");
/**
 * A wrapper for Three.js camera and controls.
 * TODO(ian): Rename to "Viewer"
 */
var Camera = /** @class */ (function () {
    /**
     * @param {Object} context The simulation context
     */
    function Camera(context) {
        // TODO(ian): Accept either context or container
        this.context = context;
        // Optional mesh that we are following.
        this.followMesh = undefined;
        var containerWidth = this.context.container.width;
        var containerHeight = this.context.container.height;
        var camera = new THREE.PerspectiveCamera(50, containerWidth / containerHeight, (0, Scale_1.rescaleNumber)(0.00001), (0, Scale_1.rescaleNumber)(2000));
        this.camera = camera;
        // Controls
        // TODO(ian): Set maxDistance to prevent camera farplane cutoff.
        // See https://discourse.threejs.org/t/camera-zoom-to-fit-object/936/6
        // TODO(ian): Access this better
        var renderer = this.context.simulation.getRenderer();
        var controls = new OrbitControls_1.OrbitControls(this.camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enablePan = true;
        controls.zoomSpeed = 1.5;
        controls.panSpeed = 2;
        controls.rotateSpeed = 2;
        controls.mouseButtons = {
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.PAN
        };
        controls.touches = {
            ONE: THREE.TOUCH.ROTATE,
            TWO: THREE.TOUCH.DOLLY_ROTATE
        };
        this.cameraControls = controls;
    }
    /**
     * Move the camera to follow a SpaceObject as it moves. Currently only works
     * for non-particlesystems.
     * @param {SpaceObject} obj SpaceObject to follow.
     * @param {Array.<Number>} position Position of the camera with respect to
     * the object.
     */
    Camera.prototype.followObject = function (obj, position) {
        var followMesh = obj.get3jsObjects()[0];
        this.cameraControls.enablePan = false;
        var rescaled = (0, Scale_1.rescaleArray)(position);
        this.camera.position.add(new THREE.Vector3(rescaled[0], rescaled[1], rescaled[2]));
        this.cameraControls.update();
        this.followMesh = followMesh;
    };
    /**
     * Stop the camera from following the object.
     */
    Camera.prototype.stopFollowingObject = function () {
        if (this.followMesh) {
            this.followMesh.remove(this.camera);
            this.followMesh = undefined;
            this.cameraControls.enablePan = true;
        }
    };
    /**
     * @returns {boolean} True if camera is following object.
     */
    Camera.prototype.isFollowingObject = function () {
        return !!this.followMesh;
    };
    /**
     * @returns {THREE.PerspectiveCamera} The THREE.js camera object.
     */
    Camera.prototype.get3jsCamera = function () {
        return this.camera;
    };
    /**
     * @returns {THREE.OrbitControls} The THREE.js CameraControls object.
     */
    Camera.prototype.get3jsCameraControls = function () {
        return this.cameraControls;
    };
    /**
     * Update the camera position and process control inputs.
     */
    Camera.prototype.update = function () {
        if (this.isFollowingObject()) {
            var newpos = this.followMesh.position.clone();
            var offset = newpos.clone().sub(this.cameraControls.target);
            this.camera.position.add(offset);
            this.cameraControls.target.set(newpos.x, newpos.y, newpos.z);
        }
        // Handle control movements
        this.cameraControls.update();
        // Update camera matrix
        this.camera.updateMatrixWorld();
    };
    return Camera;
}());
exports["default"] = Camera;
