import { api } from 'configs/axios.config'
import { GetQuestionsResponse } from './questions.types'

export const getQuestionsUrl = (amount: number) => {
  return api.get<GetQuestionsResponse>('/api.php', { params: { amount } })
}
