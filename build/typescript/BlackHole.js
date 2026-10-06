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
exports.BlackHole = void 0;
var THREE = __importStar(require("three"));
var BlackHolePhysics_1 = require("./BlackHolePhysics");
var Scale_1 = require("./Scale");
var shaders_1 = require("./shaders");
/**
 * A non-rotating (Schwarzschild) black hole.
 *
 * The black hole is rendered by tracing light rays backward from the camera
 * along null geodesics of the Schwarzschild metric. This produces the black
 * hole's shadow, the photon ring, and gravitational lensing of everything
 * behind it, including Einstein rings and secondary images.
 *
 * It can optionally be surrounded by a thin, optically thick accretion disk
 * whose temperature follows the general relativistic Novikov-Thorne profile.
 * Disk light is shifted by gravitational redshift and relativistic Doppler
 * beaming, so the approaching side of the disk looks brighter and bluer.
 *
 * @example
 * ```
 * const blackHole = viz.createBlackHole({
 *   position: [0, 0, 0],
 *   mass: 4.3e6,
 *   diskNormal: [0, 0.2, 1],
 * });
 * ```
 */
var BlackHole = /** @class */ (function () {
    /**
     * @param {String} id Unique id of this object
     * @param {BlackHoleOptions} options Options
     * @param {Simulation} simulation Simulation object
     */
    function BlackHole(id, options, simulation) {
        var _this = this;
        this.id = id;
        this.options = options || {};
        this.simulation = simulation;
        this.context = simulation.getContext();
        this.position = new THREE.Vector3();
        this.lensRadius = this.options.lensRadius || 60;
        this.schwarzschildRadiusScene = (0, Scale_1.rescaleNumber)(this.getSchwarzschildRadius());
        this.frameCount = 0;
        this.needsEnvironmentRefresh = true;
        this.lastFrameTime = Date.now();
        this.lastJd = simulation.getJd();
        var normal = new THREE.Vector3()
            .fromArray(this.options.diskNormal || [0, 0, 1])
            .normalize();
        this.localFrame = new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal));
        this.localFrameInverse = this.localFrame.clone().invert();
        var envOptions = this.options.environmentMap || {};
        this.cubeRenderTarget = new THREE.WebGLCubeRenderTarget(envOptions.resolution || this.getDefaultEnvironmentResolution(), {
            generateMipmaps: true,
            minFilter: THREE.LinearMipmapLinearFilter
        });
        // Only capture what lies outside of the lensing region, since anything
        // inside it is drawn normally. The far plane must reach the skybox and
        // star field, which sit at 1e9-1e10 units.
        this.cubeCamera = new THREE.CubeCamera(this.lensRadius * this.schwarzschildRadiusScene, 1e11, this.cubeRenderTarget);
        this.material = this.createMaterial();
        this.mesh = new THREE.Mesh(new THREE.SphereBufferGeometry(this.lensRadius * this.schwarzschildRadiusScene, 64, 32), this.material);
        this.mesh.onBeforeRender = function (_renderer, _scene, camera) {
            _this.updateCameraUniforms(camera);
        };
        this.setPosition(this.options.position || [0, 0, 0]);
        this.simulation.addObject(this);
    }
    /**
     * Pick a cube map resolution whose pixels subtend about the same angle as
     * the screen's, so that lensed stars and sprites look like unlensed ones.
     * @private
     */
    BlackHole.prototype.getDefaultEnvironmentResolution = function () {
        var camera = this.context.objects.camera.get3jsCamera();
        var renderer = this.context.objects.renderer;
        var screenPixels = this.context.container.height * renderer.getPixelRatio();
        // Each cube face spans 90 degrees.
        var ideal = (90 / camera.fov) * screenPixels;
        var pow2 = Math.pow(2, Math.round(Math.log2(Math.max(ideal, 1))));
        return Math.min(Math.max(pow2, 256), 1024, renderer.capabilities.maxCubemapSize);
    };
    /**
     * @private
     */
    BlackHole.prototype.createMaterial = function () {
        var _a, _b, _c, _d;
        var disk = this.options.accretionDisk || {};
        var peakTemperature = disk.peakTemperature ||
            (0, BlackHolePhysics_1.diskPeakTemperature)(this.getMass(), (_a = disk.eddingtonRatio) !== null && _a !== void 0 ? _a : 0.1);
        var outerRadius = disk.outerRadius || 15;
        if (outerRadius >= this.lensRadius) {
            console.warn('Black hole accretion disk extends past lensRadius and will be clipped.');
        }
        return new THREE.ShaderMaterial({
            uniforms: {
                envMap: { value: this.cubeRenderTarget.texture },
                cameraLocal: { value: new THREE.Vector3() },
                viewToLocal: { value: new THREE.Matrix3() },
                localToWorld: {
                    value: new THREE.Matrix3().setFromMatrix4(this.localFrame)
                },
                lensRadius: { value: this.lensRadius },
                lensFalloffStart: { value: (_b = this.options.lensFalloffStart) !== null && _b !== void 0 ? _b : 0.5 },
                diskEnabled: { value: disk.enable !== false },
                diskInnerRadius: { value: disk.innerRadius || BlackHolePhysics_1.ISCO_RADIUS },
                diskOuterRadius: { value: outerRadius },
                diskPeakTemperature: { value: peakTemperature },
                diskFluxMax: { value: (0, BlackHolePhysics_1.novikovThorneFluxPeak)(outerRadius).flux },
                diskExposure: { value: (_c = disk.exposure) !== null && _c !== void 0 ? _c : 0.8 },
                diskTurbulence: { value: (_d = disk.turbulence) !== null && _d !== void 0 ? _d : 0.6 },
                diskTime: { value: 0 }
            },
            vertexShader: shaders_1.BLACK_HOLE_SHADER_VERTEX,
            fragmentShader: shaders_1.BLACK_HOLE_SHADER_FRAGMENT,
            side: THREE.BackSide
        });
    };
    /**
     * Update the uniforms that depend on the camera used to render the scene.
     * @private
     */
    BlackHole.prototype.updateCameraUniforms = function (camera) {
        var uniforms = this.material.uniforms;
        // Done in double precision on the CPU so the shader only sees small,
        // well-conditioned numbers.
        var cameraPos = new THREE.Vector3().setFromMatrixPosition(camera.matrixWorld);
        uniforms.cameraLocal.value
            .copy(cameraPos)
            .sub(this.position)
            .applyMatrix4(this.localFrameInverse)
            .divideScalar(this.schwarzschildRadiusScene);
        var cameraRotation = new THREE.Matrix4().extractRotation(camera.matrixWorld);
        uniforms.viewToLocal.value.setFromMatrix4(this.localFrameInverse.clone().multiply(cameraRotation));
    };
    /**
     * Called by the simulation right before each frame is drawn.
     */
    BlackHole.prototype.beforeRender = function () {
        var _a, _b, _c;
        // Advance disk rotation while the simulation is running.
        var now = Date.now();
        var jd = this.simulation.getJd();
        if (jd !== this.lastJd) {
            var period = ((_a = this.options.accretionDisk) === null || _a === void 0 ? void 0 : _a.rotationPeriod) || 8;
            this.material.uniforms.diskTime.value =
                (this.material.uniforms.diskTime.value +
                    (now - this.lastFrameTime) / 1000 / period) %
                    1000;
            this.lastJd = jd;
        }
        this.lastFrameTime = now;
        var interval = (_c = (_b = this.options.environmentMap) === null || _b === void 0 ? void 0 : _b.updateInterval) !== null && _c !== void 0 ? _c : 1;
        this.frameCount++;
        if (this.needsEnvironmentRefresh ||
            (interval > 0 && this.frameCount % interval === 0)) {
            this.refreshEnvironment();
        }
    };
    /**
     * Re-render the surroundings of the black hole that are seen through its
     * gravitational lens.
     */
    BlackHole.prototype.refreshEnvironment = function () {
        var renderer = this.context.objects.renderer;
        var scene = this.context.objects.scene;
        this.mesh.visible = false;
        this.cubeCamera.position.copy(this.position);
        this.cubeCamera.updateMatrixWorld();
        this.cubeCamera.update(renderer, scene);
        this.mesh.visible = true;
        this.needsEnvironmentRefresh = false;
    };
    /**
     * Move the black hole.
     * @param {Array.<Number>} pos Position in AU
     */
    BlackHole.prototype.setPosition = function (pos) {
        var rescaled = (0, Scale_1.rescaleArray)(pos);
        this.position.set(rescaled[0], rescaled[1], rescaled[2]);
        this.mesh.position.copy(this.position);
        this.mesh.updateMatrixWorld();
        this.needsEnvironmentRefresh = true;
    };
    /**
     * Get the position of the black hole, in scene units.
     * @return {THREE.Vector3} Position
     */
    BlackHole.prototype.getPosition = function () {
        return this.position.clone();
    };
    /**
     * @return {Number} Mass in solar masses
     */
    BlackHole.prototype.getMass = function () {
        return this.options.mass || 4.3e6;
    };
    /**
     * Standard gravitational parameter of the black hole, for use as the `GM`
     * of an `Ephem` orbiting it.
     * @return {Number} GM in m^3/s^2
     */
    BlackHole.prototype.getGM = function () {
        return this.getMass() * BlackHolePhysics_1.GM_SUN_KM3_S2 * 1e9;
    };
    /**
     * @return {Number} Schwarzschild radius (event horizon radius) in AU
     */
    BlackHole.prototype.getSchwarzschildRadius = function () {
        return (this.options.schwarzschildRadius || (0, BlackHolePhysics_1.schwarzschildRadiusAu)(this.getMass()));
    };
    /**
     * Get the unique ID of this object.
     * @return {String} id
     */
    BlackHole.prototype.getId = function () {
        return this.id;
    };
    /**
     * A list of THREE.js objects that are used to compose the black hole.
     * @return {THREE.Object3D[]} Objects
     */
    BlackHole.prototype.get3jsObjects = function () {
        return [this.mesh];
    };
    BlackHole.prototype.update = function () {
        // The black hole is static. Its lensed surroundings are refreshed in
        // beforeRender.
    };
    /**
     * Release GPU resources.
     */
    BlackHole.prototype.removalCleanup = function () {
        this.mesh.geometry.dispose();
        this.material.dispose();
        this.cubeRenderTarget.dispose();
    };
    return BlackHole;
}());
exports.BlackHole = BlackHole;
