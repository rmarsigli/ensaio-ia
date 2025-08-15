/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        'accent-blue': 'var(--color-accent-blue)',
        'accent-pink': 'var(--color-accent-pink)',
        'accent-primary': 'var(--color-accent-primary)',
        'accent-secondary': 'var(--color-accent-secondary)',
      },
      animation: {
        'fade-in': 'fade-in 1.2s cubic-bezier(.4,0,.2,1) both',
        'pulse-cta': 'pulse-cta 2.2s infinite cubic-bezier(.4,0,.2,1)',
        'pulse-slow': 'pulse-slow 4.5s infinite cubic-bezier(.4,0,.2,1)',
        'pulse-glow': 'pulse-glow 2s infinite ease-in-out',
      },
      keyframes: {
        'fade-in': {
          'from': { opacity: '0', transform: 'translateY(32px)' },
          'to': { opacity: '1', transform: 'none' },
        },
        'pulse-cta': {
          '0%, 100%': { 
            boxShadow: '0 0 24px var(--color-accent-pink), 0 0 48px var(--color-accent-blue)' 
          },
          '50%': { 
            boxShadow: '0 0 40px var(--color-accent-blue), 0 0 80px var(--color-accent-pink)' 
          },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.18' },
          '50%': { opacity: '0.28' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 32px var(--color-accent-blue)' 
          },
          '50%': { 
            boxShadow: '0 0 48px var(--color-accent-blue), 0 0 64px var(--color-accent-pink)' 
          },
        },
      },
    },
  },
  plugins: [],
}
