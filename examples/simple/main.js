// Create the visualization and put it in our div.
const viz = new Container(document.getElementById('main-container'), {
  assetPath: '../../src/assets',
  jed: 2458454.5,
  debug: {
    showAxesHelper: true,
  },
});

// Create a skybox using NASA TYCHO artwork.
const skybox = viz.createSkybox(SkyboxPresets.NASA_TYCHO);

// Create our first object - the sun - using a preset space object.
const sun = viz.createObject('sun', SpaceObjectPresets.SUN);

// Then add some planets
const earth = viz.createObject('earth', SpaceObjectPresets.EARTH);
const mars = viz.createObject('mars', SpaceObjectPresets.MARS);
const jupiter = viz.createObject('jupiter', SpaceObjectPresets.JUPITER);
