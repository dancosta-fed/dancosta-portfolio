import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

class Banner extends React.Component {

  render() {

    function github(e) {
      e.preventDefault();
      window.open('http://github.com/dancosta-fed');
    }

    function linkedin(e) {
      e.preventDefault();
      window.open('https://www.linkedin.com/in/daniel-de-oliveira-costa-590515140/');
    }

    function instagram(e) {
      e.preventDefault();
      window.open('https://www.instagram.com/_dancosta_/');
    }

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
            <FontAwesomeIcon icon={faGithub} className="fa-icon" onClick={github} />
            <FontAwesomeIcon icon={faLinkedinIn} className="fa-icon" onClick={linkedin} />
            <FontAwesomeIcon icon={faInstagram} className="fa-icon" onClick={instagram} />
          </div>
        </div>
      </div>
  );
}

}



export default Banner