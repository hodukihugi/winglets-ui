import { Avatar, Button, Stack } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
const ChatScreenHeader = ({ matchedProfile }) => {
  return (
    <Stack
      sx={{
        position: "fixed", // Set position to fixed
        top: 0,
        width: "1500px",
        height: "80px",
        borderBottom: "1px solid #857f74",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
        marginLeft: "415px",
        backgroundColor: "#181a1b",
        flexDirection: "row",
        marginBottom: "20px",
        zIndex: 1, // Set a high z-index to ensure it appears above other content
        justifyContent: "space-between", // Align items to the start and end of the row
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          marginLeft: "20px",
        }}
      >
        <Avatar
          className="chatScreenAvatar"
          alt={matchedProfile.name}
          src={matchedProfile.avatar}
          sx={{
            width: 50,
            height: 50,
          }}
        />
        <h1 style={{ color: "white", marginLeft: "20px" }}>
          {matchedProfile.name}
        </h1>
      </Stack>

      <Stack direction="row">
        <Button>
          <CallIcon />
        </Button>

        <Button>
          <MoreVertIcon />
        </Button>

        <Button>
          <CloseIcon />
        </Button>
      </Stack>
    </Stack>
  );
};
export default ChatScreenHeader;
