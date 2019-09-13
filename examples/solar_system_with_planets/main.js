// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
  unitsPerAu: 100.0,
});

// Create a skybox using NASA TYCHO artwork.
viz.createStars();

// Create our first object - the sun - using a preset space object.
viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN);

// Then add some planets
viz.createObject('mercury', Spacekit.SpaceObjectPresets.MERCURY);
viz.createObject('venus', Spacekit.SpaceObjectPresets.VENUS);
viz.createObject('earth', Spacekit.SpaceObjectPresets.EARTH);
viz.createObject('mars', Spacekit.SpaceObjectPresets.MARS);
//viz.createObject('jupiter', Spacekit.SpaceObjectPresets.JUPITER);
viz.createObject('saturn', Spacekit.SpaceObjectPresets.SATURN);
viz.createObject('uranus', Spacekit.SpaceObjectPresets.URANUS);
viz.createObject('neptune', Spacekit.SpaceObjectPresets.NEPTUNE);

const jupiter = viz.createSphere('jupiter2', {
  textureUrl: './jupiter2_4k.jpg',
  //radius: 71492 / 149598000, // radius in AU, so jupiter is shown to scale
  radius: 0.1,
  ephem: Spacekit.EphemPresets.JUPITER,
});
viz.zoomToFit(jupiter);

console.log(jupiter.get3jsObjects()[0])

window.cam.lookAt(jupiter.get3jsObjects()[0])
viz.onTick = function() {
  const jd = viz.getJd();
  const jPos = jupiter.getPosition(jd);
  window.cam.position.set(jPos[0] * 1.1, jPos[1] * 1.1, jPos[2] * 2.1);
}

window.THREE = Spacekit.THREE;
