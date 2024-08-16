module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-rename': {
      strategy: (s) => `sp-${s}`,
    },
  },
}
