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
    attribute float wBar;
    attribute float M;

    // Perihelion distance
    attribute float q;

    // CPU-computed term for parabolic orbits
    attribute float a0;

    // COSH Function (Hyperbolic Cosine)
    float cosh(float val) {
      float tmp = exp(val);
      float cosH = (tmp + 1.0 / tmp) / 2.0;
      return cosH;
    }

    // TANH Function (Hyperbolic Tangent)
    float tanh(float val) {
      float tmp = exp(val);
      float tanH = (tmp - 1.0 / tmp) / (tmp + 1.0 / tmp);
      return tanH;
    }

    // SINH Function (Hyperbolic Sine)
    float sinh(float val) {
      float tmp = exp(val);
      float sinH = (tmp - 1.0 / tmp) / 2.0;
      return sinH;
    }

    // Cube root helper that assumes param is positive
    float cbrt(float x) {
      return exp(log(x) / 3.0);
    }

    vec3 getPosNearParabolic() {
      // See https://stjarnhimlen.se/comp/ppcomp.html#17
      float b = sqrt(1.0 + a0 * a0);
      float W = cbrt(b + a0) - cbrt(b - a0);
      float f = (1.0 - e) / (1.0 + e);

      float a1 = 2.0 / 3.0 + (2.0 / 5.0) * W * W;
      float a2 = 7.0 / 5.0 + (33.0 / 35.0) * W * W + (37.0 / 175.0) * pow(W, 4.0);
      float a3 =
        W * W * (432.0 / 175.0 + (956.0 / 1125.0) * W * W + (84.0 / 1575.0) * pow(W, 4.0));

      float C = (W * W) / (1.0 + W * W);
      float g = f * C * C;
      float w = W * (1.0 + f * C * (a1 + a2 * g + a3 * g * g));

      // True anomaly
      float v = 2.0 * atan(w);
      // Heliocentric distance
      float r = (q * (1.0 + w * w)) / (1.0 + w * w * f);

      // Compute heliocentric coords.
      float i_rad = i;
      float o_rad = om;
      float p_rad = wBar;
      float X = r * (cos(o_rad) * cos(v + p_rad - o_rad) - sin(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Y = r * (sin(o_rad) * cos(v + p_rad - o_rad) + cos(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Z = r * (sin(v + p_rad - o_rad) * sin(i_rad));
      return vec3(X, Y, Z);
    }

    vec3 getPosHyperbolic() {
      float F0 = M;
      for (int count = 0; count < 100; count++) {
        float F1 = (M + e * (F0 * cosh(F0) - sinh(F0))) / (e * cosh(F0) - 1.0);
        float lastdiff = abs(F1 - F0);
        F0 = F1;

        if (lastdiff < 0.0000001) {
          break;
        }
      }
      float F = F0;

      float v = 2.0 * atan(sqrt((e + 1.0) / (e - 1.0)) * tanh(F / 2.0));
      float r = ${getScaleFactor().toFixed(
        1,
      )} * (a * (1.0 - e * e)) / (1.0 + e * cos(v));

      // Compute heliocentric coords.
      float i_rad = i;
      float o_rad = om;
      float p_rad = wBar;
      float X = r * (cos(o_rad) * cos(v + p_rad - o_rad) - sin(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Y = r * (sin(o_rad) * cos(v + p_rad - o_rad) + cos(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Z = r * (sin(v + p_rad - o_rad) * sin(i_rad));
      return vec3(X, Y, Z);
    }

    vec3 getPosEllipsoid() {
      float i_rad = i;
      float o_rad = om;
      float p_rad = wBar;

      // Estimate eccentric and true anom using iterative approximation (this
      // is normally an intergral).
      float E0 = M;
      float E1 = M + e * sin(E0);
      float lastdiff = abs(E1-E0);
      E0 = E1;

      for (int count = 0; count < 100; count++) {
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
      float r = ${getScaleFactor().toFixed(
        1,
      )} * a * (1.0 - e * e) / (1.0 + e * cos(v));

      // Compute heliocentric coords.
      float X = r * (cos(o_rad) * cos(v + p_rad - o_rad) - sin(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Y = r * (sin(o_rad) * cos(v + p_rad - o_rad) + cos(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Z = r * (sin(v + p_rad - o_rad) * sin(i_rad));
      return vec3(X, Y, Z);
    }

    vec3 getPos() {
      if (e > 0.9 && e < 1.2) {
        return getPosNearParabolic();
      } else if (e > 1.2) {
        return getPosHyperbolic();
      }
      return getPosEllipsoid();
    }

    void main() {
      vColor = fuzzColor;

      vec3 newpos = getPos() + origin;
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

export const ATMOSPHERE_SHADER_VERTEX = `
  uniform vec3 lightPos;

  varying vec2 vUv;
  varying vec3 vecPos;
  varying vec3 vecNormal;
  //varying vec3 vNormal;

  varying vec3 vViewLightPos;

  void main() {
    //vNormal = normalize(normalMatrix * normal);
    //gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;
    // Since the light is in camera coordinates,
    // I'll need the vertex position in camera coords too
    vecPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
    // That's NOT exacly how you should transform your
    // normals but this will work fine, since my model
    // matrix is pretty basic
    vecNormal = (modelViewMatrix * vec4(normal, 0.0)).xyz;
    vViewLightPos = (viewMatrix * vec4(lightPos, 1.0)).xyz;
    gl_Position = projectionMatrix * vec4(vecPos, 1.0);
  }
`;

// With help from https://stackoverflow.com/questions/43621274/how-to-correctly-set-lighting-for-custom-shader-material
export const ATMOSPHERE_SHADER_FRAGMENT = `
  uniform float c;
  uniform float p;
  uniform vec3 color;

  varying vec2 vUv;
  varying vec3 vecPos;
  varying vec3 vecNormal;
  varying vec3  vViewLightPos;

  void main() {
    float intensity = pow(c - dot(vecNormal, vec3(0.0, 0.0, 1.0)), p);

    vec4 addedLights = vec4(0.0, 0.0, 0.0, 1.0);
    vec3 lightDirection = normalize(vecPos - vViewLightPos);
    addedLights.rgb += clamp(dot(-lightDirection, vecNormal), 0.0, 1.0)
                       * 1.0 /* intensity */;
                       // * pointLights[i].color

    gl_FragColor = vec4(color, 1.0) * intensity * addedLights;
  }
`;

export const SPHERE_SHADER_VERTEX = `
  uniform vec3 lightPos;

  varying vec2 vUv;
  varying vec3 vViewPosition;
  varying vec3 vViewLightPos;
  varying vec3 vNormal;

  void main() {
    vUv = uv;
    vec4 vViewPosition4 = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = vViewPosition4.xyz;
    vViewLightPos = (viewMatrix * vec4(lightPos, 1.0)).xyz;
    vNormal = normalMatrix * normal;

    gl_Position = projectionMatrix * vViewPosition4;
  }
`;

export const SPHERE_SHADER_FRAGMENT = `
  uniform sampler2D sphereTexture;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec3 vViewLightPos;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 lightDir = normalize(vViewLightPos - vViewPosition);
    float lambertian = max(dot(normal, lightDir), 0.0);
    gl_FragColor = texture2D(sphereTexture, vUv) * vec4(vec3(1.0) * lambertian, 1.0);
  }
`;

export const RING_SHADER_VERTEX = `
  varying vec3 vPos;
  varying vec3 vWorldPosition;
  varying vec3 vNormal;

  void main() {
    vPos = position;
    vec4 worldPosition = (modelMatrix * vec4(position, 1.));
    gl_Position = projectionMatrix * viewMatrix * vec4(worldPosition.xyz, 1.);

    vNormal = normalMatrix * normal;
    vWorldPosition = worldPosition.xyz;
  }
`;

export const RING_SHADER_FRAGMENT = `
  uniform sampler2D ringTexture;
  uniform float innerRadius;
  uniform float outerRadius;
  uniform vec3 lightPos;

  varying vec3 vNormal;
  varying vec3 vPos;
  varying vec3 vWorldPosition;

  vec4 color() {
    vec2 uv = vec2(0);
    uv.x = (length(vPos) - innerRadius) / (outerRadius - innerRadius);
    if (uv.x < 0.0 || uv.x > 1.0) {
      discard;
    }

    vec4 pixel = texture2D(ringTexture, uv);
    return pixel;
  }

  vec3 shadow() {
    vec3 lightDir = normalize(vPos - lightPos);
    vec3 planetPos = vec3(0);

    vec3 ringPos = vPos - planetPos;
    float posDotLightDir = dot(ringPos, lightDir);
    float posDotLightDir2 = posDotLightDir * posDotLightDir;

    // TODO(ian): Generalize this line.
    float radius = 0.0389259903; // radius of saturn in coordinate system
    float radius2 = radius * radius;

    if (posDotLightDir > 0.0 && dot(ringPos, ringPos) - posDotLightDir2 < radius2) {
      return vec3(0.0);
    }
    return vec3(1.0);
  }

  vec3 lights() {
    vec3 lightDirection = normalize(vWorldPosition - lightPos);
    float c = 0.35 + max(0.0, dot(vNormal, lightDirection)) * 0.4;

    return vec3(c);
  }

  void main() {
    // NOTE: The order of multiplication matters here. color() may call
    // discard, which would cause problems on some Windows graphics drivers if
    // it is a left operand.
    // https://github.com/typpo/spacekit/issues/22
    gl_FragColor = vec4(lights() * shadow(), 1.0) * color();
  }
`;

export const BLACK_HOLE_SHADER_VERTEX = `
  varying vec3 vViewPosition;

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

/**
 * Ray traces light around a Schwarzschild black hole.
 *
 * All lengths are in units of the Schwarzschild radius, in a frame centered
 * on the black hole whose z axis is the accretion disk normal. The physics
 * mirrors src/BlackHolePhysics.ts, which is unit tested.
 */
export const BLACK_HOLE_SHADER_FRAGMENT = `
  #define MAX_STEPS 400
  #define SPECTRUM_SAMPLES 32

  const float STEP_FACTOR = 0.06;
  const float MIN_STEP = 0.005;
  const float MAX_STEP = 2.0;
  const float SPECTRUM_MIN_NM = 380.0;
  const float SPECTRUM_MAX_NM = 780.0;
  const float C2_NM_K = 1.438777e7;
  const float SQRT3 = 1.7320508;
  const float ISCO_RADIUS = 3.0;

  uniform samplerCube envMap;
  uniform vec3 cameraLocal;
  uniform mat3 viewToLocal;
  uniform mat3 localToWorld;
  uniform float lensRadius;
  uniform float lensFalloffStart;

  uniform bool diskEnabled;
  uniform float diskInnerRadius;
  uniform float diskOuterRadius;
  uniform float diskPeakTemperature;
  uniform float diskFluxMax;
  uniform float diskLuminanceRef;
  uniform float diskExposure;

  varying vec3 vViewPosition;

  // Remaining first-order deflection of a ray to infinity, given its distance
  // along the ray past closest approach and its impact parameter.
  float residualDeflection(float along, float b) {
    if (b <= 0.0) {
      return 0.0;
    }
    float s = along / sqrt(b * b + along * along);
    return (1.0 - 1.5 * s + 0.5 * s * s * s) / b;
  }

  vec3 bendTowardCenter(vec3 pos, vec3 dir, float angle) {
    vec3 perp = pos - dot(pos, dir) * dir;
    float len = length(perp);
    if (len <= 0.0) {
      return dir;
    }
    return cos(angle) * dir - sin(angle) * perp / len;
  }

  vec3 geodesicAcceleration(vec3 p, float h2) {
    float r2 = dot(p, p);
    return -1.5 * h2 * p / (r2 * r2 * sqrt(r2));
  }

  void geodesicStep(inout vec3 p, inout vec3 v, float h2, float dt) {
    vec3 k1v = geodesicAcceleration(p, h2);
    vec3 k1p = v;
    vec3 k2v = geodesicAcceleration(p + 0.5 * dt * k1p, h2);
    vec3 k2p = v + 0.5 * dt * k1v;
    vec3 k3v = geodesicAcceleration(p + 0.5 * dt * k2p, h2);
    vec3 k3p = v + 0.5 * dt * k2v;
    vec3 k4v = geodesicAcceleration(p + dt * k3p, h2);
    vec3 k4p = v + dt * k3v;
    p += dt / 6.0 * (k1p + 2.0 * k2p + 2.0 * k3p + k4p);
    v += dt / 6.0 * (k1v + 2.0 * k2v + 2.0 * k3v + k4v);
  }

  // Novikov-Thorne flux for a Schwarzschild black hole (units of rs).
  float novikovThorneFlux(float r) {
    if (r <= ISCO_RADIUS) {
      return 0.0;
    }
    float x = sqrt(2.0 * r);
    float xms = sqrt(2.0 * ISCO_RADIUS);
    float integral = x - xms - 0.5 * SQRT3 * (
      log((x - SQRT3) / (x + SQRT3)) - log((xms - SQRT3) / (xms + SQRT3)));
    return 1.5 * integral / (pow(x, 5.0) * (x * x - 3.0));
  }

  float lobe(float x, float mu, float s1, float s2) {
    float t = (x - mu) / (x < mu ? s1 : s2);
    return exp(-0.5 * t * t);
  }

  vec3 cieXyz(float nm) {
    return vec3(
      1.056 * lobe(nm, 599.8, 37.9, 31.0) +
        0.362 * lobe(nm, 442.0, 16.0, 26.7) -
        0.065 * lobe(nm, 501.1, 20.4, 26.2),
      0.821 * lobe(nm, 568.8, 46.9, 40.5) +
        0.286 * lobe(nm, 530.9, 16.3, 31.1),
      1.217 * lobe(nm, 437.0, 11.8, 36.0) +
        0.681 * lobe(nm, 459.0, 26.0, 13.8));
  }

  vec3 blackbodyXyz(float temperature) {
    vec3 xyz = vec3(0.0);
    float dnm = (SPECTRUM_MAX_NM - SPECTRUM_MIN_NM) / float(SPECTRUM_SAMPLES);
    for (int i = 0; i < SPECTRUM_SAMPLES; i++) {
      float nm = SPECTRUM_MIN_NM + (float(i) + 0.5) * dnm;
      float um = nm / 1000.0;
      float x = min(C2_NM_K / (nm * temperature), 80.0);
      float b = 1.0 / (um * um * um * um * um * (exp(x) - 1.0));
      xyz += b * cieXyz(nm) * dnm;
    }
    return xyz;
  }

  vec3 xyzToLinearSrgb(vec3 xyz) {
    return vec3(
      3.2406 * xyz.x - 1.5372 * xyz.y - 0.4986 * xyz.z,
      -0.9689 * xyz.x + 1.8758 * xyz.y + 0.0415 * xyz.z,
      0.0557 * xyz.x - 0.2040 * xyz.y + 1.0570 * xyz.z);
  }

  // Light from the disk at radius r reaching the camera, for a photon with
  // angular momentum per unit energy lambda about the disk axis.
  vec3 diskEmission(float r, float lambda) {
    float flux = novikovThorneFlux(r) / diskFluxMax;
    float emitted = diskPeakTemperature * pow(max(flux, 0.0), 0.25);
    // Gravitational redshift + time dilation + Doppler shift.
    float omega = sqrt(0.5 / (r * r * r));
    float g = sqrt(1.0 - 1.5 / r) / (1.0 - omega * lambda);
    // A blackbody at T, shifted by g, is observed as a blackbody at g * T.
    float observed = g * emitted;
    if (observed < 300.0) {
      return vec3(0.0);
    }
    vec3 rgb = max(xyzToLinearSrgb(blackbodyXyz(observed)), 0.0);
    return rgb / diskLuminanceRef * diskExposure;
  }

  void main() {
    vec3 dir = normalize(viewToLocal * normalize(vViewPosition));
    vec3 unlensedDir = dir;
    vec3 p = cameraLocal;

    if (length(cameraLocal) > lensRadius) {
      // Start the ray where it enters the lensing region, bent by the
      // gravity it felt on the way from the camera.
      float along = dot(cameraLocal, dir);
      vec3 closest = cameraLocal - along * dir;
      float b2 = dot(closest, closest);
      if (along > 0.0 || b2 >= lensRadius * lensRadius) {
        gl_FragColor = vec4(textureCube(envMap, localToWorld * dir).rgb, 1.0);
        return;
      }
      float b = sqrt(b2);
      p = closest - sqrt(lensRadius * lensRadius - b2) * dir;
      float bend = residualDeflection(along, b) - residualDeflection(dot(p, dir), b);
      dir = bendTowardCenter(p, dir, bend);
    }

    vec3 v = dir;
    vec3 angularMomentum = cross(p, v);
    float h2 = dot(angularMomentum, angularMomentum);
    float invB2 = 1.0 / max(h2, 1e-12) - 1.0 / pow(length(p), 3.0);
    float impactParameter = invB2 > 0.0 ? inversesqrt(invB2) : 0.0;
    // L_z / E of the photon travelling toward the camera (direction -v).
    float lambda = -impactParameter * angularMomentum.z / sqrt(max(h2, 1e-12));

    vec3 color = vec3(0.0);
    float transmittance = 1.0;
    bool escaped = false;

    for (int i = 0; i < MAX_STEPS; i++) {
      float r = length(p);
      if (r < 1.0) {
        break;
      }
      if (r > lensRadius && dot(p, v) > 0.0) {
        escaped = true;
        break;
      }
      vec3 prev = p;
      geodesicStep(p, v, h2, clamp(STEP_FACTOR * r, MIN_STEP, MAX_STEP));

      if (diskEnabled && prev.z * p.z <= 0.0 && prev.z != p.z) {
        vec3 hit = mix(prev, p, prev.z / (prev.z - p.z));
        float rHit = length(hit.xy);
        if (rHit >= diskInnerRadius && rHit <= diskOuterRadius) {
          // Optically thick disk, feathered at its outer edge.
          float alpha = 1.0 - smoothstep(0.85 * diskOuterRadius, diskOuterRadius, rHit);
          color += transmittance * alpha * diskEmission(rHit, lambda);
          transmittance *= 1.0 - alpha;
          if (transmittance < 0.004) {
            break;
          }
        }
      }
    }

    // Tone map and gamma encode the emitted light.
    color = pow(vec3(1.0) - exp(-color), vec3(1.0 / 2.2));

    if (escaped) {
      vec3 outDir = normalize(v);
      float along = dot(p, outDir);
      outDir = bendTowardCenter(p, outDir,
        residualDeflection(along, length(p - along * outDir)));

      // Only the inner part of the lensing region is exact. Ease the
      // deflection to zero at its edge so it joins the unlensed scene.
      float weight = 1.0 - smoothstep(lensFalloffStart * lensRadius, lensRadius, impactParameter);
      if (weight < 1.0) {
        float angle = acos(clamp(dot(unlensedDir, outDir), -1.0, 1.0));
        if (angle > 1e-6) {
          outDir = (sin((1.0 - weight) * angle) * unlensedDir +
            sin(weight * angle) * outDir) / sin(angle);
        }
      }
      color += transmittance * textureCube(envMap, localToWorld * outDir, -1.0).rgb;
    }

    gl_FragColor = vec4(color, 1.0);
  }
`;
