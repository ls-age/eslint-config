import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import builtinModules from 'builtin-modules';
import { dependencies } from './package.json';

export default {
  input: './src/index.js',
  external: [
    ...builtinModules,
    ...Object.keys(dependencies),
  ],
  plugins: [
    resolve(),
    commonjs(),
    json(),
    babel({ exclude: 'node_modules/**' }),
  ],
  output: {
    file: './out/index.js',
    format: 'cjs',
  },
};
