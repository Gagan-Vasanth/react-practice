import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'

const App = () => {
  return (
    <Routes>
      <Route path="/sign-up" Component={SignupPage} />
      <Route path="/login" Component={LoginPage} />
    </Routes>
  )
}

export default App
