import * as THREE from 'three';

import { rescaleNumber } from './Scale';

/**
 * A simple wrapper for Three.js camera.
 */
export class Camera {
  /**
   * @param {Object} context The simulation context
   */
  constructor(context) {
    // TODO(ian): Accept either context or container
    this._context = context;

    this.init();
  }

  init() {
    const containerWidth = this._context.container.width;
    const containerHeight = this._context.container.height;
    this._camera = new THREE.PerspectiveCamera(
      50,
      containerWidth / containerHeight,
      rescaleNumber(0.00001),
      rescaleNumber(2000),
    );
  }

  /**
   * @returns {Object} The THREE.js camera object.
   */
  get3jsCamera() {
    return this._camera;
  }
}
