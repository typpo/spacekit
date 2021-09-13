/******************************************************************************
 * Visualization setup and definitions
 *****************************************************************************/

const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  jdPerSecond: 0.05,
  particleTextureUrl: '{{assets}}/sprites/fuzzyparticle.png',
  unitsPerAu: 1.0,
  camera: {
    initialPosition: [1, 1, 1],
  },
});

// Faraway stars
(async function () {
  const result = await fetch('./stars.json');
  const json = await result.json();
  const positions = json.map((star) => [star.X, star.Y, star.Z]);
  viz.createStaticParticles('backgroundStars', positions, {
    defaultColor: 0xffb56c,
    size: 5,
  });
})();

// Black hole
const sagA = viz.createBlackHole('Sagittarius A*', {
  color: 0x404040,
  radius: 0.147059128,
});

/*
const starObjs = [];
let saturnSatellites = [];
viz.loadNaturalSatellites().then((loader) => {
  saturnSatellites = loader.getSatellitesForPlanet('saturn');
  saturnSatellites.forEach((moon) => {
    const obj = viz.createObject(moon.name, {
      labelText: moon.name,
      ephem: moon.ephem,
      particleSize: 50,
    });
    starObjs.push(obj);
  });
});
*/

/******************************************************************************
 * GUI and User Interactions below
 *****************************************************************************/

/*
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
  starObjs.forEach((moonObj) => {
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
  starObjs.forEach((moonObj) => {
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
*/
