import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // SaaS Primary Colors
        primary: {
          navy: '#0F172A',
          indigo: '#4F46E5',
          violet: '#7C3AED',
          'deep-blue': '#1E3A8A',
          'electric-purple': '#A855F7',
        },
        // Accent Colors
        accent: {
          'soft-blue': '#0EA5E9',
          'electric-blue': '#06B6D4',
        },
        // Legacy colors (keep for compatibility)
        rose: {
          soft: '#ff6b9d',
          light: '#ffb3c6',
        },
        lavender: {
          DEFAULT: '#c084fc',
          light: '#e9d5ff',
        },
        babyblue: {
          DEFAULT: '#60a5fa',
          light: '#bfdbfe',
        },
        warm: {
          white: '#fafafa',
          gray: '#f3f4f6',
        },
        slate: {
          text: '#1f2937',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scale-pulse': 'scalePulse 0.6s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'checkbox-pulse': 'checkboxPulse 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(79, 70, 229, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(168, 85, 247, 0.4)' },
        },
        scalePulse: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        checkboxPulse: {
          '0%': { transform: 'scale(0.8)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(0, 0, 0, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.04)',
        glow: '0 0 40px -10px rgba(79, 70, 229, 0.3), 0 0 40px -10px rgba(168, 85, 247, 0.2)',
        'glow-indigo': '0 0 40px -10px rgba(79, 70, 229, 0.4)',
        'glow-violet': '0 0 40px -10px rgba(168, 85, 247, 0.4)',
        'glow-green': '0 0 40px -10px rgba(34, 197, 94, 0.4)',
        'glow-yellow': '0 0 40px -10px rgba(234, 179, 8, 0.3)',
        'glow-rose': '0 0 40px -10px rgba(255, 107, 157, 0.4)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
      },
      backgroundImage: {
        'gradient-saas': 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 25%, #4F46E5 50%, #7C3AED 75%, #1E3A8A 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #312E81 100%)',
        'gradient-header': 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #1e293b 100%)',
        'gradient-hero-dark': 'linear-gradient(135deg, #0F172A 0%, #1e3a5f 30%, #312e81 60%, #1e293b 100%)',
        'gradient-score-high': 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)',
        'gradient-score-mid': 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
        'gradient-score-low': 'linear-gradient(135deg, #f43f5e 0%, #ff6b9d 100%)',
        'gradient-button': 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
