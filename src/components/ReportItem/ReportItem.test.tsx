import { screen, fireEvent, waitFor } from '@testing-library/react'
import { renderAll } from 'utils/test.utils'
import { ReportItem } from './ReportItem.component'
import { formatDate } from 'utils'

const todayDate = new Date()
const formattedDate = formatDate(todayDate)

describe('<ReportItem/>', () => {
  it('should render correctly', () => {
    renderAll(
      <ReportItem
        questionsQtd={5}
        creationDate={todayDate}
        handleGoToReportDetail={jest.fn()}
        handleDelete={jest.fn()}
      />
    )

    expect(screen.getByText('5 questions')).toBeInTheDocument()
    expect(screen.getByText(formattedDate)).toBeInTheDocument()
  })
  it('should render correctly when report have only one question', () => {
    renderAll(
      <ReportItem
        questionsQtd={1}
        creationDate={todayDate}
        handleGoToReportDetail={jest.fn()}
        handleDelete={jest.fn()}
      />
    )

    const formattedDate = formatDate(todayDate)

    expect(screen.getByText('1 question')).toBeInTheDocument()
    expect(screen.getByText(formattedDate)).toBeInTheDocument()
  })
  it('should click to go for ReportDetails', () => {
    const handleGoToReportDetail = jest.fn()
    renderAll(
      <ReportItem
        questionsQtd={5}
        creationDate={todayDate}
        handleGoToReportDetail={handleGoToReportDetail}
        handleDelete={jest.fn()}
      />
    )

    const cardContent = screen.getByTestId('report-item-content')
    fireEvent.click(cardContent)

    expect(handleGoToReportDetail).toHaveBeenCalled()
  })
  it('should open delete Modal when click in delete icon', async () => {
    const handleDelete = jest.fn()
    renderAll(
      <ReportItem
        questionsQtd={5}
        creationDate={todayDate}
        handleGoToReportDetail={jest.fn()}
        handleDelete={handleDelete}
      />
    )

    const deleteBtn = screen.getByTestId('delete-report-btn')
    fireEvent.click(deleteBtn)
    waitFor(() => {
      expect(screen.getByTestId('confirm-modal')).toBeInTheDocument()

      const confirmBtn = screen.getByText('Confirm')
      fireEvent.click(confirmBtn)

      expect(screen.getByTestId('confirm-modal')).not.toBeInTheDocument()
      expect(handleDelete).toBeCalled()
    })
  })
})
