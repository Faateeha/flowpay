/* eslint-disable @typescript-eslint/no-unused-vars */
import type {Config} from "tailwindcss";

const config = {
    darkMode: ["class"],
    content : [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "./constants/**/*.{ts,tsx}"
    ],
    prefix: "",
    theme  : {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px"
            },
        }
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
            }
        }
    }
}