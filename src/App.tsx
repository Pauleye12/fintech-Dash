import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Login from './components/login'
import Dashboard from './components/Dashboard/Dashboard'
import UserDetails from './components/UserDetails/UserDetails'

function App() {
const [showSidebar, setShowSideBar] = useState(true);

const toggleSidebar = (): void => {
  setShowSideBar((prev) => !prev);
};
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/Dashboard"
            element={
              <Dashboard
                handleSidebar={toggleSidebar}
                showSidebar={showSidebar}
              />
            }
          />
          <Route
            path="/User/details/:id"
            element={
              <UserDetails
                handleSidebar={toggleSidebar}
                showSidebar={showSidebar}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App
