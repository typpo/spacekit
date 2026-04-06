"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getGalacticToEclipticTransform = exports.transformGalacticToEcliptic = void 0;
var THREE = __importStar(require("three"));
var Coordinates_1 = __importDefault(require("./Coordinates"));
// IAU 1958 galactic-to-equatorial frame relation in J2000 coordinates.
var EQUATORIAL_TO_GALACTIC_MATRIX = [
    [-0.0548755604, -0.8734370902, -0.4838350155],
    [0.4941094279, -0.44482963, 0.7469822445],
    [-0.867666149, -0.1980763734, 0.4559837762],
];
function transpose3(matrix) {
    return [
        [matrix[0][0], matrix[1][0], matrix[2][0]],
        [matrix[0][1], matrix[1][1], matrix[2][1]],
        [matrix[0][2], matrix[1][2], matrix[2][2]],
    ];
}
function multiplyMatrix3Vector(matrix, vector) {
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
function makeMatrix4From3x3(matrix) {
    return new THREE.Matrix4().set(matrix[0][0], matrix[0][1], matrix[0][2], 0, matrix[1][0], matrix[1][1], matrix[1][2], 0, matrix[2][0], matrix[2][1], matrix[2][2], 0, 0, 0, 0, 1);
}
function getEquatorialToEclipticTransform(obliquity) {
    return new THREE.Matrix4().set(1, 0, 0, 0, 0, Math.cos(obliquity), Math.sin(obliquity), 0, 0, -Math.sin(obliquity), Math.cos(obliquity), 0, 0, 0, 0, 1);
}
var GALACTIC_TO_EQUATORIAL_MATRIX = transpose3(EQUATORIAL_TO_GALACTIC_MATRIX);
function transformGalacticToEcliptic(vector, obliquity) {
    if (obliquity === void 0) { obliquity = Coordinates_1["default"].getObliquity(); }
    var equatorialVector = multiplyMatrix3Vector(GALACTIC_TO_EQUATORIAL_MATRIX, vector);
    return Coordinates_1["default"].equatorialToEcliptic_Cartesian(equatorialVector[0], equatorialVector[1], equatorialVector[2], obliquity);
}
exports.transformGalacticToEcliptic = transformGalacticToEcliptic;
function getGalacticToEclipticTransform(obliquity) {
    if (obliquity === void 0) { obliquity = Coordinates_1["default"].getObliquity(); }
    return getEquatorialToEclipticTransform(obliquity).multiply(makeMatrix4From3x3(GALACTIC_TO_EQUATORIAL_MATRIX));
}
exports.getGalacticToEclipticTransform = getGalacticToEclipticTransform;
