/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        rock: ['Rock'],
        lemon: ["Lemon"]
      }
    },
  },
  plugins: [
    function({ addComponents }) {
      const navLinks = {
        '.nav-link': {
          padding: '0.2em 0.25em',
          borderRadius: '0.25em',
          transition: 'background 1s ease',
        }
      };
      addComponents(navLinks);
    }
  ],
}