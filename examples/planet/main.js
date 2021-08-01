// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
});

viz.createStars();

viz.createSphere('earth', {
  textureUrl: './eso_earth.jpg',
  debug: {
    showAxes: true,
  },
});
