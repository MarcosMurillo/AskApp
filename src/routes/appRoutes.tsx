import { Routes, Route } from 'react-router-dom'
import * as Pages from 'pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Pages.ChoosePage />} />
        <Route path="/question" element={<Pages.QuestionsPage />} />
        <Route path="/start" element={<Pages.StartPage />} />
        <Route path="/reports/:id" element={<Pages.ReportPage />} />
      </Route>
    </Routes>
  )
}
