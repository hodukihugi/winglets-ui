import React from "react";
import { Stack } from "@mui/material";
import Jobs from "../../components/profileItems/Jobs";
import Hobby from "../../components/profileItems/Hobby";

const EditProfile = () => {
  return (
    <div
      style={{
        marginLeft: "400px",
        backgroundColor: "inherit",
        height: "100vh",
        width: "calc(100% - 400px)",
      }}
    >
      <Stack
        sx={{
          height: "80px",
          borderBottom: "1px solid #857f74",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "white" }}>Date Profile</h1>
      </Stack>
      {console.log("1")}

      <Jobs />
      <Hobby />
    </div>
  );
};

export default EditProfile;
