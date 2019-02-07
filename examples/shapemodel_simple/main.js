const JD0 = 2451162.0;

// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  assetPath: '../../src/assets',
  jed: JD0,
  startPaused: true,
  enableCameraDrift: false,
  debug: {
    showAxesHelper: true,
  },
});

// Create a skybox using NASA TYCHO artwork.
//viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN);
viz.createObject('earth', Spacekit.SpaceObjectPresets.EARTH);

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

const pos = orb.getPositionAtTime(JD0);

// Create an object for 1998 XO94
const obj = viz.createShape('myobj', {
  position: pos,
  shape: {
    url: './1998_XO94.obj',
    //enableRotation: true,
  },
});

//viz.zoomToFit(obj, 5 /* zoom offset */);

// Add some light.
viz.createLight(obj, [0, 0, 0], 0xffffff);
viz.createAmbientLight();
