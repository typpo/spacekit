# spacekit
[![Build Status](https://travis-ci.com/typpo/spacekit.svg?branch=master)](https://travis-ci.com/typpo/spacekit)
[![npm](https://img.shields.io/npm/v/spacekit.js)](https://www.npmjs.com/package/spacekit.js)

Spacekit is a JavaScript library for creating interactive 3D space visualizations - whether of the Earth/moon system, solar system, or beyond.

You can check out an editable live example on [jsfiddle](https://jsfiddle.net/typpo/x9nv8jg0/6/), or look at a variety of live examples on [SpaceReference.org](https://www.spacereference.org/solar-system#ob=2001-einstein-1973-eb,7672-hawking-1995-uo2,2709-sagan-1982-fh).  This library generalizes work that is currently used on [Asterank](https://www.asterank.com/), [Meteor Showers](https://www.meteorshowers.org/), [Ancient Earth](https://dinosaurpictures.org/ancient-earth), [and](https://www.ianww.com/ceres/) [many](https://www.asterank.com/exoplanets) [other](https://www.ianww.com/pluto/) [things](https://www.ianww.com/moonviz/) into a single open-source 3D engine for space that is both accurate and visually stunning.

See the **[full documentation](https://typpo.github.io/spacekit/)**

Note that this library is a work in progress and the API might change!

[![spacekit examples](https://i.imgur.com/u48FCjJ.jpg)](https://typpo.github.io/spacekit/)

# Usage

Install via npm:

```
npm install spacekit.js
```

And then use `require` or `import`:

```js
const Spacekit = require('spacekit.js');
// or
import Spacekit from 'spacekit.js';
```

You can also [download a raw build](https://github.com/typpo/spacekit/tree/master/build) or use the latest build in a script tag:
```html
<script src="https://typpo.github.io/spacekit/build/spacekit.js"></script>
```

# Terminology and components

`Simulation`: the main container for your visualization.  A simulation is comprised by a `Camera` plus whatever you choose to put in it. See [documentation](https://typpo.github.io/spacekit/docs/class/src/Simulation.js~Simulation.html) for full options.
```javascript
const sim = new Spacekit.Simulation(document.getElementById('my-container'), {
 // Required
 basePath: '../path/to/asset',
 // Optional
 camera: {
   initialPosition: [0, -10, 5],
   enableDrift: false,
 },
 debug: {
   showAxes: false,
   showGrid: false,
   showStats: false,
 },
});
```

`Skybox`: the image background of the visualization.  The "universe" of the visualization is contained within a large sphere, so "skysphere" may be a better (less conventional) way to describe it.  Some skybox assets are provided, including starry milky way background from ESA and NASA Tycho. See [documentation](https://typpo.github.io/spacekit/variable/index.html#static-variable-SkyboxPresets) for full preset options.
```javascript
// Use an existing skybox preset.
const skybox = sim.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

// Add a skybox preset
const skybox = sim.createSkybox({
  textureUrl: '../path/to/image.png'
});
```

`Stars`: an alternative to a skybox.  Instead of showing an image, this class loads real star data and positions the stars accordingly in the simulation.  Usually this is more performant but less visually stunning.
```javascript
// Use an existing skybox preset.
const skybox = sim.createStars({minSize /* optional */: 0.75 /* default */});

// Add a skybox preset
const skybox = sim.createSkybox({
  textureUrl: '../path/to/image.png'
});
```

`SpaceObject`: an object that can be added to the visualization (SpaceObjects can sometimes be referred to as simply "Object").  SpaceObjects can orbit, rotate, etc.  Subclasses include `RotatingObject` (has a defined spin axis), `ShapeObject` (has a 3D shapefile), and `SphereObject` (is spherical, like the Earth).
```javascript
// Create objects using presets. The presets include scientific ephem params and/or position.
const sun = viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN);
viz.createObject('mercury', Spacekit.SpaceObjectPresets.MERCURY);
viz.createObject('venus', Spacekit.SpaceObjectPresets.VENUS);

// Create a stationary object at [3, 1, -5] position.
const obj = viz.createObject('myobj', {
  position: [3, 1, -5],
};

// Create an object that orbits.

// Ephem is a class representing Kepler ephemerides, which defines the trajectory of astronomical objects as well
// as artificial satellites in the sky, i.e., the position (and possibly velocity) over time.
const ephem = new Spacekit.Ephem({
  epoch: 2458600.5,
  a: 5.38533,
  e: 0.19893,
  i: 22.11137,
  om: 294.42992,
  w: 314.28890,
  ma: 229.14238,
}, 'deg');

const asteroid = sim.createObject('Asteroid Aci', {
  ephem,
});

// Create a shape object
const obj = viz.createShape('myobj', {
  position: [3, 1, -5],
  shape: {
    // Example shape file -
    // http://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_asteroid_detail&asteroid_id=1046
    shapeUrl: '../path/to/shape.obj', // Cacus
  },
  rotation: {
    lambdaDeg: 251,
    betaDeg: -63,
    period: 3.755067,
    yorp: 1.9e-8,
    phi0: 0,
    jd0: 2443568.0,
  },
  debug: {
    showAxes: true,
  },
});

// Create a sphere object
sim.createSphere('earth', {
  textureUrl: './earth_66mya.jpg',
  radius: 2 /* default to 1 */
  debug: {
    showAxes: true,
  },
});
```

`KeplerParticles`: an optimized class for creating many particles that follow Kepler orbits.  These particles don't have a specific shape or size.  Instead, they share a 2D texture.  This is useful for when you want to show many objects at once, such as the asteroid belt.

# Dependencies

Spacekit relies on some image and data assets that are not included in the Javascript file.

By default, these dependencies are hosted on the spacekit site (typpo.github.io/spacekit).  If you want to host these assets yourself, you can set the `Simulation`'s `basePath` parameter to a folder that contains these files:

  - [Spacekit asset directory](https://github.com/typpo/spacekit/tree/master/src/assets)
  - [Spacekit data directory](https://github.com/typpo/spacekit/tree/master/src/data)

For example:

```
const viz = new Spacekit.Simulation({
  basePath: 'https://mysite.com/static/spacekit',
});
```

If you want to contribute to this project, you will also need to install Python (2.7 or 3).

# Running an Example

Running `./server.sh` will start a basic Python webserver.  Go to http://localhost:8001/examples/index.html to load a simple example.

If you're making changes to the code, run `yarn build` to update the build outputs.  `yarn build:watch` will continuously watch for your changes and update the build and also host a server on localhost:8001 (so you don't have to start the Python server separately).

# Usage

See the [examples](https://github.com/typpo/spacekit/tree/master/examples) directory for full usage examples.  For now, here's some example code that will build an interactive visualization of a couple planets:

```javascript
// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  assetPath: '../src/assets',
});

// Create a skybox using NASA TYCHO artwork.
const skybox = viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

// Create our first object - the sun - using a preset space object.
const sun = viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN);

// Then add some planets
viz.createObject('mercury', Spacekit.SpaceObjectPresets.MERCURY);
viz.createObject('venus', Spacekit.SpaceObjectPresets.VENUS);
viz.createObject('earth', Spacekit.SpaceObjectPresets.EARTH);
viz.createObject('mars', Spacekit.SpaceObjectPresets.MARS);
viz.createObject('jupiter', Spacekit.SpaceObjectPresets.JUPITER);
viz.createObject('saturn', Spacekit.SpaceObjectPresets.SATURN);
viz.createObject('uranus', Spacekit.SpaceObjectPresets.URANUS);
viz.createObject('neptune', Spacekit.SpaceObjectPresets.NEPTUNE);
```

![example](https://i.imgur.com/WseTJidl.jpg)
