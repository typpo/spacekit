// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
  startDate: new Date(2020, 0, 2),
  jdPerSecond: 30,
  camera: {
    enableDrift: true,
  },
  debug: {
    // showAxesHelper: true,
    showStats: false,
  },
});

const iconUrl = '{{assets}}/sprites/smallparticle.png';

viz.createAmbientLight();
viz.createLight([0, 0, 0]);

// Create a skybox using NASA TYCHO artwork.
viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);
createStandardSolarSystemObjects();
configureLacadiaAsteroidObjects();
configureJupiter();
configureMarsAndMarsOrbiter();
configureRenderedAsteroid();

function createStandardSolarSystemObjects() {
  viz.createObject('Sun', Spacekit.SpaceObjectPresets.SUN);
  viz.createObject(
    'Mercury',
    Object.assign(Spacekit.SpaceObjectPresets.MERCURY, {
      labelText: 'Mercury',
    }),
  );
  viz.createObject(
    'Venus',
    Object.assign(Spacekit.SpaceObjectPresets.VENUS, {
      labelText: 'Venus',
    }),
  );
  viz.createObject(
    'Earth',
    Object.assign(Spacekit.SpaceObjectPresets.EARTH, {
      labelText: 'Earth',
    }),
  );

  viz.createObject(
    'Saturn',
    Object.assign(Spacekit.SpaceObjectPresets.SATURN, {
      labelText: 'Saturn',
    }),
  );
  viz.createObject(
    'Uranus',
    Object.assign(Spacekit.SpaceObjectPresets.URANUS, {
      labelText: 'Uranus',
    }),
  );
  viz.createObject(
    'Neptune',
    Object.assign(Spacekit.SpaceObjectPresets.NEPTUNE, {
      labelText: 'Neptune',
    }),
  );
  viz.createObject(
    'Pluto',
    Object.assign(Spacekit.SpaceObjectPresets.PLUTO, {
      labelText: 'Pluto',
    }),
  );
}

async function configureLacadiaAsteroidObjects() {
  const lacadieraEphemFile = await fetch('./lacadiera_ephem.json').then(
    (response) => response.json(),
  );

  const lacadieraEphem = new Spacekit.EphemerisTable(lacadieraEphemFile);

  const color = 0xffff00;
  const lacadiera = viz.createObject('Lacadiera', {
    ephemTable: lacadieraEphem,
    textureUrl: iconUrl,
    scale: [0.1, 0.1, 0.1],
    orbitPathSettings: {
      leadDurationYears: 0.5,
      trailDurationYears: 0.5,
      numberSamplePoints: 30,
    },
    theme: {
      orbitColor: color,
      color: color,
    },
    ecliptic: {
      displayLines: true,
      lineColor: color,
    },
    labelText: 'Lacadiera',
  });

  const lacadieraSat = viz.createObject('LacadieraSat', {
    labelText: 'LacadieraSat',
    ephem: new Spacekit.Ephem(
      {
        // These parameters define orbit shape.
        a: 0.3,
        e: 0.5,
        i: 52,

        // These parameters define the orientation of the orbit.
        om: 3.170946964325638e2,
        w: 1.774865822248395e2,
        ma: 1.764302192487955e2,

        // Where the object is in its orbit.
        epoch: 2458426.5,
      },
      'deg',
    ),
  });
  lacadieraSat.orbitAround(lacadiera);
}

async function configureJupiter() {
  const jupiterEphemFile = await fetch('./jupiter.json').then((r) => r.json());
  const jupiterEphemeris = new Spacekit.EphemerisTable(jupiterEphemFile);
  viz.createSphere('jupiter2', {
    textureUrl: './jupiter2_4k.jpg',
    //radius: 71492 / 149598000, // radius in AU, so jupiter is shown to scale
    radius: 0.1, // Exxagerate Jupiter's size
    ephemTable: jupiterEphemeris,
    levelsOfDetail: [
      { radii: 0, segments: 64 },
      { radii: 30, segments: 16 },
      { radii: 60, segments: 8 },
    ],
    atmosphere: {
      enable: true,
      color: 0xc7c1a8,
    },
    rotation: {
      enable: true,
      speed: 2,
    },
    orbitPathSettings: {
      leadDurationYears: 12,
    },
    labelText: 'Jupiter',
  });
}

async function configureRenderedAsteroid() {
  const asteroidEphemFile = await fetch('./asteroid.json').then((response) =>
    response.json(),
  );

  const asteroidEphm = new Spacekit.EphemerisTable(asteroidEphemFile);

  const asteroid = viz.createShape('asteroid', {
    ephemTable: asteroidEphm,
    shape: {
      shapeUrl:
        'https://raw.githubusercontent.com/typpo/spacekit/master/examples/asteroid_shape_from_earth/A1046.M1863.obj',
    },
    rotation: {
      lambdaDeg: 251,
      betaDeg: -63,
      period: 3.755067,
      yorp: 1.9e-8,
      phi0: 0,
      jd0: 2443568.0,
    },
    labelText: 'Asteroid',
  });

  asteroid.initRotation();
  asteroid.startRotation();

  const satEphemFile = await fetch('./satEphem.json').then((response) =>
    response.json(),
  );

  const satEphemeris = new Spacekit.EphemerisTable(satEphemFile);

  const color = 0x174b7a;
  const asteroidSat = viz.createObject('AsteroidSat', {
    ephemTable: satEphemeris,
    textureUrl: iconUrl,
    scale: [0.1, 0.1, 0.1],
    orbitPathSettings: {
      leadDurationYears: 0.2,
      trailDurationYears: 0.2,
      numberSamplePoints: 120,
    },
    theme: {
      orbitColor: color,
      color: color,
    },
    labelText: 'AsteroidSat',
  });

  asteroidSat.orbitAround(asteroid);
}

async function configureMarsAndMarsOrbiter() {
  const mars = viz.createObject(
    'Mars',
    Object.assign(Spacekit.SpaceObjectPresets.MARS, {
      labelText: 'Mars',
    }),
  );

  const satEphemFile = await fetch('./satEphem.json').then((response) =>
    response.json(),
  );

  const satEphemeris = new Spacekit.EphemerisTable(satEphemFile);

  const color = 0x187c23;
  const marsSat = viz.createObject('MarsSat', {
    ephemTable: satEphemeris,
    textureUrl: iconUrl,
    scale: [0.1, 0.1, 0.1],
    orbitPathSettings: {
      leadDurationYears: 0.01,
      trailDurationYears: 0.01,
      numberSamplePoints: 60,
    },
    theme: {
      orbitColor: color,
      color: color,
    },
    labelText: 'MarsSat',
  });

  marsSat.orbitAround(mars);
}

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

window.THREE = Spacekit.THREE;
