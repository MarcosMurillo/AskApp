import { useState } from 'react'
import { Typography, Stack } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article'
import ClearIcon from '@mui/icons-material/Clear'
import { CardStack, CardContentStack, DeleteButton } from './ReportItem.styles'
import { ConfirmModal } from '../ConfirmModal/ConfirmModal.component'
import { formatDate } from 'utils'

interface ReportItemProps {
  questionsQtd: number
  creationDate: Date
  handleGoToReportDetail: () => void
  handleDelete: () => void
}

export const ReportItem = ({
  questionsQtd,
  creationDate,
  handleGoToReportDetail,
  handleDelete
}: ReportItemProps) => {
  const [open, setOpen] = useState(false)

  const formattedDate = formatDate(creationDate)

  const handleOpenModal = () => setOpen(true)
  const handleCloseModal = () => setOpen(false)

  return (
    <CardStack
      direction="row"
      spacing={2}
      alignItems="center"
      data-testid="report-item"
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        data-testid="report-item-content"
        onClick={handleGoToReportDetail}
      >
        <ArticleIcon color="primary" fontSize="large" />
        <CardContentStack>
          <Typography component="span" variant="body1" fontWeight="bold">
            {questionsQtd} {questionsQtd > 1 ? 'questions' : 'question'}
          </Typography>
          <Typography component="span" variant="body2">
            {formattedDate}
          </Typography>
        </CardContentStack>
      </Stack>

      <ConfirmModal
        open={open}
        handleClose={handleCloseModal}
        description="Upon confirmation, this report will be deleted!"
        onConfirm={handleDelete}
      />

      <DeleteButton
        aria-label="delete-report"
        onClick={handleOpenModal}
        data-testid="delete-report-btn"
      >
        <ClearIcon fontSize="small" />
      </DeleteButton>
    </CardStack>
  )
}
