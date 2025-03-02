/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    darkMode: "class",
    extend: {
      animation: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "slide-in-left":
          "slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
      },
      keyframes: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "slide-in-left": {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "0%": {
            transform: "translateX(-1000px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
