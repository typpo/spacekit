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
exports.BlackHole = void 0;
var THREE = __importStar(require("three"));
var BlackHolePhysics_1 = require("./BlackHolePhysics");
var blackHoleShader_1 = require("./blackHoleShader");
var BlackHoleSceneCapture_1 = require("./BlackHoleSceneCapture");
var sceneLensOwners = new WeakMap();
function positive(name, value) {
    if (!Number.isFinite(value) || value <= 0) {
        throw new Error("Black hole ".concat(name, " must be finite and positive"));
    }
    return value;
}
function vector(name, value) {
    if (value.length !== 3 || !value.every(Number.isFinite)) {
        throw new Error("Black hole ".concat(name, " must contain three finite coordinates"));
    }
    return new THREE.Vector3(value[0], value[1], value[2]);
}
function rotationSpeed(value) {
    if (!Number.isFinite(value) || value < 0) {
        throw new Error('Black hole disk rotationSpeed must be finite and nonnegative');
    }
    return value;
}
function diskAspectRatio(value) {
    if (!Number.isFinite(value) || value < 0.02 || value > 0.3) {
        throw new Error('Black hole disk aspectRatio must be between 0.02 and 0.3');
    }
    return value;
}
/**
 * A stationary Schwarzschild black hole, with GPU null-geodesic ray tracing.
 * Models light around an isolated non-spinning, uncharged mass; it does not
 * change Spacekit's Kepler orbits or simulate accretion hydrodynamics.
 * Requires WebGL 2 and highp fragment precision.
 */
var BlackHole = /** @class */ (function () {
    function BlackHole(id, options, simulation) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        this.animationOffsetSeconds = 0;
        this.disposed = false;
        this.id = id;
        this.simulation = simulation;
        this.radiusAu = (0, BlackHolePhysics_1.schwarzschildRadiusAu)(options.massSolar);
        var context = simulation.getContext();
        this.unitsPerAu = positive('unitsPerAu', (_a = context.options.unitsPerAu) !== null && _a !== void 0 ? _a : 1);
        this.epochJd = simulation.getJd();
        var position = vector('position', (_b = options.position) !== null && _b !== void 0 ? _b : [0, 0, 0]);
        var normal = vector('diskNormal', (_c = options.diskNormal) !== null && _c !== void 0 ? _c : [0, 0, 1]);
        positive('diskNormal length', normal.length());
        normal.normalize();
        var disk = options.accretionDisk || {};
        this.animationSpeed = rotationSpeed((_d = disk.rotationSpeed) !== null && _d !== void 0 ? _d : 1);
        var inner = positive('disk innerRadius', (_e = disk.innerRadius) !== null && _e !== void 0 ? _e : 3);
        var outer = positive('disk outerRadius', (_f = disk.outerRadius) !== null && _f !== void 0 ? _f : 12);
        if (inner < 3 || outer <= inner) {
            throw new Error('Black hole disk requires 3 <= innerRadius < outerRadius');
        }
        var temperature = positive('disk temperature', (_g = disk.temperature) !== null && _g !== void 0 ? _g : 6500);
        var opticalDepth = positive('disk opticalDepth', (_h = disk.opticalDepth) !== null && _h !== void 0 ? _h : 2);
        var aspectRatio = diskAspectRatio((_j = disk.aspectRatio) !== null && _j !== void 0 ? _j : 0.025);
        var turbulence = (_k = disk.turbulence) !== null && _k !== void 0 ? _k : 0.65;
        if (!Number.isFinite(turbulence) || turbulence < 0 || turbulence > 1) {
            throw new Error('Black hole disk turbulence must be between 0 and 1');
        }
        var exposure = positive('exposure', (_l = options.exposure) !== null && _l !== void 0 ? _l : 1);
        if (options.lensScene)
            this.assertSceneLensingAvailable();
        if (options.quality !== undefined &&
            ['low', 'high'].indexOf(options.quality) < 0) {
            throw new Error('Black hole quality must be low or high');
        }
        var renderer = context.objects.renderer;
        if (renderer.capabilities.getMaxPrecision('highp') !== 'highp') {
            throw new Error('Black holes require highp fragment precision');
        }
        var rotation = new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal));
        var diskToWorld = new THREE.Matrix3().setFromMatrix4(rotation);
        var material = new THREE.ShaderMaterial({
            vertexShader: blackHoleShader_1.BLACK_HOLE_VERTEX,
            fragmentShader: blackHoleShader_1.BLACK_HOLE_FRAGMENT,
            defines: {
                RAY_STEPS: options.quality === 'low' ? 768 : 1024,
                RAY_STEP: options.quality === 'low' ? '0.04' : '0.02',
                VOLUME_STEP: options.quality === 'low' ? '0.05' : '0.025',
                VOLUME_SAMPLES: options.quality === 'low' ? 2 : 4,
            },
            uniforms: {
                inverseProjection: { value: new THREE.Matrix4() },
                cameraWorld: { value: new THREE.Matrix4() },
                viewProjection: { value: new THREE.Matrix4() },
                center: { value: new THREE.Vector3() },
                worldToDisk: { value: diskToWorld.clone().transpose() },
                diskToWorld: { value: diskToWorld },
                horizonRadius: {
                    value: positive('scaled horizon radius', this.radiusAu * this.unitsPerAu),
                },
                diskInner: { value: inner },
                diskOuter: { value: outer },
                diskEnabled: { value: options.accretionDisk !== false },
                temperature: { value: temperature },
                diskOpticalDepth: { value: opticalDepth },
                diskAspectRatio: { value: aspectRatio },
                diskTurbulence: { value: turbulence },
                exposure: { value: exposure },
                timeSeconds: { value: 0 },
                lightCrossingSeconds: {
                    value: (this.radiusAu * BlackHolePhysics_1.METERS_PER_AU) / BlackHolePhysics_1.SPEED_OF_LIGHT,
                },
                hasBackground: { value: !!options.backgroundTexture },
                backgroundTexture: { value: (_m = options.backgroundTexture) !== null && _m !== void 0 ? _m : null },
                lensScene: { value: false },
                sceneDepthHierarchy: { value: false },
                sceneBoundsFine: { value: null },
                sceneBoundsCoarse: { value: null },
                transparentBoundsFine: { value: null },
                transparentBoundsCoarse: { value: null },
                surfaceBoundsFine: { value: null },
                surfaceBoundsCoarse: { value: null },
                sceneColor: { value: null },
                sceneDepth: { value: null },
                sceneTransparent: { value: null },
                sceneTransparentDepth: { value: null },
                sceneHasTransparent: { value: false },
                sceneSurfaces: { value: null },
                sceneSurfaceDepth: { value: null },
                sceneHasSurfaces: { value: false },
                sceneViewProjection: { value: new THREE.Matrix4() },
                sceneSize: { value: new THREE.Vector2() },
                sceneDepthRange: { value: new THREE.Vector2() },
                sceneForeground: { value: null },
                sceneClearColor: { value: new THREE.Color() },
            },
            transparent: true,
            depthTest: true,
            depthWrite: true,
            toneMapped: false,
        });
        this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
        this.mesh.name = id;
        this.mesh.userData.spacekitBlackHole = true;
        this.mesh.position.copy(position.multiplyScalar(this.unitsPerAu));
        // The shader projects a full-screen quad, independent of its world position.
        this.mesh.frustumCulled = false;
        var centerClip = new THREE.Vector4();
        this.mesh.onBeforeRender = function (renderer, scene, camera) {
            var uniforms = material.uniforms;
            uniforms.inverseProjection.value.copy(camera.projectionMatrix).invert();
            uniforms.cameraWorld.value.copy(camera.matrixWorld);
            uniforms.viewProjection.value.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
            _this.mesh.getWorldPosition(uniforms.center.value);
            if (uniforms.lensScene.value && _this.sceneCapture) {
                var center = uniforms.center.value;
                centerClip
                    .set(center.x, center.y, center.z, 1)
                    .applyMatrix4(uniforms.viewProjection.value);
                _this.sceneCapture.render(renderer, scene, camera, centerClip.w);
                uniforms.sceneDepthHierarchy.value =
                    _this.sceneCapture.hasDepthHierarchy;
                uniforms.sceneClearColor.value.copy(_this.sceneCapture.clearColor);
                uniforms.sceneHasTransparent.value = _this.sceneCapture.hasTransparent;
                uniforms.sceneHasSurfaces.value = _this.sceneCapture.hasSurfaces;
            }
        };
        this.setSceneLensingEnabled((_o = options.lensScene) !== null && _o !== void 0 ? _o : false);
        simulation.addObject(this);
    }
    BlackHole.prototype.getId = function () {
        return this.id;
    };
    BlackHole.prototype.get3jsObjects = function () {
        return [this.mesh];
    };
    /** Physical radii in AU, independent of the simulation's display scale. */
    BlackHole.prototype.getPhysicalRadii = function () {
        return {
            eventHorizonAu: this.radiusAu,
            photonSphereAu: 1.5 * this.radiusAu,
            iscoAu: 3 * this.radiusAu,
            shadowImpactParameterAu: BlackHolePhysics_1.SCHWARZSCHILD_CRITICAL_IMPACT * this.radiusAu,
        };
    };
    BlackHole.prototype.setPosition = function (position) {
        this.mesh.position.copy(vector('position', position).multiplyScalar(this.unitsPerAu));
    };
    BlackHole.prototype.update = function (jd) {
        this.mesh.material.uniforms.timeSeconds.value =
            (jd - this.epochJd) * 86400 * this.animationSpeed +
                this.animationOffsetSeconds;
    };
    /** Change the disk animation multiplier without a phase jump; does not spin the black hole. */
    BlackHole.prototype.setRotationSpeed = function (value) {
        var speed = rotationSpeed(value);
        var elapsed = (this.simulation.getJd() - this.epochJd) * 86400;
        this.animationOffsetSeconds += elapsed * (this.animationSpeed - speed);
        this.animationSpeed = speed;
        this.update(this.simulation.getJd());
    };
    /** Change the chosen outer gas boundary, in Schwarzschild radii. */
    BlackHole.prototype.setDiskOuterRadius = function (value) {
        var outer = positive('disk outerRadius', value);
        var uniforms = this.mesh.material.uniforms;
        if (outer <= uniforms.diskInner.value) {
            throw new Error('Black hole disk outerRadius must exceed innerRadius');
        }
        uniforms.diskOuter.value = outer;
    };
    /** Adjust the atmosphere without recreating the disk or resetting its animation. */
    BlackHole.prototype.setDiskAspectRatio = function (value) {
        this.mesh.material.uniforms.diskAspectRatio.value = diskAspectRatio(value);
    };
    BlackHole.prototype.setDiskEnabled = function (enabled) {
        this.mesh.material.uniforms.diskEnabled.value = enabled;
    };
    /** Toggle scene distortion without changing the disk, sky or simulation time. */
    BlackHole.prototype.setSceneLensingEnabled = function (enabled) {
        if (this.disposed)
            return;
        var material = this.mesh.material;
        if (enabled) {
            this.assertSceneLensingAvailable();
            if (!this.sceneCapture)
                this.sceneCapture = new BlackHoleSceneCapture_1.BlackHoleSceneCapture();
            material.uniforms.sceneBoundsFine.value =
                this.sceneCapture.backgroundBounds.fine.texture;
            material.uniforms.sceneBoundsCoarse.value =
                this.sceneCapture.backgroundBounds.coarse.texture;
            material.uniforms.transparentBoundsFine.value =
                this.sceneCapture.transparentBounds.fine.texture;
            material.uniforms.transparentBoundsCoarse.value =
                this.sceneCapture.transparentBounds.coarse.texture;
            material.uniforms.surfaceBoundsFine.value =
                this.sceneCapture.surfaceBounds.fine.texture;
            material.uniforms.surfaceBoundsCoarse.value =
                this.sceneCapture.surfaceBounds.coarse.texture;
            material.uniforms.sceneColor.value = this.sceneCapture.background.texture;
            material.uniforms.sceneDepth.value =
                this.sceneCapture.background.depthTexture;
            material.uniforms.sceneTransparent.value =
                this.sceneCapture.transparent.texture;
            material.uniforms.sceneTransparentDepth.value =
                this.sceneCapture.transparent.depthTexture;
            material.uniforms.sceneSurfaces.value =
                this.sceneCapture.surfaces.texture;
            material.uniforms.sceneSurfaceDepth.value =
                this.sceneCapture.surfaces.depthTexture;
            material.uniforms.sceneViewProjection.value =
                this.sceneCapture.viewProjection;
            material.uniforms.sceneSize.value = this.sceneCapture.size;
            material.uniforms.sceneDepthRange.value = this.sceneCapture.depthRange;
            material.uniforms.sceneForeground.value =
                this.sceneCapture.foreground.texture;
            sceneLensOwners.set(this.simulation, this);
        }
        else if (sceneLensOwners.get(this.simulation) === this) {
            sceneLensOwners.delete(this.simulation);
        }
        // Keep the extra traversal code out of the standalone disk program;
        // unused branches can still increase GPU register pressure.
        if (material.uniforms.lensScene.value !== enabled) {
            if (enabled)
                material.defines.SCENE_LENSING = 1;
            else
                delete material.defines.SCENE_LENSING;
            material.needsUpdate = true;
        }
        material.uniforms.lensScene.value = enabled;
        material.depthTest = !enabled;
        material.depthWrite = !enabled;
        material.blending = enabled ? THREE.NoBlending : THREE.NormalBlending;
        // A supplied sky must render before transparent objects, which may not
        // write depth. The scene-compositing pass must render after those objects.
        this.mesh.renderOrder = enabled
            ? Number.MAX_SAFE_INTEGER
            : material.uniforms.hasBackground.value
                ? -1
                : 1000;
    };
    BlackHole.prototype.assertSceneLensingAvailable = function () {
        if (!this.simulation.getContext().objects.renderer.capabilities.isWebGL2) {
            throw new Error('Black hole scene lensing requires WebGL 2');
        }
        var owner = sceneLensOwners.get(this.simulation);
        if (owner && owner !== this) {
            throw new Error('Only one black hole can lens the scene per simulation');
        }
    };
    /** Called by Simulation.removeObject; caller-owned sky textures are preserved. */
    BlackHole.prototype.removalCleanup = function () {
        var _a;
        if (this.disposed)
            return;
        this.disposed = true;
        if (sceneLensOwners.get(this.simulation) === this) {
            sceneLensOwners.delete(this.simulation);
        }
        (_a = this.sceneCapture) === null || _a === void 0 ? void 0 : _a.dispose();
        this.mesh.geometry.dispose();
        this.mesh.material.dispose();
    };
    /** Remove from the scene and release GPU resources. Safe to call repeatedly. */
    BlackHole.prototype.dispose = function () {
        this.simulation.removeObject(this);
    };
    return BlackHole;
}());
exports.BlackHole = BlackHole;
