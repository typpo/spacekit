import { getFullTextureUrl } from './util';

import { ORBIT_SHADER_VERTEX, ORBIT_SHADER_FRAGMENT } from './shaders';

const DEFAULT_PARTICLE_COUNT = 1024;

export class SpaceParticles {
  constructor(options, contextOrContainer) {
    this._options = options;

    this._id = `SpaceParticles__${SpaceParticles.instanceCount}`;

    // TODO(ian): Add to ctx
    if (true) {
      // User passed in Container
      this._container = contextOrContainer;
      this._context = contextOrContainer.getContext();
    } else {
      // User just passed in options
      this._container = null;
      this._context = contextOrContainer;
    }

    // Whether Points object has been added to the Container/Scene. This
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

  init() {
    this.createParticleSystem();
  }

  createParticleSystem() {
    const fullTextureUrl = getFullTextureUrl(
      this._options.textureUrl,
      this._context.options.assetPath,
    );
    const defaultMapTexture = new THREE.TextureLoader().load(fullTextureUrl);

    this._uniforms = {
      jed: { value: this._options.jed || 0 },
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
      w_bar: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
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
    attributes.w_bar.set([ephem.get('w_bar', 'rad')], offset);
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

    if (!this._addedToScene && this._container) {
      // This happens lazily when the first data point is added in order to
      // prevent WebGL render warnings.
      this._container.addObject(this);
      this._addedToScene = true;
    }
  }

  update(jed) {
    this._uniforms.jed.value = jed;
  }

  get3jsObjects() {
    return [this._particleSystem];
  }

  getId() {
    return this._id;
  }
}

SpaceParticles.instanceCount = 0;
