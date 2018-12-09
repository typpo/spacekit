export const DEFAULT_TEXTURE_URL = '{{assets}}/sprites/fuzzyparticle.png';

export function getFullTextureUrl(template, assetPath) {
  return (template || DEFAULT_TEXTURE_URL).replace('{{assets}}', assetPath);
}
