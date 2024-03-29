import React, { useState } from "react";

const WingletsCard = ({ user }) => {
  const [swiped, setSwiped] = useState(false);

  const cardStyles = {
    width: "1174px",
    height: "787px",
    backgroundColor: "inherit",
    border: "1px solid #857f74",
    borderRadius: "2rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "0 auto",
    color: "white",
    overflowY: "auto",
    display: "flex",
    position: "relative", // Add position relative to position the tick mark
  };

  const leftHalfStyles = {
    flex: "0 0 50%", // Take up half of the available space
    overflow: "hidden", // Hide overflow content
    borderRadius: "2rem 0 0 2rem", // Rounded corners only on the left side
    filter: swiped ? "blur(5px)" : "none", // Apply blur effect if swiped is true
  };

  const rightHalfStyles = {
    flex: "0 0 50%", // Take up half of the available space
    padding: "20px",
    filter: swiped ? "blur(5px)" : "none", // Apply blur effect if swiped is true

  };

  const profilePictureStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Cover the entire space of the container
  };

  const personalInfoStyles = {
    color: "white",
  };

  const actionButtonStyles = {
    margin: "0 5px",
    padding: "10px",
    backgroundColor: "#ff6b6b",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const tickStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "5rem",
    visibility: swiped ? "visible" : "hidden", // Hide tick initially
  };

  const handleSwipeRight = () => {
    setSwiped(true);
  };

  return (
      <div style={cardStyles} className="card">
        <div style={leftHalfStyles}>
          <div className="profile-picture">
            <img
                src={user.profilePicture}
                alt="Profile"
                style={profilePictureStyles}
            />
          </div>
        </div>
        <div style={rightHalfStyles}>
          <div style={personalInfoStyles} className="personal-info">
            <p>{user.name}, {user.age}</p>
            <p>{user.bio}</p>
            <p>{user.location}</p>
          </div>
          <div className="action-buttons">
            <button
                style={actionButtonStyles}
                className="action-button"
                onClick={handleSwipeRight}
                disabled={swiped} // Disable button after it's clicked once
            >
              Swipe Right
            </button>
          </div>
        </div>
        <div style={tickStyles}>✔</div>
      </div>
  );
};

export default WingletsCard;
