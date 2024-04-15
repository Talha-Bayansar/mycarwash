import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "federal-blue": {
          "federal-blue-50": "#e6e6ef",
          "federal-blue-100": "#b2b1cd",
          "federal-blue-200": "#8c8cb5",
          "federal-blue-300": "#585793",
          "federal-blue-400": "#37367e",
          "federal-blue-500": "#05045e",
          "federal-blue-600": "#050456",
          "federal-blue-700": "#040343",
          "federal-blue-800": "#030234",
          "federal-blue-900": "#020227",
        },
        "honolulu-blue": {
          "honolulu-blue-50": "#e6f1f8",
          "honolulu-blue-100": "#b0d5e8",
          "honolulu-blue-200": "#8ac0dd",
          "honolulu-blue-300": "#54a4ce",
          "honolulu-blue-400": "#3392c5",
          "honolulu-blue-500": "#0077b6",
          "honolulu-blue-600": "#006ca6",
          "honolulu-blue-700": "#005481",
          "honolulu-blue-800": "#004164",
          "honolulu-blue-900": "#00324c",
        },
        "pacific-cyan": {
          "pacific-cyan-50": "#e6f8fb",
          "pacific-cyan-100": "#b1e8f3",
          "pacific-cyan-200": "#8bdded",
          "pacific-cyan-300": "#55cde5",
          "pacific-cyan-400": "#35c3e0",
          "pacific-cyan-500": "#02b4d8",
          "pacific-cyan-600": "#02a4c5",
          "pacific-cyan-700": "#018099",
          "pacific-cyan-800": "#016377",
          "pacific-cyan-900": "#014c5b",
        },
        "non-photo-blue": {
          "non-photo-blue-50": "#f4fcfd",
          "non-photo-blue-100": "#ddf5fa",
          "non-photo-blue-200": "#ccf1f8",
          "non-photo-blue-300": "#b5eaf4",
          "non-photo-blue-400": "#a7e6f2",
          "non-photo-blue-500": "#91e0ef",
          "non-photo-blue-600": "#84ccd9",
          "non-photo-blue-700": "#679faa",
          "non-photo-blue-800": "#507b83",
          "non-photo-blue-900": "#3d5e64",
        },
        "light-cyan": {
          "light-cyan-50": "#fafefe",
          "light-cyan-100": "#effafd",
          "light-cyan-200": "#e7f8fc",
          "light-cyan-300": "#dbf5fa",
          "light-cyan-400": "#d5f3f9",
          "light-cyan-500": "#caf0f8",
          "light-cyan-600": "#b8dae2",
          "light-cyan-700": "#8faab0",
          "light-cyan-800": "#6f8488",
          "light-cyan-900": "#556568",
        },
      },
      fontSize: {
        base: "1rem",
        lg: "1.125rem",
        xl: "1.5625rem",
        "2xl": "1.625rem",
        "3xl": "2.1875rem",
        "4xl": "2.8125rem",
        "5xl": "3.4375rem",
        "6xl": "4.0625rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
