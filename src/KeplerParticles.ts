import * as THREE from 'three';

import { getThreeJsTexture } from './util';

import { Coordinate3d } from './Coordinates';
import { getOrbitShaderVertex, getOrbitShaderFragment } from './shaders';
import { Orbit, OrbitType } from './Orbit';

import type { Ephem } from './Ephem';
import type { Simulation, SimulationContext } from './Simulation';

interface BaseKeplerParticleOptions {
  color?: number;
  textureUrl?: string;
  basePath?: string;
  jd?: number;
  maxNumParticles?: number;
}

// TODO(ian): Clean this up - we probably don't need a separate type.
type KeplerParticlesOptions = BaseKeplerParticleOptions & {
  defaultSize?: number;
};

type KeplerParticleOptions = BaseKeplerParticleOptions & {
  particleSize?: number;
};

const DEFAULT_PARTICLE_COUNT = 4096;

/**
 * Compute mean anomaly at date.  Used for elliptical and hyperbolic orbits.
 */
function getM(ephem, jd) {
  const d = jd - ephem.get('epoch');
  return ephem.get('ma') + ephem.get('n') * d;
}

const PARABOLIC_K = 0.01720209895;
function getA0(ephem, jd) {
  const tp = ephem.get('tp');
  const e = ephem.get('e');
  const q = ephem.get('q');
  const d = jd - tp;
  return 0.75 * d * PARABOLIC_K * Math.sqrt((1 + e) / (q * q * q));
}

/**
 * An efficient way to render many objects in space with Kepler orbits.
 * Primarily used by Simulation to render all non-static objects.
 * @see Simulation
 */
export class KeplerParticles {
  static instanceCount: number;

  private _id: string;

  private _options: KeplerParticlesOptions;

  private _simulation: Simulation;

  private _context: SimulationContext;

  private _addedToScene: boolean;

  private _particleCount: number;

  private _elements?: Ephem[];

  private _uniforms?: {
    texture: { value: THREE.Texture };
  };

  private _geometry?: THREE.BufferGeometry;

  private _shaderMaterial?: THREE.ShaderMaterial;

  private _particleSystem?: THREE.Points;

  private _attributes?: {
    size: THREE.BufferAttribute;
    origin: THREE.BufferAttribute;
    position: THREE.BufferAttribute;
    fuzzColor: THREE.BufferAttribute;
    a: THREE.BufferAttribute;
    e: THREE.BufferAttribute;
    i: THREE.BufferAttribute;
    om: THREE.BufferAttribute;
    ma: THREE.BufferAttribute;
    n: THREE.BufferAttribute;
    w: THREE.BufferAttribute;
    wBar: THREE.BufferAttribute;
    q: THREE.BufferAttribute;
    M: THREE.BufferAttribute;
    a0: THREE.BufferAttribute;
  };

  /**
   * @param {Object} options Options container
   * @param {Object} options.textureUrl Template url for sprite
   * @param {Object} options.basePath Base path for simulation supporting files
   * @param {Number} options.jd JD date value
   * @param {Number} options.maxNumParticles Maximum number of particles to display. Defaults to 4096
   * @param {Number} options.defaultSize Default size of particles. Note this
   * can be overriden by SpaceObject particleSize. Defaults to 25
   * @param {Object} contextOrSimulation Simulation context or object
   */
  constructor(
    options: KeplerParticlesOptions,
    contextOrSimulation: Simulation,
  ) {
    this._options = options;

    this._id = `KeplerParticles__${KeplerParticles.instanceCount}`;

    this._simulation = contextOrSimulation;
    this._context = contextOrSimulation.getContext();

    // Whether Points object has been added to the Simulation/Scene. This
    // happens lazily when the first data point is added in order to prevent
    // WebGL render warnings.
    this._addedToScene = false;

    // Number of particles in the scene.
    this._particleCount = 0;

    this._elements = null;
    this._attributes = null;
    this._uniforms = null;
    this._geometry = null;
    this._shaderMaterial = null;
    this._particleSystem = null;

    this.init();
  }

  /**
   * @private
   */
  init() {
    this.createParticleSystem();
  }

  /**
   * @private
   */
  createParticleSystem() {
    const defaultMapTexture = getThreeJsTexture(
      this._options.textureUrl,
      this._context.options.basePath,
    );

    this._uniforms = {
      texture: { value: defaultMapTexture },
    };

    const particleCount =
      this._options.maxNumParticles || DEFAULT_PARTICLE_COUNT;
    this._elements = [];
    this._attributes = {
      size: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      origin: new THREE.BufferAttribute(new Float32Array(particleCount * 3), 3),
      position: new THREE.BufferAttribute(
        new Float32Array(particleCount * 3),
        3,
      ),
      fuzzColor: new THREE.BufferAttribute(
        new Float32Array(particleCount * 3),
        3,
      ),

      a: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      e: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      i: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      om: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      ma: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      n: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      w: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      wBar: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      q: new THREE.BufferAttribute(new Float32Array(particleCount), 1),

      M: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      a0: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
    };

    const geometry = new THREE.BufferGeometry();
    geometry.setDrawRange(0, 0);
    Object.keys(this._attributes).forEach((attributeName) => {
      const attribute = this._attributes[attributeName];
      // attribute.setDynamic(true);
      geometry.setAttribute(attributeName, attribute);
    });

    const shader = new THREE.ShaderMaterial({
      uniforms: this._uniforms,
      vertexShader: getOrbitShaderVertex(),
      fragmentShader: getOrbitShaderFragment(),

      depthTest: true,
      depthWrite: false,
      transparent: true,
    });

    this._shaderMaterial = shader;
    this._geometry = geometry;
    this._particleSystem = new THREE.Points(geometry, shader);
  }

  /**
   * Add a particle to this particle system.
   * @param {Ephem} ephem Kepler ephemeris
   * @param {Object} options Options container
   * @param {Number} options.particleSize Size of particles
   * @param {Number} options.color Color of particles
   * @return {Number} The index of this article in the attribute list.
   */
  addParticle(ephem: Ephem, options: KeplerParticleOptions = {}): number {
    this._elements.push(ephem);
    const attributes = this._attributes;
    const offset = this._particleCount++;

    attributes.size.set(
      [options.particleSize || this._options.defaultSize || 15],
      offset,
    );
    const color = new THREE.Color(options.color || 0xffffff);
    attributes.fuzzColor.set([color.r, color.g, color.b], offset * 3);

    attributes.origin.set([0, 0, 0], offset * 3);

    attributes.a.set([ephem.get('a')], offset);
    attributes.e.set([ephem.get('e')], offset);
    attributes.i.set([ephem.get('i', 'rad')], offset);
    attributes.om.set([ephem.get('om', 'rad')], offset);
    attributes.wBar.set([ephem.get('wBar', 'rad')], offset);
    attributes.q.set([ephem.get('q')], offset);

    attributes.M.set([getM(ephem, this._options.jd || 0)], offset);
    attributes.a0.set([getA0(ephem, this._options.jd || 0)], offset);

    // TODO(ian): Set the update range
    for (const attributeKey in attributes) {
      if (attributes.hasOwnProperty(attributeKey)) {
        attributes[attributeKey].needsUpdate = true;
      }
    }
    this._geometry.setDrawRange(0, this._particleCount);

    if (!this._addedToScene && this._simulation) {
      // This happens lazily when the first data point is added in order to
      // prevent WebGL render warnings.
      this._simulation.addObject(this);
      this._addedToScene = true;
    }

    return offset;
  }

  /**
   * Hides the particle at the given offset so it is no longer drawn. The particle still takes up space in the array
   * though.
   * @param offset
   */
  hideParticle(offset: number) {
    const attributes = this._attributes;
    attributes.size.set([0], offset);

    for (const attributeKey in attributes) {
      if (attributes.hasOwnProperty(attributeKey)) {
        attributes[attributeKey].needsUpdate = true;
      }
    }
  }

  /**
   * Change the `origin` attribute of a particle.
   * @param {Number} offset The location of this particle in the attributes * array.
   * @param {Array.<Number>} newOrigin The new XYZ coordinates of the body that this particle orbits.
   */
  setParticleOrigin(offset: number, newOrigin: Coordinate3d) {
    this._attributes.origin.set(newOrigin, offset * 3);
    this._attributes.origin.needsUpdate = true;
  }

  /**
   * Update the position for all particles
   * @param {Number} jd JD date
   */
  update(jd: number) {
    const Ms = [];
    const a0s = [];
    for (let i = 0; i < this._elements.length; i++) {
      const ephem = this._elements[i];

      let M, a0;
      if (Orbit.getOrbitType(ephem) === OrbitType.PARABOLIC) {
        a0 = getA0(ephem, jd);
        M = 0;
      } else {
        a0 = 0;
        M = getM(ephem, jd);
      }

      Ms.push(M);
      a0s.push(a0);
    }

    this._attributes.M.set(Ms);
    this._attributes.M.needsUpdate = true;

    this._attributes.a0.set(a0s);
    this._attributes.a0.needsUpdate = true;
  }

  /**
   * Get THREE.js objects that comprise this point cloud
   * @return {Array.<THREE.Object3D>} List of objects to add to THREE.js scene
   */
  get3jsObjects(): THREE.Object3D[] {
    return [this._particleSystem];
  }

  /**
   * Get unique id for this object.
   * @return {String} Unique id
   */
  getId(): string {
    return this._id;
  }
}

KeplerParticles.instanceCount = 0;
