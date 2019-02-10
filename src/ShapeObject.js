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
          child.geometry.scale(0.1, 0.1, 0.1);
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

      const pos = this._options.position;
      if (pos) {
        this._obj.position.set(pos[0], pos[1], pos[2]);
      }

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

    const pos = this._obj.position.clone();

    // 1998 XO94
    /*
    const lambda = 166 * deg2rad;
    const beta = 21 * deg2rad;
    const P = 15.7017;
    const YORP = 0;
    const JD0 = 2451162.0;
    const phi0 = 0 * deg2rad;
   */

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
    const JD0 = 2443568.0;
    const phi0 = 0 * deg2rad;

    // Longitude
    //this._obj.rotateZ(-lambda);

    // Latitude

    // sun:
    //this._obj.lookAt(new THREE.Vector3(0,0,0));
    // earth at equinox:
    //this._obj.lookAt(new THREE.Vector3(-0.9970896625010871, 0.006910224998151225, -0));
    //epoch:
    //this._obj.lookAt(new THREE.Vector3(-0.988737257248415, 0.11466818644242142, -0.00001709012305153333));
    //2443590:
    //this._obj.lookAt(new THREE.Vector3(-0.9668713915734256, -0.2615816918593993, 0.0000070019773527366985));
    //this._obj.rotateY(-PI/2);
    //this._obj.rotateX(-PI/2);

    //this._obj.rotateZ(lambda);
    //this._obj.rotateY(-((90*deg2rad) - beta));
    //this._obj.rotateY(beta)

    //this._obj.rotateZ(phi0 + 2 * PI / P * (2443568.0 - JD0));

    // World axis (ecliptic) rotation
    //this._obj.rotateAroundWorldAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0), -beta);
    //this._obj.rotateAroundWorldAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1), 90*deg2rad);

    // Rotate!
    const zAdjust = phi0 + 2 * PI / P * (2443568.0 - JD0);

    this._obj.rotateY(PI/2);
    this._obj.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), -beta);
    this._obj.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), lambda);

    //this._obj.rotateZ(zAdjust);

    //this._obj.rotateZ(90 * deg2rad);
    //this._obj.rotateY(-beta);
    //this._obj.rotation.set(0, -beta, 90 * deg2rad);
    //this._obj.position.set(pos.x, pos.y, pos.z);
    return;

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
    const z = phi0 + (2 * PI / P) * (JD0 - JD0) + 1/2 * YORP * Math.pow(JD0 - JD0, 2);
    const R_z2 = new THREE.Matrix3();
    R_z2.set(cos(z), -sin(z), 0,
             sin(z),  cos(z), 0,
             0     ,  0     , 1);

    // Initial vertex coordinates
    //const r_ast = new THREE.Vector3(pos.x, pos.y, pos.z).normalize();
    const r_ast = new THREE.Vector3(0.500100,-0.510089,0.234255).normalize();
    //const r_ast = new THREE.Vector3(0.499759,-0.513008,0.232744).normalize();
    //const r_ast = new THREE.Vector3(0.365975,-0.237092,-0.372104).normalize();

    // Multiply the terms
    const translation = R_z1.multiply(R_y).multiply(R_z2);
    console.log('translation', translation)
    const r_ecl = r_ast.clone().applyMatrix3(translation).normalize();
    //this._obj.rotation.set(finalVector.x, finalVector.y, finalVector.z);
    //this._obj.rotation.set(r_ecl.x, r_ecl.y, r_ecl.z);

    // Try to calculate angle
    console.log('r_ast', r_ast)
    console.log('r_ecl', r_ecl)

    // Set rotation on object's axis
    // https://github.com/mrdoob/three.js/issues/910

    // Convert to rectangular coords
    const rect = wikipedia(lambda, (90 * deg2rad) - beta, 1);
    //const rect = polarToCartesian(lambda, beta, 1);
    //

    // http://mathworld.wolfram.com/SphericalCoordinates.html
    // theta = longitude = lambda
    // phi = 90 - latitude = 90 - beta
    //const sphere = new THREE.Spherical(1, (90 * deg2rad) - beta /* latitude */ ,lambda /* longitude */);
    //const rect2 = new THREE.Vector3();
    //rect2.setFromSpherical(sphere);
    //this._obj.rotation.set(rect2.x, rect2.y, rect2.z);

    const rotationAxis = new THREE.Vector3(rect[0], rect[1], rect[2]).normalize();
    console.log('rotationAxis', rotationAxis)
    console.log('rectt', rect)

    //const quaternion = new THREE.Quaternion().setFromAxisAngle( axisOfRotation, angleOfRotation );

    //this._obj.rotateOnAxis(rotationAxis, phi0);
    this._axisOfRotation = rotationAxis;
    console.log(rotationAxis.x, rotationAxis.y, rotationAxis.z)

    this._obj.rotation.set(rotationAxis.x, rotationAxis.y, rotationAxis.z);

    /*
    this._obj.rotateX(rect[0]);
    this._obj.rotateY(rect[1]);
    this._obj.rotateZ(rect[2]);
   */
    console.log(this._obj)
  }

  getAxes() {
    return [
      this.getAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(3, 0, 0), 0xff9999),
      this.getAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 3, 0), 0x99ff99),
      this.getAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 3), 0x9999ff),
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
    //this._obj.rotateZ(0.01)
    // TODO(ian): Update position if there is an associated orbit
  }
}
