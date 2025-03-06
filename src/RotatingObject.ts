import * as THREE from 'three';

import Units from './Units';
import { SpaceObject } from './SpaceObject';
import { rescaleVector } from './Scale';

import type { Simulation } from './Simulation';
import type { SpaceObjectOptions } from './SpaceObject';

function getAxis(src: THREE.Vector3, dst: THREE.Vector3, color: number) {
  const mat = new THREE.LineBasicMaterial({ linewidth: 3, color });
  const geom = new THREE.BufferGeometry().setFromPoints([
    rescaleVector(src).clone(),
    rescaleVector(dst).clone(),
  ]);

  const axis = new THREE.Line(geom, mat);
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
  protected _obj: THREE.Object3D;

  private _objectIsRotatable: boolean;

  // private _axisRotationAngleOffset: number;

  private _axisOfRotation?: THREE.Vector3;

  /*
   * FIXME(ian): This implementation is still WIP! Rotational parameters are not
   * used right now.
   * @param {boolean} options.rotation.enable Rotate the object
   * @param {Number} options.rotation.speed Rotates the object even though no time elapsed, degs/rendering tick
   * @param {Number} options.rotation.lambdaDeg Ecliptic longitude lambda, in degrees
   * @param {Number} options.rotation.betaDeg Ecliptic longitude beta, in degrees
   * @param {Number} options.rotation.period Rotational period, in JD
   * @param {Number} options.rotation.yorp YORP coefficient, if any (defaults to 0)
   * @param {Number} options.rotation.phi0 Initial rotation phi, in degrees (defaults to 0)
   * @param {Number} options.rotation.jd0 JD epoch of rotational parameters
   * @see SpaceObject
   */
  constructor(
    id: string,
    options: SpaceObjectOptions,
    simulation: Simulation,
    autoInit: boolean = true,
  ) {
    super(id, options, simulation, false /* autoInit */);

    // The THREE.js object
    this._obj = new THREE.Object3D();
    this._obj.name = `${this._id}-rot-obj`;
    this._renderMethod = 'ROTATING_OBJECT';
    super.setPositionedObject(this._obj);

    this._objectIsRotatable = !!this._options.rotation;

    // Offset of axis angle
    // this._axisRotationAngleOffset = 0;
    this._axisOfRotation = undefined;

    if (autoInit) {
      this.init();
    }
  }

  override init(): boolean {
    if (this._objectIsRotatable) {
      this.initRotation();
    }

    if (this._options.debug) {
      if (this._options.debug.showAxes) {
        getAxes().forEach((axis) => {
          this._materials.push(axis.material as THREE.Material);
          this._geometries.push(axis.geometry as THREE.BufferGeometry);
          this._obj.add(axis);
        });
      }

      if (this._options.debug.showGrid) {
        const gridHelper = new THREE.GridHelper(3, 3, 0xff0000, 0xffeeee);
        gridHelper.geometry.rotateX(Math.PI / 2);
        this._materials.push(gridHelper.material);
        this._geometries.push(gridHelper.geometry);
        this._obj.add(gridHelper);
      }
    }

    return super.init();
  }

  initRotation() {
    if (!this._options.rotation) {
      throw new Error(
        'Must specify `rotation` option when creating a RotatingObject',
      );
    }

    const { rotation } = this._options;
    if (typeof rotation.jd0 === 'undefined') {
      return;
    }

    // Formula
    // https://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_description

    // Testing this asteroid:
    // http://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_asteroid_detail&asteroid_id=1504
    // Model 2691

    // Cacus
    // http://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_asteroid_detail&asteroid_id=1046
    // http://astro.troja.mff.cuni.cz/projects/asteroids3D/php.php?script=db_sky_projection&model_id=1863&jd=2443568.0

    // North Pole Ecliptic Longitude
    const eLon = Units.rad(rotation.lambdaDeg || 0);

    // North Pole Ecliptic Latitude
    const eLat = Units.rad(rotation.betaDeg || 0);

    // Current simulation time in JD
    const JD = this._simulation.getJd();

    // Z axis is ecliptic North, X towards the sun at March equinox, Y is 90 deg to the east from X.
    // Assume the object's Z-axis is its rotation axis. Rotate it to point to (lambda, beta).
    // see Fig. 1 from https://astropedia.astrogeology.usgs.gov/download/Docs/WGCCRE/WGCCRE2015reprint.pdf
    // NOTE: the above reference seems to have a mistake as it says 90deg - a0, whereas 90deg + a0 seems to be correct.
    const W = this._z_rotation(JD)
    if (typeof W !== 'undefined') {
      this._obj.rotateZ((Math.PI / 2) + eLon);  // Rotate X-axis to the body equator
      this._obj.rotateX((Math.PI / 2) - eLat);  // Rotate Z-axis to the correct lat and lon
      this._obj.rotateZ(W);               // Rotate around the Z-axis to spin the body the correct amount
    }
  }

  _z_rotation(jd: number) {
    if (typeof this._options.rotation === 'undefined') {
      return undefined;
    }
    const { period, yorp, phi0, jd0 } = this._options.rotation;
    if (typeof jd0 === 'undefined') {
      return undefined;
    }

    return (Units.rad(phi0 || 0) +
      ((2 * Math.PI) / period) * (jd - jd0) +
      (1 / 2) * (yorp || 0) * Math.pow(jd - jd0, 2)) % (2 * Math.PI);
  }

  /**
   * Updates the object and its label positions for a given time.
   * @param {Number} jd JD date
   */
  override update(jd: number, force: boolean = false) {
    if (
      this._obj &&
      this._objectIsRotatable &&
      this._options.rotation &&
      this._options.rotation.enable
    ) {
      if (this._axisOfRotation) {
        // this._obj.rotateOnAxis(this._axisOfRotation, 0.01);
      }
      if (this._options.rotation.speed) {
        this._obj.rotateZ(Units.rad(this._options.rotation.speed))
      }
      else {
        // Rotate the object around the Z axis
        const z_rot = this._z_rotation(jd);
        if (typeof z_rot !== 'undefined') {
          this._obj.rotation.z = z_rot;
        }
      }
    }

    // Update position
    super.update(jd, force);
  }

  /**
   * Gets the THREE.js objects that represent this SpaceObject.
   * @return {Array.<THREE.Object>} A list of THREE.js objects
   */
  override get3jsObjects(): THREE.Object3D[] {
    const ret = super.get3jsObjects();
    // NOTE: super.setPositionedObject(this._obj) in constructor already includes this._obj in the list
    return ret;
  }

  /**
   * Begin rotating this object.
   */
  startRotation() {
    if (!this._options.rotation) {
      throw new Error(
        'Must specify `rotation` option when creating a RotatingObject',
      );
    }
    this._options.rotation.enable = true;
  }

  /**
   * Stop rotation of this object.
   */
  stopRotation() {
    if (!this._options.rotation) {
      throw new Error(
        'Must specify `rotation` option when creating a RotatingObject',
      );
    }
    this._options.rotation.enable = false;
  }
}
