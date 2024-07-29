// eslint-disable-next-line import/default, import/namespace
import COLORS from './tailwind-config/colors'

const config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,sass,scss}'],
  theme: {
    extend: {
      screens: {
        xs: '480px'
      },
      blur: {
        xs: '3px'
      },
      backdropBlur: {
        xs: '2px'
      },
      backgroundImage: {
        login: "url('/src/assets/images/login/1.png')"
      },
      fontFamily: {
        railway: ['Railway']
      },
      colors: COLORS,
      container: {
        center: true
      }
    }
  },
  plugins: []
}

export default config
