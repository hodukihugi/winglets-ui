import { Avatar, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChatScreenHeader from "./ChatScreenHeader";
import matchedPeople from "../profileItems/matchedPeople";
import { useParams } from "react-router-dom";
const ChatScreen = () => {
  let { personId } = useParams();
  console.log("Person ID:", personId);

  const person = matchedPeople.find((p) => p.id === parseInt(personId));
  console.log("Person:", person);

  if (!person) {
    return <div>Person not found!</div>;
  }

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
    width: "100%",
    justifyContent: "space-between",
    position: "fixed",
    bottom: 0,
    backgroundColor: "white",
    borderTop: "1px solid #ccc",
    marginTop: "30px",
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
    color: "blue",
    padding: "5px 5px",
    marginRight: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div>
      <ChatScreenHeader person={person} />
      <div
        className="chatScreenContainer"
        style={{
          marginTop: "300px",
          backgroundColor: "inherit",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {person &&
          person.messages &&
          person.messages.map((message, index) =>
            message.name ? (
              <div
                key={index}
                className="chatScreenMessage"
                style={chatScreenMessage}
              >
                <Avatar
                  className="chatScreenAvatar"
                  alt={message.name}
                  src={person.avatar} // Fixed this line
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
            // Add some content for the button, for example:
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
