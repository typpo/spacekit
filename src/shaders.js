import { getScaleFactor } from './Scale';

/**
 * @ignore
 */
export function getOrbitShaderFragment() {
  return `
    varying vec3 vColor;
    uniform sampler2D texture;

    void main() {
      gl_FragColor = vec4(vColor, 1.0) * texture2D(texture, gl_PointCoord);
    }
  `;
}

/**
 * @ignore
 */
export function getOrbitShaderVertex() {
  return `
    attribute vec3 fuzzColor;
    attribute vec3 origin;
    varying vec3 vColor;

    attribute float size;

    attribute float a;
    attribute float e;
    attribute float i;
    attribute float om;
    attribute float w;
    attribute float wBar;
    attribute float M;

    vec3 getAstroPos() {
      float i_rad = i;
      float o_rad = om;
      float p_rad = wBar;

      float adjusted_e = e;
      if (e >= 1.0) {
        adjusted_e = 0.9;
      }

      // Estimate eccentric and true anom using iterative approximation (this
      // is normally an intergral).
      float E0 = M;
      float E1 = M + adjusted_e * sin(E0);
      float lastdiff = abs(E1-E0);
      E0 = E1;
      for (int foo=0; foo < 100; foo++) {
        E1 = M + adjusted_e * sin(E0);
        lastdiff = abs(E1-E0);
        E0 = E1;
        if (lastdiff < 0.0000001) {
          break;
        }
      }

      float E = E0;
      float v = 2.0 * atan(sqrt((1.0+adjusted_e)/(1.0-adjusted_e)) * tan(E/2.0));

      // Compute radius vector.
      float r = ${getScaleFactor().toFixed(
        1,
      )} * a * (1.0 - adjusted_e*adjusted_e) / (1.0 + adjusted_e * cos(v));

      // Compute heliocentric coords.
      float X = r * (cos(o_rad) * cos(v + p_rad - o_rad) - sin(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Y = r * (sin(o_rad) * cos(v + p_rad - o_rad) + cos(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Z = r * (sin(v + p_rad - o_rad) * sin(i_rad));
      return vec3(X, Y, Z);
    }

    /*
    vec3 getAstroPosFast() {
      float M1 = ma + (jd - epoch) * n;
      float theta = M1 + 2. * e * sin(M1);

      float cosT = cos(theta);

      float r = a * (1. - e * e) / (1. + e * cosT);
      float v0 = r * cosT;
      float v1 = r * sin(theta);

      float sinOm = sin(om);
      float cosOm = cos(om);
      float sinW = sin(w);
      float cosW = cos(w);
      float sinI = sin(i);
      float cosI = cos(i);

      float X = v0 * (cosOm * cosW - sinOm * sinW * cosI) + v1 * (-1. * cosOm * sinW - sinOm * cosW * cosI);
      float Y = v0 * (sinOm * cosW + cosOm * sinW * cosI) + v1 * (-1. * sinOm * sinW + cosOm * cosW * cosI);
      float Z = v0 * (sinW * sinI) + v1 * (cosW * sinI);

      return vec3(X, Y, Z);
    }
    */

    void main() {
      vColor = fuzzColor;

      //vec3 newpos = getAstroPosFast() + origin;
      vec3 newpos = getAstroPos() + origin;
      vec4 mvPosition = modelViewMatrix * vec4(newpos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      gl_PointSize = size;
    }
  `;
}

export const STAR_SHADER_FRAGMENT = `
    varying vec3 vColor;

    void main() {
      float a = 1.0 - 2.0 * length(gl_PointCoord - vec2(0.5, 0.5));
      gl_FragColor = vec4(vColor, a);
    }
`;

export const STAR_SHADER_VERTEX = `
    attribute float size;
    varying vec3 vColor;

    void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size;
        gl_Position = projectionMatrix * mvPosition;
    }
`;

export const GENERIC_PARTICLE_SHADER_VERTEX = `
    attribute float size;
    attribute vec3 customColor;
    varying vec3 vColor;
    void main() {
      vColor = customColor;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = size * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
`;

export const GENERIC_PARTICLE_SHADER_FRAGMENT = `
    uniform vec3 color;
    uniform sampler2D texture;
    varying vec3 vColor;
    void main() {
      gl_FragColor = vec4(color * vColor, 1.0);
      gl_FragColor = gl_FragColor * texture2D(texture, gl_PointCoord);
      if (gl_FragColor.a < ALPHATEST) discard;
    }
`;
