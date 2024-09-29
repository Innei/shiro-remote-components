const isDev =
  process.env.NODE_ENV === 'development' && process.env.BUILD !== '1'

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    // 'postcss-rename': isDev
    //   ? void 0
    //   : {
    //       strategy: (s) => `sp-${s}`,
    //     },
  },
}
