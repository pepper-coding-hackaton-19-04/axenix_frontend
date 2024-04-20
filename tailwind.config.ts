import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "x-orange": '#F37022',
      "x-black": '#080407',
      "x-white": '#EAE8E4',
      "x-purple": "#5F308C",
      'x-light-orange': '#EB9B6C'
    }
  },
  plugins: [],
};
export default config;
