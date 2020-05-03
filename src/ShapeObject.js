import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import { RotatingObject } from './RotatingObject';

export class ShapeObject extends RotatingObject {
  /**
   * @param {Object} options.shape Shape specification
   * @param {String} options.shape.type Type of object ("custom" or "sphere")
   * @param {String} options.shape.shapeUrl Path to shapefile if type is "custom"
   * @param {Number} options.shape.textureUrl Optional texture map for shape
   * @param {Number} options.shape.color Color of shape materials. Default 0xcccccc
   * @param {Number} options.shape.radius Radius, if applicable. Defaults to 1
   * @param {Object} options.shape.debug Debug options
   * @param {boolean} options.shape.debug.showAxes Show axes
   * rotation speed. Default 0.5
   * @see SpaceObject
   * @see RotatingObject
   */
  constructor(id, options, contextOrSimulation) {
    super(id, options, contextOrSimulation, false /* autoInit */);
    if (!options.shape) {
      console.error('ShapeObject requires an options.shape object');
      return;
    }

    this._shapeObj = undefined;

    this.init();
  }

  /**
   * @private
   */
  init() {
    const manager = new THREE.LoadingManager();
    manager.onProgress = (item, loaded, total) => {
      console.info(this._id, item, 'loading progress:', loaded, '/', total);
    };
    const loader = new OBJLoader(manager);
    // TODO(ian): Make shapeurl follow assetpath logic.
    loader.load(this._options.shape.shapeUrl, object => {
      object.traverse(child => {
        if (child instanceof THREE.Mesh) {
          const material = new THREE.MeshStandardMaterial({
            color: this._options.shape.color || 0xcccccc,
          });
          child.material = material;
          child.geometry.scale(0.05, 0.05, 0.05);
          /*
          child.geometry.computeFaceNormals();
          child.geometry.computeVertexNormals();
          child.geometry.computeBoundingBox();
         */
          this._materials.push(material);
        }
      });

      this._shapeObj = object;
      this._obj.add(object);

      // Move the object to its position.
      const pos =
        this._options.position || this.getPosition(this._simulation.getJd());
      if (pos) {
        this._obj.position.set(pos[0], pos[1], pos[2]);
      }

      if (this._simulation) {
        // Add it all to visualization.
        this._simulation.addObject(this, false /* noUpdate */);
      }

      this._initialized = true;
    });

    // TODO(ian): Create an orbit if applicable
    super.init();
  }

  /**
   * Specifies the object that is used to compute the bounding box.
   * @return {THREE.Object3D} THREE.js object
   */
  getBoundingObject() {
    return this._shapeObj;
  }
}
