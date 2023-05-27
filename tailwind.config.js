/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3fafa",
          100: "#d5f2f0",
          200: "#abe4e0",
          300: "#79cfcc",
          400: "#4db4b4",
          500: "#38a3a5",
          600: "#27767a",
          700: "#235f62",
          800: "#204c4f",
          900: "#1e4143",
          950: "#0c2527",
        },
      },
    },
  },
  plugins: [],
};
