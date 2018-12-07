
class Orbit {
  constructor(ephem, options) {
    this._ephem = ephem;
    this._options = options || {};
  }

  getOrbitPoints() {
    // TODO(ian): Use an ellipse instead of this.

    const eph = this._ephem;

    const period = eph.get('period');
    const limit = period + 1;

    let numSegments;
    if (eph.get('a') > 10) {
      numSegments = 10000;
    } else if (eph.get('e') > .2) {
      numSegments = 1200;
    } else {
      numSegments = 300;
    }

    const delta = Math.ceil(limit / numSegments);

		const pts = [];
		let time = 0;
    let prevPos;
    for (let i=0; i <= numSegments; i++, time += delta) {
      const pos = this.getPositionAtTime(time);
      if (isNaN(pos[0]) || isNaN(pos[1]) || isNaN(pos[2])) {
        console.error('NaN position value - you may have bad data in the following ephemeris:');
        console.error(eph);
      }
      const vector = new THREE.Vector3(pos[0], pos[1], pos[2]);
      if (prevPos && Math.abs(prevPos[0] - pos[0]) +
                     Math.abs(prevPos[1] - pos[1]) +
                     Math.abs(prevPos[2] - pos[2]) > 120) {
        // Don't render bogus or very large ellipses.
        points.vertices = [];
        return points;
      }
      prevPos = pos;
      pts.push(vector);
    }

    const points = new THREE.Geometry();
    points.vertices = pts;
    //points.computeLineDistances(); // Required for dotted lines.

    return points;
  }

  getPositionAtTime(jed) {
    const pi = Math.PI;
    const sin = Math.sin;
    const cos = Math.cos;

    const eph = this._ephem;

    // Note: logic below must match the vertex shader.
    // This position calculation is used to create orbital ellipses.
    var e = eph.get('e');
    var a = eph.get('a');
    var i = eph.get('i', 'rad');

    // longitude of ascending node
    var o = eph.get('om', 'rad');

    // LONGITUDE of perihelion
    var p = eph.get('w_bar', 'rad');

    var ma = eph.get('ma', 'rad');
    var M;

    // Calculate mean anomaly at jed
    var n = eph.get('n', 'rad');
    var epoch = eph.get('epoch');
    var d = jed - epoch;
    M = ma + n * d;

    // Estimate eccentric and true anom using iterative approx
    var E0 = M;
    var lastdiff;
    do {
      var E1 = M + e * sin(E0);
      lastdiff = Math.abs(E1-E0);
      E0 = E1;
    } while(lastdiff > 0.0000001);
    var E = E0;
    var v = 2 * Math.atan(Math.sqrt((1+e)/(1-e)) * Math.tan(E/2));

    // Radius vector, in AU
    var r = a * (1 - e*e) / (1 + e * cos(v));

    // Heliocentric coords
    var X = r * (cos(o) * cos(v + p - o) - sin(o) * sin(v + p - o) * cos(i))
    var Y = r * (sin(o) * cos(v + p - o) + cos(o) * sin(v + p - o) * cos(i))
    var Z = r * (sin(v + p - o) * sin(i))
    return [X, Y, Z];
  }

	getEllipse() {
			var pointGeometry = this.getOrbitPoints();
			return new THREE.Line(pointGeometry,
                            new THREE.LineDashedMaterial({
                              color: this._options.color,
                              linewidth: 1,
                              dashSize: 2,
                              gapSize: 0.5,
                            }), THREE.LineStrip);
	}
}
