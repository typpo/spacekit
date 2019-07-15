export const SCALE_FACTOR = 1.0;

export function rescalePos(pos) {
  pos.x *= SCALE_FACTOR;
  pos.y *= SCALE_FACTOR;
  pos.z *= SCALE_FACTOR;
  return pos;
}

export function rescaleArray(XYZ) {
  return [XYZ[0] * SCALE_FACTOR, XYZ[1] * SCALE_FACTOR, XYZ[2] * SCALE_FACTOR];
}

export function rescaleXYZ(X, Y, Z) {
  return [X * SCALE_FACTOR, Y * SCALE_FACTOR, Z * SCALE_FACTOR];
}

export function rescaleNumber(x) {
  return SCALE_FACTOR * x;
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
