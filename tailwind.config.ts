import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Samsung One UI Blue Accent
        primary: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#1E88E5', // Main Samsung Blue
          600: '#1976D2',
          700: '#1565C0',
          800: '#0D47A1',
          900: '#0A3D91',
        },
        // Semantic colors
        success: {
          DEFAULT: '#4CAF50',
          light: '#81C784',
          dark: '#388E3C',
        },
        warning: {
          DEFAULT: '#FF9800',
          light: '#FFB74D',
          dark: '#F57C00',
        },
        error: {
          DEFAULT: '#F44336',
          light: '#E57373',
          dark: '#D32F2F',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'oneui-title': ['clamp(2rem, 5vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'oneui-subtitle': ['clamp(1.25rem, 3vw, 1.75rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'oneui-heading': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'oneui-body': ['1rem', { lineHeight: '1.6' }],
        'oneui-caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      borderRadius: {
        'oneui-sm': '12px',
        'oneui-md': '16px',
        'oneui-lg': '20px',
        'oneui-xl': '24px',
      },
      boxShadow: {
        'oneui-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'oneui-md': '0 4px 6px -1px rgba(0, 0, 0, 0.08)',
        'oneui-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'oneui-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        'oneui-xs': '0.5rem',
        'oneui-sm': '1rem',
        'oneui-md': '1.5rem',
        'oneui-lg': '2rem',
        'oneui-xl': '3rem',
        'oneui-2xl': '4rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
