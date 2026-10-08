const T = Spacekit.THREE;
const unitsPerAu = 100;
const daysPerSecond = 0.05;

const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
  jdPerSecond: daysPerSecond,
  particleTextureUrl: '{{assets}}/sprites/fuzzyparticle.png',
  unitsPerAu,
});

// A light source off in the distance, as in the Saturn example.
const SUN_POS = [5, 5, 1];
viz.createLight(SUN_POS);
viz.createObject('sun', {
  ...Spacekit.SpaceObjectPresets.SUN,
  position: SUN_POS,
});
viz.createStars();

const saturnRadiusAu = 58232.503 / 149598000;
const saturn = viz.createSphere('saturn', {
  textureUrl: './th_saturn.png',
  radius: saturnRadiusAu,
  levelsOfDetail: [
    { radii: 0, segments: 64 },
    { radii: 30, segments: 16 },
    { radii: 60, segments: 8 },
  ],
  atmosphere: { enable: true },
  occludeLabels: true,
});
saturn.addRings(74270.580913, 140478.924731, './saturn_rings_top.png');

const MAJOR_MOONS = new Set([
  'Mimas',
  'Enceladus',
  'Tethys',
  'Dione',
  'Rhea',
  'Titan',
  'Hyperion',
  'Iapetus',
  'Phoebe',
]);
const moonObjs = [];
viz.loadNaturalSatellites().then((loader) => {
  loader.getSatellitesForPlanet('saturn').forEach((moon) => {
    const major = MAJOR_MOONS.has(moon.name);
    moonObjs.push(
      viz.createObject(moon.name, {
        labelText: major ? moon.name : undefined,
        ephem: moon.ephem,
        particleSize: major ? 60 : 30,
        theme: { orbitColor: major ? 0x667788 : 0x333a44 },
      }),
    );
  });
});

// A hypothetical intermediate-mass black hole of 10,000 solar masses, just
// beyond Titan's orbit. Its horizon radius is about half of Saturn's.
const massSolar = 1e4;
const outward = new T.Vector3(1, -0.55, 0.12).normalize();
const holePosition = outward.clone().multiplyScalar(0.012);
const screenUp = new T.Vector3(0, 0, 1)
  .addScaledVector(outward, -outward.z)
  .normalize();
const sideways = new T.Vector3().crossVectors(outward, screenUp);

let blackHole;
try {
  blackHole = viz.createBlackHole('black-hole', {
    massSolar,
    position: holePosition.toArray(),
    // Level on screen in the main view, about 10 degrees from edge-on.
    diskNormal: screenUp.clone().addScaledVector(outward, 0.18).toArray(),
    quality: 'low',
    lensScene: true,
    accretionDisk: {
      outerRadius: 6,
      temperature: 7500,
      turbulence: 0.85,
      // Play the gas at 200x real time despite the simulation clock.
      rotationSpeed: 200 / (daysPerSecond * 86400),
    },
  });
} catch (err) {
  document.getElementById('error').textContent = err.message;
}

// Camera positions in AU, relative to Saturn.
const views = {
  // Looking back at Saturn through the hole, slightly off axis so Saturn is
  // lensed into arcs rather than a perfect ring.
  lensed: {
    position: holePosition
      .clone()
      .addScaledVector(outward, 0.009)
      .addScaledVector(sideways, 0.0005),
    target: holePosition,
  },
  system: {
    position: new T.Vector3(0.012, -0.04, 0.018),
    target: holePosition.clone().multiplyScalar(0.5),
  },
  saturn: {
    position: new T.Vector3(0.0045, -0.0034, 0.0027),
    target: new T.Vector3(0, 0, 0),
  },
};
const controls = viz.getViewer().get3jsCameraControls();
const camera = viz.getViewer().get3jsCamera();
function setView(name) {
  camera.position.copy(views[name].position).multiplyScalar(unitsPerAu);
  controls.target.copy(views[name].target).multiplyScalar(unitsPerAu);
  controls.update();
}
setView('lensed');

const radiusKm = Spacekit.schwarzschildRadiusAu(massSolar) * 149597870.7;
document.getElementById(
  'facts',
).textContent = `10,000 solar masses · Horizon radius ${Math.round(
  radiusKm,
).toLocaleString()} km · ${(0.012 * 149.6).toFixed(1)} million km from Saturn`;
document.getElementById('view').addEventListener('change', (event) => {
  setView(event.target.value);
});
let paused = false;
document.getElementById('pause').addEventListener('click', (event) => {
  paused = !paused;
  if (paused) viz.stop();
  else viz.start();
  event.target.textContent = paused ? 'Play' : 'Pause';
});
document.getElementById('orbits').addEventListener('change', (event) => {
  moonObjs.forEach((moon) =>
    moon.getOrbit().setVisibility(event.target.checked),
  );
});
document.getElementById('disk').addEventListener('change', (event) => {
  if (blackHole) blackHole.setDiskEnabled(event.target.checked);
});
document.getElementById('lensing').addEventListener('change', (event) => {
  if (blackHole) blackHole.setSceneLensingEnabled(event.target.checked);
});
const dateEl = document.getElementById('date');
viz.onTick = () => {
  dateEl.textContent = viz.getDate().toISOString().slice(0, 10);
};
