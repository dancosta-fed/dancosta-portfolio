import React from "react";

class Nav extends React.Component {
  render() {
    return(
      <div className="nav">
        <div className="name text-center">
          Daniel Costa
        </div>
        <div className="nav-items">
          <div className="home">home</div>
          <div className="blog">blog</div>
          <div className="contact">contact</div>
        </div>
      </div>
  );
};

}

export default Nav