import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: "#ffff00",
        grey: {
          50: "#e6e6e6",
          100: "#a9a9a9",
        },
      },
      screens: {
        md: "600px",
        lg: "1060px",
      },
    },
  },
  plugins: [],
};
export default config;
