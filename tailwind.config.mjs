/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Accent drawn from the logo blues; amber is the logo orange, garnish only.
        accent: {
          DEFAULT: '#2563eb',
          hover: '#1d4ed8',
          tint: '#eff6ff',
        },
        ink: '#0f172a',
        // Legacy palette — only inner pages not yet redesigned. Remove in slice 3.
        primary: '#667eea',
        secondary: '#764ba2',
      },
      backgroundImage: {
        // Legacy gradients — remove in slice 3.
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      fontFamily: {
        sans: [
          'Geist Variable',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'Geist Mono Variable',
          'ui-monospace',
          'SF Mono',
          'Cascadia Code',
          'monospace',
        ],
      },
      fontSize: {
        h1: ['clamp(2.5rem, 5vw + 1rem, 4.25rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        h2: ['clamp(1.875rem, 3vw + 0.5rem, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        h3: ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      maxWidth: {
        container: '80rem',
      },
      transitionDuration: {
        fast: '200ms',
        normal: '300ms',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
