const variants = ['hover', 'focus', 'active', 'checked', 'first', 'disabled', 'visited']
module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderStyle: variants,
      borderColor: variants,
      backgroundColor: variants,
      ringColor: variants,
      ringWidth: variants,
      outline: variants,
      borderWidth: variants,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
