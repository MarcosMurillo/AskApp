import { renderAll } from 'utils/test.utils'
import { ReportList } from './ReportList.component'

describe('<ReportList/>', () => {
  it('shoudl render correctly', () => {
    renderAll(<ReportList handleCloseReportDrawer={jest.fn()} />)
  })
})
