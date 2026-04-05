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

    // Rotate the skybox from galactic coordinates to ecliptic coordinates.
    // These Euler angles (XYZ order) are derived from the IAU J2000 galactic
    // pole (RA=192.8595°, Dec=27.1284°) and galactic center (RA=266.405°,
    // Dec=-28.936°), transformed through equatorial-to-ecliptic conversion.
    // The scale.set(-1,1,1) below mirrors the X-axis so that the texture
    // reads correctly from inside the sphere; these angles account for that.
    sky.rotation.x = 0.5230;
    sky.rotation.y = -0.0966;
    sky.rotation.z = 1.5156;

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
