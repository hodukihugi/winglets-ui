import { Avatar, Button, Stack } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
const ChatScreenHeader = ({ person }) => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "80px",
        borderBottom: "1px solid #857f74",
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
        backgroundColor: "#181a1b",
        flexDirection: "row",
        zIndex: 1,
        justifyContent: "space-between",
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
          alt={person.name}
          src={person.avatar}
          sx={{
            width: 50,
            height: 50,
          }}
        />
        <h1 style={{ color: "white", marginLeft: "20px" }}>{person.name}</h1>
      </Stack>

      <Stack direction="row">
        <Button>
          <CallIcon />
        </Button>

        <Button>
          <MoreVertIcon />
        </Button>

        <Button onClick={() => navigate("/")}>
          <CloseIcon />
        </Button>
      </Stack>
    </Stack>
  );
};
export default ChatScreenHeader;
