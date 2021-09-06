import * as THREE from 'three';

import Coordinates from './Coordinates';
import Units from './Units';
import { STAR_SHADER_VERTEX, STAR_SHADER_FRAGMENT } from './shaders';
import { getFullUrl, getThreeJsTexture } from './util';

import type { Simulation, SimulationContext } from './Simulation';

interface StarOptions {
  minSize?: number;
}

const GALACTIC_CENTER_RA = Units.sexagesimalToDecimalRa(17, 45, 40.04);
const GALACTIC_CENTER_DEC = Units.sexagesimalToDecimalDec(-29, 0, 28.1);

/**
 * Maps spectral class to star color
 * @param temp {Number} Star temperature in Kelvin
 * @return {Number} Color for star of given spectral class
 */
function getColorForStar(temp: number): number {
  if (temp >= 30000) return 0x92b5ff;
  if (temp >= 10000) return 0xa2c0ff;
  if (temp >= 7500) return 0xd5e0ff;
  if (temp >= 6000) return 0xf9f5ff;
  if (temp >= 5200) return 0xffede3;
  if (temp >= 3700) return 0xffdab5;
  if (temp >= 2400) return 0xffb56c;
  return 0xffb56c;
}

/**
 * Returns the pixel size of a star.
 * @param mag {Number} Absolute magnitude of star
 * @param minSize {Number} Pixel size of the smallest star
 * @return {Number} Pixel size of star.
 */
function getSizeForStar(mag: number, minSize: number): number {
  if (mag < 2.0) return minSize * 4;
  if (mag < 4.0) return minSize * 2;
  if (mag < 6.0) return minSize;
  return 1;
}

/**
 * Builds a starry background that is accurate for the Earth's position in
 * space.
 */
export class Stars {
  private _id: string;

  private _options: StarOptions;

  private _simulation: Simulation;

  private _context: SimulationContext;

  private _stars?: THREE.Points;

  /**
   * @param {Number} options.minSize The size of the smallest star.
   * Defaults to 0.75
   */
  constructor(options: StarOptions, simulation) {
    this._options = options;
    this._id = `__stars_${new Date().getTime()}`;

    this._simulation = simulation;
    this._context = simulation.getContext();

    this._stars = undefined;

    this.init();
  }

  init() {
    const dataUrl = getFullUrl(
      '{{data}}/processed/bsc.json',
      this._context.options.basePath,
    );

    fetch(dataUrl)
      .then((resp) => resp.json())
      .then((library) => {
        const n = library.length;

        const geometry = new THREE.BufferGeometry();

        const positions = new Float32Array(n * 3);
        const colors = new Float32Array(n * 3);
        const sizes = new Float32Array(n);

        geometry.setAttribute(
          'position',
          new THREE.BufferAttribute(positions, 3),
        );
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        library.forEach((star, idx) => {
          const [ra, dec, temp, mag] = star;

          const raRad = Units.rad(Units.hoursToDeg(ra));
          const decRad = Units.rad(dec);

          const cartesianSpherical = Coordinates.sphericalToCartesian(
            raRad,
            decRad,
            1e9,
          );
          const pos = Coordinates.equatorialToEcliptic_Cartesian(
            cartesianSpherical[0],
            cartesianSpherical[1],
            cartesianSpherical[2],
            Coordinates.getObliquity(), // defaults to J2000 value
          );

          positions.set(pos, idx * 3);

          const color = new THREE.Color(getColorForStar(temp));
          colors.set(color.toArray(), idx * 3);

          sizes[idx] = getSizeForStar(
            mag,
            this._options.minSize || 3.0 /* minSize */,
          );
        });

        const material = new THREE.ShaderMaterial({
          uniforms: {},
          vertexColors: THREE.VertexColors,
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
   * A list of THREE.js objects that are used to compose this object
   * @return {THREE.Object3D[]} Star objects
   */
  get3jsObjects(): THREE.Object3D[] {
    return [this._stars];
  }

  /**
   * Get the unique ID of this object.
   * @return {String} id
   */
  getId(): string {
    return this._id;
  }
}
