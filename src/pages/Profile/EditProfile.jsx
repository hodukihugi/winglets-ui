import React from "react";
import { Stack } from "@mui/material";
import Jobs from "../../components/profilePageItems/Jobs";
import Hobby from "../../components/profilePageItems/HomeTown";
import Horoscope from "../../components/profilePageItems/Horoscope";
import HobbyComponent from "../../components/introducingPageItems/Hobby";
import AgePreferences from "../../components/introducingPageItems/AgePreferences";
import Birthdate from "../../components/profilePageItems/Birthdate";
import "./editprofile.css";
const EditProfile = () => {
  return (
    <div
      style={{
        marginLeft: "25%",
        backgroundColor: "white",
        height: "100vh",
        width: "75%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        sx={{
          height: "80px",
          borderBottom: "1px solid #F04393",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <h1 style={{ color: "black" }}>Date Profile</h1>
      </Stack>
      <div className="job-item-component">
        <Birthdate />
        <Jobs />
        <Hobby />
        <Horoscope />
        <AgePreferences />
        <HobbyComponent />
      </div>
    </div>
  );
};

export default EditProfile;
