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
exports.binarySearch = exports.getDefaultBasePath = exports.getThreeJsTexture = exports.getFullTextureUrl = exports.getFullUrl = exports.DEFAULT_TEXTURE_URL = void 0;
var THREE = __importStar(require("three"));
var DEFAULT_COMPARER_METHOD = function (a, b) {
    return a - b;
};
/**
 * @ignore
 */
exports.DEFAULT_TEXTURE_URL = '{{assets}}/sprites/fuzzyparticle.png';
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
function getFullUrl(template, basePath) {
    return template
        .replace('{{assets}}', "".concat(basePath, "/assets"))
        .replace('{{data}}', "".concat(basePath, "/data"));
}
exports.getFullUrl = getFullUrl;
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
function getFullTextureUrl(template, basePath) {
    return getFullUrl(template || exports.DEFAULT_TEXTURE_URL, basePath);
}
exports.getFullTextureUrl = getFullTextureUrl;
/*
 * Returns a THREE.js texture given a basepath and a template url.
 * @param {String} template URL containing optional template parameters
 * @param {String} basePath Base path for simulation data and assets.
 */
function getThreeJsTexture(template, basePath) {
    var fullTextureUrl = getFullTextureUrl(template, basePath);
    return new THREE.TextureLoader().load(fullTextureUrl);
}
exports.getThreeJsTexture = getThreeJsTexture;
function getDefaultBasePath() {
    return window.location.href.indexOf('localhost') > -1
        ? '/src/'
        : 'https://typpo.github.io/spacekit/src';
}
exports.getDefaultBasePath = getDefaultBasePath;
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
function binarySearch(data, value, comparer) {
    if (comparer === void 0) { comparer = DEFAULT_COMPARER_METHOD; }
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
    var left = 0;
    var right = data.length;
    while (left <= right) {
        var middle = Math.floor((left + right) / 2);
        if (middle === data.length) {
            return middle;
        }
        var comparisonCalc = comparer(data[middle], value);
        if (comparisonCalc < 0) {
            left = middle + 1;
        }
        else if (comparisonCalc > 0) {
            right = middle - 1;
        }
        else {
            return middle;
        }
    }
    return ~left;
}
exports.binarySearch = binarySearch;
