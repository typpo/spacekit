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
exports.BlackHoleSceneCapture = void 0;
var THREE = __importStar(require("three"));
var BlackHoleDepthHierarchy_1 = require("./BlackHoleDepthHierarchy");
// Steps use whole framebuffer pixels per axis; narrower gaps can be skipped.
var POINT_SMOOTHING_STEP_PIXELS = 2;
var POINT_SMOOTHING_STEPS = 8;
function depthTarget() {
    var target = new THREE.WebGLRenderTarget(1, 1);
    target.depthTexture = new THREE.DepthTexture(1, 1, THREE.UnsignedIntType);
    return target;
}
/** Camera-clipped color/depth layers for screen-space scene lensing. */
var BlackHoleSceneCapture = /** @class */ (function () {
    function BlackHoleSceneCapture() {
        this.background = depthTarget();
        this.transparent = depthTarget();
        this.surfaces = depthTarget();
        this.foreground = depthTarget();
        this.clearColor = new THREE.Color();
        this.viewProjection = new THREE.Matrix4();
        this.depthRange = new THREE.Vector2();
        this.size = new THREE.Vector2();
        this.backgroundBounds = new BlackHoleDepthHierarchy_1.BlackHoleDepthHierarchy();
        this.transparentBounds = new BlackHoleDepthHierarchy_1.BlackHoleDepthHierarchy();
        this.surfaceBounds = new BlackHoleDepthHierarchy_1.BlackHoleDepthHierarchy();
        // Internal A/B switch; unsupported float render targets use the linear walk.
        this.depthHierarchyEnabled = true;
        this.hasDepthHierarchy = false;
        this.hasTransparent = false;
        this.hasSurfaces = false;
        this.camera = new THREE.PerspectiveCamera();
        this.viewport = new THREE.Vector4();
        this.compositeScene = new THREE.Scene();
        this.composite = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
            uniforms: {
                color: { value: this.foreground.texture },
                depth: { value: this.foreground.depthTexture },
                smoothingStep: { value: new THREE.Vector2() },
            },
            vertexShader: "varying vec2 sampleUv;\n        void main() { sampleUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",
            fragmentShader: "varying vec2 sampleUv;\n        uniform sampler2D color;\n        uniform sampler2D depth;\n        uniform vec2 smoothingStep;\n        float light(vec4 sampleColor) {\n          return max(max(sampleColor.r, sampleColor.g), max(sampleColor.b, sampleColor.a));\n        }\n        void main() {\n          vec4 sampleColor = texture2D(color, sampleUv);\n          float weight = light(sampleColor);\n          // Additive black padding contributes neither light nor coverage.\n          if (weight == 0.0) discard;\n          gl_FragColor = sampleColor;\n          float sampleDepth = texture2D(depth, sampleUv).x;\n          if (smoothingStep.x > 0.0 && sampleDepth < 1.0) {\n            // Smooth overlapping sprite depths along eight directions to avoid\n            // lensing each square separately. Stop at each sampled gap so\n            // separate sprites keep their own depths.\n            float weightedDepth = weight * sampleDepth;\n            for (int x = -1; x <= 1; x++) {\n              for (int y = -1; y <= 1; y++) {\n                if (x == 0 && y == 0) continue;\n                // Whole-pixel steps stay on texel centers.\n                vec2 offset = vec2(float(x), float(y)) * smoothingStep;\n                for (int i = 1; i <= ".concat(POINT_SMOOTHING_STEPS, "; i++) {\n                  vec2 uv = sampleUv + offset * float(i);\n                  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) break;\n                  float neighborDepth = texture2D(depth, uv).x;\n                  float neighborWeight = neighborDepth < 1.0 ? light(texture2D(color, uv)) : 0.0;\n                  if (neighborWeight == 0.0) break;\n                  weight += neighborWeight;\n                  weightedDepth += neighborWeight * neighborDepth;\n                }\n              }\n            }\n            sampleDepth = weightedDepth / weight;\n          }\n          gl_FragDepth = sampleDepth;\n        }"),
            transparent: true,
            premultipliedAlpha: true,
            toneMapped: false,
        }));
        this.camera.matrixAutoUpdate = false;
        this.composite.frustumCulled = false;
        this.compositeScene.add(this.composite);
    }
    BlackHoleSceneCapture.prototype.clipCamera = function (source, near, far) {
        this.camera.copy(source, false);
        this.camera.matrixAutoUpdate = false;
        this.camera.near = near;
        this.camera.far = far;
        // Preserve the caller's asymmetric frustum / view offset and change only
        // the perspective depth mapping. No source shader modification is needed.
        var projection = this.camera.projectionMatrix;
        projection.elements[10] = -(far + near) / (far - near);
        projection.elements[14] = (-2 * far * near) / (far - near);
        this.camera.projectionMatrixInverse.copy(projection).invert();
    };
    BlackHoleSceneCapture.prototype.render = function (renderer, scene, camera, planeDistance) {
        if (!camera.isPerspectiveCamera) {
            throw new Error('Black hole scene lensing requires a perspective camera');
        }
        this.hasDepthHierarchy =
            this.depthHierarchyEnabled &&
                renderer.extensions.has('EXT_color_buffer_float');
        var sourceCamera = camera;
        var previousTarget = renderer.getRenderTarget();
        var cubeFace = renderer.getActiveCubeFace();
        var mipLevel = renderer.getActiveMipmapLevel();
        var autoClear = renderer.autoClear;
        var clearAlpha = renderer.getClearAlpha();
        var xrEnabled = renderer.xr.enabled;
        var shadowAutoUpdate = renderer.shadowMap.autoUpdate;
        var background = scene.background;
        renderer.getClearColor(this.clearColor);
        renderer.getCurrentViewport(this.viewport);
        this.size.set(Math.max(1, this.viewport.z), Math.max(1, this.viewport.w));
        for (var _i = 0, _a = [this.background, this.transparent, this.foreground]; _i < _a.length; _i++) {
            var target = _a[_i];
            if (target.width !== this.size.x || target.height !== this.size.y) {
                target.setSize(this.size.x, this.size.y);
            }
        }
        // A distant Skybox must remain in the background capture. Starting at the
        // lens plane also avoids the simulation camera's very small near plane.
        var near = Math.max(sourceCamera.near, planeDistance > 0 ? planeDistance : sourceCamera.far);
        var far = Math.max(sourceCamera.far, 1e11, near * 1e5);
        this.depthRange.set(near, far);
        var objects = [];
        var position = new THREE.Vector3();
        var materials = new Map();
        var hidden = [];
        var clear = function (target) {
            renderer.setRenderTarget(target);
            renderer.setClearColor(0, 0);
            renderer.state.buffers.color.setMask(true);
            renderer.state.buffers.depth.setMask(true);
            renderer.clear();
        };
        try {
            scene.traverse(function (object) {
                if (object.userData.spacekitBlackHole && object.visible) {
                    hidden.push(object);
                    object.visible = false;
                }
            });
            scene.traverseVisible(function (object) {
                var _a;
                var renderable = object;
                if (!renderable.material)
                    return;
                var sources = scene.overrideMaterial
                    ? [scene.overrideMaterial]
                    : Array.isArray(renderable.material)
                        ? renderable.material
                        : [renderable.material];
                var parent = object.parent;
                while (parent && !parent.isGroup)
                    parent = parent.parent;
                var background = !scene.overrideMaterial &&
                    object.userData.spacekitBackground === true;
                objects.push({
                    object: renderable,
                    sources: sources,
                    mask: object.layers.mask,
                    background: background,
                    surface: object.isMesh === true,
                    transparent: !background &&
                        sources.some(function (material) {
                            return material.transparent ||
                                !material.depthWrite ||
                                !material.depthTest;
                        }),
                    z: position
                        .setFromMatrixPosition(object.matrixWorld)
                        .applyMatrix4(camera.matrixWorldInverse).z,
                    groupOrder: (_a = parent === null || parent === void 0 ? void 0 : parent.renderOrder) !== null && _a !== void 0 ? _a : 0,
                });
                sources.forEach(function (material) {
                    if (materials.has(material))
                        return;
                    materials.set(material, {
                        depthWrite: material.depthWrite,
                        depthTest: material.depthTest,
                        colorWrite: material.colorWrite,
                        blending: material.blending,
                        blendSrc: material.blendSrc,
                        blendDst: material.blendDst,
                        blendEquation: material.blendEquation,
                        blendSrcAlpha: material.blendSrcAlpha,
                        blendDstAlpha: material.blendDstAlpha,
                        blendEquationAlpha: material.blendEquationAlpha,
                    });
                    if (material.blending === THREE.AdditiveBlending) {
                        // Preserve additive RGB but not the opaque alpha of the Sun JPEG.
                        material.blending = THREE.CustomBlending;
                        material.blendSrc = material.premultipliedAlpha
                            ? THREE.OneFactor
                            : THREE.SrcAlphaFactor;
                        material.blendDst = THREE.OneFactor;
                        material.blendEquation = THREE.AddEquation;
                        material.blendSrcAlpha = THREE.ZeroFactor;
                        material.blendDstAlpha = THREE.OneFactor;
                        material.blendEquationAlpha = THREE.AddEquation;
                    }
                });
            });
            renderer.xr.enabled = false;
            renderer.shadowMap.autoUpdate = false;
            renderer.autoClear = false;
            this.clipCamera(sourceCamera, near, far);
            this.composite.layers.mask = camera.layers.mask;
            this.viewProjection.multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse);
            objects.forEach(function (_a) {
                var object = _a.object, mask = _a.mask, transparent = _a.transparent;
                object.layers.mask = transparent ? 0 : mask;
            });
            clear(this.background);
            renderer.render(scene, this.camera);
            scene.background = null;
            clear(this.transparent);
            var transparentObjects = objects.filter(function (entry) { return entry.transparent && (entry.mask & camera.layers.mask) !== 0; });
            this.hasTransparent = transparentObjects.some(function (entry) { return !entry.surface; });
            this.hasSurfaces = transparentObjects.some(function (entry) { return entry.surface; });
            if (this.hasSurfaces) {
                if (this.surfaces.width !== this.size.x ||
                    this.surfaces.height !== this.size.y) {
                    this.surfaces.setSize(this.size.x, this.size.y);
                }
                clear(this.surfaces);
            }
            // Match ordinary transparent sorting. Layers use the nearest contributing
            // depth; intersecting transparent surfaces retain screen-space limits.
            transparentObjects.sort(function (a, b) {
                return a.groupOrder - b.groupOrder ||
                    a.object.renderOrder - b.object.renderOrder ||
                    a.z - b.z ||
                    a.object.id - b.object.id;
            });
            objects.forEach(function (_a) {
                var object = _a.object;
                object.layers.mask = 0;
            });
            for (var _b = 0, transparentObjects_1 = transparentObjects; _b < transparentObjects_1.length; _b++) {
                var entry = transparentObjects_1[_b];
                entry.object.layers.mask = entry.mask;
                // Reuse the foreground target as temporary storage until its final
                // capture, avoiding another full-resolution color/depth allocation.
                clear(this.foreground);
                // Color first, with the material's own depth settings. Forcing depth
                // writes here would let each sprite's transparent corners hide the
                // particles drawn after it in the same draw call.
                renderer.render(scene, this.camera);
                // Then the nearest depth of everything drawn, without touching color.
                // The composite discards empty pixels and smooths overlapping points.
                entry.sources.forEach(function (material) {
                    material.depthWrite = material.depthTest = true;
                    material.colorWrite = false;
                });
                renderer.render(scene, this.camera);
                entry.sources.forEach(function (material) {
                    var original = materials.get(material);
                    material.depthWrite = original.depthWrite;
                    material.depthTest = original.depthTest;
                    material.colorWrite = original.colorWrite;
                });
                entry.object.layers.mask = 0;
                // Keep surfaces at their own distance instead of moving a ring to the
                // depth of a faint particle overlapping it in the captured image.
                renderer.setRenderTarget(entry.surface ? this.surfaces : this.transparent);
                var composite = this.composite.material;
                var step = entry.object.isPoints
                    ? POINT_SMOOTHING_STEP_PIXELS
                    : 0;
                composite.uniforms.smoothingStep.value.set(step / this.size.x, step / this.size.y);
                composite.depthFunc = THREE.LessEqualDepth;
                composite.depthWrite = true;
                composite.blending = THREE.NormalBlending;
                renderer.render(this.compositeScene, this.camera);
                // A nearer translucent pixel must not reject light behind it. Blend
                // farther fragments underneath without replacing the nearest depth.
                // The strict depth test excludes pixels handled by the first pass.
                composite.depthFunc = THREE.GreaterDepth;
                composite.depthWrite = false;
                composite.blending = THREE.CustomBlending;
                composite.blendSrc = THREE.OneMinusDstAlphaFactor;
                composite.blendDst = THREE.OneFactor;
                renderer.render(this.compositeScene, this.camera);
            }
            objects.forEach(function (_a) {
                var object = _a.object, mask = _a.mask, background = _a.background;
                // Infinite sky belongs only to the background color capture. It must
                // neither enter finite-depth tracing nor cover the lens as foreground.
                object.layers.mask = background ? 0 : mask;
            });
            clear(this.foreground);
            if (near > sourceCamera.near) {
                this.clipCamera(sourceCamera, sourceCamera.near, Math.min(near, sourceCamera.far));
                renderer.render(scene, this.camera);
            }
            if (this.hasDepthHierarchy) {
                this.backgroundBounds.render(renderer, this.background.depthTexture, this.size.x, this.size.y);
                if (this.hasTransparent)
                    this.transparentBounds.render(renderer, this.transparent.depthTexture, this.size.x, this.size.y);
                if (this.hasSurfaces)
                    this.surfaceBounds.render(renderer, this.surfaces.depthTexture, this.size.x, this.size.y);
            }
        }
        finally {
            materials.forEach(function (original, material) {
                return Object.assign(material, original);
            });
            objects.forEach(function (_a) {
                var object = _a.object, mask = _a.mask;
                object.layers.mask = mask;
            });
            hidden.forEach(function (object) {
                object.visible = true;
            });
            scene.background = background;
            renderer.setRenderTarget(previousTarget, cubeFace, mipLevel);
            renderer.setClearColor(this.clearColor, clearAlpha);
            renderer.autoClear = autoClear;
            renderer.xr.enabled = xrEnabled;
            renderer.shadowMap.autoUpdate = shadowAutoUpdate;
        }
    };
    BlackHoleSceneCapture.prototype.dispose = function () {
        this.backgroundBounds.dispose();
        this.transparentBounds.dispose();
        this.surfaceBounds.dispose();
        for (var _i = 0, _a = [
            this.background,
            this.transparent,
            this.surfaces,
            this.foreground,
        ]; _i < _a.length; _i++) {
            var target = _a[_i];
            target.dispose();
        }
        this.composite.geometry.dispose();
        this.composite.material.dispose();
    };
    return BlackHoleSceneCapture;
}());
exports.BlackHoleSceneCapture = BlackHoleSceneCapture;
