import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      fontFamily: {
        'body': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
    },
    colors: {
      neutral: {
        'c97': "rgb(97 97 97)",
        'c66': "rgb(66 66 66)",
        'dp': "rgb(91 95 199)",
      },
      'purple': 'rgb(91 95 199)',
    },
    extend: {
      boxShadow: {
        'card': '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.14)',
      }
    },
  },
  plugins: [],
};
export default config;
