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
                        
                        <a href ="https://dancosta-fed.github.io/countdownTimer" className="btn" target="_blank">Check it out</a>
                        
                </div>
          </div>

      </div>


          <div className="slide-img mx-auto" >

              <div className="card h-100 ">
              <img src='https://res.cloudinary.com/dognkye6x/image/upload/v1648923834/online-Registration-Form_wbtjai.png' className="carouselImg selected" alt="Registration Form"/>

                  <div className="card-body">
                    <h4 className="card-title">Registration Form</h4>
                    <p className="card-text">I was challenged to build a responsive registration form. Using a mobile-first approach and a variety of HTML elements. 
                        This was a really fun project to create. If you click on the link, you'll see what I could come up with. I would definitely use it on a blog.
                    </p>
                      
                        <a href ="https://dancosta-fed.github.io/Online-Registration-Form" className="btn" target="_blank">Check it out</a>
                      
                  </div>
              </div>
          </div>

          <div className="slide-img mx-auto" >

              <div className="card h-100 ">
              <img src='https://res.cloudinary.com/dognkye6x/image/upload/v1648923834/responsive-layout_qjsbsw.png' className="carouselImg selected" alt="responsive-layout"/>
                  
                    <div className="card-body">
                        <h4 className="card-title">Responsive Layout</h4>
                        <p className="card-text">Web pages should look and function well on any size of screen. And building them to work as such is a skill we all need to have. 
                            Here, using only HTML and CSS I was able to create a responsive website for mobiles, desktops, tablets of all sizes.
                        </p>
                            
                            <a href ="https://dancosta-fed.github.io/Responsive-Layout---Dan-Costa" className="btn" target="_blank">Check it out</a>
                            
                    </div>
              </div>

          </div>
    </div>
  )   
}
export default Portfolio