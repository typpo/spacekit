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
exports.__esModule = true;
exports.BlackHoleSceneCapture = void 0;
var THREE = __importStar(require("three"));
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
        this.foreground = depthTarget();
        this.clearColor = new THREE.Color();
        this.viewProjection = new THREE.Matrix4();
        this.depthRange = new THREE.Vector2();
        this.size = new THREE.Vector2();
        this.hasTransparent = false;
        this.camera = new THREE.PerspectiveCamera();
        this.viewport = new THREE.Vector4();
        this.compositeScene = new THREE.Scene();
        this.composite = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
            uniforms: {
                color: { value: this.foreground.texture },
                depth: { value: this.foreground.depthTexture }
            },
            vertexShader: "varying vec2 sampleUv;\n        void main() { sampleUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",
            fragmentShader: "varying vec2 sampleUv;\n        uniform sampler2D color;\n        uniform sampler2D depth;\n        void main() {\n          vec4 sampleColor = texture2D(color, sampleUv);\n          // Additive black padding contributes neither light nor coverage.\n          if (max(max(sampleColor.r, sampleColor.g), max(sampleColor.b, sampleColor.a)) == 0.0) discard;\n          gl_FragColor = sampleColor;\n          gl_FragDepthEXT = texture2D(depth, sampleUv).x;\n        }",
            extensions: { fragDepth: true },
            transparent: true,
            premultipliedAlpha: true,
            toneMapped: false
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
                objects.push({
                    object: renderable,
                    mask: object.layers.mask,
                    transparent: sources.some(function (material) {
                        return material.transparent ||
                            !material.depthWrite ||
                            !material.depthTest;
                    }),
                    z: position
                        .setFromMatrixPosition(object.matrixWorld)
                        .applyMatrix4(camera.matrixWorldInverse).z,
                    groupOrder: (_a = parent === null || parent === void 0 ? void 0 : parent.renderOrder) !== null && _a !== void 0 ? _a : 0
                });
                sources.forEach(function (material) {
                    if (materials.has(material))
                        return;
                    materials.set(material, {
                        depthWrite: material.depthWrite,
                        depthTest: material.depthTest,
                        blending: material.blending,
                        blendSrc: material.blendSrc,
                        blendDst: material.blendDst,
                        blendEquation: material.blendEquation,
                        blendSrcAlpha: material.blendSrcAlpha,
                        blendDstAlpha: material.blendDstAlpha,
                        blendEquationAlpha: material.blendEquationAlpha
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
            this.hasTransparent = transparentObjects.length > 0;
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
            materials.forEach(function (_, material) {
                material.depthWrite = material.depthTest = true;
            });
            for (var _b = 0, transparentObjects_1 = transparentObjects; _b < transparentObjects_1.length; _b++) {
                var entry = transparentObjects_1[_b];
                entry.object.layers.mask = entry.mask;
                // Reuse the foreground target as temporary storage until its final
                // capture, avoiding another full-resolution color/depth allocation.
                clear(this.foreground);
                renderer.render(scene, this.camera);
                entry.object.layers.mask = 0;
                renderer.setRenderTarget(this.transparent);
                renderer.render(this.compositeScene, this.camera);
            }
            objects.forEach(function (_a) {
                var object = _a.object, mask = _a.mask;
                object.layers.mask = mask;
            });
            materials.forEach(function (original, material) {
                material.depthWrite = original.depthWrite;
                material.depthTest = original.depthTest;
            });
            clear(this.foreground);
            if (near > sourceCamera.near) {
                this.clipCamera(sourceCamera, sourceCamera.near, Math.min(near, sourceCamera.far));
                renderer.render(scene, this.camera);
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
        for (var _i = 0, _a = [this.background, this.transparent, this.foreground]; _i < _a.length; _i++) {
            var target = _a[_i];
            target.dispose();
        }
        this.composite.geometry.dispose();
        this.composite.material.dispose();
    };
    return BlackHoleSceneCapture;
}());
exports.BlackHoleSceneCapture = BlackHoleSceneCapture;
