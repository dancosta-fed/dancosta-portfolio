import React from "react";

class About extends React.Component {
  render() {
    return(
      <div className="background-about">
        <div className="container mx-auto about">
          <h2 className="aboutme text-center">About Me</h2>
          <div className="about-info">
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
  );
}

}



export default About