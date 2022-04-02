import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Router, Routes, Route } from "react-router-dom"
import App from '../components/app'
import 'shards-ui/dist/css/shards.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/stylesheets/components/shards-dashboards.1.1.0.min.css'


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
