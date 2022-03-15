export type QuestionResult = {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export type GetQuestionsResponse = {
  response_code: number
  results: QuestionResult[]
}
