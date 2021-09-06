import * as THREE from 'three';
/**
 * @ignore
 */
export declare const DEFAULT_TEXTURE_URL = "{{assets}}/sprites/fuzzyparticle.png";
/**
 * Returns the complete URL to a texture given a basepath and a template url.
 * @param {String} template URL containing optional template parameters
 * @param {String} basePath Base path
 * @example
 * ```
 * getFullUrl('{{assets}}/images/mysprite.png', '/path/to/assets')
 * => '/path/to/assets/images/mysprite.png'
 * ```
 */
export declare function getFullUrl(template: string, basePath: string): string;
/**
 * Returns the complete URL to a texture given a basepath and a template url.
 * @param {String} template URL containing optional template parameters
 * @param {String} basePath Base path for simulation data and assets.
 * @example
 * ```
 * getFullTextureUrl('{{assets}}/images/mysprite.png', '/path/to/assets')
 * => '/path/to/assets/images/mysprite.png'
 * ```
 */
export declare function getFullTextureUrl(template: string, basePath: string): string;
export declare function getThreeJsTexture(template: string, basePath: string): THREE.Texture;
export declare function getDefaultBasePath(): "/src/" | "https://typpo.github.io/spacekit/src";
/**
 * Performs a standard binary search on an array of values returning the index of the found item or the twos complement
 * negative of the closest value if the exact value isn't found. For example for array: [10, 20, 30]
 *   * Searching for a value of 20 would return an index of 1
 *   * Searching for a value of 12 would return a value of -2 (taking the two's complement back '~' give you 1)
 * @param {Array} data an array of values of the type consistent with the comparer method
 * @param value the value to be searched for in the data array
 * @param {Function} [comparer] a function which takes two arguments: first of same type as data row and second as same
 * time as value to compare. Default method is a numerical comparison
 * @returns {number}
 */
export declare function binarySearch(data: any[], value: any, comparer?: (a: any, b: any) => number): number;
