const T = Spacekit.THREE;
const deg = Math.PI / 180;

// The planet clock. The gas pattern below is slowed to match.
const daysPerSecond = 20;
const startJd = 2458454.5;

const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
  jd: startJd,
  jdPerSecond: daysPerSecond,
  maxNumParticles: 2 ** 14,
  particleTextureUrl: '{{assets}}/sprites/fuzzyparticle.png',
});

viz.createStars();
viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN);
[
  'MERCURY',
  'VENUS',
  'EARTH',
  'MARS',
  'JUPITER',
  'SATURN',
  'URANUS',
  'NEPTUNE',
].forEach((name) => {
  viz.createObject(name.toLowerCase(), Spacekit.SpaceObjectPresets[name]);
});

// The Perseid stream. Each catalogued meteoroid orbit seeds a small cloud of
// neighbours with slightly perturbed elements spread around the whole orbit,
// so the stream is dense enough to show lensing. The simulation's GPU
// particle system propagates them all, without a SpaceObject per meteoroid.
const perseids = window.PERSEIDS_EPHEM.filter((e) => e.e <= 0.9);
const CLONES = 40;
const stream = viz.getContext().objects.particles;
let seed = 7;
function random() {
  seed = (1664525 * seed + 1013904223) >>> 0;
  return seed / 4294967296;
}
const jitter = (spread) => (random() - 0.5) * 2 * spread;
perseids.forEach((raw) => {
  for (let k = 0; k < CLONES; k++) {
    stream.addParticle(
      new Spacekit.Ephem({
        a: raw.a * (1 + jitter(0.03)),
        e: Math.min(0.95, raw.e + jitter(0.005)),
        i: (raw.i + jitter(0.4)) * deg,
        om: (raw.om + jitter(0.4)) * deg,
        w: (raw.w + jitter(0.4)) * deg,
        ma: random() * 2 * Math.PI,
        epoch: startJd,
      }),
      { particleSize: 16, color: 0xffe2b8 },
    );
  }
});

// The cloned orbits spread the stream into a broad, crescent-shaped sheet
// close to the meteoroids' shared orbital plane. Find its densest patch at the
// start date, then sit the hole in front of it and look through it along the
// orbit normal, so the sheet fills the view behind the shadow.
const orbitNormal = new T.Vector3(0, 0, 1).applyMatrix4(
  new T.Matrix4()
    .makeRotationZ(
      (perseids.reduce((sum, e) => sum + e.om, 0) / perseids.length) * deg,
    )
    .multiply(
      new T.Matrix4().makeRotationX(
        (perseids.reduce((sum, e) => sum + e.i, 0) / perseids.length) * deg,
      ),
    ),
);
const positions = stream.elements.map(
  (ephem) =>
    new T.Vector3(...new Spacekit.Orbit(ephem, {}).getPositionAtTime(startJd)),
);
let streamCenter = positions[0];
let densest = 0;
for (let k = 0; k < positions.length; k += 10) {
  const neighbours = positions.filter(
    (p) => p.distanceTo(positions[k]) < 1,
  ).length;
  if (neighbours > densest) {
    densest = neighbours;
    streamCenter = positions[k];
  }
}
const across = new T.Vector3()
  .crossVectors(orbitNormal, streamCenter)
  .normalize();

const holePosition = streamCenter.clone().addScaledVector(orbitNormal, 2);
const views = {
  stream: {
    position: holePosition
      .clone()
      .addScaledVector(orbitNormal, 3.5)
      .addScaledVector(across, 0.3),
    target: holePosition,
  },
  overview: {
    position: new T.Vector3(-6, -24, 14),
    target: new T.Vector3(0, 0, 0),
  },
};

let blackHole;
try {
  blackHole = viz.createBlackHole('black-hole', {
    massSolar: 4e6,
    position: holePosition.toArray(),
    // Level on screen (the camera's up is ecliptic north) and seen about 10
    // degrees from edge-on.
    diskNormal: new T.Vector3(0, 0, 1)
      .addScaledVector(orbitNormal, -orbitNormal.z)
      .normalize()
      .addScaledVector(orbitNormal, 0.18)
      .toArray(),
    quality: 'low',
    lensScene: true,
    accretionDisk: {
      outerRadius: 6,
      temperature: 7500,
      turbulence: 0.85,
      // Play the gas at 200x real time despite the 20-day-per-second clock.
      rotationSpeed: 200 / (daysPerSecond * 86400),
    },
  });
} catch (err) {
  document.getElementById('error').textContent = err.message;
}

const controls = viz.getViewer().get3jsCameraControls();
const camera = viz.getViewer().get3jsCamera();
function setView(name) {
  camera.position.copy(views[name].position);
  controls.target.copy(views[name].target);
  controls.update();
}
setView('stream');

document.getElementById('facts').textContent = `${(
  perseids.length * CLONES
).toLocaleString()} Perseid meteoroids · 4 million solar masses at ${holePosition
  .length()
  .toFixed(1)} AU from the Sun`;
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
