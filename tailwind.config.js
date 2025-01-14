/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}", "./index.html", "./EasyAim.html","EasyAim/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        wobble: 'wobble 1s ease-in-out infinite',
      },
      keyframes: {
        wobble: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
},
  plugins: [],
}