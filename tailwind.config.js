/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: "var(--color-linen)",
        sand: "var(--color-sand)",
        ink: "var(--color-ink)",
        graphite: "var(--color-graphite)",
        graphiteHover: "var(--color-graphite-hover)",
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
        },
      },
    },
  },
  plugins: [],
}
