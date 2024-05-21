import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import myProfile from "../profileItems/myProfile";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import RouteIcon from "@mui/icons-material/Route";
const Header = ({ matchedProfile, matchedPeople }) => {
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

  const navigateToChatScreen = (item) => {
    navigate(`/chat/${item.id}`);
  };
  const matchedItem = (item, index) => {
    return (
      <div
        key={index}
        style={{
          display: "flex",
          alignItems: "center",
          height: "80px",
          backgroundColor: "#white", // Màu nền ban đầu
          transition: "box-shadow 0.3s ease", // Thêm transition cho box-shadow
          boxShadow: "0 0 0 0 rgba(0,0,0,0.3)", // Hiệu ứng box-shadow ban đầu
          borderRadius: "8px", // Bo tròn các góc của khối
          marginTop: "5px",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgb(255, 244, 251)")
        } // Hiệu ứng khi di chuột vào
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "rgb(255, 255, 255)")
        } // Hiệu ứng khi di chuột ra
        onClick={() => navigateToChatScreen(item)}
      >
        <img
          src={item.avatar}
          alt=""
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            cursor: "pointer",
            marginRight: "20px",
          }}
        ></img>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              color: "black",
              margin: 0,
              marginBottom: "5px",
              fontSize: "25px",
            }}
          >
            {item.name}
          </h1>
          <span
            style={{
              color: "#9b9386",
            }}
          >
            {item.lastMessage}
          </span>
        </div>
      </div>
    );
  };

  const matchingPeople = (item, index) => {
    return (
      <div
        key={index}
        style={{
          display: "flex",
          alignItems: "center",
          height: "80px",
          backgroundColor: "#ffffff", // Màu nền ban đầu
          transition: "box-shadow 0.3s ease", // Thêm transition cho box-shadow
          boxShadow: "0 0 0 0 rgba(0,0,0,0.3)", // Hiệu ứng box-shadow ban đầu
          borderRadius: "8px", // Bo tròn các góc của khối
          marginTop: "5px",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow =
            "0 0 20px 5px rgba(255, 255, 255, 0.7)")
        } // Hiệu ứng khi di chuột vào
        onMouseLeave={(e) =>
          (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(0,0,0,0.3)")
        } // Hiệu ứng khi di chuột ra
      >
        <img
          src={item.avatar}
          alt=""
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            cursor: "pointer",
            marginRight: "20px",
          }}
        ></img>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              color: "black",
              margin: 0,
              marginBottom: "5px",
              fontSize: "25px",
            }}
          >
            {item.name}
          </h1>
        </div>
      </div>
    );
  };

  return (
    <Stack
      sx={{
        marginLeft: "8%",
        position: "fixed",
        marginTop: "10px",
        left: 0,
        width: "16%",
        height: "100vh",
        backgroundColor: "white",
        zIndex: 1,
        padding: "10px",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ marginTop: "10px" }}
        onClick={() => navigateToProfile()}
      >
        <img
          src={myProfile.avatar}
          alt="profilepicture"
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
          <span style={{ color: "black", fontSize: "20px" }}>
            {myProfile.name}
          </span>
        )}
      </Stack>

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "8px",
            marginBottom: "8px",
          }}
        >
          <RouteIcon style={{ color: "black", marginRight: "8px" }} />

          <span style={{ color: "black" }}>Match Queue</span>
        </div>
        <Button onClick={toggleExpansion} style={{ color: "black" }}>
          {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Stack>
      {isExpanded &&
        matchedProfile.map((item, index) => matchingPeople(item, index))}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "8px",
          marginBottom: "5px",
        }}
      >
        <QuestionAnswerIcon style={{ color: "#F04393", marginRight: "8px" }} />
        <span style={{ color: "#F04393", fontSize: "16px" }}>
          Conversations
        </span>
      </div>
      {matchedPeople.map((item, index) => matchedItem(item, index))}
    </Stack>
  );
};

export default Header;
