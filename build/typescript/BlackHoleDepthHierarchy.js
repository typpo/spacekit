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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackHoleDepthHierarchy = void 0;
var THREE = __importStar(require("three"));
function boundsTarget() {
    return new THREE.WebGLRenderTarget(1, 1, {
        format: THREE.RGFormat,
        type: THREE.FloatType,
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        depthBuffer: false,
        stencilBuffer: false,
    });
}
/** Conservative depth bounds for 8x8 and 64x64 framebuffer tiles. */
var BlackHoleDepthHierarchy = /** @class */ (function () {
    function BlackHoleDepthHierarchy() {
        this.fine = boundsTarget();
        this.coarse = boundsTarget();
        this.scene = new THREE.Scene();
        this.camera = new THREE.Camera();
        this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
            uniforms: {
                source: { value: null },
                sourceSize: { value: new THREE.Vector2() },
                sourceIsBounds: { value: false },
            },
            vertexShader: "void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",
            fragmentShader: "\n        uniform sampler2D source;\n        uniform vec2 sourceSize;\n        uniform bool sourceIsBounds;\n        void main() {\n          ivec2 origin = ivec2(gl_FragCoord.xy) * 8;\n          vec2 bounds = vec2(1.0, 0.0);\n          for (int y = 0; y < 8; y++) {\n            for (int x = 0; x < 8; x++) {\n              ivec2 pixel = origin + ivec2(x, y);\n              if (any(greaterThanEqual(pixel, ivec2(sourceSize)))) continue;\n              vec2 value = texelFetch(source, pixel, 0).rg;\n              if (!sourceIsBounds) value.y = value.x < 1.0 ? value.x : 0.0;\n              bounds.x = min(bounds.x, value.x);\n              bounds.y = max(bounds.y, value.y);\n            }\n          }\n          gl_FragColor = vec4(bounds, 0.0, 1.0);\n        }",
            depthTest: false,
            depthWrite: false,
            blending: THREE.NoBlending,
            toneMapped: false,
        }));
        this.quad.frustumCulled = false;
        this.scene.add(this.quad);
        this.fine.texture.name = 'black-hole-depth-fine';
        this.coarse.texture.name = 'black-hole-depth-coarse';
    }
    // Called inside scene capture, which owns restoration of renderer state.
    BlackHoleDepthHierarchy.prototype.render = function (renderer, depth, width, height) {
        var uniforms = this.quad.material.uniforms;
        uniforms.source.value = depth;
        uniforms.sourceIsBounds.value = false;
        for (var _i = 0, _a = [this.fine, this.coarse]; _i < _a.length; _i++) {
            var target = _a[_i];
            uniforms.sourceSize.value.set(width, height);
            width = Math.ceil(width / 8);
            height = Math.ceil(height / 8);
            if (target.width !== width || target.height !== height)
                target.setSize(width, height);
            renderer.setRenderTarget(target);
            renderer.render(this.scene, this.camera);
            uniforms.source.value = target.texture;
            uniforms.sourceIsBounds.value = true;
        }
    };
    BlackHoleDepthHierarchy.prototype.dispose = function () {
        this.fine.dispose();
        this.coarse.dispose();
        this.quad.geometry.dispose();
        this.quad.material.dispose();
    };
    return BlackHoleDepthHierarchy;
}());
exports.BlackHoleDepthHierarchy = BlackHoleDepthHierarchy;
