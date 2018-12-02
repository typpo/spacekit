class Container {
  // Wraps scene and controls and skybox in an animated container

  constructor(containerElt, options) {
    this._containerElt = containerElt;
    this._options = options || {};

    this._jed = this._options.jed || 0;

    this._scene = null;
    this._renderer = null;

    this._camera = null;
    this._cameraControls = null;

    this._subscribedObjects = {};

    this.init();
    this.animate();
  }

  init() {
    this.initRenderer();

    // Camera
    this._camera = new Camera(this.getContext()).get3jsCamera();
    this._camera.position.set(0, -10, 5);
    window.cam = this._camera;

    // Controls
    this._cameraControls = new THREE.TrackballControls(this._camera, this._containerElt);

    // Scene
    this._scene = new THREE.Scene();

    // Helper
    if (this._options.debug && this._options.debug.showAxesHelper) {
      this._scene.add(new THREE.AxesHelper(5));
    }
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this._jed += 1;

    this.update();
    this._cameraControls.update();
    this._renderer.render(this._scene, this._camera);
  }

  initRenderer() {
    const renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    renderer.setClearColor(0x000000, 1);
    renderer.setSize(this._containerElt.offsetWidth, this._containerElt.offsetHeight);

    this._containerElt.appendChild(renderer.domElement);

    this._renderer = renderer;
  }

  addObject(obj, noUpdate=false) {
    obj.get3jsObjects().map((x) => {
      this._scene.add(x);
    });

    if (!noUpdate) {
      // Call for updates as time passes.
      this._subscribedObjects[obj.getId()] = obj;
    }
  }

  removeObject(obj) {
    // TODO(ian): test this and avoid memory leaks...
    obj.get3jsObjects().map((x) => {
      this._scene.remove(x);
    });

    delete this._subscribedObjects[obj.getId()];
  }

  update() {
    for (let objId in this._subscribedObjects) {
      if (this._subscribedObjects.hasOwnProperty(objId)) {
        this._subscribedObjects[objId].update(this._jed);
      }
    }
  }

  getJed() {
    return this._jed;
  }

  setJed(val) {
    this._jed = val;
  }

  getContext() {
    return {
      options: this._options,
      container: {
        width: this._containerElt.offsetWidth,
        height: this._containerElt.offsetHeight,
      },
    };
  }
}
