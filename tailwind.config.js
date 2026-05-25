/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1B4332',
          deep: '#0F2D1F',
          light: '#2D5F47'
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D9BC6B',
          dark: '#A88A35'
        },
        cream: '#F5F0E8'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        'widest-2': '0.25em'
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out both',
        'fade-in': 'fadeIn 1.2s ease-out both'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    }
  },
  plugins: []
}
