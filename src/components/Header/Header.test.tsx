import { screen, fireEvent } from '@testing-library/react'
import { renderAll } from 'utils/test.utils'
import { Header } from './Header.component'

describe('<Header/>', () => {
  it('should render correctly', () => {
    renderAll(<Header handleOpenReportDrawer={() => null} />)

    const logoImg = screen.getByRole('img')

    expect(logoImg).toBeInTheDocument()
    expect(logoImg).toHaveAttribute('src', 'logo.svg')
    expect(logoImg).toHaveAttribute('alt', 'ask-app-logo')
    expect(screen.getByText('Reports')).toBeInTheDocument()
  })
  it('should click in Reports button', async () => {
    const mockedhandleOpenReportDrawer = jest.fn()
    renderAll(<Header handleOpenReportDrawer={mockedhandleOpenReportDrawer} />)

    const reportBtn = screen.getByText('Reports')
    fireEvent.click(reportBtn)

    expect(mockedhandleOpenReportDrawer).toHaveBeenCalledTimes(1)
  })
})
