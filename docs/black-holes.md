# Black holes

```js
const hole = sim.createBlackHole('galactic-center', {
  massSolar: 4e6,
  position: [0, 0, 0], // AU, like other Spacekit objects
  diskNormal: [0, 0, 1],
  accretionDisk: {
    innerRadius: 3, outerRadius: 30, temperature: 7500,
    opticalDepth: 2, aspectRatio: 0.025, turbulence: 0.65,
    rotationSpeed: 200, // artistic animation; use 1 for physical time
  },
});
console.log(hole.getPhysicalRadii()); // all values in AU
hole.setPosition([1, 0, 0]);
hole.setRotationSpeed(20); // changes speed without jumping to a new phase
hole.setDiskOuterRadius(100); // in horizon radii; does not change the hole
hole.setDiskAspectRatio(0.025);
hole.setDiskEnabled(false); // preserves animation and resources
// sim.removeObject(hole); // removes it and releases its GPU resources
// hole.dispose();        // equivalent
```

Run the [interactive example](../examples/black-hole/index.html) after building. A 4-million-solar-mass black hole has a horizon radius of about 0.079 AU; a useful initial camera position is `[0, -3.3, 0.7]` AU. A stellar-mass black hole is far smaller: adjust the camera near/far planes through `sim.getViewer().get3jsCamera()` when viewing one up close. `unitsPerAu` scales the object but does not change its physical size.

`massSolar` is required. Optional settings are position, disk normal, `accretionDisk: false`, `exposure` (default 1), `quality: 'low' | 'high'` (default high), and a caller-owned `THREE.Texture` in `backgroundTexture`. The background must be an equirectangular sky in display RGB: north at +Z, longitude zero (+X) at the center, increasing toward +Y. It replaces the sky with the lensed texture. Use it on only one black hole in a scene, without an additional Skybox or Stars layer. Without it, escaping rays leave the scene untouched. Dispose the texture yourself when no longer needed.

## Physical model

The isolated mass is stationary, uncharged, and non-rotating (Schwarzschild). The horizon radius is `rs = 2 GM / c²`, using the IAU nominal solar GM of `1.3271244e20 m³/s²`. The photon sphere is at `1.5 rs`, the innermost stable circular orbit (ISCO) at `3 rs`, and the asymptotic shadow impact parameter at `3 sqrt(3) rs / 2`. The shadow is consequently larger than the event horizon.

In each ray's orbital plane, `u = rs/r` satisfies `u'' = 1.5 u² - u`, with primes denoting azimuthal derivatives. A fourth-order Runge–Kutta integrator traces backward from a static observer's local orthonormal frame. For observer radius `ro` and local ray angle `alpha` from the outward radial direction, `b = ro sin(alpha) / sqrt(1 - 1/ro)`, `u = 1/ro`, and `u' = -cos(alpha)/b`. Along these curved paths, the renderer integrates emission and absorption through a three-dimensional gas volume. Step lengths shrink to resolve the vertical density profile. Exactly radial rays use a separate radial integrator because their orbital-plane azimuth is undefined. Captured rays terminate on a black horizon, retaining any foreground emission; escaped rays sample the optional sky at the outgoing asymptote. This produces lensing and secondary disk images without a painted shadow or ring.

The optional gas disk begins at or outside the ISCO, measured in cylindrical radius R. Its mean temperature follows the **Newtonian zero-torque thin-disk approximation**, `T⁴ ∝ r⁻³ [1 - sqrt(rin/r)]`, normalized to the chosen maximum mean midplane temperature (default 6500 K). It is not a relativistic fluid simulation or a full Novikov–Thorne disk. The prescribed rotation uses `Omega = 1/sqrt(2 R³)` in units `rs = c = 1`. Writing `r = sqrt(R² + z²)` and `f = 1 - 1/r`, gravitational and orbital Doppler shifts use `g = sqrt(f - Omega² R²) / [sqrt(1 - 1/ro) (1 + Omega b_z)]`, with backward-ray angular momentum `b_z`. This reduces to the circular-geodesic result in the midplane. Above it, rotation describes a supported atmosphere rather than freely orbiting test particles. Applying the Planck spectrum at `g T` accounts for the `I_nu/nu³` invariant. RGB uses three representative wavelengths and a display exposure curve rather than a calibrated spectral response.

The vertical profile is a prescribed **n = 3 polytropic atmosphere**. With `H = aspectRatio * R` and `q = 1 - z²/(9H²)`, density is proportional to `35 q³ / (96H)` and temperature to `q` inside `|z| < 3H`; both vanish at the surface. The density column integrates to one, and its root-mean-square height is H. This cools the dilute upper layers instead of making them radiate at the midplane temperature. `aspectRatio` defaults to 0.025 and accepts 0.02–0.3. H is a density scale height, not the full thickness. The example includes Thin (0.025, the default), Moderate (0.06), and Thick (0.12) controls. **The scale height, midplane temperature, and vertical structure are prescribed inputs, not a self-consistent solution for fluid dynamics or radiative equilibrium.**

`opticalDepth` (default 2) normalizes the smooth vertical density column. At each volume sample, the absorption coefficient includes the polytropic density profile, turbulent density, and outer radial taper. The proper static-frame path length follows `dl² = dr²/f + r² dphi²`, and converts to the gas frame as `dl_gas = dl sqrt(f) / (g sqrt(1 - 1/ro))`. Each segment contributes `B(gT) [1 - exp(-extinction * dl_gas)]`, attenuated by the transmission accumulated along the preceding ray. No disk-plane intersection or grazing-angle opacity clamp is used. This accounts for self-absorption and foreground gas covering part of the shadow. Without a supplied sky texture, compositing with the ordinary scene uses alpha blending, so tone mapping mixed scene light is approximate.

Procedural orbital lanes and knots modulate the local density and temperature. The pattern is coherent through each vertical column rather than independent three-dimensional cloud noise. `turbulence` controls their contrast from 0 (a smooth disk) to 1; the default is 0.65. They rotate at the circular orbital rate, with phase controlled by Julian dates, including pause and backward scrubbing. These structures are illustrative and do not solve fluid or magnetic dynamics. Successive patterns crossfade over half an inner-edge orbital period, with each pattern advected at the local circular rate during its lifetime. This prescribed turnover prevents indefinite winding into subpixel rings during accelerated playback; it is not a turbulence simulation. Very small structures can still alias without beam filtering. The example leaves bloom disabled to preserve the disk structure. Optional `bloom: true` in the **Simulation** options adds camera glow. The example starts with an outer radius of 30 rs, a 7500 K maximum midplane temperature, and 200× artistic rotation. Its scene clock runs at real time. The controls offer rotation at 1×, 20×, 200×, or 1000× and outer radii of 12, 30, or 100 rs. Changing the radius fits the full disk while preserving the viewing angle; the Fit full disk button restores this framing after zooming. Cooler surface layers and outer gas can be too faint to see even though they are inside the frame. Temperature and exposure remain explicit display/model choices: the disk's visible color is not a prediction for a particular observed black hole.

`accretionDisk.rotationSpeed` is a nonnegative multiplier for the evolving gas pattern (default 1; 0 freezes it). It multiplies elapsed simulation time, so a scene clock running at 20× and a rotation speed of 10 produce 200× apparent motion. It preserves differential rotation and does not change gravitational lensing, orbital Doppler shifts, or physical radii. `setRotationSpeed()` anchors the new rate at the current simulation Julian date to avoid a phase jump. Scrubbing remains deterministic within the current rate segment; historical speed changes are not recorded as an animation timeline. Disk size, thickness, and visibility can change without replacing the object or resetting its pattern.

`outerRadius` defines a chosen gas boundary, not a size predicted from black-hole mass. The library keeps its compact default of 12 rs; the wider example shows how to extend it. At four million solar masses, 30 rs is approximately 2.37 AU and 100 rs approximately 7.90 AU. These are bounded examples of the emitting region, not a claim to encompass every real accretion disk. The temperature profile still cools outward, so enlarging the disk does not make its entire area equally bright.

## Limits and performance

- This simulates light around a Schwarzschild mass. It does not exert forces on other Spacekit objects, change their Kepler ephemerides, model Kerr spin, jets, magnetic fields, mergers, or gravitational waves.
- The observer is static at each frame. Camera motion does not add velocity aberration. Keep the camera outside the horizon; inside it the view becomes black. Disk emission is evaluated at the current simulation time, without light travel time delays.
- Ordinary scene meshes are not traced along curved rays. Compositing uses their existing depth buffer and an apparent Euclidean distance for disk/shadow pixels. Nearby intersecting objects and multiple interacting black holes therefore are not a relativistic scene simulation. Multiple holes can be placed as independent objects, but their metrics and lensing are not combined.
- WebGL 1 requires `EXT_frag_depth` and high precision fragment floats. Unsupported renderers throw before adding anything to the scene. Camera matrices update on every render, including while paused and after resizing.
- Each hole draws a full-screen ray-tracing pass. High quality allows 1024 steps of at most 0.02 radians; low allows 768 at 0.04. In the gas region, proper spatial steps are additionally limited to half a scale height and 2.5% (high) or 5% (low) of spherical radius; near the midplane this resolves the cylindrical scale height. Volume transfer uses composite midpoint quadrature with four gas samples per ray segment at high quality and two at low quality. These additional samples resolve density lanes that can otherwise alias into crosshatching even when the light path itself is accurate. Multiple samples through the atmosphere cost more than a zero-thickness disk. Without a background, rays missing the emitting region are skipped. Near-critical rays exhausting the budget become dark; arbitrarily high-order photon images are not resolved. Tiny stars can alias without beam filtering. Lower canvas resolution or choose low quality on slower GPUs.

## References and validation

- [Eric Bruneton, Real-time High-Quality Rendering of Non-Rotating Black Holes](https://arxiv.org/abs/2010.08735), especially the Schwarzschild metric and ray-plane formulation. This implementation uses direct integration, not that paper's precomputed beam-tracing algorithm.
- [Andrew Hamilton, Orbiting the Black Hole](https://jila.colorado.edu/~ajsh/courses/bh/orbit.html), circular orbits and their periods.
- [NASA / Jeremy Schnittman, Black Hole Accretion Disk Visualization](https://svs.gsfc.nasa.gov/13326/), the visual reference for disk structure, viewing angles, and orbital streaks. Our parameterized atmosphere does not reproduce its simulation data.
- [IAU 2015 Resolution B3](https://arxiv.org/abs/1510.07674), nominal solar mass parameter.

`test/BlackHole.test.ts` checks the solar horizon, radius ratios, ISCO period, critical capture threshold, weak-field deflection, null invariant, integration convergence, positioning/scaling, time scrubbing, camera updates, validation, and resource ownership. Browser checks are also necessary: numerical CPU tests do not compile the GPU shader.

After `pnpm build`, serve the repository and open [the WebGL checks](../test/browser/black-hole.html). They render the actual shader into a framebuffer at both quality settings, compare the shadow diameter with the finite-observer prediction (within two pixels at 256 × 256), and verify translation, foreground/background occlusion, removal, optical-depth response, deterministic disk animation and scrubbing, exact edge-on thickness without bloom, scale-height response, transfer convergence between quality settings, both inward and outward radial rays, artistic-speed equivalence to accelerated simulation time, and full-disk views out to 100 horizon radii. [The sampling comparison](../test/browser/black-hole-sampling.html) also renders a fixed turbulent disk against a much denser integration reference, checking both quality levels and showing the previous one-sample artifacts beside the current result.
