import { styled, Stack, IconButton } from '@mui/material'

export const CardStack = styled(Stack)(({ theme }) => ({
  cursor: 'pointer',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  background: theme.colors.white[50],
  borderRadius: '4px',
  position: 'relative',
  width: '210px',
  padding: '12px'
}))

export const CardContentStack = styled(Stack)(() => ({
  width: '100px'
}))

export const DeleteButton = styled(IconButton)(() => ({
  position: 'absolute',
  right: '2px',
  top: '2px'
}))
