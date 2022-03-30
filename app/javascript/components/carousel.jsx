import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const following = () => {
  console.log("following")
}

const Carousel = () => {
 
    return (
        <div className="carousel container mx-auto">
          <div className="card card-post-carousel">
            <a href="#">
              <img class="carousel-img" src="https://res.cloudinary.com/dognkye6x/image/upload/v1645840712/freddy_i1qye8.jpg" alt="place holder" />
            </a>
            <div className="post-info-carousel">
              <div className="post-title-carousel">
                <h3>Post Title</h3>
              </div>
              <div className="post-description-carousel">
                <p>This is a short discription of my post.</p>
              </div>
            </div>
          </div>

          <div className="arrows d-flex justify-content-around">
            <div className="arrow-left">
              <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" />
            </div>
            <div className="arrow-right">
              <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
            </div>
          </div>
        </div>
    );
}


export default Carousel