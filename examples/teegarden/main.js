const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  jd: 0,
  jdDelta: 0.025,
  camera: {
    initialPosition: [0.04, 0.16, 2.6],
  },
});

// Create a starry background using Yale Bright Star Catalog Data.
viz.createStars();

// Create our first object - the sun - using a preset space object.
viz.createObject('sun', {
  textureUrl: '{{assets}}/sprites/lensflare0.png',
  position: [0, 0, 0],
  scale: [0.1, 0.1, 0.1],
  theme: {
    color: 0xfdb813,
  },
});

// Then add some planets
viz.createObject(
  'earth',
  Object.assign(Spacekit.SpaceObjectPresets.EARTH, {
    labelText: 'Earth',
  }),
);

// http://exoplanet.eu/catalog/teegarden's_b/
viz.createObject('b', {
  labelText: 'Teegarden b',
  ephem: new Spacekit.Ephem(
    {
      // These parameters define orbit shape.
      a: 0.0252,
      e: 0.0,
      i: 0,

      // These parameters define the orientation of the orbit.
      om: 0,
      w: 77.0,
      ma: 0,

      // Where the object is in its orbit.
      epoch: 0,
    },
    'deg',
  ),
});

// http://exoplanet.eu/catalog/teegarden's_c/
viz.createObject('c', {
  labelText: 'Teegarden c',
  ephem: new Spacekit.Ephem(
    {
      // These parameters define orbit shape.
      a: 0.0443,
      e: 0.0,
      i: 0,

      // These parameters define the orientation of the orbit.
      om: 0,
      w: 286.0,
      ma: 0,

      // Where the object is in its orbit.
      epoch: 0,
    },
    'deg',
  ),
});
