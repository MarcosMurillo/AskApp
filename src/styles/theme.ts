import { createTheme } from '@mui/material'

export const theme = createTheme({
  colors: {
    gray: {
      50: '#EEEEEE'
    },
    black: {
      50: '#666666'
    },
    blue: {
      50: 'rgba(0, 127, 255, 0.4)',
      100: 'rgb(0, 127, 255)'
    },
    green: {
      100: '#00BFA2'
    },
    white: {
      50: '#FAFAFA'
    },
    red: {
      50: 'rgba(244, 67, 54, 0.4)',
      100: '#f44336'
    }
  },
  palette: {
    primary: {
      main: 'rgb(0, 127, 255)'
    },
    secondary: {
      main: '#666666'
    }
  }
})
