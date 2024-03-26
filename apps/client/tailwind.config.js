/** @type {import('tailwindcss').Config} */
import config from "@repo/tailwind-config/tailwind.config";
export default {
  ...config,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [...config.plugins, require("daisyui")],
  daisyui: {
    ...config.daisyui,
    themes:["dark", "nord"],
    base: true,
    styled: true,
    utils: true,
    prefix:'',
    logs:true,
    themeRoot: ":root"
  }
};
