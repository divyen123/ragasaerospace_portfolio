/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /* ── Aerospace Color Palette ── */
      colors: {
        navy: {
          950: '#020617',
          900: '#0a0e27',
          800: '#0f1535',
          700: '#141c42',
          600: '#1a2550',
        },
        electric: {
          DEFAULT: '#00b4ff',
          50: '#e6f7ff',
          100: '#b3e7ff',
          200: '#80d7ff',
          300: '#4dc7ff',
          400: '#1ab7ff',
          500: '#00b4ff',
          600: '#0090cc',
          700: '#006c99',
          800: '#004866',
          900: '#002433',
        },
        gold: {
          DEFAULT: '#d4a843',
          50: '#fdf8eb',
          100: '#f9edc7',
          200: '#f3d98f',
          300: '#edc557',
          400: '#d4a843',
          500: '#b8922e',
          600: '#957523',
          700: '#72581a',
          800: '#4f3c12',
          900: '#2c2009',
        },
        cyber: {
          green: '#00ff88',
          red: '#ff3366',
          purple: '#9b30ff',
        },
      },

      /* ── Typography ── */
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },

      /* ── Animations ── */
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'radar-sweep': 'radarSweep 4s linear infinite',
        'hud-scan': 'hudScan 3s ease-in-out infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'counter-pulse': 'counterPulse 2s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,180,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0,180,255,0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        hudScan: {
          '0%': { opacity: '0.3', transform: 'translateY(0)' },
          '50%': { opacity: '1', transform: 'translateY(-5px)' },
          '100%': { opacity: '0.3', transform: 'translateY(0)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(0,180,255,0.3)' },
          '50%': { borderColor: 'rgba(0,180,255,0.8)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        counterPulse: {
          '0%, 100%': { textShadow: '0 0 10px rgba(0,180,255,0.5)' },
          '50%': { textShadow: '0 0 25px rgba(0,180,255,0.9)' },
        },
      },

      /* ── Backdrop Blur ── */
      backdropBlur: {
        xs: '2px',
      },

      /* ── Box Shadow ── */
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0,180,255,0.3)',
        'glow-md': '0 0 30px rgba(0,180,255,0.4)',
        'glow-lg': '0 0 50px rgba(0,180,255,0.5)',
        'glow-gold': '0 0 30px rgba(212,168,67,0.4)',
        'inner-glow': 'inset 0 0 30px rgba(0,180,255,0.1)',
      },
    },
  },
  plugins: [],
};
