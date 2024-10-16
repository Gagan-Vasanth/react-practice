import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'

const App = () => {
  return (
    <Routes>
      <Route path="/sign-up" Component={SignupPage} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/home" Component={HomePage} />
    </Routes>
  )
}

export default App
