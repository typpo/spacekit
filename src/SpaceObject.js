import * as THREE from 'three';

import { EphemPresets } from './EphemPresets';
import { Orbit } from './Orbit';
import { getFullTextureUrl } from './util';
import { rescaleArray, rescaleNumber } from './Scale';

/**
 * @private
 * Minimum number of degrees per day an object must move in order for its
 * position to be updated in the visualization.
 */
const MIN_DEG_MOVE_PER_DAY = 0.05;

/**
 * @private
 * Number of milliseconds between label position updates.
 */
const LABEL_UPDATE_MS = 30;

/**
 * @private
 * Converts (X, Y, Z) position in visualization to pixel coordinates.
 */
function toScreenXY(position, camera, canvas) {
  const pos = new THREE.Vector3(position[0], position[1], position[2]);
  const projScreenMat = new THREE.Matrix4();
  projScreenMat.multiplyMatrices(
    camera.projectionMatrix,
    camera.matrixWorldInverse,
  );
  pos.applyMatrix4(projScreenMat);
  return {
    x: ((pos.x + 1) * canvas.clientWidth) / 2,
    y: ((-pos.y + 1) * canvas.clientHeight) / 2,
  };
}

/**
 * An object that can be added to a visualization.
 * @example
 * const myObject = viz.addObject('planet1', {
 *   position: [0, 0, 0],
 *   scale: [1, 1, 1],
 *   particleSize: 5,
 *   labelText: 'My object',
 *   labelUrl: 'http://...',
 *   hideOrbit: false,
 *   ephem: new Spacekit.Ephem({...}),
 *   textureUrl: '/path/to/spriteTexture.png',
 *   basePath: '/base',
 *   ecliptic: {
 *     lineColor: 0xCCCCCC,
 *     displayLines: false,
 *   },
 *   theme: {
 *     color: 0xFFFFFF,
 *     orbitColor: 0x888888,
 *   },
 * });
 */
export class SpaceObject {
  /**
   * @param {String} id Unique id of this object
   * @param {Object} options Options container
   * @param {Array.<Number>} options.position [X, Y, Z] heliocentric coordinates of object. Defaults to [0, 0, 0]
   * @param {Array.<Number>} options.scale Scale of object on each [X, Y, Z] axis. Defaults to [1, 1, 1]
   * @param {Number} options.particleSize Size of particle if this object is a Kepler object being represented as a particle.
   * @param {String} options.labelText Text label to display above object (set undefined for no label)
   * @param {String} options.labelUrl Label becomes a link that goes to this url.
   * @param {boolean} options.hideOrbit If true, don't show an orbital ellipse. Defaults false.
   * @param {Ephem} options.ephem Ephemerides for this orbit
   * @param {String} options.textureUrl Texture for sprite
   * @param {String} options.basePath Base path for simulation assets and data
   * @param {Object} options.ecliptic Contains settings related to ecliptic
   * @param {Number} options.ecliptic.lineColor Hex color of lines that run perpendicular to ecliptic. @see Orbit
   * @param {boolean} options.ecliptic.displayLines Whether to show ecliptic lines. Defaults false.
   * @param {Object} options.theme Contains settings related to appearance of orbit
   * @param {Number} options.theme.color Hex color of the object, if applicable
   * @param {Number} options.theme.orbitColor Hex color of the orbit
   * @param {Object} contextOrSimulation Simulation context or simulation object
   * @param {boolean} autoInit Automatically initialize this object. If false
   * you must call init() manually.
   */
  constructor(id, options, contextOrSimulation, autoInit = true) {
    this._id = id;
    this._options = options || {};
    this._object3js = undefined;

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

    this._renderMethod = null;

    this._label = null;
    this._showLabel = false;
    this._lastLabelUpdate = 0;
    this._lastPositionUpdate = 0;

    this._position = rescaleArray(this._options.position || [0, 0, 0]);
    this._orbitAround = undefined;
    this._scale = this._options.scale || [1, 1, 1];

    // The method of rendering used for this object (e.g. SPRITE, PARTICLESYSTEM).
    this._renderMethod = undefined;

    // The index of this particle in the KeplerParticles system, if applicable.
    this._particleIndex = undefined;

    // Number of degrees moved per day. Used to limit the number of orbit
    // updates for very slow moving objects.
    this._degreesPerDay = this._options.ephem
      ? this._options.ephem.get('n', 'deg')
      : undefined;

    this._initialized = false;
    if (autoInit && !this.init()) {
      console.warn(`SpaceObject ${id}: failed to initialize`);
    }
  }

  /**
   * Initializes label and three.js objects. Called automatically unless you've
   * set autoInit to false in constructor (this init is suppressed by some
   * child classes).
   */
  init() {
    this.renderObject();

    if (this._options.labelText) {
      const labelElt = this.createLabel();
      this._simulation.getSimulationElement().appendChild(labelElt);
      this._label = labelElt;
      this._showLabel = true;
    }
    this._initialized = true;
    return true;
  }

  /**
   * @protected
   * Used by child classes to set the object that gets its position updated.
   * @param {THREE.Object3D} obj Any THREE.js object
   */
  setPositionedObject(obj) {
    this._object3js = obj;
  }

  /**
   * @private
   * Build the THREE.js object for this SpaceObject.
   */
  renderObject() {
    if (this.isStaticObject()) {
      if (!this._renderMethod) {
        // TODO(ian): It kinda sucks to have SpaceObject care about
        // renderMethod, which is set by children.

        // Create a stationary sprite.
        this._object3js = this.createSprite();
        if (this._simulation) {
          // Add it all to visualization.
          this._simulation.addObject(this, false /* noUpdate */);
        }
        this._renderMethod = 'SPRITE';
      }
    } else {
      // Create the orbit no matter what - it's used to get current position
      // for CPU-positioned objects (e.g. child RotatingObjects, SphereObjects,
      // ShapeObjects).
      // TODO(ian): Only do this if we need to compute orbit position on the
      // CPU or display an orbit path.
      this._orbit = this.createOrbit();

      if (!this._options.hideOrbit && this._simulation) {
        // Add it all to visualization.
        this._simulation.addObject(this, false /* noUpdate */);
      }

      if (!this._renderMethod) {
        // Create a particle representing this object on the GPU.
        this._particleIndex = this._context.objects.particles.addParticle(
          this._options.ephem,
          {
            particleSize: this._options.particleSize,
            color: this.getColor(),
          },
        );
        this._renderMethod = 'PARTICLESYSTEM';
      }
    }
  }

  /**
   * @private
   * Builds the label div and adds it to the visualization
   * @return {HTMLElement} A div that contains the label for this object
   */
  createLabel() {
    const text = document.createElement('div');
    text.className = 'spacekit__object-label';

    const { labelText, labelUrl } = this._options;
    if (this._options.labelUrl) {
      text.innerHTML = `<div><a target="_blank" href="${labelUrl}">${labelText}</a></div>`;
    } else {
      text.innerHTML = `<div>${labelText}</div>`;
    }
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
   * Updates the label's position
   * @param {Array.Number} newpos Position of the label in the visualization's
   * coordinate system
   */
  updateLabelPosition(newpos) {
    const label = this._label;
    const simulationElt = this._simulation.getSimulationElement();
    const pos = toScreenXY(
      newpos,
      this._simulation.getViewer().get3jsCamera(),
      simulationElt,
    );
    const loc = {
      left: pos.x - 30,
      top: pos.y - 25,
      right: pos.x + label.clientWidth - 20,
      bottom: pos.y + label.clientHeight,
    };
    if (
      loc.left > 0 &&
      loc.right < simulationElt.clientWidth &&
      loc.top > 0 &&
      loc.bottom < simulationElt.clientHeight
    ) {
      label.style.left = `${loc.left}px`;
      label.style.top = `${loc.top}px`;
      label.style.visibility = 'visible';
    } else {
      label.style.visibility = 'hidden';
    }
  }

  /**
   * @private
   * Builds the sprite for this object
   * @return {THREE.Sprite} A sprite object
   */
  createSprite() {
    const fullTextureUrl = getFullTextureUrl(
      this._options.textureUrl,
      this._context.options.basePath,
    );
    const texture = new THREE.TextureLoader().load(fullTextureUrl);
    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: texture,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        color: this._options.theme ? this._options.theme.color : 0xffffff,
      }),
    );
    const scale = rescaleArray(this._scale);
    sprite.scale.set(scale[0], scale[1], scale[2]);
    const position = this.getPosition(this._simulation.getJd());
    sprite.position.set(position[0], position[1], position[2]);

    if (this.isStaticObject()) {
      sprite.updateMatrix();
      sprite.matrixAutoUpdate = false;
    }

    return sprite;
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
      color: this._options.theme ? this._options.theme.orbitColor : undefined,
      eclipticLineColor: this._options.ecliptic
        ? this._options.ecliptic.lineColor
        : undefined,
    });
  }

  /**
   * @private
   * Determines whether to update the position of an update. Don't update if JD
   * threshold is less than a certain amount.
   * @param {Number} afterJd Next JD
   * @return {boolean} Whether to update
   */
  shouldUpdateObjectPosition(afterJd) {
    // TODO(ian): Reenable this as a function of zoom level, because as you get
    // closer the chopiness gets more noticeable.
    return true;
    /*
    if (!this._degreesPerDay || !this._lastPositionUpdate) {
      return true;
    }
    const degMove = this._degreesPerDay * (afterJd - this._lastPositionUpdate);
    if (degMove < MIN_DEG_MOVE_PER_DAY) {
      return false;
    }
    return true;
    */
  }

  /**
   * Make this object orbit another orbit.
   * @param {Object} spaceObj The SpaceObject that will serve as the origin of this object's orbit.
   */
  orbitAround(spaceObj) {
    if (this._renderMethod !== 'PARTICLESYSTEM') {
      console.error(
        `"${this._renderMethod}" is not a valid render method for \`setOrbitCenter\`. Required: PARTICLESYSTEM`,
      );
      return;
    }

    this._orbitAround = spaceObj;
  }

  /**
   * Updates the position of this object. Applicable only if this object is a
   * sprite and not a particle type.
   * @param {Number} x X position
   * @param {Number} y Y position
   * @param {Number} z Z position
   */
  setPosition(x, y, z) {
    this._position[0] = rescaleNumber(x);
    this._position[1] = rescaleNumber(y);
    this._position[2] = rescaleNumber(z);
  }

  /**
   * Gets the visualization coordinates of this object at a given time.
   * @param {Number} jd JD date
   * @return {Array.<Number>} [X, Y,Z] coordinates
   */
  getPosition(jd) {
    const pos = this._position;
    if (!this._orbit) {
      // Default implementation, a static object.
      return pos;
    }

    const posModified = this._orbit.getPositionAtTime(jd);
    if (this._orbitAround) {
      const parentPos = this._orbitAround.getPosition(jd);
      return [
        pos[0] + posModified[0] + parentPos[0],
        pos[1] + posModified[1] + parentPos[1],
        pos[2] + posModified[2] + parentPos[2],
      ];
    }
    return [
      pos[0] + posModified[0],
      pos[1] + posModified[1],
      pos[2] + posModified[2],
    ];
  }

  /**
   * Updates the object and its label positions for a given time.
   * @param {Number} jd JD date
   */
  update(jd) {
    if (this.isStaticObject()) {
      return;
    }

    let newpos;
    let shouldUpdateObjectPosition = false;
    if (this._object3js || this._label) {
      shouldUpdateObjectPosition = this.shouldUpdateObjectPosition(jd);
    }
    if (this._object3js && shouldUpdateObjectPosition) {
      newpos = this.getPosition(jd);
      this._object3js.position.set(newpos[0], newpos[1], newpos[2]);
      this._lastPositionUpdate = jd;
    }

    if (this._orbitAround) {
      const parentPos = this._orbitAround.getPosition(jd);
      this._context.objects.particles.setParticleOrigin(
        this._particleIndex,
        parentPos,
      );
      if (!this._options.hideOrbit) {
        this._orbit
          .getOrbitShape()
          .position.set(parentPos[0], parentPos[1], parentPos[2]);
      }
      if (!newpos) {
        newpos = this.getPosition(jd);
      }
    }

    // TODO(ian): Determine this based on orbit and camera position change.
    const shouldUpdateLabelPos =
      +new Date() - this._lastLabelUpdate > LABEL_UPDATE_MS && this._showLabel;
    if (this._label && shouldUpdateLabelPos) {
      if (!newpos) {
        newpos = this.getPosition(jd);
      }
      this.updateLabelPosition(newpos);
      this._lastLabelUpdate = +new Date();
    }
  }

  /**
   * Gets the THREE.js objects that represent this SpaceObject.  The first
   * object returned is the primary object.  Other objects may be returned,
   * such as rings, ellipses, etc.
   * @return {Array.<THREE.Object>} A list of THREE.js objects
   */
  get3jsObjects() {
    const ret = [];
    if (this._object3js) {
      ret.push(this._object3js);
    }
    if (this._orbit) {
      ret.push(this._orbit.getOrbitShape());
      if (this._options.ecliptic && this._options.ecliptic.displayLines) {
        ret.push(this._orbit.getLinesToEcliptic());
      }
    }
    return ret;
  }

  /**
   * Specifies the object that is used to compute the bounding box. By default,
   * this will be the first THREE.js object in this class's list of objects.
   * @return {THREE.Object3D} THREE.js object
   */
  getBoundingObject() {
    return this.get3jsObjects()[0];
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
   * Gets label visilibity status.
   * @return {boolean} Whether label is visible.
   */
  getLabelVisibility() {
    return this._showLabel;
  }

  /**
   * Toggle the visilibity of the label.
   * @param {boolean} val Whether to show or hide.
   */
  setLabelVisibility(val) {
    if (val) {
      this._showLabel = true;
      this._label.style.display = 'block';
    } else {
      this._showLabel = false;
      this._label.style.display = 'none';
    }
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

  /**
   * Determines whether object is ready to be measured or added to scene.
   * @return {boolean} True if ready
   */
  isReady() {
    return this._initialized;
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
    textureUrl: '{{assets}}/sprites/lensflare0.png',
    position: [0, 0, 0],
  },
  MERCURY: {
    textureUrl: DEFAULT_PLANET_TEXTURE_URL,
    theme: {
      color: 0x913cee,
    },
    ephem: EphemPresets.MERCURY,
  },
  VENUS: {
    textureUrl: DEFAULT_PLANET_TEXTURE_URL,
    theme: {
      color: 0xff7733,
    },
    ephem: EphemPresets.VENUS,
  },
  EARTH: {
    textureUrl: DEFAULT_PLANET_TEXTURE_URL,
    theme: {
      color: 0x009acd,
    },
    ephem: EphemPresets.EARTH,
  },
  MOON: {
    textureUrl: DEFAULT_PLANET_TEXTURE_URL,
    theme: {
      color: 0xffd700,
    },
    ephem: EphemPresets.MOON,

    // Special params
    particleSize: 6,
  },
  MARS: {
    textureUrl: DEFAULT_PLANET_TEXTURE_URL,
    theme: {
      color: 0xa63a3a,
    },
    ephem: EphemPresets.MARS,
  },
  JUPITER: {
    textureUrl: DEFAULT_PLANET_TEXTURE_URL,
    theme: {
      color: 0xffb90f,
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
      color: 0x0099ff,
    },
    ephem: EphemPresets.URANUS,
  },
  NEPTUNE: {
    textureUrl: DEFAULT_PLANET_TEXTURE_URL,
    theme: {
      color: 0x3333ff,
    },
    ephem: EphemPresets.NEPTUNE,
  },
  PLUTO: {
    textureUrl: DEFAULT_PLANET_TEXTURE_URL,
    theme: {
      color: 0xccc0b0,
    },
    ephem: EphemPresets.PLUTO,
  },
};
