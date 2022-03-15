import { useEffect, useState, ReactNode } from 'react'
import { FieldArray, Form, Formik } from 'formik'
import { Stack, CircularProgress, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Question, QuestionToolbar, RequestError } from 'components'
import { useReportContext } from 'hooks/useReportContext'

import { useAxios } from 'hooks/useAxios'
import { getQuestionsUrl } from 'services/questionsService/questions.service'
import { shuffle } from 'utils'

import { Questions } from 'types'

const Wrapper = ({ children }: { children: ReactNode }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    sx={{ height: '100%' }}
  >
    {children}
  </Box>
)

export const QuestionsPage = () => {
  const { questionsQtd, handleCreateReport, reports } = useReportContext()

  const { getData, requestData, requestStatus } = useAxios({
    request: () => getQuestionsUrl(Number(questionsQtd))
  })
  const [questions, setQuestions] = useState<Questions[] | undefined>(undefined)
  const [activeQuestion, setActiveQuestion] = useState(0)

  const navigate = useNavigate()

  const handleSubmit = (data: Questions[]) => {
    handleCreateReport(data)
    navigate(`/reports/${reports.length}`)
  }

  useEffect(() => {
    if (!questionsQtd) {
      navigate('/')
    }
  }, [questionsQtd, navigate])

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const parsedResults = requestData.data?.results.map((result) => ({
      question: result.question,
      difficulty: result.difficulty,
      answers: shuffle([
        {
          text: result.correct_answer,
          correct: true
        },
        ...result.incorrect_answers.map((incorretAnswer) => ({
          text: incorretAnswer,
          correct: false
        }))
      ])
    }))

    setQuestions(parsedResults)
  }, [requestData])

  const handlePreviousStep = () => {
    if (activeQuestion === 0) return
    setActiveQuestion(activeQuestion - 1)
  }

  const handleNextStep = () => {
    if (questions && activeQuestion === questions?.length - 1) return
    setActiveQuestion(activeQuestion + 1)
  }

  const handleGoToUnansweredQuestions = (formikQuestions: Questions[]) => {
    if (questions) {
      const unasweredQuestionsIndexs: number[] = []

      questions.forEach((question, index) => {
        const firstUnasweredQuestion = formikQuestions.find((item) => {
          if (!item) return
          return item.question === question.question
        })

        if (!firstUnasweredQuestion) unasweredQuestionsIndexs.push(index)
      })

      setActiveQuestion(unasweredQuestionsIndexs[0])
    }
  }
  if (requestStatus === 'fetched' && !!questions)
    return (
      <Wrapper>
        <Formik
          initialValues={{ questions: [] }}
          onSubmit={(values) => handleSubmit(values.questions)}
        >
          {({ values }) => {
            const isSubmiting =
              questions && activeQuestion === questions?.length - 1

            const filteredValuesOfQuestions = values.questions.filter(
              (item) => item !== undefined
            )

            const availableToSubmit =
              questions.length === filteredValuesOfQuestions.length

            const hasUnansweredQuestions =
              filteredValuesOfQuestions.length >= 0 && !availableToSubmit

            return (
              <Form>
                <Stack spacing={{ md: 2, xs: 3 }}>
                  <FieldArray
                    name="questions"
                    render={() => {
                      return questions.map((question, questionIndex) => {
                        if (activeQuestion === questionIndex) {
                          return (
                            <div key={question.question}>
                              <Question
                                totalQuestions={questions.length}
                                activeQuestion={activeQuestion}
                                name="questions"
                                data={question}
                                questionIndex={questionIndex}
                              />
                              <br />
                            </div>
                          )
                        }
                      })
                    }}
                  />
                  <br />
                  <QuestionToolbar
                    previousStepIsDisabled={activeQuestion === 0}
                    handlePreviousStep={handlePreviousStep}
                    handleNextStep={handleNextStep}
                    availableToSubmit={availableToSubmit}
                    isSubmiting={isSubmiting}
                    hasUnanswered={!hasUnansweredQuestions}
                    handleGoToUnansweredQuestions={() =>
                      handleGoToUnansweredQuestions(values.questions)
                    }
                  />
                </Stack>
              </Form>
            )
          }}
        </Formik>
      </Wrapper>
    )

  if (requestStatus === 'error')
    return (
      <Wrapper>
        <RequestError error={requestData.error} />
      </Wrapper>
    )

  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  )
}
