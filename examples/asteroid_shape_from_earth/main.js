// 1998 XO94
// const jdStart = 2451162.0;

// Cacus
const jdTest = 2443568.0;
const jdEquinox = 2458563.415278;
const jd2000 = 2451545.0;

const jdStart = jdTest;

// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
  jd: jdStart,
  // startDate: Date.now(),
  startPaused: true,
  camera: {
    enableDrift: false,
  },
  debug: {
    showAxes: true,
    showGrid: true,
  },
});
viz.renderOnlyInViewport();

// Create a skybox using NASA TYCHO artwork.
// viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

// Create sun and earth
const sun = viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN);
const earth = viz.createObject('earth', Spacekit.SpaceObjectPresets.EARTH);

// Create an object for asteroid
const ephemXO94 = new Spacekit.Ephem(
  {
    epoch: 2458600.5,
    a: 2.59606042418,
    e: 0.125657039973,
    i: 13.9887586977,
    om: 233.090320601,
    w: 136.171819336,
    ma: 27.6165122358,
  },
  'deg',
);
const ephemCacus = new Spacekit.Ephem(
  {
    epoch: 2458600.5,
    a: 1.12311722831,
    e: 0.214009725406,
    i: 26.0598473365,
    om: 161.236182852,
    w: 102.175880686,
    ma: 122.22725789,
  },
  'deg',
);
const ephemAriadne = new Spacekit.Ephem(
  {
    epoch: 2458600.5,
    a: 2.20347509373,
    e: 0.168321859048,
    i: 3.47139898527,
    om: 264.810208852,
    w: 16.2715173585,
    ma: 137.946567266,
  },
  'deg',
);
const ephemAmphitrite = new Spacekit.Ephem(
  {
    epoch: 2458600.5,
    a: 2.55411356494,
    e: 0.0726955386857,
    i: 6.08252245688,
    om: 356.341729978,
    w: 63.3632780541,
    ma: 284.235313247,
  },
  'deg',
);
// const orb = new Spacekit.Orbit(ephemXO94);
const orb = new Spacekit.Orbit(ephemCacus);
// const orb = new Spacekit.Orbit(ephemAriadne);
// const orb = new Spacekit.Orbit(ephemAmphitrite);
const astpos = orb.getPositionAtTime(jdStart);
const obj = viz.createShape('myobj', {
  position: astpos,
  shape: {
    // shapeUrl: './1998_XO94.obj',

    // http://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_asteroid_detail&asteroid_id=1046
    shapeUrl: './A1046.M1863.obj', // Cacus
    // shapeUrl: './A122.M1825.obj',   // Ariadne
    // enableRotation: true,
  },
  rotation: {
    lambdaDeg: 251,
    betaDeg: -63,
    period: 3.755067,
    yorp: 1.9e-8,
    phi0: 0,
    jd0: 2443568.0,
  },
  debug: {
    showAxes: true,
    showGrid: true,
  },
});

// Get the Spacekit version of THREE.js.
const THREE = Spacekit.THREE;

// Set up camera
const earthpos = earth.getOrbit().getPositionAtTime(jdStart);
viz
  .getViewer()
  .get3jsCamera()
  .position.set(earthpos[0], earthpos[1], earthpos[2]);
viz.getViewer().get3jsCameraControls().target = new THREE.Vector3(
  astpos[0],
  astpos[1],
  astpos[2],
);

// Add some light.
viz.createLight([0, 0, 0]);
viz.createAmbientLight();

const scene = viz.getScene();

function addSphere(x, y, z, color) {
  const geometry = new THREE.SphereGeometry(0.04, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color });
  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.set(x, y, z);
  scene.add(sphere);
}

// equinox
const equinoxPos = earth
  .getOrbit()
  .getPositionAtTime(jdEquinox, true /* debug */);
addSphere(equinoxPos[0], equinoxPos[1], equinoxPos[2], 0xff0000);
addSphere(earthpos[0], earthpos[1], earthpos[2], 0x00ff00);
