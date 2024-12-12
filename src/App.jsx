import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Previous from './Pages/Previous'
import Home from './Pages/Home'
import Error from './Pages/Error'
import NavBar from './components/ui/NavBar'

function App() {
  return (
    <div>
      
      <NavBar/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/previous" element={<Previous />} />
      <Route path="*" element={<Error />} />
    </Routes>
      
    </div>
  )
}

export default App
