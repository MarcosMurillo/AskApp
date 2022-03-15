import { ReactNode, useState } from 'react'
import { Box, Container, Drawer, Typography, useTheme } from '@mui/material'
import { ReportList } from '../ReportList/ReportList.component'
import { Header } from '../Header/Header.component'
import { LayoutContainer } from './Layout.styles'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const [reportDrawerIsOpen, setReportDrawerIsOpen] = useState(false)
  const theme = useTheme()
  const handleCloseReportDrawer = () => setReportDrawerIsOpen(false)
  const handleOpenReportDrawer = () => setReportDrawerIsOpen(true)

  return (
    <LayoutContainer>
      <Header handleOpenReportDrawer={handleOpenReportDrawer} />
      <Drawer
        anchor="right"
        open={reportDrawerIsOpen}
        onClose={handleCloseReportDrawer}
        PaperProps={{
          sx: {
            background: theme.colors.gray[50],
            width: '250px'
          }
        }}
      >
        <Typography
          textAlign="center"
          variant="subtitle1"
          pt="16px"
          textTransform="uppercase"
        >
          Reports
        </Typography>
        <ReportList handleCloseReportDrawer={handleCloseReportDrawer} />
      </Drawer>
      <Box sx={{ flex: 1 }}>
        <Container maxWidth="xl" sx={{ height: '100%' }}>
          {children}
        </Container>
      </Box>
    </LayoutContainer>
  )
}
