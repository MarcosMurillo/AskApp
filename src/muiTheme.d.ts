import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      gray: {
        [key: number]: string
      }
      blue: {
        [key: number]: string
      }
      black: {
        [key: number]: string
      }
      green: {
        [key: number]: string
      }
      white: {
        [key: number]: string
      }
      red: {
        [key: number]: string
      }
    }
  }

  interface ThemeOptions {
    colors?: {
      gray?: {
        [key: number]: string
      }
      black?: {
        [key: number]: string
      }
      green?: {
        [key: number]: string
      }
      white?: {
        [key: number]: string
      }
      red?: {
        [key: number]: string
      }
      blue?: {
        [key: number]: string
      }
    }
  }
}
