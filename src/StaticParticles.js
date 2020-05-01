import * as THREE from 'three';

import {
  STAR_SHADER_VERTEX,
  STAR_SHADER_FRAGMENT,
} from './shaders';

const DEFAULT_PARTICLE_SIZE = 4;
const DEFAULT_COLOR = 0xffffff;

/**
 * Simulates a static particle field in whichever base reference the simulation is in.
 */
export class StaticParticles {
  /**
   *
   * @param {String} id Unique ID for this object
   * @param {Array.Array.<Number>} points an array of X,Y,Z cartesian points, one for each particle
   * @param {Object} options container
   * @param {Color} options.defaultColor color to use for all particles can be a THREE string color name or hex value
   * @param {Number} options.size the size of each particle
   * @param {Object} contextOrSimulation Simulation context or simulation object
   */
  constructor(id, points, options, contextOrSimulation) {
    this._options = options;

    this._id = id;

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

    // Number of particles in the scene.
    this._particleCount = points.length;

    this._points = points;
    this._geometry = undefined;

    this.init();
    this._simulation.addObject(this, true);
  }

  init() {
    const positions = new Float32Array(this._points.length * 3);
    const colors = new Float32Array(this._points.length * 3);
    const sizes = new Float32Array(this._points.length);
    let color = new THREE.Color(DEFAULT_COLOR);

    if (this._options.defaultColor) {
      color = new THREE.Color(this._options.defaultColor);
    }

    let size = DEFAULT_PARTICLE_SIZE;

    if (this._options.size) {
      size = this._options.size;
    }

    for (let i = 0, l = this._points.length; i < l; i++) {
      const vertex = this._points[i];
      positions.set(vertex, i * 3);
      color.toArray(colors, i * 3);
      sizes[i] = size;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.addAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.addAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      vertexColors: THREE.VertexColors,
      vertexShader: STAR_SHADER_VERTEX,
      fragmentShader: STAR_SHADER_FRAGMENT,
      transparent: true,
    });

    this._geometry = new THREE.Points(geometry, material);
  }

  /**
   * A list of THREE.js objects that are used to compose the skybox.
   * @return {THREE.Object} Skybox mesh
   */
  get3jsObjects() {
    return [this._geometry];
  }

  /**
   * Get the unique ID of this object.
   * @return {String} id
   */
  getId() {
    return this._id;
  }
}