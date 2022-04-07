import React, { useRef } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const IphoneCard = () => {
  const decline = useRef(null)
  const TheSwal = withReactContent(Swal)

  const success = () => {
    TheSwal.fire({
      title: 'Good to see you here!',
      text: 'Hope you enjoy my portfolio! Get in touch!',
      imageUrl: 'https://media.giphy.com/media/xJMM9toDfnehfNxTSG/giphy.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Have a good day gif',
    })
  }

  const acceptBtn = () => {
    success()
  };

  const declineBtn = () => {
    decline.current.classList.add("hide-notification");
  };

  return(
    <div className="container notificaiton-block" ref={decline}>
      <div className="card-text mb-2">
        <h6 className="mb-0">MessageDrop</h6>
        <p className="text-center mb-0 notification-description">This user would like to share something with you.</p>
      </div>

      <div className="notification-background"></div>

      <div className="notification-btn">
        <div>
          <button className="decline-btn btn" onClick={() => declineBtn()}>Decline</button>
        </div>
        <div>
         <button className="accept-btn btn" onClick={() => acceptBtn()}>Accept</button>
        </div>
      </div>
    </div>
  )
}

export default IphoneCard