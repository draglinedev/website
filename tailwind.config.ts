import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#e9edff',
          200: '#cfd8ff',
          300: '#a7b4ff',
          400: '#7b8bff',
          500: '#5366ff',    // Primary (assumption)
          600: '#3c4fe6',
          700: '#2e3bb4',
          800: '#25318c',
          900: '#1f2a70'
        }
      },
      borderRadius: {
        xl: '1rem'
      }
    },
  },
  plugins: [],
} satisfies Config
