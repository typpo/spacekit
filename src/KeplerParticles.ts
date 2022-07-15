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

interface ShaderAttributes {
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
}

const DEFAULT_PARTICLE_COUNT = 4096;

/**
 * Compute mean anomaly at date.  Used for elliptical and hyperbolic orbits.
 */
function getM(ephem: Ephem, jd: number): number {
  const d = jd - ephem.get('epoch');
  return ephem.get('ma') + ephem.get('n') * d;
}

const PARABOLIC_K = 0.01720209895;
function getA0(ephem: Ephem, jd: number): number {
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

  private id: string;

  private options: KeplerParticlesOptions;

  private simulation: Simulation;

  private context: SimulationContext;

  private addedToScene: boolean;

  private particleCount: number;

  private elements: Ephem[];

  private uniforms: {
    texture: { value: THREE.Texture };
  };

  private geometry: THREE.BufferGeometry;

  private shaderMaterial: THREE.ShaderMaterial;

  private particleSystem: THREE.Points;

  private attributes: ShaderAttributes;

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
    this.options = options;

    this.id = `KeplerParticles__${KeplerParticles.instanceCount}`;

    this.simulation = contextOrSimulation;
    this.context = contextOrSimulation.getContext();

    // Whether Points object has been added to the Simulation/Scene. This
    // happens lazily when the first data point is added in order to prevent
    // WebGL render warnings.
    this.addedToScene = false;

    // Number of particles in the scene.
    this.particleCount = 0;

    if (!this.options.textureUrl) {
      throw new Error('ParticleSystem requires textureUrl to be set');
    }

    const defaultMapTexture = getThreeJsTexture(
      this.options.textureUrl,
      this.context.options.basePath,
    );

    this.uniforms = {
      texture: { value: defaultMapTexture },
    };

    const particleCount =
      this.options.maxNumParticles || DEFAULT_PARTICLE_COUNT;
    this.elements = [];
    this.attributes = {
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
    this.attributes.M.setUsage(THREE.DynamicDrawUsage);
    this.attributes.a0.setUsage(THREE.DynamicDrawUsage);

    const geometry = new THREE.BufferGeometry();
    geometry.setDrawRange(0, 0);
    Object.keys(this.attributes).forEach((attributeName) => {
      const attribute =
        this.attributes[attributeName as keyof ShaderAttributes];
      geometry.setAttribute(attributeName, attribute);
    });

    const shader = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: getOrbitShaderVertex(),
      fragmentShader: getOrbitShaderFragment(),

      depthTest: true,
      depthWrite: false,
      transparent: true,
    });

    this.shaderMaterial = shader;
    this.geometry = geometry;
    this.particleSystem = new THREE.Points(geometry, shader);
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
    this.elements.push(ephem);
    const attributes = this.attributes;
    const offset = this.particleCount++;

    attributes.size.set(
      [options.particleSize || this.options.defaultSize || 15],
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

    if (Orbit.getOrbitType(ephem) === OrbitType.PARABOLIC) {
      attributes.a0.set([getA0(ephem, this.options.jd || 0)], offset);
    } else {
      attributes.M.set([getM(ephem, this.options.jd || 0)], offset);
    }

    // TODO(ian): Set the update range
    for (const attributeKey in attributes) {
      if (attributes.hasOwnProperty(attributeKey)) {
        attributes[attributeKey as keyof ShaderAttributes].needsUpdate = true;
      }
    }
    this.geometry.setDrawRange(0, this.particleCount);

    if (!this.addedToScene && this.simulation) {
      // This happens lazily when the first data point is added in order to
      // prevent WebGL render warnings.
      this.simulation.addObject(this);
      this.addedToScene = true;
    }

    return offset;
  }

  /**
   * Hides the particle at the given offset so it is no longer drawn. The particle still takes up space in the array
   * though.
   * @param offset
   */
  hideParticle(offset: number) {
    const attributes = this.attributes;
    attributes.size.set([0], offset);

    for (const attributeKey in attributes) {
      if (attributes.hasOwnProperty(attributeKey)) {
        attributes[attributeKey as keyof ShaderAttributes].needsUpdate = true;
      }
    }
  }

  /**
   * Changes the size of the particle at the given offset to the given size. Setting the size to 0 hides the particle.
   * @param {Number} size The new size of this particle
   * @param {Number} offset The location of this particle in the attributes * array
   */
  setParticleSize(size: number, offset: number) {
    const attributes = this.attributes;
    attributes.size.set([size], offset);

    for (const attributeKey in attributes) {
      if (attributes.hasOwnProperty(attributeKey)) {
        attributes[attributeKey as keyof ShaderAttributes].needsUpdate = true;
      }
    }
  }

  /**
   * Changes the color of the particle at the given offset to the given color.
   * @param {Number} colorValue The new color of this particle (e.g. hex number)
   * @param {Number} offset The location of this particle in the attributes * array
   */
  setParticleColor(colorValue: number, offset: number) {
    const attributes = this.attributes;
    const { r, g, b } = new THREE.Color(colorValue);
    attributes.fuzzColor.set([r, g, b], offset * 3);

    for (const attributeKey in attributes) {
      if (attributes.hasOwnProperty(attributeKey)) {
        attributes[attributeKey as keyof ShaderAttributes].needsUpdate = true;
      }
    }
  }

  /**
   * Change the `origin` attribute of a particle.
   * @param {Number} offset The location of this particle in the attributes * array.
   * @param {Array.<Number>} newOrigin The new XYZ coordinates of the body that this particle orbits.
   */
  setParticleOrigin(offset: number, newOrigin: Coordinate3d) {
    this.attributes.origin.set(newOrigin, offset * 3);
    this.attributes.origin.needsUpdate = true;
  }

  /**
   * Update the position for all particles
   * @param {Number} jd JD date
   */
  update(jd: number) {
    const Ms: number[] = [];
    const a0s: number[] = [];
    for (let i = 0; i < this.elements.length; i++) {
      const ephem = this.elements[i];

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

    this.attributes.M.set(Ms);
    this.attributes.M.needsUpdate = true;

    this.attributes.a0.set(a0s);
    this.attributes.a0.needsUpdate = true;
  }

  /**
   * Get THREE.js objects that comprise this point cloud
   * @return {Array.<THREE.Object3D>} List of objects to add to THREE.js scene
   */
  get3jsObjects(): THREE.Object3D[] {
    return [this.particleSystem];
  }

  /**
   * Get unique id for this object.
   * @return {String} Unique id
   */
  getId(): string {
    return this.id;
  }
}

KeplerParticles.instanceCount = 0;
