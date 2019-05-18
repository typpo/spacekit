// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
  // jd: 2458461.459,
  startDate: new Date(2019, 5, 21),
  startPaused: true,
  debug: {
    showAxes: true,
    showStats: true,
  },
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
viz.createObject('jupiter', Spacekit.SpaceObjectPresets.JUPITER);
viz.createObject('saturn', Spacekit.SpaceObjectPresets.SATURN);
viz.createObject('uranus', Spacekit.SpaceObjectPresets.URANUS);
viz.createObject('neptune', Spacekit.SpaceObjectPresets.NEPTUNE);

// Add spacex's tesla roadster
// Data from https://ssd.jpl.nasa.gov/horizons_batch.cgi?batch=1&COMMAND=-143205&CENTER=%27500@10%27&MAKE_EPHEM=YES&TABLE_TYPE=ELEMENTS&START_TIME=2018-05-01&STOP_TIME=%272018-05-01+00:00:01%27&OUT_UNITS=AU-D&REF_PLANE=ECLIPTIC&REF_SYSTEM=J2000&TP_TYPE=ABSOLUTE&ELEM_LABELS=YES&CSV_FORMAT=NO&OBJ_DATA=YES

const roadster = viz.createObject('spaceman', {
  ephem: new Spacekit.Ephem(
    {
      a: 1.324870564730606,
      epoch: 2458426.5,
      e: 2.557785995665682e-1,
      i: 1.07755072280486,
      om: 3.170946964325638e2,
      w: 1.774865822248395e2,
      ma: 1.764302192487955e2,
    },
    'deg',
  ),
});
