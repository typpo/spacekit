
class Skybox {
  constructor(options, contextOrContainer) {
    // TODO(ian): Support for actual box instead of sphere...
    this._options = options;
    this._id = `__skybox_${new Date().getTime()}`;

    // if (contextOrContainer instanceOf Container) {
    if (true) {
      // User passed in Container
      this._container = contextOrContainer;
      this._context = contextOrContainer.getContext();
    } else {
      // User just passed in options
      this._container = null;
      this._context = contextOrContainer;
    }

    this._mesh = null;

    this.init();
  }

  init() {
    const geometry = new THREE.SphereBufferGeometry(4000, 64, 64);

    const fullTextureUrl = getFullTextureUrl(this._options.textureUrl,
                                             this._context.options.assetPath)
    const texture = new THREE.TextureLoader().load(fullTextureUrl);

    const uniforms = {
      texture: {
        type: 't', value: texture,
      },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
				varying vec2 vUV;
				varying float vDensity;
				varying float vDiff;

				void main() {
					vUV = uv;
					vec4 pos = vec4(position, 1.0);
					gl_Position = projectionMatrix * modelViewMatrix * pos;
				}
			`,
      fragmentShader: `
				uniform sampler2D texture;
				varying vec2 vUV;

				void main() {
					vec4 sample = texture2D(texture, vUV);
					gl_FragColor = vec4(sample.xyz, sample.w);
				}
			`,
    });

    const sky = new THREE.Mesh(geometry, material);

    // See this thread on orientation of milky way:
    // https://www.physicsforums.com/threads/orientation-of-the-earth-sun-and-solar-system-in-the-milky-way.888643/
    sky.rotation.x = 0;
    sky.rotation.y = -1 / 12 * Math.PI;
    sky.rotation.z = 8 / 5 * Math.PI;

    // We're on the inside of the skybox, so invert it to correct it.
    sky.scale.set(-1, 1, 1);

    window.sky = sky;

    sky.material.side = THREE.BackSide;
    this._mesh = sky;

    if (this._container) {
      this._container.addObject(this, true /* noUpdate */);
    }
  }

  get3jsObjects() {
    return [this._mesh];
  }

  getId() {
    return this._id;
  }
}

const SkyboxPresets = {
  ESO_GIGAGALAXY: {
    textureUrl: '{{assets}}/skybox/eso_milkyway.jpg',
  },
  NASA_TYCHO: {
    textureUrl: '{{assets}}/skybox/nasa_tycho.jpg',
  },
};
