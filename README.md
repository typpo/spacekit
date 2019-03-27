# spacekit

Spacekit is a JavaScript library for creating interactive 3D space visualizations - whether of the Earth/moon system, solar system, or beyond.

You can check out a live example on [SpaceReference.org](https://www.spacereference.org/solar-system#ob=2001-einstein-1973-eb,7672-hawking-1995-uo2,2709-sagan-1982-fh).  This library generalizes work that is currently used on [Asterank](http://www.asterank.com/), [Meteor Showers](https://www.meteorshowers.org/), [Ancient Earth](http://dinosaurpictures.org/ancient-earth), [and](http://www.ianww.com/ceres/) [many](http://www.asterank.com/exoplanets) [other](http://www.ianww.com/pluto/) [things](http://www.ianww.com/moonviz/) into a single open-source 3D engine for space that is both accurate and visually stunning.

See the **[full documentation](https://typpo.github.io/spacekit/)**

Note that this library is a work in progress and the API is subject to change!

# Dependencies

You'll need to include the following dependencies in production:

  - THREE.js
  - THREE.js TrackballControls
  - Stats.js (optional)

If you want to contribute to this project, you will also need to install Python (2.7 or 3).

# Running an Example

Running `./server.sh` will start a basic Python webserver.  Go to http://localhost:8001/examples/simple.html to load a simple example.

If you're making changes to the code, run `yarn build` to update the build outputs.  `yarn build:watch` will continuously watch for your changes and update the build.

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
