/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdb,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          light: '#2d4b85',
          DEFAULT: '#1b305b',
          dark: '#112144',
        },
        terracotta: {
          light: '#d27357',
          DEFAULT: '#c05a3e',
          dark: '#9a432b',
        },
        cream: {
          light: '#fdfcf9',
          DEFAULT: '#fbf9f4',
          dark: '#f0ede1',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
