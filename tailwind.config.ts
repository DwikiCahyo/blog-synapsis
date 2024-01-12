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
        background: "rgb(var(--background))",
        primary: "rgb(var(--primary))",
        card: {
          primary: "rgb(var(--card-primary))",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
export default config;
