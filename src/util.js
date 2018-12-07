// Number of pixels per coordinate.
const COORD_TO_PIXEL_RATIO = 50;

function coordsToPixel(xyz) {
  return [
    xyz[0] * COORD_TO_PIXEL_RATIO,
    xyz[1] * COORD_TO_PIXEL_RATIO,
    xyz[2] * COORD_TO_PIXEL_RATIO,
  ];
}

DEFAULT_TEXTURE_URL = '{{assets}}/sprites/fuzzyparticle.png';

function getFullTextureUrl(template, assetPath) {
  return template.replace('{{assets}}', assetPath);
}
