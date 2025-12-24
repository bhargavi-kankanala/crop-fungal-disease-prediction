/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D5A27',
          light: '#4A7A44',
          dark: '#1B3B17',
        },
        secondary: {
          DEFAULT: '#1E88E5',
          light: '#64B5F6',
          dark: '#1565C0',
        },
        accent: {
          DEFAULT: '#FFC107',
          light: '#FFD54F',
          dark: '#FFA000',
        },
        info: {
          DEFAULT: '#0288D1',
          light: '#4FC3F7',
          dark: '#01579B',
        },
        success: {
          DEFAULT: '#2E7D32',
          light: '#4CAF50',
          dark: '#1B5E20',
        },
        warning: {
          DEFAULT: '#F57C00',
          light: '#FFB74D',
          dark: '#E65100',
        },
        error: {
          DEFAULT: '#D32F2F',
          light: '#EF5350',
          dark: '#B71C1C',
        },
        'dark-text': '#1A1A1A',
        'light-text': '#4A4A4A',
        'lighter-text': '#757575',
        'light-bg': '#F8F9FA',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
      },
    },
  },
  plugins: [],
};