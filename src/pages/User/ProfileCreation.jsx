import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import Jobs from "../../components/profilePageItems/Jobs";
import HomeTown from "../../components/profilePageItems/HomeTown";
import Horoscope from "../../components/profilePageItems/Horoscope";
import InterestsComponent from "../../components/introducingPageItems/Interests";
import Birthdate from "../../components/profilePageItems/Birthdate";
import "./ProfileCreation.css";
import HeightPreferenceSlider from "../../components/profilePageItems/Height";
const ProfileCreation = () => {
  const [name, getName] = useState("");
  const handleNameInput = (e) => {
    getName(e.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: "inherit",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        style={{
          color: "white",
        }}
      >
        Welcome to Winglets
      </Typography>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={handleNameInput}
      />
      <Birthdate />
      <Jobs />
      <Horoscope />
      <InterestsComponent />
      <HomeTown />
      <HeightPreferenceSlider />
    </div>
  );
};

export default ProfileCreation;
