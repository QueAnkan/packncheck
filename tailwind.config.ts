import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(-45deg, #FF3636 0%, #FEE157 12.5%, #FFFF55 25%, #F8F8CA 37.5%, #3FDC9A 50%, #49FFFF 62.5%, #3C3CFF 75%, #FF63FF 87.5%, #FFB5D8 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    },
    opacity: {
      '50': '0.5',
    },

  },
},
  plugins: [],
};
export default config;
