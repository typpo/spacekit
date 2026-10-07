export const BLACK_HOLE_VERTEX = `
varying vec2 screenPosition;
void main() {
  screenPosition = position.xy;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

export const BLACK_HOLE_FRAGMENT = `
precision highp float;
varying vec2 screenPosition;
uniform mat4 inverseProjection;
uniform mat4 cameraWorld;
uniform mat4 viewProjection;
uniform vec3 center;
uniform mat3 worldToDisk;
uniform mat3 diskToWorld;
uniform float horizonRadius;
uniform float diskInner;
uniform float diskOuter;
uniform bool diskEnabled;
uniform float temperature;
uniform float diskOpticalDepth;
uniform float diskAspectRatio;
uniform float diskTurbulence;
uniform float exposure;
uniform float timeSeconds;
uniform float lightCrossingSeconds;
uniform bool hasBackground;
uniform sampler2D backgroundTexture;
const float PI = 3.141592653589793;
bool sampledSky;
vec2 skyUv;
vec3 emittedLight;
float transmission;
float firstDiskDistance;
bool captured;

float hash(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}
float noise(vec3 p) {
  vec3 cell = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash(cell), hash(cell + vec3(1,0,0)), f.x),
        mix(hash(cell + vec3(0,1,0)), hash(cell + vec3(1,1,0)), f.x), f.y),
    mix(mix(hash(cell + vec3(0,0,1)), hash(cell + vec3(1,0,1)), f.x),
        mix(hash(cell + vec3(0,1,1)), hash(cell + vec3(1,1,1)), f.x), f.y), f.z);
}

// Long orbital lanes with smaller knots, coherent through the vertical column.
// The density pattern is advected by the local orbital rate, so it shears.
// Cylindrical coordinates keep the texture seamless at the azimuth boundary.
float gasPattern(float radius, float angle, float generation) {
  vec3 p = vec3(cos(angle) * 2.5, sin(angle) * 2.5, radius * 3.2);
  p += hash(vec3(mod(generation, 1024.0), 7.1, 0.0)) * vec3(17.3, 59.1, 31.7);
  float lanes = 0.55 * noise(p) + 0.30 * noise(p * 2.03) + 0.15 * noise(p * 4.07);
  return exp(4.0 * (lanes - 0.5));
}

float gasDensity(float radius, float angle, float omega) {
  if (diskTurbulence == 0.0) return 1.0;
  // Replace turbulent structures smoothly after half an inner orbit. Advecting
  // one fixed texture forever winds it into subpixel rings at artistic speeds.
  // Both generations follow the local orbital rate during their lifetimes.
  float lifetime = PI * sqrt(2.0 * diskInner * diskInner * diskInner);
  float cycle = timeSeconds / (lightCrossingSeconds * lifetime);
  float generation = floor(cycle);
  float age = fract(cycle);
  float current = gasPattern(radius, angle - omega * age * lifetime, generation);
  float previous = gasPattern(radius, angle - omega * (age + 1.0) * lifetime, generation - 1.0);
  return mix(1.0, mix(previous, current, smoothstep(0.0, 1.0, age)), diskTurbulence);
}

vec2 derivative(vec2 state) {
  return vec2(state.y, 1.5 * state.x * state.x - state.x);
}
vec2 advanceRay(vec2 state, float h) {
  vec2 a = derivative(state);
  vec2 b = derivative(state + 0.5 * h * a);
  vec2 c = derivative(state + 0.5 * h * b);
  vec2 d = derivative(state + h * c);
  return state + h * (a + 2.0 * b + 2.0 * c + d) / 6.0;
}

// Planck radiance at representative RGB wavelengths, relative to 6500 K.
// This is a three-band display approximation, not a spectral camera model.
vec3 thermalColor(float kelvin) {
  vec3 exponent = vec3(22135.0, 26160.0, 31973.0);
  return (exp(exponent / 6500.0) - 1.0) /
    (exp(min(exponent / max(kelvin, 100.0), vec3(80.0))) - 1.0);
}

// Integrate emission and absorption over a proper path length in the static
// Schwarzschild frame. A prescribed n=3 polytropic atmosphere has density
// proportional to (1 - z^2/(9H^2))^3 and temperature to (1 - z^2/(9H^2)).
// Its rms density height is H, and its surface is at |z|=3H.
void sampleGas(vec3 point, float pathLength, vec3 origin, float lapse, float angularMomentumZ) {
  float radius = length(point.xy);
  if (!diskEnabled || radius <= diskInner || radius >= diskOuter) return;
  float scaleHeight = diskAspectRatio * radius;
  float height = point.z / scaleHeight;
  if (abs(height) >= 3.0) return;
  float verticalTemperature = 1.0 - height * height / 9.0;
  float sphericalRadius = length(point);
  float metric = 1.0 - 1.0 / sphericalRadius;
  float omega = inversesqrt(2.0 * radius * radius * radius);
  // Off the midplane this is a prescribed rotating atmosphere, not a circular
  // geodesic. Normalize its four-velocity using the local Schwarzschild metric.
  float shift = sqrt(metric - omega * omega * radius * radius) /
    (lapse * (1.0 + omega * angularMomentumZ));
  float density = gasDensity(radius, atan(point.y, point.x), omega);
  float edge = 1.0 - smoothstep(mix(diskInner, diskOuter, 0.55), diskOuter, radius);
  float ratio = diskInner / radius;
  float flux = pow(ratio, 3.0) * (1.0 - sqrt(ratio)) / 0.05665278;
  float observedTemperature = temperature * pow(max(flux * density, 0.0), 0.25) * verticalTemperature * shift;
  // Integral of (1-z^2/(9H^2))^3 over [-3H, 3H] is 96H/35.
  float extinction = diskOpticalDepth * density * edge * edge * edge *
    pow(verticalTemperature, 3.0) * 35.0 / (96.0 * scaleHeight);
  // Convert the static-frame path length to the co-moving gas frame.
  float gasPathLength = pathLength * sqrt(metric) / (shift * lapse);
  float opacity = 1.0 - exp(-extinction * gasPathLength);
  emittedLight += transmission * opacity * thermalColor(observedTemperature);
  transmission *= 1.0 - opacity;
  if (transmission < 0.999 && firstDiskDistance < 0.0) firstDiskDistance = length(point - origin);
}

void writeDepth(vec3 ray, float distanceInRadii) {
  vec3 apparentPosition = cameraPosition + ray * distanceInRadii * horizonRadius;
  vec4 clip = viewProjection * vec4(apparentPosition, 1.0);
  float depth = clip.z / clip.w * 0.5 + 0.5;
  if (clip.w <= 0.0 || depth < 0.0 || depth > 1.0) discard;
  gl_FragDepthEXT = depth;
}

void escaped(vec3 direction) {
  if (!hasBackground) {
    if (firstDiskDistance < 0.0) discard;
    return;
  }
  vec3 worldDirection = normalize(diskToWorld * direction);
  skyUv = vec2(atan(worldDirection.y, worldDirection.x) / (2.0 * PI) + 0.5,
                asin(clamp(worldDirection.z, -1.0, 1.0)) / PI + 0.5);
  sampledSky = true;
  gl_FragDepthEXT = 1.0;
}

void traceRay() {
  vec4 cameraRay = inverseProjection * vec4(screenPosition, 1.0, 1.0);
  vec3 worldRay = normalize((cameraWorld * vec4(cameraRay.xyz, 0.0)).xyz);
  vec3 origin = worldToDisk * (cameraPosition - center) / horizonRadius;
  vec3 ray = worldToDisk * worldRay;
  float observerRadius = length(origin);
  // A static observer cannot exist on or inside the horizon.
  if (observerRadius <= 1.00001) {
    captured = true;
    gl_FragDepthEXT = 0.0;
    return;
  }
  vec3 radial = origin / observerRadius;
  float radialCosine = clamp(dot(radial, ray), -1.0, 1.0);
  vec3 tangent = ray - radialCosine * radial;
  float sine = length(tangent);
  float lapse = sqrt(1.0 - 1.0 / observerRadius);
  float impact = observerRadius * sine / lapse;
  // Without a sky to lens, skip rays that cannot enter the emitting region.
  float bound = diskEnabled ? diskOuter * sqrt(1.0 + 9.0 * diskAspectRatio * diskAspectRatio) : 3.0;
  if (!hasBackground && observerRadius > bound &&
      (radialCosine >= 0.0 || impact > bound / sqrt(1.0 - 1.0 / bound))) discard;
  if (sine < 0.000001) {
    // The angular coordinate degenerates on radial rays. Integrate these in
    // radius instead, including the gas in front of an exactly edge-on observer.
    if (diskEnabled) {
      float direction = radialCosine < 0.0 ? -1.0 : 1.0;
      float radius = direction < 0.0 ? min(observerRadius, bound) : max(observerRadius, diskInner);
      for (int j = 0; j < RAY_STEPS; j++) {
        if ((direction < 0.0 && radius <= diskInner) || (direction > 0.0 && radius >= bound)) break;
        float dr = min(diskAspectRatio * 0.5, VOLUME_STEP) * radius;
        dr = min(dr, direction < 0.0 ? radius - diskInner : bound - radius);
        for (int sampleIndex = 0; sampleIndex < VOLUME_SAMPLES; sampleIndex++) {
          float midpoint = radius + direction * dr * (float(sampleIndex) + 0.5) / float(VOLUME_SAMPLES);
          sampleGas(radial * midpoint, dr / (float(VOLUME_SAMPLES) * sqrt(1.0 - 1.0 / midpoint)), origin, lapse, 0.0);
        }
        radius += direction * dr;
        if (transmission < 0.001) {
          writeDepth(worldRay, firstDiskDistance);
          return;
        }
      }
    }
    if (radialCosine < 0.0) {
      captured = true;
      writeDepth(worldRay, firstDiskDistance >= 0.0 ? firstDiskDistance : observerRadius - 1.0);
    } else {
      escaped(ray);
      if (firstDiskDistance >= 0.0) writeDepth(worldRay, firstDiskDistance);
    }
    return;
  }
  tangent /= sine;
  float angularMomentumZ = impact * cross(radial, tangent).z;
  vec2 state = vec2(1.0 / observerRadius, -radialCosine / impact);
  float phi = 0.0;
  for (int i = 0; i < RAY_STEPS; i++) {
    float h = RAY_STEP;
    // Resolve a nearby capture/escape without stepping far past u=0 or u=1.
    h = min(h, 0.1 / max(abs(state.y), 1.0));
    if (diskEnabled) {
      if (state.x < 1.0 / bound && state.y > 0.0) {
        // Land at the enclosing volume before reducing the spatial step size.
        h = min(h, (1.0 / bound - state.x) / state.y + 0.00001);
      } else if (state.x >= 1.0 / bound && state.x < 1.0 / diskInner) {
        // Bound the proper distance per step, so shallow and radial rays cannot
        // skip the atmosphere. H/R is a world-space size, independent of pixels.
        float speed = sqrt(1.0 + pow(state.y / state.x, 2.0) / (1.0 - state.x));
        h = min(h, min(diskAspectRatio * 0.5, VOLUME_STEP) / speed);
      }
    }
    vec2 next = advanceRay(state, h);
    if (next.x <= 0.0) {
      // Refine the asymptote rather than using the overshot step angle.
      float escapePhi = phi + h * state.x / (state.x - next.x);
      escaped(radial * cos(escapePhi) + tangent * sin(escapePhi));
      if (firstDiskDistance >= 0.0) writeDepth(worldRay, firstDiskDistance);
      return;
    }
    if (diskEnabled && max(state.x, next.x) >= 1.0 / bound && min(state.x, next.x) < 1.0 / diskInner) {
      // Geodesic accuracy alone does not resolve narrow density lanes. Integrate
      // emission at several positions along the curved segment to avoid a
      // regular comb pattern where single midpoint samples skip between lanes.
      for (int sampleIndex = 0; sampleIndex < VOLUME_SAMPLES; sampleIndex++) {
        float offset = h * (float(sampleIndex) + 0.5) / float(VOLUME_SAMPLES);
        vec2 midpoint = advanceRay(state, offset);
        float midPhi = phi + offset;
        float midRadius = 1.0 / midpoint.x;
        vec3 point = (radial * cos(midPhi) + tangent * sin(midPhi)) * midRadius;
        float pathLength = h * midRadius * sqrt(1.0 + pow(midpoint.y / midpoint.x, 2.0) / max(1.0 - midpoint.x, 0.00001)) / float(VOLUME_SAMPLES);
        sampleGas(point, pathLength, origin, lapse, angularMomentumZ);
      }
      if (transmission < 0.001) {
        writeDepth(worldRay, firstDiskDistance);
        return;
      }
    }
    phi += h;
    state = next;
    if (state.x >= 1.0) {
      captured = true;
      writeDepth(worldRay, firstDiskDistance >= 0.0 ? firstDiskDistance : observerRadius - 1.0);
      return;
    }
  }
  // Unresolved near-critical rays remain dark instead of leaking background.
  captured = true;
  writeDepth(worldRay, firstDiskDistance >= 0.0 ? firstDiskDistance : observerRadius);
}

void main() {
  sampledSky = false;
  skyUv = vec2(0.0);
  emittedLight = vec3(0.0);
  transmission = 1.0;
  firstDiskDistance = -1.0;
  captured = false;
  traceRay();
  // Compute texture derivatives after the variable-length integration loop.
  // Sampling inside that loop makes implicit mip selection undefined.
  vec3 sky = texture2D(backgroundTexture, skyUv).rgb;
  float alpha = captured || sampledSky ? 1.0 : 1.0 - transmission;
  if (alpha < 0.0001) discard;
  vec3 color = 1.0 - exp(-exposure * emittedLight / alpha);
  if (sampledSky) color += transmission * pow(sky, vec3(2.2));
  gl_FragColor = vec4(pow(clamp(color, 0.0, 1.0), vec3(1.0 / 2.2)), alpha);
}
`;
