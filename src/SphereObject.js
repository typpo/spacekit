import * as THREE from 'three';

import { RotatingObject } from './RotatingObject';
import { rescaleNumber } from './Scale';
import { auToKm, kmToAu, rad } from './Units';
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
   * @param {Number} options.axialTilt Axial tilt in degrees
   * @param {Number} options.radius Radius of sphere. Defaults to 1
   * @param {Object} options.levelsOfDetail List of {threshold: x, segments:
   * y}, where `threshold` is radii distance and `segments` is the number
   * number of sphere faces to render.
   * @param {Object} options.atmosphere Atmosphere options
   * @param {Object} options.atmosphere.enable Show atmosphere
   * @param {Object} options.atmosphere.color Atmosphere color
   * @param {Object} options.atmosphere.innerSizeRatio Size ratio of the inner
   * atmosphere to the radius of the sphere. Defaults to 0.025
   * @param {Object} options.atmosphere.outerSizeRatio Size ratio of the outer
   * atmosphere to the radius of the sphere. Defaults to 0.15
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
    const radius = this.getScaledRadius();

    for (let i = 0; i < levelsOfDetail.length; i += 1) {
      const level = levelsOfDetail[i];
      const sphereGeometry = new THREE.SphereGeometry(
        radius,
        level.segments,
        level.segments,
      );
      const color = this._options.color || 0xbbbbbb;
      const material = this._simulation.isUsingLightSources()
        ? new THREE.MeshLambertMaterial({
            map,
            reflectivity: 0.5,
          })
        : new THREE.MeshBasicMaterial({
            map,
          });
      const mesh = new THREE.Mesh(sphereGeometry, material);
      mesh.receiveShadow = true;
      mesh.castShadow = true;

      // Change the coordinate system to have Z-axis pointed up.
      mesh.rotation.x = Math.PI / 2;

      // Show this number of segments at distance >= radii * level.radii.
      detailedObj.addLevel(mesh, radius * level.radii);
    }

    // Add to the parent base object.
    this._obj.add(detailedObj);

    if (this._options.atmosphere && this._options.atmosphere.enable) {
      this._obj.add(this.renderFullAtmosphere());
    }

    this._obj.add(this.renderRings());

    if (this._options.axialTilt) {
      this._obj.rotation.y += rad(this._options.axialTilt);
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
  getScaledRadius() {
    return rescaleNumber(this._options.radius || 1);
  }

  /**
   * @private
   * Model the atmosphere as two layers - a thick inner layer and a diffuse
   * outer one.
   */
  renderFullAtmosphere() {
    const radius = this.getScaledRadius();
    const color = new THREE.Color(this._options.atmosphere.color || 0xffffff);

    const innerSize =
      radius * (this._options.atmosphere.innerSizeRatio || 0.025);
    const outerSize =
      radius * (this._options.atmosphere.outerSizeRatio || 0.15);

    const detailedObj = new THREE.Object3D();
    detailedObj.add(this.renderAtmosphere(radius, innerSize, 0.8, 2.0, color));
    detailedObj.add(this.renderAtmosphere(radius, outerSize, 0.5, 4.0, color));

    // Hide atmosphere beyond some multiple of radius distance.
    // TODO(ian): This effect is somewhat jarring when the atmosphere first
    // appears, also arbitrary...
    const ret = new THREE.LOD();
    ret.addLevel(detailedObj, 0);
    ret.addLevel(new THREE.Object3D(), radius * 24);
    return ret;
  }

  /**
   * @private
   */
  renderAtmosphere(radius, size, coefficient, power, color) {
    const geometry = new THREE.SphereGeometry(radius + size, 32, 32);
    const mesh = new THREE.Mesh(
      geometry,
      new THREE.ShaderMaterial({
        uniforms: THREE.UniformsUtils.merge([
          THREE.UniformsLib.ambient,
          THREE.UniformsLib.lights,
          {
            c: { value: coefficient },
            p: { value: power },
            color: { value: color },
          },
        ]),
        vertexShader: ATMOSPHERE_SHADER_VERTEX,
        fragmentShader: ATMOSPHERE_SHADER_FRAGMENT,
        //side: THREE.FrontSide,
        side: THREE.BackSide,
        //blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
        lights: true,
      }),
    );
    return mesh;
  }

  renderRings() {
    const radius = this.getScaledRadius();
    const segments = 64;

    //const geometry = new THREE.RingGeometry(1.2 * radius, 2 * radius, segments, 5, 0, Math.PI * 2);

    const geometry = new THREE.RingBufferGeometry(2 * radius, 4 * radius, segments);

    const uvs = geometry.attributes.uv.array;
    // Loop and initialization taken from RingBufferGeometry
    let phiSegments = geometry.parameters.phiSegments || 0;
    let thetaSegments = geometry.parameters.thetaSegments || 0;
    phiSegments = phiSegments !== undefined ? Math.max( 1, phiSegments ) : 1;
    thetaSegments = thetaSegments !== undefined ? Math.max( 3, thetaSegments ) : 8;
    for ( let c = 0, j = 0; j <= phiSegments; j ++ ) {
      for ( let i = 0; i <= thetaSegments; i ++ ) {
        uvs[c++] = i / thetaSegments,
        uvs[c++] = j / phiSegments;
      }
    }

    const map = THREE.ImageUtils.loadTexture('./saturn_rings.png');
    const material = this._simulation.isUsingLightSources()
      ? new THREE.MeshPhongMaterial({
          map,
          //reflectivity: 0.5,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.8
        })
      : new THREE.MeshBasicMaterial({
          map,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.8
        });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    mesh.castShadow = true;
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
