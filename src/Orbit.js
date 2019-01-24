/**
 * A class that builds a visual representation of a Kepler orbit.
 * @param {Ephem} ephem The ephemerides that define this orbit.
 * @param {Object} options Various options.
 */
export class Orbit {
  constructor(ephem, options) {
    this._ephem = ephem;
    this._options = options || {};

    // Cached orbital points.
    this._points = null;

    // Cached ellipse.
    this._ellipse = null;
  }

  getOrbitPoints() {
    if (this._points) {
      return this._points;
    }

    const eph = this._ephem;

    const period = eph.get('period');
    const numSegments = Math.max(period / 10, 50);
    const step = period / numSegments;

    const pts = [];
    let prevPos;
    for (let time = 0; time < period; time += step) {
      const pos = this.getPositionAtTime(time);
      if (isNaN(pos[0]) || isNaN(pos[1]) || isNaN(pos[2])) {
        console.error('NaN position value - you may have bad data in the following ephemeris:');
        console.error(eph);
      }
      const vector = new THREE.Vector3(pos[0], pos[1], pos[2]);
      if (prevPos && Math.abs(prevPos[0] - pos[0])
                     + Math.abs(prevPos[1] - pos[1])
                     + Math.abs(prevPos[2] - pos[2]) > 120) {
        // Don't render bogus or very large ellipses.
        points.vertices = [];
        return points;
      }
      prevPos = pos;
      pts.push(vector);
    }
    pts.push(pts[0]);

    this._points = new THREE.Geometry();
    this._points.vertices = pts;

    return this._points;
  }

  getPositionAtTime(jed) {
    const pi = Math.PI;
    const sin = Math.sin;
    const cos = Math.cos;

    const eph = this._ephem;

    // Note: logic below must match the vertex shader.
    // This position calculation is used to create orbital ellipses.
    const e = eph.get('e');
    const a = eph.get('a');
    const i = eph.get('i', 'rad');

    // longitude of ascending node
    const o = eph.get('om', 'rad');

    // LONGITUDE of perihelion
    const p = eph.get('w_bar', 'rad');

    const ma = eph.get('ma', 'rad');
    let M;

    // Calculate mean anomaly at jed
    const n = eph.get('n', 'rad');
    const epoch = eph.get('epoch');
    const d = jed - epoch;
    M = ma + n * d;

    // Estimate eccentric and true anom using iterative approx
    let E0 = M;
    let lastdiff;
    do {
      const E1 = M + e * sin(E0);
      lastdiff = Math.abs(E1 - E0);
      E0 = E1;
    } while (lastdiff > 0.0000001);
    const E = E0;
    const v = 2 * Math.atan(Math.sqrt((1 + e) / (1 - e)) * Math.tan(E / 2));

    // Radius vector, in AU
    const r = a * (1 - e * e) / (1 + e * cos(v));

    // Heliocentric coords
    const X = r * (cos(o) * cos(v + p - o) - sin(o) * sin(v + p - o) * cos(i));
    const Y = r * (sin(o) * cos(v + p - o) + cos(o) * sin(v + p - o) * cos(i));
    const Z = r * (sin(v + p - o) * sin(i));
    return [X, Y, Z];
  }

  getEllipse() {
    if (!this._ellipse) {
      const pointGeometry = this.getOrbitPoints();
      this._ellipse = new THREE.Line(pointGeometry,
        new THREE.LineBasicMaterial({
          color: this._options.color,
        }), THREE.LineStrip);
    }
    return this._ellipse;
  }

  getLinesToEcliptic() {
    const points = this.getOrbitPoints();
    const geometry = new THREE.Geometry();

    points.vertices.forEach((vertex) => {
      geometry.vertices.push(vertex);
      geometry.vertices.push(new THREE.Vector3(vertex.x, vertex.y, 0));
    });

    return new THREE.LineSegments(
      geometry,
      new THREE.LineBasicMaterial({
        color: this._options.eclipticLineColor || 0x333333,
      }),
      THREE.LineStrip,
    );
  }

  getHexColor() {
    return this._ellipse.material.color.getHex();
  }

  setHexColor(hexVal) {
    return this._ellipse.material.color = new THREE.Color(hexVal);
  }

  getVisibility() {
    return this._ellipse.visible = false;
  }

  setVisibility(val) {
    return this._ellipse.visible = val;
  }
}
