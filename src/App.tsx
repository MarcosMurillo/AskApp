import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'

import { AppRoutes } from 'routes/appRoutes'
import { Layout } from 'components'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ReportContextProvider } from 'contexts/Report.context'
import { theme } from 'styles/theme'

function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}>
        <ReportContextProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
              <AppRoutes />
            </Layout>
          </ThemeProvider>
        </ReportContextProvider>
      </SnackbarProvider>
    </BrowserRouter>
  )
}

export default App
