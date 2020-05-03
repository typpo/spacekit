import * as THREE from 'three';

import { SpaceObject } from './SpaceObject';
import { rad } from './Units';
import { rescaleVector } from './Scale';

function getAxis(src, dst, color) {
  const geom = new THREE.Geometry();
  const mat = new THREE.LineBasicMaterial({ linewidth: 3, color });

  geom.vertices.push(rescaleVector(src).clone());
  geom.vertices.push(rescaleVector(dst).clone());

  const axis = new THREE.Line(geom, mat, THREE.LineSegments);
  axis.computeLineDistances();
  return axis;
}

function getAxes() {
  return [
    getAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(3, 0, 0), 0xff0000),
    getAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 3, 0), 0x00ff00),
    getAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 3), 0x0000ff),
  ];
}

/**
 * This class simulates an object that spins according to provided rotational
 * parameters.
 */
export class RotatingObject extends SpaceObject {
  /*
   * FIXME(ian): This implementation is still WIP! Rotational parameters are not
   * used right now.
   * @param {boolean} options.rotation.enable Rotate the object
   * @param {Number} options.rotation.speed Factor that determines speed of rotation
   * @param {Number} options.rotation.lambdaDeg Ecliptic longitude lambda, in degrees
   * @param {Number} options.rotation.betaDeg Ecliptic longitude beta, in degrees
   * @param {Number} options.rotation.period Rotational period, in JD
   * @param {Number} options.rotation.yorp YORP coefficient, if any (defaults to 0)
   * @param {Number} options.rotation.phi0 Initial rotation phi, in degrees (defaults to 0)
   * @param {Number} options.rotation.jd0 JD epoch of rotational parameters
   * @see SpaceObject
   */
  constructor(id, options, contextOrSimulation, autoInit = true) {
    super(id, options, contextOrSimulation, false /* autoInit */);

    // The THREE.js object
    this._obj = new THREE.Object3D();
    this._renderMethod = 'ROTATING_OBJECT';
    super.setPositionedObject(this._obj);

    this._objectIsRotatable = false;
    if (this._options.rotation) {
      this._objectIsRotatable = true;
    }

    // Offset of axis angle
    this._axisRotationAngleOffset = 0;
    this._axisOfRotation = undefined;

    // Keep track of materials that comprise this object.
    this._materials = [];

    if (autoInit) {
      this.init();
    }
  }

  init() {
    if (this._objectIsRotatable) {
      this.initRotation();
    }

    if (this._options.debug) {
      if (this._options.debug.showAxes) {
        getAxes().forEach(axis => this._obj.add(axis));
      }

      if (this._options.debug.showGrid) {
        const gridHelper = new THREE.GridHelper(3, 3, 0xff0000, 0xffeeee);
        gridHelper.geometry.rotateX(Math.PI / 2);
        this._obj.add(gridHelper);
      }
    }

    super.init();
  }

  initRotation() {
    if (typeof this._options.rotation.jd0 === 'undefined') {
      return;
    }

    // Formula
    // https://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_description

    // Testing this asteroid:
    // http://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_asteroid_detail&asteroid_id=1504
    // Model 2691
    const PI = Math.PI;

    // Cacus
    // http://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_asteroid_detail&asteroid_id=1046
    // http://astro.troja.mff.cuni.cz/projects/asteroids3D/php.php?script=db_sky_projection&model_id=1863&jd=2443568.0

    const rotation = this._options.rotation;

    // Latitude
    const lambda = rad(rotation.lambdaDeg);

    // Longitude
    const beta = rad(rotation.betaDeg);

    // Other
    const P = rotation.period;
    const YORP = rotation.yorp;
    const phi0 = rad(rotation.phi0);
    const JD = this._simulation.getJd();
    const JD0 = rotation.jd0;

    // Asteroid rotation
    // this._obj.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), lambda);
    // this._obj.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), beta);

    // Adjust Z axis according to time.
    const zAdjust =
      phi0 +
      ((2 * PI) / P) * (JD - JD0) +
      (1 / 2) * YORP * Math.pow(JD - JD0, 2);
    this._obj.rotateY(-(PI / 2 - beta));
    this._obj.rotateZ(-lambda);
    this._obj.rotateZ(zAdjust);
  }

  /**
   * Updates the object and its label positions for a given time.
   * @param {Number} jd JD date
   */
  update(jd) {
    if (
      this._obj &&
      this._objectIsRotatable &&
      this._options.rotation &&
      this._options.rotation.enable
    ) {
      // For now, just rotate on X axis.
      const speed = this._options.rotation.speed || 0.5;
      this._obj.rotation.z += speed * (Math.PI / 180);
      this._obj.rotation.z %= 360;
    }
    if (this._axisOfRotation) {
      // this._obj.rotateOnAxis(this._axisOfRotation, 0.01);
    }
    // this._obj.rotateZ(0.015)
    // this._obj.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), 0.01);

    // Update position
    super.update(jd);
  }

  /**
   * Gets the THREE.js objects that represent this SpaceObject.
   * @return {Array.<THREE.Object>} A list of THREE.js objects
   */
  get3jsObjects() {
    const ret = super.get3jsObjects();
    // Add to the front, because this is the primary object.
    ret.unshift(this._obj);
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
