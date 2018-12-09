# spacekit

🚨 **This library is a work in progress and is not ready for usage!** 🚨

A Javascript library for 3D space visualizations - Earth/moon system, solar system, and beyond...

The intent of this library is to generalize my work on [Asterank](http://www.asterank.com/), [Meteor Showers](https://www.meteorshowers.org/), [Ancient Earth](http://dinosaurpictures.org/ancient-earth#240), [and](http://www.ianww.com/ceres/) [many](http://www.asterank.com/exoplanets) [other](http://www.ianww.com/pluto/) [things](http://www.ianww.com/moonviz/) into a single open-source 3D engine for space that is both accurate and visually stunning.

# Dependencies

Production:

  - THREE.js
  - THREE.js TrackballControls
  - Stats.js (optional)

Additional development dependencies:

  - Python

# Running an Example

Running `./server.sh` will start a basic Python webserver.  http://localhost:8000/examples/simple.html will load a simple example.

If you're making changes to the code and working with an example (or anything that uses the `build/` outputs), run `yarn build` or `yarn build:watch` to continuously update the bundle.

# Usage

See the examples directory for full usage examples.  For now, here's some example code that will build an interactive visualization of the sun, Earth, and Mars:

```
// Create the visualization and put it in our div.
const viz = new Spacekit.Container(document.getElementById('main-container'), {
  assetPath: '../src/assets',
});

// Create a skybox using NASA TYCHO artwork.
const skybox = viz.createSkybox Spacekit.SkyboxPresets.NASA_TYCHO);

// Create our first object - the sun - using a preset space object.
const sun = viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN);

// Then add some planets
const earth = viz.createObject('earth', Spacekit.SpaceObjectPresets.EARTH);
const mars = viz.createObject('mars', Spacekit.SpaceObjectPresets.MARS);
```

![example](https://imgur.com/8ldI8wel.jpg)
