import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';

export default {
  input: 'src/spacekit.js',
  output: [
    {
      format: 'iife',
      name: 'Spacekit',
      file: 'build/spacekit.js',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    livereload(),
    serve({ port: 8001, contentBase: ['.'] }),
  ],
};
