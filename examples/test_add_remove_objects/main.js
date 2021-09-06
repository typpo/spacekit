// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
  startDate: Date.now(),
  startPaused: true,
  camera: {
    enableDrift: true,
  },
  unitsPerAu: 1,
  camera: {
    initialPosition: [
      0.1739865009560048, -0.12915937125168006, 0.10357994703146715,
    ],
  },
});

viz.createLight([5, 5, 1]);

let asteroid = undefined;
let skybox = undefined;
let sun = undefined;
let earth = undefined;
let stars = undefined;
let staticParticles = undefined;
let sphere = undefined;

// Create a skybox using NASA TYCHO artwork.

// Create our first object - the sun - using a preset space object.

// Then add some planets
// viz.createObject('Mercury', Spacekit.SpaceObjectPresets.MERCURY);
// viz.createObject('Venus', Spacekit.SpaceObjectPresets.VENUS);
// viz.createObject('Earth', Spacekit.SpaceObjectPresets.EARTH);
// viz.createObject('Mars', Spacekit.SpaceObjectPresets.MARS);
// viz.createObject('Jupiter', Spacekit.SpaceObjectPresets.JUPITER);
// viz.createObject('Saturn', Spacekit.SpaceObjectPresets.SATURN);
// viz.createObject('Uranus', Spacekit.SpaceObjectPresets.URANUS);
// viz.createObject('Neptune', Spacekit.SpaceObjectPresets.NEPTUNE);

// Set up event listeners

document.getElementById('btn-add-asteroid').onclick = function () {
  if (!asteroid) {
    const ephem = new Spacekit.Ephem(
      {
        epoch: 2458600.5,
        a: 5.38533,
        e: 0.19893,
        i: 22.11137,
        om: 294.42992,
        w: 314.2889,
        ma: 229.14238,
      },
      'deg',
    );

    asteroid = viz.createObject('Asteroid Aci', {
      ephem,
      ecliptic: {
        displayLines: true,
        lineColor: 0x333333,
      },
      labelText: 'My asteroid',
    });
  }
};

document.getElementById('btn-remove-asteroid').onclick = function () {
  if (asteroid) {
    viz.removeObject(asteroid);
    asteroid = undefined;
  }
};

document.getElementById('btn-add-sun').onclick = function () {
  if (!sun) {
    sun = viz.createObject('Sun', Spacekit.SpaceObjectPresets.SUN);
  }
};

document.getElementById('btn-remove-sun').onclick = function () {
  if (sun) {
    viz.removeObject(sun);
    sun = undefined;
  }
};

document.getElementById('btn-add-earth').onclick = function () {
  if (!earth) {
    earth = viz.createObject('Earth', Spacekit.SpaceObjectPresets.EARTH);
  }
};

document.getElementById('btn-remove-earth').onclick = function () {
  if (earth) {
    viz.removeObject(earth);
    earth = undefined;
  }
};

document.getElementById('btn-add-skybox').onclick = function () {
  if (!skybox) {
    skybox = viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);
  }
};

document.getElementById('btn-remove-skybox').onclick = function () {
  if (skybox) {
    viz.removeObject(skybox);
    skybox = undefined;
  }
};

document.getElementById('btn-add-stars').onclick = function () {
  if (!stars) {
    stars = viz.createStars();
  }
};

document.getElementById('btn-remove-stars').onclick = function () {
  if (stars) {
    viz.removeObject(stars);
    stars = undefined;
  }
};

document.getElementById('btn-add-static').onclick = function () {
  if (!staticParticles) {
    staticParticles = viz.createStaticParticles(
      'Particles',
      [
        [1, 1, 1],
        [2, 2, 2],
      ],
      {},
    );
  }
};

document.getElementById('btn-remove-static').onclick = function () {
  if (staticParticles) {
    viz.removeObject(staticParticles);
    staticParticles = undefined;
  }
};

document.getElementById('btn-add-sphere').onclick = function () {
  if (!sphere) {
    sphere = viz.createSphere('fakePlanet', {
      textureUrl: '../saturn/th_saturn.png',
      radius: 0.75, // radius in AU, so Saturn is shown to scale
      levelsOfDetail: [
        { radii: 0, segments: 64 },
        { radii: 30, segments: 16 },
        { radii: 60, segments: 8 },
      ],
      atmosphere: {
        enable: true,
      },
      occludeLabels: true,
    });
    sphere.addRings(
      1 * 149598000,
      1.5 * 149598000,
      '../saturn/saturn_rings_top.png',
    );
  }
};

document.getElementById('btn-remove-sphere').onclick = function () {
  if (sphere) {
    viz.removeObject(sphere);
    sphere = undefined;
  }
};
