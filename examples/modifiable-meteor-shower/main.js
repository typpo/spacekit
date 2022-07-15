// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
  jd: 2458454.5,
  maxNumParticles: 2 ** 16,
  debug: {
    // showAxesHelper: true,
    showStats: true,
  },
});

// Create a skybox using NASA TYCHO artwork.
const skybox = viz.createStars();

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

// And a meteor shower!
window.PERSEIDS_EPHEM.forEach((rawEphem, idx) => {
  if (rawEphem.e > 0.9) {
    return;
  }
  const ephem = new Spacekit.Ephem({
    a: rawEphem.a,
    e: rawEphem.e,
    i: (rawEphem.i * Math.PI) / 180,
    om: (rawEphem.om * Math.PI) / 180,
    w: (rawEphem.w * Math.PI) / 180,
    ma: 0,
    epoch: Math.random() * 2500000,
  });

  viz.createObject(`perseids_${idx}`, {
    hideOrbit: true,
    particleSize: 10,
    textureUrl: '{{assets}}/sprites/fuzzyparticle.png',
    ephem,
  });
});
