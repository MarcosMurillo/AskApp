import { ChangeEvent } from 'react'
import { useField } from 'formik'

import { RadioGroup, Typography, FormControl, Stack } from '@mui/material'
import { decodeHTMLEntities } from 'utils'
import { QuestionAnswer } from './QuestionAnswer.component'
import { QuestionContainer, DifficultySubtitle } from './Question.styles'

import { Questions } from 'types'

interface QuestionProps {
  data: Questions
  activeQuestion: number
  totalQuestions: number
  questionIndex: number
  name: string
  readOnly?: boolean
}

export const Question = ({
  data,
  totalQuestions,
  activeQuestion,
  questionIndex,
  name,
  readOnly
}: QuestionProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ value }, meta, { setValue }] = useField(`${name}[${questionIndex}]`)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    question: Questions
  ) => {
    const newValue = {
      ...question,
      option: event.target.value
    }
    setValue(newValue)
  }

  return (
    <QuestionContainer spacing={2} readOnly={Boolean(readOnly)}>
      <Stack>
        <Typography variant="h6">{`Question ${
          activeQuestion + 1
        } of ${totalQuestions}`}</Typography>
        <DifficultySubtitle
          variant="subtitle2"
          difficulty={data.difficulty}
          textTransform="capitalize"
        >
          Difficulty: <span>{data.difficulty}</span>
        </DifficultySubtitle>
      </Stack>

      <Typography variant="subtitle1">
        {decodeHTMLEntities(data.question)}
      </Typography>
      <FormControl>
        <RadioGroup
          onChange={(event) => handleChange(event, data)}
          value={value ?? null}
          sx={{
            height: '100%',
            justifyContent: 'center'
          }}
        >
          {data.answers.map((answer) => {
            return (
              <QuestionAnswer
                key={answer.text}
                value={answer.text}
                index={questionIndex}
                formValue={value?.option}
                readOnly={readOnly}
                isCorrect={answer.correct}
                {...(readOnly && {
                  isUserAnswerCorrect: answer.text === value?.option
                })}
              />
            )
          })}
        </RadioGroup>
      </FormControl>
    </QuestionContainer>
  )
}
