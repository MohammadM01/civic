import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CitizenInterface from "./pages/CitizenInterface"
import GovernmentDashboard from "./pages/GovernmentDashboard"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/citizen" element={<CitizenInterface />} />
        <Route path="/government" element={<GovernmentDashboard />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
