const JD0 = 2451162.0;

// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  assetPath: '../../src/assets',
  jed: JD0,
  startPaused: true,
  camera: {
    enableDrift: false,
  },
  debug: {
    showAxesHelper: true,
  },
});

// Create a skybox using NASA TYCHO artwork.
//viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

// Create sun and earth
const sun = viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN);
const earth = viz.createObject('earth', Spacekit.SpaceObjectPresets.EARTH);

// Create an object for 1998 XO94
const ephem = new Spacekit.Ephem({
  epoch: 2458600.5,
  a: 2.59606042418,
  e: 0.125657039973,
  i: 13.9887586977,
  om: 233.090320601,
  w: 136.171819336,
  ma: 27.6165122358,
}, 'deg');
const orb = new Spacekit.Orbit(ephem);
const astpos = orb.getPositionAtTime(JD0);
const obj = viz.createShape('myobj', {
  position: astpos,
  shape: {
    url: './1998_XO94.obj',
    //enableRotation: true,
  },
});

//viz.zoomToFit(obj, 5 /* zoom offset */);

// Set up camera
const earthpos = earth.getOrbit().getPositionAtTime(JD0);
viz.getCamera().position.set(earthpos[0], earthpos[1], earthpos[2]);
console.log('astpos', astpos)
viz.getControls().target = new THREE.Vector3(astpos[0], astpos[1], astpos[2]);

// Add some light.
//viz.createLight([0, 0, 0]);
viz.createLight();
viz.createAmbientLight();
