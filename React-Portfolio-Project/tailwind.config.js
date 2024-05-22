//

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'combined-slanted-edge': 'polygon(0 0, 100% 0, 100% 50%, 0 calc(50% + var(--p)), 0 100%, 100% 100%, 100% calc(50% - var(--p)), 0 50%)',
      },
      fontFamily: {
        'oswald': ['"Oswald"', "sans-serif"],
        'bebas-neue': ['"Bebas Neue"', 'serif'],
      },
      animation: {
        fade: 'fadeIn 1s ease-in-out',
        fadeFast: 'fadeInFast 0.5s ease-in-out',
        fadeSlow: 'fadeInSlow 2.5s ease-in-out', // Added fadeSlow animation
        waving: 'waving 1.2s linear 1s 3',
        marquee: 'marquee 26s linear infinite',
        marquee2: 'marquee2 26s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeInFast: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeInSlow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        }, // Added fadeInSlow keyframe
        waving: {
          '0%': {
            transform: 'translate(0%, 0%) rotate(0deg)',
          },
          '25%': {
            transform: 'translate(50%, -33%) rotate(10deg)',
          },
          '50%': {
            transform: 'translate(100%, -66%) rotate(20deg)',
          },
          '75%': {
            transform: 'translate(50%, -33%) rotate(10deg)',
          },
          '100%': {
            transform: 'translate(0%, 0%) rotate(0deg)',
          },
        },
      },
      height: {
        '12/25': '48%',
      },
      width: {
        '1/16': '6.25%',
        '1/15': '6.67%',
        '1/14': '7.14%',
        '1/13': '7.69%',
        '1/11': '9.09%',
        '1/10': '10%',
        '1/9': '11.11%',
        '1/8': '12.5%',
        '1/7': '14.29%',
        '9/20': '45%',
        '6/10': '60%',
        '6/7': '85.7142857%',
        '7/8': '87.5%',
        '8/9': '88.8888889%',
        '9/10': '90%',



      },
    },
  },
  plugins: [
    function({ addUtilities }) {


      addUtilities(newUtilities);
    },
  ],
};
const newUtilities = {
        '.parallelogram': {
          '--p': '160px',
          'clip-path': 'polygon(0 calc(100% - var(--p)), 0 0, 100% var(--p), 100% 100%)',
        },
        '.triangle': {
          'aspect-ratio': 'calc(1 / cos(33deg))', // Correct aspect-ratio calculation
          'clip-path': 'polygon(0 0, 100% 50%, 0 100%)',
        },
        '.slanted-edge-down': {
          '--p': '70px', /* control the shape (can be percentage) */
          'clip-path': 'polygon(0 0,100% 0,100% calc(100% - var(--p)),0 100%)',
        },
        '.slanted-edge-up': {
          '--p': '70px', /* control the shape (can be percentage) */
          'clip-path': 'polygon(0 var(--p),100% 0,100% 100%,0 100%)',
        },
        '.combined-slanted-edge': {
          '--p': '70px', // control the shape (can be percentage)
          'clip-path': 'polygon(0 0, 100% 0, 100% 50%, 0 calc(50% + var(--p)), 0 100%, 100% 100%, 100% calc(50% - var(--p)), 0 50%)',
        },
        '.hexagon': {
        'aspect-ratio': 'calc(1 / cos(30deg))',
        'clip-path': 'polygon(50% -50%, 100% 50%, 50% 150%, 0 50%)',
      },
        '.slanted-edge-rs': {
        '--p': '30px;',
        'clip-path': 'polygon(0 0,calc(100% - var(--p)) 0,100% 100%,0 100%)',
      },
        '.slanted-edge-ls': {
        '--p': '30px;',
        'clip-path': 'polygon(0 0,100% 0,100% 100%,var(--p) 100%)',
      },
      };