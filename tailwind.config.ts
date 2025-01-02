import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000", // Use `bg-black` for this color
          100: "#000319", // Use `bg-black-100` for this color
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
