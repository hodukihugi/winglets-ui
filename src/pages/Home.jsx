import { Stack } from "@mui/material";
import Header from "../components/homeItems/Header";
import WingletsCard from "../components/homeItems/WingletsCard";
import { useState } from "react";
import matchedPeople from "../components/profileItems/matchedPeople";
const Home = () => {
  const [matchedProfile, setMatchedProfile] = useState([]);
  return (
    <div>
      <Header matchedProfile={matchedProfile} matchedPeople={matchedPeople} />
      <Stack
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
      </div>
    </div>
  );
};

export default Home;
