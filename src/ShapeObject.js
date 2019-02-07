import { SpaceObject } from './SpaceObject';

export class ShapeObject extends SpaceObject {
  /**
   * @param {Object} options.shape Shape specification
   * @param {String} options.shape.url Path to shapefile
   * @param {Number} options.shape.color Color of shape materials. Default 0xcccccc
   * @param {boolean} options.shape.enableRotation Show rotation of object
   * @param {Number} options.shape.rotationSpeed Factor that determines
   * rotation speed. Default 0.5
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

  /**
   * @private
   */
  init() {
    const manager = new THREE.LoadingManager();
    manager.onProgress = (item, loaded, total) => {
      console.info(this._id, item, 'loading progress:', loaded, '/', total);
    };
    const loader = new THREE.OBJLoader(manager);
    loader.load(this._options.shape.url, (object) => {
      object.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const material = new THREE.MeshLambertMaterial({ color: this._options.shape.color || 0xcccccc });
          child.material = material;
          child.geometry.computeFaceNormals();
          child.geometry.computeVertexNormals();
          child.geometry.computeBoundingBox();
          this._asteroidMaterials.push(material);
        }
      });
      const pos = this._options.position;
      if (pos) {
        object.position.set(pos[0], pos[1], pos[2]);
      }
      this._obj = object;
      // TODO(ian): Figure out initial rotation and spin

      if (this._simulation) {
        // Add it all to visualization.
        this._simulation.addObject(this, false /* noUpdate */);
      }

      this.initRotation();
      this._initialized = true;
    });

    // TODO(ian): Create an orbit if applicable
  }

  initRotation() {
    // Formula
    // https://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_description

    // Testing this asteroid:
    // http://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_asteroid_detail&asteroid_id=1504
    // Model 2691
    const PI = Math.PI;
    const cos = Math.cos;
    const sin = Math.sin;
    const deg2rad = Math.PI / 180;

    const lambda = 166 * deg2rad;
    const beta = 21 * deg2rad;
    const P = 15.7017;
    const YORP = 0;
    const JD0 = 2451162.0;
    const phi0 = 0 * deg2rad;

    // First term
    const R_z1 = new THREE.Matrix3();
    R_z1.set(cos(lambda), -sin(lambda), 0,
             sin(lambda),  cos(lambda), 0,
             0          ,  0          , 1);

    // Second term
    const y = (90 * deg2rad) - beta;
    const R_y = new THREE.Matrix3();
    R_y.set(cos(y) , 0, sin(y),
            0      , 1, 0,
            -sin(y), 0, cos(y));

    // Third term
    const z = phi0 + ((2 * PI) / P) * (JD0 - JD0);
    const R_z2 = new THREE.Matrix3();
    R_z2.set(cos(z), -sin(z), 0,
             sin(z),  cos(z), 0,
             0     ,  0     , 1);

    // Initial vertex coordinates
    const pos = this._obj.position;
    const r_ast = new THREE.Vector3(pos.x, pos.y, pos.z);

    // Multiply the terms
    console.log(R_z1, R_y, R_z2)
    const r_ecl = r_ast.applyMatrix3(R_z1.multiply(R_y).multiply(R_z2));
    console.log('ecl', r_ecl)

    this._obj.rotation.set(r_ecl.x, r_ecl.y, r_ecl.z);
  }

  calcRotation() {
    const z = phi0 + (2 * PI / P) * (JD0 - JD0) + 1/2 * YORP * Math.pow(JD0 - JD0, 2);
    const R_z = new THREE.Matrix3();
    R_z.set(cos(z), -sin(z), 0,
            sin(z),  cos(z), 0,
            0     ,  0     , 1);
    console.log(R_z)
  }

  /**
   * Gets the THREE.js objects that represent this SpaceObject.
   * @return {Array.<THREE.Object>} A list of THREE.js objects
   */
  get3jsObjects() {
    const ret = super.get3jsObjects();
    ret.push(this._obj);
    return ret;
  }

  /**
   * Updates the object and its label positions for a given time.
   * @param {Number} jed JED date
   */
  update() {
    if (this._obj && this._options.shape.enableRotation) {
      // For now, just rotate on X axis.
      const speed = this._options.shape.rotationSpeed || 0.5;
      this._obj.rotation.x += (speed * (Math.PI / 180));
      this._obj.rotation.x %= 360;
    }
    // TODO(ian): Update position if there is an associated orbit
  }
}
