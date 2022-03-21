module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'main': 'linear-gradient(55deg, #0250c5 0%, #d43f8d 100%)',
        'sub': 'linear-gradient(55deg, #d43f8d 0%, #0250c5 100%)',
        'hero': "url('/heroarea.jpg')",
        'reason': "url('/video.jpg')",
        'map': "url('/map.png')",
        'footer': "url('/footer.png')"
      },
      boxShadow: {
        'main': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'countdown': '0px 3px 10px rgb(0, 0, 0, 0.1)',
        'reason-box': '0px 5px 20px rgb(0 ,0, 0, 0,6)'
      },
      colors: {
        'black-100': 'rgba(0, 0, 0, 0.1)',
        'black-500': 'rgba(0, 0, 0, 0.5)',
        'black-800': 'rgba(0, 0, 0, 0.8)',
        'black-50': 'rgba(0, 0, 0, 0.05)',
        'white-200': 'rgba(255, 255, 255, 0.2)',
        'white-800': 'rgba(255, 255, 255, 0.8)',
        'secondary': 'rgba(212, 63, 141, 0.2)'
      },
      keyframes: {
        'pulse-border': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.55)', opacity: 0 },
        },
        'zoom-in-out': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'pulse-border': 'pulse-border 1500ms ease-out infinite'
      }
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        DEFAULT: '100%',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1140px'
      }
    }
  },
  plugins: [],
}
