import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import myProfile from "../profileItems/myProfile";
const Header = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const navigateToProfile = async () => {
    setIsTransitioning(true);
    await new Promise((resolve) => setTimeout(resolve, 400));
    setIsTransitioning(false);
    navigate("/profile");
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
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ marginTop: "10px" }}
      >
        <img
          src={myProfile.img}
          alt="profilepicture"
          onClick={() => navigateToProfile()}
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            cursor: "pointer",
            marginLeft: isTransitioning ? "140px" : "0px",
            transition: "margin-left 0.4s ease",
          }}
        />

        {!isTransitioning && (
          <span style={{ color: "white", fontSize: "20px" }}>
            {myProfile.name}
          </span>
        )}
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
            backgroundColor: "#f3a7ad",
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
