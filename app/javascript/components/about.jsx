import React from "react";
import RailsIcon from "./_railsIcon";
import RubyIcon from "./_rubyIcon";
import ReactIcon from "./_reactIcon";
import JavascriptIcon from "./_javascriptIcon";

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
                  <RailsIcon />
                  <RubyIcon />
                  <ReactIcon />
                  <JavascriptIcon />
                </div>
              </div>
              
              <a class="btn btn-main cv-btn" href="app/assets/images/DanielCosta-CV.png" download="DanielCosta-CV">
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

          </div>
        </div>
      </div>
  );
}

}



export default About