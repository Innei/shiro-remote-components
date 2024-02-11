/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'cn-',
  darkMode: ['class'],
  content: ['src/**/*.{ts,tsx}', './storybook/**/*.{ts,tsx}'],
  corePlugins:
    process.env.BUILD == '1'
      ? {
          preflight: false,
        }
      : {},
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
  },
  daisyui: {
    logs: false,
    themes: ['cupcake', 'dark'],
    darkTheme: 'dark',
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
  },

  plugins: [require('tailwindcss-animate'), require('daisyui')],
}
