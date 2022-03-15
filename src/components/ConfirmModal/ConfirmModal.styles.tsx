import { styled, Button, buttonClasses, Stack } from '@mui/material'

export const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.colors.white[50],
  [`&.${buttonClasses.contained}`]: {
    boxShadow: 'none'
  }
}))

export const ContentContainer = styled(Stack)(({ theme }) => ({
  background: theme.colors.white[50],
  padding: theme.spacing(4),
  borderRadius: '8px',

  width: '500px',
  alignItems: 'center'
}))
