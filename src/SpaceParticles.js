import { getFullTextureUrl } from './util';

import { ORBIT_SHADER_VERTEX, ORBIT_SHADER_FRAGMENT } from './shaders';

const DEFAULT_PARTICLE_COUNT = 1024;

/**
 * An efficient way to render many objects in space with Kepler orbits.
 * Primarily used by Simulation to render all non-static objects.
 * @see Simulation
 */
export class SpaceParticles {
  /**
   * @param {Object} options Options container
   * @param {Object} options.textureUrl Template url for sprite
   * @param {Object} options.assetPath Base path for assets
   * @param {Number} options.jd JD date value
   * @param {Number} options.maxNumParticles Maximum number of particles to display. Defaults to 1024
   * @param {Object} contextOrSimulation Simulation context or object
   */
  constructor(options, contextOrSimulation) {
    this._options = options;

    this._id = `SpaceParticles__${SpaceParticles.instanceCount}`;

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
    const fullTextureUrl = getFullTextureUrl(
      this._options.textureUrl,
      this._context.options.assetPath,
    );
    const defaultMapTexture = new THREE.TextureLoader().load(fullTextureUrl);

    this._uniforms = {
      jd: { value: this._options.jd || 0 },
      texture: { value: defaultMapTexture },
    };

    const particleCount = this._options.maxNumParticles || DEFAULT_PARTICLE_COUNT;
    this._attributes = {
      size: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      position: new THREE.BufferAttribute(new Float32Array(particleCount * 3), 3),
      fuzzColor: new THREE.BufferAttribute(new Float32Array(particleCount * 3), 3),

      a: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      e: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      i: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      om: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      ma: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      n: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      w: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      wBar: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      epoch: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
    };

    const geometry = new THREE.BufferGeometry();
    geometry.setDrawRange(0, 0);
    Object.keys(this._attributes).forEach((attributeName) => {
      const attribute = this._attributes[attributeName];
      // attribute.setDynamic(true);
      geometry.addAttribute(attributeName, attribute);
    });

    const shader = new THREE.ShaderMaterial({
      uniforms: this._uniforms,
      vertexShader: ORBIT_SHADER_VERTEX,
      fragmentShader: ORBIT_SHADER_FRAGMENT,

      depthTest: false,
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
   */
  addParticle(ephem, options = {}) {
    const attributes = this._attributes;
    const offset = this._particleCount++;

    attributes.size.set([options.particleSize || 15], offset);
    const color = new THREE.Color(options.color || 0xffffff);
    attributes.fuzzColor.set([color.r, color.g, color.b], offset * 3);

    attributes.a.set([ephem.get('a')], offset);
    attributes.e.set([ephem.get('e')], offset);
    attributes.i.set([ephem.get('i', 'rad')], offset);
    attributes.om.set([ephem.get('om', 'rad')], offset);
    attributes.ma.set([ephem.get('ma', 'rad')], offset);
    attributes.n.set([ephem.get('n', 'rad')], offset);
    attributes.w.set([ephem.get('w', 'rad')], offset);
    attributes.wBar.set([ephem.get('wBar', 'rad')], offset);
    attributes.epoch.set([ephem.get('epoch')], offset);

    // TODO(ian): Set the update range
    for (const attributeKey in attributes) {
      if (attributes.hasOwnProperty(attributeKey)) {
        attributes[attributeKey].needsUpdate = true;
      }
    }
    this._shaderMaterial.needsUpdate = true;
    this._geometry.setDrawRange(0, this._particleCount);
    this._geometry.needsUpdate = true;

    if (!this._addedToScene && this._simulation) {
      // This happens lazily when the first data point is added in order to
      // prevent WebGL render warnings.
      this._simulation.addObject(this);
      this._addedToScene = true;
    }
  }

  /**
   * Update the position for all particles
   * @param {Number} jd JD date
   */
  update(jd) {
    this._uniforms.jd.value = jd;
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

SpaceParticles.instanceCount = 0;
