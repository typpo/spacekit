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

    if (!this.init()) {
      console.warn(`SpaceObject ${id}: failed to initialize`);
    }
  }

  init() {
    // Orbit is initialized before sprite because sprite may be positioned
    // according to orbit.
    this._orbit = this.createOrbit();

    // Don't create a sprite - do it on the GPU instead.
    //this._object3js = this.createSprite();
    this._context.objects.particles.addParticle(this._options.ephem, {
      color: this._options.theme.color,
    });

    // Add it all to visualization.
    if (this._container) {
      this._container.addObject(this);
    }
    return true;
  }

  setPosition(x, y, z) {
    this._position[0] = x;
    this._position[1] = y;
    this._position[2] = z;
  }

  getPosition(jed) {
    const pos = this._position;
    if (!this._orbit) {
      // Default implementation, a static object.
      return pos;
    }

    const posModified = this._orbit.getPositionAtTime(jed);
    return [
      pos[0] + posModified[0],
      pos[1] + posModified[1],
      pos[2] + posModified[2],
    ];
  }

  createSprite() {
    if (!this.hasTextureUrl()) {
      return null;
    }
    const fullTextureUrl = getFullTextureUrl(this._options.textureUrl,
                                             this._context.options.assetPath);
    const texture = new THREE.TextureLoader().load(fullTextureUrl);
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: texture,
      blending: THREE.AdditiveBlending,
      color: 0xffffff,
    }));
    sprite.scale.set.apply(this, this._scale);
    const position = this.getPosition(this._container.getJed());
    sprite.position.set(position[0], position[1], position[2]);


    if (this.isStaticObject()) {
      sprite.matrixAutoUpdate  = false;
    }

    return sprite;

  /*
    const light = new THREE.PointLight( 0xffffff, 1.5, 2000 );
    light.position.set.apply(this, this._position);

    const lensflare = new THREE.Lensflare();
    lensflare.addElement(new THREE.LensflareElement(texture, 500, 0, new
                                                    THREE.Color(0xffffff),
                                                    THREE.AdditiveBlending));

    light.add(lensflare);
    return light;
   */

  }

  createOrbit() {
    if (this.isStaticObject()) {
      return;
    }

    if (this._orbit) {
      return;
    }
    return new Orbit(this._options.ephem, {
      color: this._options.theme.color,
    });
  }

  update(jed) {
    if (this._object3js) {
      const newpos = this.getPosition(jed);
      this._object3js.position.set(newpos[0], newpos[1], newpos[2]);
    }
  }

  get3jsObjects() {
    const ret = [];
    if (this._object3js) {
      ret.push(this._object3js);
    }
    if (this._orbit) {
      ret.push(this._orbit.getEllipse());
    }
    return ret;
  }

  hasTextureUrl() {
    return !!this._options.textureUrl;
  }

  getId() {
    return this._id;
  }

  isStaticObject() {
    return !this._options.ephem;
  }
}

const SpaceObjectPresets = {
  SUN: {
    textureUrl: '{{assets}}/sprites/sunsprite.png',
    position: [0, 0, 0],
  },
  EARTH: {
    textureUrl: '{{assets}}/sprites/fuzzyparticle.png',
    theme: {
      color: 0x009ACD,
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
    textureUrl: '{{assets}}/sprites/fuzzyparticle.png',
    theme: {
      color: 0xA63A3A,
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
      period: 686.980,
    })
  },
  JUPITER: {
    textureUrl: '{{assets}}/sprites/particle2.png',
    theme: {
      color: 0xFFB90F,
    },
    ephem: new Ephem({
			ma: 19.66796068 * Math.PI / 180,
			epoch: 2451545.0,
			a: 5.20288700,
			e: 0.04838624,
			i: 1.30439695 * Math.PI / 180,
			w_bar: 14.72847983 * Math.PI / 180,
			w: -85.74542926 * Math.PI / 180,
			L: 34.39644051 * Math.PI / 180,
			om: 100.47390909 * Math.PI / 180,
			period: 4332.589,
    })
  },
};
