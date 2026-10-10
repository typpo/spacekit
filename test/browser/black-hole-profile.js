// Diagnostic helper for a manually driven, paused example. Keep ordinary RAF
// rendering stopped while this runs. Timers are sequential, never nested.
window.profileBlackHole = async function (simulation, hole, frames = 30) {
  const renderer = simulation.getRenderer();
  const gl = renderer.getContext();
  const timer = gl.getExtension('EXT_disjoint_timer_query_webgl2');
  if (!timer) throw new Error('GPU timer queries unavailable');
  const capture = hole.sceneCapture;
  const mesh = hole.get3jsObjects()[0];
  const nextFrame = () =>
    new Promise(window.benchmarkRAF || requestAnimationFrame);
  const pending = [],
    samples = [],
    restorations = [];
  let active, frame;
  function end() {
    if (!active) return;
    gl.endQuery(timer.TIME_ELAPSED_EXT);
    pending.push(active);
    active = undefined;
  }
  function begin(stage) {
    end();
    const query = gl.createQuery();
    active = { query, stage, frame };
    gl.beginQuery(timer.TIME_ELAPSED_EXT, query);
  }
  function wrap(object, key, replacement) {
    const original = object[key];
    object[key] = replacement(original);
    restorations.push(() => {
      object[key] = original;
    });
  }
  function collect() {
    if (gl.getParameter(timer.GPU_DISJOINT_EXT))
      throw new Error('Disjoint GPU timing sample');
    while (
      pending.length &&
      gl.getQueryParameter(pending[0].query, gl.QUERY_RESULT_AVAILABLE)
    ) {
      const { query, stage, frame } = pending.shift();
      samples[frame][stage] +=
        gl.getQueryParameter(query, gl.QUERY_RESULT) / 1e6;
      gl.deleteQuery(query);
    }
  }
  try {
    if (capture) {
      wrap(
        capture,
        'render',
        (original) =>
          function (...args) {
            begin('capture');
            try {
              return original.apply(this, args);
            } finally {
              end();
            }
          },
      );
      for (const bounds of [
        capture.backgroundBounds,
        capture.transparentBounds,
        capture.surfaceBounds,
      ]) {
        if (!bounds) continue;
        wrap(
          bounds,
          'render',
          (original) =>
            function (...args) {
              begin('hierarchy');
              try {
                return original.apply(this, args);
              } finally {
                begin('capture');
              }
            },
        );
      }
    }
    wrap(
      mesh,
      'onBeforeRender',
      (original) =>
        function (...args) {
          original.apply(this, args);
          begin('lensing');
        },
    );
    wrap(
      mesh,
      'onAfterRender',
      (original) =>
        function (...args) {
          end();
          original.apply(this, args);
        },
    );
    const pixel = new Uint8Array(4);
    for (frame = 0; frame < frames; frame++) {
      await nextFrame();
      samples.push({ capture: 0, hierarchy: 0, lensing: 0 });
      simulation.animate();
      gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
      collect();
    }
    for (let i = 0; pending.length && i < 120; i++) {
      await nextFrame();
      collect();
    }
    if (pending.length) throw new Error('GPU timing queries did not complete');
    const result = { samples };
    for (const stage of ['capture', 'hierarchy', 'lensing']) {
      const times = samples
        .map((sample) => sample[stage])
        .sort((a, b) => a - b);
      result[stage] = times[Math.floor(times.length / 2)];
    }
    return result;
  } finally {
    end();
    restorations.reverse().forEach((restore) => restore());
    pending.forEach(({ query }) => gl.deleteQuery(query));
  }
};
