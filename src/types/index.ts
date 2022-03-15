export interface Answers {
  text: string
  correct: boolean
}

export interface Questions {
  question: string
  difficulty: string
  answers: Answers[]
  option?: string
}

export interface ReportProps {
  data: Questions[]
  createdAt: Date
}
