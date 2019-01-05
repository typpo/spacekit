// Create the visualization and put it in our div.
const viz = new Spacekit.Container(document.getElementById('main-container'), {
  assetPath: '../../src/assets',
  jed: 2458461.459,
  debug: {
    showAxesHelper: true,
    showStats: true,
  },
});

document.getElementById('btn-start').onclick = function() {
  viz.start();
};
document.getElementById('btn-stop').onclick = function() {
  viz.stop();
};
document.getElementById('btn-set-time').onclick = function() {
  viz.setDate(new Date(prompt('Enter a date (YYYY-mm-dd)')));
};

document.getElementById('btn-set-jed-per-second').onclick = function() {
  viz.setJedPerSecond(parseInt(prompt('Enter a date (YYYY-mm-dd)'), 10));
};

document.getElementById('btn-faster').onclick = function() {
  viz.setJedDelta(viz.getJedDelta() * 1.5);
};

document.getElementById('btn-slower').onclick = function() {
  viz.setJedDelta(viz.getJedDelta() * 0.5);
};

const dateElt = document.getElementById('current-date');
viz.onTick = function() {
  const d = viz.getDate();
  dateElt.innerHTML = d.toLocaleDateString();
};

// Create a skybox using NASA TYCHO artwork.
viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

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

viz.createObject('aci', {
  ephem: new Spacekit.Ephem({
    epoch: 2458600.5,
    a: 5.38533,
    e: 0.19893,
    i: 22.11137,
    om: 294.42992,
    w: 314.28890,
    ma: 229.14238,
  }, 'deg'),
  ecliptic: {
    displayLines: true,
    lineColor: 0x333333,
  },
});
