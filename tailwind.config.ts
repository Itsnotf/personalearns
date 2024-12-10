  import type { Config } from "tailwindcss";

  export default {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        animation: {
          float: "float 4s ease-in-out infinite",
          floatReverse: "floatReverse 4s ease-in-out infinite",
          floatDiagonal: "floatDiagonal 4s ease-in-out infinite",
        },
        keyframes: {
          float: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-20px)" },
          },
          floatReverse: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(20px)" },
          },
          floatDiagonal: {
            "0%, 100%": { transform: "translate(0, 0)" },
            "50%": { transform: "translate(20px, -20px)" },
          },
        },
        colors: {
          primary: "#185BCE",
          abu: "#BABABA",
          hitam: "#2C2C2C",
        },
        boxShadow: {
          'custom-blue': '0px 5px 10px 0px rgba(16, 59, 181, 0.25)',
        },
        fontFamily: {
          poppins: ["'Poppins'", "sans-serif"],
        },
      },
    },
    plugins: [],
  } satisfies Config;
