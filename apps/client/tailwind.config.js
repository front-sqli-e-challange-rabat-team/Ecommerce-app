/** @type {import('tailwindcss').Config} */
import config from '@repo/tailwind-config/tailwind.config';
export default {
  content: [
    'src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ui/src/**/*.{js,jsx,ts,tsx}',
  ],
  ...config,
};
