// set particles options - `size` (must be greater than 0, if it is 0 then default size will be set) & `color` (hex format, as above)
// `min` and `max` create a range (min - max) in which we can change the size of particles (0 <= min <= value <= max)
const particleOptions = {
  size: {
    min: 0,
    max: 50,
    value: 10,
  },
  color: '#ff0000',
};

// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
  jd: 2458454.5,
  maxNumParticles: 2 ** 16,
  debug: {
    // showAxesHelper: true,
    showStats: true,
  },
});

// Create a skybox using NASA TYCHO artwork.
const skybox = viz.createStars();

// Create our first object - the sun - using a preset space object.
const sun = viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN);

// Then add some planets
viz.createObject('mercury', Spacekit.SpaceObjectPresets.MERCURY);
viz.createObject('venus', Spacekit.SpaceObjectPresets.VENUS);
viz.createObject('earth', Spacekit.SpaceObjectPresets.EARTH);
viz.createObject('mars', Spacekit.SpaceObjectPresets.MARS);
viz.createObject('jupiter', Spacekit.SpaceObjectPresets.JUPITER);
viz.createObject('saturn', Spacekit.SpaceObjectPresets.SATURN);
viz.createObject('uranus', Spacekit.SpaceObjectPresets.URANUS);
viz.createObject('neptune', Spacekit.SpaceObjectPresets.NEPTUNE);

// And a meteor shower!
window.PERSEIDS_EPHEM.forEach((rawEphem, idx) => {
  if (rawEphem.e > 0.9) {
    return;
  }
  const ephem = new Spacekit.Ephem({
    a: rawEphem.a,
    e: rawEphem.e,
    i: (rawEphem.i * Math.PI) / 180,
    om: (rawEphem.om * Math.PI) / 180,
    w: (rawEphem.w * Math.PI) / 180,
    ma: 0,
    epoch: Math.random() * 2500000,
  });

  viz.createObject(`perseids_${idx}`, {
    hideOrbit: true,
    particleSize: particleOptions.size.value,
    textureUrl: '{{assets}}/sprites/fuzzyparticle.png',
    ephem,
    theme: {
      color: convertColorToHex(particleOptions.color),
    },
  });
});

// create control panel
const gui = new dat.GUI();
const particleControl = gui.addFolder('Modify Particles');
particleControl.open();

const guiState = {
  color: convertColorToHex(particleOptions.color),
  size: particleOptions.size.value,
};

// change particles color
particleControl
  .addColor(guiState, 'color')
  .onChange((color) => changeParticleColor(color));

function changeParticleColor(color) {
  for (let i = 8; i < viz.particles.particleCount; i++) {
    viz.particles.setParticleColor(color, i);
  }
}

// change particles size
particleControl
  .add(guiState, 'size', particleOptions.size.min, particleOptions.size.max)
  .onChange((size) => changeParticleSize(size));

function changeParticleSize(size) {
  for (let i = 8; i < viz.particles.particleCount; i++) {
    viz.particles.setParticleSize(size, i);
  }
}

// convert hex string to hex number
function convertColorToHex(colorString) {
  const hexString = '0x' + colorString.slice(1);
  return parseInt(hexString, 16);
}
