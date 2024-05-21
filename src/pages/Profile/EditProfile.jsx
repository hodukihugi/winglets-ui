import React from "react";
import {Button, Stack} from "@mui/material";
import Horoscope from "../../components/profilePageItems/Horoscope";
import AgePreferences from "../../components/introducingPageItems/AgePreferences";
import Birthdate from "../../components/profilePageItems/Birthdate";
import Images from '../../components/profilePageItems/Images';
import "./editprofile.css";
import HomeTown from "../../components/profilePageItems/HomeTown";
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
        <Images />
        <Birthdate />
        {/*<Jobs /> */}
        <Horoscope />
        <AgePreferences />
        {/*<HobbyComponent />*/}
        <HomeTown />
        <Button variant="contained">Save</Button>
      </div>
    </div>
  ); 
};

export default EditProfile;
