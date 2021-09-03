import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import typescript from 'rollup-plugin-typescript2';

const plugins = [
  typescript({
    tsconfigDefaults: {
      compilerOptions: {
        target: 'es6',
        lib: ['es6', 'dom'],
      },
    },
  }),
  resolve(),
  commonjs(),
];

if (process.env.ENABLE_DEV_SERVER) {
  // envar set via `yarn build:watch`
  plugins.push(livereload({ watch: 'build' }));
  plugins.push(serve({ port: 8001, contentBase: ['.'] }));
}

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'iife',
      name: 'Spacekit',
      file: 'build/spacekit.js',
    },
  ],
  plugins,
};
