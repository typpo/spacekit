import * as THREE from 'three';

import {
  GENERIC_PARTICLE_SHADER_VERTEX,
  GENERIC_PARTICLE_SHADER_FRAGMENT,
} from './shaders';

const DEFAULT_PARTICLE_COUNT = 1024;

const PARTICLE_SIZE = 5.0;

export class StaticParticles {
  constructor(options, contextOrSimulation) {
    this._options = options;

    this._id = `StaticParticles__${StaticParticles.instanceCount}`;

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
    this._particleCount = 0;

    this._points = undefined;

    this.init();
  }

  init() {
    const positions = new Float32Array(vertices.length * 3);
    const colors = new Float32Array(vertices.length * 3);
    const sizes = new Float32Array(vertices.length);

    for (let i = 0, l = vertices.length; i < l; i++) {
      const vertex = vertices[i];
      vertex.toArray(positions, i * 3);
      color.setHSL(0.01 + 0.1 * (i / l), 1.0, 0.5);
      color.toArray(colors, i * 3);
      sizes[i] = PARTICLE_SIZE * 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.addAttribute('customColor', new THREE.BufferAttribute(colors, 3));
    geometry.addAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xffffff) },
        // texture: { value: new THREE.TextureLoader().load( "textures/sprites/disc.png" ) }
      },
      vertexShader: GENERIC_PARTICLE_SHADER_VERTEX,
      fragmentShader: GENERIC_PARTICLE_SHADER_FRAGMENT,
      alphaTest: 0.9,
    });

    this._points = new THREE.Points(geometry, material);
  }
}

StaticParticles.instanceCount = 0;
