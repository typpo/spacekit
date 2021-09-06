import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import type { PerspectiveCamera } from 'three';

import { rescaleNumber, rescaleArray } from './Scale';

import type { Coordinate3d } from './Coordinates';
import type { SimulationContext } from './Simulation';
import type { SpaceObject } from './SpaceObject';

/**
 * A wrapper for Three.js camera and controls.
 * TODO(ian): Rename to "Viewer"
 */
export default class Camera {
  private context: SimulationContext;

  private camera: PerspectiveCamera;

  private cameraControls: OrbitControls;

  private followMesh?: THREE.Object3D;

  /**
   * @param {Object} context The simulation context
   */
  constructor(context: SimulationContext) {
    // TODO(ian): Accept either context or container
    this.context = context;

    // Optional mesh that we are following.
    this.followMesh = undefined;

    const containerWidth = this.context.container.width;
    const containerHeight = this.context.container.height;

    const camera = new THREE.PerspectiveCamera(
      50,
      containerWidth / containerHeight,
      rescaleNumber(0.00001),
      rescaleNumber(2000),
    );
    this.camera = camera;

    // Controls
    // TODO(ian): Set maxDistance to prevent camera farplane cutoff.
    // See https://discourse.threejs.org/t/camera-zoom-to-fit-object/936/6

    // TODO(ian): Access this better
    const renderer = this.context.simulation.getRenderer();

    const controls = new OrbitControls(this.camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = true;
    controls.zoomSpeed = 1.5;
    controls.panSpeed = 2;
    controls.rotateSpeed = 2;
    controls.mouseButtons = {
      LEFT: THREE.MOUSE.ROTATE,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.PAN,
    };
    controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_ROTATE,
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
  followObject(obj: SpaceObject, position: Coordinate3d) {
    const followMesh = obj.get3jsObjects()[0];

    this.cameraControls.enablePan = false;

    const rescaled = rescaleArray(position);
    this.camera.position.add(
      new THREE.Vector3(rescaled[0], rescaled[1], rescaled[2]),
    );

    this.cameraControls.update();
    this.followMesh = followMesh;
  }

  /**
   * Stop the camera from following the object.
   */
  stopFollowingObject() {
    if (this.followMesh) {
      this.followMesh.remove(this.camera);
      this.followMesh = undefined;
      this.cameraControls.enablePan = true;
    }
  }

  /**
   * @returns {boolean} True if camera is following object.
   */
  isFollowingObject(): boolean {
    return !!this.followMesh;
  }

  /**
   * @returns {THREE.PerspectiveCamera} The THREE.js camera object.
   */
  get3jsCamera(): THREE.PerspectiveCamera {
    return this.camera;
  }

  /**
   * @returns {THREE.OrbitControls} The THREE.js CameraControls object.
   */
  get3jsCameraControls(): OrbitControls {
    return this.cameraControls;
  }

  /**
   * Update the camera position and process control inputs.
   */
  update() {
    if (this.isFollowingObject()) {
      const newpos = this.followMesh!.position.clone();

      const offset = newpos.clone().sub(this.cameraControls.target);
      this.camera.position.add(offset);

      this.cameraControls.target.set(newpos.x, newpos.y, newpos.z);
    }

    // Handle control movements
    this.cameraControls.update();

    // Update camera matrix
    this.camera.updateMatrixWorld();
  }
}
