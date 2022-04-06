import React from "react";

const Portfolio = () => {

  return (
    <div className="container portfolio-wrapper">

      <div className="slide-img mx-auto" >

          <div className="card h-100 ">
              <img src='https://res.cloudinary.com/dognkye6x/image/upload/v1648923834/countdown_vidjov.png' className="carouselImg" alt="responsive-layout"/>

                <div className="card-body">
                    <h4 className="card-title">Countdown to Le Wagon Bootcamp</h4>
                    <p className="card-text"> I'm really excited with the fact that I'm doing a Bootcamp. I'm sure it's going to help me boost my career. And to prove that, I've done a countdown app to the day the course starts. 
                        This is also a good way to practice more about React js.
                    </p>
                        
                        <a href ="https://countdown-to-lewagon.herokuapp.com/" className="btn portfolio-btn" target="_blank">Check it out</a>
                        
                </div>
          </div>

      </div>


          <div className="slide-img mx-auto" >

              <div className="card h-100 ">
              <img src='https://res.cloudinary.com/dognkye6x/image/upload/v1649261476/Screen_Shot_2022-04-06_at_13.04.01_mqre8j.png' className="carouselImg selected" alt="Registration Form"/>

                  <div className="card-body">
                    <h4 className="card-title">Travel Tribe</h4>
                    <p className="card-text"> Travel Tribe is a concept created at Le Wagon's Bootcamp. I was teamed up with two other Developers Edward from Estonia and Rodrigo from Brazil. On the website you will find many features such API connected map, chatrooms, reviews, bookmarks, bookings and an intuitive trip creator. All done with Ruby on Rails.
                    </p>
                      
                        <a href ="http://www.trvltribe.com/" className="btn portfolio-btn" target="_blank">Check it out</a>
                      
                  </div>
              </div>
          </div>

          <div className="slide-img mx-auto" >

              <div className="card h-100 ">
              <img src='https://res.cloudinary.com/dognkye6x/image/upload/v1649263316/Screen_Shot_2022-04-06_at_13.41.46_fupksq.png' className="carouselImg selected" alt="responsive-layout"/>
                  
                    <div className="card-body">
                        <h4 className="card-title">Trippy Boats</h4>
                        <p className="card-text">Similar to Travel Tribe, Trippy Boats was created at the Le Wagon's Bootcamp. This is a AirBnb clone. But, instead, this is an "Airbnb" for boats. This was created with Ruby on Rails and Postgres.
                        </p>
                            
                            <a href ="https://trippy-boats.herokuapp.com/" target="_blank">Check it out</a>
                            
                    </div>
              </div>

          </div>

          <div className="slide-img mx-auto" >

            <div className="card h-100 ">

              <img src='https://res.cloudinary.com/dognkye6x/image/upload/v1649263604/Screen_Shot_2022-04-06_at_13.46.39_tkuzbv.png' className="carouselImg selected" alt="responsive-layout"/>
                
                <div className="card-body">
                    <h4 className="card-title">Movie List</h4>
                    <p className="card-text"> I've used Ruby on Rails and Postgres, plus Stymulus, to create this appication. It's a Movie List. Where you can create a topic and add movies to it. It's a simple one using a simple movie's Api. 
                    </p>
                        
                        <a href ="https://movies-bookmark-rails.herokuapp.com/" target="_blank">Check it out</a>
                        
                </div>
            </div>
         </div>
    </div>
  )   
}
export default Portfolio