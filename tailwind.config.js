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
    extend: {
      colors: {
        primary: primary,
      }
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
