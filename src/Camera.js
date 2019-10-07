import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { rescaleNumber, rescaleArray } from './Scale';

/**
 * A wrapper for Three.js camera and controls.
 * TODO(ian): Rename to "Viewer"
 */
export class Camera {
  /**
   * @param {Object} context The simulation context
   */
  constructor(context) {
    // TODO(ian): Accept either context or container
    this._context = context;

    this._camera = null;
    this._cameraControls = null;

    // Optional mesh that we are following.
    this._followMesh = null;

    this.init();
  }

  init() {
    const containerWidth = this._context.container.width;
    const containerHeight = this._context.container.height;

    this._camera = new THREE.PerspectiveCamera(
      50,
      containerWidth / containerHeight,
      rescaleNumber(0.00001),
      rescaleNumber(2000),
    );

    // Controls
    // TODO(ian): Set maxDistance to prevent camera farplane cutoff.
    // See https://discourse.threejs.org/t/camera-zoom-to-fit-object/936/6

    // TODO(ian): Access this better
    const renderer = this._context.simulation._renderer;

    const controls = new OrbitControls(this._camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = true;
    controls.zoomSpeed = 1.5;
    controls.userPanSpeed = 20;
    controls.rotateSpeed = 2;
    controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_ROTATE,
    };
    this._cameraControls = controls;
  }

  /**
   * Move the camera to follow a SpaceObject as it moves. Currently only works
   * for non-particlesystems.
   * @param {SpaceObject} obj SpaceObject to follow.
   * @param {Array.<Number>} position Position of the camera with respect to
   * the object.
   */
  followObject(obj, position) {
    const followMesh = obj.get3jsObjects()[0];

    this._cameraControls.enablePan = false;

    const rescaled = rescaleArray(position);
    this._camera.position.add(
      new THREE.Vector3(rescaled[0], rescaled[1], rescaled[2]),
    );

    this._cameraControls.update();
    this._followMesh = followMesh;
  }

  /**
   * Stop the camera from following the object.
   */
  stopFollowingObject() {
    if (this._followMesh) {
      this._followMesh.remove(this._camera);
      this._followMesh = null;
      this._cameraControls.enablePan = true;
    }
  }

  /**
   * @returns {boolean} True if camera is following object.
   */
  isFollowingObject() {
    return !!this._followMesh;
  }

  /**
   * @returns {THREE.Camera} The THREE.js camera object.
   */
  get3jsCamera() {
    return this._camera;
  }

  /**
   * @returns {THREE.CameraControls} The THREE.js CameraControls object.
   */
  get3jsCameraControls() {
    return this._cameraControls;
  }

  /**
   * Update the camera position and process control inputs.
   */
  update() {
    if (this.isFollowingObject()) {
      const newpos = this._followMesh.position.clone();

      const offset = newpos.clone().sub(this._cameraControls.target);
      this._camera.position.add(offset);

      this._cameraControls.target.set(newpos.x, newpos.y, newpos.z);
    }

    // Handle control movements
    this._cameraControls.update();

    // Update camera matrix
    this._camera.updateMatrixWorld();
  }
}
