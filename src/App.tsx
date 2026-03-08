import { Route, Routes, BrowserRouter as Router } from "react-router";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./components/layout/Layout";
import InfectedAgents from "./pages/InfectedAgents/InfectedAgents";
import SystemLogs from "./pages/systemlogs/SystemLogs";
import Notes from "./pages/notes/Notes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/*Layout */}
          <Route element={<Layout />}>
            {/* Dashboard Page */}
            <Route index path="/" element={<Dashboard />} />
            {/* Infected Agents Page */}
            <Route path="/infected-agents" element={<InfectedAgents />} />
            {/* System Logs Page */}
            <Route path="/system-logs" element={<SystemLogs />} />
            {/* Notes Page */}
            <Route path="/notes" element={<Notes />} />


          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
