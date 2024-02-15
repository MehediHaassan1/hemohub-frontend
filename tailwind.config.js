/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        txt: "hsl(var(--color-text))",
        bkg: "hsl(var(--color-background))",
        primary: "hsl(var(--color-primary))",
        secondary: "hsl(var(--color-secondary))",
        accent: "hsl(var(--color-accent))",
      }
    },
  },
  plugins: [require("daisyui")],
}

