import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faHtml5, faCss3, faSass, faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails, SiTypescript, SiReact, SiJavascript } from "react-icons/si";
import BubbleChat from "./bubbleChat";
import IphoneCard from "./iphoneCard";
import Carousel from "./carousel";

class About extends React.Component {  
  render() {

    return(
      <div className="background-about">
        <div className="card-bubble">
          <BubbleChat />
          <IphoneCard />
        </div>
        <div className="container mx-auto about">
          <h1 className="aboutme text-center">About Me</h1>
          <div className="about-info">
            <div className="card-wrapper">
              <div className="main-card-info">
                <div className="card-description">
                  <p>I'm a self-taught Frontend Developer, who's recently completed a Rails Fullstack Bootcamp at Le wagon Rio. I am looking for an opportunity to prove myself.

                  I'm a fast-learner and great team-player. I'm very committed to learning and doing my best.  I can be a great asset to your team.</p>
                  <p>My stack: HTML, CSS/SASS, Ruby, Ruby on Rails. I'm improving on JavaScript and React</p>
                </div>

                <div className="card-info">
                  <div className="languages container">
                    <FontAwesomeIcon icon={faHtml5} className="languages-icon" />
                    <FontAwesomeIcon icon={faCss3} className="languages-icon" />
                    <FontAwesomeIcon icon={faSass} className="languages-icon" />
                    <DiRuby className="languages-icon"/>
                    <SiRubyonrails className="languages-icon"/>
                  </div>

                  <div className="text-center">
                    <h5 className="mb-3"># Improving Skills</h5>
                  <div className="d-flex justify-content-center">
                    <SiJavascript className="languages-icon"/>
                    <SiTypescript className="languages-icon"/>
                    <SiReact className="languages-icon"/>
                  </div>
                  </div>
                </div>
              </div>
              
              {/* <a className="btn btn-main cv-btn" href="https://res.cloudinary.com/dognkye6x/image/upload/v1648468128/DanielCosta-CV_jl63qt.png" download="DanielCosta-CV" target="_blank">
                Download CV
              </a> */}
            
              </div>
              <h3 className="text-center">Portfolio</h3>
              <Carousel />
              <span className="text-center mt-1">These Portfolios are a showcase of the backend work we've done at the Bootcamp. We worked with Ruby on Rails. I've worked in teams and simulated real world workspaces. We've worked with API's, Schema design, Postgres, Routing, Authentication & Devise and much more.</span>
            <div className="push"></div>
          </div>
        </div>
      </div>
  );
}

}



export default About