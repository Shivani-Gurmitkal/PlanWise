import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Error from './Pages/Error'
import LandingPage from './Pages/LandingPage'
import LogIn from './Pages/LogIn'

function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={< LandingPage /> } />
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
      
    </>
  )
}

export default App
