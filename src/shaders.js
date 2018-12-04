const ORBIT_SHADER_FRAGMENT = `
    varying vec3 vColor;
    varying float vLocked;
    varying float vPlanet;
    uniform sampler2D planet_texture;
    uniform sampler2D small_roid_texture;
    uniform sampler2D small_roid_circled_texture;

    void main() {
      if (vLocked < .5) {
        if (vPlanet < .5) {
          gl_FragColor = vec4(vColor, 1.0) * texture2D(small_roid_texture,
            vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y));
        }
        else {
          gl_FragColor = vec4(vColor, 1.0) * texture2D(planet_texture,
            vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y));
        }
      } else {
        gl_FragColor = vec4(vColor, 1.0) * texture2D(small_roid_circled_texture,
          vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y));
      }
    }
`;

const ORBIT_SHADER_VERTEX = `
    #define pi 3.141592653589793238462643383279

    attribute vec3 value_color;
    varying vec3 vColor;

    attribute float size;

    uniform float earth_i;
    uniform float earth_om;

    uniform float jed;

    attribute float a;
    attribute float e;
    attribute float i;
    attribute float o;
    attribute float ma;
    attribute float n;
    attribute float w;
    attribute float epoch;

    attribute float highlight_above_ecliptic;
    attribute float highlight_below_ecliptic;

    attribute float locked;
    attribute float is_planet;
    varying float vLocked;
    varying float vPlanet;

    vec3 getAstroPos() {
      float i_rad = i * pi/180.0;
      float o_rad = o * pi/180.0; // longitude of ascending node
      float p_rad = w * pi/180.0; // LONGITUDE of perihelion
      float ma_rad = ma * pi/180.0;

      // Compute mean motion from period.
      float period = sqrt(a * a * a) * 365.25;
      float n_rad = 2.0 * pi / period;

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
      float r = a * (1.0 - e*e) / (1.0 + e * cos(v)) * 50.;  // 50 pixels per AU

      // Compute heliocentric coords.
      float X = r * (cos(o_rad) * cos(v + p_rad - o_rad) - sin(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Y = r * (sin(o_rad) * cos(v + p_rad - o_rad) + cos(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Z = r * (sin(v + p_rad - o_rad) * sin(i_rad));
      return vec3(X, Y, Z);
    }

    void main() {
      vColor = value_color;
      vLocked = locked;
      vPlanet = is_planet;

      vec3 newpos = getAstroPos();
      if (newpos[2] > 0. && highlight_above_ecliptic > 0.) {
        vColor = vec3(255., 255., 255.) / vec3(255., 255., 255.);
        gl_PointSize = size * 2.;
      } else if (newpos[2] < 0. && highlight_below_ecliptic > 0.) {
        vColor = vec3(195., 195., 195.) / vec3(255., 255., 255.);
        gl_PointSize = size * 2.;
      } else {
        gl_PointSize = size;
      }
      vec4 mvPosition = modelViewMatrix * vec4(newpos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
    }
`;

