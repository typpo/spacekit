import { SpaceObject } from './SpaceObject';
import { rad } from './Units';

function getAxes() {
  return [
    getAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(3, 0, 0), 0xff0000),
    getAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 3, 0), 0x00ff00),
    getAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 3), 0x0000ff),
  ];
}

function getAxis(src, dst, color) {
  const geom = new THREE.Geometry();
  const mat = new THREE.LineBasicMaterial({ linewidth: 3, color });

  geom.vertices.push(src.clone());
  geom.vertices.push(dst.clone());

  const axis = new THREE.Line(geom, mat, THREE.LineSegments);
  axis.computeLineDistances();
  return axis;
}

export class RotatingObject extends SpaceObject {
  /*
   * @param {boolean} options.rotation.enable Rotate the object
   * @param {Number} options.rotation.speed Factor that determines speed of rotation
   * @see SpaceObject
   */
  constructor(id, options, contextOrSimulation) {
    super(id, options, contextOrSimulation, false /* autoInit */);

    this._options.rotation = this._options.rotation || {};

    // The THREE.js object
    this._obj = new THREE.Object3D();

    // Offset of axis angle
    this._axisRotationAngleOffset = 0;
    this._axisOfRotation = undefined;

    // Keep track of materials that comprise this object.
    this._materials = [];

    this.init();
  }

  init() {
    this.initRotation();

    if (this._options.debug && this._options.debug.showAxes) {
      getAxes().forEach(axis => this._obj.add(axis));

      const gridHelper = new THREE.GridHelper(3, 3, 0xff0000, 0xffeeee);
      gridHelper.geometry.rotateX(Math.PI / 2);
      this._obj.add(gridHelper);
    }
  }

  initRotation() {
    // Formula
    // https://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_description

    // Testing this asteroid:
    // http://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_asteroid_detail&asteroid_id=1504
    // Model 2691
    const PI = Math.PI;

    // Cacus
    // http://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_asteroid_detail&asteroid_id=1046
    // http://astro.troja.mff.cuni.cz/projects/asteroids3D/php.php?script=db_sky_projection&model_id=1863&jd=2443568.0

    // Latitude
    const lambda = rad(251);

    // Longitude
    const beta = rad(-63);

    // Other
    const P = 3.755067;
    const YORP = 1.9e-8;
    const JD = 2443568.0;
    const JD0 = 2443568.0;
    const phi0 = rad(0);

    // Asteroid rotation
    // this._obj.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), lambda);
    // this._obj.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), beta);

    // Adjust Z axis according to time.
    const zAdjust = phi0 + 2 * PI / P * (JD - JD0) + 1 / 2 * YORP * Math.pow(JD - JD0, 2);
    this._obj.rotateY(-(PI / 2 - beta));
    this._obj.rotateZ(-lambda);
    this._obj.rotateZ(zAdjust);
  }

  /**
   * Updates the object and its label positions for a given time.
   * @param {Number} jd JD date
   */
  update(jd) {
    if (this._obj && this._options.rotation && this._options.rotation.enable) {
      // For now, just rotate on X axis.
      const speed = this._options.rotation.speed || 0.5;
      this._obj.rotation.x += (speed * (Math.PI / 180));
      this._obj.rotation.x %= 360;
    }
    if (this._axisOfRotation) {
      // this._obj.rotateOnAxis(this._axisOfRotation, 0.01);
    }
    // this._obj.rotateZ(0.015)
    // this._obj.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), 0.01);
    // TODO(ian): Update position if there is an associated orbit
  }

  /**
   * Gets the THREE.js objects that represent this SpaceObject.
   * @return {Array.<THREE.Object>} A list of THREE.js objects
   */
  get3jsObjects() {
    const ret = super.get3jsObjects();
    ret.push(this._obj);
    return ret;
  }

  /**
   * Begin rotating this object.
   */
  startRotation() {
    this._options.rotation.enable = true;
  }

  /**
   * Stop rotation of this object.
   */
  stopRotation() {
    this._options.rotation.enable = false;
  }
}
