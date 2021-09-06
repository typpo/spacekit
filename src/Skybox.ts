import * as THREE from 'three';

import type {
  Simulation,
  SimulationContext,
  SimulationObject,
} from './Simulation';
import { getFullTextureUrl } from './util';

interface SkyboxOptions {
  textureUrl: string;
  basePath: string;
}

/**
 * A class that adds a skybox (technically a skysphere) to a visualization.
 */
export class Skybox implements SimulationObject {
  private simulation: Simulation;

  private context: SimulationContext;

  private id: string;

  private options: SkyboxOptions;

  private mesh?: THREE.Mesh;

  /**
   * @param {Object} options Options
   * @param {String} options.textureUrl Texture to use
   * @param {String} options.basePath Base path to simulation supporting files
   * @param {Simulation} simulation Simulation object
   */
  constructor(options: SkyboxOptions, simulation: Simulation) {
    // TODO(ian): Support for actual box instead of sphere...
    this.options = options;
    this.id = `__skybox_${new Date().getTime()}`;

    // User passed in Simulation
    this.simulation = simulation;
    this.context = simulation.getContext();

    this.mesh = undefined;

    this.init();
  }

  /**
   * @private
   */
  private init() {
    const geometry = new THREE.SphereBufferGeometry(1e10, 32, 32);

    const fullTextureUrl = getFullTextureUrl(
      this.options.textureUrl,
      this.context.options.basePath,
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

    this.mesh = sky;

    if (this.simulation) {
      this.simulation.addObject(this, true /* noUpdate */);
    }
  }

  /**
   * A list of THREE.js objects that are used to compose the skybox.
   * @return {THREE.Object3D[]} Skybox mesh
   */
  get3jsObjects(): THREE.Object3D[] {
    if (this.mesh) {
      return [this.mesh];
    }
    return [];
  }

  /**
   * Get the unique ID of this object.
   * @return {String} id
   */
  getId(): string {
    return this.id;
  }

  update() {
    // Skyboxes don't update
  }
}

/**
 * Preset skybox objects that you can use to add a skybox to your
 * visualization.
 * @example
 * ```
 * const skybox = viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);
 * ```
 */
export const SkyboxPresets: Record<string, { textureUrl: string }> = {
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
