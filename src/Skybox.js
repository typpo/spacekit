import { STAR_SHADER_VERTEX, STAR_SHADER_FRAGMENT } from './shaders';
import { getFullTextureUrl } from './util';
import { rad, hoursToDeg, sexagesimalToDecimalRa, sexagesimalToDecimalDec } from './Units';
import { sphericalToCartesian, equatorialToEcliptic_Cartesian } from './Coordinates';

const GALACTIC_CENTER_RA = sexagesimalToDecimalRa(17, 45, 40.04);
const GALACTIC_CENTER_DEC = sexagesimalToDecimalDec(-29, 0, 28.1);

/**
 * Maps spectral class to star color
 * @param temperature {Number} Star temperature in Kelvin
 * @return {Number} Color for star of given spectral class
 */
function getColorForStar(temp) {
  if (temp >= 30000) return 0x92B5FF;
  if (temp >= 10000) return 0xA2C0FF;
  if (temp >= 7500) return 0xd5e0ff;
  if (temp >= 6000) return 0xf9f5ff;
  if (temp >= 5200) return 0xffede3;
  if (temp >= 3700) return 0xffdab5;
  if (temp >= 2400) return 0xffb56c;
  return 0xffb56c;
}

function getSizeForStar(mag) {
  if (mag < 2.0) return 4;
  if (mag < 4.0) return 2;
  if (mag < 6.0) return 1;
  return 1;
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
    const geometry = new THREE.SphereBufferGeometry(1e10, 32, 32);

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
    fetch('../../src/data/bsc_processed.json').then(resp => resp.json()).then(library => {
      const n = library.length;

      const geometry = new THREE.BufferGeometry();

      const positions = new Float32Array(n * 3);
      const colors = new Float32Array(n * 3);
      const sizes = new Float32Array(n);

      geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.addAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.addAttribute('size', new THREE.BufferAttribute(sizes, 1));

      library.forEach((star, idx) => {
        const [ ra, dec, temp, mag ] = star;

        const raRad = rad(hoursToDeg(ra));
        const decRad = rad(dec);

        const cartesianSpherical = sphericalToCartesian(raRad, decRad, 1e9);
        const pos = equatorialToEcliptic_Cartesian(cartesianSpherical[0], cartesianSpherical[1], cartesianSpherical[2]);

        positions.set(pos, idx * 3);

        const color = new THREE.Color(getColorForStar(temp));
        colors.set(color.toArray(), idx * 3);

        if (idx < 1) {
          sizes[idx] = 50;
          colors.set([1, 0, 0], idx * 3);
        } else {
          sizes[idx] = getSizeForStar(mag);
        }
      });

      const material = new THREE.ShaderMaterial({
        uniforms: {},
        vertexShader: STAR_SHADER_VERTEX,
        fragmentShader: STAR_SHADER_FRAGMENT,
        transparent: true,
        vertexColors: THREE.VertexColors,
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
    return [/*this._mesh,*/ this._stars];
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
    // from https://svs.gsfc.nasa.gov/3895
    textureUrl: '{{assets}}/skybox/nasa_tycho.jpg',
  },
};
