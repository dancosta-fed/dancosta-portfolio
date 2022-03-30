import React from "react"
import Nav from '../nav'
import Banner  from '../banner'
import About  from '../about'
import Footer from '../footer'


class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Banner />
        <About />
        <Footer />
      </div>
    )
  }
}


export default Home