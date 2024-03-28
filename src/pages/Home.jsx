import { Stack } from "@mui/material";
import Header from "../components/homeItems/Header";
import Profile from "../components/homeItems/Profile"; // Assuming Profile is an array of user profiles
import WingletsCard from "../components/homeItems/WingletsCard";

const Home = () => {
  return (
    <div>
      <Header />
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
        <h1 style={{ color: "yellow" }}>Winglets</h1>
      </Stack>
      <div style={{ marginLeft: "400px", padding: "10px" }}>
        {Profile.map((profile, index) => (
          <WingletsCard key={index} user={profile} />
        ))}
      </div>
    </div>
  );
};

export default Home;
