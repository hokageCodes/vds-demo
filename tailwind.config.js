/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
        primary: "#FFFFFF",      
        accent: "#FB7B16",      
        foreground: "#292119", 
        muted: "#CBD5E1",        
        accentFg: "#0B1C2D",     
      },

      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.6rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.75rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
      },

      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },

      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.04)",
        md: "0 4px 10px rgba(0,0,0,0.08)",
        lg: "0 10px 25px rgba(0,0,0,0.12)",
        soft: "0 8px 30px rgba(0,0,0,0.06)",
      },

      spacing: {
        section: "6rem",
        container: "7rem",
      },
    },
  },
  plugins: [],
};
