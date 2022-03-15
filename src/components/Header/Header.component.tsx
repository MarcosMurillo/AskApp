import { Box, Container, Button, Badge } from '@mui/material'
import { Link } from 'react-router-dom'
import { useReportContext } from 'hooks/useReportContext'
import LogoImg from 'assets/logo.svg'

interface HeaderProps {
  handleOpenReportDrawer: () => void
}

export const Header = ({ handleOpenReportDrawer }: HeaderProps) => {
  const { reports } = useReportContext()
  return (
    <Box component="header">
      <Container maxWidth="xl" sx={{ padding: '20px 12px' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Link to="/">
            <img src={LogoImg} alt="ask-app-logo" />
          </Link>
          <Badge badgeContent={reports.length} color="primary">
            <Button color="secondary" onClick={handleOpenReportDrawer}>
              Reports
            </Button>
          </Badge>
        </Box>
      </Container>
    </Box>
  )
}
