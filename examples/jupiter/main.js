const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  jd: 0,
  jdDelta: 0.020,
  camera: {
    //initialPosition: [0.04, 0.16, 2.6],
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
  radius: 0.025,
});
viz.zoomToFit(jupiter);

// Add its moons
Object.keys(Spacekit.EphemPresets.JUPITER_MOONS).forEach((name) => {
  viz.createObject(name, {
    labelText: name,
    ephem: Spacekit.EphemPresets.JUPITER_MOONS[name],
    particleSize: 5,
    theme: {
      color: 0xCCCCCC,
    },
  });
});
