const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const brand = {
  50: '#eef4ff',
  100: '#dbe7ff',
  200: '#b7ceff',
  300: '#8baeff',
  400: '#5f8bff',
  500: '#3865ff',
  600: '#2149db',
  700: '#1a3bb0',
  800: '#162f89',
  900: '#112060',
}

const accent = {
  50: '#ecfdf8',
  100: '#d1faed',
  200: '#a7f3da',
  300: '#6ee7bf',
  400: '#34d39f',
  500: '#10b981',
  600: '#0f9667',
  700: '#0b7450',
  800: '#085a3f',
  900: '#064833',
}

const neutral = {
  25: '#f9fbff',
  50: '#f5f7fb',
  100: '#edf1f9',
  200: '#dce3f0',
  300: '#c1ccd8',
  400: '#97aabd',
  500: '#73869e',
  600: '#556179',
  700: '#414b60',
  800: '#2d3442',
  900: '#1b202b',
}

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3.5rem',
        pill: '999px',
      },
      boxShadow: {
        brand: '0 22px 45px -20px rgba(56, 101, 255, 0.45)',
        elevated: '0 24px 40px -32px rgba(15, 23, 42, 0.38)',
        glass: '0 32px 80px -40px rgba(15, 23, 42, 0.55)',
        card: '0 18px 45px -30px rgba(15, 23, 42, 0.35)',
      },
      colors: {
        brand,
        accent,
        neutral,
        surface: neutral,
        primary: brand,
        secondary: accent,
        info: colors.sky,
        warning: colors.amber,
        success: colors.emerald,
        danger: colors.rose,
      },
      dropShadow: {
        glow: '0 12px 25px rgba(56, 101, 255, 0.35)',
        aurora: '0 30px 55px rgba(56, 101, 255, 0.25)',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        display: ['"Space Grotesk"', ...fontFamily.sans],
        mono: ['"JetBrains Mono"', ...fontFamily.mono],
      },
      animation: {
        'pulse-slow': 'pulse 4s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'float-slow': 'float 12s ease-in-out infinite',
      },
      backgroundImage: {
        'grid-radial':
          'radial-gradient(circle at center, rgba(56,101,255,0.12), transparent 55%), radial-gradient(circle at top left, rgba(53,156,241,0.15), transparent 60%)',
        'gradient-glow':
          'linear-gradient(135deg, rgba(56,101,255,0.12) 0%, rgba(16,185,129,0.08) 55%, rgba(15,23,42,0.7) 100%)',
        'hero-mesh':
          'radial-gradient(circle at 25% 15%, rgba(56, 101, 255, 0.32), transparent 55%), radial-gradient(circle at 75% 10%, rgba(37, 99, 235, 0.28), transparent 55%), radial-gradient(circle at 50% 80%, rgba(16, 185, 129, 0.22), transparent 55%)',
        'card-highlight':
          'linear-gradient(150deg, rgba(86, 145, 255, 0.12), rgba(16, 185, 129, 0.06) 35%, rgba(255,255,255,0.9) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      spacing: {
        18: '4.5rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.700'),
            a: {
              color: theme('colors.brand.500'),
              fontWeight: 600,
              '&:hover': {
                color: theme('colors.brand.600'),
              },
            },
            strong: {
              color: theme('colors.neutral.900'),
            },
            h1: {
              fontFamily: theme('fontFamily.display').join(','),
              color: theme('colors.neutral.900'),
            },
            h2: {
              fontFamily: theme('fontFamily.display').join(','),
              color: theme('colors.neutral.900'),
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
      primary: brand,
      secondary: accent,
      tertiary: colors.emerald,
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
