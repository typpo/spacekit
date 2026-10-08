"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.BlackHoleSceneCapture = void 0;
var THREE = __importStar(require("three"));
/** Split the camera image at the lens plane, preserving transparent layers. */
var BlackHoleSceneCapture = /** @class */ (function () {
    function BlackHoleSceneCapture() {
        this.background = new THREE.WebGLRenderTarget(1, 1);
        this.foreground = new THREE.WebGLRenderTarget(1, 1);
        this.clearColor = new THREE.Color();
        this.viewport = new THREE.Vector4();
        this.planeDepth = { value: 1 };
        this.materials = new Map();
    }
    BlackHoleSceneCapture.prototype.layerMaterial = function (source, foreground) {
        var _this = this;
        var entry = this.materials.get(source);
        if (!entry || entry.version !== source.version) {
            if (entry)
                entry.layers.forEach(function (material) { return material.dispose(); });
            var layers = [false, true].map(function (front) {
                var material = source.clone();
                var onBeforeCompile = source.onBeforeCompile;
                material.onBeforeCompile = function (shader, renderer) {
                    onBeforeCompile.call(material, shader, renderer);
                    shader.uniforms.blackHolePlaneDepth = _this.planeDepth;
                    // Retain each object's vertex transform and fragment shader: this
                    // also works with GPU Kepler particles, sprites, lines and skinning.
                    shader.fragmentShader =
                        'uniform highp float blackHolePlaneDepth;\n' +
                            shader.fragmentShader.replace(/void\s+main\s*\(\s*(?:void)?\s*\)\s*\{/, "void main() {\n                if ((gl_FragCoord.z < blackHolePlaneDepth) != " + (front ? 'true' : 'false') + ") discard;");
                };
                material.customProgramCacheKey = function () {
                    return source.customProgramCacheKey() + ':black-hole-layer:' + front;
                };
                return material;
            });
            entry = { version: source.version, layers: layers };
            this.materials.set(source, entry);
        }
        var material = entry.layers[foreground ? 1 : 0];
        // copy() preserves changing opacity/maps/colors/point sizes, as well as
        // blending/depth settings. Avoid ShaderMaterial.copy's deep uniform clone;
        // share the uniform values so GPU animation remains current in both passes.
        if (source instanceof THREE.ShaderMaterial) {
            THREE.Material.prototype.copy.call(material, source);
            material.uniforms = __assign({}, source.uniforms);
        }
        else {
            material.copy(source);
        }
        if (source.blending === THREE.AdditiveBlending) {
            // Additive light contributes RGB, not coverage. The Sun's opaque JPEG
            // has black padding which must not replace the sky with a black square.
            material.blending = THREE.CustomBlending;
            material.blendSrc = source.premultipliedAlpha
                ? THREE.OneFactor
                : THREE.SrcAlphaFactor;
            material.blendDst = THREE.OneFactor;
            material.blendEquation = THREE.AddEquation;
            material.blendSrcAlpha = THREE.ZeroFactor;
            material.blendDstAlpha = THREE.OneFactor;
            material.blendEquationAlpha = THREE.AddEquation;
        }
        return material;
    };
    BlackHoleSceneCapture.prototype.render = function (renderer, scene, camera, planeDepth) {
        var _this = this;
        var previousTarget = renderer.getRenderTarget();
        var cubeFace = renderer.getActiveCubeFace();
        var mipLevel = renderer.getActiveMipmapLevel();
        var autoClear = renderer.autoClear;
        var clearAlpha = renderer.getClearAlpha();
        var xrEnabled = renderer.xr.enabled;
        var shadowAutoUpdate = renderer.shadowMap.autoUpdate;
        var background = scene.background;
        var overrideMaterial = scene.overrideMaterial;
        renderer.getClearColor(this.clearColor);
        renderer.getCurrentViewport(this.viewport);
        this.planeDepth.value = planeDepth;
        var width = Math.max(1, this.viewport.z);
        var height = Math.max(1, this.viewport.w);
        if (this.background.width !== width || this.background.height !== height) {
            this.background.setSize(width, height);
            this.foreground.setSize(width, height);
        }
        var hidden = [];
        var replaced = [];
        var used = new Set();
        try {
            scene.traverse(function (object) {
                if (object.userData.spacekitBlackHole && object.visible) {
                    hidden.push(object);
                    object.visible = false;
                }
            });
            scene.traverseVisible(function (object) {
                var renderable = object;
                if (renderable.material)
                    replaced.push([renderable, renderable.material]);
            });
            renderer.xr.enabled = false;
            renderer.shadowMap.autoUpdate = false;
            renderer.autoClear = false;
            var _loop_1 = function (front) {
                replaced.forEach(function (_a) {
                    var object = _a[0], original = _a[1];
                    var layer = function (material) {
                        used.add(material);
                        return _this.layerMaterial(material, front);
                    };
                    object.material = Array.isArray(original)
                        ? original.map(layer)
                        : layer(original);
                });
                scene.background = front ? null : background;
                if (overrideMaterial) {
                    used.add(overrideMaterial);
                    scene.overrideMaterial = this_1.layerMaterial(overrideMaterial, front);
                }
                renderer.setRenderTarget(front ? this_1.foreground : this_1.background);
                renderer.setClearColor(0, 0);
                renderer.state.buffers.color.setMask(true);
                renderer.state.buffers.depth.setMask(true);
                renderer.clear();
                renderer.render(scene, camera);
            };
            var this_1 = this;
            for (var _i = 0, _a = [false, true]; _i < _a.length; _i++) {
                var front = _a[_i];
                _loop_1(front);
            }
        }
        finally {
            replaced.forEach(function (_a) {
                var object = _a[0], material = _a[1];
                return (object.material = material);
            });
            hidden.forEach(function (object) { return (object.visible = true); });
            scene.background = background;
            scene.overrideMaterial = overrideMaterial;
            renderer.setRenderTarget(previousTarget, cubeFace, mipLevel);
            renderer.setClearColor(this.clearColor, clearAlpha);
            renderer.autoClear = autoClear;
            renderer.xr.enabled = xrEnabled;
            renderer.shadowMap.autoUpdate = shadowAutoUpdate;
            this.materials.forEach(function (entry, source) {
                if (!used.has(source)) {
                    entry.layers.forEach(function (material) { return material.dispose(); });
                    _this.materials["delete"](source);
                }
            });
        }
    };
    BlackHoleSceneCapture.prototype.dispose = function () {
        this.background.dispose();
        this.foreground.dispose();
        this.materials.forEach(function (_a) {
            var layers = _a.layers;
            return layers.forEach(function (material) { return material.dispose(); });
        });
        this.materials.clear();
    };
    return BlackHoleSceneCapture;
}());
exports.BlackHoleSceneCapture = BlackHoleSceneCapture;
