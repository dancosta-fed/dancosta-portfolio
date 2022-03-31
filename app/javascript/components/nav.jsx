import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom" 

const Nav = () => {
    
  const navbar = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', scrolling)
  }, []);

   const scrolling = () => {
     console.log('test')
     navbar.current.style.opacity = 0.6;
     navbar.current.style.transition = '3000ms ease-out all';
   }

    
 
    return(
      <div className="nav fixed-top" ref={navbar}>
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

export default Nav