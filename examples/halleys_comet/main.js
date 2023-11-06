// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
  startDate: Date.now(),
  camera: {
    enableDrift: true,
  },
});

// Create a skybox using NASA TYCHO artwork.
viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

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
    epoch: 2439857.5,
    a: 17.93,
    e: 0.9679,
    i: 162.19,
    om: 59.11,
    w: 112.26,
    ma: 274.14,
  },
  'deg',
);

const asteroid = viz.createObject("Halley's Comet", {
  ephem,
  ecliptic: {
    displayLines: true,
    lineColor: 0x333333,
  },
  labelText: "Halley's Comet",
});

// Set up viewport
viz.zoomToFit(asteroid);

// Set up event listeners

document.getElementById('btn-start').onclick = function () {
  viz.start();
};
document.getElementById('btn-stop').onclick = function () {
  viz.stop();
};
document.getElementById('btn-set-time').onclick = function () {
  viz.setDate(new Date(prompt('Enter a date (YYYY-mm-dd)')));
};

document.getElementById('btn-set-jd-per-second').onclick = function () {
  viz.setJdPerSecond(parseInt(prompt('Enter jd per second'), 10));
};

document.getElementById('btn-faster').onclick = function () {
  viz.setJdDelta(viz.getJdDelta() * 1.5);
};

document.getElementById('btn-slower').onclick = function () {
  viz.setJdDelta(viz.getJdDelta() * 0.5);
};

const dateElt = document.getElementById('current-date');
viz.onTick = function () {
  const d = viz.getDate();
  dateElt.innerHTML = d.toLocaleDateString();
};
