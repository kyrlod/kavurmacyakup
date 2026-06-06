import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9922A',
        'gold-light': '#E8B84B',
        amber: '#F5A623',
        dark: '#0A0705',
        'dark-2': '#120D08',
        'dark-3': '#1C1410',
        'dark-4': '#2A1F14',
        'dark-5': '#3D2E1E',
        brown: '#5C3D1E',
        cream: '#F2E8D5',
        'cream-dark': '#D4C4A0',
        muted: '#8A7560',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
