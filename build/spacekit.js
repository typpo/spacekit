var Spacekit = (function (exports) {
  'use strict';

  var julian = convert;
  var toDate = convertToDate;

  var toJulianDay_1 = toJulianDay;
  var toMillisecondsInJulianDay_1 = toMillisecondsInJulianDay;
  var fromJulianDayAndMilliseconds_1 = fromJulianDayAndMilliseconds;

  var DAY = 86400000;
  var HALF_DAY = DAY / 2;
  var UNIX_EPOCH_JULIAN_DATE = 2440587.5;
  var UNIX_EPOCH_JULIAN_DAY = 2440587;

  function convert(date) {
    return (toJulianDay(date) + (toMillisecondsInJulianDay(date) / DAY)).toFixed(6);
  }
  function convertToDate(julian) {
    return new Date((Number(julian) - UNIX_EPOCH_JULIAN_DATE) * DAY);
  }
  function toJulianDay(date) {
    return ~~((+date + HALF_DAY) / DAY) + UNIX_EPOCH_JULIAN_DAY;
  }
  function toMillisecondsInJulianDay(date) {
    return (+date + HALF_DAY) % DAY;
  }
  function fromJulianDayAndMilliseconds(day, ms) {
    return (day - UNIX_EPOCH_JULIAN_DATE) * DAY + ms;
  }julian.toDate = toDate;
  julian.toJulianDay = toJulianDay_1;
  julian.toMillisecondsInJulianDay = toMillisecondsInJulianDay_1;
  julian.fromJulianDayAndMilliseconds = fromJulianDayAndMilliseconds_1;

  class Camera {
    // Simple wrapper for Three.js camera

    constructor(context) {
      // TODO(ian): Accept either context or container
      this._context = context;

      this.init();
    }

    init() {
      const containerWidth = this._context.container.width;
      const containerHeight = this._context.container.height;
      this._camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 1, 5000);
    }

    get3jsCamera() {
      return this._camera;
    }
  }

  const DEFAULT_TEXTURE_URL = '{{assets}}/sprites/fuzzyparticle.png';

  function getFullTextureUrl(template, assetPath) {
    return (template || DEFAULT_TEXTURE_URL).replace('{{assets}}', assetPath);
  }

  class Skybox {
    constructor(options, contextOrContainer) {
      // TODO(ian): Support for actual box instead of sphere...
      this._options = options;
      this._id = `__skybox_${new Date().getTime()}`;

      // if (contextOrContainer instanceOf Container) {
      {
        // User passed in Container
        this._container = contextOrContainer;
        this._context = contextOrContainer.getContext();
      }

      this._mesh = null;

      this.init();
    }

    init() {
      const geometry = new THREE.SphereBufferGeometry(4000);

      const fullTextureUrl = getFullTextureUrl(this._options.textureUrl,
        this._context.options.assetPath);
      const texture = new THREE.TextureLoader().load(fullTextureUrl);

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.BackSide,
      });

      const sky = new THREE.Mesh(geometry, material);

      // See this thread on orientation of milky way:
      // https://www.physicsforums.com/threads/orientation-of-the-earth-sun-and-solar-system-in-the-milky-way.888643/
      sky.rotation.x = 0;
      sky.rotation.y = -1 / 12 * Math.PI;
      sky.rotation.z = 8 / 5 * Math.PI;

      // We're on the inside of the skybox, so invert it to correct it.
      sky.scale.set(-1, 1, 1);

      this._mesh = sky;

      if (this._container) {
        this._container.addObject(this, true /* noUpdate */);
      }
    }

    get3jsObjects() {
      return [this._mesh];
    }

    getId() {
      return this._id;
    }
  }

  const SkyboxPresets = {
    ESO_GIGAGALAXY: {
      textureUrl: '{{assets}}/skybox/eso_milkyway.jpg',
    },
    NASA_TYCHO: {
      textureUrl: '{{assets}}/skybox/nasa_tycho.jpg',
    },
  };

  const EPHEM_VALID_ATTRS = new Set([
    'a', // Semi-major axis
    'e', // Eccentricity
    'i', // Inclination

    'epoch',
    'period',

    'ma', // Mean anomaly
    'n', // Mean motion
    'L', // Mean longitude

    'om', // Longitude of Ascending Node
    'w', // Argument of Perihelion = Longitude of Perihelion - Longitude of Ascending Node
    'w_bar', // Longitude of Perihelion = Longitude of Ascending Node + Argument of Perihelion
  ]);

  // Which of these are angular measurements.
  const ANGLE_UNITS = new Set([
    'i', 'ma', 'n', 'L', 'om', 'w', 'w_bar',
  ]);

  class Ephem {
    // Note that Ephem always takes values in RADIANS, not degrees

    constructor(initialValues, degOrRad = 'rad') {
      this._attrs = {};

      for (const attr in initialValues) {
        if (initialValues.hasOwnProperty(attr)) {
          const units = ANGLE_UNITS.has(attr) ? degOrRad : null;
          this.set(attr, initialValues[attr], units);
        }
      }
      this.fill();
    }

    set(attr, val, units = 'rad') {
      if (!EPHEM_VALID_ATTRS.has(attr)) {
        console.warn(`Invalid ephem attr: ${attr}`);
        return false;
      }

      if (units === 'deg') {
        this._attrs[attr] = val * Math.PI / 180;
      } else {
        this._attrs[attr] = val;
      }
      return true;
    }

    get(attr, units = 'rad') {
      if (units === 'deg') {
        return this._attrs[attr] * 180 / Math.PI;
      }
      return this._attrs[attr];
    }

    fill() {
      // Longitude/Argument of Perihelion and Long. of Ascending Node
      let w = this.get('w');
      let wBar = this.get('w_bar');
      let om = this.get('om');
      if (w && om && !wBar) {
        wBar = w + om;
        this.set('w_bar', wBar);
      } else if (wBar && om && !w) {
        w = wBar - om;
        this.set('w', w);
      } else if (w && wBar && !om) {
        om = wBar - w;
        this.set('om', om);
      }

      // Mean motion / period
      const a = this.get('a');
      const n = this.get('n');
      let period = this.get('period');

      if (!period && a) {
        period = Math.sqrt(a * a * a) * 365.25;
        this.set('period', period);
      }

      if (period && !n) {
        // Set radians
        this.set('n', 2.0 * Math.PI / period);
      } else if (n && !period) {
        this.set('period', 2.0 * Math.PI / n);
      }

      // Mean longitude
      const ma = this.get('ma');
      let L = this.get('L');
      if (!L && om && w && ma) {
        L = om + w + ma;
      }
      //  TODO(ian): Handle no mean anomaly, no om
    }
  }

  const EphemPresets = {
    MERCURY: new Ephem({
      epoch: 2458426.500000000,
      a: 3.870968969437096E-01,
      e: 2.056515875393916E-01,
      i: 7.003891682749818E+00,
      om: 4.830774804443502E+01,
      w: 2.917940253442659E+01,
      ma: 2.561909752092730E+02,
    }, 'deg'),
    VENUS: new Ephem({
      epoch: 2458426.500000000,
      a: 7.233458663591554E-01,
      e: 6.762510759617694E-03,
      i: 3.394567787211735E+00,
      om: 7.662534150657346E+01,
      w: 5.474567447560867E+01,
      ma: 2.756687596099721E+02,
    }, 'deg'),
    EARTH: new Ephem({
      epoch: 2458426.500000000,
      a: 1.000618919441359E+00,
      e: 1.676780871638673E-02,
      i: 3.679932353783076E-03,
      om: 1.888900932218542E+02,
      w: 2.718307282052625E+02,
      ma: 3.021792498388233E+02,
    }, 'deg'),
    MARS: new Ephem({
      epoch: 2458426.500000000,
      a: 1.523714015371070E+00,
      e: 9.336741335309606E-02,
      i: 1.848141099825311E+00,
      om: 4.950420572080223E+01,
      w: 2.866965847685386E+02,
      ma: 2.538237617924876E+01,
    }, 'deg'),
    JUPITER: new Ephem({
      epoch: 2458426.500000000,
      a: 5.201803559110230E+00,
      e: 4.899125582490060E-02,
      i: 1.303560894624275E+00,
      om: 1.005203828847816E+02,
      w: 2.737363018454040E+02,
      ma: 2.319395443894010E+02,
    }, 'deg'),
    SATURN: new Ephem({
      epoch: 2458426.500000000,
      a: 9.577177295536776E+00,
      e: 5.101889921719987E-02,
      i: 2.482782449972317E+00,
      om: 1.136154964073247E+02,
      w: 3.394422648650336E+02,
      ma: 1.870970898012944E+02,
    }, 'deg'),
    URANUS: new Ephem({
      epoch: 2458426.500000000,
      a: 1.914496966635462E+01,
      e: 4.832662948112808E-02,
      i: 7.697511134483724E-01,
      om: 7.414239045667875E+01,
      w: 9.942704504702185E+01,
      ma: 2.202603033874267E+02,
    }, 'deg'),
    NEPTUNE: new Ephem({
      epoch: 2458426.500000000,
      a: 3.009622263428050E+01,
      e: 7.362571187193770E-03,
      i: 1.774569249829094E+00,
      om: 1.318695882492132E+02,
      w: 2.586226409499831E+02,
      ma: 3.152804988924479E+02,
    }, 'deg'),
  };

  class Orbit {
    constructor(ephem, options) {
      this._ephem = ephem;
      this._options = options || {};

      // Cached orbital points.
      this._points = null;
    }

    getOrbitPoints() {
      if (this._points) {
        return this._points;
      }

      const eph = this._ephem;

      const period = eph.get('period');
      const numSegments = Math.max(period / 10, 50);
      const step = period / numSegments;

      const pts = [];
      let prevPos;
      for (let time = 0; time < period; time += step) {
        const pos = this.getPositionAtTime(time);
        if (isNaN(pos[0]) || isNaN(pos[1]) || isNaN(pos[2])) {
          console.error('NaN position value - you may have bad data in the following ephemeris:');
          console.error(eph);
        }
        const vector = new THREE.Vector3(pos[0], pos[1], pos[2]);
        if (prevPos && Math.abs(prevPos[0] - pos[0])
                       + Math.abs(prevPos[1] - pos[1])
                       + Math.abs(prevPos[2] - pos[2]) > 120) {
          // Don't render bogus or very large ellipses.
          points.vertices = [];
          return points;
        }
        prevPos = pos;
        pts.push(vector);
      }
      pts.push(pts[0]);

      this._points = new THREE.Geometry();
      this._points.vertices = pts;

      return this._points;
    }

    getPositionAtTime(jed) {
      const pi = Math.PI;
      const sin = Math.sin;
      const cos = Math.cos;

      const eph = this._ephem;

      // Note: logic below must match the vertex shader.
      // This position calculation is used to create orbital ellipses.
      const e = eph.get('e');
      const a = eph.get('a');
      const i = eph.get('i', 'rad');

      // longitude of ascending node
      const o = eph.get('om', 'rad');

      // LONGITUDE of perihelion
      const p = eph.get('w_bar', 'rad');

      const ma = eph.get('ma', 'rad');
      let M;

      // Calculate mean anomaly at jed
      const n = eph.get('n', 'rad');
      const epoch = eph.get('epoch');
      const d = jed - epoch;
      M = ma + n * d;

      // Estimate eccentric and true anom using iterative approx
      let E0 = M;
      let lastdiff;
      do {
        const E1 = M + e * sin(E0);
        lastdiff = Math.abs(E1 - E0);
        E0 = E1;
      } while (lastdiff > 0.0000001);
      const E = E0;
      const v = 2 * Math.atan(Math.sqrt((1 + e) / (1 - e)) * Math.tan(E / 2));

      // Radius vector, in AU
      const r = a * (1 - e * e) / (1 + e * cos(v));

      // Heliocentric coords
      const X = r * (cos(o) * cos(v + p - o) - sin(o) * sin(v + p - o) * cos(i));
      const Y = r * (sin(o) * cos(v + p - o) + cos(o) * sin(v + p - o) * cos(i));
      const Z = r * (sin(v + p - o) * sin(i));
      return [X, Y, Z];
    }

    getEllipse() {
      const pointGeometry = this.getOrbitPoints();
      return new THREE.Line(pointGeometry,
        new THREE.LineBasicMaterial({
          color: this._options.color,
        }), THREE.LineStrip);
    }

    getLinesToEcliptic() {
      const points = this.getOrbitPoints();
      const geometry = new THREE.Geometry();

      points.vertices.forEach(vertex=> {
        geometry.vertices.push(vertex);
        geometry.vertices.push(new THREE.Vector3(vertex.x, vertex.y, 0));
      });

      return new THREE.LineSegments(
        geometry,
        new THREE.LineBasicMaterial({
          color: this._options.eclipticLineColor || 0x333333,
        }),
        THREE.LineStrip
      );
    }
  }

  class SpaceObject {
    constructor(id, options, contextOrContainer) {
      this._id = id;
      this._options = options || {};

      // if (contextOrContainer instanceOf Container) {
      {
        // User passed in Container
        this._container = contextOrContainer;
        this._context = contextOrContainer.getContext();
      }

      this._position = options.position || [0, 0, 0];
      this._scale = options.scale || [1, 1, 1];

      if (!this.init()) {
        console.warn(`SpaceObject ${id}: failed to initialize`);
      }
    }

    init() {
      if (this.isStaticObject()) {
        // Create a stationary sprite.
        this._object3js = this.createSprite();
        if (this._container) {
          // Add it all to visualization.
          this._container.addObject(this, true /* noUpdate */);
        }
      } else {
        if (!this._options.hideOrbit) {
          // Orbit is initialized before sprite because sprite may be positioned
          // according to orbit.
          this._orbit = this.createOrbit();

          if (this._container) {
            // Add it all to visualization.
            this._container.addObject(this, true /* noUpdate */);
          }
        }

        // Don't create a sprite - do it on the GPU instead.
        this._context.objects.particles.addParticle(this._options.ephem, {
          particleSize: this._options.particleSize,
          color: this.getColor(),
        });
      }
      return true;
    }

    setPosition(x, y, z) {
      this._position[0] = x;
      this._position[1] = y;
      this._position[2] = z;
    }

    getPosition(jed) {
      const pos = this._position;
      if (!this._orbit) {
        // Default implementation, a static object.
        return pos;
      }

      const posModified = this._orbit.getPositionAtTime(jed);
      return [
        pos[0] + posModified[0],
        pos[1] + posModified[1],
        pos[2] + posModified[2],
      ];
    }

    createSprite() {
      const fullTextureUrl = getFullTextureUrl(
        this._options.textureUrl,
        this._context.options.assetPath,
      );
      const texture = new THREE.TextureLoader().load(fullTextureUrl);
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
        map: texture,
        blending: THREE.AdditiveBlending,
        color: 0xffffff,
      }));
      sprite.scale.set.apply(this, this._scale);
      const position = this.getPosition(this._container.getJed());
      sprite.position.set(position[0], position[1], position[2]);


      if (this.isStaticObject()) {
        sprite.matrixAutoUpdate = false;
      }

      return sprite;

      /*
      const light = new THREE.PointLight( 0xffffff, 1.5, 2000 );
      light.position.set.apply(this, this._position);

      const lensflare = new THREE.Lensflare();
      lensflare.addElement(new THREE.LensflareElement(texture, 500, 0, new
                                                      THREE.Color(0xffffff),
                                                      THREE.AdditiveBlending));

      light.add(lensflare);
      return light;
     */
    }

    createOrbit() {
      if (this._orbit) {
        return;
      }
      return new Orbit(this._options.ephem, {
        color: this.getColor(),
        eclipticLineColor: this._options.ecliptic ? this._options.ecliptic.lineColor : null,
      });
    }

    update(jed) {
      if (this._object3js) {
        const newpos = this.getPosition(jed);
        this._object3js.position.set(newpos[0], newpos[1], newpos[2]);
      }
    }

    get3jsObjects() {
      const ret = [];
      if (this._object3js) {
        ret.push(this._object3js);
      }
      if (this._orbit) {
        ret.push(this._orbit.getEllipse());
        if (this._options.ecliptic && this._options.ecliptic.displayLines) {
          ret.push(this._orbit.getLinesToEcliptic());
        }
      }
      return ret;
    }

    getColor() {
      if (this._options.theme) {
        return this._options.theme.color || 0xffffff;
      }
      return 0xffffff;
    }

    getId() {
      return this._id;
    }

    isStaticObject() {
      return !this._options.ephem;
    }
  }

  const DEFAULT_PLANET_TEXTURE_URL = '{{assets}}/sprites/smallparticle.png';

  const SpaceObjectPresets = {
    SUN: {
      textureUrl: '{{assets}}/sprites/sunsprite.png',
      position: [0, 0, 0],
    },
    MERCURY: {
      textureUrl: DEFAULT_PLANET_TEXTURE_URL,
      theme: {
        color: 0x913CEE,
      },
      ephem: EphemPresets.MERCURY,
    },
    VENUS: {
      textureUrl: DEFAULT_PLANET_TEXTURE_URL,
      theme: {
        color: 0xFF7733,
      },
      ephem: EphemPresets.VENUS,
    },
    EARTH: {
      textureUrl: DEFAULT_PLANET_TEXTURE_URL,
      theme: {
        color: 0x009ACD,
      },
      ephem: EphemPresets.EARTH,
    },
    MARS: {
      textureUrl: DEFAULT_PLANET_TEXTURE_URL,
      theme: {
        color: 0xA63A3A,
      },
      ephem: EphemPresets.MARS,
    },
    JUPITER: {
      textureUrl: DEFAULT_PLANET_TEXTURE_URL,
      theme: {
        color: 0xFFB90F,
      },
      ephem: EphemPresets.JUPITER,
    },
    SATURN: {
      textureUrl: DEFAULT_PLANET_TEXTURE_URL,
      theme: {
        color: 0x336633,
      },
      ephem: EphemPresets.SATURN,
    },
    URANUS: {
      textureUrl: DEFAULT_PLANET_TEXTURE_URL,
      theme: {
        color: 0x0099FF,
      },
      ephem: EphemPresets.URANUS,
    },
    NEPTUNE: {
      textureUrl: DEFAULT_PLANET_TEXTURE_URL,
      theme: {
        color: 0x3333FF,
      },
      ephem: EphemPresets.NEPTUNE,
    },
  };

  const ORBIT_SHADER_FRAGMENT = `
    varying vec3 vColor;
    uniform sampler2D texture;

    void main() {
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
    attribute float w;
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

    vec3 getAstroPosFast() {
      float M1 = ma + (jed - epoch) * n;
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

    void main() {
      vColor = fuzzColor;

      //vec3 newpos = getAstroPosFast();
      vec3 newpos = getAstroPos();
      vec4 mvPosition = modelViewMatrix * vec4(newpos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      gl_PointSize = size;
    }
`;

  const DEFAULT_PARTICLE_COUNT = 1024;

  class SpaceParticles {
    constructor(options, contextOrContainer) {
      this._options = options;

      this._id = `SpaceParticles__${SpaceParticles.instanceCount}`;

      // TODO(ian): Add to ctx
      {
        // User passed in Container
        this._container = contextOrContainer;
        this._context = contextOrContainer.getContext();
      }

      // Whether Points object has been added to the Container/Scene. This
      // happens lazily when the first data point is added in order to prevent
      // WebGL render warnings.
      this._addedToScene = false;

      // Number of particles in the scene.
      this._particleCount = 0;

      this._attributes = null;
      this._uniforms = null;
      this._geometry = null;
      this._shaderMaterial = null;
      this._particleSystem = null;

      this.init();
    }

    init() {
      this.createParticleSystem();
    }

    createParticleSystem() {
      const fullTextureUrl = getFullTextureUrl(
        this._options.textureUrl,
        this._context.options.assetPath,
      );
      const defaultMapTexture = new THREE.TextureLoader().load(fullTextureUrl);

      this._uniforms = {
        jed: { value: this._options.jed || 0 },
        texture: { value: defaultMapTexture },
      };

      const particleCount = this._options.maxNumParticles || DEFAULT_PARTICLE_COUNT;
      this._attributes = {
        size: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
        position: new THREE.BufferAttribute(new Float32Array(particleCount * 3), 3),
        fuzzColor: new THREE.BufferAttribute(new Float32Array(particleCount * 3), 3),

        a: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
        e: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
        i: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
        om: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
        ma: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
        n: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
        w: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
        w_bar: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
        epoch: new THREE.BufferAttribute(new Float32Array(particleCount), 1),
      };

      const geometry = new THREE.BufferGeometry();
      Object.keys(this._attributes).forEach((attributeName) => {
        const attribute = this._attributes[attributeName];
        // attribute.setDynamic(true);
        geometry.addAttribute(attributeName, attribute);
      });

      const shader = new THREE.ShaderMaterial({
        uniforms: this._uniforms,
        vertexShader: ORBIT_SHADER_VERTEX,
        fragmentShader: ORBIT_SHADER_FRAGMENT,

        depthTest: false,
        transparent: true,
      });


      this._shaderMaterial = shader;
      this._geometry = geometry;
      this._particleSystem = new THREE.Points(geometry, shader);
    }

    addParticle(ephem, options = {}) {
      const attributes = this._attributes;
      const offset = this._particleCount++;

      attributes.size.set([options.particleSize || 15], offset);
      const color = new THREE.Color(options.color || 0xffffff);
      attributes.fuzzColor.set([color.r, color.g, color.b], offset * 3);

      attributes.a.set([ephem.get('a')], offset);
      attributes.e.set([ephem.get('e')], offset);
      attributes.i.set([ephem.get('i', 'rad')], offset);
      attributes.om.set([ephem.get('om', 'rad')], offset);
      attributes.ma.set([ephem.get('ma', 'rad')], offset);
      attributes.n.set([ephem.get('n', 'rad')], offset);
      attributes.w.set([ephem.get('w', 'rad')], offset);
      attributes.w_bar.set([ephem.get('w_bar', 'rad')], offset);
      attributes.epoch.set([ephem.get('epoch')], offset);

      // TODO(ian): Set the update range
      for (const attributeKey in attributes) {
        if (attributes.hasOwnProperty(attributeKey)) {
          attributes[attributeKey].needsUpdate = true;
        }
      }
      this._shaderMaterial.needsUpdate = true;

      if (!this._addedToScene && this._container) {
        // This happens lazily when the first data point is added in order to
        // prevent WebGL render warnings.
        this._container.addObject(this);
        this._addedToScene = true;
      }
    }

    update(jed) {
      this._uniforms.jed.value = jed;
    }

    get3jsObjects() {
      return [this._particleSystem];
    }

    getId() {
      return this._id;
    }
  }

  SpaceParticles.instanceCount = 0;

  class Container {
    // Wraps scene and controls and skybox in an animated container

    constructor(containerElt, options) {
      this._containerElt = containerElt;
      this._options = options || {};

      this._jed = this._options.jed || 0;
      this._jedDelta = this._options.jedDelta;
      this._jedPerSecond = this._options.jedPerSecond || 100;
      this._isPaused = options.startPaused || false;
      this.onTick = null;

      this._scene = null;
      this._renderer = null;

      this._camera = null;
      this._cameraControls = null;

      this._subscribedObjects = {};
      this._particles = null;

      // stats.js panel
      this._stats = null;
      this._fps = 1;
      this._lastRenderedTime = Date.now();

      this.init();
      this.animate();
    }

    init() {
      this.initRenderer();

      // Scene
      this._scene = new THREE.Scene();

      // Camera
      this._camera = new Camera(this.getContext()).get3jsCamera();
      this._camera.position.set(0, -10, 5);
      window.cam = this._camera;

      // Controls
      this._cameraControls = new THREE.TrackballControls(this._camera, this._containerElt);
      this._cameraControls.userPanSpeed = 20;
      this._cameraControls.rotateSpeed = 2;

      // Helper
      if (this._options.debug) {
        if (this._options.debug.showAxesHelper) {
          this._scene.add(new THREE.AxesHelper(5));
        }
        if (this._options.debug.showStats) {
          this._stats = new Stats();
          this._stats.showPanel(0);
          window.sssss = this._stats;
          this._containerElt.appendChild(this._stats.dom);
        }
      }

      // Orbit particle system must be initialized after scene is created.
      this._particles = new SpaceParticles({
        textureUrl: '{{assets}}/sprites/smallparticle.png',
        jed: this._jed,
        maxNumParticles: this._options.maxNumParticles,
      }, this);
    }

    animate() {
      window.requestAnimationFrame(this.animate.bind(this));
      if (this._isPaused) {
        return;
      }

      if (this._stats) {
        this._stats.begin();
      }

      if (this._jedDelta) {
        this._jed += this._jedDelta;
      } else {
        // N jed per second
        this._jed += (this._jedPerSecond) / this._fps;
      }

      this.update();
      this._cameraControls.update();
      this._renderer.render(this._scene, this._camera);

      const timeDelta = (Date.now() - this._lastRenderedTime) / 1000;
      this._lastRenderedTime = Date.now();
      this._fps = (1 / timeDelta) || 1;

      if (this.onTick) {
        this.onTick();
      }

      if (this._stats) {
        this._stats.end();
      }
    }

    initRenderer() {
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(this._containerElt.offsetWidth, this._containerElt.offsetHeight);

      this._containerElt.appendChild(renderer.domElement);

      this._renderer = renderer;
    }

    addObject(obj, noUpdate = false) {
      obj.get3jsObjects().map((x) => {
        this._scene.add(x);
      });

      if (!noUpdate) {
        // Call for updates as time passes.
        this._subscribedObjects[obj.getId()] = obj;
      }
    }

    removeObject(obj) {
      // TODO(ian): test this and avoid memory leaks...
      obj.get3jsObjects().map((x) => {
        this._scene.remove(x);
      });

      delete this._subscribedObjects[obj.getId()];
    }

    createObject(...args) {
      return new SpaceObject(...args, this);
    }

    createObjects(prefix, objects) {
      objects.forEach((obj, idx) => {

      });
    }

    createSkybox(...args) {
      return new Skybox(...args, this);
    }

    update() {
      for (const objId in this._subscribedObjects) {
        if (this._subscribedObjects.hasOwnProperty(objId)) {
          this._subscribedObjects[objId].update(this._jed);
        }
      }
    }

    start() {
      this._lastRenderedTime = Date.now();
      this._isPaused = false;
    }

    stop() {
      this._isPaused = true;
    }

    getJed() {
      return this._jed;
    }

    setJed(val) {
      this._jed = val;
    }

    getDate() {
      return julian.toDate(this._jed);
    }

    setDate(date) {
      this.setJed(julian.toJulianDay(date));
    }

    setJedDelta(delta) {
      this._jedDelta = delta;
    }

    getJedDelta() {
      if (!this._jedDelta) {
        return this._jedPerSecond / this._fps;
      }
      return this._jedDelta;
    }

    setJedPerSecond(x) {
      // Delta overrides jed per second, so unset it.
      this._jedDelta = undefined;

      this._jedPerSecond = x;
    }

    getJedPerSecond() {
      if (this._jedDelta) {
        // Jed per second can vary
        return undefined;
      }
      return this._jedPerSecond;
    }

    getContext() {
      return {
        options: this._options,
        objects: {
          particles: this._particles,
        },
        container: {
          width: this._containerElt.offsetWidth,
          height: this._containerElt.offsetHeight,
        },
      };
    }
  }

  exports.Container = Container;
  exports.Ephem = Ephem;
  exports.EphemPresets = EphemPresets;
  exports.Orbit = Orbit;
  exports.SpaceObject = SpaceObject;
  exports.SpaceObjectPresets = SpaceObjectPresets;
  exports.SpaceParticles = SpaceParticles;
  exports.Skybox = Skybox;
  exports.SkyboxPresets = SkyboxPresets;
  exports.Camera = Camera;

  return exports;

}({}));
