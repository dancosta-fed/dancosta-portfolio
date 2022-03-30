import React, {useRef, useEffect} from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";



const Carousel = () => {
  const slideshow = useRef(null);
  const slideShowInterval = useRef(null);
  
  const next = () => {
    // making sure the slide show has elements
    if(slideshow.current.children.length > 0){
      // getting the first element of the slideshow
      const firstElement = slideshow.current.children[0];
      // making sure there's a transition
      slideshow.current.style.transition = '300ms ease-out all';

      const slideSize = slideshow.current.children[0].offsetWidth;

      // Moving the slideshow
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      const slideTransition = () => {
        // restarted the slide show position
        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = `translatex(0)`;

        // Getting first element and sending it to the back

        slideshow.current.appendChild(firstElement);
        
        // getting ride of eventListener so back btn works
        slideshow.current.removeEventListener('transitionend', slideTransition);
      }

      // Eventlistener for when transition is over

      slideshow.current.addEventListener('transitionend', slideTransition);

    }
  }
  
  const prior = () => {
    // making sure the slide show has elements
    if(slideshow.current.children.length > 0){
      // getting the first element of the slideshow
      const index = slideshow.current.children.length -1;
      const lastElement = slideshow.current.children[index];
      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

      slideshow.current.style.transition = 'none';

      const slideSize = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      setTimeout(() =>{
        slideshow.current.style.transition = '300ms ease-out all';
        slideshow.current.style.transform = `translateX(0)`;
      }, 30)

      }
  }

  // That will make slideshow automated
  useEffect(() => {
    slideShowInterval.current = setInterval(() => {
      next();
    }, 5000);

    // stop interval
    slideshow.current.addEventListener('mouseenter', () => {
      clearInterval(slideShowInterval.current);
    })

    // restart interval
    slideshow.current.addEventListener('mouseleave', () => {
      slideShowInterval.current = setInterval(() => {
        next();
      }, 5000);
    })
  }, [])

    return (
        <div className="carousel container mx-auto">
            <div className="slideshow-container" ref={slideshow}>
              {/* First Element */}
              <div className="card card-post-carousel">
                  <Link className="blog carousel-img" to="/blog">
                    <img className="carousel-img" src="https://res.cloudinary.com/dognkye6x/image/upload/v1645840712/freddy_i1qye8.jpg" alt="place holder" />
                  </Link>

                <div className="post-info-carousel">
                  <div className="post-title-carousel">
                    <h3>Post Title</h3>
                  </div>
                  <div className="post-description-carousel">
                    <p>This is a short discription of my post.</p>
                  </div>
                </div>
              </div>
              {/* Second Element */}
              <div className="card card-post-carousel">
                  <Link className="blog carousel-img" to="/blog">
                    <img className="carousel-img" src="https://res.cloudinary.com/dognkye6x/image/upload/v1645840712/freddy_i1qye8.jpg" alt="place holder" />
                  </Link>

                <div className="post-info-carousel">
                  <div className="post-title-carousel">
                    <h3>Post Title 2</h3>
                  </div>
                  <div className="post-description-carousel">
                    <p>This is a short discription of my post. 2</p>
                  </div>
                </div>
              </div>

              {/* Third Element */}
              <div className="card card-post-carousel">
                  <Link className="blog carousel-img" to="/blog">
                    <img className="carousel-img" src="https://res.cloudinary.com/dognkye6x/image/upload/v1645840712/freddy_i1qye8.jpg" alt="place holder" />
                  </Link>

                <div className="post-info-carousel">
                  <div className="post-title-carousel">
                    <h3>Post Title 3</h3>
                  </div>
                  <div className="post-description-carousel">
                    <p>This is a short discription of my post. 3</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="arrows d-flex justify-content-around">
              <div className="arrow-left" onClick={prior}>
                <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" />
              </div>
              <div className="arrow-right" onClick={next}>
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
              </div>
            </div>
        </div>
    );
}

export default Carousel