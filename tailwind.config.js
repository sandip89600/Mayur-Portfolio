/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pure: "#000000",
          deep: "#050505",
          charcoal: "#0B0B0B",
          graphite: "#111111",
          border: "rgba(212, 175, 55, 0.18)",
          borderHover: "rgba(212, 175, 55, 0.45)",
          surface: "rgba(11, 11, 11, 0.75)",
          surfaceHover: "rgba(17, 17, 17, 0.9)",
        },
        gold: {
          DEFAULT: "#D4AF37",
          bright: "#F5D76E",
          soft: "#C9A227",
          muted: "#997D20",
          dark: "#5A4710",
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5D76E 0%, #D4AF37 50%, #C9A227 100%)',
        'gold-gradient-subtle': 'linear-gradient(180deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.02) 100%)',
        'dark-glass': 'linear-gradient(135deg, rgba(17, 17, 17, 0.6) 0%, rgba(5, 5, 5, 0.8) 100%)',
        'radial-gold': 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
      },
      boxShadow: {
        'gold-glow-sm': '0 0 15px -3px rgba(212, 175, 55, 0.25)',
        'gold-glow-md': '0 0 25px -2px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 45px -5px rgba(212, 175, 55, 0.4)',
        'gold-inner': 'inset 0 0 15px 0 rgba(212, 175, 55, 0.15)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'ticker': 'ticker 25s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
