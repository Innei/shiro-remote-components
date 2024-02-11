// @ts-check
import { readdirSync } from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { minify } from 'rollup-plugin-esbuild'
import externalGlobals from 'rollup-plugin-external-globals'

import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

import css from 'rollup-plugin-postcss'

const dir = 'dist'

/**
 * @type {import('rollup').RollupOptions}
 */

const baseConfig = {
  plugins: [
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
    externalGlobals({
      react: 'React',
      React: 'React',
      ReactDOM: 'ReactDOM',
      'styled-components': 'window',
      // https://cdnjs.cloudflare.com/ajax/libs/styled-components/6.1.8/styled-components.min.js
    }),
    minify(),
  ],

  treeshake: true,
}
/**
 * @type {import('rollup').RollupOptions[]}
 */
const config = readdirSync(
  path.resolve(dirname(fileURLToPath(import.meta.url)), 'src/components'),
).map((file) => {
  const name = file.split('.')[0]
  return {
    ...baseConfig,
    input: `src/components/${name}.tsx`,
    output: [
      {
        file: `${dir}/components/${name}.js`,
        format: 'umd',
        sourcemap: false,
        name: `MDX.${name}`,
      },
    ],
  }
})

export default config
