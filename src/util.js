/**
 * @ignore
 */
export const DEFAULT_TEXTURE_URL = '{{assets}}/sprites/fuzzyparticle.png';

/**
 * Returns the complete URL to a texture given a basepath and a template url.
 * @param {String} template URL containing optional template parameters
 * @param {String} basePath Base path for simulation data and assets.
 * @example
 * getFullTextureUrl('{{assets}}/images/mysprite.png', '/path/to/assets')
 * => '/path/to/assets/images/mysprite.png'
 */
export function getFullTextureUrl(template, basePath) {
  return getFullUrl(template || DEFAULT_TEXTURE_URL, basePath);
}

/**
 * Returns the complete URL to a texture given a basepath and a template url.
 * @param {String} template URL containing optional template parameters
 * @param {String} basePath Base path
 * @example
 * getFullUrl('{{assets}}/images/mysprite.png', '/path/to/assets')
 * => '/path/to/assets/images/mysprite.png'
 */
export function getFullUrl(template, basePath) {
  return template.replace('{{assets}}', `${basePath}/assets`)
    .replace('{{data}}', `${basePath}/data`);
}
