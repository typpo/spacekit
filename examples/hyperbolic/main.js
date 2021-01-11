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

viz.createObject('C/2019 Q4 (Borisov)', {
  ephem: new Spacekit.Ephem(
    {
      epoch: 2458751.5,
      a: -0.8514620715663804,
      e: 3.356615336479035,
      q: 2.006568576283542,
      n: 1.25445796493601,
      i: 44.05126537510564,
      om: 308.1483826038324,
      w: 209.1246306195056,
      ma: -93.52690984458057,
    },
    'deg',
  ),
  theme: {
    orbitColor: 0xffff00,
  },
  ecliptic: {
    displayLines: true,
    lineColor: 0xffff00,
  },
  labelText: 'Borisov',
});

viz.createObject("'Oumuamua", {
  ephem: new Spacekit.Ephem(
    {
      epoch: 2458080.5,
      a: -1.27234500742808,
      e: 1.201133796102373,
      q: 0.2559115812959116,
      n: 0.6867469493413392,
      i: 122.7417062847286,
      om: 24.59690955523242,
      w: 241.8105360304898,
      ma: 51.1576197938249,
      tp: 2458006.01,
    },
    'deg',
  ),
  theme: {
    orbitColor: 0xff00ff,
  },
  labelText: "'Oumuamua",
});

// Parabolic orbit
viz.createObject('Great Comet of 1680', {
  ephem: new Spacekit.Ephem(
    {
      tp: 2335019.9876,
      epoch: 2335000.5,
      a: 444.4285714,
      e: 0.999986,
      q: 0.006222,
      n: 276.6339,
      i: 60.6784,
      om: 276.6339,
      w: 350.6128,
      ma: -0.00205,
    },
    'deg',
  ),
  theme: {
    orbitColor: 0x00ffff,
  },
  ecliptic: {
    displayLines: true,
    lineColor: 0x00ffff,
  },
  labelText: 'Comet of 1680',
});

viz.createObject('C/2007 Q1 (Garradd)', {
  ephem: new Spacekit.Ephem(
    {
      tp: 2454080.665214673185,
      epoch: 2454341.5,
      e: 1.0,
      q: 2.988209640532016,
      i: 81.98342608877171,
      om: 5.901026865423434,
      w: 282.1065839959668,
    },
    'deg',
  ),
  theme: {
    orbitColor: 0x00ffff,
  },
  labelText: 'C/2007 Q1 (Garradd)',
});
