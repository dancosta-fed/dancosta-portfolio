import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Router, Routes, Route } from "react-router-dom"
import App from '../components/app'
import 'shards-ui/dist/css/shards.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';


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
