import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // <--- SEM O 'src/'
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // <--- SEM O 'src/'
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",      // <--- SEM O 'src/'
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0e0e",
        card: "#1a1c1c",
        primary: "#6a7662",
        accent: "#c7d1c1",
        textPrimary: "#f6f3e0",
        textSecondary: "#a8b1b1",
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle, rgba(13,14,14,0.5) 0%, rgba(13,14,14,0.95) 100%)',
      }
    },
  },
  plugins: [],
};
export default config;