import { SpaceObject } from './SpaceObject';

export class ShapeObject extends SpaceObject {

  /**
   * @param {Object} options.shape Shape specification
   * @param {String} options.shape.url Path to shapefile
   * @param {Number} options.shape.color Color of shape materials. Default 0xcccccc
   * @param {boolean} options.shape.enableRotation Show rotation of object
   * @see SpaceObject
   */
  constructor(id, options, contextOrSimulation) {
    super(id, options, contextOrSimulation, false /* autoInit */);
    if (!options.shape) {
      console.error('ShapeObject requires an options.shape object');
      return;
    }

    // The THREE.js object
    this._obj = undefined;

    // Keep track of materials that comprise this object.
    this._asteroidMaterials = [];

    this.init();
  }

  init() {
    const manager = new THREE.LoadingManager();
    manager.onProgress = (item, loaded, total) => {
      console.info(this._id, item, 'loading progress:', loaded, '/', total);
    };
    const loader = new THREE.OBJLoader(manager);
    loader.load(this._options.shape.url, object => {
      object.traverse(child => {
        if (child instanceof THREE.Mesh) {
          const material = new THREE.MeshLambertMaterial({color: this._options.shape.color || 0xcccccc});
          child.material = material;
          child.geometry.computeFaceNormals();
          child.geometry.computeVertexNormals();
          child.geometry.computeBoundingBox();
          this._asteroidMaterials.push(material);
        }
      });
      this._obj = object;
      // TODO(ian): Figure out initial rotation and spin

      if (this._simulation) {
        // Add it all to visualization.
        this._simulation.addObject(this, false /* noUpdate */);
      }
    });
  }

  get3jsObjects() {
    const ret = super.get3jsObjects();
    ret.push(this._obj);
    return ret;
  }

  update() {
    if (this._obj && this._options.enableRotation) {
      // For now, just rotate on X axis.
      this._obj.rotation.x += (0.2*(Math.PI / 180));
      this._obj.rotation.x %= 360;
    }
  }
}
