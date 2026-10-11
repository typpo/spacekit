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
// Depth bounds are stored as the bit patterns of non-negative floats, which
// order exactly like the floats themselves. RG32UI is color-renderable in every
// WebGL 2 context, so the bounds are exact and need no extension.
function boundsTarget(name) {
    var target = new THREE.WebGLRenderTarget(1, 1, {
        format: THREE.RGIntegerFormat,
        type: THREE.UnsignedIntType,
        internalFormat: 'RG32UI',
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        depthBuffer: false,
        stencilBuffer: false,
    });
    target.texture.name = name;
    return target;
}
function reduceMaterial(sourceType, read) {
    return new THREE.ShaderMaterial({
        glslVersion: THREE.GLSL3,
        uniforms: {
            source: { value: null },
            sourceSize: { value: new THREE.Vector2() },
        },
        vertexShader: "void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",
        fragmentShader: "\n      uniform highp ".concat(sourceType, " source;\n      uniform vec2 sourceSize;\n      layout(location = 0) out highp uvec4 bounds;\n      void main() {\n        ivec2 origin = ivec2(gl_FragCoord.xy) * 8;\n        uvec2 range = uvec2(floatBitsToUint(1.0), 0u);\n        for (int y = 0; y < 8; y++) {\n          for (int x = 0; x < 8; x++) {\n            ivec2 pixel = origin + ivec2(x, y);\n            if (any(greaterThanEqual(pixel, ivec2(sourceSize)))) continue;\n            ").concat(read, "\n            range = uvec2(min(range.x, value.x), max(range.y, value.y));\n          }\n        }\n        bounds = uvec4(range, 0u, 0u);\n      }"),
        depthTest: false,
        depthWrite: false,
        blending: THREE.NoBlending,
        toneMapped: false,
    });
}
/** Conservative depth bounds for 8x8 and 64x64 framebuffer tiles. */
var BlackHoleDepthHierarchy = /** @class */ (function () {
    function BlackHoleDepthHierarchy() {
        this.fine = boundsTarget('black-hole-depth-fine');
        this.coarse = boundsTarget('black-hole-depth-coarse');
        this.scene = new THREE.Scene();
        this.camera = new THREE.Camera();
        // Empty pixels (depth 1) widen only the minimum.
        this.fromDepth = reduceMaterial('sampler2D', "float depth = texelFetch(source, pixel, 0).x;\n            uvec2 value = uvec2(floatBitsToUint(depth), depth < 1.0 ? floatBitsToUint(depth) : 0u);");
        this.fromBounds = reduceMaterial('usampler2D', 'uvec2 value = texelFetch(source, pixel, 0).rg;');
        this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.fromDepth);
        this.quad.frustumCulled = false;
        this.scene.add(this.quad);
    }
    // The lens program binds every layer's bounds to a usampler2D, including
    // layers that are empty this frame. Integer samplers need allocated storage.
    BlackHoleDepthHierarchy.prototype.allocate = function (renderer) {
        renderer.initRenderTarget(this.fine);
        renderer.initRenderTarget(this.coarse);
    };
    // Called inside scene capture, which owns restoration of renderer state,
    // including autoClear: integer targets must not be cleared with floats.
    BlackHoleDepthHierarchy.prototype.render = function (renderer, source) {
        var width = source.width, height = source.height;
        var texture = source.depthTexture;
        for (var _i = 0, _a = [this.fine, this.coarse]; _i < _a.length; _i++) {
            var target = _a[_i];
            var material = target === this.fine ? this.fromDepth : this.fromBounds;
            material.uniforms.source.value = texture;
            material.uniforms.sourceSize.value.set(width, height);
            width = Math.ceil(width / 8);
            height = Math.ceil(height / 8);
            target.setSize(width, height);
            this.quad.material = material;
            renderer.setRenderTarget(target);
            renderer.render(this.scene, this.camera);
            texture = target.texture;
        }
    };
    BlackHoleDepthHierarchy.prototype.dispose = function () {
        this.fine.dispose();
        this.coarse.dispose();
        this.quad.geometry.dispose();
        this.fromDepth.dispose();
        this.fromBounds.dispose();
    };
    return BlackHoleDepthHierarchy;
}());
exports.BlackHoleDepthHierarchy = BlackHoleDepthHierarchy;
