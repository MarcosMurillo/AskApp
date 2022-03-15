import { styled, Box } from '@mui/material'

export const LayoutContainer = styled(Box)(() => ({
  height: '100vh',
  width: '100vw',
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'column'
}))
