import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // This is critical for the theme toggle to work
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66abf9',
          400: '#338ff7',
          500: '#0073f5',
          600: '#005cc4',
          700: '#004593',
          800: '#002e62',
          900: '#001731',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#334155',
            maxWidth: '65ch',
            p: {
              lineHeight: '1.75',
            },
            h1: {
              fontWeight: '600',
              letterSpacing: '-0.025em',
            },
            h2: {
              fontWeight: '600',
              letterSpacing: '-0.025em',
            },
            h3: {
              fontWeight: '500',
              letterSpacing: '-0.02em',
            },
            'h4,h5,h6': {
              fontWeight: '500',
              letterSpacing: '-0.015em',
            },
            a: {
              fontWeight: '500',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
              },
            },
            blockquote: {
              fontStyle: 'normal',
              fontWeight: '400',
              color: '#475569',
            },
            code: {
              fontWeight: '400',
            },
          },
        },
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.15', letterSpacing: '-0.03em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.15', letterSpacing: '-0.03em' }],
        'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        'display-xs': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      lineHeight: {
        'extra-tight': '1.15',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '1.75',
        'extra-loose': '2',
      },
      letterSpacing: {
        'extra-tight': '-0.03em',
        tighter: '-0.025em',
        tight: '-0.015em',
        normal: '0',
        wide: '0.015em',
        wider: '0.025em',
        widest: '0.035em',
      },
    },
  },
  plugins: [typographyPlugin],
};
