// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
});

viz.createStars();

viz.createSphere('earth', {
  debug: {
    showAxes: true,
  },
});
