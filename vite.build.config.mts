import react from '@vitejs/plugin-react'
import mangle from 'unplugin-tailwindcss-mangle/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import type { Plugin } from 'vite'

// 创建一个自定义插件来处理 ?url 导入
function handleUrlImports(): Plugin {
  return {
    name: 'handle-url-imports',
    resolveId(source) {
      if (source.endsWith('?url')) {
        return source.slice(0, -4) // 移除 ?url 后缀
      }
    },
    load(id) {
      if (id.endsWith('?url')) {
        return `export default ${JSON.stringify(id.slice(0, -4))}`
      }
    },
  }
}

export default defineConfig(({ mode }) => {
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
