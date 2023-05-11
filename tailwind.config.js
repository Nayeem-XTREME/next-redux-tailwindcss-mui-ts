/** @type {import('tailwindcss').Config} */

module.exports = {
  important: '#__next',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        body: 'var(--font-inter)',
      },
      colors: {
        primary: {
          50: '#EDFCF5',
          100: '#D2F7E6',
          200: '#B4F1D6',
          300: '#96EBC6',
          400: '#80E7B9',
          500: '#69E3AD',
          600: '#61E0A6',
          700: '#56DC9C',
          800: '#4CD893',
          900: '#3BD083',
        },
        secondary: {
          50: '#FCFFEA',
          100: '#F7FECB',
          200: '#F1FEA9',
          300: '#EBFD86',
          400: '#E7FC6C',
          500: '#E3FC52',
          600: '#E0FC4B',
          700: '#DCFB41',
          800: '#D8FB38',
          900: '#D0FA28',
        },
        neutral: {
          50: '#FFFFFF',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        emp: {
          white: {
            high: '#FFFFFF',
            medium: '#F5F5F5',
            low: '#EEEEEE',
          },
          black: {
            high: '#03100F',
            medium: '#0D2B29',
            low: '#566B69',
          },
          disabled: '#9E9E9E',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
