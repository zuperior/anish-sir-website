import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        krona: ["var(--font-krona-one)"],
        geist: ["var(--font-geist-sans)"],
      },
    },
  },
  plugins: [],
};

export default config;
