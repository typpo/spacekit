// TODO Include presets for all the planets and the sun

const SpaceObjectDefaultOptions = {
  ephem: null,
};

class SpaceObject {
  constructor(id, options, contextOrContainer) {
    this._id = id;
    this._options = options || {};

    //if (contextOrContainer instanceOf Container) {
    if (true) {
      // User passed in Container
      this._container = contextOrContainer;
      this._context = contextOrContainer.getContext();
    } else {
      // User just passed in options
      this._container = null;
      this._context = contextOrContainer;
    }

    this._position = options.position || [0, 0, 0];
    this._scale = options.scale || [50, 50, 1];

    this._orbitEllipse = null;
    this._showOrbitEllipse = null;

    if (!this.init()) {
      console.warn(`SpaceObject ${id}: failed to initialize`);
    }
  }

  init() {
    if (!this._options.textureUrl) {
      console.warn(`SpaceObject ${this._id}: textureUrl is a required option`);
      return false;
    }
    /*
    const loader = new THREE.TextureLoader();
    loader.crossOrigin = '';
    loader.load(this.getFullTextureUrl(), texture => {
    });
   */
    //const texture = ThreeUtil.loadTexture(this.getFullTextureUrl());
    const spriteMap = new THREE.TextureLoader().load(this.getFullTextureUrl());
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: spriteMap,
      blending: THREE.AdditiveBlending,
      color: 0xffffff,
    }));
    sprite.scale.set.apply(this, this._scale);
    sprite.position.set.apply(this, this._position);

    this._object3js = sprite;
    if (this._container) {
      this._container.addObject(this);
      window.foo = spriteMap;
    }
    return true;
  }

  getFullTextureUrl() {
    return this._options.textureUrl.replace('{{assets}}', this._context.options.assetPath);
  }

  setPosition(x, y, z) {
    this._position[0] = x;
    this._position[1] = y;
    this._position[2] = z;
  }

  getPosition(epoch) {
    // Default implementation
    return this._position;
  }

  getOrbitEllipse() {
    if (!this._orbitEllipse) {
      // ...
    }
    return this._orbitEllipse;
  }

  update(epoch) {
    this._object3js.position = coordsToPixel(getPosition(epoch));
    if (this._showOrbitEllipse) {
      // ...
    }
  }

  get3jsObjects() {
    const ret = [];
    ret.push(this._object3js);
    if (this._showOrbitEllipse) {
      ret.push(this.getOrbitEllipse());
    }
    return ret;
  }
}

SpaceObjectPresets = {
  SUN: {
    textureUrl: '{{assets}}/sprites/sunsprite.png',
  },
};
