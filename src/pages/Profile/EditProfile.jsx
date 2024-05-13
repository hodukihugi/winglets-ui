import React from "react";
import { Stack } from "@mui/material";
import Jobs from "../../components/profilePageItems/Jobs";
import Hobby from "../../components/profilePageItems/Hobby";
import Horoscope from "../../components/profilePageItems/Horoscope";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Profile from "../../components/profileItems/listProfile";
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
      <div style={{ margin: "auto", marginTop: "80px", marginBottom: "50px" }}>
        <ImageList
          sx={{ width: 400, height: 318, gap: 0 }}
          cols={3}
          rowHeight={164}
        >
          {Profile.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                alt={item.title}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <Jobs />
      <Hobby />
      <Horoscope />
    </div>
  );
};

export default EditProfile;
