/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        dark: '#000000',
        light: '#ffffff',
        perano: {
          50: '#eef3ff',
          100: '#dfe9ff',
          200: '#bed0ff',
          300: '#a3bafe',
          400: '#7f93fa',
          500: '#606ff4',
          600: '#4347e8',
          700: '#3535cd',
          800: '#2e30a5',
          900: '#2c2f83',
          950: '#1a1b4c',
        },
        'green-yellow': {
          50: '#f9ffe4',
          100: '#f0ffc4',
          200: '#e0ff90',
          300: '#c8ff50',
          400: '#a6ff00',
          500: '#90e600',
          600: '#6eb800',
          700: '#538b00',
          800: '#436d07',
          900: '#395c0b',
          950: '#1c3400',
        },
        tahiti: {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
    },
  },
  plugins: [],
};
