import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => {
  const componentName = process.env.COMPONENT_NAME

  if (!componentName) {
    throw new Error('COMPONENT_NAME environment variable is not set')
  }

  return {
    plugins: [
      react({
        jsxRuntime: 'classic',
      }),
      tsconfigPaths(),
      // mangle({
      //   classGenerator: { customGenerate: (string) => `sp-${string}` },
      // }),
      // handleUrlImports(), // 添加自定义插件
    ],
    build: {
      lib: {
        entry: `src/components/${componentName}.tsx`,
        name: `MDX.${componentName}`,
        formats: ['iife'],
        fileName: () => `components/${componentName}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'styled-components'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'styled-components': 'window',
          },
        },
      },
      minify: 'esbuild',
      sourcemap: false,
      emptyOutDir: false,
    },
  }
})
