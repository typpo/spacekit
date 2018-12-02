// TODO Include presets for all the planets and the sun

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

    this._orbit = this.createOrbit();
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

    const texture = new THREE.TextureLoader().load(this.getFullTextureUrl());
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: texture,
      blending: THREE.AdditiveBlending,
      color: 0xffffff,
    }));
    sprite.scale.set.apply(this, this._scale);
    sprite.position.set.apply(this, this._position);

    this._object3js = sprite;

  /*
    const light = new THREE.PointLight( 0xffffff, 1.5, 2000 );
    light.position.set.apply(this, this._position);

    const lensflare = new THREE.Lensflare();
    lensflare.addElement(new THREE.LensflareElement(texture, 500, 0, new
                                                    THREE.Color(0xffffff),
                                                    THREE.AdditiveBlending));

    light.add(lensflare);
    this._object3js = light;
   */

    if (this._container) {
      this._container.addObject(this);
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

  createOrbit() {
    if (!this._options.ephem) {
      return;
    }
    if (this._orbit) {
      return;
    }

    const orbit = new Orbit(this._options.ephem, this._options.orbit);
    this._orbit = orbit;

    if (this._container) {
      // TODO(ian): Probably shouldn't automatically add here...
      this._container.addObject(this);
    }
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
    if (this._orbit) {
      ret.push(this._orbit.getEllipse());
    }
    return ret;
  }
}

const SpaceObjectPresets = {
  SUN: {
    textureUrl: '{{assets}}/sprites/sunsprite.png',
    position: [0, 0, 0],
  },
  EARTH: {
    orbit: {
      color: 0x0000ff,
    },
    ephem: new Ephem({
      // TODO(ian): Make it so I don't have to convert everything to radians.
      ma: -2.47311027 * Math.PI / 180,
      epoch: 2451545.0,
      a: 1.00000261,
      e: 0.01671123,
      i: 0.00001531 * Math.PI / 180,
      w_bar: 102.93768193 * Math.PI / 180,
      w: 102.93768193 * Math.PI / 180,
      L: 100.46457166 * Math.PI / 180,
      om: 0,
      period: 365.256,
    })
  },
  MARS: {
    orbit: {
      color: 0xff0000,
    },
    ephem: new Ephem({
      ma: 19.39019754 * Math.PI / 180,
      epoch: 2451545.0,
      a: 1.52371034,
      e: 0.09339410,
      i: 1.84969142 * Math.PI / 180,
      w_bar: -23.94362959 * Math.PI / 180,
      w: -73.5031685 * Math.PI / 180,
      L: -4.55343205 * Math.PI / 180,
      om: 49.55953891 * Math.PI / 180,
      period: 686.980
    })
  },
};
