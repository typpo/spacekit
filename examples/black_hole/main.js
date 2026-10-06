// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
  jdPerSecond: 1,
  camera: {
    initialPosition: [0, -9, 1.2],
  },
});

// The lensed background.
viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);
viz.createStars();

// A supermassive black hole with the mass of Sagittarius A*. Its event
// horizon is ~0.085 AU across, and light is ray traced along exact
// Schwarzschild geodesics within 60 Schwarzschild radii.
const blackHole = viz.createBlackHole('sgra', {
  position: [0, 0, 0],
  mass: 4.3e6,
  // Tilt the disk slightly toward the camera.
  diskNormal: [0, -0.12, 1],
  accretionDisk: {
    // In Schwarzschild radii. The disk starts at the innermost stable
    // circular orbit, 3 rs.
    outerRadius: 15,
    // The disk temperature follows from the mass and accretion rate, which
    // makes a realistic disk blue-white hot. Set `peakTemperature: 5000`
    // (in Kelvin) instead for an Interstellar-style orange glow.
    eddingtonRatio: 0.02,
  },
});

// Stars orbiting the black hole. Watch them get lensed into arcs as they
// pass behind it.
const stars = [
  { a: 14, e: 0.3, i: 85, om: 10, w: 30, ma: 200, color: 0xaaccff },
  { a: 22, e: 0.5, i: 95, om: 100, w: 250, ma: 90, color: 0xffd2a1 },
  { a: 30, e: 0.2, i: 70, om: 200, w: 120, ma: 10, color: 0xffffff },
];
stars.forEach((star, idx) => {
  viz.createObject(`star${idx}`, {
    textureUrl: '{{assets}}/sprites/lensflare0.png',
    scale: [0.6, 0.6, 0.6],
    theme: {
      color: star.color,
      orbitColor: 0x333333,
    },
    ephem: new Spacekit.Ephem(
      {
        a: star.a,
        e: star.e,
        i: star.i,
        om: star.om,
        w: star.w,
        ma: star.ma,
        epoch: viz.getJd(),
        GM: blackHole.getGM(),
      },
      'deg',
    ),
  });
});
