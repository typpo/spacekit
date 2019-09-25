const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  jdPerSecond: 0.1,
  particleTextureUrl: '{{assets}}/sprites/fuzzyparticle.png',
  unitsPerAu: 10.0,
  camera: {
    initialPosition: [
      0.0014980565625981512,
      -0.030445338891231168,
      0.03616394298897485,
    ],
  },
  startPaused: true,
});

// Create a light source somewhere off in the distance.
viz.createLight([0.025, 0.025, 0.005]);
viz.createAmbientLight(0x222222);

viz.createObject(
  'sun',
  Object.assign(Spacekit.SpaceObjectPresets.SUN, {
    position: [50, 50, 12.5],
  }),
);

// Create a starry background using Yale Bright Star Catalog Data.
viz.createStars();

// Create saturn
const saturn = viz.createSphere('saturn', {
  textureUrl: './th_saturn.png',
  radius: 58232.503 / 149598000, // radius in AU, so saturn is shown to scale
  levelsOfDetail: [
    { radii: 0, segments: 64 },
    { radii: 30, segments: 16 },
    { radii: 60, segments: 8 },
  ],
  atmosphere: {
    enable: true,
  },
  rotation: {
    //enable: true,
  },
  axialTilt: 26.73,
});
viz.zoomToFit(saturn);

// Add its moons
/*
const moonObjs = [];
let saturnSatellites = [];
viz.loadNaturalSatellites().then(loader => {
  saturnSatellites = loader.getSatellitesForPlanet('saturn');
  saturnSatellites.forEach(moon => {
    const ephem = moon.ephem.copy();
    // Add Saturn's axial tilt.
    ephem.set('i', moon.ephem.get('i', 'deg') + 26.73, 'deg');
    const obj = viz.createObject(moon.name, {
      labelText: moon.name,
      ephem,
      particleSize: 50,
    });
    moonObjs.push(obj);
  });
});
*/

// Set up gui and user interactions
const guiState = {
  Speed: 0.1,
  Show: 'All',
  'Hide other orbits': false,
  'Hide labels': false,
  'Set Date': function() {
    const input = prompt('Enter a date in YYYY-MM-DD format', '2000-01-01');
    if (input) {
      viz.setDate(new Date(input));
    }
  },
};
const gui = new dat.GUI();
gui.add(guiState, 'Speed', 0, 20).onChange(val => {
  viz.setJdPerSecond(val);
});

// Map from a category string to the tag in NaturalSatellites object.
const tagFilters = {
  All: 'ALL',
  Galilean: 'GALILEAN',
  'Prograde orbits': 'PROGRADE',
  'Retrograde orbits': 'RETROGRADE',
  'Himalia group': 'HIMALIA',
  'Carme group': 'CARME',
  'Ananke group': 'ANANKE',
  'Pasiphae group': 'PASIPHAE',
};

function resetDisplay() {
  const showLabels = !guiState['Hide labels'];
  moonObjs.forEach(moonObj => {
    moonObj.getOrbit().setVisibility(true);
    moonObj.getOrbit().setHexColor(0x444444);
    moonObj.setLabelVisibility(showLabels);
  });
}

function updateFilterDisplay(tag) {
  if (tag === 'ALL') {
    resetDisplay();
    return;
  }

  const matching = new Set(
    saturnSatellites.filter(moon => moon.tags.has(tag)).map(moon => moon.name),
  );

  const showLabels = !guiState['Hide labels'];
  moonObjs.forEach(moonObj => {
    if (matching.has(moonObj.getId())) {
      moonObj.getOrbit().setVisibility(true);
      moonObj.getOrbit().setHexColor(0xffff00);
      moonObj.setLabelVisibility(showLabels);
    } else if (guiState['Hide other orbits']) {
      moonObj.getOrbit().setVisibility(false);
      moonObj.setLabelVisibility(showLabels);
    } else {
      moonObj.getOrbit().setHexColor(0x444444);
      moonObj.getOrbit().setVisibility(true);
      moonObj.setLabelVisibility(showLabels);
    }
  });
}

gui.add(guiState, 'Show', Object.keys(tagFilters)).onChange(catString => {
  const tag = tagFilters[catString];
  updateFilterDisplay(tag);
});
gui.add(guiState, 'Hide other orbits').onChange(() => {
  updateFilterDisplay(tagFilters[guiState.Show]);
});
gui.add(guiState, 'Hide labels').onChange(() => {
  updateFilterDisplay(tagFilters[guiState.Show]);
});
gui.add(guiState, 'Set Date');

window.THREE = Spacekit.THREE;
