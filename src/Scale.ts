let scaleFactor = 1.0;

/**
 * Set the number of units per AU.
 */
export function setScaleFactor(val) {
  scaleFactor = val;
}

/**
 * Get the number of units per AU.
 */
export function getScaleFactor() {
  return scaleFactor;
}

export function rescalePos(pos) {
  pos.x *= scaleFactor;
  pos.y *= scaleFactor;
  pos.z *= scaleFactor;
  return pos;
}

export function rescaleArray(XYZ) {
  return [XYZ[0] * scaleFactor, XYZ[1] * scaleFactor, XYZ[2] * scaleFactor];
}

export function rescaleXYZ(X, Y, Z) {
  return [X * scaleFactor, Y * scaleFactor, Z * scaleFactor];
}

export function rescaleVector(vec) {
  return vec.multiplyScalar(scaleFactor);
}

export function rescaleNumber(x) {
  return scaleFactor * x;
}

export function rescale(...args) {
  if (Array.isArray(args[0])) {
    return rescaleArray(args[0]);
  }
  if (typeof args[0] === 'number') {
    if (args.length === 3) {
      return rescaleXYZ(...args);
    }
    return rescaleNumber(args[0]);
  }
  return rescalePos(args[0]);
}
