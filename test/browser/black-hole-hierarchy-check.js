// Compare every scene-lensed GPU regression image with the original linear
// walk. Enable with ?compareHierarchy=1; no second CPU renderer is involved.
window.compareBlackHoleHierarchy = function (renderer) {
  if (!new URLSearchParams(location.search).has('compareHierarchy')) return;
  const originalRender = renderer.render;
  let rendering = false;
  window.hierarchyComparisons = 0;
  renderer.render = function (scene, camera) {
    if (rendering) return originalRender.call(this, scene, camera);
    const target = this.getRenderTarget();
    const holes = [];
    scene.traverseVisible((object) => {
      if (
        object.userData.spacekitBlackHole &&
        object.material.uniforms.lensScene.value
      )
        holes.push(object);
    });
    if (!target || holes.length === 0)
      return originalRender.call(this, scene, camera);
    rendering = true;
    const callbacks = holes.map((hole) => hole.onBeforeRender);
    try {
      originalRender.call(this, scene, camera);
      if (
        !holes.every((hole) => hole.material.uniforms.sceneDepthHierarchy.value)
      ) {
        throw new Error('Depth hierarchy unavailable; comparison did not run');
      }
      const accelerated = new Uint8Array(target.width * target.height * 4);
      const linear = new Uint8Array(accelerated.length);
      this.readRenderTargetPixels(
        target,
        0,
        0,
        target.width,
        target.height,
        accelerated,
      );
      holes.forEach((hole, index) => {
        hole.onBeforeRender = function (...args) {
          callbacks[index].apply(this, args);
          hole.material.uniforms.sceneDepthHierarchy.value = false;
        };
      });
      originalRender.call(this, scene, camera);
      this.readRenderTargetPixels(
        target,
        0,
        0,
        target.width,
        target.height,
        linear,
      );
      let changed = 0,
        maxError = 0;
      for (let i = 0; i < linear.length; i++) {
        const error = Math.abs(linear[i] - accelerated[i]);
        if (error) changed++;
        maxError = Math.max(maxError, error);
      }
      if (changed)
        throw new Error(
          `Depth hierarchy changed ${changed} channels; maximum error ${maxError}/255`,
        );
      window.hierarchyComparisons++;
    } finally {
      holes.forEach((hole, index) => {
        hole.onBeforeRender = callbacks[index];
      });
      rendering = false;
    }
  };
};
