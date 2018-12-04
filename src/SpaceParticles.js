const MAX_PARTICLE_COUNT = 1024;

class SpaceParticles {
  constructor(options, context) {
    this._options = options;
    this._context = context;

    this._attributes = null;
    this._uniforms = null;
    this._particleSystem = null;

    this.createParticleSystem();

    // TODO(ian): Add to ctx
  }

  createParticleSystem() {
    const fullTextureUrl = getFullTextureUrl(this._options.textureUrl,
                                             this._context.options.assetPath);
    this._uniforms = {
      jed: { type: 'f', value: this._options.jed || 0 },
      defaultMap: { type: 't', value: fullTextureUrl },
    };

    this._attributes = {
      size: new BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT)),
      color: new BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT)),

      a: new BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT)),
      e: new BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT)),
      i: new BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT)),
      om: new BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT)),
      ma: new BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT)),
      n: new BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT)),
      w: new BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT)),
      epoch: new BufferAttribute(new Float32Array(MAX_PARTICLE_COUNT)),
    };

    const geometry = new THREE.BufferGeometry();
    Object.keys(this._attributes).forEach(attributeName => {
      const attribute = this._attributes[attributeName];
      attribute.setDynamic(true);
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

    this._particleSystem = new THREE.ParticleSystem(geometry, shader);
  }

  addParticle(ephem, options={}) {
    const attributes = this._attributes;

    attributes.size.array[0] = options.size || 50;
    attributes.color.array[0] = options.color || 0xffffff;

    attributes.a.array[0] = ephem.get('a');
    attributes.e.array[0] = ephem.get('e');
    attributes.i.array[0] = ephem.get('i', 'deg');
    attributes.om.array[0] = ephem.get('om', 'deg');
    attributes.ma.array[0] = ephem.get('ma', 'deg');
    attributes.n.array[0] = ephem.get('n', 'deg');
    attributes.w.array[0] = ephem.get('w', 'deg');
    attributes.epoch.array[0] = ephem.get('epoch');
  }

  update(jed) {

  }

  get3jsObjects() {

  }
}
