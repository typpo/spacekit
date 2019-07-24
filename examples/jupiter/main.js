const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  jdPerSecond: 0.1,
  particleTextureUrl: '{{assets}}/sprites/fuzzyparticle.png',
  camera: {
    initialPosition: [0.0014980565625981512, -0.030445338891231168, 0.03616394298897485],
  },
  debug: {
    showAxes: true,
  },
});

// Create a starry background using Yale Bright Star Catalog Data.
viz.createStars();

// Create jupiter
const jupiter = viz.createSphere('jupiter', {
  textureUrl: './jupiter_texture.jpg',
  radius: 71492 / 149598000, // radius in AU, so jupiter is shown to scale
});
viz.zoomToFit(jupiter);

// Add its moons
const moonObjs = [];
let jupiterSatellites = [];
viz.loadNaturalSatellites().then((loader) => {
  jupiterSatellites = loader.getSatellitesForPlanet('jupiter');
  jupiterSatellites.forEach((moon) => {
    const obj = viz.createObject(moon.name, {
      labelText: moon.name,
      ephem: moon.ephem,
      particleSize: 50,
    });
    moonObjs.push(obj);
  });
});

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
  }
};
const gui = new dat.GUI();
gui.add(guiState, 'Speed', 0, 20).onChange((val) => {
  viz.setJdPerSecond(val);
});

// Map from a category string to the tag in NaturalSatellites object.
const tagFilters = {
  'All': 'ALL',
  'Galilean': 'GALILEAN',
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
    moonObj.getOrbit().setHexColor(0x888888);
    moonObj.setLabelVisibility(showLabels);
  });
}

function updateFilterDisplay(tag) {
  if (tag === 'ALL') {
    resetDisplay();
    return;
  }

  const matching = new Set(jupiterSatellites
                              .filter((moon) => moon.tags.has(tag))
                              .map(moon => moon.name));

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
      moonObj.getOrbit().setHexColor(0x888888);
      moonObj.getOrbit().setVisibility(true);
      moonObj.setLabelVisibility(showLabels);
    }
  });
}

gui.add(guiState, 'Show', Object.keys(tagFilters)).onChange((catString) => {
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
