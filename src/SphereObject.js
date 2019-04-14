import { RotatingObject } from './RotatingObject';

const NUM_SPHERE_SEGMENTS = 32;

/**
 * Simulates a planet or other object as a perfect sphere.
 */
export class SphereObject extends RotatingObject {
  /**
   * @param {String} textureUrl Path to basic texture (optional)
   * @param {String} bumpMapUrl Path to bump map (optional)
   * @param {String} specularMapUrl Path to specular map (optional)
   * @param {Number} color Hex color of the sphere
   * @param {Number} options.radius Radius of sphere. Defaults to 1
   * @param {Object} options.debug Debug options
   * @param {boolean} options.debug.showAxes Show axes
   * @see SpaceObject
   * @see RotatingObject
   */
  constructor(id, options, contextOrSimulation) {
    super(id, options, contextOrSimulation, false /* autoInit */);

    this.initSphere();
  }

  initSphere() {
    let map;
    if (this._options.textureUrl) {
      map = THREE.ImageUtils.loadTexture(img);
      map.minFilter = THREE.LinearFilter;
    }

    const sphereGeometry = new THREE.SphereGeometry(this._options.radius || 1, NUM_SPHERE_SEGMENTS, NUM_SPHERE_SEGMENTS);
    const mesh = new THREE.Mesh(
      sphereGeometry,
      // new THREE.MeshPhongMaterial({
      new THREE.MeshBasicMaterial({
        // map:         map,
        color: 0xbbbbbb,
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
    this._obj.add(mesh);

    if (this._simulation) {
      // Add it all to visualization.
      this._simulation.addObject(this, false /* noUpdate */);
    }

    this._initialized = true;
  }
}
