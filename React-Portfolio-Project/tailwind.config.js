// Tailwind CSS Configuration

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        // => @media (min-width: 992px) { ... }
      },
      fontFamily: {
        // @import url('https://fonts.googleapis.com/css2?family=Kreon:wght@300..700&family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&display=swap');
        kreon: ['Kreon', 'sans-serif'],
        ubuntu: ['Ubuntu Sans', 'sans-serif'],
      },
      animation: {
        fade: 'fadeIn 1s ease-in-out',
        fadeFast: 'fadeInFast 0.5s ease-in-out',
        fadeSlow: 'fadeInSlow 2.5s ease-in-out',
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
        '7/25': '28%',
        '3/10': '30%',
        '9/20': '45%',
        '15/31': '48.3870968%',
        '11/20': '55%',
        '6/10': '60%',
        '6/7': '85.7142857%',
        '7/8': '87.5%',
        '9/10': '90%',
        '19/20': '95%',
      },
      width: {
        '1/16': '6.25%',
        '1/14': '7.14%',
        '1/10': '10%',
        '3/10': '30%',
        '12/25': '48%',
        '9/20': '45%',
        '6/10': '60%',
        '13/20': '65%',
        '7/10': '70%',
        '6/7': '85.7142857%',
        '7/8': '87.5%',
        '8/9': '88.8888889%',
        '9/10': '90%',
        '19/20': '95%',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.parallelogram': {
          '--p': '160px',
          'clip-path': 'polygon(0 calc(100% - var(--p)), 0 0, 100% var(--p), 100% 100%)',
        },
        '.slanted-edge-down': {
          '--p': '70px', /* control the shape (can be percentage) */
          'clip-path': 'polygon(0 0,100% 0,100% calc(100% - var(--p)),0 100%)',
        },
        '.slanted-edge-up': {
          '--p': '70px', /* control the shape (can be percentage) */
          'clip-path': 'polygon(0 var(--p),100% 0,100% 100%,0 100%)',
        },
        '.hexagon': {
          'aspect-ratio': 'calc(1 / cos(30deg))',
          'clip-path': 'polygon(50% -50%, 100% 50%, 50% 150%, 0 50%)',
        },
        '.slanted-edge-rs': {
          '--p': '60px;',
          'clip-path': 'polygon(0 0,calc(100% - var(--p)) 0,100% 100%,0 100%)',
        },
        '.slanted-edge-ls': {
          '--p': '60px;',
          'clip-path': 'polygon(0 0,100% 0,100% 100%,var(--p) 100%)',
        },
        '.trapezoid': {
          '--p': '25.5%',
          'clip-path': 'polygon(var(--p) 0, calc(100% - var(--p)) 0, 100% 100%, 0 100%)',
        },
        '.trapezoid-button': {
          '--p': '19px',
          'aspect-ratio': '1',
          'clip-path': 'polygon(var(--p) 0, calc(100% - var(--p)) 0, 100% 100%, 0 100%)',
        },
        '.cube': {
          '--d': '10px',
          /* control the depth */
          padding: '10px',
          'aspect-ratio': '1',
          'box-sizing': 'border-box',
          border: 'solid #0000',
          'border-width': 'var(--d) var(--d) 0 0',
          'clip-path': 'polygon(0 100%, calc(100% - var(--d)) 100%, 100% calc(100% - var(--d)), 100% 0, var(--d) 0, 0 var(--d))',
          background:
            'conic-gradient(from 45deg at calc(100% - var(--d)) var(--d), rgba(102, 50, 50, 0.267) 37.5%, #0000 0 62.5%, #0008 0) border-box',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
