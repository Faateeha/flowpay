import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
            fill: {
                1: "rgba(0, 0, 0, 0.05)",
            },
            bankGradient: "#00C9A7",
            indigo: {
                100: "#E0E8F9",
                200: "#BED0F7",
            },
            success: {
                25: "#F6FEFA",
                50: "#ECFDF5",
                100: "#D1FADF",
                600: "#12B76A",
                700: "#039855",
                900: "#027A48",

            },
            pink: {
                25: "#FFF0F6",
                100: "#FFD6E8",
                500: "#FF3B82",
                600: "#E0246D",
                700: "#C81E5B",
                900: "#881337",
            },
            blue: {
                25: "#F5F8FF",
                100: "#DBE4FF",
                500: "#4263EB",
                600: "#364FC7",
                700: "#2B3EB1",
                900: "#1A2C6E",
            }, 
            sky: {
                1: "#E0F2FE",
            },
            black: {
                1: "#101828",
                2: "#475467",
            },
            gray: {
                25: "#FCFCFD",
                200: "#EAECF0",
                300: "#D0D5DD",
                500: ""
            },
        },
      backgroundImage: {
        "bank-gradient": "linear-gradient(90deg, #0179FE 0%, #4893FF 100%)",
        "gradient-mesh": "url('/icons/gradient-mesh.svg')",
        "bank-green-gradient":
          "linear-gradient(90deg, #01797A 0%, #489399 100%)",
      },
      boxShadow: {
        form: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        chart:
          "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
        profile:
          "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        creditCard: "8px 10px 16px 0px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        "ibm-plex-serif": "var(--font-ibm-plex-serif)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;