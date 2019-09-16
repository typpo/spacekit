import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import OrbitControlsLocal from './OrbitControlsLocal';

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

    // Workaround for using OrbitControls + camera that is not child of the
    // scene.  See
    // https://stackoverflow.com/questions/53292145/forcing-orbitcontrols-to-navigate-around-a-moving-object-almost-working
    // https://github.com/mrdoob/three.js/pull/16506
    //this._orbitControlsCamera = this._camera.clone();

    // Controls
    // TODO(ian): Set maxDistance to prevent camera farplane cutoff.
    // See https://discourse.threejs.org/t/camera-zoom-to-fit-object/936/6
    //const controls = new OrbitControls(this._orbitControlsCamera, this._simulationElt);
    const controls = new OrbitControls(this._camera, this._simulationElt);
    controls.zoomSpeed = 1.5;
    controls.userPanSpeed = 20;
    controls.rotateSpeed = 2;
    controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_ROTATE,
    };
    this._cameraControls = controls;

    // The mesh in which this camera is embedded.  If null, the camera floats
    // freely around the scene.
    this._cameraMesh = null;
  }

  /**
   * Move the camera so to follows a SpaceObject. Currently only works for
   * non-particlesystems.  @param {SpaceObject} obj SpaceObject to follow.
   * @param {Array.<Number>} position Position of the camera with respect to
   * the object.
   */
  followObject(obj, position) {
    // Attach camera to the object's mesh.
    // TODO(ian): Handle rotating object
    // https://stackoverflow.com/questions/12998137/camera-following-an-objects-rotation
    const cameraMesh = obj.get3jsObjects()[0];
    //cameraMesh.add(this._camera);

    const newpos = cameraMesh.position;
    //this._cameraControls.target.set(newpos.x, newpos.y, newpos.z);

    //const rescaled = rescaleArray(position);
    //this._camera.position.set(rescaled[0], rescaled[1], rescaled[2]);

    this._cameraControls.update();
    this._cameraMesh = cameraMesh;
  }

  stopFollowingObject() {
    if (this._cameraMesh) {
      this._cameraMesh.remove(this._camera);
      this._cameraMesh = null;
    }
  }

  isFollowingObject() {
    return !!this._cameraMesh;
  }

  /**
   * @returns {Object} The THREE.js camera object.
   */
  get3jsCamera() {
    return this._camera;
  }

  get3jsCameraControls() {
    return this._cameraControls;
  }

  update() {
    if (this.isFollowingObject()) {
      const newpos = this._cameraMesh.position.clone().multiplyScalar(1.1);
      //this._cameraControls.target.set(newpos.x, newpos.y, newpos.z);

      this._camera.position.set(newpos.x, newpos.y, newpos.z);
    }

    //this._camera.copy(this._orbitControlsCamera);

    // Handle trackball movements
    this._cameraControls.update();
  }
}
