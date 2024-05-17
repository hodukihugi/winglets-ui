import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import Jobs from "../../components/profilePageItems/Jobs";
import HomeTown from "../../components/profilePageItems/HomeTown";
import Horoscope from "../../components/profilePageItems/Horoscope";
import InterestsComponent from "../../components/introducingPageItems/Interests";
import Birthdate from "../../components/profilePageItems/Birthdate";
import "./ProfileCreation.css";
import Height from "../../components/profilePageItems/Height";

const ProfileCreation = () => {
  const [name, getName] = useState("");
  const handleNameInput = (e) => {
    getName(e.target.value);
  };

  return (
    <div className="profile-creation-container">
      <Typography className="welcome-text" sx={{ fontSize: "50px" }}>
        Welcome to Winglets
      </Typography>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={handleNameInput}
        className="input-field"
      />
      <div>
        <div className="gender-card">
          <div className="large-svg-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 50 90"
              className="largemalesvg"
              height="90"
              width="50"
            >
              <circle
                strokeWidth="6"
                stroke="#76E3FE"
                r="22"
                cy="25"
                cx="25"
              ></circle>
              <path
                strokeLinecap="round"
                strokeWidth="6"
                stroke="#76E3FE"
                d="M25 47L25 87"
              ></path>
              <path
                strokeLinecap="round"
                strokeWidth="6"
                stroke="#76E3FE"
                d="M25 86.6958L38.6958 73"
              ></path>
              <path
                strokeLinecap="round"
                strokeWidth="6"
                stroke="#76E3FE"
                d="M11 73L24.6958 86.6958"
              ></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 50 90"
              className="largefemalesvg"
              height="90"
              width="50"
            >
              <circle
                strokeWidth="6"
                stroke="#F57CB3"
                r="22"
                cy="25"
                cx="25"
              ></circle>
              <path
                strokeLinecap="round"
                strokeWidth="6"
                stroke="#F57CB3"
                d="M25 47L25 87"
              ></path>
              <path
                strokeLinecap="round"
                strokeWidth="6"
                stroke="#F57CB3"
                d="M12 73H38"
              ></path>
            </svg>
          </div>
          <form action="#">
            <p className="heading">What's your gender?</p>
            <div className="radio-wrapper">
              <input
                className="gender-radio-buttons"
                id="male"
                value="male"
                name="gender"
                type="radio"
              />
              <label className="genderlabel malebutton" htmlFor="male">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 50 90"
                  className="smallsvg malesmallsvg"
                >
                  <circle
                    strokeWidth="6"
                    stroke="#76E3FE"
                    r="22"
                    cy="25"
                    cx="25"
                  ></circle>
                  <path
                    strokeLinecap="round"
                    strokeWidth="6"
                    stroke="#76E3FE"
                    d="M25 47L25 87"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="6"
                    stroke="#76E3FE"
                    d="M25 86.6958L38.6958 73"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="6"
                    stroke="#76E3FE"
                    d="M11 73L24.6958 86.6958"
                  ></path>
                </svg>
                Male
              </label>

              <input
                className="gender-radio-buttons"
                id="female"
                value="female"
                name="gender"
                type="radio"
              />
              <label className="genderlabel femalebutton" htmlFor="female">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 50 90"
                  className="smallsvg"
                >
                  <circle
                    strokeWidth="6"
                    stroke="#F57CB3"
                    r="22"
                    cy="25"
                    cx="25"
                  ></circle>
                  <path
                    strokeLinecap="round"
                    strokeWidth="6"
                    stroke="#F57CB3"
                    d="M25 47L25 87"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="6"
                    stroke="#F57CB3"
                    d="M12 73H38"
                  ></path>
                </svg>
                Female
              </label>

              <input
                className="gender-radio-buttons"
                id="other"
                value="other"
                name="gender"
                type="radio"
              />
              <label className="genderlabel otherbutton" htmlFor="other">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 78 75"
                  className="smallsvg other-gender"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="6"
                    stroke="#9B4AED"
                    d="M73.4657 16.6983L48.2159 16.6984L19.9816 58.0001L2.99911 58"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="6"
                    stroke="#9B4AED"
                    d="M73.1641 16.698L59.4705 2.99992"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="6"
                    stroke="#9B4AED"
                    d="M59.4648 30.696L73.1629 17.0024"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="6"
                    stroke="#9B4AED"
                    d="M74.022 57.8121L51.1697 57.8121L19.9997 16.9999L3 17"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="6"
                    stroke="#9B4AED"
                    d="M73.748 57.8123L61.3547 71.51"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="6"
                    stroke="#9B4AED"
                    d="M61.3496 43.8147L73.747 57.5079"
                  ></path>
                </svg>
                Other
              </label>
            </div>
          </form>
        </div>
      </div>
      <Birthdate />
      <Jobs />
      <Horoscope />
      <InterestsComponent />
      <HomeTown />
      <Height />
      <div>
        <button className="animated-button">
          <svg
            viewBox="0 0 24 24"
            className="arr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">Next Page</span>
          <span className="circle"></span>
          <svg
            viewBox="0 0 24 24"
            className="arr-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProfileCreation;
