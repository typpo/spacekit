# spacekit

Spacekit is a JavaScript library for creating interactive 3D space visualizations - whether of the Earth/moon system, solar system, or beyond.

You can check out an editable live example on [jsfiddle](https://jsfiddle.net/typpo/x9nv8jg0/6/), or look at a variety of live examples on [SpaceReference.org](https://www.spacereference.org/solar-system#ob=2001-einstein-1973-eb,7672-hawking-1995-uo2,2709-sagan-1982-fh).  This library generalizes work that is currently used on [Asterank](http://www.asterank.com/), [Meteor Showers](https://www.meteorshowers.org/), [Ancient Earth](http://dinosaurpictures.org/ancient-earth), [and](http://www.ianww.com/ceres/) [many](http://www.asterank.com/exoplanets) [other](http://www.ianww.com/pluto/) [things](http://www.ianww.com/moonviz/) into a single open-source 3D engine for space that is both accurate and visually stunning.

See the **[full documentation](https://typpo.github.io/spacekit/)**

Note that this library is a work in progress and the API might change!

# Terminology and components

  - `Simulation`: the main container for your visualization.  A simulation is comprised by a `Camera` plus whatever you choose to put in it.

  - `Skybox`: the image background of the visualization.  The "universe" of the visualization is contained within a large sphere, so "skysphere" may be a better (less conventional) way to describe it.  Some skybox assets are provided, including starry milky way background from ESA and NASA Tycho.

  - `Stars`: an alternative to a skybox.  Instead of showing an image, this class loads real star data and positions the stars accordingly in the simulation.  Usually this is more performant but less visually stunning.

  - `SpaceObject`: an object that can be added to the visualization (SpaceObjects can sometimes be referred to as simply "Object").  SpaceObjects can orbit, rotate, etc.  Subclasses include `RotatingObject` (has a defined spin axis), `ShapeObject` (has a 3D shapefile), and `SphereObject` (is spherical, like the Earth).

  - `KeplerParticles`: an optimized class for creating many particles that follow Kepler orbits.  These particles don't have a specific shape or size.  Instead, they share a 2D texture.  This is useful for when you want to show many objects at once, such as the asteroid belt.
  
# How to get started

To be written...

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
