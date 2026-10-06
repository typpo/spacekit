import * as THREE from 'three';

import {
  GM_SUN_KM3_S2,
  ISCO_RADIUS,
  diskPeakTemperature,
  diskThicknessScale,
  novikovThorneFluxPeak,
  schwarzschildRadiusAu,
} from './BlackHolePhysics';
import { rescaleArray, rescaleNumber } from './Scale';
import {
  BLACK_HOLE_SHADER_VERTEX,
  BLACK_HOLE_SHADER_FRAGMENT,
} from './shaders';

import type { Coordinate3d } from './Coordinates';
import type {
  Simulation,
  SimulationContext,
  SimulationObject,
} from './Simulation';

export interface BlackHoleOptions {
  /** Position of the black hole in AU. Defaults to the origin. */
  position?: Coordinate3d;
  /** Mass in solar masses. Defaults to 4.3 million (Sagittarius A*). */
  mass?: number;
  /**
   * Schwarzschild radius in AU. Overrides the radius derived from `mass`.
   * Useful for making small black holes visible at solar system scales.
   */
  schwarzschildRadius?: number;
  /**
   * Radius, in Schwarzschild radii, of the region in which light rays are
   * traced exactly. Defaults to 60.
   */
  lensRadius?: number;
  /**
   * Fraction of `lensRadius` beyond which the deflection is eased to zero so
   * the lensed image joins the rest of the scene seamlessly. Defaults to 0.5.
   */
  lensFalloffStart?: number;
  /** Normal of the accretion disk (spin axis). Defaults to [0, 0, 1]. */
  diskNormal?: Coordinate3d;
  accretionDisk?: {
    /** Show the accretion disk. Defaults to true. */
    enable?: boolean;
    /** Inner radius of the disk in rs. Defaults to the ISCO, 3 rs. */
    innerRadius?: number;
    /** Outer radius of the disk in rs. Defaults to 15. */
    outerRadius?: number;
    /**
     * Luminosity of the disk as a fraction of the Eddington luminosity, which
     * sets its temperature and thickness. Defaults to 0.02, a moderately
     * accreting thin disk.
     */
    eddingtonRatio?: number;
    /**
     * Maximum local temperature of the disk in Kelvin, before redshift.
     * Overrides the temperature derived from the mass and `eddingtonRatio`.
     */
    peakTemperature?: number;
    /** Brightness multiplier applied before tone mapping. Defaults to 0.8. */
    exposure?: number;
    /**
     * Strength of turbulent structure in the disk gas, from 0 (a perfectly
     * smooth Novikov-Thorne disk) to 1. The pattern is carried around by
     * Keplerian differential rotation. Defaults to 0.6.
     */
    turbulence?: number;
    /**
     * Multiplier on the physical disk thickness. The half-thickness follows
     * the radiation-pressure supported Shakura-Sunyaev solution, about
     * 0.75 (L / L_Edd) / 0.057 rs away from the inner edge. Defaults to 1.
     */
    thickness?: number;
    /**
     * Real-world seconds for gas at the inner edge of the disk to complete an
     * orbit. Outer gas moves slower, following Kepler's third law. The true
     * period is minutes to hours for supermassive black holes and
     * milliseconds for stellar ones, so this is a visual time scale.
     * Defaults to 8.
     */
    rotationPeriod?: number;
  };
  environmentMap?: {
    /**
     * Resolution of each face of the cube map of the surrounding scene that
     * is lensed by the black hole. Defaults to a value that matches the
     * screen resolution, up to 1024.
     */
    resolution?: number;
    /**
     * Re-render the surroundings every N frames. Set to 0 to only render
     * them on demand with `refreshEnvironment()`. Defaults to 1.
     */
    updateInterval?: number;
  };
}

/**
 * A non-rotating (Schwarzschild) black hole.
 *
 * The black hole is rendered by tracing light rays backward from the camera
 * along null geodesics of the Schwarzschild metric. This produces the black
 * hole's shadow, the photon ring, and gravitational lensing of everything
 * behind it, including Einstein rings and secondary images.
 *
 * It can optionally be surrounded by a thin, optically thick accretion disk
 * whose temperature follows the general relativistic Novikov-Thorne profile.
 * Disk light is shifted by gravitational redshift and relativistic Doppler
 * beaming, so the approaching side of the disk looks brighter and bluer.
 *
 * @example
 * ```
 * const blackHole = viz.createBlackHole({
 *   position: [0, 0, 0],
 *   mass: 4.3e6,
 *   diskNormal: [0, 0.2, 1],
 * });
 * ```
 */
export class BlackHole implements SimulationObject {
  private id: string;

  private options: BlackHoleOptions;

  private simulation: Simulation;

  private context: SimulationContext;

  private position: THREE.Vector3;

  private schwarzschildRadiusScene: number;

  private lensRadius: number;

  private localFrame: THREE.Matrix4;

  private localFrameInverse: THREE.Matrix4;

  private mesh: THREE.Mesh;

  private material: THREE.ShaderMaterial;

  private cubeRenderTarget: THREE.WebGLCubeRenderTarget;

  private cubeCamera: THREE.CubeCamera;

  private frameCount: number;

  private needsEnvironmentRefresh: boolean;

  private lastFrameTime: number;

  private lastJd: number;

  /**
   * @param {String} id Unique id of this object
   * @param {BlackHoleOptions} options Options
   * @param {Simulation} simulation Simulation object
   */
  constructor(id: string, options: BlackHoleOptions, simulation: Simulation) {
    this.id = id;
    this.options = options || {};
    this.simulation = simulation;
    this.context = simulation.getContext();

    this.position = new THREE.Vector3();
    this.lensRadius = this.options.lensRadius || 60;
    this.schwarzschildRadiusScene = rescaleNumber(
      this.getSchwarzschildRadius(),
    );
    this.frameCount = 0;
    this.needsEnvironmentRefresh = true;
    this.lastFrameTime = Date.now();
    this.lastJd = simulation.getJd();

    const normal = new THREE.Vector3()
      .fromArray(this.options.diskNormal || [0, 0, 1])
      .normalize();
    this.localFrame = new THREE.Matrix4().makeRotationFromQuaternion(
      new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 0, 1),
        normal,
      ),
    );
    this.localFrameInverse = this.localFrame.clone().invert();

    const envOptions = this.options.environmentMap || {};
    this.cubeRenderTarget = new THREE.WebGLCubeRenderTarget(
      envOptions.resolution || this.getDefaultEnvironmentResolution(),
      {
        generateMipmaps: true,
        minFilter: THREE.LinearMipmapLinearFilter,
      },
    );
    // Only capture what lies outside of the lensing region, since anything
    // inside it is drawn normally. The far plane must reach the skybox and
    // star field, which sit at 1e9-1e10 units.
    this.cubeCamera = new THREE.CubeCamera(
      this.lensRadius * this.schwarzschildRadiusScene,
      1e11,
      this.cubeRenderTarget,
    );

    this.material = this.createMaterial();
    this.mesh = new THREE.Mesh(
      new THREE.SphereBufferGeometry(
        this.lensRadius * this.schwarzschildRadiusScene,
        64,
        32,
      ),
      this.material,
    );
    this.mesh.onBeforeRender = (_renderer, _scene, camera) => {
      this.updateCameraUniforms(camera);
    };

    this.setPosition(this.options.position || [0, 0, 0]);

    this.simulation.addObject(this);
  }

  /**
   * Pick a cube map resolution whose pixels subtend about the same angle as
   * the screen's, so that lensed stars and sprites look like unlensed ones.
   * @private
   */
  private getDefaultEnvironmentResolution(): number {
    const camera = this.context.objects.camera.get3jsCamera();
    const renderer = this.context.objects.renderer;
    const screenPixels =
      this.context.container.height * renderer.getPixelRatio();
    // Each cube face spans 90 degrees.
    const ideal = (90 / camera.fov) * screenPixels;
    const pow2 = Math.pow(2, Math.round(Math.log2(Math.max(ideal, 1))));
    return Math.min(
      Math.max(pow2, 256),
      1024,
      renderer.capabilities.maxCubemapSize,
    );
  }

  /**
   * @private
   */
  private createMaterial(): THREE.ShaderMaterial {
    const disk = this.options.accretionDisk || {};
    const peakTemperature =
      disk.peakTemperature ||
      diskPeakTemperature(this.getMass(), disk.eddingtonRatio ?? 0.02);
    const outerRadius = disk.outerRadius || 15;
    if (outerRadius >= this.lensRadius) {
      console.warn(
        'Black hole accretion disk extends past lensRadius and will be clipped.',
      );
    }

    return new THREE.ShaderMaterial({
      uniforms: {
        envMap: { value: this.cubeRenderTarget.texture },
        cameraLocal: { value: new THREE.Vector3() },
        viewToLocal: { value: new THREE.Matrix3() },
        localToWorld: {
          value: new THREE.Matrix3().setFromMatrix4(this.localFrame),
        },
        lensRadius: { value: this.lensRadius },
        lensFalloffStart: { value: this.options.lensFalloffStart ?? 0.5 },
        diskEnabled: { value: disk.enable !== false },
        diskInnerRadius: { value: disk.innerRadius || ISCO_RADIUS },
        diskOuterRadius: { value: outerRadius },
        diskPeakTemperature: { value: peakTemperature },
        diskFluxMax: { value: novikovThorneFluxPeak(outerRadius).flux },
        diskExposure: { value: disk.exposure ?? 0.8 },
        diskTurbulence: { value: disk.turbulence ?? 0.6 },
        diskThicknessScale: {
          value:
            diskThicknessScale(disk.eddingtonRatio ?? 0.02) *
            (disk.thickness ?? 1),
        },
        // Vertical optical depth through the disk midplane. Large enough
        // that the photosphere sits about two Gaussian widths up.
        diskOpticalDepth: { value: 50 },
        diskTime: { value: 0 },
      },
      vertexShader: BLACK_HOLE_SHADER_VERTEX,
      fragmentShader: BLACK_HOLE_SHADER_FRAGMENT,
      side: THREE.BackSide,
    });
  }

  /**
   * Update the uniforms that depend on the camera used to render the scene.
   * @private
   */
  private updateCameraUniforms(camera: THREE.Camera) {
    const uniforms = this.material.uniforms;

    // Done in double precision on the CPU so the shader only sees small,
    // well-conditioned numbers.
    const cameraPos = new THREE.Vector3().setFromMatrixPosition(
      camera.matrixWorld,
    );
    uniforms.cameraLocal.value
      .copy(cameraPos)
      .sub(this.position)
      .applyMatrix4(this.localFrameInverse)
      .divideScalar(this.schwarzschildRadiusScene);

    const cameraRotation = new THREE.Matrix4().extractRotation(
      camera.matrixWorld,
    );
    uniforms.viewToLocal.value.setFromMatrix4(
      this.localFrameInverse.clone().multiply(cameraRotation),
    );
  }

  /**
   * Called by the simulation right before each frame is drawn.
   */
  beforeRender() {
    // Advance disk rotation while the simulation is running.
    const now = Date.now();
    const jd = this.simulation.getJd();
    if (jd !== this.lastJd) {
      const period = this.options.accretionDisk?.rotationPeriod || 8;
      this.material.uniforms.diskTime.value =
        (this.material.uniforms.diskTime.value +
          (now - this.lastFrameTime) / 1000 / period) %
        1000;
      this.lastJd = jd;
    }
    this.lastFrameTime = now;

    const interval = this.options.environmentMap?.updateInterval ?? 1;
    this.frameCount++;
    if (
      this.needsEnvironmentRefresh ||
      (interval > 0 && this.frameCount % interval === 0)
    ) {
      this.refreshEnvironment();
    }
  }

  /**
   * Re-render the surroundings of the black hole that are seen through its
   * gravitational lens.
   */
  refreshEnvironment() {
    const renderer = this.context.objects.renderer;
    const scene = this.context.objects.scene;
    this.mesh.visible = false;
    this.cubeCamera.position.copy(this.position);
    this.cubeCamera.updateMatrixWorld();
    this.cubeCamera.update(renderer, scene);
    this.mesh.visible = true;
    this.needsEnvironmentRefresh = false;
  }

  /**
   * Move the black hole.
   * @param {Array.<Number>} pos Position in AU
   */
  setPosition(pos: Coordinate3d) {
    const rescaled = rescaleArray(pos);
    this.position.set(rescaled[0], rescaled[1], rescaled[2]);
    this.mesh.position.copy(this.position);
    this.mesh.updateMatrixWorld();
    this.needsEnvironmentRefresh = true;
  }

  /**
   * Get the position of the black hole, in scene units.
   * @return {THREE.Vector3} Position
   */
  getPosition(): THREE.Vector3 {
    return this.position.clone();
  }

  /**
   * @return {Number} Mass in solar masses
   */
  getMass(): number {
    return this.options.mass || 4.3e6;
  }

  /**
   * Standard gravitational parameter of the black hole, for use as the `GM`
   * of an `Ephem` orbiting it.
   * @return {Number} GM in m^3/s^2
   */
  getGM(): number {
    return this.getMass() * GM_SUN_KM3_S2 * 1e9;
  }

  /**
   * @return {Number} Schwarzschild radius (event horizon radius) in AU
   */
  getSchwarzschildRadius(): number {
    return (
      this.options.schwarzschildRadius || schwarzschildRadiusAu(this.getMass())
    );
  }

  /**
   * Get the unique ID of this object.
   * @return {String} id
   */
  getId(): string {
    return this.id;
  }

  /**
   * A list of THREE.js objects that are used to compose the black hole.
   * @return {THREE.Object3D[]} Objects
   */
  get3jsObjects(): THREE.Object3D[] {
    return [this.mesh];
  }

  update() {
    // The black hole is static. Its lensed surroundings are refreshed in
    // beforeRender.
  }

  /**
   * Release GPU resources.
   */
  removalCleanup() {
    this.mesh.geometry.dispose();
    this.material.dispose();
    this.cubeRenderTarget.dispose();
  }
}
