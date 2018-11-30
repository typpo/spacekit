// TODO Include presets for all the planets and the sun

const SpaceObjectDefaultOptions = {
  ephem: null,
}

class SpaceObject {
  constructor(options || SpaceObjectDefaultOptions) {
    this._position = [0, 0, 0];
    this._orbitEllipse = null;
    this._showOrbitEllipse = null;
  }

  setPosition(x, y, z) {
    this._position[0] = x;
    this._position[1] = y;
    this._position[2] = z;
  }

  getPosition(epoch) {
    // Default implementation
    return this._position;
  }

  getOrbitEllipse() {
    if (!this._orbitEllipse) {
      // ...
    }
    return this._orbitEllipse;
  }

  update(epoch) {
    this._object3d.position = coordsToPixel(getPosition(epoch));
    if (this._showOrbitEllipse) {
      // ...
    }
  }

  addTo(sceneOrObject) {
    sceneOrObject.add(this._object3d);

    if (this._showOrbitEllipse) {
      sceneOrObject.add(this.getOrbitEllipse());
    }
  }
}
