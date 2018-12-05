const ORBIT_SHADER_FRAGMENT = `
    varying vec3 vColor;
    uniform sampler2D defaultMap;

    void main() {
      gl_FragColor = vec4(
        vColor, 1.0) * texture2D(defaultMap,
        vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y)
      );
    }
`;

const ORBIT_SHADER_VERTEX = `
    attribute vec3 color;
    varying vec3 vColor;

    attribute float size;

    uniform float jed;

    attribute float a;
    attribute float e;
    attribute float i;
    attribute float o;
    attribute float ma;
    attribute float n;
    attribute float w;
    attribute float epoch;

    vec3 getAstroPos() {
      float i_rad = i;
      float o_rad = o;
      float p_rad = w;
      float ma_rad = ma;

      // Compute mean motion from period.
      float period = sqrt(a * a * a) * 365.25;
      float n_rad = n;

      float d = jed - epoch;
      float M = ma_rad + n_rad * d;

      // Estimate eccentric and true anom using iterative approximation (this
      // is normally an intergral).
      float E0 = M;
      float E1 = M + e * sin(E0);
      float lastdiff = abs(E1-E0);
      E0 = E1;
      for (int foo=0; foo < 25; foo++) {
        E1 = M + e * sin(E0);
        lastdiff = abs(E1-E0);
        E0 = E1;
        if (lastdiff < 0.0000001) {
          break;
        }
      }

      float E = E0;
      float v = 2.0 * atan(sqrt((1.0+e)/(1.0-e)) * tan(E/2.0));

      // Compute radius vector, in AU.
      float r = a * (1.0 - e*e) / (1.0 + e * cos(v));

      // Compute heliocentric coords.
      float X = r * (cos(o_rad) * cos(v + p_rad - o_rad) - sin(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Y = r * (sin(o_rad) * cos(v + p_rad - o_rad) + cos(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Z = r * (sin(v + p_rad - o_rad) * sin(i_rad));
      //return vec3(X, Y, Z);

      return vec3(3., 3., 3.);
    }

    void main() {
      vColor = color;

      if (size < .1) {
        gl_PointSize = 1.;
      } else {
        gl_PointSize = size;
      }

      vec3 newpos = getAstroPos();
      vec4 mvPosition = modelViewMatrix * vec4(newpos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
    }
`;

