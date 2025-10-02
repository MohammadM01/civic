import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CitizenInterface from "./pages/CitizenInterface"
import GovernmentDashboard from "./pages/GovernmentDashboard"
import ContractorInterface from "./pages/ContractorInterface"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/citizen" element={<CitizenInterface />} />
        <Route path="/government" element={<GovernmentDashboard />} />
        <Route path="/contractor" element={<ContractorInterface />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
