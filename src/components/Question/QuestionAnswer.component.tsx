import { Radio, FormControlLabel, Card, useTheme } from '@mui/material'
import { decodeHTMLEntities } from 'utils'

interface QuestionAnswerProps {
  value: string
  index: number
  formValue: string
  isCorrect: boolean

  readOnly?: boolean
  isUserAnswerCorrect?: boolean
}

export const QuestionAnswer = ({
  value,
  index,
  formValue,
  readOnly,
  isCorrect,
  isUserAnswerCorrect
}: QuestionAnswerProps) => {
  const theme = useTheme()
  const userAnwserIsCorrect = isUserAnswerCorrect && isCorrect
  const userAnswerInstCorrect = !isUserAnswerCorrect
  const isCorrectAnswer = isCorrect && !isUserAnswerCorrect

  const sxProps = {
    background: 'transparent'
  }

  if (readOnly) {
    if (userAnwserIsCorrect) {
      sxProps.background = theme.colors.blue[50]
    } else {
      if (userAnswerInstCorrect) {
        if (isCorrectAnswer) {
          sxProps.background = theme.colors.blue[50]
        } else {
          sxProps.background = 'transparent'
        }
      } else {
        sxProps.background = theme.colors.red[50]
      }
    }
  } else {
    sxProps.background = 'transparent'
  }

  return (
    <Card
      sx={{
        padding: '10px',
        margin: '4px 0',
        ...sxProps
      }}
      variant="outlined"
    >
      <FormControlLabel
        control={
          <Radio
            sx={{
              '&.Mui-checked': {
                color: readOnly
                  ? theme.colors.white[50]
                  : theme.palette.primary.main
              }
            }}
          />
        }
        value={value}
        label={decodeHTMLEntities(value)}
        name={`questions[${index}].option`}
        checked={formValue === value}
        sx={{
          pointerEvents: readOnly ? 'none' : 'auto'
        }}
      />
    </Card>
  )
}
