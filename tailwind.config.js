/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#07090e",
        card: {
          DEFAULT: "rgba(15, 20, 32, 0.75)",
          hover: "rgba(22, 29, 47, 0.9)",
          solid: "#0f1420",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(0, 210, 255, 0.3)",
        },
        accent: {
          cyan: "#00d2ff",
          blue: "#3a7bd5",
          purple: "#9333ea",
          emerald: "#10b981",
          amber: "#f59e0b",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "sans-serif"],
        display: ['"Plus Jakarta Sans"', "sans-serif"],
        mono: ['"Fira Code"', "monospace"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      boxShadow: {
        glow: "0 0 30px -5px rgba(0, 210, 255, 0.25)",
        "glow-purple": "0 0 30px -5px rgba(147, 51, 234, 0.25)",
        "glow-emerald": "0 0 30px -5px rgba(16, 185, 129, 0.25)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
};
