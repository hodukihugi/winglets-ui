import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const name = "hihahah";
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Stack
      sx={{
        borderRight: "1px solid #857f74",
        position: "fixed",
        top: 0,
        left: 0,
        width: "400px",
        height: "100%",
        backgroundColor: "#181a1b",
        zIndex: 1,
        padding: "10px",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <img
          src="https://i.pinimg.com/236x/97/43/ec/9743ecac80966a95e9d328c08b995c04.jpg"
          alt="profilepicture"
          onClick={() => navigate("/profile")}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            cursor: "pointer",
          }}
        />

        <span style={{ color: "white", fontSize: "20px" }}>{name}</span>
      </Stack>
      {isExpanded && (
        <Button
          onClick={toggleExpansion}
          sx={{
            cursor: "pointer",
            color: "#fff",
            fontSize: "17px",
            marginTop: "20px",
            position: "relative",
            transition: "0.1s",
            width: "400px",
            height: "40px",
            backgroundColor: "#4a3b00",
            textTransform: "none",
            "&:active": {
              transform: "scale(0.98)",
            },
          }}
        >
          Back to meeting the people
        </Button>
      )}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{
          marginTop: "30px",
          textAlign: "center",
          borderBottom: "1px solid #857f74",
          borderTop: "1px solid #857f74",
        }}
      >
        <span style={{ color: "white" }}>Match Queue</span>
        <Button
          onClick={toggleExpansion}
          style={{ color: "white", marginTop: "5px" }}
        >
          {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Stack>

      <span style={{ color: "white", marginTop: "20px" }}>Conversations</span>
    </Stack>
  );
};

export default Header;
