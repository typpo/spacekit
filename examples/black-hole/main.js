const massSolar = 4e6;
const radius = Spacekit.schwarzschildRadiusAu(massSolar);
let outerRadius = 30;
let rotationSpeed = 200;
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
  jd: 2451545,
  jdPerSecond: 1 / 86400,
  bloom: false,
  camera: { initialPosition: [0, -80 * radius, 7.5 * radius] },
});

// A deterministic illustrative sky. No external asset or texture request.
const canvas = document.createElement('canvas');
canvas.width = 4096;
canvas.height = 2048;
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#030508';
ctx.fillRect(0, 0, canvas.width, canvas.height);
let seed = 42;
function random() {
  seed = (1664525 * seed + 1013904223) >>> 0;
  return seed / 4294967296;
}
for (let i = 0; i < 2200; i++) {
  const x = random() * canvas.width;
  const y = (Math.acos(2 * random() - 1) / Math.PI) * canvas.height;
  const size = 0.4 + random() * 0.8;
  ctx.fillStyle = `rgba(190,210,235,${0.15 + random() * 0.45})`;
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
}
const backgroundTexture = new Spacekit.THREE.CanvasTexture(canvas);
backgroundTexture.wrapS = Spacekit.THREE.RepeatWrapping;
let blackHole;
let showDisk = true;
let aspectRatio = 0.025;
function createBlackHole() {
  blackHole = viz.createBlackHole('central-black-hole', {
    massSolar,
    position: [0, 0, 0],
    accretionDisk: showDisk
      ? {
          outerRadius,
          temperature: 7500,
          opticalDepth: 2,
          aspectRatio,
          turbulence: 0.85,
          rotationSpeed,
        }
      : false,
    backgroundTexture,
  });
}
try {
  createBlackHole();
} catch (err) {
  document.getElementById('error').textContent = err.message;
}
const controls = viz.getViewer().get3jsCameraControls();
// Keep the full disk visible in a narrow preview panel or on a phone.
function fitFieldOfView() {
  const camera = viz.getViewer().get3jsCamera();
  const container = document.getElementById('main-container');
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.fov =
    (2 *
      Math.atan(
        Math.tan((25 * Math.PI) / 180) * Math.max(1, 0.95 / camera.aspect),
      ) *
      180) /
    Math.PI;
  camera.updateProjectionMatrix();
}
fitFieldOfView();
window.addEventListener('resize', fitFieldOfView);
controls.minDistance = radius * 14;
controls.maxDistance = radius * 1000;
controls.enablePan = false;
document.getElementById(
  'facts',
).textContent = `4 million solar masses · Horizon radius ${radius.toFixed(
  3,
)} AU · ISCO ${(3 * radius).toFixed(3)} AU`;
let paused = false;
document.getElementById('pause').addEventListener('click', (event) => {
  paused = !paused;
  if (paused) viz.stop();
  else viz.start();
  event.target.textContent = paused ? 'Resume disk' : 'Pause disk';
});
document.getElementById('disk').addEventListener('click', (event) => {
  showDisk = !showDisk;
  blackHole.setDiskEnabled(showDisk);
  event.target.textContent = showDisk ? 'Hide disk' : 'Show disk';
});
document.getElementById('view').addEventListener('change', (event) => {
  const directions = {
    inclined: [0, -32, 3],
    overhead: [0, -0.1, 32],
    edge: [0, -32, 0],
  };
  const camera = viz.getViewer().get3jsCamera();
  const distance = camera.position.length();
  camera.position
    .set(...directions[event.target.value])
    .normalize()
    .multiplyScalar(distance);
  controls.update();
});

document.getElementById('thickness').addEventListener('change', (event) => {
  aspectRatio = Number(event.target.value);
  blackHole.setDiskAspectRatio(aspectRatio);
});

function fitDisk() {
  viz
    .getViewer()
    .get3jsCamera()
    .position.normalize()
    .multiplyScalar(outerRadius * (32 / 12) * radius);
  controls.update();
}

function updateDiskFacts() {
  const period =
    Spacekit.schwarzschildOrbitalPeriodSeconds(massSolar, 3) / rotationSpeed;
  const periodLabel =
    period >= 60
      ? `${(period / 60).toFixed(1)} minutes`
      : `${period.toFixed(1)} seconds`;
  document.getElementById('disk-facts').textContent = `Outer radius ${(
    outerRadius * radius
  ).toFixed(2)} AU · Inner orbit ${periodLabel} at ${rotationSpeed}× speed`;
}
document.getElementById('rotation').addEventListener('change', (event) => {
  rotationSpeed = Number(event.target.value);
  blackHole.setRotationSpeed(rotationSpeed);
  updateDiskFacts();
});
document.getElementById('extent').addEventListener('change', (event) => {
  outerRadius = Number(event.target.value);
  blackHole.setDiskOuterRadius(outerRadius);
  fitDisk();
  updateDiskFacts();
});
document.getElementById('fit').addEventListener('click', fitDisk);
updateDiskFacts();
