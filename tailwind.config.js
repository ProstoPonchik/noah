module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktopxs: "1440px",
      desktop: "1920px",
      qhd: "2560px",
    },
    fontFamily: {
      ttnorms: ["var(--font-ttnorms)"],
      inter: ["var(--font-inter)"],
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        header: "0 9px 41px 0 rgba(37, 36, 36, 0.05)",
        firstBlockPersonCard: "0px 18px 41px 0px rgba(37, 36, 36, 0.10);",
      },
    },
  },
  plugins: [],
};
