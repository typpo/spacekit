import { STAR_SHADER_VERTEX, STAR_SHADER_FRAGMENT } from './shaders';
import { getFullTextureUrl } from './util';
import { rad, hoursToDeg } from './Units';
import { sphericalToCartesian, equatorialToEcliptic_Cartesian } from './Coordinates';

/**
 * Maps spectral class to star color
 * @param spectralClass {String} Star temperature classification
 * @return {Number} Color for star of given spectral class
 */
function getColorForStar(spectralClass) {
  switch (spectralClass) {
    case 'O':
      return 0xc8c8ff;
    case 'B':
      return 0xe3e3ff;
    case 'A':
      return 0xffffff;
    case 'F':
      return 0xffffe3;
    case 'G':
      return 0xffffc8;
    case 'K':
      return 0xffe3c8;
    case 'M':
      return 0xffc8c8;
  }
  return 0xffffff;
}

/**
 * A class that adds a skybox (technically a skysphere) to a visualization.
 */
export class Skybox {
  /**
   * @param {Object} options Options
   * @param {String} options.textureUrl Texture to use
   * @param {String} options.assetPath Base path to assets
   * @param {Object} contextOrSimulation Simulation context or simulation
   * object
   */
  constructor(options, contextOrSimulation) {
    // TODO(ian): Support for actual box instead of sphere...
    this._options = options;
    this._id = `__skybox_${new Date().getTime()}`;

    // if (contextOrSimulation instanceOf Simulation) {
    if (true) {
      // User passed in Simulation
      this._simulation = contextOrSimulation;
      this._context = contextOrSimulation.getContext();
    } else {
      // User just passed in options
      this._simulation = null;
      this._context = contextOrSimulation;
    }

    this._mesh = undefined;
    this._stars = undefined;

    this.init();
  }

  /**
   * @private
   */
  init() {
    const geometry = new THREE.SphereBufferGeometry(99000, 32, 32);

    const fullTextureUrl = getFullTextureUrl(this._options.textureUrl,
      this._context.options.assetPath);
    const texture = new THREE.TextureLoader().load(fullTextureUrl);

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.BackSide,
    });

    const sky = new THREE.Mesh(geometry, material);

    // See this thread on orientation of milky way:
    // https://www.physicsforums.com/threads/orientation-of-the-earth-sun-and-solar-system-in-the-milky-way.888643/
    sky.rotation.x = 0;
    sky.rotation.y = -1 / 12 * Math.PI;
    sky.rotation.z = 8 / 5 * Math.PI;

    // We're on the inside of the skybox, so invert it to correct it.
    sky.scale.set(-1, 1, 1);

    this._mesh = sky;

    this.loadStars();
  }

  loadStars() {
    fetch('../../src/data/bsc_short.json').then(resp => resp.json()).then((result) => {
      const library = result.BSC;

      const n = library.length;

      const geometry = new THREE.BufferGeometry();

      const positions = new Float32Array(n * 3);
      const colors = new Float32Array(n * 3);
      const sizes = new Float32Array(n);

      geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.addAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.addAttribute('size', new THREE.BufferAttribute(sizes, 1));

      library.forEach((star, idx) => {
        const spectralClass = star.Sp.slice(0, 1);

        const raRad = rad(hoursToDeg(star.RAh));
        const decRad = rad(star.DEd);

        const cartesianSpherical = sphericalToCartesian(raRad, decRad, 98000);
        const pos = equatorialToEcliptic_Cartesian(cartesianSpherical[0], cartesianSpherical[1], cartesianSpherical[2]);

        positions[idx] = pos[0];
        positions[idx + 1] = pos[1];
        positions[idx + 2] = pos[2];

        const color = new THREE.Color(getColorForStar(spectralClass));
        colors[idx] = color.r;
        colors[idx + 1] = color.g;
        colors[idx + 2] = color.b;

        sizes[idx] = Math.random() * 5;
      });

      const material = new THREE.ShaderMaterial({
        uniforms: {},
        vertexShader: STAR_SHADER_VERTEX,
        fragmentShader: STAR_SHADER_FRAGMENT,
        transparent: true,
      });

      this._stars = new THREE.Points(geometry, material);

      if (this._simulation) {
        this._simulation.addObject(this, true /* noUpdate */);
      }
    });
  }

  /**
   * A list of THREE.js objects that are used to compose the skybox.
   * @return {THREE.Object} Skybox mesh
   */
  get3jsObjects() {
    return [this._mesh, this._stars];
  }

  /**
   * Get the unique ID of this object.
   * @return {String} id
   */
  getId() {
    return this._id;
  }
}

/**
 * Preset skybox objects that you can use to add a skybox to your
 * visualization.
 * @example
 * const skybox = viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);
 */
export const SkyboxPresets = {
  ESO_GIGAGALAXY: {
    textureUrl: '{{assets}}/skybox/eso_milkyway.jpg',
  },
  ESO_LITE: {
    textureUrl: '{{assets}}/skybox/eso_lite.png',
  },
  NASA_TYCHO: {
    textureUrl: '{{assets}}/skybox/nasa_tycho.jpg',
  },
};
