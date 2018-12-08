// TODO Include presets for all the planets and the sun

class SpaceObject {
  constructor(id, options, contextOrContainer) {
    this._id = id;
    this._options = options || {};

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

    this._position = options.position || [0, 0, 0];
    this._scale = options.scale || [50, 50, 1];

    if (!this.init()) {
      console.warn(`SpaceObject ${id}: failed to initialize`);
    }
  }

  init() {
    if (this.isStaticObject()) {
      // Create a stationary sprite.
      this._object3js = this.createSprite();
    } else {
      if (!this._options.hideOrbit) {
        // Orbit is initialized before sprite because sprite may be positioned
        // according to orbit.
        this._orbit = this.createOrbit();
      }

      // Don't create a sprite - do it on the GPU instead.
      this._context.objects.particles.addParticle(this._options.ephem, {
        particleSize: this._options.particleSize,
        color: this.getColor(),
      });
    }

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
    const fullTextureUrl = getFullTextureUrl(
      this._options.textureUrl,
      this._context.options.assetPath,
    );
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
      sprite.matrixAutoUpdate = false;
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
    if (this._orbit) {
      return;
    }
    return new Orbit(this._options.ephem, {
      color: this.getColor(),
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

  getColor() {
    if (this._options.theme) {
      return this._options.theme.color || 0xffffff;
    }
    return 0xffffff;
  }

  getId() {
    return this._id;
  }

  isStaticObject() {
    return !this._options.ephem;
  }
}

const DEFAULT_PLANET_TEXTURE_URL = '{{assets}}/sprites/smallparticle.png';

const SpaceObjectPresets = {
  SUN: {
    textureUrl: '{{assets}}/sprites/sunsprite.png',
    position: [0, 0, 0],
  },
  MERCURY: {
    textureUrl: DEFAULT_PLANET_TEXTURE_URL,
    theme: {
      color: 0x913CEE,
    },
    ephem: EphemPresets.MERCURY,
  },
  VENUS: {
    textureUrl: DEFAULT_PLANET_TEXTURE_URL,
    theme: {
      color: 0xFF7733,
    },
    ephem: EphemPresets.VENUS,
  },
  EARTH: {
    textureUrl: DEFAULT_PLANET_TEXTURE_URL,
    theme: {
      color: 0x009ACD,
    },
    ephem: EphemPresets.EARTH,
  },
  MARS: {
    textureUrl: DEFAULT_PLANET_TEXTURE_URL,
    theme: {
      color: 0xA63A3A,
    },
    ephem: EphemPresets.MARS,
  },
  JUPITER: {
    textureUrl: DEFAULT_PLANET_TEXTURE_URL,
    theme: {
      color: 0xFFB90F,
    },
    ephem: EphemPresets.JUPITER,
  },
  SATURN: {
    textureUrl: DEFAULT_PLANET_TEXTURE_URL,
    theme: {
      color: 0x336633,
    },
    ephem: EphemPresets.SATURN,
  },
  URANUS: {
    textureUrl: DEFAULT_PLANET_TEXTURE_URL,
    theme: {
      color: 0x0099FF,
    },
    ephem: EphemPresets.URANUS,
  },
  NEPTUNE: {
    textureUrl: DEFAULT_PLANET_TEXTURE_URL,
    theme: {
      color: 0x3333FF,
    },
    ephem: EphemPresets.NEPTUNE,
  },
};
