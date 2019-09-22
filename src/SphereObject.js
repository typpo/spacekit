import * as THREE from 'three';

import { RotatingObject } from './RotatingObject';
import { rescaleNumber } from './Scale';
import { auToKm, kmToAu } from './Units';
import {
  ATMOSPHERE_SHADER_VERTEX,
  ATMOSPHERE_SHADER_FRAGMENT,
} from './shaders';

/**
 * Simulates a planet or other object as a perfect sphere.
 */
export class SphereObject extends RotatingObject {
  /**
   * @param {String} options.textureUrl Path to basic texture (optional)
   * @param {String} options.bumpMapUrl Path to bump map (optional)
   * @param {String} options.specularMapUrl Path to specular map (optional)
   * @param {Number} options.color Hex color of the sphere
   * @param {Number} options.radius Radius of sphere. Defaults to 1
   * @param {Object} options.levelsOfDetail List of {threshold: x, segments:
   * y}, where `threshold` is radii distance and `segments` is the number
   * number of sphere faces to render.
   * @param {Object} options.atmosphere Atmosphere options
   * @param {Object} options.atmosphere.enable Show atmosphere
   * @param {Number} options.atmosphere.size Atmosphere size in km
   * @param {Object} options.debug Debug options
   * @param {boolean} options.debug.showAxes Show axes
   * @see SpaceObject
   * @see RotatingObject
   */
  constructor(id, options, contextOrSimulation) {
    super(id, options, contextOrSimulation, false /* autoInit */);

    this.init();
  }

  init() {
    let map;
    if (this._options.textureUrl) {
      map = new THREE.TextureLoader().load(this._options.textureUrl);
      map.minFilter = THREE.LinearFilter;
    }

    // TODO(ian): Clouds and rings

    const detailedObj = new THREE.LOD();
    const levelsOfDetail = this._options.levelsOfDetail || [
      { radii: 0, segments: 64 },
    ];
    const radius = rescaleNumber(this._options.radius || 1);

    for (let i = 0; i < levelsOfDetail.length; i += 1) {
      const level = levelsOfDetail[i];
      const sphereGeometry = new THREE.SphereGeometry(
        radius,
        level.segments,
        level.segments,
      );
      const mesh = new THREE.Mesh(
        sphereGeometry,
        // new THREE.MeshPhongMaterial({
        new THREE.MeshBasicMaterial({
          map,
          color: this._options.color || 0xbbbbbb,
          // specular: 0x111111,
          // shininess: 1,
          // shininess: 0,
          // bumpMap:     map,
          // bumpScale:   0.02,
          // specularMap: map,
          // specular:    new THREE.Color('grey')
          // bumpMap:     THREE.ImageUtils.loadTexture('images/elev_bump_4k.jpg'),
          // bumpScale:   0.005,
        }),
      );

      // Change the coordinate system to have Z-axis pointed up.
      mesh.rotation.x = Math.PI / 2;

      // Show this number of segments at distance >= radii * level.radii.
      detailedObj.addLevel(mesh, radius * level.radii);
    }

    // Add to the parent base object.
    this._obj.add(detailedObj);

    if (this._options.atmosphere && this._options.atmosphere.enable) {
      this._obj.add(this.renderAtmosphere());
    }

    this._renderMethod = 'SPHERE';

    if (this._simulation) {
      // Add it all to visualization.
      this._simulation.addObject(this, false /* noUpdate */);
    }

    super.init();
  }

  /**
   * @private
   */
  renderAtmosphere() {
    const radius = rescaleNumber(this._options.radius || 1);

    const sizeAu = kmToAu(
      this._options.atmosphere.size || auToKm(radius) * 0.15,
    );

    const sphereGeometry = new THREE.SphereGeometry(
      radius + sizeAu + radius * 0.1,
      32,
      32,
    );
    const mesh = new THREE.Mesh(
      sphereGeometry,
      // new THREE.MeshPhongMaterial({
      new THREE.ShaderMaterial({
        uniforms: {
          c: { value: 0.5 },
          p: { value: 4 },
        },
        vertexShader: ATMOSPHERE_SHADER_VERTEX,
        fragmentShader: ATMOSPHERE_SHADER_FRAGMENT,
        side: THREE.BackSide,
        transparent: true,
      }),
    );

    return mesh;
  }

  /**
   * Update the location of this object at a given time. Note that this is
   * computed on CPU.
   */
  update(jd) {
    const newpos = this.getPosition(jd);
    this._obj.position.set(newpos[0], newpos[1], newpos[2]);
    super.update(jd);
  }
}
