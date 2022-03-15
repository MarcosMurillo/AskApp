import { Stack } from '@mui/material'
import { QuestionToolbarButton } from './Question.styles'

interface QuestionToolbarProps {
  handlePreviousStep: () => void
  handleNextStep: () => void
  handleGoToUnansweredQuestions: () => void
  isSubmiting: boolean
  previousStepIsDisabled: boolean
  availableToSubmit: boolean
  hasUnanswered: boolean
}

export const QuestionToolbar = ({
  handlePreviousStep,
  handleNextStep,
  isSubmiting,
  previousStepIsDisabled,
  availableToSubmit,
  hasUnanswered,
  handleGoToUnansweredQuestions
}: QuestionToolbarProps) => {
  return (
    <Stack
      direction={{ md: 'row', sm: 'column', xs: 'column' }}
      justifyContent="space-between"
      spacing={2}
      p={{ sm: '12px', ms: '12px' }}
    >
      <Stack direction={{ md: 'row', sm: 'column', xs: 'column' }} spacing={2}>
        <QuestionToolbarButton
          type="button"
          variant="contained"
          onClick={handlePreviousStep}
          disabled={previousStepIsDisabled}
          sx={{
            color: 'colors.white[50]'
          }}
        >
          Back
        </QuestionToolbarButton>
        <QuestionToolbarButton
          type="button"
          onClick={handleNextStep}
          variant="contained"
          disabled={isSubmiting}
        >
          Next
        </QuestionToolbarButton>
        <QuestionToolbarButton
          type="button"
          onClick={handleGoToUnansweredQuestions}
          variant="contained"
          disabled={hasUnanswered}
        >
          Go to unanswered questions
        </QuestionToolbarButton>
      </Stack>
      <QuestionToolbarButton
        type="submit"
        variant="contained"
        disabled={!availableToSubmit}
      >
        Submit
      </QuestionToolbarButton>
    </Stack>
  )
}
