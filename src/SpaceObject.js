import { EphemPresets, Ephem } from './Ephem';
import { Orbit } from './Orbit';
import { getFullTextureUrl } from './util';

/**
 * @private
 * Minimum number of degrees per day an object must move in order for its
 * position to be updated in the visualization.
 */
const MIN_DEG_MOVE_PER_DAY = 0.5;

/**
 * @private
 * Converts (X, Y, Z) position in visualization to pixel coordinates.
 */
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

/**
 * An object that can be added to a visualization.
 * @example
 * const myObject = viz.addObject('planet1', {
 *   position: [0, 0, 0],
 *   scale: [1, 1, 1],
 *   labelText: 'My object',
 *   hideOrbit: false,
 *   ephem: new Spacekit.Ephem({...}),
 *   textureUrl: '/path/to/spriteTexture.png',
 *   assetPath: '/base/assets',
 *   ecliptic: {
 *     lineColor: 0xCCCCCC,
 *     displayLines: false,
 *   },
 *   theme: {
 *     color: 0xFFFFFF,
 *   },
 * });
 */
export class SpaceObject {
  /**
   * @param {String} id Unique id of this object
   * @param {Object} options Options container
   * @param {Array.<Number>} options.position [X, Y, Z] heliocentric coordinates of object. Defaults to [0, 0, 0]
   * @param {Array.<Number>} options.scale Scale of object on each [X, Y, Z] axis. Defaults to [1, 1, 1]
   * @param {String} options.labelText Text label to display above object (set undefined for no label)
   * @param {boolean} options.hideOrbit If true, don't show an orbital ellipse. Defaults false.
   * @param {Ephem} options.ephem Ephemerides for this orbit
   * @param {String} options.textureUrl Texture for sprite
   * @param {String} options.assetPath Base path for texture urls
   * @param {Object} options.ecliptic Contains settings related to ecliptic
   * @param {Number} options.ecliptic.lineColor Hex color of lines that run perpendicular to ecliptic. @see Orbit
   * @param {boolean} options.ecliptic.displayLines Whether to show ecliptic lines. Defaults false.
   * @param {Object} options.theme Contains settings related to appearance of orbit
   * @param {Number} options.theme.color Hex color of the orbit
   * @param {Object} contextOrSimulation Simulation context or simulation object
   */
  constructor(id, options, contextOrSimulation) {
    this._id = id;
    this._options = options || {};

    // if (contextOrSimulation instanceOf Simulation) {
    if (true) {
      // User passed in Simulation
      this._simulation = contextOrSimulation;
      this._context = contextOrSimulation.getContext();
    } else {
      // User just passed in options
      this._simulation = null;
      this._context = contextOrSimulation;
    }

    this._label = null;
    this._position = this._options.position || [0, 0, 0];
    this._scale = this._options.scale || [1, 1, 1];

    // Number of degrees moved per day. Used to limit the number of orbit
    // updates for very slow moving objects.
    this._degreesPerDay = this._options.ephem ? this._options.ephem.get('n', 'deg') : Number.MAX_VALUE;

    if (!this.init()) {
      console.warn(`SpaceObject ${id}: failed to initialize`);
    }
  }

  /**
   * @private
   * Initializes label and three.js objects
   */
  init() {
    if (this._options.labelText) {
      const labelElt = this.createLabel();
      this._simulation.getSimulationElement().appendChild(labelElt);
      this._label = labelElt;
    }
    if (this.isStaticObject()) {
      // Create a stationary sprite.
      this._object3js = this.createSprite();
      if (this._simulation) {
        // Add it all to visualization.
        this._simulation.addObject(this, false /* noUpdate */);
      }
    } else {
      if (!this._options.hideOrbit) {
        // Orbit is initialized before sprite because sprite may be positioned
        // according to orbit.
        this._orbit = this.createOrbit();

        if (this._simulation) {
          // Add it all to visualization.
          this._simulation.addObject(this, false /* noUpdate */);
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

  /**
   * @private
   * Builds the label div and adds it to the visualization
   * @return {HTMLElement} A div that contains the label for this object
   */
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
    text.style.borderRadius = '4px';
    text.style.padding = '0px 1px';
    text.style.border = '1px solid #5f5f5f';

    return text;
  }

  /**
   * @private
   * Builds the sprite for this object
   * @return {THREE.Sprite} A sprite object
   */
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
    const position = this.getPosition(this._simulation.getJed());
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

  /**
   * @private
   * Builds the {Orbit} for this object
   * @return {Orbit} An orbit object
   */
  createOrbit() {
    if (this._orbit) {
      return this._orbit;
    }
    return new Orbit(this._options.ephem, {
      color: this.getColor(),
      eclipticLineColor: this._options.ecliptic ? this._options.ecliptic.lineColor : null,
    });
  }

  /**
   * @private
   * Determines whether to update the position of an update. Don't update if JED
   * threshold is less than a certain amount.
   * TODO(ian): This should also be a function of zoom level, because as you get
   * closer the chopiness gets more noticeable.
   * @param {Number} beforeJed Current JED
   * @param {Number} afterJed Next JED
   * @return {boolean} Whether to update
   */
  shouldUpdateObjectPosition(afterJed) {
    const degMove = this._degreesPerDay * (afterJed - this._lastJedUpdated);
    if (degMove < MIN_DEG_MOVE_PER_DAY) {
      return false;
    }
    return true;
  }

  /**
   * Updates the position of this object. Applicable only if this object is a
   * sprite and not a particle type.
   * @param {Number} x X position
   * @param {Number} y Y position
   * @param {Number} z Z position
   */
  setPosition(x, y, z) {
    this._position[0] = x;
    this._position[1] = y;
    this._position[2] = z;
  }

  /**
   * Gets the visualization coordinates of this object at a given time.
   * @param {Number} jed JED date
   * @return {Array.<Number>} [X, Y,Z] coordinates
   */
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

  /**
   * Updates the object and its label positions for a given time.
   * @param {Number} jed JED date
   */
  update(jed) {
    if (this.isStaticObject()) {
      return;
    }

    let newpos = undefined;
    if (this._object3js) {
      if (!this.shouldUpdateObjectPosition(jed)) {
        return;
      }
      newpos = this.getPosition(jed);
      this._object3js.position.set(newpos[0], newpos[1], newpos[2]);
    }
    if (this._label) {
      if (!this.shouldUpdateObjectPosition(jed)) {
        return;
      }
      if (!newpos) {
        newpos = this.getPosition(jed);
      }
      const label = this._label;
      const SimulationElt = this._simulation.getSimulationElement();
      const pos = toScreenXY(newpos, this._simulation.getCamera(), SimulationElt);
      const loc = {
        left: pos.x - 30, top: pos.y - 25, right: pos.x + label.clientWidth - 20, bottom: pos.y + label.clientHeight,
      };
      if (loc.left > 0 && loc.right < SimulationElt.clientWidth
          && loc.top > 0 && loc.bottom < SimulationElt.clientHeight) {
        label.style.left = `${loc.left}px`;
        label.style.top = `${loc.top}px`;
        label.style.visibility = 'visible';
      } else {
        label.style.visibility = 'hidden';
      }
    }
    this._lastJedUpdated = jed;
  }

  /**
   * Gets the THREE.js objects that represent this SpaceObject.
   * @return {Array.<THREE.Object>} A list of THREE.js objects
   */
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

  /**
   * Gets the color of this object. Usually this corresponds to the color of
   * the dot representing the object as well as its orbit.
   * @return {Number} A hexidecimal color value, e.g. 0xFFFFFF
   */
  getColor() {
    if (this._options.theme) {
      return this._options.theme.color || 0xffffff;
    }
    return 0xffffff;
  }

  /**
   * Gets the {Orbit} object for this SpaceObject.
   * @return {Orbit} Orbit object
   */
  getOrbit() {
    return this._orbit;
  }

  /**
   * Gets the unique ID of this object.
   * @return {String} Unique ID
   */
  getId() {
    return this._id;
  }

  /**
   * Determines whether object is static (can't change its position) or whether
   * its position can be updated (ie, it has ephemeris)
   * @return {boolean} Whether this object can change its position.
   */
  isStaticObject() {
    return !this._options.ephem;
  }
}

const DEFAULT_PLANET_TEXTURE_URL = '{{assets}}/sprites/smallparticle.png';

/**
 * Useful presets for creating SpaceObjects.
 * @example
 * const myobject = viz.addObject('planet1', Spacekit.SpaceObjectPresets.MERCURY);
 */
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
