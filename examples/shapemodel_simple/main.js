// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  assetPath: '../../src/assets',
});

// Create a skybox using NASA TYCHO artwork.
viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

// Add some light.
viz.createLight();
viz.createAmbientLight();

// Create an object for 1998 XO94
const obj = viz.createShape('myobj', {
  shape: {
    url: './1998_XO94.obj',
    enableRotation: true,
  },
});

viz.zoomToFit(obj, 5 /* zoom offset */);
