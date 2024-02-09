import react from '@vitejs/plugin-react'
import externalGlobals from 'rollup-plugin-external-globals'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
    tsconfigPaths(),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MyComponents',
      formats: ['umd'],
      fileName: () => 'main.js',
    },
    rollupOptions: {
      plugins: [
        externalGlobals({
          react: 'React',
          React: 'React',
          ReactDOM: 'ReactDOM',
          'styled-components': 'window',
          // https://cdnjs.cloudflare.com/ajax/libs/styled-components/6.1.8/styled-components.min.js
        }),
      ],
    },
  },
})
