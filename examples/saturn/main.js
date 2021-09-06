/******************************************************************************
 * Visualization setup and definitions
 *****************************************************************************/

const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  jdPerSecond: 0.05,
  particleTextureUrl: '{{assets}}/sprites/fuzzyparticle.png',
  unitsPerAu: 100.0,
  camera: {
    initialPosition: [
      0.1739865009560048, -0.12915937125168006, 0.10357994703146715,
    ],
  },
});

// Create a light source somewhere off in the distance.
const SUN_POS = [5, 5, 1];
viz.createLight(SUN_POS);
viz.createObject(
  'sun',
  Object.assign(Spacekit.SpaceObjectPresets.SUN, {
    position: SUN_POS,
  }),
);

// Create a starry background using Yale Bright Star Catalog Data.
viz.createStars();

// Create saturn
const saturn = viz.createSphere('saturn', {
  textureUrl: './th_saturn.png',
  radius: 58232.503 / 149598000, // radius in AU, so Saturn is shown to scale
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
saturn.addRings(74270.580913, 140478.924731, './saturn_rings_top.png');

// Add its moons
const moonObjs = [];
let saturnSatellites = [];
viz.loadNaturalSatellites().then((loader) => {
  saturnSatellites = loader.getSatellitesForPlanet('saturn');
  saturnSatellites.forEach((moon) => {
    const obj = viz.createObject(moon.name, {
      labelText: moon.name,
      ephem: moon.ephem,
      particleSize: 50,
    });
    moonObjs.push(obj);
  });
});

/******************************************************************************
 * GUI and User Interactions below
 *****************************************************************************/

const guiState = {
  Speed: 0.05,
  Highlight: 'All',
  'Hide other orbits': false,
  'Hide labels': false,
  'Set Date': function () {
    const input = prompt('Enter a date in YYYY-MM-DD format', '2000-01-01');
    if (input) {
      viz.setDate(new Date(input));
    }
  },
};
const gui = new dat.GUI();
gui.add(guiState, 'Speed', 0, 20).onChange((val) => {
  viz.setJdPerSecond(val);
});

// Map from a category string to the tag in NaturalSatellites object.
const tagFilters = {
  All: 'ALL',
  None: 'NONE',
  'Regular orbits': 'REGULAR',
  'Irregular orbits': 'IRREGULAR',
  'Newly discovered': 'NEWLY_DISCOVERED',
  'Lost (unconfirmed)': 'LOST',
};

function resetDisplay() {
  const showLabels = !guiState['Hide labels'];
  moonObjs.forEach((moonObj) => {
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
    saturnSatellites
      .filter((moon) => moon.tags.has(tag))
      .map((moon) => moon.name),
  );

  const showLabels = !guiState['Hide labels'];
  moonObjs.forEach((moonObj) => {
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

gui
  .add(guiState, 'Highlight', Object.keys(tagFilters))
  .onChange((catString) => {
    const tag = tagFilters[catString];
    updateFilterDisplay(tag);
  });
gui.add(guiState, 'Hide other orbits').onChange(() => {
  updateFilterDisplay(tagFilters[guiState.Highlight]);
});
gui.add(guiState, 'Hide labels').onChange(() => {
  updateFilterDisplay(tagFilters[guiState.Highlight]);
});
//gui.add(guiState, 'Set Date');

window.THREE = Spacekit.THREE;
