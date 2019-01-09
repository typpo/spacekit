import { EphemPresets, Ephem } from './Ephem';
import { Orbit } from './Orbit';
import { getFullTextureUrl } from './util';

function toScreenXY(position, camera, canvas) {
  const pos = new THREE.Vector3(position[0], position[1], position[2]);
  const projScreenMat = new THREE.Matrix4();
  projScreenMat.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
  pos.applyMatrix4(projScreenMat);
  return {
    x: (pos.x + 1) * canvas.clientWidth / 2,
    y: (-pos.y + 1) * canvas.clientHeight / 2,
  };
}

export class SpaceObject {
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

    this._label = null;
    this._position = options.position || [0, 0, 0];
    this._scale = options.scale || [1, 1, 1];

    if (!this.init()) {
      console.warn(`SpaceObject ${id}: failed to initialize`);
    }
  }

  init() {
    if (this._options.labelText) {
      this.createLabel();
    }
    if (this.isStaticObject()) {
      // Create a stationary sprite.
      this._object3js = this.createSprite();
      if (this._container) {
        // Add it all to visualization.
        this._container.addObject(this, false /* noUpdate */);
      }
    } else {
      if (!this._options.hideOrbit) {
        // Orbit is initialized before sprite because sprite may be positioned
        // according to orbit.
        this._orbit = this.createOrbit();

        if (this._container) {
          // Add it all to visualization.
          this._container.addObject(this, false /* noUpdate */);
        }
      }

      // Don't create a sprite - do it on the GPU instead.
      this._context.objects.particles.addParticle(this._options.ephem, {
        particleSize: this._options.particleSize,
        color: this.getColor(),
      });
    }
    return true;
  }

  createLabel() {
    const text = document.createElement('div');
    text.className = 'spacekit__object-label';
    text.innerHTML = `<div>${this._options.labelText}</div>`;
    text.style.fontFamily = 'Arial';
    text.style.fontSize = '12px';
    text.style.color = '#fff';
    text.style.position = 'absolute';
    text.style.marginLeft = '1.5em';

    text.style.backgroundColor = '#0009';
    text.style.borderRadius = '8px';
    text.style.padding = '1px 5px';
    text.style.border = '1px solid #5f5f5f';

    this._container.getContainerElement().appendChild(text);
    this._label = text;
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
      eclipticLineColor: this._options.ecliptic ? this._options.ecliptic.lineColor : null,
    });
  }

  update(jed) {
    let newpos;
    if (this._object3js) {
      newpos = this.getPosition(jed);
      this._object3js.position.set(newpos[0], newpos[1], newpos[2]);
    }
    if (this._label) {
      if (!newpos) {
        newpos = this.getPosition(jed);
      }
      const label = this._label;
      const containerElt = this._container.getContainerElement();
      const pos = toScreenXY(newpos, this._container.getCamera(), containerElt);
      const loc = {
        left: pos.x - 30, top: pos.y - 18, right: pos.x + label.clientWidth - 20, bottom: pos.y + label.clientHeight,
      };
      if (loc.left > 0 && loc.right < containerElt.clientWidth &&
          loc.top > 0 && loc.bottom < containerElt.clientHeight) {
        label.style.left = `${loc.left}px`;
        label.style.top = `${loc.top}px`;
        label.style.visibility = 'visible';
      } else {
        label.style.visibility = 'hidden';
      }
    }
  }

  get3jsObjects() {
    const ret = [];
    if (this._object3js) {
      ret.push(this._object3js);
    }
    if (this._orbit) {
      ret.push(this._orbit.getEllipse());
      if (this._options.ecliptic && this._options.ecliptic.displayLines) {
        ret.push(this._orbit.getLinesToEcliptic());
      }
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

export const SpaceObjectPresets = {
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
