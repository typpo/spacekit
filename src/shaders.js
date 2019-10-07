import * as THREE from 'three';

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

      for ( int i = 0; i < 100; i ++ ) {
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

export const ATMOSPHERE_SHADER_VERTEX = `
  varying vec2 vUv;
  varying vec3 vecPos;
  varying vec3 vecNormal;
  //varying vec3 vNormal;

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
    gl_Position = projectionMatrix *
                  vec4(vecPos, 1.0);
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

#if NUM_POINT_LIGHTS > 0
  struct PointLight {
    vec3 position;
    vec3 color;
    float distance;
    float decay;
    int shadow;
    float shadowBias;
    float shadowRadius;
    vec2 shadowMapSize;
    float shadowCameraNear;
    float shadowCameraFar;
  };

  uniform PointLight pointLights[NUM_POINT_LIGHTS];
#endif
#if NUM_DIR_LIGHTS > 0
  struct DirectionalLight {
    vec3 direction;
    vec3 color;
    int shadow;
    float shadowBias;
    float shadowRadius;
    vec2 shadowMapSize;

    float distance;  // ?
  };

  uniform DirectionalLight directionalLights[NUM_DIR_LIGHTS];
#endif
#if NUM_SPOT_LIGHTS > 0
  struct SpotLight {
    vec3 position;
    vec3 direction;
    vec3 color;
    float distance;
    float decay;
    float coneCos;
    float penumbraCos;
    int shadow;
    float shadowBias;
    float shadowRadius;
    vec2 shadowMapSize;
  };

  uniform SpotLight spotLights[NUM_SPOT_LIGHTS];
#endif

  void main() {
    float intensity = pow(c - dot(vecNormal, vec3(0.0, 0.0, 1.0)), p);

    // Pretty basic lambertian lighting...
    vec4 addedLights = vec4(0.0, 0.0, 0.0, 1.0);
    #if NUM_POINT_LIGHTS > 0
      for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
          vec3 lightDirection = normalize(vecPos - pointLights[i].position);
          addedLights.rgb += clamp(dot(-lightDirection, vecNormal), 0.0, 1.0)
                             * pointLights[i].color
                             * 1.0 /* intensity */;
      }
    #endif
    #if NUM_DIR_LIGHTS > 0
      for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
        addedLights.rgb += clamp(dot(directionalLights[i].direction, vecNormal), 0.0, 1.0)
                           * directionalLights[i].color
                           * 1.0;
      }
    #endif
    #if NUM_SPOT_LIGHTS > 0
      for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
          vec3 lightDirection = normalize(vecPos - spotLights[i].position);
          addedLights.rgb += clamp(dot(-lightDirection, vecNormal), 0.0, 1.0)
                             * spotLights[i].color
                             * 1.0 /* intensity */;
      }
    #endif

    gl_FragColor = vec4(color, 1.0) * intensity * addedLights;
  }
`;

export const RING_SHADER_VERTEX = `
  varying vec3 vPos;
  varying vec3 vWorldPosition;
  varying vec3 vNormal;

  ${THREE.ShaderChunk['shadowmap_pars_vertex']}

  void main() {
    vPos = position;
    vec4 worldPosition = (modelMatrix * vec4(position, 1.));
    gl_Position = projectionMatrix * viewMatrix * vec4(worldPosition.xyz, 1.);

    vNormal = normalMatrix * normal;
    vWorldPosition = worldPosition.xyz;

    ${THREE.ShaderChunk['shadowmap_vertex']}
  }
`;

export const RING_SHADER_FRAGMENT = `
  uniform sampler2D ringTexture;
  uniform float innerRadius;
  uniform float outerRadius;

  varying vec3 vNormal;
  varying vec3 vPos;
  varying vec3 vWorldPosition;

  ${THREE.ShaderChunk['common']}
  ${THREE.ShaderChunk['packing']}
  ${THREE.ShaderChunk['bsdfs']}
  ${THREE.ShaderChunk['lights_pars_begin']}
  ${THREE.ShaderChunk['shadowmap_pars_fragment']}
  ${THREE.ShaderChunk['shadowmask_pars_fragment']}

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
    // TODO(ian): planet and sun position uniforms
    // sun position in saturn test
    vec3 lightPos = vec3(500.0, 500.0, 125.0);

    vec3 lightDir = normalize(vPos - lightPos);
    vec3 planetPos = vec3(0);

    vec3 ringPos = vPos - planetPos;
    float posDotLightDir = dot(ringPos, lightDir);
    float posDotLightDir2 = posDotLightDir * posDotLightDir;
    float radius = 0.0389259903; // radius of saturn in coordinate system
    float radius2 = radius * radius;
    if (posDotLightDir > 0.0 && dot(ringPos, ringPos) - posDotLightDir2 < radius2) {
      return vec3(0.0);
    }
    return vec3(1.0);
  }

  vec3 lights() {
    vec3 lightPos = vec3(500.0, 500.0, 125.0);
    vec3 lightDirection = normalize(vWorldPosition - lightPos);
    float c = 0.35 + max(0.0, dot(vNormal, lightDirection)) * 0.4;

    return vec3(c);
  }

  void main() {
    gl_FragColor = color() * vec4(lights() * shadow(), 1.0);
  }
`;
