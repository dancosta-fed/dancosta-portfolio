import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom" 
import App from '../components/app'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path = '*' element={<App />} />
      </Routes>
    </BrowserRouter>,
    document.body.appendChild(document.createElement('div')),
  )
})
