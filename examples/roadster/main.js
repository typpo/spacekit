// Create the visualization and put it in our div.
const viz = new Container(document.getElementById('main-container'), {
  assetPath: '../../src/assets',
  jed: 2458461.459,
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

// Add spacex's tesla roadster
// Data from https://ssd.jpl.nasa.gov/horizons_batch.cgi?batch=1&COMMAND=-143205&CENTER=%27500@10%27&MAKE_EPHEM=YES&TABLE_TYPE=ELEMENTS&START_TIME=2018-05-01&STOP_TIME=%272018-05-01+00:00:01%27&OUT_UNITS=AU-D&REF_PLANE=ECLIPTIC&REF_SYSTEM=J2000&TP_TYPE=ABSOLUTE&ELEM_LABELS=YES&CSV_FORMAT=NO&OBJ_DATA=YES
// Glossary https://www.nablazerolabs.com/starman/20180207/

const roadster = viz.createObject('spaceman', {
  ephem: new Ephem({
    a: 1.324870564730606,
    e: 2.557785995665682E-01,
    i: 1.088451292866039 * Math.PI / 180,
    om: 3.170946964325638E+02 * Math.PI / 180,
    w: 1.774865822248395E+02 * Math.PI / 180,
    ma: 1.764302192487955E+02 * Math.PI / 180,
    epoch: 2458426.500000000,
  }),
});
