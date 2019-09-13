import * as THREE from 'three';

import { RotatingObject } from './RotatingObject';
import { rescaleNumber, getScaleFactor } from './Scale';

// Number of sphere segments for each level of detail, from most detailed to
// least.  In general, it is sufficient to just have 2 levels: high-detail and
// low-detail.
const NUM_SPHERE_SEGMENTS = [64, 8, 4];

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
   * @param {Object} options.debug Debug options
   * @param {boolean} options.debug.showAxes Show axes
   * @see SpaceObject
   * @see RotatingObject
   */
  constructor(id, options, contextOrSimulation) {
    super(id, options, contextOrSimulation, false /* autoInit */);

    console.log('asd1');
    this.initSphere();
    console.log('asd2', this._id);
    super.init();
    console.log('asd3');
  }

  initSphere() {
    let map;
    if (this._options.textureUrl) {
      map = new THREE.TextureLoader().load(this._options.textureUrl);
      map.minFilter = THREE.LinearFilter;
    }

    // TODO(ian): Clouds and rings

    const levelOfDetail = new THREE.LOD();
    const radius = rescaleNumber(this._options.radius || 1);
    for (let i = 0; i < NUM_SPHERE_SEGMENTS.length; i++) {
      const sphereGeometry = new THREE.SphereGeometry(
        radius,
        NUM_SPHERE_SEGMENTS[i],
        NUM_SPHERE_SEGMENTS[i],
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

      // Show this number of segments at distances >= threshold.
      const threshold = i === 0 ? 0 : radius * Math.pow(getScaleFactor(), i);
      //console.info(NUM_SPHERE_SEGMENTS[i], 'sphere segments are shown at', threshold);
      levelOfDetail.addLevel(mesh, threshold);
    }

    // Add levelOfDetail object to the parent base object.
    this._obj.add(levelOfDetail);

    if (this._simulation) {
      // Add it all to visualization.
      this._simulation.addObject(this, false /* noUpdate */);
    }
  }
}
