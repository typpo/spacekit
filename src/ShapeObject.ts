import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import { RotatingObject } from './RotatingObject';

import type { Simulation } from './Simulation';
import type { SpaceObjectOptions } from './SpaceObject';

export class ShapeObject extends RotatingObject {
  private shapeObj: THREE.Object3D | undefined;

  private loadingPromise: Promise<THREE.Object3D>;

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
  constructor(id: string, options: SpaceObjectOptions, simulation: Simulation) {
    super(id, options, simulation, false /* autoInit */);
    if (!options.shape) {
      throw new Error('ShapeObject requires an options.shape object');
    }
    if (!options.shape?.shapeUrl) {
      throw new Error(
        'Must specify shape.shapeUrl when creating a ShapeObject',
      );
    }

    this.shapeObj = undefined;

    const manager = new THREE.LoadingManager();
    manager.onProgress = (item: string, loaded: number, total: number) => {
      console.info(this._id, item, 'loading progress:', loaded, '/', total);
    };
    this.loadingPromise = new Promise<THREE.Object3D>((resolve) => {
      const loader = new OBJLoader(manager);
      // TODO(ian): Make shapeurl follow assetpath logic.
      loader.load(options.shape!.shapeUrl!, (object) => {
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            const material = new THREE.MeshStandardMaterial({
              color: this._options.shape!.color || 0xcccccc,
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

        this.shapeObj = object;
        this._obj.add(object);

        if (this._simulation) {
          // Add it all to visualization.
          this._simulation.addObject(this, false /* noUpdate */);
        }

        this._initialized = true;
        resolve(this.shapeObj);
      });
    });

    // TODO(ian): Create an orbit if applicable
    super.init();
  }

  /**
   * Specifies the object that is used to compute the bounding box.
   * @return {THREE.Object3D} THREE.js object
   */
  override async getBoundingObject(): Promise<THREE.Object3D> {
    return this.loadingPromise;
  }
}
