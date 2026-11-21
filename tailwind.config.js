/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#080808',
          900: '#0d0d0d',
          850: '#121212',
          800: '#181818',
          700: '#242424',
          600: '#333333',
        },
        pixel: {
          green: '#b6f000',      // neon/lime highlight from prompt
          greenMuted: '#96c800',
          yellow: '#f5b800',     // amber/warm yellow from prompt
          yellowGlow: '#ffc820',
          cyan: '#00f0ff',
          surface: '#141414',
          border: '#262626',
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', '"Silkscreen"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'pixel-green': '0 0 15px rgba(182, 240, 0, 0.25)',
        'pixel-yellow': '0 0 15px rgba(245, 184, 0, 0.25)',
        'pixel-frame': 'inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'float-slow': 'floating 4s ease-in-out infinite',
        'pulse-subtle': 'subtlePulse 2.5s ease-in-out infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        }
      }
    },
  },
  plugins: [],
}
