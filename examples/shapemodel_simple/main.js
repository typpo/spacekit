// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  assetPath: '../../src/assets',
});

// Create a skybox using NASA TYCHO artwork.
viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

// Add some light.
viz.createLight();
viz.createAmbientLight();

// Create our first object - the sun - using a preset space object.
viz.createShape('myobj', {
  shape: {
    url: './1998_XO94.obj',
  },
});
