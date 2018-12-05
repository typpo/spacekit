const MAX_PARTICLE_COUNT = 1;

class SpaceParticles {
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

    this._attributes = null;
    this._uniforms = null;
    this._shaderMaterial = null;
    this._particleSystem = null;

    this.init();
  }

  init() {
    this.createParticleSystem();
  }

  createParticleSystem() {
    const fullTextureUrl = getFullTextureUrl(this._options.textureUrl,
                                             this._context.options.assetPath);
    const defaultMapTexture = new THREE.TextureLoader().load(fullTextureUrl);

    this._uniforms = {
      jed: { value: this._options.jed || 0 },
      defaultMap: { value: defaultMapTexture },
    };

    this._attributes = {
      size: new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1),
      color: new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT * 3), 3),

      a: new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1),
      e: new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1),
      i: new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1),
      om: new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1),
      ma: new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1),
      n: new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1),
      w: new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1),
      epoch: new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1),
    };
    window.attrs = this._attributes;

    const geometry = new THREE.BufferGeometry();
    Object.keys(this._attributes).forEach(attributeName => {
      const attribute = this._attributes[attributeName];
      attribute.setDynamic(true);
      //attribute.array[0] = 0;
      geometry.addAttribute(attributeName, attribute);
    });

    const shader = new THREE.ShaderMaterial({
      uniforms: this._uniforms,
      vertexShader: ORBIT_SHADER_VERTEX,
      fragmentShader: ORBIT_SHADER_FRAGMENT,
    });
    shader.depthTest = false;
    shader.vertexColor = true;
    shader.transparent = true;
    shader.defaultAttributeValues = {
      size: [1],
      color: [1],

      a: [1],
      e: [1],
      i: [1],
      om: [1],
      ma: [1],
      n: [1],
      w: [1],
      epoch: [1],
    };

    this._shaderMaterial = shader;
    this._particleSystem = new THREE.Points(geometry, shader);
  }

  addParticle(ephem, options={}) {
    const attributes = this._attributes;

    attributes.size.set([options.size || 50]);
    const color = new THREE.Color(options.color || 0xff0000)
    attributes.color.set([color.r, color.g, color.b]);

    attributes.a.set([ephem.get('a')]);
    attributes.e.set([ephem.get('e')]);
    attributes.i.set([ephem.get('i', 'rad')]);
    attributes.om.set([ephem.get('om', 'rad')]);
    attributes.ma.set([ephem.get('ma', 'rad')]);
    attributes.n.set([ephem.get('n', 'rad')]);
    attributes.w.set([ephem.get('w', 'rad')]);
    attributes.epoch.set([ephem.get('epoch')]);
    console.log(attributes)

    for (let attributeKey in attributes) {
      if (attributes.hasOwnProperty(attributeKey)) {
        const attribute = attributes[attributeKey];
        attribute.needsUpdate = true;
      }
    }

    this._shaderMaterial.needsUpdate = true;

    if (!this._addedToScene && this._container) {
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
