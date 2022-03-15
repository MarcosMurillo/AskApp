import { Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ReportItem } from '../ReportItem/ReportItem.component'
import { useReportContext } from 'hooks/useReportContext'

interface ReportListProps {
  handleCloseReportDrawer: () => void
}

export const ReportList = ({ handleCloseReportDrawer }: ReportListProps) => {
  const { reports, handleDeleteReport } = useReportContext()
  const navigate = useNavigate()

  return (
    <Stack spacing={2} p="20px">
      {reports.map(({ data, createdAt }, index) => {
        return (
          <ReportItem
            key={index}
            creationDate={new Date(createdAt)}
            questionsQtd={data.length}
            handleGoToReportDetail={() => {
              navigate(`/reports/${index}`)
              handleCloseReportDrawer()
            }}
            handleDelete={() => {
              handleDeleteReport(index)
              handleCloseReportDrawer()
              navigate('/')
            }}
          />
        )
      })}
    </Stack>
  )
}
