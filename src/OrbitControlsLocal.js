import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class OrbitControlsLocal extends OrbitControls {
  constructor(realObject, domElement) {
    super(realObject, domElement);

    this.realObject = realObject;
    //Camera and Object3D have different forward direction:
    let placeholderObject = realObject.isCamera
      ? new THREE.PerspectiveCamera()
      : new THREE.Object3D();

    this.placeholderObject = placeholderObject;

    this.update();
  }

  update() {
    //This responds to changes made to realObject from outside the controls:
    const placeholderObject = this.placeholderObject;
    placeholderObject.position.copy(realObject.position);
    placeholderObject.quaternion.copy(realObject.quaternion);
    placeholderObject.scale.copy(realObject.scale);
    placeholderObject.up.copy(realObject.up);

    var retval = super.update();
    realObject.position.copy(placeholderObject.position);
    realObject.quaternion.copy(placeholderObject.quaternion);
    realObject.scale.copy(placeholderObject.scale);
    return retval;
  }

  set localTarget(v) {
    super.target = v;
  }

  get localTarget() {
    return super.target;
  }
}
