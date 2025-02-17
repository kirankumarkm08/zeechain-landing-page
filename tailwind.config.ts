import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
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
    fontSize: {
      "12": "12px",
      "14": "14px",
      "16": "16px",
      "18": "18px",
      "20": "20px",
      "22": "22px",
      "24": "24px",
      "26": "26px",
      "28": "28px",
      "30": "30px",
      "32": "32px",
      "34": "34px",
      "36": "36px",
      "38": "38px",
      "40": "40px",
      "42": "42px",
      "44": "44px",
      "46": "46px",
      "48": "48px",
      "50": "50px",
      "52": "52px",
      "54": "54px",
      "56": "56px",
      "58": "58px",
      "60": "60px",
      "62": "62px",
      "64": "64px",
    },
    extend: {
      colors: {
        primary: "#09090A",
        lightgray: "rgba(255, 255, 255, 0.15)",
        white: {
          "50": "#FFFFFF",
          "100": "#EDF1FD",
          "200": "#EFEDFD",
          "300": "#F6F6F7",
          "400": "#EDEDED",
          "500": "#ECECEC",
          "600": "#D9D9D9",
          "700": "#C8C8C8",
          "800": "#999999",
        },
        purple: {
          "50": "#eff0fe",
          "100": "#e0e0fc",
          "200": "#c1c2f9",
          "300": "#a1a3f7",
          "400": "#8285f4",
          "500": "#6366f1",
          "600": "#4f52c1",
          "700": "#3b3d91",
          "800": "#282960",
          "900": "#141430",
        },
      },
      fontFamily: {
        "clash-display": ["var(--font-clash-display)"],
        inter: ["var(--font-inter)"],
      },
      borderColor: {
        lightgray: "rgba(255, 255, 255, 0.15)",
      },
      backgroundImage: {
        "linear-gradient":
          "linear-gradient(to bottom, rgba(237, 237, 237, 1) 0%, rgba(237, 237, 237, 1) 50%, rgba(237, 237, 237, 0.41) 100%)",
        "text-top-buttom-linear": "linear-gradient(to right, #FFFFFF, #999999)",

        "Section-title-gradient":
          "linear-gradient(180deg, #EDEDED 0%, #EDEDED 0.02%, rgba(237, 237, 237, 0.41) 154.75%)",

        background_mesh_gradient:
          "url('/assets/background-assets/Background_Mesh_gradient.svg')",
        Newsletter_bg: "url('/assets/background-assets/newsletter_bg1.png')",
        background_mesh:
          "url('/assets/background-assets/Background_gradient.svg')",
        background_dot: "url('/assets/background-assets/bg-dots.png')",
        ellipse: "url('/assets/background-assets/Ellipse.svg')",
      },
      backgroundColor: {
        "primary-badge": "rgba(255, 255, 255, 0.09)",
        card_background: "#09090A",
        email_card: "#222631",
        lightgray: "rgba(255, 255, 255, 0.15)",
      },
      lineHeight: {
        "16": "16px",
        "22": "22px",
        "28": "28px",
        "32": "32px",
        "41": "41px",
        "60": "60px",
        "70": "70px",
        "166": "166%",
      },
      letterSpacing: {
        "extra-tight": "-3%",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
