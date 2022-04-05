import React from "react";
import Nav from '../nav'
import Footer from '../footer';
import BlogPage from '../blogPage'
import Banner from "../banner";

class Blog extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Banner />
          <BlogPage />
        <Footer />
      </div>
    )
  }
}


export default Blog