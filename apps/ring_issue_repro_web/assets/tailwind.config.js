const colors = require('tailwindcss/colors')
const pxToRem = (px, base = 16) => `${px / base}rem`

module.exports = {
  content: [
    '../lib/**/*.html.eex',
    '../lib/**/*.html.leex',
    '../lib/**/*.html.heex',
    '../lib/**/*.ex',
    './js/**/*.js',
    './js/**/*.css',
  ],
  variants: {
    extend: {
      ringColor: ['focus', 'focus-visible', 'group-focus', 'group-focus-visible'],
      ringWidth: ['focus', 'focus-visible', 'group-focus', 'group-focus-visible'],
      ringOffset: ['focus', 'focus-visible', 'group-focus', 'group-focus-visible'],
      outlineNone: ['focus', 'focus-visible', 'group-focus', 'group-focus-visible'],
      border: ['focus', 'focus-visible', 'group-focus', 'group-focus-visible'],
    },
  },
  theme: {
    screens: {
      xxs: '360px',
      xs: '468px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      sans: [
        'Inter var',
        'canada-type-gibson',
        'urw-form',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'Crimson Text',
        'miller-text',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      banner: ['miller-banner', '"Times New Roman"', 'serif'],
    },
    extend: {
      colors: {
        'primary-color': colors.red,
        'focus-color': colors.indigo,
        ink: '#1C1C1C',
        graphite: '#4A494A',
        ash: '#838383',
        envelope: '#F0E0D7',
        repro: '#F1F1ED',
        cardboard: '#FBF6EB',
        newsprint: '#FFF6E2',
        wrap: '#FDF8F7',
        tissue: '#FFFDFA',
        marker: '#FFDCCD',
        'marker-120': '#FFC4B7',
        highlighter: '#FAFC8D',
        note: '#D1DED3',
        warning: '#D92F24',
        'warning-80': '#FA493D',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.red,
        yellow: colors.yellow,
        green: colors.green,
        blue: colors.blue,
        indigo: colors.indigo,
        teal: colors.teal,
        amber: colors.amber,
        orange: colors.orange,
        'sunset-orange': {
          100: '#FFEDEC',
          200: '#FFD2D0',
          300: '#FFB6B3',
          400: '#FF807B',
          500: '#FF4942',
          600: '#E6423B',
          700: '#992C28',
          800: '#73211E',
          900: '#4D1614',
        },
        'aqua-squeeze': {
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#F5FAFA',
          600: '#EBF5F5',
          700: '#E1EFEF',
          800: '#D7EAEA',
          900: '#CDE5E5',
        },
      },
      fontSize: {
        'section-heading': ['1.75rem', { lineHeight: '2.5rem' }],
      },
      spacing: {
        13: pxToRem(52),
        15: pxToRem(60),
        17: pxToRem(68),
        18: pxToRem(72),
        22: pxToRem(88),
        23: pxToRem(92),
        24: pxToRem(96),
        25: pxToRem(100),
        29: pxToRem(116),
        30: pxToRem(120),
        35: pxToRem(140),
        87: pxToRem(348),
      },
      margin: {
        13: pxToRem(52),
        19: pxToRem(76),
        21: pxToRem(84),
        23: pxToRem(92),
        29: pxToRem(116),
      },
      height: {
        26: pxToRem(104),
        29: pxToRem(116),
        31: pxToRem(124),
        129: pxToRem(516),
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
      },
      width: {
        17: pxToRem(68),
        29: pxToRem(116),
        140: pxToRem(560),
        '1/5': `${(1 / 5) * 100}%`,
        '2/5': `${(2 / 5) * 100}%`,
        '3/5': `${(3 / 5) * 100}%`,
        '3/5': `${(4 / 5) * 100}%`,
        '4/5': `${(5 / 9) * 100}%`,
        '1/9': `${(1 / 9) * 100}%`,
        '2/9': `${(2 / 9) * 100}%`,
        '3/9': `${(3 / 9) * 100}%`,
        '3/9': `${(4 / 9) * 100}%`,
        '4/9': `${(5 / 9) * 100}%`,
        '5/9': `${(6 / 9) * 100}%`,
        '6/9': `${(7 / 9) * 100}%`,
        '7/9': `${(8 / 9) * 100}%`,
        '8/12': `${(1 / 12) * 100}%`,
        '2/12': `${(2 / 12) * 100}%`,
        '3/12': `${(3 / 12) * 100}%`,
        '4/12': `${(4 / 12) * 100}%`,
        '5/12': `${(5 / 12) * 100}%`,
        '6/12': `${(6 / 12) * 100}%`,
        '7/12': `${(7 / 12) * 100}%`,
        '8/12': `${(8 / 12) * 100}%`,
        '9/12': `${(9 / 12) * 100}%`,
        '10/12': `${(10 / 12) * 100}%`,
        '11/12': `${(11 / 12) * 100}%`,
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        12: 'repeat(12, minmax(0, 1fr))',
      },
      leading: {
        11: '44px',
        12: '48px',
      },
      zIndex: {
        5: '5',
        15: '15',
        25: '25',
        35: '35',
        45: '45',
        55: '55',
        60: '60',
      },
      maxWidth: {
        300: '18.75rem',
        xxs: '15.25rem',
      },
      cursor: {
        grab: 'grab',
      },
      boxShadow: {
        'outline-soft': '0px 0px 20px 2px rgba(0, 0, 0, 0.25)',
        'booklist-panel': '0px 24px 48px rgba(0, 0, 0, 0.1)',
        modal: '0px 24px 48px rgba(0, 0, 0, 0.05)',
      },
      scale: {
        115: '1.15',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-debug-screens'),
  ],
}