import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss'
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';

import pkg from './package.json';

export default {
   input: 'src/index.tsx',
   output: [
      {
         file: pkg.main,
         format: 'cjs',
         exports: 'named',
         sourcemap: true
      },
      {
         file: pkg.module,
         format: 'es',
         exports: 'named',
         sourcemap: true
      }
   ],
   plugins: [
      external(),
      scss({
         sourceMap: true
      }),
      url(),
      svgr(),
      resolve(),
      typescript({
         rollupCommonJSResolveHack: true,
         clean: true,
         exclude: ['src/**/*.stories.tsx']
      }),
      commonjs()
   ]
};