import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const extensions = ['js', 'jsx', 'ts', 'tsx', 'mjs']

const pkg = require('./package.json')

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        interop: 'auto',
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    external: ['react', '@emotion/react', '@emotion/styled'],
    plugins: [
      peerDepsExternal(),
      nodeResolve({ extensions }),
      babel({
        exclude: './node_modules/**',
        extensions,
        include: ['./src/**/*'],
      }),
      commonjs({ include: './node_modules/**' }),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
]
