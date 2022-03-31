import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom" 

const Nav = () => {
  const navbar = useRef(null);
  // getting the navbar
  useEffect(() => {
    window.addEventListener('scroll', scrolling)
  }, []);

  // what will happen on scroll
   const scrolling = () => {
     if(window.pageYOffset){
       // on scroll down it has the opacity changed
      navbar.current.style.opacity = 0.6;
      navbar.current.style.transition = '3000ms ease-out all';
     } else {
       // opacity gets back to 1 if scrolls back up
       navbar.current.style.opacity = 1;
     }
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