// Create the visualization and put it in our div.
const viz = new Container(document.getElementById('main-container'), {
  assetPath: '../../src/assets',
  jed: 2458454.5,
  debug: {
    showAxesHelper: true,
  },
});

// Create a skybox using NASA TYCHO artwork.
viz.createSkybox(SkyboxPresets.NASA_TYCHO);

// Create our first object - the sun - using a preset space object.
viz.createObject('sun', SpaceObjectPresets.SUN);

// Then add some planets
viz.createObject('mercury', SpaceObjectPresets.MERCURY);
viz.createObject('venus', SpaceObjectPresets.VENUS);
viz.createObject('earth', SpaceObjectPresets.EARTH);
viz.createObject('mars', SpaceObjectPresets.MARS);
viz.createObject('jupiter', SpaceObjectPresets.JUPITER);
viz.createObject('saturn', SpaceObjectPresets.SATURN);
viz.createObject('uranus', SpaceObjectPresets.URANUS);
viz.createObject('neptune', SpaceObjectPresets.NEPTUNE);
