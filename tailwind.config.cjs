/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Instrument Sans"', // Add Instrument Sans as the primary font
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          '"Segoe UI"',
          "system-ui",
          "sans-serif",
        ],
        mono: ['"SF Mono"', "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};
