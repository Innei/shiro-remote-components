/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'cn-',
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    'src/**/*.{ts,tsx}',
    './storybook/**/*.{ts,tsx}',
    './.storybook/preview.tsx',
  ],
  corePlugins:
    process.env.BUILD == '1'
      ? {
          preflight: false,
        }
      : {},
  theme: {
    extend: {
      keyframes: {
        hide: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(6px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-6px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        hide: 'hide 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDownAndFade:
          'slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
  },

  // daisyui: {
  //   logs: false,
  //   themes: ['cupcake', 'dark'],
  //   darkTheme: 'dark',
  //   base: false, // applies background color and foreground color for root element by default
  //   styled: false, // include daisyUI colors and design decisions for all components
  //   utils: true, // adds responsive and modifier utility classes
  // },

  plugins: [
    // require('tailwindcss-animate'),
    // require('daisyui')
  ],
}
