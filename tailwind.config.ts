import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontWeight: {
      light: "200",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
    extend: {
      colors: {
        primary: "#000212",
        white: {
          "50": "#fdfdfd",
          "100": "#fbfbfb",
          "200": "#f8f8f8",
          "300": "#f4f4f4",
          "400": "#f1f1f1",
          "500": "#ededed",
          "600": "#ECECEC",
          "700": "#EFEDFD",
          "800": "#5f5f5f",
          "900": "#FFFFFF",
        },
        purple: {
          "50": "#f0eaf7",
          "100": "#e0d5ef",
          "200": "#c2acde",
          "300": "#a382ce",
          "400": "#8559bd",
          "500": "#662fad",
          "600": "#52268a",
          "700": "#3d1c68",
          "800": "#291345",
          "900": "#140923",
        },
      },
      fontSize: {
        "14": "14px",
        "16": "16px",
        "18": "18px",
        "24": "24px",
        "32": "32px",
        "40": "40px",
        "64": "64px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      borderColor: {
        lightgray: "rgba(255, 255, 255, 0.15)",
      },

      backgroundImage: {
        "linear-gradient":
          "linear-gradient(to bottom, rgba(237, 237, 237, 1) 0%, rgba(237, 237, 237, 1) 50%, rgba(237, 237, 237, 0.41) 100%)",
        "text-top-buttom-linear": "linear-gradient(to right, #FFFFFF, #999999)",
        background_mesh_gradient:
          "url('/assets/background-assets/Background_Mesh_gradient.svg')",
        Newsletter_bg: "url('/assets/background-assets/newsletter_bg1.png')",
        background_mesh:
          "url('/assets/background-assets/Background_gradient copy.svg')",
      },
      backgroundColor: {
        "primary-badge": "rgba(255, 255, 255, 0.09)",
        card_background: "#0A0C1B",
      },
      lineHeight: {
        "10": "10px",
        "20": "20px",
        "30": "30px",
        "40": "40px",
        "50": "50px",
        "60": "60",
        "70": "70",
      },
      letterSpacing: {
        "extra-tight": "-3%",
      },
    },
  },
  plugins: [],
} satisfies Config;
