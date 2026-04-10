const mainContainer = document.getElementById('main-container');
const objectList = document.getElementById('object-list');
const hoveredValue = document.getElementById('hovered-value');
const selectedValue = document.getElementById('selected-value');
const pickSourceValue = document.getElementById('pick-source-value');
const trackingValue = document.getElementById('tracking-value');
const positionValue = document.getElementById('position-value');
const timeValue = document.getElementById('time-value');
const centerButton = document.getElementById('center-selected');
const fitButton = document.getElementById('fit-selected');
const trackButton = document.getElementById('track-selected');
const clearButton = document.getElementById('clear-selection');

const DEFAULT_ORBIT_COLOR = 0x324766;
const HOVER_ORBIT_COLOR = 0x6ad7ff;
const SELECTED_ORBIT_COLOR = 0xffd166;
const VIEW_OFFSET = [0.45, -0.95, 0.35];

const sim = new Spacekit.Simulation(mainContainer, {
  basePath: '../../src',
  jdPerSecond: 6,
  particleTextureUrl: '{{assets}}/sprites/fuzzyparticle-circled.png',
  camera: {
    initialPosition: [0, -5.75, 2.8],
  },
});

sim.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);
sim.configureInteraction({
  enableClick: true,
  enableHover: true,
  pickRadiusPx: 16,
  particlePickRadiusPx: 24,
});

function createPlanet(id, options) {
  return sim.createSphere(
    id,
    Object.assign(
      {
        labelText: id,
        pickRadiusPx: 18,
        levelsOfDetail: [
          { radii: 0, segments: 32 },
          { radii: 24, segments: 12 },
        ],
        rotation: {
          enable: true,
          period: 1,
          speed: 0.18,
        },
        theme: {
          orbitColor: DEFAULT_ORBIT_COLOR,
        },
      },
      options,
    ),
  );
}

createPlanet('Sun', {
  position: [0, 0, 0],
  hideOrbit: true,
  radius: 0.24,
  color: 0xffce72,
  pickRadiusPx: 28,
  rotation: {
    enable: true,
    period: 1,
    speed: 0.08,
  },
});

createPlanet('Mercury', {
  ephem: Spacekit.EphemPresets.MERCURY,
  radius: 0.028,
  color: 0xb9a28d,
});

createPlanet('Venus', {
  ephem: Spacekit.EphemPresets.VENUS,
  radius: 0.045,
  color: 0xdcb17c,
});

createPlanet('Earth', {
  ephem: Spacekit.EphemPresets.EARTH,
  radius: 0.052,
  color: 0x6fb6ff,
});

createPlanet('Mars', {
  ephem: Spacekit.EphemPresets.MARS,
  radius: 0.04,
  color: 0xd97855,
});

createPlanet('Jupiter', {
  ephem: Spacekit.EphemPresets.JUPITER,
  radius: 0.12,
  color: 0xd9b28c,
  pickRadiusPx: 20,
});

const comet = sim.createObject('Interaction comet', {
  ephem: new Spacekit.Ephem(
    {
      epoch: 2458600.5,
      a: 5.38533,
      e: 0.19893,
      i: 22.11137,
      om: 294.42992,
      w: 314.2889,
      ma: 229.14238,
    },
    'deg',
  ),
  labelText: 'Interaction comet',
  particleSize: 18,
  pickRadiusPx: 26,
  theme: {
    color: 0x8de7ff,
    orbitColor: 0x5acfe9,
  },
});

const demoObjects = sim.getObjects();
const defaultOrbitColors = new Map();
const objectButtons = new Map();
const viewer = sim.getViewer();
const camera = viewer.get3jsCamera();
const controls = viewer.get3jsCameraControls();

const state = {
  hoveredId: undefined,
  lastPickSource: undefined,
  trackingId: undefined,
};

demoObjects.forEach((obj) => {
  defaultOrbitColors.set(
    obj.getId(),
    obj.getOrbit() ? obj.getOrbit().getHexColor() : undefined,
  );
});

function formatVector(vector) {
  return `[${vector.map((value) => value.toFixed(2)).join(', ')}] AU`;
}

function isTrackable(obj) {
  return !!obj;
}

function stopTracking() {
  viewer.stopFollowingObject();
  state.trackingId = undefined;
}

function centerOnObject(obj) {
  stopTracking();
  const position = obj.getPosition(sim.getJd());
  camera.position.set(
    position[0] + VIEW_OFFSET[0],
    position[1] + VIEW_OFFSET[1],
    position[2] + VIEW_OFFSET[2],
  );
  controls.target.set(position[0], position[1], position[2]);
  controls.update();
}

function trackObject(obj) {
  if (!isTrackable(obj)) {
    return;
  }
  centerOnObject(obj);
  viewer.followObject(obj, [0, 0, 0]);
  state.trackingId = obj.getId();
}

function getSelectedObject() {
  return sim.getSelectedObject();
}

function applyVisualState() {
  const selected = getSelectedObject();
  const hovered = state.hoveredId ? sim.getObjectById(state.hoveredId) : undefined;

  demoObjects.forEach((obj) => {
    const orbit = obj.getOrbit();
    const primaryObject = obj.getPrimaryObject3js();
    const isSelected = selected === obj;
    const isHovered = hovered === obj;

    if (orbit) {
      orbit.setVisibility(true);
      orbit.setHexColor(
        isSelected
          ? SELECTED_ORBIT_COLOR
          : isHovered
            ? HOVER_ORBIT_COLOR
            : defaultOrbitColors.get(obj.getId()),
      );
    }

    if (primaryObject) {
      const scale = isSelected ? 1.4 : isHovered ? 1.18 : 1;
      primaryObject.scale.set(scale, scale, scale);
    }

    obj.setLabelVisibility(isSelected || isHovered || obj.getId() === 'Sun');
  });
}

function renderObjectList() {
  const selected = getSelectedObject();
  const hoveredId = state.hoveredId;

  demoObjects.forEach((obj) => {
    const button = objectButtons.get(obj.getId());
    if (!button) {
      return;
    }
    button.classList.toggle('selected', selected === obj);
    button.classList.toggle('hovered', hoveredId === obj.getId());
  });
}

function renderSummary() {
  const selected = getSelectedObject();

  hoveredValue.textContent = state.hoveredId || 'None';
  selectedValue.textContent = selected ? selected.getId() : 'None';
  pickSourceValue.textContent = state.lastPickSource || 'None';
  trackingValue.textContent = state.trackingId || 'Off';
  positionValue.textContent = selected
    ? formatVector(selected.getPosition(sim.getJd()))
    : '-';
  timeValue.textContent = sim.getDate().toLocaleString();

  centerButton.disabled = !selected;
  fitButton.disabled = !selected || !selected.getOrbit();
  trackButton.disabled = !selected || !isTrackable(selected);
  trackButton.textContent =
    selected && state.trackingId === selected.getId()
      ? 'Stop tracking'
      : 'Track selected';
  clearButton.disabled = !selected;
}

function renderPanels() {
  applyVisualState();
  renderObjectList();
  renderSummary();
}

function setSelectedObject(nextObject, pickSource) {
  const previous = getSelectedObject();
  if (state.trackingId && (!nextObject || state.trackingId !== nextObject.getId())) {
    stopTracking();
  }

  sim.selectObject(nextObject);

  if (pickSource) {
    state.lastPickSource = pickSource;
  } else if (!nextObject && previous) {
    state.lastPickSource = undefined;
  }

  renderPanels();
}

function buildObjectBrowser() {
  demoObjects.forEach((obj) => {
    const button = document.createElement('button');
    const copy = document.createElement('span');
    const name = document.createElement('span');
    const swatch = document.createElement('span');

    button.type = 'button';
    button.className = 'object-button';

    copy.className = 'object-copy';
    name.className = 'object-name';
    swatch.className = 'swatch';

    name.textContent = obj.getId();

    const orbitColor = defaultOrbitColors.get(obj.getId());
    swatch.style.backgroundColor = orbitColor
      ? `#${orbitColor.toString(16).padStart(6, '0')}`
      : '#f7cf72';

    copy.appendChild(name);
    button.appendChild(copy);
    button.appendChild(swatch);

    button.addEventListener('click', () => {
      const lookedUpObject = sim.getObjectById(obj.getId());
      setSelectedObject(lookedUpObject);
      centerOnObject(lookedUpObject);
    });

    objectButtons.set(obj.getId(), button);
    objectList.appendChild(button);
  });
}

sim.onObjectHover = (result) => {
  state.hoveredId = result ? result.object.getId() : undefined;
  renderPanels();
};

sim.onObjectClick = (result) => {
  state.lastPickSource = result.source;
  setSelectedObject(result.object, result.source);
};

sim.getRenderer().domElement.addEventListener('click', (ev) => {
  const result = sim.pick(ev.clientX, ev.clientY);
  if (!result) {
    setSelectedObject(undefined);
  }
});

centerButton.addEventListener('click', () => {
  const selected = getSelectedObject();
  if (!selected) {
    return;
  }
  centerOnObject(selected);
  renderPanels();
});

fitButton.addEventListener('click', () => {
  const selected = getSelectedObject();
  if (!selected || !selected.getOrbit()) {
    return;
  }
  stopTracking();
  sim.zoomToFit(selected, selected === comet ? 1.3 : 1.05);
  renderPanels();
});

trackButton.addEventListener('click', () => {
  const selected = getSelectedObject();
  if (!selected || !isTrackable(selected)) {
    return;
  }
  if (state.trackingId === selected.getId()) {
    stopTracking();
  } else {
    trackObject(selected);
  }
  renderPanels();
});

clearButton.addEventListener('click', () => {
  setSelectedObject(undefined);
});

buildObjectBrowser();
renderPanels();

let lastSummaryUpdate = 0;
sim.onTick = () => {
  const now = Date.now();
  if (now - lastSummaryUpdate < 150) {
    return;
  }
  lastSummaryUpdate = now;
  renderSummary();
};
