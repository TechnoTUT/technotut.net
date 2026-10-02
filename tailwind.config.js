/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#050505',
        'dark-panel': '#0c0c0c',
        'dark-border': 'rgba(255, 255, 255, 0.12)',
        'gray-dim': '#c2c2c2',
        brand: '#C7000A',
        'brand-light': '#E0202A',
      },
      fontFamily: {
        quicksand: ['"Quicksand"', 'sans-serif'],
        noto: ['"Noto Sans JP"', 'sans-serif'],
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typing: {
          '0%': { width: '0', transform: 'translateY(40px)', opacity: '0' },
          '100%': { width: 'max-content', transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadein: 'fadein 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        typing: 'typing 1.6s cubic-bezier(0.25, 1, 0.5, 1) forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
