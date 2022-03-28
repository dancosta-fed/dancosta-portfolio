import React from "react"
import Nav from '../nav'
import Banner  from '../banner'
import About  from '../about'


class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Banner />
        <About />
      </div>
    )
  }
}


export default Home