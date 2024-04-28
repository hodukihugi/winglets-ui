import { Stack } from "@mui/material";
import Header from "../components/homeItems/Header";
import WingletsCard from "../components/homeItems/WingletsCard";
import { useState } from "react";
import ChatScreen from "../components/homeItems/ChatScreen";
import matchedProfile from "../components/profileItems/matchedProfile";
import ChatScreenHeader from "../components/homeItems/ChatScreenHeader";
const Home = () => {
  const [matchProfile, setMatchProfile] = useState([]);
  return (
    <div>
      <Header matchedProfile={matchProfile} />
      {/*<Stack
        sx={{
          marginLeft: "400px",
          height: "80px",
          marginBottom: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "#EB9DA3" }}>Winglets</h1>
      </Stack>
      <div style={{ marginLeft: "400px", padding: "10px" }}>
        <WingletsCard
          matchedProfile={matchedProfile}
          setMatchedProfile={setMatchedProfile}
        />
      </div> */}
      <ChatScreenHeader matchedProfile={matchedProfile} />
      <ChatScreen matchedProfile={matchedProfile} />
    </div>
  );
};

export default Home;
