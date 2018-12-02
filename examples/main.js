// Create the visualization and put it in our div.
const viz = new Container(document.getElementById('main-container'), {
  assetPath: '../src/assets',
  jed: 2458454.5,
  debug: {
    showAxesHelper: true,
  },
});

// Create a skybox using NASA TYCHO artwork.
const skybox = new Skybox(SkyboxPresets.NASA_TYCHO, viz);

// Create our first object - the sun - using a preset space object.
const sun = new SpaceObject('sun', SpaceObjectPresets.SUN, viz);

// Then add some planets
const earth = new SpaceObject('earth', SpaceObjectPresets.EARTH, viz);
const mars = new SpaceObject('mars', SpaceObjectPresets.MARS, viz);
