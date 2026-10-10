"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setScaleFactor = setScaleFactor;
exports.getScaleFactor = getScaleFactor;
exports.rescalePos = rescalePos;
exports.rescaleArray = rescaleArray;
exports.rescaleXYZ = rescaleXYZ;
exports.rescaleVector = rescaleVector;
exports.rescaleNumber = rescaleNumber;
var scaleFactor = 1.0;
/**
 * Set the number of units per AU.
 */
function setScaleFactor(val) {
    scaleFactor = val;
}
/**
 * Get the number of units per AU.
 */
function getScaleFactor() {
    return scaleFactor;
}
function rescalePos(pos) {
    pos.x *= scaleFactor;
    pos.y *= scaleFactor;
    pos.z *= scaleFactor;
    return pos;
}
function rescaleArray(XYZ) {
    return [XYZ[0] * scaleFactor, XYZ[1] * scaleFactor, XYZ[2] * scaleFactor];
}
function rescaleXYZ(X, Y, Z) {
    return [X * scaleFactor, Y * scaleFactor, Z * scaleFactor];
}
function rescaleVector(vec) {
    return vec.multiplyScalar(scaleFactor);
}
function rescaleNumber(x) {
    return scaleFactor * x;
}
