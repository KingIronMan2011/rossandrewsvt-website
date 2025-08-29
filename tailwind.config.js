/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        gradient: "background-image, background-color",
        transform: "transform",
        opacity: "opacity",
        colors: "color, background-color, border-color",
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animation: {
        theme: "theme 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        gradient: "gradient 1s ease-in-out",
        "fade-in": "fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-in": "slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        theme: {
          "0%": { opacity: 0.2, transform: "scale(0.98)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateY(10px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
