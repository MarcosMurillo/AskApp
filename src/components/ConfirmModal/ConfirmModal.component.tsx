import { Typography, Stack, Modal, Box } from '@mui/material'
import { StyledButton, ContentContainer } from './ConfirmModal.styles'

interface ConfirmModalProps {
  open: boolean
  handleClose: () => void
  description: string
  onConfirm: () => void
}

export const ConfirmModal = ({
  open,
  handleClose,
  description,
  onConfirm
}: ConfirmModalProps) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ height: '100%' }}
        data-testid="confirm-modal"
      >
        <ContentContainer spacing={4}>
          <Typography variant="h4">Are you sure?</Typography>
          <Typography variant="body1">{description}</Typography>
          <Stack direction="row" spacing={2}>
            <StyledButton variant="contained" onClick={handleClose}>
              Cancel
            </StyledButton>
            <StyledButton
              variant="contained"
              onClick={() => {
                onConfirm()
                handleClose()
              }}
            >
              Confirm
            </StyledButton>
          </Stack>
        </ContentContainer>
      </Box>
    </Modal>
  )
}
