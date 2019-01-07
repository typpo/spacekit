import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/spacekit.js',
  output: [
    {
      format: 'iife',
      name: 'Spacekit',
      file: 'build/spacekit.js',
      globals: {
        three: 'THREE',
      },
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
  ],
  external: ['three'],
};
