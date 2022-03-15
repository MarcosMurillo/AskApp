import { styled, Button } from '@mui/material'

const StyledButton = styled(Button)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  transition: 'all 0.2s',

  '&:hover': {
    background: theme.palette.primary.main,
    color: theme.colors.white[50],
    filter: 'brightness(0.8)'
  }
}))

export const ConfirmButton = styled(StyledButton)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.colors.white[50]
}))

export const CancelButton = styled(StyledButton)(({ theme }) => ({
  background: theme.colors.gray[50],
  color: theme.colors.black[50]
}))
