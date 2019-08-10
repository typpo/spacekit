import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/spacekit.js',
  output: [
    {
      format: 'iife',
      name: 'Spacekit',
      file: 'build/spacekit.js',
    },
  ],
  plugins: [resolve(), commonjs()],
};
