import React from "react";

const WingletsCard = ({ user }) => {
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
    alignItems: "center", // Align items vertically in the middle
  };

  const profilePictureStyles = {
    marginRight: "20px",
    flex: "0 0 auto",
  };

  const profileImageStyles = {
    display: "block",
    width: "200px",
    height: "auto",
  };

  const personalInfoStyles = {
    flex: "1",
    display: "flex", // Added display flex to align items vertically in the middle
    flexDirection: "column", // Align items vertically
    justifyContent: "center", // Center align items vertically
  };

  const actionButtonsStyles = {
    display: "flex",
    justifyContent: "space-between",
  };

  const actionButtonStyles = {
    flex: "1",
    margin: "0 5px",
    padding: "10px",
    backgroundColor: "#ff6b6b",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={cardStyles} className="card">
      <div style={profilePictureStyles} className="profile-picture">
        <img
          src={user.profilePicture}
          alt="Profile"
          style={profileImageStyles}
        />
      </div>
      <div style={personalInfoStyles} className="personal-info">
        <p style={{ margin: "5px 0", color: "white" }}>
          {user.name}, {user.age}
        </p>
        <p style={{ margin: "5px 0", color: "white" }}>{user.bio}</p>
        <p style={{ margin: "5px 0", color: "white" }}>{user.location}</p>
      </div>
      <div style={actionButtonsStyles} className="action-buttons">
        <button style={actionButtonStyles} className="action-button">
          Swipe Right
        </button>
        <button style={actionButtonStyles} className="action-button">
          Swipe Left
        </button>
        <button style={actionButtonStyles} className="action-button">
          Connect
        </button>
      </div>
    </div>
  );
};

export default WingletsCard;
