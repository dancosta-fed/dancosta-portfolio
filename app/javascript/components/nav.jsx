import React from "react";
import { Link } from "react-router-dom" 


const Nav = () => {
    return(
      <div className="nav">
        <div className="nav-items">
          <Link className="home" to="/">Home</Link>
          <Link className="blog" to="/blog">Blog</Link>
          <Link className="contact" to="/contact">Contact</Link>
        </div>
        <div className="avatar-nav text-center">
          <Link className="home" to="/">
            <img className="nav-img" src="https://res.cloudinary.com/dognkye6x/image/upload/v1649345919/profiles_rg7v7k.svg" />
          </Link>
        </div>
      </div>
  );
};

export default Nav