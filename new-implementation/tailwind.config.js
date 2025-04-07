/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6750A4',
          container: '#EADDFF',
          on: '#FFFFFF',
          'on-container': '#21005D',
        },
        secondary: {
          DEFAULT: '#625B71',
          container: '#E8DEF8',
          on: '#FFFFFF',
          'on-container': '#1D192B',
        },
        tertiary: {
          DEFAULT: '#7D5260',
          container: '#FFD8E4',
          on: '#FFFFFF',
          'on-container': '#31111D',
        },
        error: {
          DEFAULT: '#B3261E',
          container: '#F9DEDC',
          on: '#FFFFFF',
          'on-container': '#410E0B',
        },
        background: '#FFFBFE',
        surface: {
          DEFAULT: '#FFFBFE',
          variant: '#E7E0EC',
        },
        'on-background': '#1C1B1F',
        'on-surface': {
          DEFAULT: '#1C1B1F',
          variant: '#49454F',
        },
        outline: '#79747E',
        shadow: '#000000',
        'conflict-1': '#FFA500', // Orange - Finances/Comm
        'conflict-2': '#DC143C', // Crimson - Deposit Advance
        'conflict-3': '#20B2AA', // LightSeaGreen - Refund Dispute
        'conflict-4': '#9370DB', // MediumPurple - Cabinet Access
      },
    },
  },
  plugins: [],
}