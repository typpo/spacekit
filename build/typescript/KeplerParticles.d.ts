import * as THREE from 'three';
import { Coordinate3d } from './Coordinates';
import type { Ephem } from './Ephem';
import type { Simulation } from './Simulation';
interface BaseKeplerParticleOptions {
    color?: number;
    textureUrl?: string;
    basePath?: string;
    jd?: number;
    maxNumParticles?: number;
}
declare type KeplerParticlesOptions = BaseKeplerParticleOptions & {
    defaultSize?: number;
};
declare type KeplerParticleOptions = BaseKeplerParticleOptions & {
    particleSize?: number;
};
/**
 * An efficient way to render many objects in space with Kepler orbits.
 * Primarily used by Simulation to render all non-static objects.
 * @see Simulation
 */
export declare class KeplerParticles {
    static instanceCount: number;
    private id;
    private options;
    private simulation;
    private context;
    private addedToScene;
    private particleCount;
    private elements;
    private uniforms;
    private geometry;
    private shaderMaterial;
    private particleSystem;
    private attributes;
    /**
     * @param {Object} options Options container
     * @param {Object} options.textureUrl Template url for sprite
     * @param {Object} options.basePath Base path for simulation supporting files
     * @param {Number} options.jd JD date value
     * @param {Number} options.maxNumParticles Maximum number of particles to display. Defaults to 4096
     * @param {Number} options.defaultSize Default size of particles. Note this
     * can be overriden by SpaceObject particleSize. Defaults to 25
     * @param {Object} contextOrSimulation Simulation context or object
     */
    constructor(options: KeplerParticlesOptions, contextOrSimulation: Simulation);
    /**
     * Add a particle to this particle system.
     * @param {Ephem} ephem Kepler ephemeris
     * @param {Object} options Options container
     * @param {Number} options.particleSize Size of particles
     * @param {Number} options.color Color of particles
     * @return {Number} The index of this article in the attribute list.
     */
    addParticle(ephem: Ephem, options?: KeplerParticleOptions): number;
    /**
     * Hides the particle at the given offset so it is no longer drawn. The particle still takes up space in the array
     * though.
     * @param offset
     */
    hideParticle(offset: number): void;
    /**
     * Changes the size of the particle at the given offset to the given size. Setting the size to 0 hides the particle.
     * @param {Number} size The new size of this particle
     * @param {Number} offset The location of this particle in the attributes * array
     */
    setParticleSize(size: number, offset: number): void;
    /**
     * Changes the color of the particle at the given offset to the given color.
     * @param {Number} colorValue The new color of this particle (e.g. hex number)
     * @param {Number} offset The location of this particle in the attributes * array
     */
    setParticleColor(colorValue: number, offset: number): void;
    /**
     * Change the `origin` attribute of a particle.
     * @param {Number} offset The location of this particle in the attributes * array.
     * @param {Array.<Number>} newOrigin The new XYZ coordinates of the body that this particle orbits.
     */
    setParticleOrigin(offset: number, newOrigin: Coordinate3d): void;
    /**
     * Update the position for all particles
     * @param {Number} jd JD date
     */
    update(jd: number): void;
    /**
     * Get THREE.js objects that comprise this point cloud
     * @return {Array.<THREE.Object3D>} List of objects to add to THREE.js scene
     */
    get3jsObjects(): THREE.Object3D[];
    /**
     * Get unique id for this object.
     * @return {String} Unique id
     */
    getId(): string;
}
export {};
