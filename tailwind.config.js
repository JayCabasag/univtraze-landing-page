/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
      'serif': ['Poppins', 'ui-serif', 'Georgia'],
      'mono': ['Poppins', 'ui-monospace', 'SFMono-Regular'],
      'display': ['Poppins', 'Oswald'],
      'body': ['Poppins', '"Open Sans"'],
    },
    textColor: {
      'primary': '#364D39',
    },
  },
  plugins: [],
}