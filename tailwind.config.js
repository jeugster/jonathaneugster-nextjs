/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
 ],
 options: {
  keyframes: true,
 },
//  theme: {
//   extend: {
//    backgroundImage: {},
//   },
//  },
 plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
