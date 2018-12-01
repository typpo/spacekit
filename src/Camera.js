class Camera {
  // Simple wrapper for Three.js camera

  constructor(context) {
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

  get3jsCamera() {
    return this._camera;
  }
}
