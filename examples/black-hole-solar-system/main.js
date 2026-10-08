// Combines simple/, jupiter_in_the_solar_system/, saturn/, halleys_comet/,
// and black-hole/. The black hole is a visual neighbor, not an N-body force.
const T = Spacekit.THREE;
const cometEphem = new Spacekit.Ephem(
  {
    epoch: 2439857.5,
    a: 17.93,
    e: 0.9679,
    i: 162.19,
    om: 59.11,
    w: 112.26,
    ma: 274.14,
  },
  'deg',
);
// Start near the perihelion of this example's two-body Halley orbit.
const perihelionJd =
  cometEphem.get('epoch') +
  (2 * Math.PI - cometEphem.get('ma')) / cometEphem.get('n');
let daysPerSecond = 10;
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
  jd: perihelionJd - 120,
  jdPerSecond: daysPerSecond,
  camera: { initialPosition: [6.5, -22, 15] },
});
const camera = viz.getViewer().get3jsCamera();
const controls = viz.getViewer().get3jsCameraControls();
controls.minDistance = 0.5;
controls.maxDistance = 180;

// Reuse the Milky Way image and sky convention from the black-hole example.
const skyCanvas = document.createElement('canvas');
skyCanvas.width = 4096;
skyCanvas.height = 2048;
const skyContext = skyCanvas.getContext('2d');
skyContext.fillStyle = '#030508';
skyContext.fillRect(0, 0, skyCanvas.width, skyCanvas.height);
const backgroundTexture = new T.CanvasTexture(skyCanvas);
backgroundTexture.wrapS = T.RepeatWrapping;
const skyImage = new Image();
skyImage.onload = () => {
  skyContext.save();
  skyContext.scale(-1, 1);
  skyContext.drawImage(
    skyImage,
    -skyCanvas.width,
    0,
    skyCanvas.width,
    skyCanvas.height,
  );
  skyContext.restore();
  backgroundTexture.needsUpdate = true;
};
skyImage.onerror = () => {
  document.getElementById('error').textContent =
    'The Milky Way background could not load.';
};
skyImage.src = '../../src/assets/skybox/eso_milkyway.jpg';

const sun = viz.createObject('sun', {
  ...Spacekit.SpaceObjectPresets.SUN,
  scale: [1.3, 1.3, 1.3],
  labelText: 'Sun',
});
viz.createLight([0, 0, 0]);

// The display radii are deliberately enlarged; the orbital distances are AU.
const planetDefinitions = [
  { name: 'Mercury', color: 0xb9b3aa },
  { name: 'Venus', color: 0xe6c990 },
  {
    name: 'Earth',
    color: 0x73c9f4,
    radius: 0.1,
    texture: '../planet/eso_earth.jpg',
  },
  { name: 'Mars', color: 0xe68662 },
  {
    name: 'Jupiter',
    color: 0xdfb38d,
    radius: 0.36,
    texture: '../jupiter/jupiter2_4k.jpg',
  },
  {
    name: 'Saturn',
    color: 0xe2d1a4,
    radius: 0.28,
    texture: '../saturn/th_saturn.png',
  },
  { name: 'Uranus', color: 0x92e0de },
  { name: 'Neptune', color: 0x779cef },
];
const planets = {};
for (const planet of planetDefinitions) {
  const options = {
    ...Spacekit.SpaceObjectPresets[planet.name.toUpperCase()],
    labelText: planet.name,
    particleSize: 10,
    theme: { color: planet.color, orbitColor: 0x38465a },
  };
  planets[planet.name] = planet.texture
    ? viz.createSphere(planet.name.toLowerCase(), {
        ...options,
        radius: planet.radius,
        textureUrl: planet.texture,
        // SphereObject registers itself; add its orbit separately below to
        // avoid a second subscription during base-object initialization.
        hideOrbit: true,
        levelsOfDetail: [
          { radii: 0, segments: 48 },
          { radii: 40, segments: 24 },
        ],
        rotation: { enable: true, speed: 0.15 },
      })
    : viz.createObject(planet.name.toLowerCase(), options);
  if (planet.texture) {
    viz
      .getScene()
      .add(planets[planet.name].getOrbit().getOrbitShape(viz.getJd()));
  }
}
// addRings accepts kilometres, so convert the enlarged display radii from AU.
planets.Saturn.addRings(
  0.36 * 149597870.7,
  0.62 * 149597870.7,
  '../saturn/saturn_rings_top.png',
);

const comet = viz.createObject('halley', {
  ephem: cometEphem,
  labelText: "Halley's Comet",
  particleSize: 16,
  theme: { color: 0x9cecff, orbitColor: 0x5595a7 },
});
// A small illustrative tail points away from the Sun and fades far from it.
const tailPositions = new Float32Array(100 * 3);
for (let i = 0; i < 100; i++) {
  const t = i / 99;
  const angle = i * 2.399963;
  tailPositions[i * 3] = t;
  tailPositions[i * 3 + 1] = Math.cos(angle) * t * 0.055;
  tailPositions[i * 3 + 2] = Math.sin(angle) * t * 0.055;
}
const tailGeometry = new T.BufferGeometry();
tailGeometry.setAttribute('position', new T.BufferAttribute(tailPositions, 3));
const tail = new T.Points(
  tailGeometry,
  new T.PointsMaterial({
    color: 0x8edcff,
    size: 0.035,
    map: new T.TextureLoader().load(
      '../../src/assets/sprites/smallparticle.png',
    ),
    transparent: true,
    opacity: 0.6,
    depthWrite: false,
    blending: T.AdditiveBlending,
  }),
);

const blackHolePosition = new T.Vector3(7.5, 3.5, 0.6);
let blackHole;
try {
  blackHole = viz.createBlackHole('black-hole', {
    massSolar: 4e6,
    position: blackHolePosition.toArray(),
    diskNormal: [0, 0.45, 1],
    quality: 'low',
    lensScene: true,
    backgroundTexture,
    accretionDisk: {
      outerRadius: 30,
      temperature: 7500,
      opticalDepth: 2,
      aspectRatio: 0.025,
      turbulence: 0.85,
      // Compensate for the fast planet clock: the gas still plays at 200x.
      rotationSpeed: 200 / (daysPerSecond * 86400),
    },
  });
} catch (err) {
  document.getElementById('error').textContent = err.message;
  document.getElementById('disk').disabled = true;
}
const blackHoleLabel = viz.createObject('black-hole-label', {
  position: blackHolePosition.toArray(),
  textureUrl: '{{assets}}/sprites/smallparticle.png',
  scale: [0.001, 0.001, 0.001],
  labelText: 'Black hole',
});

const orbitObjects = [...Object.values(planets), comet];
const labelObjects = [sun, ...orbitObjects, blackHoleLabel];
const innerLabels = [planets.Mercury, planets.Venus, planets.Mars];
function updateLabels() {
  const enabled = document.getElementById('labels').checked;
  for (const object of labelObjects) {
    const visible =
      enabled &&
      (!innerLabels.includes(object) || camera.position.length() < 9);
    if (object.getLabelVisibility() !== visible)
      object.setLabelVisibility(visible);
  }
}
controls.addEventListener('change', updateLabels);
let following;
let paused = false;
const followPosition = new T.Vector3();
const offset = new T.Vector3();
const tailAxis = new T.Vector3(1, 0, 0);
const cometPosition = new T.Vector3();

function updateScene(jd) {
  cometPosition.fromArray(comet.getPosition(jd));
  const distance = cometPosition.length();
  tail.position.copy(cometPosition);
  tail.quaternion.setFromUnitVectors(
    tailAxis,
    cometPosition.clone().normalize(),
  );
  tail.scale.setScalar(Math.min(2.0, 3 / Math.max(distance, 0.5)));
  tail.material.opacity = 0.6 * Math.max(0, 1 - distance / 6);
  tail.visible = distance < 6;
  if (following) {
    followPosition.fromArray(following.getPosition(jd));
    offset.copy(followPosition).sub(controls.target);
    camera.position.add(offset);
    controls.target.copy(followPosition);
  }
}
// Updating after the planets, before the camera, keeps following smooth.
viz.addObject({
  getId: () => 'comet-tail-and-camera',
  get3jsObjects: () => [tail],
  update: updateScene,
});

function setView(name) {
  following = undefined;
  controls.enablePan = true;
  controls.minDistance = 0.5;
  let target = new T.Vector3(2.5, 0, 0);
  let position = new T.Vector3(4, -22, 15);
  if (name === 'inner') {
    target.set(0, 0, 0);
    position.set(0.5, -4.5, 3.5);
  } else if (name === 'black-hole') {
    target.copy(blackHolePosition);
    position.set(-6.3, 0, 0.8);
    controls.minDistance = 1.2;
  } else if (name === 'lensed-sun') {
    target.copy(blackHolePosition);
    position.copy(blackHolePosition).normalize().multiplyScalar(6.3);
    controls.minDistance = 1.2;
  } else if (name === 'lensed-jupiter') {
    target.copy(blackHolePosition);
    position
      .copy(blackHolePosition)
      .sub(new T.Vector3().fromArray(planets.Jupiter.getPosition(viz.getJd())))
      .normalize()
      .multiplyScalar(6.3);
    controls.minDistance = 1.2;
  } else if (name === 'all') {
    target.set(0, 0, 0);
    position.set(12, -60, 45);
  } else if (['earth', 'jupiter', 'comet'].includes(name)) {
    following = { earth: planets.Earth, jupiter: planets.Jupiter, comet }[name];
    target.fromArray(following.getPosition(viz.getJd()));
    position.set(0.8, -2.5, 1.3);
    if (name === 'comet') position.set(1.5, -4, 2);
    controls.enablePan = false;
  }
  // Discard any remaining orbit-control damping before changing the target.
  const damping = controls.enableDamping;
  controls.enableDamping = false;
  controls.update();
  controls.target.copy(target);
  camera.position.copy(target).add(position);
  controls.update();
  controls.enableDamping = damping;
  labelObjects.forEach((object) => object.update(viz.getJd(), true));
}

function fitFieldOfView() {
  const container = document.getElementById('main-container');
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.fov =
    (2 *
      Math.atan(
        Math.tan((25 * Math.PI) / 180) * Math.max(1, 1 / camera.aspect),
      ) *
      180) /
    Math.PI;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', fitFieldOfView);
fitFieldOfView();
const viewSelect = document.getElementById('view');
const requestedView = new URLSearchParams(window.location.search).get('view');
if ([...viewSelect.options].some((option) => option.value === requestedView)) {
  viewSelect.value = requestedView;
}
setView(viewSelect.value);

document
  .getElementById('view')
  .addEventListener('change', (event) => setView(event.target.value));
document.getElementById('pause').addEventListener('click', (event) => {
  paused = !paused;
  if (paused) viz.stop();
  else viz.start();
  event.target.textContent = paused ? 'Resume' : 'Pause';
});
document.getElementById('speed').addEventListener('change', (event) => {
  daysPerSecond = Number(event.target.value);
  if (blackHole) blackHole.setRotationSpeed(200 / (daysPerSecond * 86400));
  viz.setJdPerSecond(daysPerSecond);
});
document.getElementById('perihelion').addEventListener('click', () => {
  viz.setJd(perihelionJd - 30);
  document.getElementById('view').value = 'comet';
  setView('comet');
});
document.getElementById('orbits').addEventListener('change', (event) => {
  orbitObjects.forEach((object) =>
    object.getOrbit().setVisibility(event.target.checked),
  );
});
document.getElementById('labels').addEventListener('change', updateLabels);
document.getElementById('disk').addEventListener('change', (event) => {
  if (blackHole) blackHole.setDiskEnabled(event.target.checked);
});
document.getElementById('lensing').addEventListener('change', (event) => {
  if (!blackHole) return;
  blackHole.setSceneLensingEnabled(event.target.checked);
});
const dateElement = document.getElementById('date');
viz.onTick = () => {
  const date = viz.getDate();
  dateElement.textContent = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
  dateElement.dateTime = date.toISOString();
  // Simulation time can be paused while the user is still moving the camera.
  if (paused)
    labelObjects.forEach((object) => object.update(viz.getJd(), true));
};
