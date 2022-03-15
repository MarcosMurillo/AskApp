import { useContext } from 'react'
import { ReportContext } from 'contexts/Report.context'

export const useReportContext = () => {
  const contextValue = useContext(ReportContext)

  return contextValue
}
