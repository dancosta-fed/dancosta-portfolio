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
      }, 3000);

      // stop interval
      slideshow.current.addEventListener('mouseenter', () => {
        clearInterval(slideShowInterval.current);
      })

      // restart interval
      slideshow.current.addEventListener('mouseleave', () => {
        slideShowInterval.current = setInterval(() => {
          next();
        }, 3000);
      })
    }, [])

    return (
        <div className="carousel container mx-auto">          
            <div className="slideshow-container" ref={slideshow}>

            {/* Expense Tracker */}
            <div className="slide-img mx-auto" >
              <div className="card card-port">
                  <img src='https://res.cloudinary.com/dognkye6x/image/upload/v1649788047/expense-tracker_ubrx6r.png' className="carouselImg selected" alt="Registration Form"/>

                  <div className="card-body">
                    <h4 className="card-title">Expenses Tracker</h4>
                    <p className="card-text"> This is just a simple expenses tracker I created using React.
                    </p>
                      
                        <a href ="https://addexpenses.herokuapp.com/" className="btn portfolio-btn" target="_blank">Check it out</a>
                  </div>
              </div>
            </div>

               {/* Travel Tribe */}
               <div className="slide-img mx-auto" >

                  <div className="card card-port">
                      <img src='https://res.cloudinary.com/dognkye6x/image/upload/v1649261476/Screen_Shot_2022-04-06_at_13.04.01_mqre8j.png' className="carouselImg selected" alt="Registration Form"/>

                      <div className="card-body">
                        <h4 className="card-title">Travel Tribe</h4>
                        <p className="card-text"> API to connect a map, chatrooms, reviews, bookmarks, bookings and an intuitive trip creator. All done with Ruby on Rails.
                        </p>
                          
                            <a href ="http://www.trvltribe.com/" className="btn portfolio-btn" target="_blank">Check it out</a>
                      </div>
                  </div>
              </div>

              {/* Movie List */}
              <div className="slide-img mx-auto" >
                <div className="card card-port">

                  <img src='https://res.cloudinary.com/dognkye6x/image/upload/v1649263604/Screen_Shot_2022-04-06_at_13.46.39_tkuzbv.png' className="carouselImg selected" alt="responsive-layout"/>
                    
                    <div className="card-body">
                        <h4 className="card-title">Movie List</h4>
                        <p className="card-text"> I've used Ruby on Rails, Postgres and API, plus Stymulus, to create this appication. It's a Movie List. 
                        </p>
                            
                            <a href ="https://movies-bookmark-rails.herokuapp.com/" className="btn portfolio-btn" target="_blank">Check it out</a>
                            
                    </div>
                </div>
              </div>

              {/* Trippy Boats */}
              <div className="slide-img mx-auto" >

                <div className="card card-port">
                <img src='https://res.cloudinary.com/dognkye6x/image/upload/v1649263316/Screen_Shot_2022-04-06_at_13.41.46_fupksq.png' className="carouselImg selected" alt="responsive-layout"/>
                    
                      <div className="card-body">
                          <h4 className="card-title">Trippy Boats</h4>
                          <p className="card-text">Similar to Travel Tribe, Trippy Boats was created at the Le Wagon's Bootcamp. This is a AirBnb clone.
                          </p>
                              
                              <a href ="https://trippy-boats.herokuapp.com/" className="btn portfolio-btn" target="_blank">Check it out</a>
                              
                      </div>
                </div>

              </div>

              {/* GitHub Repo's Explorer */}

              <div className="slide-img mx-auto" >

                <div className="card card-port">
                    <img src='https://res.cloudinary.com/dognkye6x/image/upload/v1649900559/gh-repo_pdo6cz.png' className="carouselImg" alt="responsive-layout"/>

                      <div className="card-body">
                          <h4 className="card-title">Github Repo's Explorer</h4>
                          <p className="card-text">An app to find all my Github repos. This was done using ReactJs and TypeScript.</p>

                              <a href ="https://dancosta-fed.github.io/dan-github-explorer/" className="btn portfolio-btn" target="_blank">Check it out</a>
                              
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