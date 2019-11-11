// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
  startDate: Date.now(),
});

viz.createStars();

// Create our first object - the sun - using a preset space object.
viz.createObject('Sun', Spacekit.SpaceObjectPresets.SUN);

// Then add some planets
viz.createObject('Mercury', Spacekit.SpaceObjectPresets.MERCURY);
viz.createObject('Venus', Spacekit.SpaceObjectPresets.VENUS);
viz.createObject('Earth', Spacekit.SpaceObjectPresets.EARTH);
viz.createObject('Mars', Spacekit.SpaceObjectPresets.MARS);
viz.createObject('Jupiter', Spacekit.SpaceObjectPresets.JUPITER);
viz.createObject('Saturn', Spacekit.SpaceObjectPresets.SATURN);
viz.createObject('Uranus', Spacekit.SpaceObjectPresets.URANUS);
viz.createObject('Neptune', Spacekit.SpaceObjectPresets.NEPTUNE);

const ephem = new Spacekit.Ephem(
  {
    epoch: 2458751.5,
    tp: 2458826.055634751262,
    a: -0.8514620715663804,
    q: 2.006568576283542,
    e: 3.356615336479035,
    n: 1.25445796493601,
    //e: 1.0,
    i: 44.05126537510564,
    om: 308.1483826038324,
    w: 209.1246306195056,
    ma: -93.52690984458057,
  },
  'deg',
);

const asteroid = viz.createObject('C/2019 Q4 (Borisov)', {
  ephem,
  theme: {
    orbitColor: 0xffff00,
  },
  labelText: 'Borisov',
});

// Set up viewport
//viz.zoomToFit(asteroid);
