module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      aspectRatio: {
        "1/2": "1 / 2",
      },
    },
  },
  plugins: [require("daisyui")],
};
