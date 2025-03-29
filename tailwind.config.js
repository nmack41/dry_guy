/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#A5E1E6", // light blue
          DEFAULT: "#62C6D4", // medium blue
          dark: "#2E8899", // dark blue
        },
        secondary: {
          light: "#B8E8D9", // seafoam green light
          DEFAULT: "#7ECBAF", // seafoam green
          dark: "#4AA987", // seafoam green dark
        },
        accent: {
          light: "#FFE9A8", // pale yellow
          DEFAULT: "#FFDA7A", // medium yellow
          dark: "#EFBB4C", // dark yellow
        },
        background: "#F5F9FA", // very light blue-gray
        card: "#FFFFFF",
        text: {
          primary: "#2D3748",
          secondary: "#4A5568",
          light: "#718096",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 14px 0 rgba(0, 0, 0, 0.05)",
        medium: "0 6px 20px 0 rgba(0, 0, 0, 0.08)",
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      display: ["Quicksand", "sans-serif"],
    },
  },
  plugins: [],
};
