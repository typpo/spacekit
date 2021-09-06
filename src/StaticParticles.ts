import * as THREE from 'three';

import { STAR_SHADER_VERTEX, STAR_SHADER_FRAGMENT } from './shaders';

import type { Coordinate3d } from './Coordinates';
import type { Simulation, SimulationObject } from './Simulation';

interface StaticParticleOptions {
  defaultColor: number;
  size: number;
}

const DEFAULT_PARTICLE_SIZE = 4;
const DEFAULT_COLOR = 0xffffff;

/**
 * Simulates a static particle field in whichever base reference the simulation is in.
 */
export class StaticParticles implements SimulationObject {
  private id: string;

  private options: StaticParticleOptions;

  private simulation: Simulation;

  private points: Coordinate3d[];

  private pointObject?: THREE.Points;

  /**
   *
   * @param {String} id Unique ID for this object
   * @param {Array.Array.<Number>} points an array of X,Y,Z cartesian points, one for each particle
   * @param {Object} options container
   * @param {Color} options.defaultColor color to use for all particles can be a THREE string color name or hex value
   * @param {Number} options.size the size of each particle
   * @param {Simulation} simulation Simulation object
   */
  constructor(
    id: string,
    points: Coordinate3d[],
    options: StaticParticleOptions,
    simulation: Simulation,
  ) {
    this.options = options;

    this.id = id;

    // User passed in Simulation
    this.simulation = simulation;

    this.points = points;
    this.pointObject = undefined;

    this.init();
    this.simulation.addObject(this, true);
  }

  init() {
    const positions = new Float32Array(this.points.length * 3);
    const colors = new Float32Array(this.points.length * 3);
    const sizes = new Float32Array(this.points.length);
    let color = new THREE.Color(DEFAULT_COLOR);

    if (this.options.defaultColor) {
      color = new THREE.Color(this.options.defaultColor);
    }

    let size = DEFAULT_PARTICLE_SIZE;

    if (this.options.size) {
      size = this.options.size;
    }

    for (let i = 0, l = this.points.length; i < l; i++) {
      const vertex = this.points[i];
      positions.set(vertex, i * 3);
      color.toArray(colors, i * 3);
      sizes[i] = size;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      vertexColors: true,
      vertexShader: STAR_SHADER_VERTEX,
      fragmentShader: STAR_SHADER_FRAGMENT,
      transparent: true,
    });

    this.pointObject = new THREE.Points(geometry, material);
  }

  /**
   * A list of THREE.js objects that are used to compose the particle system.
   * @return {THREE.Object3D} Point geometry
   */
  get3jsObjects(): THREE.Object3D[] {
    if (this.pointObject) {
      return [this.pointObject];
    }
    return [];
  }

  /**
   * Get the unique ID of this object.
   * @return {String} id
   */
  getId(): string {
    return this.id;
  }

  update() {
    // Static particles don't update
  }
}
