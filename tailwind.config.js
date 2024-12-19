/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DC143C', // Crimson Red
          light: '#E34664',
          dark: '#B01030'
        },
        accent: {
          DEFAULT: '#FFD700', // Golden Yellow
          light: '#FFE44D',
          dark: '#CCB100'
        },
        neutral: {
          DEFAULT: '#F5F5DC', // Warm Beige
          light: '#FFFFF0',
          dark: '#E6E6CE'
        },
        secondary: {
          DEFAULT: '#2F4F4F', // Slate Gray
          light: '#446464',
          dark: '#1A2F2F'
        },
        terracotta: {
          DEFAULT: '#E2725B', // Deep Terracotta
          light: '#E89480',
          dark: '#C85439'
        }
      }
    },
  },
  plugins: [],
};