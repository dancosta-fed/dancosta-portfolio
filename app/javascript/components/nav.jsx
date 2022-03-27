import React from "react";

class Nav extends React.Component {
  render() {
    return(
      <div className="nav">
        <div className="name text-center">
        <img className="nav-img" src="https://res.cloudinary.com/dognkye6x/image/upload/v1648345717/assFtos_kxj92c.png" />
        </div>
        <div className="nav-items">
          <div className="home">
            <a href="<%= link_to root_path %>">Home</a>
          </div>
          
          <div className="blog">blog</div>
          <div className="contact">contact</div>
        </div>
      </div>
  );
};

}

export default Nav