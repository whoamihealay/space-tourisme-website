module.exports = {
  content: [
    "./src//pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ["Barlow", "sans-serif"],
      serif: ["Bellefair", "serif"],
      sans: ["Barlow Condensed", "sans-serif"],
    },
    fontSize: {
      xs: "clamp(0.625rem, 2.5vw, 0.875rem)",
      sm: "clamp(0.75rem, 2.5vw, 1rem)",
      base: "clamp(0.938rem, 2vw, 1.125rem)",
      lg: "clamp(1rem, 2.5vw, 1.75rem)",
      xl: "clamp(1.25rem, 5vw, 2rem)",
      "2xl": "clamp(1.75rem, 3vw, 3.5rem)",
      "3xl": "clamp(3.75rem, 3vw, 6.25rem)",
      "4xl": "clamp(5rem, 10vw, 9.375rem)",
    },
    screens: {
      mobile: { max: "30em" },
      tablet: "30em",
      desktop: "64em",
    },
    extend: {
      colors: {
        dark: "#0c0e18",
        accent: "#d2d8f9",
      },
      boxShadow: {
        explore: "0 0 0 3rem hsla(0, 0%, 100%, 0.1)",
      },
    },
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
