import React from "react";
import { Link } from "react-router-dom" 

class Nav extends React.Component {
  render() {
    return(
      <div className="nav fixed-top">
        <div className="name text-center">
        <img className="nav-img" src="https://res.cloudinary.com/dognkye6x/image/upload/v1648345717/assFtos_kxj92c.png" />
        </div>
        <div className="nav-items">
          <Link className="home" to="/">Home</Link>
          <Link className="blog" to="/blog">Blog</Link>
          <Link className="contact" to="/contact">Contact</Link>
        </div>
      </div>
  );
};

}

export default Nav