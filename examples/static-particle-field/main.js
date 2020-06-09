// Create the visualization and put it in our div.

const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
});

viz.createStars();

const surfacePositions = [];
const nearPositions = [];
const farPositions = [];
const surfaceParticlesCount = 10;
const nearParticlesCount = surfaceParticlesCount * 10;
const farParticlesCount = surfaceParticlesCount * 100;
const particleSize = 8;
fillParticles(surfaceParticlesCount, 1, 1, surfacePositions);
fillParticles(nearParticlesCount, 1.5, 2.5, nearPositions);
fillParticles(farParticlesCount, 2.5, 5, farPositions);
viz.createStaticParticles('surface', surfacePositions, {
  defaultColor: 'yellow',
  size: particleSize,
});
viz.createStaticParticles('near', nearPositions, {
  defaultColor: 0x0099ff,
  size: particleSize,
});
viz.createStaticParticles('far', farPositions, {});

viz.createSphere('earth', {
  textureUrl: './earth.jpg',
  debug: {
    showAxes: true,
  },
});

function fillParticles(count, minRange, maxRange, particles) {
  for (let i = 0; i < count; i++) {
    const newParticle = randomPosition(minRange, maxRange);
    particles.push(newParticle);
  }
}

function randomPosition(minRange, maxRange) {
  const delta = maxRange - minRange;
  let mag = 1;

  if (delta > 0) {
    mag = delta * Math.random() + minRange;
  }

  const ra = randomAngle(0, 2 * Math.PI);
  const dec = randomAngle(-Math.PI / 2, Math.PI / 2);
  const z = mag * Math.sin(dec);
  const x = mag * Math.cos(dec) * Math.cos(ra);
  const y = mag * Math.cos(dec) * Math.sin(ra);

  return [x, y, z];
}

function randomAngle(min, max) {
  const delta = max - min;
  return min + Math.random() * delta;
}
