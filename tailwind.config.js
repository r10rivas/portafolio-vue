const primary ='#812435'
module.exports = {
  theme: {
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    fontFamily: {
      'oswald': ['Oswald'],
    },
    extend: {
      height: {
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem'
      },
      colors: {
        app: {
          'black': '#1B1A1A',
          'white': '#F3F2F2',
          'white-darked': '#cdbbc1',
          'yellow': '#FAE17C',
          'primary': primary,
          'primary-darked': '#5C202F',
          'vinotinto': '#681629'

        },
        primary: primary,
      },
      fontSize: {
        '7xl': '5rem',
      },
    }
    
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    borderWidth: ['responsive', 'hover', 'focus', 'active'],
    borderStyle: ['responsive', 'hover', 'focus', 'active'],
    borderRadius: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
