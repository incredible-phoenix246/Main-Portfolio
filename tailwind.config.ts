import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // black: "#292F36",
        // darkGray: "#1A1E23",
        // turquoise: "#12F7D6",
        // lightTurquoise: "#98FAEC",
        // gray: "#43454D",
        // red: "#E54F26",
        // blue: "#0C73B8",
        // yellow: "#E7A020",
        // lightBlue: "#28A9E0",
        // white: "#F0F8FF",
        AAprimary: "#0b192f",
        AAsecondary: "#64ffda",
        AAError: "#ff6489",
        AAtertiary: "#112340",
        ResumeButtonHover: "#153040",
        MobileNavBarColor: "#112340",
        StartupBackground: "#020c1b",
      },
      fontFamily: {
        ubuntu: [`var(--font-ubuntu)`, "sans-serif"],
        ibmplex: [`var(--font-ibmplex)`, "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
