import { getFullTextureUrl } from './util';

export class Skybox {
  constructor(options, contextOrContainer) {
    // TODO(ian): Support for actual box instead of sphere...
    this._options = options;
    this._id = `__skybox_${new Date().getTime()}`;

    // if (contextOrContainer instanceOf Container) {
    if (true) {
      // User passed in Container
      this._container = contextOrContainer;
      this._context = contextOrContainer.getContext();
    } else {
      // User just passed in options
      this._container = null;
      this._context = contextOrContainer;
    }

    this._mesh = null;
    this._texture = null;

    //this.init();
    this.testInit();
  }

  testInit() {
    const fullTextureUrl = getFullTextureUrl('{{assets}}/skybox/nasa_tycho/',
      this._context.options.assetPath);

    var loader = new THREE.CubeTextureLoader();
    loader.setPath(fullTextureUrl);

    var textureCube = loader.load( [
      'px.png', 'nx.png',
      'py.png', 'ny.png',
      'pz.png', 'nz.png'
    ] );

    textureCube.rotation = Math.PI/2;

    var material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );
    this._texture = textureCube;
  }

  init() {
    const geometry = new THREE.SphereBufferGeometry(4000);

    const fullTextureUrl = getFullTextureUrl(this._options.textureUrl,
      this._context.options.assetPath);
    const texture = new THREE.TextureLoader().load(fullTextureUrl);

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.BackSide,
    });

    const sky = new THREE.Mesh(geometry, material);

    // See this thread on orientation of milky way:
    // https://www.physicsforums.com/threads/orientation-of-the-earth-sun-and-solar-system-in-the-milky-way.888643/
    sky.rotation.x = 0;
    sky.rotation.y = -1 / 12 * Math.PI;
    sky.rotation.z = 8 / 5 * Math.PI;

    // We're on the inside of the skybox, so invert it to correct it.
    sky.scale.set(-1, 1, 1);

    this._mesh = sky;
    this._texture = texture;

    if (this._container) {
      this._container.addObject(this, true /* noUpdate */);
    }
  }

  get3jsObjects() {
    return [this._mesh];
  }

  getTexture() {
    return this._texture;
  }

  getId() {
    return this._id;
  }
}

export const SkyboxPresets = {
  ESO_GIGAGALAXY: {
    textureUrl: '{{assets}}/skybox/eso_milkyway.jpg',
  },
  NASA_TYCHO: {
    textureUrl: '{{assets}}/skybox/nasa_tycho.jpg',
  },
};
