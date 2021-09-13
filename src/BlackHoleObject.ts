import * as THREE from 'three';

import {SphereObject} from './SphereObject';
import {BLACK_HOLE_SHADER_VERTEX, BLACK_HOLE_SHADER_FRAGMENT} from './shaders';

import type {SpaceObjectOptions} from './SpaceObject';
import type {Simulation} from './Simulation';

export class BlackHoleObject extends SphereObject {

  private uniforms: {
    time: { value: number; };
    eventHorizonRadius: { value: number; };
    resolution: { value: THREE.Vector2; };
    cameraPosLocal: { value: THREE.Vector3; };
    cameraUp: { value: THREE.Vector3; };
    cameraDirection: { value: THREE.Vector3; };
    blackHolePos: { value: THREE.Vector3; };
  } | undefined;

  constructor(id: string, options: SpaceObjectOptions, simulation: Simulation) {
    super(id, options, simulation);
  }

  override init(): boolean {
    const color = this._options.color ?? 0x404040;
    /*
    const material = new THREE.MeshBasicMaterial({
      color,
    });
     */
    this.uniforms = {
      time: { value: 0 },
      eventHorizonRadius: { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
      cameraPosLocal: { value: new THREE.Vector3() },
      cameraUp: { value: new THREE.Vector3() },
      cameraDirection: { value: new THREE.Vector3() },
      blackHolePos: { value: new THREE.Vector3() },
    };

    const uniforms = this.uniforms;
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: BLACK_HOLE_SHADER_VERTEX,
      fragmentShader: BLACK_HOLE_SHADER_FRAGMENT,
    });

    uniforms.time.value = this._context.simulation.getJd();

    const eventHorizonRadius = this.getScaledRadius();
    uniforms.eventHorizonRadius.value = eventHorizonRadius;

    uniforms.resolution.value.set(this._context.container.width, this._context.container.height);
    uniforms.cameraPosLocal.value.copy(this._context.objects.camera.get3jsCamera().position);
    uniforms.cameraUp.value.copy(this._context.objects.camera.get3jsCamera().up);
    uniforms.blackHolePos.value.set(this._position[0], this._position[1], this._position[2]);

    // https://stackoverflow.com/questions/14813902/three-js-get-the-direction-in-which-the-camera-is-looking
    this._context.objects.camera.get3jsCamera().getWorldDirection(uniforms.cameraDirection.value);

    const detailedObj = new THREE.LOD();
    const levelsOfDetail = this._options.levelsOfDetail || [
      { radii: 0, segments: 64 },
    ];

    const radius = eventHorizonRadius * 3.5;
    /*
    for (let i = 0; i < levelsOfDetail.length; i += 1) {
      const level = levelsOfDetail[i];
      const sphereGeometry = new THREE.SphereGeometry(
        radius,
        level.segments,
        level.segments,
      );

      const mesh = new THREE.Mesh(sphereGeometry, material);
      detailedObj.addLevel(mesh, radius * level.radii);
    }
    this._obj.add(detailedObj);
     */
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(radius, radius), material);
    this._obj.add(mesh);

    if (this._simulation) {
      // Add it all to visualization.
      this._simulation.addObject(this, false /* noUpdate */);
    }
    return true;
  }

  override update() {
    const uniforms = this.uniforms;
    if (!uniforms) {
      return;
    }
    uniforms.time.value = this._context.simulation.getJd();
    uniforms.cameraPosLocal.value.copy(this._context.objects.camera.get3jsCamera().position);
    uniforms.cameraUp.value.copy(this._context.objects.camera.get3jsCamera().up);
    uniforms.blackHolePos.value.set(this._position[0], this._position[1], this._position[2]);
    this._context.objects.camera.get3jsCamera().getWorldDirection(uniforms.cameraDirection.value);
  }
}
