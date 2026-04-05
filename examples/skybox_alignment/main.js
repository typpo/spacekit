const J2000_JD = 2451545.0;
const J2000_OBLIQUITY_RAD = (23.4392911 * Math.PI) / 180;
const EARTH_RADIUS = 0.35;
const EARTH_AXIS_LENGTH = 0.8;
const SKY_GUIDE_RADIUS = 900;
const SKY_GUIDE_SEGMENTS = 256;
const CELESTIAL_EQUATOR_COLOR = 0x78b9ff;
const GALACTIC_EQUATOR_COLOR = 0xffca72;
const EQUATORIAL_TO_GALACTIC_MATRIX = [
  [-0.0548755604, -0.8734370902, -0.4838350155],
  [0.4941094279, -0.44482963, 0.7469822445],
  [-0.867666149, -0.1980763734, 0.4559837762],
];
const BRIGHT_STAR_ANCHORS = [
  { name: 'Sirius', raHours: 6.75247, decDeg: -16.7161, mag: -1.46 },
  { name: 'Canopus', raHours: 6.39919, decDeg: -52.6958, mag: -0.72 },
  { name: 'Arcturus', raHours: 14.261, decDeg: 19.1825, mag: -0.04 },
  { name: 'Alpha Cen', raHours: 14.66, decDeg: -60.8353, mag: -0.01 },
  { name: 'Vega', raHours: 18.6156, decDeg: 38.7836, mag: 0.03 },
  { name: 'Capella', raHours: 5.27817, decDeg: 45.9981, mag: 0.08 },
  { name: 'Rigel', raHours: 5.24231, decDeg: -8.2017, mag: 0.12 },
  { name: 'Procyon', raHours: 7.65503, decDeg: 5.225, mag: 0.38 },
  { name: 'Achernar', raHours: 1.62858, decDeg: -57.2367, mag: 0.46 },
  { name: 'Betelgeuse', raHours: 5.91953, decDeg: 7.4069, mag: 0.5 },
  { name: 'Altair', raHours: 19.8464, decDeg: 8.8683, mag: 0.77 },
  { name: 'Aldebaran', raHours: 4.59867, decDeg: 16.5092, mag: 0.85 },
  { name: 'Antares', raHours: 16.4901, decDeg: -26.4319, mag: 0.96 },
  { name: 'Spica', raHours: 13.4199, decDeg: -11.1614, mag: 0.98 },
  { name: 'Pollux', raHours: 7.75525, decDeg: 28.0261, mag: 1.14 },
  { name: 'Fomalhaut', raHours: 22.9609, decDeg: -29.6222, mag: 1.16 },
  { name: 'Deneb', raHours: 20.6905, decDeg: 45.2803, mag: 1.25 },
];
const REFERENCE_MARKERS = [
  {
    name: 'Galactic Center',
    color: '#ffcf6d',
    raHours: 17.76113,
    decDeg: -29.0078,
  },
  {
    name: 'Galactic Anti-center',
    color: '#ff8f8f',
    galacticLonDeg: 180,
    galacticLatDeg: 0,
  },
  {
    name: 'North Galactic Pole',
    color: '#9df3a2',
    raHours: 12.8573,
    decDeg: 27.1283,
  },
];
const SOURCE_ALIGNMENT_NOTES = {
  NASA_TYCHO:
    'Catalog-derived galactic star map from NASA SVS 3895.',
  ESO_GIGAGALAXY:
    'Galaxy-centric Milky Way panorama from ESO.',
  ESO_LITE:
    'Lower-resolution panorama using the same orientation convention as the ESO source image.',
};

const state = {
  preset: 'NASA_TYCHO',
  opacity: 0.75,
  starsVisible: true,
  earthVisible: true,
  celestialEquatorVisible: true,
  galacticEquatorVisible: true,
  textureAdjustments: {
    NASA_TYCHO: {
      longitudeOffsetDeg: 180,
      mirrorLongitude: true,
    },
    ESO_GIGAGALAXY: {
      longitudeOffsetDeg: 180,
      mirrorLongitude: true,
    },
    ESO_LITE: {
      longitudeOffsetDeg: 180,
      mirrorLongitude: true,
    },
  },
};

const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
  basePath: '../../src',
  startPaused: true,
  jd: J2000_JD,
  camera: {
    initialPosition: [0.7, -2.8, 1.25],
  },
});

const stars = viz.createStars({ minSize: 4.5 });
const earth = viz.createSphere('earth-reference', {
  textureUrl: '../planet/eso_earth.jpg',
  radius: EARTH_RADIUS,
  levelsOfDetail: [
    {
      radii: 0,
      segments: 64,
    },
  ],
});

let skybox;
const earthObject = earth.get3jsObjects()[0];
const skyGuideGroup = new Spacekit.THREE.Group();
const calibrationCanvas = document.getElementById('calibration-canvas');
const calibrationContext = calibrationCanvas.getContext('2d');
const calibrationStatus = document.getElementById('calibration-status');
const calibrationImageCache = new Map();
let calibrationRenderToken = 0;

function normalizeDegrees(angleDeg) {
  const normalized = angleDeg % 360;
  return normalized < 0 ? normalized + 360 : normalized;
}

function degToRad(angleDeg) {
  return (angleDeg * Math.PI) / 180;
}

function sphericalToCartesian(ra, dec, distance) {
  return [
    distance * Math.cos(ra) * Math.cos(dec),
    distance * Math.sin(ra) * Math.cos(dec),
    distance * Math.sin(dec),
  ];
}

function equatorialToEclipticCartesian(x, y, z, obliquity) {
  return [
    x,
    Math.cos(obliquity) * y + Math.sin(obliquity) * z,
    -Math.sin(obliquity) * y + Math.cos(obliquity) * z,
  ];
}

function equatorialRaDecToEclipticVector(raHours, decDeg, radius) {
  const [x, y, z] = equatorialToEclipticCartesian(
    ...sphericalToCartesian(degToRad(raHours * 15), degToRad(decDeg), radius),
    J2000_OBLIQUITY_RAD,
  );
  return new Spacekit.THREE.Vector3(x, y, z);
}

function mod1(value) {
  const normalized = value % 1;
  return normalized < 0 ? normalized + 1 : normalized;
}

function multiplyMatrixVector(matrix, vector) {
  return [
    matrix[0][0] * vector[0] +
      matrix[0][1] * vector[1] +
      matrix[0][2] * vector[2],
    matrix[1][0] * vector[0] +
      matrix[1][1] * vector[1] +
      matrix[1][2] * vector[2],
    matrix[2][0] * vector[0] +
      matrix[2][1] * vector[1] +
      matrix[2][2] * vector[2],
  ];
}

function transposeMatrix(matrix) {
  return matrix[0].map((_, colIdx) => matrix.map((row) => row[colIdx]));
}

function equatorialToGalacticLonLat(raHours, decDeg) {
  const ra = degToRad(raHours * 15);
  const dec = degToRad(decDeg);
  const equatorial = sphericalToCartesian(ra, dec, 1);
  const galactic = multiplyMatrixVector(
    EQUATORIAL_TO_GALACTIC_MATRIX,
    equatorial,
  );
  const lon = Math.atan2(galactic[1], galactic[0]);
  const lat = Math.asin(galactic[2]);
  return {
    lonRad: lon < 0 ? lon + Math.PI * 2 : lon,
    latRad: lat,
  };
}

function cartesianToRaDec(vector) {
  const [x, y, z] = vector;
  const raRad = Math.atan2(y, x);
  const raHours = mod1(raRad / (Math.PI * 2)) * 24;
  const decDeg = (Math.asin(z) * 180) / Math.PI;
  return { raHours, decDeg };
}

function galacticToEquatorialRaDec(lonDeg, latDeg) {
  const lon = degToRad(lonDeg);
  const lat = degToRad(latDeg);
  const galactic = sphericalToCartesian(lon, lat, 1);
  const galacticToEquatorial = transposeMatrix(EQUATORIAL_TO_GALACTIC_MATRIX);
  return cartesianToRaDec(multiplyMatrixVector(galacticToEquatorial, galactic));
}

function galacticToEclipticVector(lonDeg, latDeg, radius) {
  const equatorial = galacticToEquatorialRaDec(lonDeg, latDeg);
  return equatorialRaDecToEclipticVector(
    equatorial.raHours,
    equatorial.decDeg,
    radius,
  );
}

function getSelectedTextureAdjustment() {
  return state.textureAdjustments[state.preset];
}

function getActiveSkyboxMappingOptions() {
  return getSelectedTextureAdjustment();
}

function resolveAssetUrl(urlTemplate) {
  return urlTemplate
    .replace('{{assets}}', '../../src/assets')
    .replace('{{data}}', '../../src/data');
}

function loadCalibrationImage(url) {
  if (calibrationImageCache.has(url)) {
    return calibrationImageCache.get(url);
  }

  const promise = new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });

  calibrationImageCache.set(url, promise);
  return promise;
}

function getFlatTextureCoordinates(anchor) {
  const mapping = getActiveSkyboxMappingOptions();
  const longitudeSign = mapping.mirrorLongitude ? -1 : 1;
  const galactic = equatorialToGalacticLonLat(anchor.raHours, anchor.decDeg);
  return {
    u: mod1(
      longitudeSign * (galactic.lonRad / (Math.PI * 2)) +
        mapping.longitudeOffsetDeg / 360,
    ),
    v: 1 - (galactic.latRad / Math.PI + 0.5),
  };
}

function getReferenceMarkerCoordinates(marker) {
  if (
    typeof marker.galacticLonDeg === 'number' &&
    typeof marker.galacticLatDeg === 'number'
  ) {
    const mapping = getActiveSkyboxMappingOptions();
    const longitudeSign = mapping.mirrorLongitude ? -1 : 1;
    return {
      u: mod1(
        longitudeSign * (marker.galacticLonDeg / 360) +
          mapping.longitudeOffsetDeg / 360,
      ),
      v: 1 - (marker.galacticLatDeg / 180 + 0.5),
    };
  }

  return getFlatTextureCoordinates(marker);
}

function getAnchorRadius(anchor) {
  return Math.max(4, 9 - anchor.mag * 2.2);
}

function drawAnchorMarker(anchor, x, y) {
  const radius = getAnchorRadius(anchor);
  const labelOffsetX = x > calibrationCanvas.width * 0.72 ? -10 : 10;
  const labelOffsetY = y < calibrationCanvas.height * 0.15 ? 14 : -10;

  calibrationContext.save();
  calibrationContext.strokeStyle = '#91f5ff';
  calibrationContext.fillStyle = '#91f5ff';
  calibrationContext.lineWidth = 2;
  calibrationContext.shadowColor = 'rgba(0, 0, 0, 0.85)';
  calibrationContext.shadowBlur = 5;

  calibrationContext.beginPath();
  calibrationContext.arc(x, y, radius, 0, Math.PI * 2);
  calibrationContext.stroke();

  calibrationContext.beginPath();
  calibrationContext.moveTo(x - radius - 4, y);
  calibrationContext.lineTo(x + radius + 4, y);
  calibrationContext.moveTo(x, y - radius - 4);
  calibrationContext.lineTo(x, y + radius + 4);
  calibrationContext.stroke();

  calibrationContext.font = '15px Georgia';
  calibrationContext.textAlign = labelOffsetX < 0 ? 'right' : 'left';
  calibrationContext.textBaseline = labelOffsetY < 0 ? 'bottom' : 'top';
  calibrationContext.fillText(anchor.name, x + labelOffsetX, y + labelOffsetY);
  calibrationContext.restore();
}

function drawReferenceMarker(marker, x, y) {
  calibrationContext.save();
  calibrationContext.strokeStyle = marker.color;
  calibrationContext.fillStyle = marker.color;
  calibrationContext.lineWidth = 2;
  calibrationContext.shadowColor = 'rgba(0, 0, 0, 0.9)';
  calibrationContext.shadowBlur = 6;

  calibrationContext.beginPath();
  calibrationContext.moveTo(x - 9, y - 9);
  calibrationContext.lineTo(x + 9, y + 9);
  calibrationContext.moveTo(x + 9, y - 9);
  calibrationContext.lineTo(x - 9, y + 9);
  calibrationContext.stroke();

  calibrationContext.font = 'bold 15px Georgia';
  calibrationContext.textAlign = x > calibrationCanvas.width * 0.75 ? 'right' : 'left';
  calibrationContext.textBaseline = y < calibrationCanvas.height * 0.15 ? 'top' : 'bottom';
  calibrationContext.fillText(
    marker.name,
    x > calibrationCanvas.width * 0.75 ? x - 12 : x + 12,
    y < calibrationCanvas.height * 0.15 ? y + 12 : y - 12,
  );
  calibrationContext.restore();
}

function syncAdjustmentControls() {
  const adjustment = getSelectedTextureAdjustment();
  document.getElementById('native-offset').value =
    adjustment.longitudeOffsetDeg.toFixed(1);
  document.getElementById('mirror-longitude').checked =
    adjustment.mirrorLongitude;
}

async function renderCalibration() {
  const renderToken = ++calibrationRenderToken;
  const textureUrl = resolveAssetUrl(Spacekit.SkyboxPresets[state.preset].textureUrl);
  const image = await loadCalibrationImage(textureUrl);
  if (renderToken !== calibrationRenderToken) {
    return;
  }

  calibrationContext.clearRect(
    0,
    0,
    calibrationCanvas.width,
    calibrationCanvas.height,
  );
  calibrationContext.drawImage(
    image,
    0,
    0,
    calibrationCanvas.width,
    calibrationCanvas.height,
  );

  BRIGHT_STAR_ANCHORS.forEach((anchor) => {
    const coords = getFlatTextureCoordinates(anchor);
    drawAnchorMarker(
      anchor,
      coords.u * calibrationCanvas.width,
      coords.v * calibrationCanvas.height,
    );
  });

  REFERENCE_MARKERS.forEach((marker) => {
    const coords = getReferenceMarkerCoordinates(marker);
    drawReferenceMarker(
      marker,
      coords.u * calibrationCanvas.width,
      coords.v * calibrationCanvas.height,
    );
  });

  const adjustment = getSelectedTextureAdjustment();
  const sourceAlignmentNote = SOURCE_ALIGNMENT_NOTES[state.preset];
  calibrationStatus.innerHTML = `
    Source-based preset: <strong>${adjustment.longitudeOffsetDeg.toFixed(1)}°</strong>,
    mirror <strong>${adjustment.mirrorLongitude ? 'on' : 'off'}</strong>.<br>
    ${sourceAlignmentNote}<br>
    Sanity check: compare the bright-star anchors, galactic markers, and the
    equator guides against the selected texture as you adjust the controls.
  `;
}

function getGreenwichMeanSiderealAngle(jd) {
  const t = (jd - 2451545.0) / 36525.0;
  const angleDeg =
    280.46061837 +
    360.98564736629 * (jd - 2451545.0) +
    0.000387933 * t * t -
    (t * t * t) / 38710000.0;
  return degToRad(normalizeDegrees(angleDeg));
}

function getEarthOrientationMatrix(jd) {
  const obliquity = J2000_OBLIQUITY_RAD;
  const northPole = new Spacekit.THREE.Vector3(
    ...equatorialToEclipticCartesian(
      0,
      0,
      1,
      obliquity,
    ),
  ).normalize();

  const greenwichDirection = new Spacekit.THREE.Vector3(
    ...equatorialToEclipticCartesian(
      ...sphericalToCartesian(
        getGreenwichMeanSiderealAngle(jd),
        0,
        1,
      ),
      obliquity,
    ),
  ).normalize();

  const eastDirection = new Spacekit.THREE.Vector3()
    .crossVectors(northPole, greenwichDirection)
    .normalize();
  const primeMeridian = new Spacekit.THREE.Vector3()
    .crossVectors(eastDirection, northPole)
    .normalize();

  return new Spacekit.THREE.Matrix4().makeBasis(
    primeMeridian,
    eastDirection,
    northPole,
  );
}

function addEarthAxisReference() {
  const axisGeometry = new Spacekit.THREE.BufferGeometry().setFromPoints([
    new Spacekit.THREE.Vector3(0, 0, -EARTH_AXIS_LENGTH),
    new Spacekit.THREE.Vector3(0, 0, EARTH_AXIS_LENGTH),
  ]);
  const axisMaterial = new Spacekit.THREE.LineBasicMaterial({
    color: 0x73d8ff,
    transparent: true,
    opacity: 0.95,
    depthTest: false,
  });
  const axisLine = new Spacekit.THREE.Line(axisGeometry, axisMaterial);
  axisLine.renderOrder = 5;
  earthObject.add(axisLine);
}

function createSkyGuideLine(points, color, opacity) {
  const geometry = new Spacekit.THREE.BufferGeometry().setFromPoints(points);
  const material = new Spacekit.THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
    depthTest: false,
  });
  const line = new Spacekit.THREE.LineLoop(geometry, material);
  line.renderOrder = 4;
  return line;
}

function createCelestialEquatorGuide() {
  const points = [];
  for (let i = 0; i < SKY_GUIDE_SEGMENTS; i += 1) {
    points.push(
      equatorialRaDecToEclipticVector(
        (24 * i) / SKY_GUIDE_SEGMENTS,
        0,
        SKY_GUIDE_RADIUS,
      ),
    );
  }
  return createSkyGuideLine(points, CELESTIAL_EQUATOR_COLOR, 0.85);
}

function createGalacticEquatorGuide() {
  const points = [];
  for (let i = 0; i < SKY_GUIDE_SEGMENTS; i += 1) {
    points.push(
      galacticToEclipticVector(
        (360 * i) / SKY_GUIDE_SEGMENTS,
        0,
        SKY_GUIDE_RADIUS,
      ),
    );
  }
  return createSkyGuideLine(points, GALACTIC_EQUATOR_COLOR, 0.95);
}

const celestialEquatorGuide = createCelestialEquatorGuide();
const galacticEquatorGuide = createGalacticEquatorGuide();
skyGuideGroup.add(celestialEquatorGuide);
skyGuideGroup.add(galacticEquatorGuide);
viz.getScene().add(skyGuideGroup);

function syncSkyGuidesToCamera() {
  skyGuideGroup.position.copy(viz.getViewer().get3jsCamera().position);
}

function setCelestialEquatorVisible(visible) {
  state.celestialEquatorVisible = visible;
  celestialEquatorGuide.visible = visible;
  updateStatus();
}

function setGalacticEquatorVisible(visible) {
  state.galacticEquatorVisible = visible;
  galacticEquatorGuide.visible = visible;
  updateStatus();
}

function getSkyboxOptions() {
  const preset = Spacekit.SkyboxPresets[state.preset];
  const adjustment = getSelectedTextureAdjustment();
  const options = Object.assign({}, preset, {
    opacity: state.opacity,
    longitudeOffsetDeg: adjustment.longitudeOffsetDeg,
    mirrorLongitude: adjustment.mirrorLongitude,
  });

  return options;
}

function updateStatus() {
  syncAdjustmentControls();
  const adjustment = getSelectedTextureAdjustment();
  const status = document.getElementById('status');
  status.innerHTML = `
    Texture: <strong>${state.preset}</strong><br>
    Stars: <strong>${state.starsVisible ? 'visible' : 'hidden'}</strong><br>
    Earth: <strong>${state.earthVisible ? 'visible' : 'hidden'}</strong><br>
    Celestial equator: <strong>${state.celestialEquatorVisible ? 'visible' : 'hidden'}</strong><br>
    Galactic equator: <strong>${state.galacticEquatorVisible ? 'visible' : 'hidden'}</strong><br>
    Opacity: <strong>${state.opacity.toFixed(2)}</strong><br>
    Offset: <strong>${adjustment.longitudeOffsetDeg.toFixed(1)}°</strong><br>
    Mirror: <strong>${adjustment.mirrorLongitude ? 'on' : 'off'}</strong><br>
    Epoch: <strong>J2000.0 (JD ${J2000_JD})</strong>
  `;
}

function rebuildSkybox() {
  if (skybox) {
    viz.removeObject(skybox);
  }
  skybox = viz.createSkybox(getSkyboxOptions());
  updateStatus();
  renderCalibration();
}

function setStarsVisible(visible) {
  state.starsVisible = visible;
  const starObjects = stars.get3jsObjects();
  if (!starObjects.length) {
    window.requestAnimationFrame(() => setStarsVisible(visible));
    return;
  }

  starObjects.forEach((obj) => {
    obj.visible = visible;
  });
  updateStatus();
}

function setEarthVisible(visible) {
  state.earthVisible = visible;
  earthObject.visible = visible;
  updateStatus();
}

function applySelectedTextureAdjustment(adjustment) {
  state.textureAdjustments[state.preset] = {
    longitudeOffsetDeg: adjustment.longitudeOffsetDeg,
    mirrorLongitude: adjustment.mirrorLongitude,
  };
  rebuildSkybox();
}

function resetSelectedTextureAdjustment() {
  const preset = Spacekit.SkyboxPresets[state.preset];
  applySelectedTextureAdjustment({
    longitudeOffsetDeg: preset.longitudeOffsetDeg || 0,
    mirrorLongitude: !!preset.mirrorLongitude,
  });
}

earthObject.setRotationFromMatrix(getEarthOrientationMatrix(J2000_JD));
addEarthAxisReference();
syncSkyGuidesToCamera();
const previousOnTick = viz.onTick;
viz.onTick = () => {
  syncSkyGuidesToCamera();
  if (previousOnTick) {
    previousOnTick();
  }
};

document.getElementById('preset').addEventListener('change', (event) => {
  state.preset = event.target.value;
  rebuildSkybox();
});

document.getElementById('opacity').addEventListener('input', (event) => {
  state.opacity = Number(event.target.value);
  rebuildSkybox();
});

document.getElementById('stars-visible').addEventListener('change', (event) => {
  setStarsVisible(event.target.checked);
});

document.getElementById('earth-visible').addEventListener('change', (event) => {
  setEarthVisible(event.target.checked);
});

document
  .getElementById('celestial-equator-visible')
  .addEventListener('change', (event) => {
    setCelestialEquatorVisible(event.target.checked);
  });

document
  .getElementById('galactic-equator-visible')
  .addEventListener('change', (event) => {
    setGalacticEquatorVisible(event.target.checked);
  });

document.getElementById('native-offset').addEventListener('input', (event) => {
  const adjustment = getSelectedTextureAdjustment();
  adjustment.longitudeOffsetDeg = Number(event.target.value);
  rebuildSkybox();
});

document.getElementById('mirror-longitude').addEventListener('change', (event) => {
  const adjustment = getSelectedTextureAdjustment();
  adjustment.mirrorLongitude = event.target.checked;
  rebuildSkybox();
});

document.getElementById('reset-adjustment').addEventListener('click', () => {
  resetSelectedTextureAdjustment();
});

rebuildSkybox();
setStarsVisible(state.starsVisible);
setEarthVisible(state.earthVisible);
setCelestialEquatorVisible(state.celestialEquatorVisible);
setGalacticEquatorVisible(state.galacticEquatorVisible);
