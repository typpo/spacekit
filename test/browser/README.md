# GPU validation and profiling

Run `pnpm build`, serve the repository with `./server.sh`, and open these pages
through the local server. Each page reports PASS/FAIL in its results panel and
logs failures to the browser console. The checks exercise the compiled renderer;
Jest's CPU tests do not compile or execute the GPU shaders.

- [WebGL 2](webgl2.html): initialization, orbital particles, colors, and bloom.
- [Black hole](black-hole.html): shadow size, occlusion, disk emission, and animation.
- [Disk sampling](black-hole-sampling.html): low/high quality against dense integration.
- [Capture colors](black-hole-color.html): dark gradients and transparent blending
  against independent sRGB values, including foreground and all background layers.
- [Particle fades](particle-fades.html): authored halo brightness on the canvas,
  through the foreground lens pass, and in particle and sky captures.
- [Scene lensing](black-hole-scene.html?compareHierarchy=1): meshes, sprites, lines,
  GPU particles, resizing, and resource ownership.
- [Finite source depth](black-hole-scene-depth.html?compareHierarchy=1): image size
  against a finite-distance reference, plus occlusion and camera clipping.
- [Stars](black-hole-stars.html?compareHierarchy=1): real star-catalogue rendering.
- [Transparency](black-hole-transparency.html?compareHierarchy=1): ordered light
  compositing and connected sprite-depth smoothing.
- [Depth hierarchy](black-hole-hierarchy.html?compareHierarchy=1): odd sizes,
  asymmetric frusta, resizing, and the float-target capability fallback.

`?compareHierarchy=1` compares each scene-lensed image byte for byte with tile
skipping disabled. This checks the acceleration's sample-preservation invariant;
the independent color, geometric, and compositing checks catch errors shared by
both traversals. The comparison helper is test-only and is not in the runtime bundle.
Comparisons require `EXT_color_buffer_float`; ordinary scene lensing also works
without it. The hierarchy page forces that capability off to check the fallback.

For stage timings, load `black-hole-profile.js` in the example and stop its
animation loop before calling `profileBlackHole(simulation, hole)`. It measures
capture, hierarchy generation, and the final lens shader. GPU timer queries add
overhead: measure whole-frame performance separately rather than adding stage
medians. Record the GPU/browser, drawing-buffer size, scene, quality, warm-up,
and repeated trials alongside results.
