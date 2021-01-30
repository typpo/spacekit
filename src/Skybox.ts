import * as THREE from 'three';

import { getFullTextureUrl } from './util';

/**
 * A class that adds a skybox (technically a skysphere) to a visualization.
 */
export class Skybox {
  /**
   * @param {Object} options Options
   * @param {String} options.textureUrl Texture to use
   * @param {String} options.basePath Base path to simulation supporting files
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

    this.init();
  }

  /**
   * @private
   */
  init() {
    const geometry = new THREE.SphereBufferGeometry(1e10, 32, 32);

    const fullTextureUrl = getFullTextureUrl(
      this._options.textureUrl,
      this._context.options.basePath,
    );
    const texture = new THREE.TextureLoader().load(fullTextureUrl);

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.BackSide,
    });

    const sky = new THREE.Mesh(geometry, material);

    // See this thread on orientation of milky way:
    // https://www.physicsforums.com/threads/orientation-of-the-earth-sun-and-solar-system-in-the-milky-way.888643/
    sky.rotation.x = 0;
    sky.rotation.y = (-1 / 12) * Math.PI;
    sky.rotation.z = (8 / 5) * Math.PI;

    // We're on the inside of the skybox, so invert it to correct it.
    sky.scale.set(-1, 1, 1);

    this._mesh = sky;

    if (this._simulation) {
      this._simulation.addObject(this, true /* noUpdate */);
    }
  }

  /**
   * A list of THREE.js objects that are used to compose the skybox.
   * @return {THREE.Object} Skybox mesh
   */
  get3jsObjects() {
    return [this._mesh];
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
