/**
 * @ignore
 */
export const DEFAULT_TEXTURE_URL = '{{assets}}/sprites/fuzzyparticle.png';

/**
 * Returns the complete URL to a texture given a basepath and a template url.
 * @param {String} template URL containing optional template parameters
 * @param {String} assetPath Base path for assets.
 * @example
 * getFullTextureUrl('{{assets}}/images/mysprite.png', '/path/to/assets')
 * => '/path/to/assets/images/mysprite.png'
 */
export function getFullTextureUrl(template, assetPath) {
  return (template || DEFAULT_TEXTURE_URL).replace('{{assets}}', assetPath);
}
