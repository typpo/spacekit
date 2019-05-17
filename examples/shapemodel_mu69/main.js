// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
});

// Create a skybox using NASA TYCHO artwork.
// viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);
viz.createStars();

// Add some light.
viz.createLight();
viz.createAmbientLight();

// Create a shape object
const obj = viz.createShape('myobj', {
  shape: {
    shapeUrl: './2014_mu69.obj',
  },
});

viz.zoomToFit(obj, 1 /* zoom offset */);
