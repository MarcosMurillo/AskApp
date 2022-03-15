import { styled, Button, Box } from '@mui/material'

interface StyledButtonProps {
  isSelected?: boolean
}

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isSelected'
})<StyledButtonProps>(({ theme, isSelected }) => ({
  background: isSelected ? theme.palette.primary.main : theme.colors.gray[50],
  color: isSelected ? theme.colors.white[50] : theme.colors.black[50],
  fontSize: theme.spacing(2),
  width: '64px',
  height: '40px',

  '&:hover': {
    background: isSelected ? theme.palette.primary.main : theme.colors.gray[50],
    color: isSelected ? theme.colors.white[50] : theme.colors.black[50],
    filter: 'brightness(0.8)'
  }
}))

export const ConfirmButton = styled(StyledButton)(({ theme }) => ({
  fontSize: theme.spacing(1.5),
  width: '100%'
}))

export const CancelButton = styled(Button)(({ theme }) => ({
  fontSize: theme.spacing(1.5),
  color: theme.colors.black[50],
  borderColor: theme.colors.black[50],
  width: '100%',

  '&:hover': {
    borderColor: theme.colors.black[50],
    background: 'transparent',
    filter: 'brightness(0.2)'
  }
}))

export const PageContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
}))
