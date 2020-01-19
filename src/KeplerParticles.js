import * as THREE from 'three';

import { getThreeJsTexture } from './util';

import { getOrbitShaderVertex, getOrbitShaderFragment } from './shaders';
import { getOrbitType, OrbitType } from './Orbit';

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
  constructor(options, contextOrSimulation) {
    this._options = options;

    this._id = `KeplerParticles__${KeplerParticles.instanceCount}`;

    // TODO(ian): Add to ctx
    if (true) {
      // User passed in Simulation
      this._simulation = contextOrSimulation;
      this._context = contextOrSimulation.getContext();
    } else {
      // User just passed in options
      this._simulation = null;
      this._context = contextOrSimulation;
    }

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
    Object.keys(this._attributes).forEach(attributeName => {
      const attribute = this._attributes[attributeName];
      // attribute.setDynamic(true);
      geometry.addAttribute(attributeName, attribute);
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
  addParticle(ephem, options = {}) {
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
   * Change the `origin` attribute of a particle.
   * @param {Number} offset The location of this particle in the attributes * array.
   * @param {Array.<Number>} newOrigin The new XYZ coordinates of the body that this particle orbits.
   */
  setParticleOrigin(offset, newOrigin) {
    this._attributes.origin.set(newOrigin, offset * 3);
    this._attributes.origin.needsUpdate = true;
  }

  /**
   * Update the position for all particles
   * @param {Number} jd JD date
   */
  update(jd) {
    const Ms = [];
    const a0s = [];
    for (let i = 0; i < this._elements.length; i++) {
      const ephem = this._elements[i];

      let M, a0;
      if (getOrbitType(ephem) === OrbitType.PARABOLIC) {
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
   * @return {Array.<THREE.Object>} List of objects to add to THREE.js scene
   */
  get3jsObjects() {
    return [this._particleSystem];
  }

  /**
   * Get unique id for this object.
   * @return {String} Unique id
   */
  getId() {
    return this._id;
  }
}

KeplerParticles.instanceCount = 0;
