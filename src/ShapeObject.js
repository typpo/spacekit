import { SpaceObject } from './SpaceObject';

const deg2rad = Math.PI / 180;
const rad2deg = 180 / Math.PI;

function polarToCartesian(angleV, angleH, radius) {
  // From https://gamedev.stackexchange.com/questions/164806/combine-rotation-xz-horizontal-with-yz-vertical-math-formula
  const phi = (90 * deg2rad) - angleV;
  const theta = angleH + (180 * deg2rad);
  return [
    -(radius * Math.sin(phi) * Math.sin(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.cos(theta),
  ];
}

function wikipedia(l, b, r) {
  // See also https://en.wikipedia.org/wiki/Ecliptic_coordinate_system#Rectangular_coordinates
  const lRad = l;
  const bRad = b;
  return [
    r * Math.cos(bRad) * Math.cos(lRad),
    r * Math.cos(bRad) * Math.sin(lRad),
    r * Math.sin(bRad),
  ];
}

THREE.Object3D.prototype.rotateAroundWorldAxis = function() {
  // https://stackoverflow.com/questions/31953608/rotate-object-on-specific-axis-anywhere-in-three-js-including-outside-of-mesh

  // rotate object around axis in world space (the axis passes through point)
  // axis is assumed to be normalized
  // assumes object does not have a rotated parent

  var q = new THREE.Quaternion();

  return function rotateAroundWorldAxis( point, axis, angle ) {

    q.setFromAxisAngle( axis, angle );

    this.applyQuaternion( q );

    this.position.sub( point );
    this.position.applyQuaternion( q );
    this.position.add( point );

    return this;

  }

}();

export class ShapeObject extends SpaceObject {
  /**
   * @param {Object} options.shape Shape specification
   * @param {String} options.shape.url Path to shapefile
   * @param {Number} options.shape.color Color of shape materials. Default 0xcccccc
   * @param {boolean} options.shape.enableRotation Show rotation of object
   * @param {Number} options.shape.rotationSpeed Factor that determines
   * @param {Object} options.shape.debug Debug options
   * @param {boolean} options.shape.debug.showAxes Show axes
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
    this._eclipticOrigin = undefined;

    // Offset of axis angle
    this._axisRotationAngleOffset = 0;
    this._axisOfRotation = undefined;

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
          this._asteroidMaterials.push(material);
        }
      });

      const parent = new THREE.Object3D();
      parent.add(object);

      if (this._options.debug && this._options.debug.showAxes) {
        this.getAxes().forEach(axis => parent.add(axis));

        const gridHelper = new THREE.GridHelper(3, 3, 0xff0000, 0xffeeee);
        gridHelper.geometry.rotateX(Math.PI / 2);
        parent.add(gridHelper);
      }

      this._obj = parent;

      // Initialize the rotation at 0,0,0.
      this.initRotation();

      // Then move the object to its position.
      const pos = this._options.position;
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
  }

  initRotation() {
    // Formula
    // https://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_description

    // Testing this asteroid:
    // http://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_asteroid_detail&asteroid_id=1504
    // Model 2691
    const PI = Math.PI;

    // Cacus
    // http://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_asteroid_detail&asteroid_id=1046
    // http://astro.troja.mff.cuni.cz/projects/asteroids3D/php.php?script=db_sky_projection&model_id=1863&jd=2443568.0

    // Latitude
    const lambda = 251 * deg2rad;

    // Longitude
    const beta = -63 * deg2rad;

    // Other
    const P = 3.755067;
    const YORP = 1.9e-8;
    const JD = 2443568.0;
    const JD0 = 2443568.0;
    const phi0 = 0 * deg2rad;

    // Asteroid rotation
    //this._obj.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), lambda);
    //this._obj.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), beta);

    // Adjust Z axis according to time.
    const zAdjust = phi0 + 2 * PI / P * (JD - JD0) + 1/2 * YORP * Math.pow(JD - JD0, 2);
    //this._obj.rotateZ(zAdjust);
    this._obj.rotateY(PI/2 - beta);
    this._obj.rotateZ(lambda);

    const eclipticOrigin = new THREE.Object3D();
    /*
    // Set up ecliptic
    const geometry = new THREE.SphereGeometry(0.05, 32, 32);
    const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    const pointOfAries = new THREE.Mesh( geometry, material );
    //pointOfAries.position.set(5, 0, 0);
    eclipticOrigin.add(pointOfAries);
    eclipticOrigin.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), lambda);
    eclipticOrigin.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), -beta);

    eclipticOrigin.updateMatrixWorld();
    const poleProjectionPoint = new THREE.Vector3();
    pointOfAries.getWorldPosition(poleProjectionPoint);
    */
    this._eclipticOrigin = eclipticOrigin;
    //this._obj.lookAt(poleProjectionPoint);

    //this._obj.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), zAdjust + PI);
  }

  getAxes() {
    return [
      this.getAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(3, 0, 0), 0xff0000),
      this.getAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 3, 0), 0x00ff00),
      this.getAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 3), 0x0000ff),
    ];
  }

  getAxis(src, dst, color) {
    const geom = new THREE.Geometry()
    const mat = new THREE.LineBasicMaterial({ linewidth: 3, color: color });

    geom.vertices.push(src.clone());
    geom.vertices.push(dst.clone());

    const axis = new THREE.Line(geom, mat, THREE.LineSegments);
    axis.computeLineDistances();
    return axis;
  }

  /**
   * Gets the THREE.js objects that represent this SpaceObject.
   * @return {Array.<THREE.Object>} A list of THREE.js objects
   */
  get3jsObjects() {
    const ret = super.get3jsObjects();
    ret.push(this._obj);
    ret.push(this._eclipticOrigin);
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
    if (this._axisOfRotation) {
      //this._obj.rotateOnAxis(this._axisOfRotation, 0.01);
    }
    //this._obj.rotateZ(0.015)
    //this._obj.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), 0.01);
    // TODO(ian): Update position if there is an associated orbit
  }
}
