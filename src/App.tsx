import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Login from './components/login'
import Dashboard from './components/Dashboard/Dashboard'
import FilterDashboard from './components/FilterDashboard/FilterDashboard'

function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path='/User' element={<FilterDashboard/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App
