// Create the visualization and put it in our div.
const viz = new Container(document.getElementById('main-container'), {
  assetPath: '../../src/assets',
  jed: 2458454.5,
  maxNumParticles: 2 ** 16,
  debug: {
    showAxesHelper: true,
  },
});

// Create a skybox using NASA TYCHO artwork.
const skybox = viz.createSkybox(SkyboxPresets.NASA_TYCHO);

// Create our first object - the sun - using a preset space object.
const sun = viz.createObject('sun', SpaceObjectPresets.SUN);

// Then add some planets
viz.createObject('mercury', SpaceObjectPresets.MERCURY);
viz.createObject('venus', SpaceObjectPresets.VENUS);
viz.createObject('earth', SpaceObjectPresets.EARTH);
viz.createObject('mars', SpaceObjectPresets.MARS);
viz.createObject('jupiter', SpaceObjectPresets.JUPITER);
viz.createObject('saturn', SpaceObjectPresets.SATURN);
viz.createObject('uranus', SpaceObjectPresets.URANUS);
viz.createObject('neptune', SpaceObjectPresets.NEPTUNE);

// And a meteor shower!
window.PERSEIDS_EPHEM.forEach((rawEphem, idx) => {
  const ephem = new Ephem({
    a: rawEphem.a,
    e: rawEphem.e,
    i: rawEphem.i * Math.PI / 180,
    om: rawEphem.om * Math.PI / 180,
    w: rawEphem.w * Math.PI / 180,
    ma: 0,
    epoch: Math.random() * 2500000,
  });

  viz.createObject(`perseids_${idx}`, {
    hideOrbit: true,
    particleSize: 5,
    ephem,
  });
});
