import * as THREE from 'three';
//import { TranslucentShader } from 'three/examples/jsm/shaders/TranslucentShader.js';

import Units from './Units';
import { RotatingObject } from './RotatingObject';
import { rescaleNumber } from './Scale';
import {
  ATMOSPHERE_SHADER_VERTEX,
  ATMOSPHERE_SHADER_FRAGMENT,
  RING_SHADER_VERTEX,
  RING_SHADER_FRAGMENT,
  SPHERE_SHADER_VERTEX,
  SPHERE_SHADER_FRAGMENT,
} from './shaders';

import type { IUniform } from 'three';
import type { Simulation } from './Simulation';
import type { SpaceObjectOptions } from './SpaceObject';

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
  constructor(id: string, options: SpaceObjectOptions, simulation: Simulation) {
    super(id, options, simulation, false /* autoInit */);

    this.init();
  }

  override init(): boolean {
    let map: THREE.Texture | null = null;
    if (this._options.textureUrl) {
      map = new THREE.TextureLoader().load(this._options.textureUrl);
    }

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

      let material: THREE.ShaderMaterial | THREE.MeshBasicMaterial;
      if (this._simulation.isUsingLightSources()) {
        console.warn(`SphereObject ${this._id} requires a texture when using a light source.`);
        const uniforms: Record<string, IUniform> = {
          sphereTexture: {
            value: undefined,
          },
          lightPos: {
            value: new THREE.Vector3(),
          },
        };
        // TODO(ian): Handle if no map
        uniforms.sphereTexture.value = map;
        uniforms.lightPos.value.copy(this._simulation.getLightPosition());
        material = new THREE.ShaderMaterial({
          uniforms,
          vertexShader: SPHERE_SHADER_VERTEX,
          fragmentShader: SPHERE_SHADER_FRAGMENT,
          transparent: true,
        });
      } else {
        const color = this._options.color ?? 0xbbbbbb;
        material = new THREE.MeshBasicMaterial({
          map,
          color,
        });
      }

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
      const atmosphere = this.renderFullAtmosphere();
      if (atmosphere) {
        this._obj.add(atmosphere);
      }
    }

    if (this._options.axialTilt) {
      this._obj.rotation.y += Units.rad(this._options.axialTilt);
    }

    this._renderMethod = 'SPHERE';

    if (this._simulation) {
      // Add it all to visualization.
      this._simulation.addObject(this, false /* noUpdate */);
    }

    return super.init();
  }

  /**
   * @private
   */
  private getScaledRadius(): number {
    return rescaleNumber(this._options.radius || 1);
  }

  /**
   * @private
   * Model the atmosphere as two layers - a thick inner layer and a diffuse
   * outer one.
   */
  private renderFullAtmosphere() {
    if (!this._simulation.isUsingLightSources()) {
      console.warn('Cannot render atmosphere without a light source');
      return null;
    }

    const radius = this.getScaledRadius();
    const color = new THREE.Color(this._options?.atmosphere?.color ?? 0xffffff);

    const innerSize =
      radius * (this._options?.atmosphere?.innerSizeRatio ?? 0.025);
    const outerSize =
      radius * (this._options?.atmosphere?.outerSizeRatio ?? 0.15);

    const detailedObj = new THREE.Object3D();
    detailedObj.add(
      this.renderAtmosphereComponent(radius, innerSize, 0.8, 2.0, color),
    );
    detailedObj.add(
      this.renderAtmosphereComponent(radius, outerSize, 0.5, 4.0, color),
    );

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
   * @param {Number} radius Radius of object
   * @param {Number} size Size of atmosphere
   * @param {Number} coefficient Coefficient value
   * @param {Number} power Power value
   * @param {THREE.Color} colorObj Color of atmosphere
   */
  private renderAtmosphereComponent(
    radius: number,
    size: number,
    coefficient: number,
    power: number,
    colorObj: THREE.Color,
  ) {
    const geometry = new THREE.SphereGeometry(radius + size, 32, 32);
    const uniforms = {
      c: { value: coefficient },
      p: { value: power },
      color: { value: colorObj },
      lightPos: { value: new THREE.Vector3() },
    };
    const lightPosition = this._simulation.getLightPosition();
    if (lightPosition) {
      uniforms.lightPos.value.copy(lightPosition);
    }
    // TODO(ian): Handle case where there is no light.

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: ATMOSPHERE_SHADER_VERTEX,
      fragmentShader: ATMOSPHERE_SHADER_FRAGMENT,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });

    return new THREE.Mesh(geometry, material);
  }

  /**
   * Add rings around this object.
   * @param {Number} innerRadiusKm Inner radius of ring.
   * @param {Number} outerRadiusKm Outer radius of ring.
   * @param {String} texturePath Full path to 1xN ring texture. (each pixel
   * represents the color of a full circle within the ring)
   * @param {Number} segments  Number of segments to use to render ring.
   * (optional)
   */
  addRings(
    innerRadiusKm: number,
    outerRadiusKm: number,
    texturePath: string,
    segments: number = 128,
  ) {
    const innerRadiusSize = rescaleNumber(Units.kmToAu(innerRadiusKm));
    const outerRadiusSize = rescaleNumber(Units.kmToAu(outerRadiusKm));

    const geometry = new THREE.RingGeometry(
      innerRadiusSize,
      outerRadiusSize,
      segments,
      5,
      0,
      Math.PI * 2,
    );
    // TODO(ian): Load from base path.
    const map = new THREE.TextureLoader().load(texturePath);

    let material;
    if (this._simulation.isUsingLightSources()) {
      // TODO(ian): Follow recommendation for defining ShaderMaterials here:
      // https://discourse.threejs.org/t/cant-get-a-sampler2d-uniform-to-work-from-datatexture/6366/14?u=ianw
      const uniforms = THREE.UniformsUtils.merge([
        // TODO(ian): These failed due to type check. Remove?
        // THREE.UniformsLib.ambient,
        THREE.UniformsLib.lights,
        // THREE.UniformsLib.shadowmap,
        {
          ringTexture: { value: null },
          innerRadius: { value: innerRadiusSize },
          outerRadius: { value: outerRadiusSize },
          lightPos: { value: new THREE.Vector3() },
        },
      ]);
      uniforms.ringTexture.value = map;
      uniforms.lightPos.value.copy(this._simulation.getLightPosition());

      material = new THREE.ShaderMaterial({
        uniforms,
        lights: true,
        vertexShader: RING_SHADER_VERTEX,
        fragmentShader: RING_SHADER_FRAGMENT,
        transparent: true,
        alphaTest: 0.1,
        side: THREE.DoubleSide,
      });
    } else {
      material = new THREE.MeshBasicMaterial({
        map,
        side: THREE.DoubleSide,
        transparent: true,
        alphaTest: 0.1,
        opacity: 0.8,
      });
    }

    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    mesh.castShadow = true;

    this._obj.add(mesh);
  }
}
