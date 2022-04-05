import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

const BubbleChat = () => {
  function github(e) {
    e.preventDefault();
    window.open('http://github.com/dancosta-fed');
  }

  function linkedin(e) {
    e.preventDefault();
    windowçopen('https://www.linkedin.com/in/daniel-costa-dev/');
  }

  function instagram(e) {
    e.preventDefault();
    window.open('https://www.instagram.com/_dancosta_/');
  }

  return(
    <div className="container">
      <div className="avatar-chat">  
        <div className="avatar about-avatar">
          <img className="avatar-img" src="https://res.cloudinary.com/dognkye6x/image/upload/v1648430328/DSC09595_stxxui.jpg" alt="Dan's profile photo." />
        </div>

        <div className="chat">
          <div className="speech blur">
            <p className="message">Hi! I'm Daniel. A  Junior Software Engineer From Brazil.
              I work with Rails and React. Yep! I'm up for the challenge.
              All you see here, was done by me! Your turn! Let's chat...</p>
          </div>
          <div className="pointer"></div>
        </div>
      </div>
      <div className="container contact-bchat">
        <div className="buttons">
          <div className="hire-btn">
            <a className="btn btn-main" href="mailto:dancosta.id@gmail.com">Hire Me</a>
          </div>
        </div>
        <div className="social-icons bc-icons">
          <FontAwesomeIcon icon={faGithub} className="fa-icon" onClick={github} />
          <FontAwesomeIcon icon={faLinkedinIn} className="fa-icon" onClick={linkedin} />
          <FontAwesomeIcon icon={faInstagram} className="fa-icon" onClick={instagram} />
        </div>
      </div>
    </div>
  )
}

export default BubbleChat