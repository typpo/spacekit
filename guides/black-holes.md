# Black holes

```js
const hole = sim.createBlackHole('galactic-center', {
  massSolar: 4e6,
  position: [0, 0, 0], // AU, like other Spacekit objects
  lensScene: true, // distort scene meshes, sprites, lines and particles
  quality: 'low', // faster rendering; default is 'high'
  accretionDisk: {
    outerRadius: 30, // in Schwarzschild radii, not AU
    temperature: 7500, // Kelvin
    rotationSpeed: 200, // artistic animation; use 1 for physical time
  },
});
```

Only `massSolar` is required. Omitting `accretionDisk` creates the default disk; `accretionDisk: false` starts with it hidden. `lensScene` defaults to false. TypeScript exports `BlackHoleOptions`, `AccretionDiskOptions`, and `BlackHoleRadii` from the main package.

The runtime controls are:

```js
hole.setPosition([1, 0, 0]);
hole.setRotationSpeed(20); // disk animation multiplier, not black-hole spin
hole.setDiskOuterRadius(100); // in Schwarzschild radii
hole.setDiskAspectRatio(0.025);
hole.setDiskEnabled(false); // hide/show without resetting the animation
hole.setSceneLensingEnabled(false); // retains the sky/disk and ordinary objects
const radii = hole.getPhysicalRadii(); // eventHorizonAu, photonSphereAu,
                                     // iscoAu, shadowImpactParameterAu
hole.dispose(); // equivalent to sim.removeObject(hole)
```

Other options (mass, disk normal, inner radius, temperature, optical depth, turbulence, exposure, quality, and background texture) are set at construction. The simulation advances the object automatically; callers do not need to call `update()` or adjust its Three.js render order. Disposal releases owned GPU resources but does not dispose a caller-supplied `backgroundTexture`.

Run the [interactive example](../examples/black-hole/index.html) after building. A 4-million-solar-mass black hole has a horizon radius of about 0.079 AU; a useful initial camera position is `[0, -3.3, 0.7]` AU. A stellar-mass black hole is far smaller: adjust the camera near/far planes through `sim.getViewer().get3jsCamera()` when viewing one up close. `unitsPerAu` scales the object but does not change its physical size.

`exposure` controls display brightness and defaults to 1. The optional `backgroundTexture` accepts a caller-owned `THREE.Texture`: an equirectangular sky with `texture.colorSpace = THREE.SRGBColorSpace` for display RGB images, with north at +Z, longitude zero (+X) at the center, increasing toward +Y. It replaces the sky with the lensed texture. Use it on only one black hole in a scene, without an additional Skybox or Stars layer. Without either a background texture or scene lensing, escaping rays leave the scene untouched. Dispose the texture yourself when no longer needed.

With `lensScene: true`, objects behind the black hole are distorted automatically, including orbit lines, the additive Sun sprite, GPU particles, and ordinary Three.js spheres or other meshes added through `sim.getScene().add(mesh)`. The renderer captures the two sides of a plane through the hole, perpendicular to the camera, retaining the objects' shaders, texture alpha and blending. Copied cameras clip each side without rewriting object shaders. The outgoing geodesic's direction and offset define a line through captured depth, so the source's distance determines its apparent position. Opaque surfaces and transparent light are sampled separately, then the renderer adds the disk and composites the foreground. Additive black padding contributes neither coverage nor depth. Objects in front remain visible, and transparent foregrounds do not carry an undistorted copy of the background. HTML labels are overlays and continue to mark the objects' true positions. Only one scene-lensing black hole may be enabled per simulation; turn it off with `setSceneLensingEnabled(false)` before enabling another.

The [example](../examples/black-hole/) has three scenes: **Simple**, the standalone object described above; **Meteor shower**, about 10,000 GPU-propagated Perseid meteoroids passing behind a 4-million-solar-mass hole; and **Saturn**, Saturn, its rings and moons seen through a 10,000-solar-mass hole between the orbits of Rhea and Titan. The last two use `lensScene`; toggle **Lens scene** to compare. The holes bend light but do not perturb the Kepler orbits. These scenes use low ray-tracing quality and compensate disk animation speed for their accelerated clocks.

Catalogue `Stars` and the `Skybox` are treated as infinitely distant sky. Their background color is sampled along the escaped ray's direction without a finite-depth test, preventing depth precision loss from making them flash during camera movement. They remain behind scene geometry and out of the foreground capture. Other objects can opt in by setting `userData.spacekitBackground = true` and not writing depth.

## Physical model

The isolated mass is stationary, uncharged, and non-rotating (Schwarzschild). The horizon radius is `rs = 2 GM / c²`, using the IAU nominal solar GM of `1.3271244e20 m³/s²`. The photon sphere is at `1.5 rs`, the innermost stable circular orbit (ISCO) at `3 rs`, and the asymptotic shadow impact parameter at `3 sqrt(3) rs / 2`. The shadow is consequently larger than the event horizon.

In each ray's orbital plane, `u = rs/r` satisfies `u'' = 1.5 u² - u`, with primes denoting azimuthal derivatives. A fourth-order Runge–Kutta integrator traces backward from a static observer's local orthonormal frame. For observer radius `ro` and local ray angle `alpha` from the outward radial direction, `b = ro sin(alpha) / sqrt(1 - 1/ro)`, `u = 1/ro`, and `u' = -cos(alpha)/b`. Along these curved paths, the renderer integrates emission and absorption through a three-dimensional gas volume. Step lengths shrink to resolve the vertical density profile. Exactly radial rays use a separate radial integrator because their orbital-plane azimuth is undefined. Captured rays terminate on a black horizon, retaining any foreground emission; escaped rays sample the optional sky at the outgoing asymptote. This produces lensing and secondary disk images without a painted shadow or ring.

The optional gas disk begins at or outside the ISCO, measured in cylindrical radius R. Its mean temperature follows the **Newtonian zero-torque thin-disk approximation**, `T⁴ ∝ r⁻³ [1 - sqrt(rin/r)]`, normalized to the chosen maximum mean midplane temperature (default 6500 K). It is not a relativistic fluid simulation or a full Novikov–Thorne disk. The prescribed rotation uses `Omega = 1/sqrt(2 R³)` in units `rs = c = 1`. Writing `r = sqrt(R² + z²)` and `f = 1 - 1/r`, gravitational and orbital Doppler shifts use `g = sqrt(f - Omega² R²) / [sqrt(1 - 1/ro) (1 + Omega b_z)]`, with backward-ray angular momentum `b_z`. This reduces to the circular-geodesic result in the midplane. Above it, rotation describes a supported atmosphere rather than freely orbiting test particles. Applying the Planck spectrum at `g T` accounts for the `I_nu/nu³` invariant. RGB uses three representative wavelengths and a display exposure curve rather than a calibrated spectral response.

The vertical profile is a prescribed **n = 3 polytropic atmosphere**. With `H = aspectRatio * R` and `q = 1 - z²/(9H²)`, density is proportional to `35 q³ / (96H)` and temperature to `q` inside `|z| < 3H`; both vanish at the surface. The density column integrates to one, and its root-mean-square height is H. This cools the dilute upper layers instead of making them radiate at the midplane temperature. `aspectRatio` defaults to 0.025 and accepts 0.02–0.3. H is a density scale height, not the full thickness. The example includes Thin (0.025, the default), Moderate (0.06), and Thick (0.12) controls. **The scale height, midplane temperature, and vertical structure are prescribed inputs, not a self-consistent solution for fluid dynamics or radiative equilibrium.**

`opticalDepth` (default 2) normalizes the smooth vertical density column. At each volume sample, the absorption coefficient includes the polytropic density profile, turbulent density, and outer radial taper. The proper static-frame path length follows `dl² = dr²/f + r² dphi²`, and converts to the gas frame as `dl_gas = dl sqrt(f) / (g sqrt(1 - 1/ro))`. Each segment contributes `B(gT) [1 - exp(-extinction * dl_gas)]`, attenuated by the transmission accumulated along the preceding ray. No disk-plane intersection or grazing-angle opacity clamp is used. This accounts for self-absorption and foreground gas covering part of the shadow. Without a supplied sky texture, compositing with the ordinary scene uses alpha blending, so tone mapping mixed scene light is approximate.

Procedural orbital lanes and knots modulate the local density and temperature. The pattern is coherent through each vertical column rather than independent three-dimensional cloud noise. `turbulence` controls their contrast from 0 (a smooth disk) to 1; the default is 0.65. They rotate at the circular orbital rate, with phase controlled by Julian dates, including pause and backward scrubbing. These structures are illustrative and do not solve fluid or magnetic dynamics. Successive patterns crossfade over half an inner-edge orbital period, with each pattern advected at the local circular rate during its lifetime. This prescribed turnover prevents indefinite winding into subpixel rings during accelerated playback; it is not a turbulence simulation. Very small structures can still alias without beam filtering. The example lenses ESO's GigaGalaxy photograph of the Milky Way, mirrored into the shader's sky convention so scene +X points at the galactic center and +Z at the north galactic pole, and starts looking from the Sun's side toward the galactic center. The photograph is the sky as seen from Earth, so its foreground stars are lensed as if they lay beyond the hole, and its brightness relative to the disk is a display choice. The example starts with an outer radius of 30 rs, a 7500 K maximum midplane temperature, and 200× artistic rotation. Its scene clock runs at real time. The controls offer rotation at 1×, 20×, 200×, or 1000× and outer radii of 12, 30, or 100 rs. Changing the radius fits the full disk while preserving the viewing angle; the Fit full disk button restores this framing after zooming. Cooler surface layers and outer gas can be too faint to see even though they are inside the frame. Temperature and exposure remain explicit display/model choices: the disk's visible color is not a prediction for a particular observed black hole.

`accretionDisk.rotationSpeed` is a nonnegative multiplier for the evolving gas pattern (default 1; 0 freezes it). It multiplies elapsed simulation time, so a scene clock running at 20× and a rotation speed of 10 produce 200× apparent motion. It preserves differential rotation and does not change gravitational lensing, orbital Doppler shifts, or physical radii. `setRotationSpeed()` anchors the new rate at the current simulation Julian date to avoid a phase jump. Scrubbing remains deterministic within the current rate segment; historical speed changes are not recorded as an animation timeline. Disk size, thickness, and visibility can change without replacing the object or resetting its pattern.

`outerRadius` defines a chosen gas boundary, not a size predicted from black-hole mass. The library keeps its compact default of 12 rs; the wider example shows how to extend it. At four million solar masses, 30 rs is approximately 2.37 AU and 100 rs approximately 7.90 AU. These are bounded examples of the emitting region, not a claim to encompass every real accretion disk. The temperature profile still cools outward, so enlarging the disk does not make its entire area equally bright.

## Limits and performance

- This simulates light around a Schwarzschild mass. It does not exert forces on other Spacekit objects, change their Kepler ephemerides, model Kerr spin, jets, magnetic fields, mergers, or gravitational waves.
- The observer is static at each frame. Camera motion does not add velocity aberration. Keep the camera outside the horizon; inside it the view becomes black. Disk emission is evaluated at the current simulation time, without light travel time delays.
- Scene lensing is a **screen-space approximation**, for perspective cameras. It intersects the outgoing asymptote with captured scene depth, accounting for finite source distance; it does not trace the curved ray against meshes. Objects close to the hole, geometry hidden behind other surfaces in a capture, and geometry outside the camera image remain approximate or unavailable. Missing samples use the sky or clear color. The split at the hole's camera depth is also approximate, especially for objects intersecting the disk. Without scene lensing, compositing uses the existing depth buffer and an apparent Euclidean distance for disk/shadow pixels. Multiple holes' metrics and lensing are not combined.
- Scene lensing retains color/depth targets for opaque background, transparent meshes, and particles/sprites/lines, plus a 4-sample multisampled color target that holds the foreground and a single-sample scratch target. The mesh target grows to full resolution only when needed. Opaque geometry, the foreground, and transparent meshes and lines render their color multisampled, so edges keep the same coverage levels as the main frame; depth comes from a separate single-sample pass, because WebGL 2 resolves multisampled depth in an implementation-defined way. Edge pixels that only partial samples cover take the depth of the nearest adjacent surface. Points and sprites, whose shapes come from texture alpha, render single-sampled. Each transparent renderable is captured in two passes: color with its own depth settings, then depth alone with depth writes on. Within each layer, nearer pixels blend over existing light and farther pixels blend underneath its remaining transparency. Keeping meshes and particles at separate depths prevents a faint moon sprite from moving Saturn's rings to the moon's distance and cutting a dark halo into them. The lens composites the opaque, mesh and particle layers in depth order, each inserting the light gathered so far at its nearest distance.
- Transparent captures remain approximate: each layer stores only the nearest contributing depth per pixel. Overlapping particles within a batch, or multiple overlapping transparent meshes, share that captured depth. A third surface cannot be inserted between two already-combined surfaces. Capturing color without forced depth writes keeps transparent sprite corners from hiding other particles in the same draw. Normal and additive blending are supported, including GPU Kepler particles and custom shaders; other custom blending equations are not reproduced by the final composite. Custom render callbacks run for the additional captures. Targets are reused and disposed with the hole, and caller materials are restored even if a capture throws.
- WebGL 2 and high precision fragment floats are required. Depth textures and `gl_FragDepth` are core features; neither requires a WebGL 1 extension. Unsupported renderers throw before adding anything to the scene. Camera matrices update on every render, including while paused and after resizing.
- Each hole draws a full-screen ray-tracing pass. Scene lensing adds depth lookups along each projected outgoing line, one texel column at a time (up to 1024 per layer; longer lines sample every second or third column), plus the captures above. Cost grows with resolution, transparent-object count, and projected deflection. Each multisampled capture pass costs roughly 0.4–0.6 ms at 2560×1440 on an Apple M4 Max, and the multisampled target adds about 36 bytes per pixel (133 MB at 2560×1440). High quality allows 1024 steps of at most 0.02 radians; low allows 768 at 0.04. In the gas region, proper spatial steps are additionally limited to half a scale height and 2.5% (high) or 5% (low) of spherical radius; near the midplane this resolves the cylindrical scale height. Volume transfer uses composite midpoint quadrature with four gas samples per ray segment at high quality and two at low quality. These additional samples resolve density lanes that can otherwise alias into crosshatching even when the light path itself is accurate. Multiple samples through the atmosphere cost more than a zero-thickness disk. Without a background, rays missing the emitting region are skipped. Near-critical rays exhausting the budget become dark; arbitrarily high-order photon images are not resolved. Lower canvas resolution or choose low quality on slower GPUs.
- The lensed image is reconstructed from the captures with linear filtering, not by picking one captured texel per pixel. Along each projected line, the two texels straddling it in every column are interpolated across the line; between columns, each captured surface is intersected where the ray passes its depth, interpolated linearly for continuous surfaces, and its color is interpolated at that point. Texels belong to one continuous surface when their depths differ by less than four ray steps, or by less than a surface up to about 87° from the line of sight changes between neighbors. Edges and thin lines therefore receive fractional coverage rather than a hit or a miss. An opaque surface's coverage excludes texels hidden by nearer surfaces, so it continues smoothly behind them, and the march continues past partial coverage to light behind it. Infinitely distant sky is interpolated only among texels without finite depth, so geometry never leaks into it.
- Rays from radially adjacent pixels bend in one plane through the camera, so they share one projected line. Screen-space derivatives of the outgoing asymptote give each pixel's radial footprint in the captured image. Where the lens compresses that footprint beyond one texel, near the Einstein ring and in secondary images, up to four sub-rays spread across it share the same path and texel fetches, and their results are averaged. Compression beyond four texels, and tangential compression in thin secondary images next to the shadow, can still alias. Quads with a captured or opaque-disk neighbor use a single ray. The capture resolution limits detail: strongly magnified images are smooth but soft.

### Accelerated scene-depth traversal

Each populated capture layer builds exact minimum/maximum depth bounds for 8×8
and 64×64 pixel tiles, stored as 32-bit float bit patterns in `RG32UI` targets
that every WebGL 2 device can render to. The outgoing ray skips the columns of a
tile when the tile is empty or its depth range cannot meet any sub-ray, including
once the sub-rays pass the tile's deepest texel. Where a column's second texel
lies in the neighboring tile across the line, that tile's bounds are included.
The ray keeps the last column of a skipped tile to seed the interpolation across
the next tile boundary, so the reconstruction, sprite depth smoothing, and
volumetric disk integration are unaffected.
Scene-lensing and standalone modes compile separate shader programs so unused
depth traversal code does not affect the standalone disk. Switching modes
compiles the other program on first use; subsequent toggles reuse it.

This adds two small GPU passes per captured layer and approximately 1.34 MiB of
bounds textures across three layers at 2560×1440. It targets scene-lensing cost;
standalone disk integration does not benefit. There is no new public option.

Color captures and the main frame use sRGB 8-bit storage to preserve dark tones.
Texture sampling and blending operate in linear light, so lensed and unlensed
transparency match. The main frame and the multisampled captures use 4-sample
MSAA (limited by device support), and the main frame ends with a
display-conversion pass. The bundled particle glow and star fades
have opacity profiles for linear blending, and the glow tapers to zero at its
outer edge. See the [contributor GPU checks](../test/browser/README.md) for
validation and profiling instructions.

## References and validation

- [Eric Bruneton, Real-time High-Quality Rendering of Non-Rotating Black Holes](https://arxiv.org/abs/2010.08735), especially the Schwarzschild metric and ray-plane formulation. This implementation uses direct integration, not that paper's precomputed beam-tracing algorithm.
- [Andrew Hamilton, Orbiting the Black Hole](https://jila.colorado.edu/~ajsh/courses/bh/orbit.html), circular orbits and their periods.
- [NASA / Jeremy Schnittman, Black Hole Accretion Disk Visualization](https://svs.gsfc.nasa.gov/13326/), the visual reference for disk structure, viewing angles, and orbital streaks. Our parameterized atmosphere does not reproduce its simulation data.
- [IAU 2015 Resolution B3](https://arxiv.org/abs/1510.07674), nominal solar mass parameter.

`test/BlackHole.test.ts` checks the solar horizon, radius ratios, ISCO period, critical capture threshold, weak-field deflection, null invariant, integration convergence, positioning/scaling, time scrubbing, camera updates, validation, and resource ownership. Browser checks are also necessary: numerical CPU tests do not compile the GPU shader.

After `pnpm build`, serve the repository and open [the WebGL checks](../test/browser/black-hole.html). They render the actual shader into a framebuffer at both quality settings, compare the shadow diameter with the finite-observer prediction (within two pixels at 256 × 256), and verify translation, foreground/background occlusion, removal, optical-depth response, deterministic disk animation and scrubbing, exact edge-on thickness, scale-height response, transfer convergence between quality settings, both inward and outward radial rays, artistic-speed equivalence to accelerated simulation time, and full-disk views out to 100 horizon radii. [The sampling comparison](../test/browser/black-hole-sampling.html) also renders a fixed turbulent disk against a much denser integration reference, checking both quality levels against an undersampled stress control.

[The scene-lensing checks](../test/browser/black-hole-scene.html) exercise actual sphere, sprite, orbit-line, custom GPU particle, and additive Sun images at both quality levels. They also cover foreground occlusion, transparent layering, moving objects, camera changes without simulation ticks, resizing, resource reuse/removal, and restoration of caller render state.

[The finite-distance checks](../test/browser/black-hole-scene-depth.html) compare rendered ring radii at three source distances against an independently integrated finite-source boundary condition, at both quality levels. They also exercise the simulation's tiny camera near plane, overlapping opaque surfaces and orbit lines, commented custom GLSL entry points, geometry crossing the lens plane, distant skyboxes, additive padding, and opaque occlusion of additive light.

[The distant-star checks](../test/browser/black-hole-stars.html) load the real star catalogue and check brightness stability during slow camera rotation, with and without scene lensing at both quality levels. They also check sky distortion, foreground exclusion, opaque occlusion, camera layers, and lens removal.

[The transparent-layer checks](../test/browser/black-hole-transparency.html) compare the final image against independently rendered particles and a ring, composed in their known depth order. They check particles on both sides of translucent and opaque ring surfaces, reverse draw order, rotate the camera, exercise normal and additive blending at both quality settings, and reject dark halos.

[The antialiasing checks](../test/browser/black-hole-antialiasing.html) lens thin opaque and translucent ribbons and a sphere's silhouette along the Einstein ring, then compare each with the same scene rendered at four times the resolution and averaged over 4×4 blocks. The per-pixel error must stay below 55%, and the error in the light of each half-degree sector around the hole below 50%, of the error with one sample per pixel. Stair steps, combs, and dotted lines exceed both.
