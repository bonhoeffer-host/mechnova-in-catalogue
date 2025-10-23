/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mechnova-blue': {
          DEFAULT: '#0072ce',
          dark: '#005ba3',
          light: '#0090ff',
        },
        'mechnova-light': {
          DEFAULT: '#cbe7ff',
          light: '#E6F2FB',
        }
      },
    },
  },
  plugins: [],
};

export default config; 
 