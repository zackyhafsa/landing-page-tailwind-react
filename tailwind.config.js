/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        saya: "url('bg2.jpg')",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: "nord",
    darkTheme: false,
  },
};
