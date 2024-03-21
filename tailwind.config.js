/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      const navLinks = {
        ".nav-link": {
          padding: "0.2em 0.25em",
          borderRadius: "0.25em",
          transition: "background 1s ease",
        },
      };
      addComponents(navLinks);
    },
  ],
};
