import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

class Banner extends React.Component {
  render() {
    return(
      <div className="banner-bg">
        <div className="avatar">
          <img className="avatar-img" src="https://res.cloudinary.com/dognkye6x/image/upload/v1648345738/IMG_0591_huppm8.jpg" alt="Dan's profile photo." />
        </div>

        <div className="buttons">
          <div className="hire-btn">
            <a className="btn btn-main" href="mailto:dancosta.id@gmail.com">Hire Me</a>
          </div>

          <div className="social-icons">
            {/* <FontAwesomeIcon icon={brands('Github')} /> */}
          </div>
        </div>
      </div>
  );
}

}



export default Banner