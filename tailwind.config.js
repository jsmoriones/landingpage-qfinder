/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "azul": "#4B9AF6",
        "verdeOscuro": "#048C22",
        "verdeClaro": "#13BA6A",
        "azulMyClaro": "#84B6F4",
        "purpuraAzul": "#271E4A",
        "azulAgua": "#70C8FA4A",
        "rojo": "#CA0000",
        "grisTrasparente": "rgba(242,242,242, 53%)",
        "grisTexto": "#585757"
      },
      backgroundImage: {
        'slide1': "linear-gradient(90deg, #84B6F4 -10%, transparent 90%), url('images/slide-1.jpg')",
        'bgServicios': "linear-gradient(rgba(0, 117, 255, 17%), rgba(0, 117, 255, 17%)), url('images/bg-servicios.png')"
      }
    },
  },
  plugins: []
}

