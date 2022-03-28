import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";



class Banner extends React.Component {

  render() {
    return(
      <div className="banner-bg">
        <div className="avatar">
          <img className="avatar-img" src="https://res.cloudinary.com/dognkye6x/image/upload/v1648345738/IMG_0591_huppm8.jpg" alt="Dan's profile photo." />
        </div>

        <div className="buttons">
          <div className="hire-btn">
            <a className="btn btn-main" href="mailto:dancosta.id@gmail.com">Hire Me</a>
          </div>

          <div className="social-icons">
            <FontAwesomeIcon icon={faGithub} className="fa-icon"  />
            <FontAwesomeIcon icon={faLinkedinIn} className="fa-icon" />
            <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
          </div>
        </div>
      </div>
  );
}

}



export default Banner