import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/Router'
import Navbar from './components/ui/navbar/navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
    <Navbar />
  </React.StrictMode>,
)
