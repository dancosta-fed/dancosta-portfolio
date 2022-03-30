import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faHtml5, faCss3, faSass } from "@fortawesome/free-brands-svg-icons";
import RailsIcon from "./_railsIcon";
import RubyIcon from "./_rubyIcon";

class About extends React.Component {
  render() {
    return(
      <div className="background-about">
        <div className="container mx-auto about">
          <h1 className="aboutme text-center">About Me</h1>
          <div className="about-info">
            <div className="card">
              <div className="main-card-info">
                <div className="card-description">
                  <p>I'm a self-taught Frontend Developer, who's recently completed a Rails Fullstack Bootcamp at Le wagon Rio. I am looking for an opportunity to prove myself.

                  I'm a fast-learner and great team-player. I'm very committed to learning and doing my best.  I can be of a great asset to your team.</p>
                </div>

                <div className="card-info">
                  <div className="languages container">
                    <FontAwesomeIcon icon={faHtml5} className="languages-icon" />
                    <FontAwesomeIcon icon={faCss3} className="languages-icon" />
                    <FontAwesomeIcon icon={faSass} className="languages-icon" />
                    <RailsIcon className="svg-icon languages-icon"/>
                    <RubyIcon className="svg-icon languages-icon"/>
                  </div>

                  <div className="learning">
                  # Improving Skills
                  <div className="d-flex justify-content-center">
                    <FontAwesomeIcon icon={faJs} className="learning-icon me-2" />
                    <FontAwesomeIcon icon={faReact} className="learning-icon" />
                  </div>
                  </div>
                </div>
              </div>
              
              <a className="btn btn-main cv-btn" href="app/assets/images/DanielCosta-CV.png" download="DanielCosta-CV">
                Download CV
              </a>
            
              </div>

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
            <div className="blog-carousel">
              <h1 className="aboutme text-center">Posts</h1>

              <div className="carousel container mx-auto">
                <div className="card card-post-carousel">
                  <img src="https://res.cloudinary.com/dognkye6x/image/upload/v1645840712/freddy_i1qye8.jpg" alt="place holder" />
                  <div className="post-info-carousel">
                    <div className="post-title-carousel">
                      <h3>Post Title</h3>
                    </div>
                    <div className="post-description-carousel">
                      <p>This is a short discription of my post.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

}



export default About