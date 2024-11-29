module.exports = {
  content: [
    './layouts/**/*.html.twig',
  ],
  safelist: [
    'text-neutral-400',
  ],
  theme: {
    fontFamily: {
      'title': ['"Gasoek One"'],
    },
    extend: {
      colors: {
        primary: '#0081FF',
        secondary: '#1E0D56',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
