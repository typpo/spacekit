import * as THREE from 'three';

import { getGalacticToEclipticTransform } from './CoordinateTransforms';
import Units from './Units';

import type {
  Simulation,
  SimulationContext,
  SimulationObject,
} from './Simulation';
import { getFullTextureUrl } from './util';

export interface SkyboxOptions {
  textureUrl: string;
  basePath?: string;
  /**
   * Native seam offset of the source equirectangular map, in degrees.
   * Use 180 when the image is centered on longitude 0 instead of placing
   * longitude 0 at the left edge.
   */
  longitudeOffsetDeg?: number;
  /**
   * Astronomical all-sky maps commonly increase longitude toward the left.
   * Set this when the source image uses that handedness.
   */
  mirrorLongitude?: boolean;
  opacity?: number;
}

function getAstronomicalProjectionTransform(): THREE.Matrix4 {
  // THREE sphere geometry uses +Y as the pole and centers the equirectangular
  // texture on +X. Astronomical all-sky maps use north at +Z, so rotate from
  // THREE's sphere/UV convention into the map convention first.
  return new THREE.Matrix4()
    .makeRotationX(Math.PI / 2)
    .multiply(new THREE.Matrix4().makeRotationY(Math.PI));
}

export function getSkyboxOrientationTransform(
  options: Pick<SkyboxOptions, 'longitudeOffsetDeg' | 'mirrorLongitude'>,
  obliquity?: number,
): THREE.Matrix4 {
  const nativeTextureAdjustment = new THREE.Matrix4();

  if (options.longitudeOffsetDeg) {
    nativeTextureAdjustment.multiply(
      new THREE.Matrix4().makeRotationZ(Units.rad(options.longitudeOffsetDeg)),
    );
  }

  if (options.mirrorLongitude) {
    nativeTextureAdjustment.multiply(new THREE.Matrix4().makeScale(1, -1, 1));
  }

  // Applied right-to-left: THREE sphere convention -> source image native
  // frame -> galactic sky frame -> simulation ecliptic frame.
  return getGalacticToEclipticTransform(obliquity)
    .multiply(nativeTextureAdjustment)
    .multiply(getAstronomicalProjectionTransform());
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
      transparent: (this.options.opacity || 1) < 1,
      opacity: this.options.opacity || 1,
    });

    const sky = new THREE.Mesh(geometry, material);
    sky.applyMatrix4(getSkyboxOrientationTransform(this.options));

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
export const SkyboxPresets: Record<string, SkyboxOptions> = {
  ESO_GIGAGALAXY: {
    // Source: ESO eso0932a, a galaxy-centric Milky Way panorama with the
    // galactic plane horizontal and the bulge centered in the image.
    textureUrl: '{{assets}}/skybox/eso_milkyway.jpg',
    longitudeOffsetDeg: 180,
    mirrorLongitude: true,
  },
  ESO_LITE: {
    // Derived from the same ESO galaxy-centric panorama convention as
    // ESO_GIGAGALAXY.
    textureUrl: '{{assets}}/skybox/eso_lite.png',
    longitudeOffsetDeg: 180,
    mirrorLongitude: true,
  },
  NASA_TYCHO: {
    // Source: NASA SVS 3895 /vis/.../starmap_g8k.jpg, the galactic-coordinate
    // Deep Star Maps product. The bundled nasa_tycho.jpg matches that file
    // byte-for-byte.
    textureUrl: '{{assets}}/skybox/nasa_tycho.jpg',
    longitudeOffsetDeg: 180,
    mirrorLongitude: true,
  },
};
