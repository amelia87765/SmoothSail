module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
      'fade-in': 'fadeIn 0.8s ease-out forwards',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
      fontFamily: {
        optima: ['"Optima"', 'sans-serif'],
      },
      colors: {
        color_bg_top: '#1A280A',
        color_bg_mid: '#46351C',
        red: '#FF4F23',
        light_blue: '#C3D0E1',
        blue: '#477F9C',
        yellow: '#9E9626',
        grey: '#272B28',
        black: '#171918',
        silver: '#8B968A',
        artist_bg: '#8B968A',
        brown: '#46351C',
        partners_bg: '#C3D0E1',

      },
    },
  },
  plugins: [],
}
