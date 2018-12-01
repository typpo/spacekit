class Container {
  // Wraps scene and controls and skybox in an animated container

  constructor(containerElt, options) {
    this._containerElt = containerElt;
    this._options = options || {};

    this._scene = null;
    this._renderer = null;

    this._camera = null;

    this.init();
    this.animate();
  }

  init() {
    this.initRenderer();

    this._camera = new Camera(this.getContext()).get3jsCamera();

    this._scene = new THREE.Scene();
  }

  animate() {
    this._renderer.render(this._scene, this._camera);
    window.requestAnimationFrame(this.animate.bind(this));
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

  addObject(obj) {
    obj.get3jsObjects().map((x) => {
      this._scene.add(x);
    });
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
