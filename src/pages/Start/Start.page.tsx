import { useEffect, useCallback } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { useReportContext } from 'hooks/useReportContext'
import { ConfirmButton, CancelButton } from './Start.styles'

export const StartPage = () => {
  const navigate = useNavigate()
  const { questionsQtd } = useReportContext()

  const handleReturnToChoose = useCallback(() => {
    navigate('/')
  }, [navigate])

  function handleStart() {
    navigate('/question')
  }

  useEffect(() => {
    if (!questionsQtd) {
      handleReturnToChoose()
    }
  }, [questionsQtd, handleReturnToChoose])

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ height: '100%' }}
    >
      <Stack alignItems="center" spacing={2}>
        <Typography variant="h4" textAlign="center" fontWeight="light">
          You will reply {questionsQtd} questions
        </Typography>
        <Stack direction="row" spacing={2}>
          <CancelButton onClick={handleReturnToChoose}>Cancel</CancelButton>
          <ConfirmButton onClick={handleStart}>Start</ConfirmButton>
        </Stack>
      </Stack>
    </Box>
  )
}
