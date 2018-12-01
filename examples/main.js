const viz = new Container(document.getElementById('main-container'), {
  assetPath: '../src/assets',
});

const sun = new SpaceObject('sun', SpaceObjectPresets.SUN, viz);

const skybox = new Skybox(SkyboxPresets.ESO_MILKYWAY, viz);
