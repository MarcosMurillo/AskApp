import { useState, useEffect, useCallback } from 'react'
import * as localStorageService from 'services/localStorage.service'

interface UseLocalStorageProps<T> {
  key: string
  initialValue: T
}

export const useLocalStorage = <T>({
  key,
  initialValue
}: UseLocalStorageProps<T>) => {
  const readStoragedValue = useCallback(() => {
    const data = localStorageService.getItem(key)

    if (data) return data

    localStorageService.setItem(key, JSON.stringify(initialValue))
    return initialValue
  }, [key, initialValue])

  const [storagedData, setStoragedData] = useState(readStoragedValue())

  function handleChangeStoragedData<T>(value: T) {
    const parsedData = JSON.stringify(value)

    localStorageService.setItem(key, parsedData)
    setStoragedData(parsedData)
  }

  function handleRemoveStoragedData() {
    localStorageService.removeItem(key)
    setStoragedData(null)
  }

  useEffect(() => {
    setStoragedData(readStoragedValue())
  }, [readStoragedValue])

  return { storagedData, handleChangeStoragedData, handleRemoveStoragedData }
}
