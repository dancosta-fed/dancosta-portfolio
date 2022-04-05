import React from "react";

const BubbleChat = () => {
  return(
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
  )
}

export default BubbleChat