const ORBIT_SHADER_FRAGMENT = `
    varying vec3 vColor;
    uniform sampler2D texture;

    void main() {
      //gl_FragColor = vec4(
      //  vColor, 1.0) * texture2D(texture,
      //  vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y)
      //);

      gl_FragColor = vec4(vColor, 1.0);
      gl_FragColor = gl_FragColor * texture2D(texture, gl_PointCoord);
    }
`;

const ORBIT_SHADER_VERTEX = `
    uniform float jed;

    attribute vec3 fuzzColor;
    varying vec3 vColor;

    attribute float size;

    attribute float a;
    attribute float e;
    attribute float i;
    attribute float om;
    attribute float ma;
    attribute float n;
    attribute float w_bar;
    attribute float epoch;

    vec3 getAstroPos() {
      float i_rad = i;
      float o_rad = om;
      float p_rad = w_bar;
      float ma_rad = ma;
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

      // Compute radius vector.
      float r = a * (1.0 - e*e) / (1.0 + e * cos(v));

      // Compute heliocentric coords.
      float X = r * (cos(o_rad) * cos(v + p_rad - o_rad) - sin(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Y = r * (sin(o_rad) * cos(v + p_rad - o_rad) + cos(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Z = r * (sin(v + p_rad - o_rad) * sin(i_rad));
      return vec3(X, Y, Z);
    }

    void main() {
      vColor = fuzzColor;


      vec3 newpos = getAstroPos();
      vec4 mvPosition = modelViewMatrix * vec4(newpos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      gl_PointSize = size;
    }
`;
