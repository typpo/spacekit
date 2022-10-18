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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.THREE = void 0;
__exportStar(require("./Camera"), exports);
__exportStar(require("./Coordinates"), exports);
__exportStar(require("./Ephem"), exports);
__exportStar(require("./EphemerisTable"), exports);
__exportStar(require("./EphemPresets"), exports);
__exportStar(require("./Orbit"), exports);
__exportStar(require("./Simulation"), exports);
__exportStar(require("./Skybox"), exports);
__exportStar(require("./SpaceObject"), exports);
__exportStar(require("./RotatingObject"), exports);
__exportStar(require("./ShapeObject"), exports);
__exportStar(require("./SphereObject"), exports);
__exportStar(require("./StaticParticles"), exports);
__exportStar(require("./KeplerParticles"), exports);
__exportStar(require("./Stars"), exports);
__exportStar(require("./Units"), exports);
var _THREE = __importStar(require("three"));
exports.THREE = _THREE;
