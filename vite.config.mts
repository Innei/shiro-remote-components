import react from '@vitejs/plugin-react'
import utwm from 'unplugin-tailwindcss-mangle/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
    tsconfigPaths(),
    // utwm({
    // disabled: false,
    // classGenerator: { customGenerate: () => nanoid(8) },
    // }),
  ],
})
