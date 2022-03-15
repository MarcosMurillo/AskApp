import { createContext, ReactNode, useState, useCallback, useMemo } from 'react'
import { ReportProps, Questions } from 'types'
import { useSnackbar } from 'notistack'

import * as localStorageService from 'services/localStorage.service'

interface ReportContextProps {
  reports: ReportProps[]
  questionsQtd: number | null

  handleSetQuestionsQtd: (qtd: number) => void
  handleCreateReport: (reportData: Questions[]) => void
  handleDeleteReport: (index: number) => void
}

interface ReactContextProviderProps {
  children: ReactNode
}

export const ReportContext = createContext<ReportContextProps>({
  reports: [],
  questionsQtd: null,
  handleSetQuestionsQtd: () => null,
  handleCreateReport: () => null,
  handleDeleteReport: () => null
})

export const ReportContextProvider = ({
  children
}: ReactContextProviderProps) => {
  const [questionsQtd, setQuestionsQtd] = useState<number | null>(null)
  const [reports, setReports] = useState<ReportProps[]>(
    localStorageService.getItem('@reports') ?? []
  )
  const { enqueueSnackbar } = useSnackbar()

  const handleSetQuestionsQtd = useCallback(
    (qtd: number) => setQuestionsQtd(qtd),
    []
  )

  const handleCreateReport = useCallback(
    (reportData: Questions[]) => {
      const reportsCopy = [...reports]
      reportsCopy.push({ data: reportData, createdAt: new Date() })

      localStorageService.setItem('@reports', JSON.stringify(reportsCopy))
      setReports(reportsCopy)
    },
    [reports]
  )

  const handleDeleteReport = useCallback(
    (index: number) => {
      const reportsCopy = [...reports]
      reportsCopy.splice(index, 1)
      localStorageService.setItem('@reports', JSON.stringify(reportsCopy))
      setReports(reportsCopy)
      enqueueSnackbar('The report has been deleted!', {
        variant: 'success'
      })
    },
    [reports, enqueueSnackbar]
  )

  const reportContextValue = useMemo(() => {
    return {
      questionsQtd,
      reports,
      handleSetQuestionsQtd,
      handleCreateReport,
      handleDeleteReport
    }
  }, [
    handleSetQuestionsQtd,
    questionsQtd,
    handleCreateReport,
    handleDeleteReport,
    reports
  ])

  return (
    <ReportContext.Provider value={reportContextValue}>
      {children}
    </ReportContext.Provider>
  )
}
