/**
 * A simple wrapper for Three.js camera.
 * @param {Object} context The simulation context
 */
export class Camera {
  constructor(context) {
    // TODO(ian): Accept either context or container
    this._context = context;

    this.init();
  }

  init() {
    const containerWidth = this._context.container.width;
    const containerHeight = this._context.container.height;

    const cameraH	= 3;
    const cameraW	= cameraH / containerHeight * containerWidth;
    this._camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 1, 5000);
  }

  /**
   * @returns {Object} The THREE.js camera object.
   */
  get3jsCamera() {
    return this._camera;
  }
}
