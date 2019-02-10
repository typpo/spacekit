// 1998 XO94
//const jedStart = 2451162.0;

// Cacus
const jedTest = 2443568.0;
const jedEquinox = 2458563.415278;
const jed2000 = 2451545.0;

const jedStart = jedTest;

// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  assetPath: '../../src/assets',
  jed: jedStart,
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
//viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

// Create sun and earth
const sun = viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN);
const earth = viz.createObject('earth', Spacekit.SpaceObjectPresets.EARTH);

// Create an object for asteroid
const ephemXO94 = new Spacekit.Ephem({
  epoch: 2458600.5,
  a: 2.59606042418,
  e: 0.125657039973,
  i: 13.9887586977,
  om: 233.090320601,
  w: 136.171819336,
  ma: 27.6165122358,
}, 'deg');
const ephemCacus = new Spacekit.Ephem({
  epoch: 2458600.5,
  a: 1.12311722831,
  e: 0.214009725406,
  i: 26.0598473365,
  om: 161.236182852,
  w: 102.175880686,
  ma: 122.22725789,
}, 'deg');
//const orb = new Spacekit.Orbit(ephemXO94);
const orb = new Spacekit.Orbit(ephemCacus);
const astpos = orb.getPositionAtTime(jedStart);
const obj = viz.createShape('myobj', {
  position: astpos,
  shape: {
    //url: './1998_XO94.obj',

    //http://astro.troja.mff.cuni.cz/projects/asteroids3D/web.php?page=db_asteroid_detail&asteroid_id=1046
    url: './A1046.M1863.obj',
    //enableRotation: true,
  },
  debug: {
    showAxes: true,
  },
});

//viz.zoomToFit(obj, 5 /* zoom offset */);

// Set up camera
const earthpos = earth.getOrbit().getPositionAtTime(jedStart);
viz.getCamera().position.set(earthpos[0], earthpos[1], earthpos[2]);
viz.getControls().target = new THREE.Vector3(astpos[0], astpos[1], astpos[2]);

// Add some light.
viz.createLight([0, 0, 0]);
//viz.createLight();
viz.createAmbientLight();

const scene = viz.getScene();

function addSphere(x, y, z, color) {
  const geometry = new THREE.SphereGeometry(0.01, 32, 32);
  const material = new THREE.MeshBasicMaterial( {color: color} );
  const sphere = new THREE.Mesh( geometry, material );
  sphere.position.set(x, y, z);
  scene.add(sphere);
}

// equinox
const equinoxPos = earth.getOrbit().getPositionAtTime(jedEquinox);
addSphere(equinoxPos[0], equinoxPos[1], equinoxPos[2], 0xff0000);
addSphere(earthpos[0], earthpos[1], earthpos[2], 0x00ff00);
