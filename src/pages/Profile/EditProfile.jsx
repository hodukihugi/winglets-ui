import React from "react";
import { Stack } from "@mui/material";
import Jobs from "../../components/profilePageItems/Jobs";
import Hobby from "../../components/profilePageItems/HomeTown";
import Horoscope from "../../components/profilePageItems/Horoscope";
import Images from "../../components/profilePageItems/Images";
import HobbyComponent from "../../components/introducingPageItems/Hobby";
import AgePreferences from "../../components/introducingPageItems/AgePreferences";
import Birthdate from "../../components/profilePageItems/Birthdate";

const EditProfile = () => {
  return (
    <div
      style={{
        marginLeft: "400px",
        backgroundColor: "inherit",
        height: "100vh",
        width: "calc(100% - 400px)",
        display: "flex",
        flexDirection: "column",
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
      <Images />
      <Birthdate />
      <Jobs />
      <Hobby />
      <Horoscope />
      <AgePreferences />
      <HobbyComponent />
    </div>
  );
};

export default EditProfile;
