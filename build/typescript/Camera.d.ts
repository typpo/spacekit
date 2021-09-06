import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import type { Coordinate3d } from './Coordinates';
import type { SimulationContext } from './Simulation';
import type { SpaceObject } from './SpaceObject';
/**
 * A wrapper for Three.js camera and controls.
 * TODO(ian): Rename to "Viewer"
 */
export default class Camera {
    private context;
    private camera;
    private cameraControls;
    private followMesh?;
    /**
     * @param {Object} context The simulation context
     */
    constructor(context: SimulationContext);
    /**
     * Move the camera to follow a SpaceObject as it moves. Currently only works
     * for non-particlesystems.
     * @param {SpaceObject} obj SpaceObject to follow.
     * @param {Array.<Number>} position Position of the camera with respect to
     * the object.
     */
    followObject(obj: SpaceObject, position: Coordinate3d): void;
    /**
     * Stop the camera from following the object.
     */
    stopFollowingObject(): void;
    /**
     * @returns {boolean} True if camera is following object.
     */
    isFollowingObject(): boolean;
    /**
     * @returns {THREE.PerspectiveCamera} The THREE.js camera object.
     */
    get3jsCamera(): THREE.PerspectiveCamera;
    /**
     * @returns {THREE.OrbitControls} The THREE.js CameraControls object.
     */
    get3jsCameraControls(): OrbitControls;
    /**
     * Update the camera position and process control inputs.
     */
    update(): void;
}
