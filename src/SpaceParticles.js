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

    this._uniforms = null;
    this._geometry = null;
    this._shaderMaterial = null;
    this._particleSystem = null;

    this.init();
  }

  init() {
    this.fuck();
    //this.createParticleSystem();
  }

  createParticleSystem() {
    return;
    const fullTextureUrl = getFullTextureUrl(this._options.textureUrl,
                                             this._context.options.assetPath);
    const defaultMapTexture = new THREE.TextureLoader().load(fullTextureUrl);

    this._uniforms = {
      jed: { value: this._options.jed || 0 },
      texture: { value: defaultMapTexture },
    };

    this._geometry = new THREE.BufferGeometry();
    this._geometry.addAttribute('size',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1));
    this._geometry.addAttribute('fuzzColor',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT * 3), 3));

    this._geometry.addAttribute('a',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1));
    this._geometry.addAttribute('e',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1));
    this._geometry.addAttribute('i',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1));
    this._geometry.addAttribute('om',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1));
    this._geometry.addAttribute('ma',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1));
    this._geometry.addAttribute('n',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1));
    this._geometry.addAttribute('w',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1));
    this._geometry.addAttribute('epoch',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1));

    const shader = new THREE.ShaderMaterial({
      uniforms: this._uniforms,
      vertexShader: ORBIT_SHADER_VERTEX,
      fragmentShader: ORBIT_SHADER_FRAGMENT,

      depthTest: false,
      //vertexColors: THREE.VertexColors,
      transparent: true,
      side: THREE.DoubleSide,
    });
    /*
    shader.defaultAttributeValues = {
      size: [1],
      color: [1, 1, 1],

      a: [1],
      e: [1],
      i: [1],
      om: [1],
      ma: [1],
      n: [1],
      w: [1],
      epoch: [1],
    };
   */

    this._shaderMaterial = shader;
  }

  addParticle(ephem, options={}) {
    return;
    //const attributes = this._geometry.attributes;

    this._geometry.getAttribute('size').set([options.size || 50]);
    const color = new THREE.Color(options.color || 0xff0000)
    this._geometry.getAttribute('fuzzColor').set([color.r, color.g, color.b]);

    this._geometry.getAttribute('a').set([ephem.get('a')]);
    this._geometry.getAttribute('e').set([ephem.get('e')]);
    this._geometry.getAttribute('i').set([ephem.get('i', 'rad')]);
    this._geometry.getAttribute('om').set([ephem.get('om', 'rad')]);
    this._geometry.getAttribute('ma').set([ephem.get('ma', 'rad')]);
    this._geometry.getAttribute('n').set([ephem.get('n', 'rad')]);
    this._geometry.getAttribute('w').set([ephem.get('w', 'rad')]);
    this._geometry.getAttribute('epoch').set([ephem.get('epoch')]);

    /*
    for (let attributeKey in attributes) {
      if (attributes.hasOwnProperty(attributeKey)) {
        // attribute.setDynamic(true);
        attributes[attributeKey].needsUpdate = true;
      }
    }
   */

    //this._shaderMaterial.needsUpdate = true;

    if (!this._addedToScene && this._container) {
      // This happens lazily when the first data point is added in order to
      // prevent WebGL render warnings.
      console.log(this._shaderMaterial)
      this._particleSystem = new THREE.Points(this._geometry, this._shaderMaterial);
      this._container.addObject(this);
      this._addedToScene = true;
    }
  }

  fuck() {
    const fullTextureUrl = getFullTextureUrl(this._options.textureUrl,
                                             this._context.options.assetPath);
    const defaultMapTexture = new THREE.TextureLoader().load(fullTextureUrl);

    this._uniforms = {
      jed: { value: this._options.jed || 0 },
      texture: { value: defaultMapTexture },
    };

    const geometry = new THREE.BufferGeometry();
    geometry.addAttribute('size',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1));
    geometry.addAttribute('fuzzColor',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT * 3), 3));

    geometry.addAttribute('a',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1));
    geometry.addAttribute('e',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1));
    geometry.addAttribute('i',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1));
    geometry.addAttribute('om',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1));
    geometry.addAttribute('ma',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1));
    geometry.addAttribute('n',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1));
    geometry.addAttribute('w',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1));
    geometry.addAttribute('epoch',
          new THREE.BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT), 1));

    const shader = new THREE.ShaderMaterial({
      uniforms: this._uniforms,
      vertexShader: ORBIT_SHADER_VERTEX,
      fragmentShader: ORBIT_SHADER_FRAGMENT,

      depthTest: false,
      transparent: true,
      side: THREE.DoubleSide,
    });

    geometry.getAttribute('size').set([50]);
    const color = new THREE.Color(0xff0000)
    geometry.getAttribute('fuzzColor').set([color.r, color.g, color.b]);

    const ephem = SpaceObjectPresets.JUPITER.ephem;
    geometry.getAttribute('a').set([ephem.get('a')]);
    geometry.getAttribute('e').set([ephem.get('e')]);
    geometry.getAttribute('i').set([ephem.get('i', 'rad')]);
    geometry.getAttribute('om').set([ephem.get('om', 'rad')]);
    geometry.getAttribute('ma').set([ephem.get('ma', 'rad')]);
    geometry.getAttribute('n').set([ephem.get('n', 'rad')]);
    geometry.getAttribute('w').set([ephem.get('w', 'rad')]);
    geometry.getAttribute('epoch').set([ephem.get('epoch')]);

    this._particleSystem = new THREE.Points(geometry, shader);

    this._container._scene.add(this._particleSystem);
  }

  update(jed) {
    this._uniforms.jed.value = jed;
    this._uniforms.jed.needsUpdate = true;
  }

  get3jsObjects() {
    return [this._particleSystem];
  }

  getId() {
    return this._id;
  }
}

SpaceParticles.instanceCount = 0;
