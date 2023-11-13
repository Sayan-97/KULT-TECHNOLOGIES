import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // "container" class
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "6rem",
      },
    },
    extend: {
      // Colors
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
      },
      // Background Gradient
      backgroundImage: {
        "primary-gradient": "var(--primary-gradient)",
      },
      // Screens
      screens: {
        sm: "375",
      },
    },
  },
  plugins: [],
};
export default config;
