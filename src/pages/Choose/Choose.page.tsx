import { useState, MouseEvent, ChangeEvent } from 'react'
import { Typography, Stack, Tooltip, TextField, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import {
  StyledButton,
  PageContainer,
  ConfirmButton,
  CancelButton
} from './Choose.styles'
import AddIcon from '@mui/icons-material/Add'
import { useReportContext } from 'hooks/useReportContext'

const defaultQuestionsQtd = [2, 3, 4, 5, 6]

export const ChoosePage = () => {
  const [showMoreQuestionsInput, setShowMoreQuestionsInput] = useState(false)
  const [numberOfQuestions, setNumberOfQuestions] = useState<number | null>(
    null
  )

  const navigate = useNavigate()
  const { handleSetQuestionsQtd } = useReportContext()

  const handleShowMoreQuestionInput = () => setShowMoreQuestionsInput(true)
  const handleCloseMoreQuestionInput = () => setShowMoreQuestionsInput(false)

  const handleSelectNumberOfQuestions = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    const targetName = Number(event.currentTarget.name)

    if (targetName === numberOfQuestions) return setNumberOfQuestions(null)

    setNumberOfQuestions(Number(event.currentTarget.name))
  }

  const handleCancelSelectionValues = () => {
    setNumberOfQuestions(null)
    handleCloseMoreQuestionInput()
  }

  const handleChangeNumberOfQuestions = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = Number(event.currentTarget.value)
    if (inputValue < 0) return

    setNumberOfQuestions(inputValue)
  }

  const handleConfirm = () => {
    handleSetQuestionsQtd(Number(numberOfQuestions))
    navigate('/start')
  }

  return (
    <PageContainer>
      <Stack spacing={2} alignItems="center" justifyContent="center">
        <Typography
          sx={{
            typography: { md: 'h4', sm: 'h5', xs: 'h6' }
          }}
          fontWeight="light"
          textAlign="center"
        >
          How many questions would you like to answer?
        </Typography>
        <Stack spacing={2} sx={{ width: '100%' }}>
          {showMoreQuestionsInput ? (
            <TextField
              size="small"
              type="number"
              variant="outlined"
              id="more-questions"
              label="Number of questions"
              placeholder="Enter with a number of questions"
              value={numberOfQuestions || ''}
              onChange={handleChangeNumberOfQuestions}
            />
          ) : (
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              {defaultQuestionsQtd.map((questionQtd) => (
                <Grid item key={questionQtd}>
                  <StyledButton
                    name={String(questionQtd)}
                    onClick={handleSelectNumberOfQuestions}
                    isSelected={Number(numberOfQuestions) === questionQtd}
                  >
                    {questionQtd}
                  </StyledButton>
                </Grid>
              ))}
              <Grid item>
                <Tooltip
                  title="Add more questions"
                  placement="bottom"
                  color="primary"
                >
                  <StyledButton onClick={handleShowMoreQuestionInput}>
                    <AddIcon />
                  </StyledButton>
                </Tooltip>
              </Grid>
            </Grid>
          )}

          <Stack
            direction={{ md: 'row', sm: 'column', xs: 'column' }}
            p="0 30px"
            justifyContent="space-evenly"
            spacing={{ md: 4, sm: 2, xs: 2 }}
            sx={{ width: '100%' }}
          >
            <CancelButton
              size="large"
              variant="outlined"
              onClick={handleCancelSelectionValues}
              fullWidth
            >
              Cancel
            </CancelButton>
            <ConfirmButton
              fullWidth
              isSelected={!!numberOfQuestions}
              onClick={handleConfirm}
              disabled={!numberOfQuestions}
            >
              Confirm
            </ConfirmButton>
          </Stack>
        </Stack>
      </Stack>
    </PageContainer>
  )
}
