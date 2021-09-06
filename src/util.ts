import * as THREE from 'three';

const DEFAULT_COMPARER_METHOD = (a: any, b: any) => {
  return a - b;
};
/**
 * @ignore
 */
export const DEFAULT_TEXTURE_URL = '{{assets}}/sprites/fuzzyparticle.png';

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
export function getFullUrl(template: string, basePath: string) {
  return template
    .replace('{{assets}}', `${basePath}/assets`)
    .replace('{{data}}', `${basePath}/data`);
}

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
export function getFullTextureUrl(template: string, basePath: string) {
  return getFullUrl(template || DEFAULT_TEXTURE_URL, basePath);
}

/*
 * Returns a THREE.js texture given a basepath and a template url.
 * @param {String} template URL containing optional template parameters
 * @param {String} basePath Base path for simulation data and assets.
 */
export function getThreeJsTexture(template: string, basePath: string) {
  const fullTextureUrl = getFullTextureUrl(template, basePath);
  return new THREE.TextureLoader().load(fullTextureUrl);
}

export function getDefaultBasePath() {
  return window.location.href.indexOf('localhost') > -1
    ? '/src/'
    : 'https://typpo.github.io/spacekit/src';
}

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
export function binarySearch(
  data: any[],
  value: any,
  comparer = DEFAULT_COMPARER_METHOD,
) {
  if (data === undefined) {
    throw 'data object is undefined';
  }

  if (!Array.isArray(data)) {
    throw 'data object must be an array';
  }

  if (value === undefined) {
    throw 'value object must be defined';
  }

  if (comparer === undefined) {
    throw 'comparer must be defined';
  }

  let left = 0;
  let right = data.length;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (middle === data.length) {
      return middle;
    }
    let comparisonCalc = comparer(data[middle], value);
    if (comparisonCalc < 0) {
      left = middle + 1;
    } else if (comparisonCalc > 0) {
      right = middle - 1;
    } else {
      return middle;
    }
  }

  return ~left;
}
