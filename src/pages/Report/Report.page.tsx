import { useState } from 'react'
import { Stack, Grid, IconButton, Tooltip, Typography } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import { FieldArray, Form, Formik } from 'formik'

import { Question, ConfirmModal } from 'components'
import { useReportContext } from 'hooks/useReportContext'
import DeleteIcon from '@mui/icons-material/Delete'

export const ReportPage = () => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  const { reports, handleDeleteReport } = useReportContext()

  const handleOpenConfirmModal = () => setIsConfirmModalOpen(true)
  const handleCloseConfirmModal = () => setIsConfirmModalOpen(false)

  if (!reports[Number(id)]) {
    return <div>ops, não encontramos esse relatorio</div>
  }

  return (
    <Stack sx={{ height: '100%' }} spacing={6}>
      <Stack alignItems="center" direction="row" justifyContent="center">
        <Typography variant="h5" fontWeight="light">
          Report
        </Typography>
        <Tooltip placement="right" title="Delete report">
          <IconButton
            sx={{ marginLeft: '12px' }}
            onClick={handleOpenConfirmModal}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      <Formik
        initialValues={{ questions: reports[Number(id)].data }}
        onSubmit={() => console.log('')}
        enableReinitialize
      >
        {() => {
          return (
            <Form>
              <Grid
                container
                direction={{ md: 'row', xs: 'column' }}
                justifyContent="center"
                alignItems="center"
                spacing={{ md: 3, xs: 6 }}
              >
                <FieldArray
                  name="questions"
                  render={() => {
                    return reports[Number(id)].data.map(
                      (question, questionIndex) => {
                        return (
                          <Grid
                            item
                            xs={12}
                            md={6}
                            justifyContent="center"
                            alignItems="center"
                            key={question.question}
                          >
                            <Question
                              totalQuestions={reports[Number(id)].data.length}
                              activeQuestion={questionIndex}
                              name="questions"
                              data={question}
                              questionIndex={questionIndex}
                              readOnly
                            />
                            <br />
                          </Grid>
                        )
                      }
                    )
                  }}
                />
              </Grid>
            </Form>
          )
        }}
      </Formik>

      <ConfirmModal
        open={isConfirmModalOpen}
        handleClose={handleCloseConfirmModal}
        description="Upon confirmation, this report will be deleted!"
        onConfirm={() => {
          id && handleDeleteReport(Number(id))
          navigate('/')
        }}
      />
    </Stack>
  )
}
