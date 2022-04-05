import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom" 

const Nav = () => {
    return(
      <div className="nav">
        <div className="name text-center">
        <img className="nav-img" src="https://res.cloudinary.com/dognkye6x/image/upload/v1649180538/profile.id_mr4tbe.png" />
        </div>
        <div className="nav-items">
          <Link className="home" to="/">Home</Link>
          <Link className="blog" to="/blog">Blog</Link>
          <Link className="contact" to="/contact">Contact</Link>
        </div>
      </div>
  );
};

export default Nav