/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "space-navy": "#0A0A23",
        "star-gray": "#D1D5DB",
        "star-gold": "#FFD700",
        "neon-blue": "#3B82F6",
        "cool-gray": "#D1D5DB",
        "pure-white": "#FFFFFF",
        "neon-blue": "#3B82F6",
      },
    },
  },
  plugins: [],
};
