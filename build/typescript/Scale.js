"use strict";
exports.__esModule = true;
exports.rescaleNumber = exports.rescaleVector = exports.rescaleXYZ = exports.rescaleArray = exports.rescalePos = exports.getScaleFactor = exports.setScaleFactor = void 0;
var scaleFactor = 1.0;
/**
 * Set the number of units per AU.
 */
function setScaleFactor(val) {
    scaleFactor = val;
}
exports.setScaleFactor = setScaleFactor;
/**
 * Get the number of units per AU.
 */
function getScaleFactor() {
    return scaleFactor;
}
exports.getScaleFactor = getScaleFactor;
function rescalePos(pos) {
    pos.x *= scaleFactor;
    pos.y *= scaleFactor;
    pos.z *= scaleFactor;
    return pos;
}
exports.rescalePos = rescalePos;
function rescaleArray(XYZ) {
    return [XYZ[0] * scaleFactor, XYZ[1] * scaleFactor, XYZ[2] * scaleFactor];
}
exports.rescaleArray = rescaleArray;
function rescaleXYZ(X, Y, Z) {
    return [X * scaleFactor, Y * scaleFactor, Z * scaleFactor];
}
exports.rescaleXYZ = rescaleXYZ;
function rescaleVector(vec) {
    return vec.multiplyScalar(scaleFactor);
}
exports.rescaleVector = rescaleVector;
function rescaleNumber(x) {
    return scaleFactor * x;
}
exports.rescaleNumber = rescaleNumber;
