import { useState } from 'react'
import { AxiosPromise, AxiosError } from 'axios'

type RequestStatus = 'start' | 'loading' | 'fetched' | 'error'

type Data<T> = {
  data?: T
  error?: AxiosError
}

interface useAxiosProps<T> {
  request: () => AxiosPromise<T>
}

const initialState = {
  data: undefined,
  error: undefined
}

export const useAxios = <T>({ request }: useAxiosProps<T>) => {
  const [requestData, setRequestData] = useState<Data<T>>(initialState)
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('start')

  const handleChangeStatusToLoading = () => setRequestStatus('loading')
  const handleChangeStatusToFetched = () => setRequestStatus('fetched')
  const handleChangeStatusToError = () => setRequestStatus('error')

  const getData = async () => {
    try {
      handleChangeStatusToLoading()

      const response = await request()
      setRequestData({ ...requestData, data: response.data })
      handleChangeStatusToFetched()
    } catch (error) {
      console.log(error)
      setRequestData({ data: undefined, error: error as AxiosError })
      handleChangeStatusToError()
    }
  }

  return { requestData, getData, requestStatus }
}
