import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import MeetingContextProvider from './context/MeetingContextProvider'

createRoot(document.getElementById('root')).render(
  <MeetingContextProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </MeetingContextProvider>
)
