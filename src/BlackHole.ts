import * as THREE from 'three';
import type { Coordinate3d } from './Coordinates';
import type { Simulation, SimulationObject } from './Simulation';
import {
  METERS_PER_AU,
  SPEED_OF_LIGHT,
  SCHWARZSCHILD_CRITICAL_IMPACT,
  schwarzschildRadiusAu,
} from './BlackHolePhysics';
import { BLACK_HOLE_VERTEX, BLACK_HOLE_FRAGMENT } from './blackHoleShader';
import { BlackHoleSceneCapture } from './BlackHoleSceneCapture';

const sceneLensOwners = new WeakMap<Simulation, BlackHole>();

/** Optional accretion-disk appearance and animation settings. */
export interface AccretionDiskOptions {
  /** In Schwarzschild radii, at least 3 (the ISCO). Default 3. */
  innerRadius?: number;
  /** In Schwarzschild radii, greater than innerRadius. Default 12. */
  outerRadius?: number;
  /** Maximum mean midplane rest-frame temperature in Kelvin. Default 6500. */
  temperature?: number;
  /** Vertical optical depth of the emitting layer. Default 2. */
  opticalDepth?: number;
  /** RMS density height H / cylindrical radius, 0.02–0.3. Default 0.025. */
  aspectRatio?: number;
  /** Illustrative turbulent density/emission contrast, from 0 to 1. Default 0.65. */
  turbulence?: number;
  /** Disk animation multiplier, >= 0. Default 1; does not change Doppler shifts. */
  rotationSpeed?: number;
}

/** Physical radii in AU, independent of the simulation's display scale. */
export interface BlackHoleRadii {
  eventHorizonAu: number;
  photonSphereAu: number;
  iscoAu: number;
  shadowImpactParameterAu: number;
}

export interface BlackHoleOptions {
  /** Mass in solar masses. Required; controls all physical length/time scales. */
  massSolar: number;
  /** Center in AU. Default [0, 0, 0]. */
  position?: Coordinate3d;
  /** Normal to the accretion disk in scene coordinates. Default [0, 0, 1]. */
  diskNormal?: Coordinate3d;
  /** Omit for the default disk, or false to hide it. */
  accretionDisk?: AccretionDiskOptions | false;
  /** Display exposure, positive. Default 1. */
  exposure?: number;
  /** Default 'high': 1024 adaptive RK4 steps; 'low': 768 coarser steps. */
  quality?: 'low' | 'high';
  /**
   * Lens the camera image, including meshes, sprites, lines and particles.
   * Default false. Screen-space approximation for perspective cameras.
   * Requires WebGL 2; uses captured finite source distances.
   * Enable on at most one black hole per simulation.
   */
  lensScene?: boolean;
  /**
   * Optional caller-owned equirectangular sky, with north at +Z and longitude
   * zero at +X (center of texture). Replaces the background with a lensed sky.
   * Set colorSpace to THREE.SRGBColorSpace for display-color images.
   * Use on only one black hole per scene. Enable lensScene to also lens objects.
   */
  backgroundTexture?: THREE.Texture;
}

function positive(name: string, value: number): number {
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error(`Black hole ${name} must be finite and positive`);
  }
  return value;
}

function vector(name: string, value: Coordinate3d): THREE.Vector3 {
  if (value.length !== 3 || !value.every(Number.isFinite)) {
    throw new Error(`Black hole ${name} must contain three finite coordinates`);
  }
  return new THREE.Vector3(value[0], value[1], value[2]);
}

function rotationSpeed(value: number): number {
  if (!Number.isFinite(value) || value < 0) {
    throw new Error(
      'Black hole disk rotationSpeed must be finite and nonnegative',
    );
  }
  return value;
}

function diskAspectRatio(value: number): number {
  if (!Number.isFinite(value) || value < 0.02 || value > 0.3) {
    throw new Error('Black hole disk aspectRatio must be between 0.02 and 0.3');
  }
  return value;
}

/**
 * A stationary Schwarzschild black hole, with GPU null-geodesic ray tracing.
 * Models light around an isolated non-spinning, uncharged mass; it does not
 * change Spacekit's Kepler orbits or simulate accretion hydrodynamics.
 * Requires WebGL 2 and highp fragment precision.
 */
export class BlackHole implements SimulationObject {
  private readonly id: string;
  private readonly simulation: Simulation;
  private readonly unitsPerAu: number;
  private readonly radiusAu: number;
  private readonly epochJd: number;
  private animationSpeed: number;
  private animationOffsetSeconds = 0;
  private readonly mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  private disposed = false;
  private sceneCapture?: BlackHoleSceneCapture;

  constructor(id: string, options: BlackHoleOptions, simulation: Simulation) {
    this.id = id;
    this.simulation = simulation;
    this.radiusAu = schwarzschildRadiusAu(options.massSolar);
    const context = simulation.getContext();
    this.unitsPerAu = positive('unitsPerAu', context.options.unitsPerAu ?? 1);
    this.epochJd = simulation.getJd();
    const position = vector('position', options.position ?? [0, 0, 0]);
    const normal = vector('diskNormal', options.diskNormal ?? [0, 0, 1]);
    positive('diskNormal length', normal.length());
    normal.normalize();
    const disk = options.accretionDisk || {};
    this.animationSpeed = rotationSpeed(disk.rotationSpeed ?? 1);
    const inner = positive('disk innerRadius', disk.innerRadius ?? 3);
    const outer = positive('disk outerRadius', disk.outerRadius ?? 12);
    if (inner < 3 || outer <= inner) {
      throw new Error(
        'Black hole disk requires 3 <= innerRadius < outerRadius',
      );
    }
    const temperature = positive('disk temperature', disk.temperature ?? 6500);
    const opticalDepth = positive('disk opticalDepth', disk.opticalDepth ?? 2);
    const aspectRatio = diskAspectRatio(disk.aspectRatio ?? 0.025);
    const turbulence = disk.turbulence ?? 0.65;
    if (!Number.isFinite(turbulence) || turbulence < 0 || turbulence > 1) {
      throw new Error('Black hole disk turbulence must be between 0 and 1');
    }
    const exposure = positive('exposure', options.exposure ?? 1);
    if (options.lensScene) this.assertSceneLensingAvailable();
    if (
      options.quality !== undefined &&
      ['low', 'high'].indexOf(options.quality) < 0
    ) {
      throw new Error('Black hole quality must be low or high');
    }
    const renderer = context.objects.renderer;
    if (renderer.capabilities.getMaxPrecision('highp') !== 'highp') {
      throw new Error('Black holes require highp fragment precision');
    }
    const rotation = new THREE.Matrix4().makeRotationFromQuaternion(
      new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 0, 1),
        normal,
      ),
    );
    const diskToWorld = new THREE.Matrix3().setFromMatrix4(rotation);
    const material = new THREE.ShaderMaterial({
      vertexShader: BLACK_HOLE_VERTEX,
      fragmentShader: BLACK_HOLE_FRAGMENT,
      defines: {
        RAY_STEPS: options.quality === 'low' ? 768 : 1024,
        RAY_STEP: options.quality === 'low' ? '0.04' : '0.02',
        VOLUME_STEP: options.quality === 'low' ? '0.05' : '0.025',
        VOLUME_SAMPLES: options.quality === 'low' ? 2 : 4,
      },
      uniforms: {
        inverseProjection: { value: new THREE.Matrix4() },
        cameraWorld: { value: new THREE.Matrix4() },
        viewProjection: { value: new THREE.Matrix4() },
        center: { value: new THREE.Vector3() },
        worldToDisk: { value: diskToWorld.clone().transpose() },
        diskToWorld: { value: diskToWorld },
        horizonRadius: {
          value: positive(
            'scaled horizon radius',
            this.radiusAu * this.unitsPerAu,
          ),
        },
        diskInner: { value: inner },
        diskOuter: { value: outer },
        diskEnabled: { value: options.accretionDisk !== false },
        temperature: { value: temperature },
        diskOpticalDepth: { value: opticalDepth },
        diskAspectRatio: { value: aspectRatio },
        diskTurbulence: { value: turbulence },
        exposure: { value: exposure },
        timeSeconds: { value: 0 },
        lightCrossingSeconds: {
          value: (this.radiusAu * METERS_PER_AU) / SPEED_OF_LIGHT,
        },
        hasBackground: { value: !!options.backgroundTexture },
        backgroundTexture: { value: options.backgroundTexture ?? null },
        lensScene: { value: false },
        sceneDepthHierarchy: { value: false },
        sceneBoundsFine: { value: null },
        sceneBoundsCoarse: { value: null },
        transparentBoundsFine: { value: null },
        transparentBoundsCoarse: { value: null },
        surfaceBoundsFine: { value: null },
        surfaceBoundsCoarse: { value: null },
        sceneColor: { value: null },
        sceneDepth: { value: null },
        sceneTransparent: { value: null },
        sceneTransparentDepth: { value: null },
        sceneHasTransparent: { value: false },
        sceneSurfaces: { value: null },
        sceneSurfaceDepth: { value: null },
        sceneHasSurfaces: { value: false },
        sceneViewProjection: { value: new THREE.Matrix4() },
        sceneSize: { value: new THREE.Vector2() },
        sceneDepthRange: { value: new THREE.Vector2() },
        sceneForeground: { value: null },
        sceneClearColor: { value: new THREE.Color() },
      },
      transparent: true,
      depthTest: true,
      depthWrite: true,
      toneMapped: false,
    });
    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    this.mesh.name = id;
    this.mesh.userData.spacekitBlackHole = true;
    this.mesh.position.copy(position.multiplyScalar(this.unitsPerAu));
    // The shader projects a full-screen quad, independent of its world position.
    this.mesh.frustumCulled = false;
    const centerClip = new THREE.Vector4();
    this.mesh.onBeforeRender = (renderer, scene, camera) => {
      const uniforms = material.uniforms;
      uniforms.inverseProjection.value.copy(camera.projectionMatrix).invert();
      uniforms.cameraWorld.value.copy(camera.matrixWorld);
      uniforms.viewProjection.value.multiplyMatrices(
        camera.projectionMatrix,
        camera.matrixWorldInverse,
      );
      this.mesh.getWorldPosition(uniforms.center.value);
      if (uniforms.lensScene.value && this.sceneCapture) {
        const center = uniforms.center.value;
        centerClip
          .set(center.x, center.y, center.z, 1)
          .applyMatrix4(uniforms.viewProjection.value);
        this.sceneCapture.render(renderer, scene, camera, centerClip.w);
        uniforms.sceneDepthHierarchy.value =
          this.sceneCapture.hasDepthHierarchy;
        uniforms.sceneClearColor.value.copy(this.sceneCapture.clearColor);
        uniforms.sceneHasTransparent.value = this.sceneCapture.hasTransparent;
        uniforms.sceneHasSurfaces.value = this.sceneCapture.hasSurfaces;
      }
    };
    this.setSceneLensingEnabled(options.lensScene ?? false);
    simulation.addObject(this);
  }

  getId(): string {
    return this.id;
  }

  get3jsObjects(): THREE.Object3D[] {
    return [this.mesh];
  }

  /** Physical radii in AU, independent of the simulation's display scale. */
  getPhysicalRadii(): BlackHoleRadii {
    return {
      eventHorizonAu: this.radiusAu,
      photonSphereAu: 1.5 * this.radiusAu,
      iscoAu: 3 * this.radiusAu,
      shadowImpactParameterAu: SCHWARZSCHILD_CRITICAL_IMPACT * this.radiusAu,
    };
  }

  setPosition(position: Coordinate3d): void {
    this.mesh.position.copy(
      vector('position', position).multiplyScalar(this.unitsPerAu),
    );
  }

  update(jd: number): void {
    this.mesh.material.uniforms.timeSeconds.value =
      (jd - this.epochJd) * 86400 * this.animationSpeed +
      this.animationOffsetSeconds;
  }

  /** Change the disk animation multiplier without a phase jump; does not spin the black hole. */
  setRotationSpeed(value: number): void {
    const speed = rotationSpeed(value);
    const elapsed = (this.simulation.getJd() - this.epochJd) * 86400;
    this.animationOffsetSeconds += elapsed * (this.animationSpeed - speed);
    this.animationSpeed = speed;
    this.update(this.simulation.getJd());
  }

  /** Change the chosen outer gas boundary, in Schwarzschild radii. */
  setDiskOuterRadius(value: number): void {
    const outer = positive('disk outerRadius', value);
    const uniforms = this.mesh.material.uniforms;
    if (outer <= uniforms.diskInner.value) {
      throw new Error('Black hole disk outerRadius must exceed innerRadius');
    }
    uniforms.diskOuter.value = outer;
  }

  /** Adjust the atmosphere without recreating the disk or resetting its animation. */
  setDiskAspectRatio(value: number): void {
    this.mesh.material.uniforms.diskAspectRatio.value = diskAspectRatio(value);
  }

  setDiskEnabled(enabled: boolean): void {
    this.mesh.material.uniforms.diskEnabled.value = enabled;
  }

  /** Toggle scene distortion without changing the disk, sky or simulation time. */
  setSceneLensingEnabled(enabled: boolean): void {
    if (this.disposed) return;
    const material = this.mesh.material;
    if (enabled) {
      this.assertSceneLensingAvailable();
      if (!this.sceneCapture) this.sceneCapture = new BlackHoleSceneCapture();
      material.uniforms.sceneBoundsFine.value =
        this.sceneCapture.backgroundBounds.fine.texture;
      material.uniforms.sceneBoundsCoarse.value =
        this.sceneCapture.backgroundBounds.coarse.texture;
      material.uniforms.transparentBoundsFine.value =
        this.sceneCapture.transparentBounds.fine.texture;
      material.uniforms.transparentBoundsCoarse.value =
        this.sceneCapture.transparentBounds.coarse.texture;
      material.uniforms.surfaceBoundsFine.value =
        this.sceneCapture.surfaceBounds.fine.texture;
      material.uniforms.surfaceBoundsCoarse.value =
        this.sceneCapture.surfaceBounds.coarse.texture;
      material.uniforms.sceneColor.value = this.sceneCapture.background.texture;
      material.uniforms.sceneDepth.value =
        this.sceneCapture.background.depthTexture;
      material.uniforms.sceneTransparent.value =
        this.sceneCapture.transparent.texture;
      material.uniforms.sceneTransparentDepth.value =
        this.sceneCapture.transparent.depthTexture;
      material.uniforms.sceneSurfaces.value =
        this.sceneCapture.surfaces.texture;
      material.uniforms.sceneSurfaceDepth.value =
        this.sceneCapture.surfaces.depthTexture;
      material.uniforms.sceneViewProjection.value =
        this.sceneCapture.viewProjection;
      material.uniforms.sceneSize.value = this.sceneCapture.size;
      material.uniforms.sceneDepthRange.value = this.sceneCapture.depthRange;
      material.uniforms.sceneForeground.value =
        this.sceneCapture.foreground.texture;
      sceneLensOwners.set(this.simulation, this);
    } else if (sceneLensOwners.get(this.simulation) === this) {
      sceneLensOwners.delete(this.simulation);
    }
    // Keep the extra traversal code out of the standalone disk program;
    // unused branches can still increase GPU register pressure.
    if (material.uniforms.lensScene.value !== enabled) {
      if (enabled) material.defines.SCENE_LENSING = 1;
      else delete material.defines.SCENE_LENSING;
      material.needsUpdate = true;
    }
    material.uniforms.lensScene.value = enabled;
    material.depthTest = !enabled;
    material.depthWrite = !enabled;
    material.blending = enabled ? THREE.NoBlending : THREE.NormalBlending;
    // A supplied sky must render before transparent objects, which may not
    // write depth. The scene-compositing pass must render after those objects.
    this.mesh.renderOrder = enabled
      ? Number.MAX_SAFE_INTEGER
      : material.uniforms.hasBackground.value
      ? -1
      : 1000;
  }

  private assertSceneLensingAvailable(): void {
    if (!this.simulation.getContext().objects.renderer.capabilities.isWebGL2) {
      throw new Error('Black hole scene lensing requires WebGL 2');
    }
    const owner = sceneLensOwners.get(this.simulation);
    if (owner && owner !== this) {
      throw new Error('Only one black hole can lens the scene per simulation');
    }
  }

  /** Called by Simulation.removeObject; caller-owned sky textures are preserved. */
  removalCleanup(): void {
    if (this.disposed) return;
    this.disposed = true;
    if (sceneLensOwners.get(this.simulation) === this) {
      sceneLensOwners.delete(this.simulation);
    }
    this.sceneCapture?.dispose();
    this.mesh.geometry.dispose();
    this.mesh.material.dispose();
  }

  /** Remove from the scene and release GPU resources. Safe to call repeatedly. */
  dispose(): void {
    this.simulation.removeObject(this);
  }
}
