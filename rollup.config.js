import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';

const plugins = [resolve(), commonjs()];

if (process.env.ENABLE_DEV_SERVER) {
  // envar set via `yarn build:watch`
  plugins.push(livereload());
  plugins.push(serve({ port: 8001, contentBase: ['.'] }));
}

export default {
  input: 'src/spacekit.js',
  output: [
    {
      format: 'iife',
      name: 'Spacekit',
      file: 'build/spacekit.js',
    },
  ],
  plugins,
};
