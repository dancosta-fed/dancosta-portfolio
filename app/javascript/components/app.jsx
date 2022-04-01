import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import * as serviceWorker from '../../helpers/serviceWorker';
import Home from './pages/home'
import Blog from './pages/blog'
import Contact from './pages/contact'


class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/contact' element={<Contact />} />
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </div>
    )
  }
}

export default App