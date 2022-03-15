import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ReportContextProvider } from 'contexts/Report.context'
import { ThemeProvider } from '@mui/material'
import { theme } from 'styles/theme'
import { ReactNode } from 'react'
import { SnackbarProvider } from 'notistack'

export const renderWithTheme = (component: ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

export const renderAll = (component: ReactNode) => {
  return render(
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}>
        <ReportContextProvider>
          <ThemeProvider theme={theme}>{component}</ThemeProvider>
        </ReportContextProvider>
      </SnackbarProvider>
    </BrowserRouter>
  )
}
