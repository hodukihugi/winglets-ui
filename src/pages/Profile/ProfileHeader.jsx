import React from "react";
import { Stack, Tab, Tabs, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../../assets/font/stylesheet.css";
import MyProfile from "../../components/profileItems/myProfile";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/slices/auth.slice";
import "../../assets/font/Roboto.css";
import {profileLogout} from "../../redux/slices/profile.slice";
const ProfileHeader = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useAppDispatch();

  const navigateToHome = async () => {
    setIsTransitioning(true);
    await new Promise((resolve) => setTimeout(resolve, 400)); // Wait for 500ms for transition effect
    setIsTransitioning(false);
    navigate("/");
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(profileLogout());
    navigate("/login");
  };

  return (
    <div>
      <Stack
        direction="column"
        sx={{
          borderRight: "1px solid #F04393",
          position: "fixed",
          top: 0,
          left: 0,
          width: "25%",
          height: "100vh",
          backgroundColor: "white",
          zIndex: 1,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          marginTop={"20px"}
          marginLeft={"15px"}
        >
          <Button
            onClick={() => navigateToHome()}
            hidden={isTransitioning}
            sx={{ p: 0 }}
          >
            <ArrowBackIosIcon sx={{ color: "black" }} />
          </Button>
          <img
            src={MyProfile.avatar}
            alt="profilePicture"
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              cursor: "pointer",
              marginLeft: isTransitioning ? "-70px" : "75px",
              transition: "margin-left 0.4s ease",
            }}
          />
        </Stack>
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
            label="Edit Profile"
            value={0}
            selected={value === 0}
            onClick={() => navigate("/profile")}
            sx={{
              marginTop: "200px",
              marginBottom: "10px",
              fontSize: 20,
              fontFamily: "'Madimi One'",
              textTransform: "none",
              color: "#857f74",
              "&.Mui-selected": {
                color: "black",
                fontSize: 25,
              },
            }}
          />
          <Tab
            label="Settings"
            value={1}
            selected={value === 1}
            onClick={() => navigate("/profile/settings")}
            sx={{
              marginBottom: "10px",
              fontSize: 20,
              fontFamily: "'Madimi One'",
              textTransform: "none",
              color: "#857f74",
              "&.Mui-selected": {
                color: "black",
                fontSize: 25,
              },
            }}
          />
          <Tab
            label="Contact And FAQS"
            value={2}
            selected={value === 2}
            onClick={() => navigate("/profile/faq")}
            sx={{
              marginBottom: "10px",
              fontSize: 20,
              fontFamily: "'Madimi One'",
              textTransform: "none",
              color: "#857f74",
              "&.Mui-selected": {
                color: "black",
                fontSize: 25,
              },
            }}
          />
          <Tab
            label="Log Out"
            onClick={handleLogout}
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
