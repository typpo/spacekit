export const ORBIT_SHADER_FRAGMENT = `
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

export const ORBIT_SHADER_VERTEX = `
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
    attribute float w;
    attribute float w_bar;
    attribute float epoch;

    attribute float sinOm;
    attribute float cosOm;
    attribute float sinW;
    attribute float cosW;
    attribute float sinI;
    attribute float cosI;

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

    vec3 getAstroPosFast() {
      float M1 = ma + (jed - epoch) * n;
      float theta = M1 + 2. * e * sin(M1);

      float cosT = cos(theta);

      float r = a * (1. - e * e) / (1. + e * cosT);
      float v0 = r * cosT;
      float v1 = r * sin(theta);

      /*
      float sinO = sin(om);
      float cosO = cos(om);
      float sinW = sin(w);
      float cosW = cos(w);
      float sinI = sin(i);
      float cosI = cos(i);
      */

      float X = v0 * (cosOm * cosW - sinOm * sinW * cosI) + v1 * (-1. * cosOm * sinW - sinOm * cosW * cosI);
      float Y = v0 * (sinOm * cosW + cosOm * sinW * cosI) + v1 * (-1. * sinOm * sinW + cosOm * cosW * cosI);
      float Z = v0 * (sinW * sinI) + v1 * (cosW * sinI);

      return vec3(X, Y, Z);
    }

    void main() {
      vColor = fuzzColor;

      //vec3 newpos = getAstroPosFast();
      //vec3 newpos = getAstroPos();
      vec3 newpos = vec3(3., 3., 3.);
      vec4 mvPosition = modelViewMatrix * vec4(newpos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      gl_PointSize = size;
    }
`;
