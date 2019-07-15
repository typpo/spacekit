const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  jdPerSecond: 0.1,
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
  radius: 71492 / 149598000,  // radius in AU, so jupiter is shown to scale
});
viz.zoomToFit(jupiter);

// Add its moons
viz.loadNaturalSatellites().then((loader) => {
  loader.getSatellitesForPlanet('jupiter').slice(0, 1).forEach((moon) => {
    viz.createObject(moon.name, {
      labelText: moon.name,
      ephem: moon.ephem,
      particleSize: 20,
      theme: {
        color: 0xCCCCCC,
      },
    });
  });

});
