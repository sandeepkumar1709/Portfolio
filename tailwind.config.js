/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // <alpha-value> is what lets `bg-linen/80` and `text-graphite/70`
        // compile at all. Without it Tailwind silently drops every
        // opacity-modified utility built on these tokens.
        linen: "rgb(var(--color-linen) / <alpha-value>)",
        sand: "rgb(var(--color-sand) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        graphite: "rgb(var(--color-graphite) / <alpha-value>)",
        graphiteHover: "rgb(var(--color-graphite-hover) / <alpha-value>)",
        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          hover: "rgb(var(--color-accent-hover) / <alpha-value>)",
        },
      },
      fontFamily: {
        // Playfair was previously applied through an arbitrary value written
        // with HTML-escaped quotes, which never compiled. Real tokens instead.
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        serif: ['"Playfair Display"', "Georgia", "serif"],
      },
      fontSize: {
        // The section eyebrow label, previously 11 hand-written copies.
        eyebrow: ["0.6875rem", { letterSpacing: "0.32em", lineHeight: "1.4" }],
      },
      boxShadow: {
        // The old inline shadow was 2% black at zero blur, i.e. invisible,
        // then jumped straight to shadow-md on hover.
        card: "0 1px 2px rgb(var(--color-graphite) / 0.06)",
        "card-hover": "0 8px 24px rgb(var(--color-graphite) / 0.10)",
      },
    },
  },
  plugins: [],
}
