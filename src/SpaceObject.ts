import * as THREE from 'three';

import type { PerspectiveCamera } from 'three';

import { EphemPresets } from './EphemPresets';
import { Orbit } from './Orbit';
import { getFullTextureUrl } from './util';
import { rescaleArray, rescaleNumber } from './Scale';

import type { Coordinate3d } from './Coordinates';
import type { Ephem } from './Ephem';
import type { EphemerisTable } from './EphemerisTable';
import type {
  Simulation,
  SimulationContext,
  SimulationObject,
} from './Simulation';

export interface SpaceObjectOptions {
  position?: Coordinate3d;
  scale?: [number, number, number];
  particleSize?: number;
  labelText?: string;
  labelUrl?: string;
  hideOrbit?: boolean;
  axialTilt?: number;
  color?: number;
  radius?: number;
  levelsOfDetail?: { radii: number; segments: number }[];
  atmosphere?: {
    color?: number;
    innerSizeRatio?: number;
    outerSizeRatio?: number;
    enable?: boolean;
  };
  orbitPathSettings?: {
    leadDurationYears?: number;
    trailDurationYears?: number;
    numberSamplePoints?: number;
  };
  ephem?: Ephem;
  ephemTable?: EphemerisTable;
  textureUrl?: string;
  basePath?: string;
  rotation?: {
    enable: boolean;
    period: number;
    speed?: number;
    lambdaDeg?: number;
    betaDeg?: number;
    yorp?: number;
    phi0?: number;
    jd0?: number;
  };
  shape?: {
    shapeUrl?: string;
    color?: number;
  };
  ecliptic?: {
    lineColor?: number;
    displayLines?: boolean;
  };
  theme?: {
    color?: number;
    orbitColor?: number;
  };
  debug?: {
    showAxes: boolean;
    showGrid: boolean;
  };
}

/**
 * @private
 * Minimum number of degrees per day an object must move in order for its
 * position to be updated in the visualization.
 */
// const MIN_DEG_MOVE_PER_DAY: number = 0.05;

/**
 * @private
 * Number of milliseconds between label position updates.
 */
const LABEL_UPDATE_MS: number = 30;

/**
 * @private
 * Converts [X, Y, Z] position in visualization to pixel coordinates.
 */
function toScreenXY(
  position: Coordinate3d,
  camera: PerspectiveCamera,
  canvas: HTMLCanvasElement,
): { x: number; y: number } {
  const pos = new THREE.Vector3(position[0], position[1], position[2]);
  pos.project(camera);
  return {
    x: ((pos.x + 1) * canvas.clientWidth) / 2,
    y: ((-pos.y + 1) * canvas.clientHeight) / 2,
  };
}

/**
 * An object that can be added to a visualization.
 * @example
 * ```
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
 * ```
 */
export class SpaceObject implements SimulationObject {
  protected _id: string;

  protected _options: SpaceObjectOptions;

  protected _simulation: Simulation;

  protected _context: SimulationContext;

  protected _renderMethod?:
    | 'SPRITE'
    | 'PARTICLESYSTEM'
    | 'ROTATING_OBJECT'
    | 'SPHERE';

  protected _initialized: boolean;

  private _object3js?: THREE.Object3D;

  private _useEphemTable: boolean;

  private _isStaticObject: boolean;

  private _label?: HTMLElement;

  private _showLabel: boolean;

  private _lastLabelUpdate: number;

  // private _lastPositionUpdate: number;

  private _position: Coordinate3d;

  private _orbitAround?: SpaceObject;

  private _scale: [number, number, number];

  private _particleIndex?: number;

  // private _degreesPerDay?: number;

  private _orbitPath?: THREE.Object3D;

  private _eclipticLines?: THREE.Object3D;

  private _orbit?: Orbit;

  /**
   * @param {String} id Unique id of this object
   * @param {Object} options Options container
   * @param {Array.<Number>} options.position [X, Y, Z] heliocentric coordinates of object. Defaults to [0, 0, 0]
   * @param {Array.<Number>} options.scale Scale of object on each [X, Y, Z] axis. Defaults to [1, 1, 1]
   * @param {Number} options.particleSize Size of particle if this object is a Kepler object being represented as a particle.
   * @param {String} options.labelText Text label to display above object (set undefined for no label)
   * @param {String} options.labelUrl Label becomes a link that goes to this url.
   * @param {boolean} options.hideOrbit If true, don't show an orbital ellipse. Defaults false.
   * @param {Object} options.orbitPathSettings Contains settings for defining the orbit path
   * @param {Object} options.orbitPathSettings.leadDurationYears orbit path lead time in years
   * @param {Object} options.orbitPathSettings.trailDurationYears orbit path trail time in years
   * @param {Object} options.orbitPathSettings.numberSamplePoints number of
   * points to use when drawing the orbit line. Only applicable for
   * non-elliptical and ephemeris table orbits.
   * @param {Ephem} options.ephem Ephemerides for this orbit
   * @param {EphemerisTable} options.ephemTable ephemeris table object which represents look up ephemeris
   * @param {String} options.textureUrl Texture for sprite
   * @param {String} options.basePath Base path for simulation assets and data
   * @param {Object} options.ecliptic Contains settings related to ecliptic
   * @param {Number} options.ecliptic.lineColor Hex color of lines that run perpendicular to ecliptic. @see Orbit
   * @param {boolean} options.ecliptic.displayLines Whether to show ecliptic lines. Defaults false.
   * @param {Object} options.theme Contains settings related to appearance of orbit
   * @param {Number} options.theme.color Hex color of the object, if applicable
   * @param {Number} options.theme.orbitColor Hex color of the orbit
   * @param {Simulation} contextOrSimulation Simulation context or simulation object
   * @param {boolean} autoInit Automatically initialize this object. If false
   * you must call init() manually.
   */
  constructor(
    id: string,
    options: SpaceObjectOptions,
    simulation: Simulation,
    autoInit: boolean = true,
  ) {
    this._id = id;
    this._options = options || {};
    this._object3js = undefined;
    this._useEphemTable = this._options.ephemTable !== undefined;
    this._isStaticObject = !this._options.ephem && !this._useEphemTable;

    this._simulation = simulation;
    this._context = simulation.getContext();

    this._label = undefined;
    this._showLabel = false;
    this._lastLabelUpdate = 0;
    // this._lastPositionUpdate = 0;

    this._position = rescaleArray(this._options.position || [0, 0, 0]);
    this._orbitAround = undefined;
    this._scale = this._options.scale || [1, 1, 1];

    // The method of rendering used for this object (e.g. SPRITE, PARTICLESYSTEM).
    this._renderMethod = undefined;

    // The index of this particle in the KeplerParticles system, if applicable.
    this._particleIndex = undefined;

    // Number of degrees moved per day. Used to limit the number of orbit
    // updates for very slow moving objects.
    /*
    this._degreesPerDay = this._options.ephem
      ? this._options.ephem.get('n', 'deg')
      : undefined;
    */

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
  init(): boolean {
    this.renderObject();

    if (this._options.labelText) {
      const labelElt = this.createLabel();
      this._simulation.getSimulationElement().appendChild(labelElt);
      this._label = labelElt;
      this._showLabel = true;
    }

    /**
     * Caching of THREE.js objects for orbitPath
     */
    this._orbitPath = undefined;
    this._eclipticLines = undefined;

    this.update(this._simulation.getJd(), true /* force */);

    this._initialized = true;
    return true;
  }

  /**
   * @protected
   * Used by child classes to set the object that gets its position updated.
   * @param {THREE.Object3D} obj Any THREE.js object
   */
  protected setPositionedObject(obj: THREE.Object3D) {
    this._object3js = obj;
  }

  /**
   * @private
   * Build the THREE.js object for this SpaceObject.
   */
  private renderObject() {
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

      if (this._useEphemTable) {
        if (!this._renderMethod) {
          this._object3js = this.createSprite();
          if (this._simulation) {
            this._simulation.addObject(this, true);
          }
          this._renderMethod = 'SPRITE';
        }
      }

      if (!this._renderMethod) {
        if (!this._options.ephem) {
          throw new Error(
            'Attempting to create a particle system, but ephemeris are not available.',
          );
        }
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
  private createLabel(): HTMLElement {
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

    text.style.backgroundColor = '#0009';
    text.style.outline = '1px solid #5f5f5f';

    return text;
  }

  /**
   * @private
   * Updates the label's position
   * @param {Array.Number} newpos Position of the label in the visualization's
   * coordinate system
   */
  private updateLabelPosition(newpos: Coordinate3d) {
    if (!this._label) {
      throw new Error('Attempted to update label position without a label');
    }

    const label = this._label;
    const simulationElt = this._simulation.getSimulationElement();
    const pos = toScreenXY(
      newpos,
      this._simulation.getViewer().get3jsCamera(),
      simulationElt,
    );
    const loc = {
      left: pos.x,
      top: pos.y,
      right: pos.x + label.clientWidth,
      bottom: pos.y + label.clientHeight,
    };
    if (
      loc.left - 30 > 0 &&
      loc.right + 20 < simulationElt.clientWidth &&
      loc.top - 25 > 0 &&
      loc.bottom < simulationElt.clientHeight
    ) {
      label.style.left = `${loc.left - label.clientWidth / 2}px`;
      label.style.top = `${loc.top - label.clientHeight - 8}px`;
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
  private createSprite(): THREE.Sprite {
    if (!this._options.textureUrl) {
      throw new Error('Cannot create sprite without a textureUrl');
    }
    const fullTextureUrl = getFullTextureUrl(
      this._options.textureUrl,
      this._context.options.basePath,
    );
    const texture = new THREE.TextureLoader().load(fullTextureUrl);
    texture.encoding = THREE.LinearEncoding;
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
  private createOrbit(): Orbit {
    if (this._orbit) {
      return this._orbit;
    }

    const ephem = this._useEphemTable
      ? this._options.ephemTable
      : this._options.ephem;
    if (!ephem) {
      throw new Error('Cannot create orbit without Ephem or EphemerisTable');
    }
    return new Orbit(ephem, {
      orbitPathSettings: this._options.orbitPathSettings,
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
  private shouldUpdateObjectPosition(afterJd: number): boolean {
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
  orbitAround(spaceObj: SpaceObject) {
    this._orbitAround = spaceObj;
  }

  /**
   * Updates the position of this object. Applicable only if this object is a
   * sprite and not a particle type.
   * @param {Number} x X position
   * @param {Number} y Y position
   * @param {Number} z Z position
   */
  setPosition(x: number, y: number, z: number) {
    this._position[0] = rescaleNumber(x);
    this._position[1] = rescaleNumber(y);
    this._position[2] = rescaleNumber(z);
  }

  /**
   * Gets the visualization coordinates of this object at a given time.
   * @param {Number} jd JD date
   * @return {Array.<Number>} [X, Y,Z] coordinates
   */
  getPosition(jd: number): Coordinate3d {
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
   * @param {boolean} force Whether to force an update regardless of checks for
   * movement.
   */
  update(jd: number, force: boolean = false) {
    let newpos;
    if (this._label) {
      // Labels must update, even for static objects.
      // TODO(ian): Determine this based on orbit and camera position change.
      const meetsLabelUpdateThreshold =
        +new Date() - this._lastLabelUpdate > LABEL_UPDATE_MS;
      const shouldUpdateLabelPos =
        force || (this._showLabel && meetsLabelUpdateThreshold);
      if (shouldUpdateLabelPos) {
        if (!newpos) {
          newpos = this.getPosition(jd);
        }
        this.updateLabelPosition(newpos);
        this._lastLabelUpdate = +new Date();
      }
    }

    if (this.isStaticObject() && !force) {
      return;
    }

    let shouldUpdateObjectPosition = false;
    if (this._object3js || this._label) {
      shouldUpdateObjectPosition = force || this.shouldUpdateObjectPosition(jd);
    }
    if (this._object3js && shouldUpdateObjectPosition) {
      newpos = this.getPosition(jd);
      this._object3js.position.set(newpos[0], newpos[1], newpos[2]);
      // this._lastPositionUpdate = jd;
    }

    const orbitNeedsRefreshing =
      !this._orbitPath || this._orbit?.needsUpdateForTime(jd);
    if (this._orbit && !this._options.hideOrbit && orbitNeedsRefreshing) {
      if (this._orbitPath) {
        this._simulation.getScene().remove(this._orbitPath);
      }
      this._orbitPath = this._orbit.getOrbitShape(jd, true);
      this._simulation.getScene().add(this._orbitPath);
    }

    const eclipticNeedsRefreshing =
      !this._eclipticLines || orbitNeedsRefreshing;
    if (
      this._orbit &&
      this._options.ecliptic &&
      this._options.ecliptic.displayLines &&
      eclipticNeedsRefreshing
    ) {
      if (this._eclipticLines) {
        this._simulation.getScene().remove(this._eclipticLines);
      }
      this._eclipticLines = this._orbit.getLinesToEcliptic();
      this._simulation.getScene().add(this._eclipticLines);
    }

    if (this._orbitAround) {
      const parentPos = this._orbitAround.getPosition(jd);
      if (this._renderMethod === 'PARTICLESYSTEM') {
        // TODO(ian): Only do this when the origin changes
        this._context.objects.particles?.setParticleOrigin(
          this._particleIndex!,
          parentPos,
        );
      }

      if (!this._options.hideOrbit) {
        this._orbitPath?.position.set(parentPos[0], parentPos[1], parentPos[2]);
      }
      if (!newpos) {
        newpos = this.getPosition(jd);
      }
    }
  }

  /**
   * Gets the THREE.js objects that represent this SpaceObject.  The first
   * object returned is the primary object.  Other objects may be returned,
   * such as rings, ellipses, etc.
   * @return {Array.<THREE.Object3D>} A list of THREE.js objects
   */
  get3jsObjects(): THREE.Object3D[] {
    const ret = [];
    if (this._object3js) {
      ret.push(this._object3js);
    }
    if (this._orbit) {
      if (this._orbitPath) {
        ret.push(this._orbitPath);
      }

      if (this._eclipticLines) {
        ret.push(this._eclipticLines);
      }
    }
    return ret;
  }

  /**
   * Specifies the object that is used to compute the bounding box. By default,
   * this will be the first THREE.js object in this class's list of objects.
   * @return {THREE.Object3D} THREE.js object
   */
  async getBoundingObject(): Promise<THREE.Object3D> {
    return Promise.resolve(this.get3jsObjects()[0]);
  }

  /**
   * Gets the color of this object. Usually this corresponds to the color of
   * the dot representing the object as well as its orbit.
   * @return {Number} A hexidecimal color value, e.g. 0xFFFFFF
   */
  getColor(): number {
    if (this._options.theme) {
      return this._options.theme.color || 0xffffff;
    }
    return 0xffffff;
  }

  /**
   * Gets the {Orbit} object for this SpaceObject.
   * @return {Orbit} Orbit object
   */
  getOrbit(): Orbit | undefined {
    return this._orbit;
  }

  /**
   * Gets label visilibity status.
   * @return {boolean} Whether label is visible.
   */
  getLabelVisibility(): boolean {
    return this._showLabel;
  }

  /**
   * Toggle the visilibity of the label.
   * @param {boolean} val Whether to show or hide.
   */
  setLabelVisibility(val: boolean) {
    if (!this._label) {
      throw new Error('Attempted to set label visibility without a label');
    }

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
  getId(): string {
    return this._id;
  }

  /**
   * Determines whether object is static (can't change its position) or whether
   * its position can be updated (ie, it has ephemeris)
   * @return {boolean} Whether this object can change its position.
   */
  isStaticObject(): boolean {
    return this._isStaticObject;
  }

  /**
   * Determines whether object is ready to be measured or added to scene.
   * @return {boolean} True if ready
   */
  isReady(): boolean {
    return this._initialized;
  }

  removalCleanup() {
    if (this._label) {
      this._simulation.getSimulationElement().removeChild(this._label);
      this._label = undefined;
    }

    if (this._particleIndex !== undefined) {
      this._context?.objects.particles.hideParticle(this._particleIndex);
    }
  }
}

const DEFAULT_PLANET_TEXTURE_URL = '{{assets}}/sprites/smallparticle.png';

/**
 * Useful presets for creating SpaceObjects.
 * @example
 * ```
 * const myobject = viz.addObject('planet1', Spacekit.SpaceObjectPresets.MERCURY);
 * ```
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
