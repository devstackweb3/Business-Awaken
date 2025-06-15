import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    /*inset: {
      //EFFET D'OVERRIDE SUR TOUTES LES INTERPRETATIONS DE DONNEES TOP BOTTOM LEFT RIGHT SI INSET INSERE A LA HAUTEUR DU DOSSIER 'EXTEND'
      '1/5': '20%',
      '1/8': '12%',
    },*/
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.6s both',
      },
      theme: {
        colors: {
          'white-rgba': 'rgba(255, 255, 255, 1)',
          'white-low-opacity': 'rgba(255, 255, 255, 0.2)',
        },

        screens: {
          desktop: { max: '1279px' },
          // => @media (max-width: 1279px) { ... }

          laptop: { max: '1023px' },
          // => @media (max-width: 1023px) { ... }

          mobile: { max: '639px' },
          // => @media (max-width: 639px) { ... }
        },
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },

      keyframes: {
        showContent: {
          '0%': {
            opacity: '0',
            filter: 'blur(20px)',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            filter: 'blur(0)',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      inset: {
        '1/5': '20%',
        '1/8': '12%',
      },
      padding: {
        'p-30': '30%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }: { addVariant: any }) {
      addVariant('child', '& > *')
    }),
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      }

      addUtilities(newUtilities)
    },
  ],
}
export default config
