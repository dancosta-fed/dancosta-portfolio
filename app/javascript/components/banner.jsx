import React from "react";

class Banner extends React.Component {
  render() {
    return(
      <div className="banner-bg">
        <div className="avatar">
          <img className="avatar-img" src="https://res.cloudinary.com/dognkye6x/image/upload/v1648345738/IMG_0591_huppm8.jpg" alt="Dan's profile photo." />
        </div>

        <div className="buttons">
          <div className="hire-btn">
            <a class="btn btn-main" href="#">Hire Me</a>
          </div>

          <div className="social-icons">
            <i class="fab fa-github"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-instagram"></i>
          </div>
        </div>
      </div>
  );
};

}



export default Banner