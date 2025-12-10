/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'aero-blue': '#1d4ed8',
        'aero-cyan': '#22d3ee',
        'aero-violet': '#7c3aed',
        'aero-accent': '#38bdf8',
        'aero-accent-dark': '#0ea5e9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        'aero': '18px',
      },
      boxShadow: {
        'aero': '0 20px 45px rgba(0,0,0,0.45)',
        'aero-glow': '0 0 30px rgba(56, 189, 248, 0.3)',
      },
    },
  },
  plugins: [],
}

