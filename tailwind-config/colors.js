const blue = {
  50: '#eef8ff',
  100: '#d8eeff',
  200: '#bae2ff',
  300: '#8ad2ff',
  400: '#53b7ff',
  500: '#2c95ff',
  600: '#1576fb',
  700: '#0e62f0',
  800: '#124dbb',
  900: '#154493',
  950: '#122a59'
}

const orange = {
  50: '#fffcea',
  100: '#fff5c5',
  200: '#ffeb85',
  300: '#ffda46',
  400: '#ffc61b',
  500: '#ffa400',
  600: '#e27b00',
  700: '#bb5502',
  800: '#984108',
  900: '#7c360b',
  950: '#481a00'
}

const COLORS = {
  primary: blue[700],
  secondary: orange[500],
  ...blue,
  ...orange
}

export default COLORS
