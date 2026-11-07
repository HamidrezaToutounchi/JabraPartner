/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jabra: {
          yellow: "#FFD100",
          yellowHover: "#E6BC00",
          dark: "#0F172A",
          anthracite: "#111827",
          card: "#1F2937",
          blue: "#0284C7",
          blueDark: "#0369A1",
        },
      },
    },
  },
  plugins: [],
};
