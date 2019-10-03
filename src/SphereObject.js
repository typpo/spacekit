import * as THREE from 'three';
//import { TranslucentShader } from 'three/examples/jsm/shaders/TranslucentShader.js';

import { RotatingObject } from './RotatingObject';
import { rescaleNumber } from './Scale';
import { auToKm, kmToAu, rad } from './Units';
import {
  ATMOSPHERE_SHADER_VERTEX,
  ATMOSPHERE_SHADER_FRAGMENT,
  RING_SHADER_VERTEX,
  RING_SHADER_FRAGMENT,
  RING_GLOW_SHADER_VERTEX,
  RING_GLOW_SHADER_FRAGMENT,
} from './shaders';

const noiseTexture = THREE.ImageUtils.loadTexture('./noise.jpg');

const NOISE_TEXTURE_SIZE = 512;

let generatedNoise = undefined;
function generateNoise(opacity, magnitude, size = NOISE_TEXTURE_SIZE) {
  // TODO(ian): Make this a static image.
  if (generatedNoise) {
    //return generatedNoise;
  }
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext('2d');
  for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
      const number = Math.floor(Math.random() * magnitude);
      ctx.fillStyle =
        'rgba(' + number + ',' + number + ',' + number + ',' + opacity + ')';
      ctx.fillRect(x, y, 1, 1);
    }
  }
  const noiseTexture = new THREE.Texture(canvas);
  noiseTexture.needsUpdate = true;
  noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping;

  generatedNoise = noiseTexture;
  return noiseTexture;
}

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
      map.anisotropy = 16;
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
            depthTest: true,
            depthWrite: true,
          })
        : new THREE.MeshBasicMaterial({
            map,
            color,
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

    /*
    this._obj.add(this.renderRings('D', 66900, 74510, 0x242424));
    this._obj.add(this.renderRings('C', 74658, 92000, 0x5f5651));
    this._obj.add(this.renderRings('B', 92000, 117580, 0xccb193));
    this._obj.add(this.renderRings('A', 122170, 136775, 0x9f8d77));
    */

    /*
    this._obj.add(this.renderRingGlow(66900, 74510, 0x242424));
    this._obj.add(this.renderRingGlow(74658, 92000, 0x5f5651));
    this._obj.add(this.renderRingGlow(92000, 117580, 0xccb193));
    */

    const allRings = this.renderRings('All', 66900, 136775, 0xffffff);
    this._obj.add(allRings);
    //this._obj.add(this.renderRingGlow(122170, 136775, 0x9f8d77));

    if (this._options.axialTilt) {
      this._obj.rotation.y += rad(this._options.axialTilt);
      // FIXME(ian): Remove
      this._obj.rotation.x += rad(this._options.axialTilt);
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
   * @param {THREE.Color} color Color of atmosphere
   */
  renderAtmosphereComponent(radius, size, coefficient, power, color) {
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

  /**
   * @private
   * Generate a ring geometry with correct UVs.
   * @param {Number} innerRadiusSize Inner radius in true coordinates
   * @param {Number} outerRadiusSize Outer radius in true coordinates
   * @param {Number} segments Number of segments in ring
   */
  getRingGeometry(innerRadiusSize, outerRadiusSize, segments) {
    /*
    const geometry = new THREE.RingBufferGeometry(innerRadiusSize, outerRadiusSize, segments);
    var pos = geometry.attributes.position;
    var v3 = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++){
      v3.fromBufferAttribute(pos, i);
      geometry.attributes.uv.setXY(i, v3.length() < 4 ? 0 : 1, 1);
    }
    return geometry;
    */
    return new THREE.RingGeometry(
      innerRadiusSize,
      outerRadiusSize,
      segments,
      5,
      0,
      Math.PI * 2,
    );
  }

  renderRings(name, innerRadiusKm, outerRadiusKm, color) {
    const radius = this.getScaledRadius();
    const segments = 128;

    //const geometry = new THREE.RingGeometry(1.2 * radius, 2 * radius, segments, 5, 0, Math.PI * 2);
    //const geometry = new THREE.RingGeometry(2 * radius, 4 * radius, segments, 5, 0, Math.PI * 2);

    //const geometry = new THREE.BoxGeometry(4 * radius, 4 * radius, 0.001);
    //const geometry = new THREE.BoxGeometry(radius/2, radius/2, radius/2);

    const innerRadiusSize = rescaleNumber(kmToAu(innerRadiusKm));
    const outerRadiusSize = rescaleNumber(kmToAu(outerRadiusKm));

    const geometry = this.getRingGeometry(
      innerRadiusSize,
      outerRadiusSize,
      segments,
    );
    //const map = new THREE.TextureLoader().load('./saturn_rings.png');
    const map = new THREE.TextureLoader().load('./saturn_rings_top.png');
    //const map = new THREE.TextureLoader().load('./t00fri_gh_saturnrings.png');
    map.anisotropy = 16;

    // TODO(ian): Yes this is above 255 but I want more bright particles than not...
    //const noiseTexture = generateNoise(1.0, 500, 1024);

    // TODO(ian): Follow recommendation for defining ShaderMaterials here:
    // https://discourse.threejs.org/t/cant-get-a-sampler2d-uniform-to-work-from-datatexture/6366/14?u=ianw
    const uniforms = THREE.UniformsUtils.merge([
      THREE.UniformsLib.ambient,
      THREE.UniformsLib.lights,
      THREE.UniformsLib.shadowmap,
      {
        ringTexture: { value: null },
        innerRadius: { value: innerRadiusSize },
        outerRadius: { value: outerRadiusSize },
        lightPosition: { value: null },
      },
    ]);
    uniforms.ringTexture.value = map;
    uniforms.lightPosition.value = new THREE.Vector3(500, 500, 12.5);

    const material = this._simulation.isUsingLightSources()
      ? /*
      ? new THREE.MeshLambertMaterial({
          map,
          //color: new THREE.Color(color),
          side: THREE.DoubleSide,
          shadowSide: THREE.DoubleSide,

          transparent: true,
          opacity: 0.9,
          //alphaMap: noiseTexture,
          alphaTest: 0.1,
          //bumpMap: noiseTexture,

          reflectivity: 0.5,
        })
        */
        new THREE.ShaderMaterial({
          uniforms,
          lights: true,
          vertexShader: RING_SHADER_VERTEX,
          fragmentShader: RING_SHADER_FRAGMENT,
          transparent: true,
          side: THREE.DoubleSide,
        })
      : new THREE.MeshBasicMaterial({
          map,
          side: THREE.DoubleSide,
          transparent: true,
          alphaTest: 0.1,
          opacity: 0.8,
        });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    mesh.castShadow = true;

    // https://stackoverflow.com/questions/43848330/three-js-shadows-cast-by-partially-transparent-mesh
    var customDepthMaterial = new THREE.MeshDepthMaterial({
      depthPacking: THREE.RGBADepthPacking,
      map, // or, alphaMap: myAlphaMap
      alphaTest: 0.5,
    });

    mesh.customDepthMaterial = customDepthMaterial;
    return mesh;
  }

  renderRingGlow(innerRadiusKm, outerRadiusKm, color) {
    const segments = 128;
    const innerRadiusSize = rescaleNumber(kmToAu(innerRadiusKm));
    const outerRadiusSize = rescaleNumber(kmToAu(outerRadiusKm));

    // Now set up the rings glow...
    /*
    const baseRingGeometry = this.getRingGeometry(innerRadiusSize * 0.9, outerRadiusSize * 1.1, segments);
    const glowGeometry = new THREE.ExtrudeGeometry(baseRingGeometry, {
      amount: 2,
      steps: 1,
      bevelEnabled: true,
      curveSegments: 8,
    });
    */

    const ringGeometry = new THREE.RingGeometry(
      outerRadiusSize * 0.99,
      outerRadiusSize,
      segments,
      5,
      0,
      Math.PI * 2,
    );

    const thickness = rescaleNumber(0.000025);
    const glowGeometry = new THREE.CylinderGeometry(
      outerRadiusSize,
      outerRadiusSize,
      thickness,
      segments,
    );

    const coefficient = 1;
    const power = 3.0;

    //const noiseTexture = generateNoise(1.0, 255);

    /*
    const translucentUniforms = THREE.UniformsUtils.clone(
      TranslucentShader.uniforms,
    );
    translucentUniforms['map'] = noiseTexture;
    translucentUniforms['diffuse'].value = new THREE.Vector3(1.0, 0.2, 0.2);
    translucentUniforms['shininess'].value = 500;

    translucentUniforms['thicknessMap'].value = noiseTexture;
    translucentUniforms['thicknessColor'].value = new THREE.Vector3(
      0.5,
      0.3,
      0.0,
    );
    translucentUniforms['thicknessDistortion'].value = 0.1;
    translucentUniforms['thicknessAmbient'].value = 0.4;
    translucentUniforms['thicknessAttenuation'].value = 0.8;
    translucentUniforms['thicknessPower'].value = 2.0;
    translucentUniforms['thicknessScale'].value = 16.0;
    const translucentShader = new THREE.ShaderMaterial({
      uniforms: translucentUniforms,
      vertexShader: TranslucentShader.vertexShader,
      fragmentShader: TranslucentShader.fragmentShader,
      lights: true,
    });
    translucentShader.extensions.derivatives = true;
    */

    const glowMesh = new THREE.Mesh(
      glowGeometry,
      //ringGeometry,
      /*
      new THREE.MeshStandardMaterial({
        color,
        transparent: true,
        side: THREE.DoubleSide,
      }),
      */
      new THREE.ShaderMaterial({
        uniforms: THREE.UniformsUtils.merge([
          THREE.UniformsLib.ambient,
          THREE.UniformsLib.lights,
          {
            c: { value: coefficient },
            p: { value: power },
            color: { value: new THREE.Color(color) },
          },
        ]),
        vertexShader: RING_GLOW_SHADER_VERTEX,
        fragmentShader: RING_GLOW_SHADER_FRAGMENT,
        side: THREE.BackSide,
        lights: true,
      }),
      //translucentShader,
    );
    glowMesh.rotation.x = Math.PI / 2;
    glowMesh.receiveShadow = true;
    glowMesh.position.y -= thickness / 2;
    return glowMesh;
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
