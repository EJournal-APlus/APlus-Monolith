import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/Router'
import Navbar from './components/ui/navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
      <Navbar />
    </BrowserRouter>
  </React.StrictMode>,
)
