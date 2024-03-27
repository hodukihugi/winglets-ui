import React from "react";
import { Stack, Tab, Tabs } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../../assets/stylesheet.css";

const ProfileHeader = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Stack
        direction="column"
        sx={{
          borderRight: "1px solid #857f74",
          position: "fixed",
          top: 0,
          left: 0,
          width: "400px",
          height: "100%",
          backgroundColor: "#181a1b",
          zIndex: 1,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          orientation="vertical"
          variant="scrollable"
          sx={{ width: "100%" }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "inherit",
              fontFamily: "'MadimiOne-Regular'",
            },
          }}
        >
          <Tab
            icon={<ArrowBackIosIcon sx={{ color: "white" }} />}
            onClick={() => navigate("/")}
          />
          <Tab
            label="Edit Profile"
            value={1}
            selected={value === 1}
            onClick={() => navigate("/profile")}
            sx={{
              marginTop: "200px",
              marginBottom: "10px",
              fontSize: 20,
              fontFamily: "'Madimi One'",
              textTransform: "none",
              color: "#857f74",
              "&.Mui-selected": {
                color: "white",
                fontSize: 25,
              },
            }}
          />
          <Tab
            label="Settings"
            value={2}
            selected={value === 2}
            sx={{
              marginBottom: "10px",
              fontSize: 20,
              fontFamily: "'Madimi One'",
              textTransform: "none",
              color: "#857f74",
              "&.Mui-selected": {
                color: "white",
                fontSize: 25,
              },
            }}
          />
          <Tab
            label="Contact And FAQS"
            value={3}
            selected={value === 3}
            onClick={() => navigate("/profile/faq")}
            sx={{
              marginBottom: "10px",
              fontSize: 20,
              fontFamily: "'Madimi One'",
              textTransform: "none",
              color: "#857f74",
              "&.Mui-selected": {
                color: "white",
                fontSize: 25,
              },
            }}
          />
          <Tab
            label="Log Out"
            onClick={() => navigate("/login")}
            sx={{
              marginBottom: "10px",
              fontSize: 20,
              fontFamily: "'Madimi One'",
              textTransform: "none",
              color: "#857f74",
            }}
          />
        </Tabs>
      </Stack>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ProfileHeader;
