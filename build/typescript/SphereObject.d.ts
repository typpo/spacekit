import { RotatingObject } from './RotatingObject';
import type { Simulation } from './Simulation';
import type { SpaceObjectOptions } from './SpaceObject';
/**
 * Simulates a planet or other object as a perfect sphere.
 */
export declare class SphereObject extends RotatingObject {
    /**
     * @param {String} options.textureUrl Path to basic texture (optional)
     * @param {String} options.bumpMapUrl Path to bump map (optional)
     * @param {String} options.specularMapUrl Path to specular map (optional)
     * @param {Number} options.color Hex color of the sphere
     * @param {Number} options.axialTilt Axial tilt in degrees
     * @param {Number} options.radius Radius of sphere. Defaults to 1
     * @param {Object} options.levelsOfDetail List of {threshold: x, segments:
     * y}, where `threshold` is radii distance and `segments` is the number
     * number of sphere faces to render.
     * @param {Object} options.atmosphere Atmosphere options
     * @param {Object} options.atmosphere.enable Show atmosphere
     * @param {Object} options.atmosphere.color Atmosphere color
     * @param {Object} options.atmosphere.innerSizeRatio Size ratio of the inner
     * atmosphere to the radius of the sphere. Defaults to 0.025
     * @param {Object} options.atmosphere.outerSizeRatio Size ratio of the outer
     * atmosphere to the radius of the sphere. Defaults to 0.15
     * @param {Object} options.debug Debug options
     * @param {boolean} options.debug.showAxes Show axes
     * @see SpaceObject
     * @see RotatingObject
     */
    constructor(id: string, options: SpaceObjectOptions, simulation: Simulation);
    init(): boolean;
    /**
     * @private
     */
    private getScaledRadius;
    /**
     * @private
     * Model the atmosphere as two layers - a thick inner layer and a diffuse
     * outer one.
     */
    private renderFullAtmosphere;
    /**
     * @private
     * @param {Number} radius Radius of object
     * @param {Number} size Size of atmosphere
     * @param {Number} coefficient Coefficient value
     * @param {Number} power Power value
     * @param {THREE.Color} colorObj Color of atmosphere
     */
    private renderAtmosphereComponent;
    /**
     * Add rings around this object.
     * @param {Number} innerRadiusKm Inner radius of ring.
     * @param {Number} outerRadiusKm Outer radius of ring.
     * @param {String} texturePath Full path to 1xN ring texture. (each pixel
     * represents the color of a full circle within the ring)
     * @param {Number} segments  Number of segments to use to render ring.
     * (optional)
     */
    addRings(innerRadiusKm: number, outerRadiusKm: number, texturePath: string, segments?: number): void;
}
