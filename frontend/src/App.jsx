import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthPage from './components/pages/AuthPage'
import HomePage from './components/pages/HomePage'
import ProtectedRoute from './components/routes/ProtectedRoute'
import DemoPage from './components/pages/DemoPage'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Layout from './components/pages/Layout'
import Header from './components/pages/Header'
import Footer from './components/pages/Footer'

function App() {

  return (
    <BrowserRouter>
   
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/demo" element={
          <ProtectedRoute>
            <DemoPage />
          </ProtectedRoute>
        } />
       </Route>
      </Routes>
      
    </BrowserRouter >
  )
}

export default App
