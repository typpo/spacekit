# GPU validation and profiling

Run `pnpm build`, serve the repository with `./server.sh`, and open these pages
through the local server. Each page reports PASS/FAIL in its results panel and
logs failures to the browser console. The checks exercise the compiled renderer;
Jest's CPU tests do not compile or execute the GPU shaders.

- [WebGL 2](webgl2.html): initialization, orbital particles, and colors.
- [Black hole](black-hole.html): shadow size, occlusion, disk emission, and animation.
- [Disk sampling](black-hole-sampling.html): low/high quality against dense integration.
- [Capture colors](black-hole-color.html): dark gradients and transparent blending
  against independent sRGB values, including foreground and all background layers.
- [Frame transparency](particle-fades.html): independent linear-light references
  for overlapping particles, sprites, meshes, premultiplied materials, and custom
  shaders over black and colored surfaces, with normal/additive blending on both
  sides of the lens. Also checks the bundled halo art, MSAA coverage, clearing,
  and resize through the normal Simulation frame path.
- [Scene lensing](black-hole-scene.html): meshes, sprites, lines,
  GPU particles, resizing, and resource ownership.
- [Finite source depth](black-hole-scene-depth.html): image size
  against a finite-distance reference, plus occlusion and camera clipping.
- [Stars](black-hole-stars.html): real star-catalogue rendering.
- [Transparency](black-hole-transparency.html): ordered light
  compositing and connected sprite-depth smoothing.
- [Depth hierarchy](black-hole-hierarchy.html): 8×8 and 64×64 tile bounds for every
  captured layer against an exact CPU reduction of the captured depths, at odd
  sizes, with asymmetric frusta, and across resizes.
- [Antialiasing](black-hole-antialiasing.html): thin ribbons and a silhouette
  lensed along the Einstein ring against a 4×4 area-sampled reference of the same
  scene, per pixel and per angular sector, with one sample per pixel as the
  aliased control.

For stage timings, load `black-hole-profile.js` in the example and stop its
animation loop before calling `profileBlackHole(simulation, hole)`. It measures
capture, hierarchy generation, and the final lens shader. GPU timer queries add
overhead: measure whole-frame performance separately rather than adding stage
medians. Record the GPU/browser, drawing-buffer size, scene, quality, warm-up,
and repeated trials alongside results.
