import React from "react";
import Nav from '../nav'
import Footer from '../footer';
import BlogPage from '../blogPage'

class Blog extends React.Component {
  render() {
    return (
      <div>
        <Nav />
          <BlogPage />
        <Footer />
      </div>
    )
  }
}


export default Blog