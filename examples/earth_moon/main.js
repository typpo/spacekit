// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
  jdPerSecond: 5,
});

// Create a skybox using NASA TYCHO artwork.
//viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);
viz.createStars();

// Create our first object - the sun - using a preset space object.
viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN);

// Then add some planets
viz.createObject('mercury', Spacekit.SpaceObjectPresets.MERCURY);
viz.createObject('venus', Spacekit.SpaceObjectPresets.VENUS);
viz.createObject('mars', Spacekit.SpaceObjectPresets.MARS);
viz.createObject('jupiter', Spacekit.SpaceObjectPresets.JUPITER);
viz.createObject('saturn', Spacekit.SpaceObjectPresets.SATURN);
viz.createObject('uranus', Spacekit.SpaceObjectPresets.URANUS);
viz.createObject('neptune', Spacekit.SpaceObjectPresets.NEPTUNE);
viz.createObject('pluto', Spacekit.SpaceObjectPresets.PLUTO);

const earth = viz.createObject('earth', Object.assign(Spacekit.SpaceObjectPresets.EARTH, {
  labelText: 'Earth',

}));
const moon = viz.createObject('moon', Spacekit.SpaceObjectPresets.MOON);

moon.orbitAround(earth);
