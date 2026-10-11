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
#ifdef SCENE_LENSING
const bool lensScene = true;
uniform highp usampler2D sceneBoundsFine;
uniform highp usampler2D sceneBoundsCoarse;
uniform highp usampler2D transparentBoundsFine;
uniform highp usampler2D transparentBoundsCoarse;
uniform highp usampler2D surfaceBoundsFine;
uniform highp usampler2D surfaceBoundsCoarse;
uniform sampler2D sceneColor;
uniform sampler2D sceneDepth;
uniform sampler2D sceneTransparent;
uniform sampler2D sceneTransparentDepth;
uniform bool sceneHasTransparent;
uniform sampler2D sceneSurfaces;
uniform sampler2D sceneSurfaceDepth;
uniform bool sceneHasSurfaces;
uniform mat4 sceneViewProjection;
uniform vec2 sceneSize;
uniform vec2 sceneDepthRange;
uniform float sceneTexelAngle;
uniform sampler2D sceneForeground;
#else
const bool lensScene = false;
#endif
uniform vec3 sceneClearColor;
const float PI = 3.141592653589793;
bool sampledSky;
vec2 skyUv;
vec3 escapedWorldDirection;
vec3 escapedWorldOrigin;
vec3 emittedLight;
float transmission;
float firstDiskDistance;
bool captured;
bool unrepresentableDepth;

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
  // Discarded after the trace: scene lensing takes screen-space derivatives,
  // which need every pixel of each 2x2 quad.
  if (clip.w <= 0.0 || depth < 0.0 || depth > 1.0) unrepresentableDepth = true;
  else gl_FragDepth = depth;
}

void escaped(vec3 direction, vec3 closestPoint) {
  if (!hasBackground && !lensScene) {
    if (firstDiskDistance < 0.0) discard;
    return;
  }
  vec3 worldDirection = normalize(diskToWorld * direction);
  escapedWorldDirection = worldDirection;
  escapedWorldOrigin = center + horizonRadius * (diskToWorld * closestPoint);
  skyUv = vec2(atan(worldDirection.y, worldDirection.x) / (2.0 * PI) + 0.5,
                asin(clamp(worldDirection.z, -1.0, 1.0)) / PI + 0.5);
  sampledSky = true;
  gl_FragDepth = 1.0;
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
    gl_FragDepth = 0.0;
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
  if (!hasBackground && !lensScene && observerRadius > bound &&
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
      escaped(ray, vec3(0.0));
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
      escaped(radial * cos(escapePhi) + tangent * sin(escapePhi),
        impact * (radial * sin(escapePhi) - tangent * cos(escapePhi)));
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

#ifdef SCENE_LENSING
// Rays from radially adjacent pixels bend in one plane through the camera, so
// their outgoing asymptotes project onto the same screen line. Up to
// LENS_RAYS sub-rays spread across a pixel's radial footprint therefore share
// one path, and every texel fetch along it.
#define LENS_RAYS 4
struct LensPath {
  vec2 start;      // texel coordinates of the first column's center
  vec2 step;       // texel offset between consecutive columns
  vec2 rowStep;    // offset to the second texel of a column: (0, 1) or (1, 0)
  float columns;   // index of the last column, or -1 when nothing is in view
  float tolerance; // depth change over four ray steps between columns
  int rays;
  // Hardware depth of the ray at column zero and its increase per column,
  // then the change of each per pixel of radial offset across the footprint.
  vec4 depth;
  vec4 bounds;     // smallest and largest depth, then slope, of all sub-rays
};

// Sub-ray offsets in pixels, evenly spaced across the pixel.
float rayOffset(int ray, int rays) {
  return (float(ray) + 0.5) / float(rays) - 0.5;
}

// Screen x/y and hardware depth are linear in the same projected-line
// parameter, so the asymptote is a line through the camera's depth image.
bool projectRay(vec4 origin, vec4 direction, out vec3 first, out vec3 delta) {
  first = vec3(0.0);
  delta = vec3(0.0);
  if (direction.w <= 0.0) return false;
  origin += direction * max(0.0, (sceneDepthRange.x - origin.w) / direction.w);
  first = origin.xyz / origin.w * 0.5 + 0.5;
  delta = direction.xyz / direction.w * 0.5 + 0.5 - first;
  return delta.z > 0.0;
}

// A projected ray's depth at the path's first column and its increase per
// column, measured along the path's major axis.
vec2 depthAlong(LensPath path, vec3 first, vec3 delta) {
  bool xMajor = path.rowStep.y > 0.0;
  float size = xMajor ? sceneSize.x : sceneSize.y;
  float along = xMajor ? delta.x : delta.y;
  along = along < 0.0 ? min(along, -0.00000001) : max(along, 0.00000001);
  return vec2(
    first.z + delta.z * ((xMajor ? path.start.x : path.start.y) / size - (xMajor ? first.x : first.y)) / along,
    delta.z * (xMajor ? path.step.x : path.step.y) / size / along);
}

// Adjacent texels show one continuous surface when their depths differ by
// less than four ray steps, or by less than a surface up to about 87 degrees
// from the line of sight changes across one cell. Hardware depth differences
// are relative distance differences scaled by 1 - depth.
const float SURFACE_SLOPE = 20.0;
float continuity(LensPath path, float depth) {
  return max(path.tolerance, (1.0 - depth) * sceneTexelAngle * SURFACE_SLOPE);
}

// The smallest texel depth continuous with a surface at the given depth.
float shallowest(LensPath path, float depth) {
  float slope = sceneTexelAngle * SURFACE_SLOPE;
  return min(depth - path.tolerance, (depth - slope) / (1.0 - slope));
}

// The smallest and largest depth of any sub-ray at a column.
vec2 rayDepths(LensPath path, float column) {
  return path.bounds.xy + column * (column < 0.0 ? path.bounds.wz : path.bounds.zw);
}

LensPath lensPath(vec4 origin, vec4 direction, vec4 originX, vec4 originY,
    vec4 directionX, vec4 directionY, bool differentiable, out vec4 directionRadial) {
  LensPath path;
  path.start = vec2(0.0);
  path.step = vec2(1.0, 0.0);
  path.rowStep = vec2(0.0, 1.0);
  path.columns = -1.0;
  path.tolerance = 0.0;
  path.rays = 1;
  path.depth = vec4(2.0, 1.0, 0.0, 0.0);
  path.bounds = vec4(2.0, 2.0, 1.0, 1.0);
  directionRadial = vec4(0.0);
  vec3 first, delta;
  if (!projectRay(origin, direction, first, delta)) return path;
  vec2 inverseDelta = mix(vec2(-1.0), vec2(1.0), step(vec2(0.0), delta.xy)) /
    max(abs(delta.xy), vec2(0.00000001));
  vec2 a = -first.xy * inverseDelta;
  vec2 b = (1.0 - first.xy) * inverseDelta;
  vec2 entry = min(a, b), exitPoint = max(a, b);
  float lo = max(0.0, max(entry.x, entry.y));
  float hi = min(1.0, min(exitPoint.x, exitPoint.y));
  if (lo > hi) return path;
  vec2 p0 = (first.xy + delta.xy * lo) * sceneSize;
  vec2 span = (first.xy + delta.xy * hi) * sceneSize - p0;
  bool xMajor = abs(span.x) >= abs(span.y);
  float major0 = xMajor ? p0.x : p0.y;
  float extent = xMajor ? span.x : span.y;
  float sense = extent < 0.0 ? -1.0 : 1.0;
  // Columns are texel centers along the major axis. Each holds the two
  // texels straddling the path, for linear interpolation across it.
  vec2 perTexel = abs(extent) > 0.000001 ? span / abs(extent) :
    (xMajor ? vec2(sense, 0.0) : vec2(0.0, sense));
  float count = abs(floor(major0 + extent) - floor(major0)) + 1.0;
  // Longer paths sample every k-th column to stay within the step budget.
  float stride = ceil(count / 1023.0);
  path.columns = floor((count - 1.0) / stride);
  path.start = p0 + perTexel * ((floor(major0) + 0.5 - major0) * sense);
  path.step = perTexel * stride;
  path.rowStep = xMajor ? vec2(0.0, 1.0) : vec2(1.0, 0.0);
  path.depth.xy = depthAlong(path, first, delta);
  path.tolerance = 4.0 * path.depth.y;
  // Sub-rays across the radial footprint, where it spans more than one texel
  // of the source image at either end of the path's depth range.
  vec2 radial = normalize(perTexel);
  vec4 originRadial = originX * radial.x + originY * radial.y;
  directionRadial = directionX * radial.x + directionY * radial.y;
  vec3 firstA, deltaA, firstB, deltaB;
  if (differentiable &&
      projectRay(origin - 0.5 * originRadial, direction - 0.5 * directionRadial, firstA, deltaA) &&
      projectRay(origin + 0.5 * originRadial, direction + 0.5 * directionRadial, firstB, deltaB)) {
    vec2 depths = vec2(first.z + delta.z * lo, first.z + delta.z * hi);
    vec2 tA = clamp((depths - firstA.z) / deltaA.z, 0.0, 1.0);
    vec2 tB = clamp((depths - firstB.z) / deltaB.z, 0.0, 1.0);
    float width = max(
      distance((firstA.xy + deltaA.xy * tA.x) * sceneSize, (firstB.xy + deltaB.xy * tB.x) * sceneSize),
      distance((firstA.xy + deltaA.xy * tA.y) * sceneSize, (firstB.xy + deltaB.xy * tB.y) * sceneSize));
    vec4 edges = vec4(depthAlong(path, firstA, deltaA), depthAlong(path, firstB, deltaB));
    // Sub-rays sample the source image at most one texel apart. Each keeps
    // the path, with its own depth along it, which must increase.
    vec2 perOffset = edges.zw - edges.xy;
    if (path.depth.y > 0.5 * abs(perOffset.y)) {
      path.rays = int(clamp(ceil(width - 0.05), 1.0, float(LENS_RAYS)));
      if (path.rays > 1) path.depth.zw = perOffset;
    }
  }
  path.bounds = vec4(path.depth.x - 0.5 * abs(path.depth.z), path.depth.x + 0.5 * abs(path.depth.z),
    path.depth.y - 0.5 * abs(path.depth.w), path.depth.y + 0.5 * abs(path.depth.w));
  return path;
}

// The two texels straddling the path at column n, with their linear weights.
void readColumn(sampler2D depths, LensPath path, float n, out vec2 depth, out vec2 weight, out ivec2 texel) {
  vec2 center = path.start + path.step * n;
  float across = dot(center, path.rowStep);
  float row = floor(across - 0.5);
  texel = ivec2(floor(center) * (1.0 - path.rowStep) + row * path.rowStep);
  ivec2 next = texel + ivec2(path.rowStep);
  ivec2 size = ivec2(sceneSize);
  depth = vec2(1.0);
  weight = vec2(row + 1.5 - across, across - 0.5 - row);
  if (all(greaterThanEqual(texel, ivec2(0))) && all(lessThan(texel, size))) {
    depth.x = texelFetch(depths, texel, 0).x;
  }
  if (weight.y > 0.0 && all(greaterThanEqual(next, ivec2(0))) && all(lessThan(next, size))) {
    depth.y = texelFetch(depths, next, 0).x;
  }
}

vec2 tileBounds(highp usampler2D bounds, vec2 tile) {
  ivec2 index = ivec2(tile);
  if (any(lessThan(index, ivec2(0))) || any(greaterThanEqual(index, textureSize(bounds, 0)))) {
    return vec2(1.0, 0.0);
  }
  return uintBitsToFloat(texelFetch(bounds, index, 0).rg);
}

// The last column in the tile at column n, and the depth bounds of the texels
// those columns read. The second texel of a column can lie in the next tile
// across the path.
vec3 tileAt(highp usampler2D bounds, float tileSize, LensPath path, float n) {
  vec2 center = path.start + path.step * n;
  vec2 tile = floor(center / tileSize);
  vec2 lower = tile * tileSize;
  vec2 exits = vec2(1e9);
  if (path.step.x != 0.0) exits.x = (lower.x + (path.step.x > 0.0 ? tileSize : 0.0) - center.x) / path.step.x;
  if (path.step.y != 0.0) exits.y = (lower.y + (path.step.y > 0.0 ? tileSize : 0.0) - center.y) / path.step.y;
  float last = clamp(n + ceil(min(exits.x, exits.y)) - 1.0, n, path.columns);
  float acrossFirst = dot(center, path.rowStep);
  float acrossLast = dot(path.start + path.step * last, path.rowStep);
  float tileLow = dot(lower, path.rowStep);
  vec2 range = tileBounds(bounds, tile);
  if (floor(min(acrossFirst, acrossLast) - 0.5) < tileLow) {
    vec2 below = tileBounds(bounds, tile - path.rowStep);
    range = vec2(min(range.x, below.x), max(range.y, below.y));
  }
  if (floor(max(acrossFirst, acrossLast) - 0.5) + 1.0 >= tileLow + tileSize) {
    vec2 above = tileBounds(bounds, tile + path.rowStep);
    range = vec2(min(range.x, above.x), max(range.y, above.y));
  }
  return vec3(last, range);
}

// The first column from which the rest of a tile entered at column n can be
// skipped. A surface crosses the rays in a cell only where one of its texels
// is deeper than the rays and another, continuous with it, is not. Neither
// remains once every texel of the tile is deeper than the rays at its last
// column, or once the rays pass its deepest texel.
float skipFrom(LensPath path, float n, vec3 tile) {
  if (tile.y == 1.0 || tile.y > rayDepths(path, tile.x).y) return n;
  return floor((tile.z - path.bounds.x) / path.bounds.z) + 2.0;
}

// Whether the previous column's texels can contribute to the next cell. A
// crossing from them, in either direction, needs them within the continuity
// tolerance of the rays.
bool previousIdle(LensPath path, float n, vec2 previousDepth) {
  float near = shallowest(path, rayDepths(path, n - 1.0).x);
  float far = rayDepths(path, n).y + continuity(path, rayDepths(path, n - 1.0).x);
  return all(bvec2(
    previousDepth.x >= 1.0 || previousDepth.x < near || previousDepth.x > far,
    previousDepth.y >= 1.0 || previousDepth.y < near || previousDepth.y > far));
}

// Infinitely distant captured light (stars, skybox) along an escaped
// direction: linear interpolation among texels without finite depth, so
// nearby geometry never leaks into the sky. Geometry hides the sky behind it.
vec4 distantSky(vec2 uv) {
  vec2 position = uv * sceneSize - 0.5;
  vec2 cell = floor(position);
  vec2 f = position - cell;
  vec4 weight = vec4((1.0 - f.x) * (1.0 - f.y), f.x * (1.0 - f.y), (1.0 - f.x) * f.y, f.x * f.y);
  vec4 sky = vec4(0.0);
  for (int i = 0; i < 4; i++) {
    ivec2 texel = ivec2(cell) + ivec2(i % 2, i / 2);
    if (all(greaterThanEqual(texel, ivec2(0))) && all(lessThan(texel, ivec2(sceneSize)))) {
      sky[i] = texelFetch(sceneDepth, texel, 0).x == 1.0 ? 1.0 : 0.0;
    }
  }
  if (sky == vec4(1.0)) return textureLod(sceneColor, uv, 0.0);
  weight *= sky;
  float total = dot(weight, vec4(1.0));
  if (total <= 0.0) return vec4(0.0);
  vec4 color = vec4(0.0);
  for (int i = 0; i < 4; i++) {
    if (weight[i] > 0.0) color += weight[i] * texelFetch(sceneColor, ivec2(cell) + ivec2(i % 2, i / 2), 0);
  }
  return color / total;
}

// Reconstruct one captured layer along the path, for every sub-ray. Between
// two columns, each surface is interpolated linearly in depth and color,
// across and along the path, then composited front to back. Edges and thin
// lines receive partial coverage instead of a binary hit. Light from another
// layer is inserted at its nearest depth. firstHit returns the nearest depth
// of all light, and opaqueAt where every sub-ray became opaque.
void sceneSample(sampler2D colors, sampler2D depths, highp usampler2D fineBounds,
    highp usampler2D coarseBounds, LensPath path, bool transparent, float limit,
    vec4 inserted[LENS_RAYS], float insertedAt,
    out vec4 light[LENS_RAYS], out float firstHit, out float opaqueAt) {
  bool pending[LENS_RAYS];
  for (int s = 0; s < LENS_RAYS; s++) {
    light[s] = vec4(0.0);
    pending[s] = insertedAt >= 0.0;
  }
  firstHit = -1.0;
  opaqueAt = 2.0;
  int remaining = path.rays;
  // Cells starting deeper than the limit cannot contribute.
  float lastColumn = min(path.columns, floor((min(limit, 1.0) - path.bounds.x) / path.bounds.z) + 1.0);
  ivec2 rowStep = ivec2(path.rowStep);
  vec2 previousDepth = vec2(1.0), previousWeight = vec2(0.0);
  ivec2 previousTexel = ivec2(0);
  float n = 0.0;
  // Per tile: last column, depth bounds, and the column it can be skipped from.
  vec4 coarse = vec4(-1.0), fine = vec4(-1.0);
  float coarseEntry = -1.0, fineEntry = -1.0;
  for (int i = 0; i < 1024; i++) {
    if (n > lastColumn) break;
    // Skip the rest of a tile whose depth bounds cannot meet the rays,
    // including once they pass its deepest texel. Keep the tile's last
    // column to seed the cell after it.
    if (n > coarse.x) {
      coarse.xyz = tileAt(coarseBounds, 64.0, path, n);
      coarse.w = skipFrom(path, n, coarse.xyz);
      coarseEntry = n;
    }
    float skipTo = -1.0, entry = coarseEntry;
    if (n >= coarse.w && n < coarse.x) skipTo = coarse.x;
    else {
      if (n > fine.x) {
        fine.xyz = tileAt(fineBounds, 8.0, path, n);
        fine.w = skipFrom(path, n, fine.xyz);
        fineEntry = n;
      }
      if (n >= fine.w && n < fine.x) skipTo = fine.x;
      entry = fineEntry;
    }
    // Within a tile, the previous column's texels are part of its bounds.
    if (skipTo > n && (n > entry || previousIdle(path, n, previousDepth))) {
      readColumn(depths, path, skipTo, previousDepth, previousWeight, previousTexel);
      n = skipTo + 1.0;
      continue;
    }
    vec2 currentDepth, currentWeight;
    ivec2 currentTexel;
    readColumn(depths, path, n, currentDepth, currentWeight, currentTexel);
    vec4 depth = vec4(previousDepth, currentDepth);
    vec4 weight = vec4(previousWeight, currentWeight);
    vec4 present = vec4(lessThan(depth, vec4(1.0)));
    if (present != vec4(0.0)) {
      // A surface can meet a ray in this cell only through a texel between
      // the rays' depths here, or one continuous with such a texel.
      vec4 open = present * step(shallowest(path, rayDepths(path, n - 1.0).x), depth) *
        step(depth, vec4(rayDepths(path, n).y));
      vec4 assigned = vec4(0.0);
      // Visit the cell's surfaces nearest first. Texels continuous with the
      // nearest remaining one belong to the same surface.
      for (int c = 0; c < 4; c++) {
        open *= 1.0 - assigned;
        if (open == vec4(0.0)) break;
        vec4 candidates = mix(vec4(2.0), depth, open);
        float seed = min(min(candidates.x, candidates.y), min(candidates.z, candidates.w));
        float tolerance = continuity(path, seed);
        vec4 own = present * (1.0 - assigned) * step(abs(depth - seed), vec4(tolerance));
        assigned = max(assigned, own);
        vec4 ownWeight = own * weight;
        vec2 coverage = vec2(ownWeight.x + ownWeight.y, ownWeight.z + ownWeight.w);
        if (coverage.x + coverage.y <= 0.0) continue;
        vec4 nearer = present * (1.0 - step(seed - tolerance, depth)) * weight;
        vec2 occluded = vec2(nearer.x + nearer.y, nearer.z + nearer.w);
        vec2 surface = vec2(dot(ownWeight.xy, depth.xy), dot(ownWeight.zw, depth.zw)) /
          max(coverage, vec2(0.000001));
        bool fetched = false;
        vec4 previousColor = vec4(0.0), currentColor = vec4(0.0);
        for (int s = 0; s < LENS_RAYS; s++) {
          if (s >= path.rays) break;
          if (light[s].a >= 0.999) continue;
          float offset = rayOffset(s, path.rays);
          float slope = path.depth.y + offset * path.depth.w;
          float rayDepth = path.depth.x + offset * path.depth.z + slope * (n - 1.0);
          float t;
          if (coverage.x > 0.0 && coverage.y > 0.0) {
            // A continuous surface: intersect its depth, interpolated between
            // the columns, where the ray passes through it in either
            // direction. A steep or double-sided surface can recede faster
            // than the ray and cross it from behind.
            float front = surface.x - rayDepth;
            float back = surface.y - rayDepth - slope;
            if (!(front > 0.0 && back <= 0.0) && !(front < 0.0 && back >= 0.0)) continue;
            t = front / (front - back);
          } else {
            // An edge or isolated texel, at its own depth.
            t = ((coverage.x > 0.0 ? surface.x : surface.y) - rayDepth) / slope;
            if (t < 0.0 || t >= 1.0) continue;
          }
          float hitDepth = rayDepth + slope * t;
          if (hitDepth > limit) continue;
          if (!fetched) {
            fetched = true;
            if (ownWeight.x > 0.0) previousColor += ownWeight.x * texelFetch(colors, previousTexel, 0);
            if (ownWeight.y > 0.0) previousColor += ownWeight.y * texelFetch(colors, previousTexel + rowStep, 0);
            if (ownWeight.z > 0.0) currentColor += ownWeight.z * texelFetch(colors, currentTexel, 0);
            if (ownWeight.w > 0.0) currentColor += ownWeight.w * texelFetch(colors, currentTexel + rowStep, 0);
          }
          // Premultiplied light with its coverage of the interpolation cell.
          vec4 source = mix(previousColor, currentColor, t);
          // An opaque surface continues behind nearer occluders. Its coverage
          // counts only the texels where it could have been visible.
          if (!transparent) {
            source /= max(max(1.0 - mix(occluded.x, occluded.y, t), source.a), 0.000001);
          }
          if (pending[s] && hitDepth > insertedAt) {
            light[s] += (1.0 - light[s].a) * inserted[s];
            pending[s] = false;
          }
          light[s] += (1.0 - light[s].a) * source;
          firstHit = firstHit < 0.0 ? hitDepth : min(firstHit, hitDepth);
          if (light[s].a >= 0.999) {
            remaining--;
            if (remaining == 0) opaqueAt = hitDepth;
          }
        }
      }
    }
    previousDepth = currentDepth;
    previousWeight = currentWeight;
    previousTexel = currentTexel;
    if (remaining == 0) break;
    n += 1.0;
  }
  for (int s = 0; s < LENS_RAYS; s++) {
    if (pending[s]) light[s] += (1.0 - light[s].a) * inserted[s];
  }
  if (insertedAt >= 0.0) firstHit = firstHit < 0.0 ? insertedAt : min(firstHit, insertedAt);
}
#endif

void main() {
  sampledSky = false;
  skyUv = vec2(0.0);
  escapedWorldDirection = vec3(0.0);
  escapedWorldOrigin = vec3(0.0);
  emittedLight = vec3(0.0);
  transmission = 1.0;
  firstDiskDistance = -1.0;
  captured = false;
  unrepresentableDepth = false;
  traceRay();
  // Compute texture derivatives after the variable-length integration loop.
  // Sampling inside that loop makes implicit mip selection undefined.
  vec3 sky = hasBackground ? texture2D(backgroundTexture, skyUv).rgb : sceneClearColor;
#ifdef SCENE_LENSING
  vec2 originalUv = screenPosition * 0.5 + 0.5;
  vec4 foreground = texture2D(sceneForeground, originalUv);
  vec4 rayOrigin = sceneViewProjection * vec4(escapedWorldOrigin, 1.0);
  vec4 rayDirection = sceneViewProjection * vec4(escapedWorldDirection, 0.0);
  // Ray differentials of the outgoing asymptote, taken while every pixel of
  // the 2x2 quad is still running. They hold only if all four escaped.
  vec4 originX = dFdx(rayOrigin), originY = dFdy(rayOrigin);
  vec4 directionX = dFdx(rayDirection), directionY = dFdy(rayDirection);
  bool differentiable = fwidth(sampledSky ? 1.0 : 0.0) == 0.0;
  if (unrepresentableDepth) discard;
  if (sampledSky) {
    vec4 directionRadial;
    LensPath path = lensPath(rayOrigin, rayDirection, originX, originY, directionX, directionY,
      differentiable, directionRadial);
    vec4 light[LENS_RAYS];
    for (int s = 0; s < LENS_RAYS; s++) light[s] = vec4(0.0);
    if (path.columns >= 0.0) {
      // Opaque surfaces first: where they become fully opaque bounds the
      // translucent layers. Each translucent layer then inserts the light
      // composited so far at its nearest distance.
      float firstHit = -1.0, opaqueAt = 2.0, unused;
      sceneSample(sceneColor, sceneDepth, sceneBoundsFine, sceneBoundsCoarse, path, false,
        2.0, light, -1.0, light, firstHit, opaqueAt);
      if (sceneHasSurfaces) {
        sceneSample(sceneSurfaces, sceneSurfaceDepth, surfaceBoundsFine, surfaceBoundsCoarse, path, true,
          opaqueAt, light, firstHit, light, firstHit, unused);
      }
      if (sceneHasTransparent) {
        sceneSample(sceneTransparent, sceneTransparentDepth, transparentBoundsFine, transparentBoundsCoarse, path, true,
          opaqueAt, light, firstHit, light, firstHit, unused);
      }
    }
    vec3 lensed = vec3(0.0);
    for (int s = 0; s < LENS_RAYS; s++) {
      if (s >= path.rays) break;
      // Do not repeat/clamp the edge of the camera image or bend a foreground
      // object into the background. The sky fills unavailable image samples.
      vec3 behind = sky;
      vec4 direction = rayDirection + rayOffset(s, path.rays) * directionRadial;
      vec2 uv = direction.xy / max(direction.w, 0.00001) * 0.5 + 0.5;
      if (direction.w > 0.0 && all(greaterThanEqual(uv, vec2(0.0))) && all(lessThanEqual(uv, vec2(1.0)))) {
        vec4 distant = distantSky(uv);
        behind = distant.rgb + (1.0 - distant.a) * behind;
      }
      lensed += light[s].rgb + (1.0 - light[s].a) * behind;
    }
    sky = lensed / float(path.rays);
  }
  vec3 color = 1.0 - exp(-exposure * emittedLight);
  if (sampledSky) color += transmission * max(sky, vec3(0.0));
  color = clamp(color, 0.0, 1.0);
  // Each capture contains only its side of the lens plane, so transparent
  // foregrounds do not bring an unwarped copy of the background with them.
  color = foreground.rgb + (1.0 - foreground.a) * color;
  gl_FragColor = vec4(color, 1.0);
#else
  if (unrepresentableDepth) discard;
  float alpha = captured || sampledSky ? 1.0 : 1.0 - transmission;
  if (alpha < 0.0001) discard;
  vec3 color = 1.0 - exp(-exposure * emittedLight / alpha);
  if (sampledSky) color += transmission * sky;
  gl_FragColor = vec4(clamp(color, 0.0, 1.0), alpha);
#endif
  #include <colorspace_fragment>
}
`;
