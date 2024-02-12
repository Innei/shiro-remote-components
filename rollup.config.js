// @ts-check
import { readdirSync } from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { minify } from 'rollup-plugin-esbuild'
import externalGlobals from 'rollup-plugin-external-globals'

import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'

import css from 'rollup-plugin-postcss'

const dir = 'dist'

/**
 * @type {import('rollup').RollupOptions}
 */

const baseConfig = {
  plugins: [
    externalGlobals({
      react: 'React',
      'styled-components': 'window',
      'react-dom': 'ReactDOM',
      // https://cdnjs.cloudflare.com/ajax/libs/styled-components/6.1.8/styled-components.min.js
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    nodeResolve(),

    commonjs({ include: 'node_modules/**' }),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
    }),
    css({
      // extract: true,
      minimize: true,
      modules: {
        generateScopedName: '[hash:base64:5]',
      },
    }),

    minify(),
  ],

  treeshake: true,
  external: ['react', 'react-dom', 'styled-components'],
}

const config = readdirSync(
  path.resolve(dirname(fileURLToPath(import.meta.url)), 'src/components'),
)
  .map((file) => {
    const name = file.split('.')[0]
    const ext = file.split('.')[1]
    if (ext !== 'tsx') return
    /**
     * @type {import('rollup').RollupOptions}
     */
    return {
      ...baseConfig,

      input: `src/components/${name}.tsx`,
      output: [
        {
          file: `${dir}/components/${name}.js`,
          format: 'iife',
          sourcemap: false,
          name: `MDX.${name}`,
        },
      ],
    }
  })
  .filter(Boolean)

export default config
