import { Avatar, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const ChatScreen = ({ matchedProfile }) => {
  const chatScreenMessage = {
    display: "flex",
    alignItems: "center",
    padding: "20px",
  };

  const chatScreenText = {
    marginLeft: "10px",
    backgroundColor: "lightgray",
    padding: "15px",
    borderRadius: "20px",
  };

  const chatScreenTextUser = {
    marginLeft: "auto",
    backgroundColor: "#29b3cd",
    padding: "15px",
    borderRadius: "20px",
    color: "white",
  };

  const chatScreenInputContainer = {
    display: "flex",
    alignItems: "center",
    padding: "5px",
    width: "1500px",
    justifyContent: "space-between",
    position: "fixed",
    bottom: 0,
    backgroundColor: "white",
    borderTop: "1px solid #ccc",
    marginTop: "30px",
    marginLeft: "10px",
    marginRight: "10px",
  };

  const chatScreenInputField = {
    flex: 1,
    padding: 0,
    border: "none",
    marginRight: "10px",
    height: "30px",
  };

  const chatScreenInputButton = {
    border: "none",
    backgroundColor: "blue",
    color: "#fe3d71",
    padding: "5px 5px",
    marginRight: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div
      className="chatScreenContainer"
      style={{
        marginLeft: "405px",
        marginTop: "300px",
        backgroundColor: "inherit",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {matchedProfile &&
        matchedProfile.messages &&
        matchedProfile.messages.map((message, index) =>
          message.name ? (
            <div
              key={index}
              className="chatScreenMessage"
              style={chatScreenMessage}
            >
              <Avatar
                className="chatScreenAvatar"
                alt={message.name}
                src={matchedProfile.avatar}
              />
              <p style={chatScreenText}>{message.message}</p>
            </div>
          ) : (
            <div key={index} style={chatScreenMessage}>
              <p style={chatScreenTextUser}>{message.message}</p>
            </div>
          )
        )}
      <form className="chatScreenInput" style={chatScreenInputContainer}>
        <input
          type="text"
          placeholder="Type a message"
          style={chatScreenInputField}
          name="messageInput"
        />
        <Button
          style={chatScreenInputButton}
          type="submit"
          endIcon={<SendIcon />}
        ></Button>
      </form>
    </div>
  );
};

export default ChatScreen;
