const massSolar = 4e6;
const radius = Spacekit.schwarzschildRadiusAu(massSolar);
let outerRadius = 30;
let rotationSpeed = 200;
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
  jd: 2451545,
  jdPerSecond: 1 / 86400,
  // Look from the Sun's side toward the galactic center (+X), as we see Sgr A*.
  camera: { initialPosition: [-80 * radius, 0, 7.5 * radius] },
});

// The real sky in visible light: ESO's GigaGalaxy photograph of the Milky Way
// (eso0932a), in galactic coordinates. The black hole shader samples an
// equirectangular sky with north at +Z and longitude increasing from +X toward
// +Y, while astronomical maps increase longitude to the left, so the photo is
// mirrored as it is copied. Scene +X then points at the galactic center and +Z
// at the north galactic pole, which puts the Milky Way in the disk's plane.
const SKY_URL = '../../src/assets/skybox/eso_milkyway.jpg';
const canvas = document.createElement('canvas');
canvas.width = 4096;
canvas.height = 2048;
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, canvas.width, canvas.height);
const backgroundTexture = new Spacekit.THREE.CanvasTexture(canvas);
backgroundTexture.colorSpace = Spacekit.THREE.SRGBColorSpace;
backgroundTexture.wrapS = Spacekit.THREE.RepeatWrapping;
const skyImage = new Image();
skyImage.onload = () => {
  ctx.save();
  ctx.scale(-1, 1);
  ctx.drawImage(skyImage, -canvas.width, 0, canvas.width, canvas.height);
  ctx.restore();
  backgroundTexture.needsUpdate = true;
};
skyImage.src = SKY_URL;
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
    // Volume integration through the disk dominates frame time; low quality
    // halves it with no visible difference at this scale.
    quality: 'low',
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
    inclined: [-32, 0, 3],
    overhead: [-0.1, 0, 32],
    edge: [-32, 0, 0],
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
