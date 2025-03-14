module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Add all file types
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.current'),
            },
          },
        },
      }),
    },
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      gray: colors.slate,
      primary: colors.indigo,
      secondary: colors.rose,
      tertiary: colors.emerald,
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};