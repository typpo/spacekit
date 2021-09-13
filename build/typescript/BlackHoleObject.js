"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.__esModule = true;
exports.BlackHoleObject = void 0;
var THREE = __importStar(require("three"));
var SphereObject_1 = require("./SphereObject");
var shaders_1 = require("./shaders");
var BlackHoleObject = /** @class */ (function (_super) {
    __extends(BlackHoleObject, _super);
    function BlackHoleObject(id, options, simulation) {
        return _super.call(this, id, options, simulation) || this;
    }
    BlackHoleObject.prototype.init = function () {
        var _a;
        var color = (_a = this._options.color) !== null && _a !== void 0 ? _a : 0x404040;
        /*
        const material = new THREE.MeshBasicMaterial({
          color,
        });
         */
        this.uniforms = {
            time: { value: 0 },
            eventHorizonRadius: { value: 1.0 },
            resolution: { value: new THREE.Vector2() },
            cameraPosLocal: { value: new THREE.Vector3() },
            cameraUp: { value: new THREE.Vector3() },
            cameraDirection: { value: new THREE.Vector3() },
            blackHolePos: { value: new THREE.Vector3() }
        };
        var uniforms = this.uniforms;
        var material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: shaders_1.BLACK_HOLE_SHADER_VERTEX,
            fragmentShader: shaders_1.BLACK_HOLE_SHADER_FRAGMENT
        });
        uniforms.time.value = this._context.simulation.getJd();
        var eventHorizonRadius = this.getScaledRadius();
        uniforms.eventHorizonRadius.value = eventHorizonRadius;
        uniforms.resolution.value.set(this._context.container.width, this._context.container.height);
        uniforms.cameraPosLocal.value.copy(this._context.objects.camera.get3jsCamera().position);
        uniforms.cameraUp.value.copy(this._context.objects.camera.get3jsCamera().up);
        uniforms.blackHolePos.value.set(this._position[0], this._position[1], this._position[2]);
        // https://stackoverflow.com/questions/14813902/three-js-get-the-direction-in-which-the-camera-is-looking
        this._context.objects.camera.get3jsCamera().getWorldDirection(uniforms.cameraDirection.value);
        var detailedObj = new THREE.LOD();
        var levelsOfDetail = this._options.levelsOfDetail || [
            { radii: 0, segments: 64 },
        ];
        var radius = eventHorizonRadius * 3.5;
        /*
        for (let i = 0; i < levelsOfDetail.length; i += 1) {
          const level = levelsOfDetail[i];
          const sphereGeometry = new THREE.SphereGeometry(
            radius,
            level.segments,
            level.segments,
          );
    
          const mesh = new THREE.Mesh(sphereGeometry, material);
          detailedObj.addLevel(mesh, radius * level.radii);
        }
        this._obj.add(detailedObj);
         */
        var mesh = new THREE.Mesh(new THREE.PlaneGeometry(radius, radius), material);
        this._obj.add(mesh);
        if (this._simulation) {
            // Add it all to visualization.
            this._simulation.addObject(this, false /* noUpdate */);
        }
        return true;
    };
    BlackHoleObject.prototype.update = function () {
        var uniforms = this.uniforms;
        if (!uniforms) {
            return;
        }
        uniforms.time.value = this._context.simulation.getJd();
        uniforms.cameraPosLocal.value.copy(this._context.objects.camera.get3jsCamera().position);
        uniforms.cameraUp.value.copy(this._context.objects.camera.get3jsCamera().up);
        uniforms.blackHolePos.value.set(this._position[0], this._position[1], this._position[2]);
        this._context.objects.camera.get3jsCamera().getWorldDirection(uniforms.cameraDirection.value);
    };
    return BlackHoleObject;
}(SphereObject_1.SphereObject));
exports.BlackHoleObject = BlackHoleObject;
