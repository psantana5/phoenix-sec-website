/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0EF29B", // Neon green
        secondary: "#0BC6E3", // Neon blue
        dark: {
          100: "#1A1A1A",
          200: "#141414",
          300: "#0F0F0F",
          400: "#0A0A0A",
        },
        light: {
          100: "#FFFFFF",
          200: "#F5F5F5",
          300: "#E5E5E5",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cyber-grid": "linear-gradient(rgba(10, 10, 10, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 10, 10, 0.8) 1px, transparent 1px)",
      },
      backgroundSize: {
        "cyber-grid": "30px 30px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { textShadow: "0 0 5px rgba(14, 242, 155, 0.7)" },
          "100%": { textShadow: "0 0 20px rgba(14, 242, 155, 0.9), 0 0 30px rgba(11, 198, 227, 0.6)" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};