import React from "react";

const IphoneCard = () => {
  return(
    <div className="container notificaiton-block">
      <div className="card-text mb-2">
        <h6 className="mb-0">MessageDrop</h6>
        <p className="text-center mb-0 notification-description">This user would like to share something with you.</p>
      </div>

      <div className="notification-background">
        {/* <img src="../../assets/images/profile.id" alt="" /> */}
      </div>

      <div className="notification-btn">
        <div className="decline-btn btn">
          Decline
        </div>
        <div className="accept-btn btn">
          Accept
        </div>
      </div>
    </div>
  )
}

export default IphoneCard