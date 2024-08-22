/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "azul": "#4B9AF6",
        "verdeOscuro": "#048C22",
        "verdeClaro": "#13BA6A",
        "azulMyClaro": "#84B6F4"
      },
      backgroundImage: {
        'slide1': "linear-gradient(90deg, #84B6F4 -10%, transparent 90%), url('images/slide-1.jpg')",
      }
    },
  },
  plugins: [],
}

