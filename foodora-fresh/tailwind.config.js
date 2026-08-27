/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: {
          50: "#fff3f1",
          100: "#ffe5e0",
          500: "#ef5b50",
          600: "#e44a3e",
          700: "#c83b32"
        },
        ink: "#191919",
        muted: "#6f6f6f",
        cream: "#fffaf7",
        mint: "#e9f8f0"
      },
      boxShadow: {
        soft: "0 12px 40px rgba(25,25,25,.08)",
        card: "0 5px 20px rgba(25,25,25,.06)"
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-7px)" } },
        fadeUp: { "0%": { opacity: 0, transform: "translateY(10px)" }, "100%": { opacity: 1, transform: "translateY(0)" } }
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        fadeUp: "fadeUp .45s ease-out both"
      }
    }
  },
  plugins: []
};