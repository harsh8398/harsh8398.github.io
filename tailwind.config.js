const typography = require("@tailwindcss/typography")
const colors = require("tailwindcss/colors")

module.exports = {
  jit: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "emph-day": colors.pink["600"],
        "emph-night": colors.fuchsia["200"],
        "underline-day": colors.yellow["500"],
        "underline-night": colors.amber["200"],
        "bg-day": colors.slate["200"],
        "bg-night": colors.slate["900"],
        "muted-day": colors.gray["600"],
        "muted-night": colors.gray["200"],
        "primary-day": colors.slate["600"],
        "primary-night": colors.slate["200"],
      },
      fontFamily: {
        sans: ["Inter", "Helvetica", "sans-serif"],
        mono: ["Fira Code", "Courier New", "monospace"],
      },
    },
  },
  plugins: [typography],
}
