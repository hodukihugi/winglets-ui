import { Stack } from "@mui/material";
import Header from "../components/homeItems/Header";
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
        <h1 style={{ color: "#EB9DA3" }}>Winglets</h1>
      </Stack>
      <div style={{ marginLeft: "400px", padding: "10px" }}>
        <WingletsCard />
      </div>
    </div>
  );
};

export default Home;
