import React, { useState } from "react";
import {
  Autocomplete,
  Backdrop,
  Button,
  Menu,
  MenuItem,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import "./ProfileCreation.css";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import InterestingItems from "../../components/introducingPageItems/InterestingItems";
import { Items } from "../../components/profilePageItems/Items";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch } from "../../redux/hooks";

import { useCreateProfileMutation } from "../../redux/apis/profile.api";
import { addToast, showTopLoading } from "../../redux/slices/common.slice";

const ProfileCreation = () => {
  const navigate = useNavigate();
  const [inputName, setInputName] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [height, setHeight] = useState("");
  const [jobInput, setJobInput] = useState("");
  const [jobs, setJobs] = useState([]);
  const [jobAnchorEl, setJobAnchorEl] = useState(null);
  const [horoscopeAnchorEL, setHoroscopeAnchorEL] = useState(null);
  const [selectHoro, setSelectHoro] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [homeTownInput, setHomeTownInput] = useState("");
  const [homeTown, setHomeTown] = useState("");
  const [homeTownAnchorEl, setHomeTownAnchorEl] = useState(null);
  const [birthdate, setBirthdate] = useState(null);
  const [birthdateUnix, setBirthdateUnix] = useState(null);
  const dispatch = useAppDispatch();
  const [createProfile] = useCreateProfileMutation();

  // Horoscope
  const handleHoroscopeClick = (event) => {
    setHoroscopeAnchorEL(event.currentTarget);
  };

  const handleHoroscopeClose = () => {
    setHoroscopeAnchorEL(null);
  };

  const handleHoroscopeSelect = (horoscope) => {
    setSelectHoro(horoscope);
    localStorage.setItem("selectedHoroscope", horoscope);
    handleHoroscopeClose();
  };
  //
  //Hobby
  const handleHobbyChange = (event, newValue) => {
    if (newValue.length > 5) {
      return;
    }

    setSelectedOptions(newValue);
  };
  //
  //gender
  const handleGenderChange = (event) => {
    setInputGender(event.target.value);
  };
  //name
  const handleNameInput = (e) => {
    setInputName(e.target.value);
  };
  //height
  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };
  const handleBirthdateChange = (date) => {
    setBirthdate(date);
    const unixTime = convertToUnixTime(date);
    setBirthdateUnix(unixTime);
  };
  const convertToUnixTime = (date) => {
    if (!date) return null;
    return dayjs(date).unix();
  };
  const calculateAge = (birthdate) => {
    if (!birthdate) return null;
    const today = dayjs();
    return today.diff(birthdate, "year");
  };
  //
  //job
  const onJobAddButtonClicked = () => {
    if (jobInput) {
      const isAdded = jobs.includes(jobInput);
      if (isAdded) {
        alert("This job has already been added");
      } else {
        setJobs([...jobs, jobInput]);
        setJobInput("");
        alert("This job has been added");
      }
    }
    setJobAnchorEl(null);
  };
  const onJobInputChange = (e) => {
    setJobInput(e.target.value);
  };

  const onUpdateJob = (newValue, index) => {
    setJobs(jobs.map((val, idx) => (idx === index ? newValue : val)));
  };

  const onDeleteJob = (value) => {
    const updateJobs = jobs.filter((item) => item !== value);
    setJobs(updateJobs);
  };

  const handleJobButtonClicked = (e) => {
    setJobAnchorEl(e.currentTarget);
  };

  const handleJobClose = () => {
    setJobAnchorEl(null);
  };
  //
  //homeTown
  const onHomeTownAddButtonClicked = () => {
    if (homeTownInput) {
      setHomeTown(homeTownInput);
      setHomeTownInput("");
    }
    setHomeTownAnchorEl(null);
  };

  const onHomeTownInputChange = (e) => {
    setHomeTownInput(e.target.value);
  };

  const onUpdateHomeTown = (newValue) => {
    setHomeTown(newValue);
  };

  const onDeleteHomeTown = () => {
    setHomeTown("");
  };

  const handleHomeTownButtonClicked = (e) => {
    setHomeTownAnchorEl(e.currentTarget);
  };

  const handleHomeTownClose = () => {
    setHomeTownAnchorEl(null);
  };

  const homeTownOpen = Boolean(homeTownAnchorEl);
  //
  const getCoordinates = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject(new Error("Geolocation is not supported by this browser."));
      }
    });
  };
  const handleSave = async () => {
    try {
      dispatch(showTopLoading());
      const { latitude, longitude } = await getCoordinates();
      const response = await createProfile({
        name: inputName,
        gender: inputGender,
        birthday_in_seconds: birthdateUnix,
        height: height,
        horoscope: selectHoro,
        //education: jobs,
        //hobby: selectedOptions,
        home_town: homeTown,
        coordinates: {
          longitude: longitude,
          latitude: latitude,
        },
      });
      if (response && response.data && response.data.message === "success") {
        dispatch(
          addToast({
            type: "success",
            message: "create successfully",
          })
        );

        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
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
        value={inputName}
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
                checked={inputGender === "male"}
                onChange={handleGenderChange}
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
                checked={inputGender === "female"}
                onChange={handleGenderChange}
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
            </div>
          </form>
        </div>
      </div>
      <TextField
        id="outlined-basic"
        label="Height(cm)"
        variant="outlined"
        onChange={handleHeightChange}
        value={height}
        className="input-field"
      />
      <Stack
        direction="column"
        alignItems="center"
        spacing={2}
        sx={{ marginTop: "10px", justifyContent: "center" }}
      >
        <h1 style={{ fontSize: "20px", textAlign: "left", color: "black" }}>
          Date of birth
        </h1>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          sx={{ color: "black" }}
        >
          <DatePicker
            value={birthdate}
            onChange={handleBirthdateChange}
            sx={{ color: "black", maxWidth: "507px" }}
          />
        </LocalizationProvider>
        <h1 style={{ fontSize: "20px", textAlign: "left", color: "black" }}>
          Age: {calculateAge(birthdate)}
        </h1>
      </Stack>
      {/*<Stack*/}
      {/*  direction="column"*/}
      {/*  alignItems="center"*/}
      {/*  spacing={2}*/}
      {/*  sx={{ marginTop: "10px", justifyContent: "center" }}*/}
      {/*>*/}
      {/*  {jobs.map((job, index) => (*/}
      {/*    <Items*/}
      {/*      key={index}*/}
      {/*      value={job}*/}
      {/*      onDelete={onDeleteJob}*/}
      {/*      onEdit={(value) => onUpdateJob(value, index)}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*  <Button*/}
      {/*    startIcon={<AddIcon />}*/}
      {/*    variant="outlined"*/}
      {/*    onClick={handleJobButtonClicked}*/}
      {/*    sx={{*/}
      {/*      cursor: "pointer",*/}
      {/*      color: "black",*/}
      {/*      fontSize: "17px",*/}
      {/*      borderRadius: "1rem",*/}
      {/*      border: "1px solid #857f74",*/}
      {/*      position: "relative",*/}
      {/*      transition: "0.1s",*/}
      {/*      width: "416px",*/}
      {/*      height: "40px",*/}
      {/*      textTransform: "none",*/}
      {/*      "&:hover": {*/}
      {/*        borderColor: "black",*/}
      {/*      },*/}
      {/*      "&:active": {*/}
      {/*        transform: "scale(0.98)",*/}
      {/*      },*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    Add a job*/}
      {/*  </Button>*/}
      {/*  <Popover*/}
      {/*    open={Boolean(jobAnchorEl)}*/}
      {/*    anchorEl={jobAnchorEl}*/}
      {/*    onClose={handleJobClose}*/}
      {/*    anchorOrigin={{*/}
      {/*      vertical: "center",*/}
      {/*      horizontal: "center",*/}
      {/*    }}*/}
      {/*    transformOrigin={{*/}
      {/*      vertical: "center",*/}
      {/*      horizontal: "center",*/}
      {/*    }}*/}
      {/*    PaperProps={{*/}
      {/*      sx: {*/}
      {/*        width: "480px",*/}
      {/*        height: "156px",*/}
      {/*        backdropFilter: "blur(5px)",*/}
      {/*        position: "absolute",*/}
      {/*        backgroundColor: "white",*/}
      {/*        color: "black",*/}
      {/*        boxShadow: "0px 2px 4px rgba(0,0,0,0.10)",*/}
      {/*      },*/}
      {/*    }}*/}
      {/*    BackdropComponent={Backdrop}*/}
      {/*    BackdropProps={{*/}
      {/*      sx: {*/}
      {/*        backgroundColor: "rgba(0, 0, 0, 0.5)",*/}
      {/*      },*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <Stack*/}
      {/*      direction="column"*/}
      {/*      alignItems="center"*/}
      {/*      spacing={2}*/}
      {/*      sx={{*/}
      {/*        marginTop: "10px",*/}
      {/*        justifyContent: "center",*/}
      {/*        backgroundColor: "white",*/}
      {/*        color: "black",*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      <Typography>Add a job</Typography>*/}
      {/*      <TextField*/}
      {/*        id="job"*/}
      {/*        InputProps={{*/}
      {/*          style: {*/}
      {/*            color: "black",*/}
      {/*            backgroundColor: "white",*/}
      {/*          },*/}
      {/*        }}*/}
      {/*        onChange={onJobInputChange}*/}
      {/*        size="small"*/}
      {/*        sx={{*/}
      {/*          width: "400px",*/}
      {/*          border: "1px solid #857f74",*/}
      {/*          borderRadius: "4px",*/}
      {/*          "&:hover": {*/}
      {/*            border: "1px solid #ffd700",*/}
      {/*          },*/}
      {/*        }}*/}
      {/*      />*/}
      {/*      <Button*/}
      {/*        sx={{ textTransform: "none", color: "#ffd700" }}*/}
      {/*        onClick={onJobAddButtonClicked}*/}
      {/*      >*/}
      {/*        Save*/}
      {/*      </Button>*/}
      {/*    </Stack>*/}
      {/*  </Popover>*/}
      {/*</Stack>*/}
      <div style={{ color: "black", textAlign: "center" }}>
        <Button
          onClick={handleHoroscopeClick}
          variant="outlined"
          sx={{
            cursor: "pointer",
            color: "black",
            fontSize: "17px",
            borderRadius: "1rem",
            border: "1px solid #857f74",
            position: "relative",
            transition: "0.1s",
            width: "416px",
            height: "40px",
            textTransform: "none",
            "&:hover": {
              borderColor: "black",
            },
            "&:active": {
              transform: "scale(0.98)",
            },
          }}
        >
          {selectHoro ? `Horoscope: ${selectHoro}` : "Select Horoscope"}
        </Button>
        <Menu
          anchorEl={horoscopeAnchorEL}
          open={Boolean(horoscopeAnchorEL)}
          onClose={handleHoroscopeClose}
        >
          {[
            "Aries",
            "Taurus",
            "Gemini",
            "Cancer",
            "Leo",
            "Virgo",
            "Libra",
            "Scopion",
            "Sagittarius",
            "Capricorn",
            "Aquarius",
            "Pisces",
          ].map((horoscope) => (
            <MenuItem
              key={horoscope}
              onClick={() => handleHoroscopeSelect(horoscope)}
            >
              {horoscope}
            </MenuItem>
          ))}
        </Menu>
      </div>{" "}
      {/*<Autocomplete*/}
      {/*  multiple*/}
      {/*  id="checkboxes-tags-demo"*/}
      {/*  options={InterestingItems}*/}
      {/*  disableCloseOnSelect*/}
      {/*  getOptionLabel={(option) => option.title}*/}
      {/*  value={selectedOptions}*/}
      {/*  onChange={handleHobbyChange}*/}
      {/*  renderOption={(props, option, { selected }) => (*/}
      {/*    <li {...props}>{option.title}</li>*/}
      {/*  )}*/}
      {/*  sx={{*/}
      {/*    width: 416,*/}
      {/*    marginTop: 2,*/}
      {/*    "& .MuiInputBase-root": {*/}
      {/*      color: "black", // Text color*/}
      {/*    },*/}
      {/*    "& .MuiOutlinedInput-notchedOutline": {*/}
      {/*      borderColor: "black", // Border color*/}
      {/*    },*/}
      {/*    "& .MuiSvgIcon-root": {*/}
      {/*      color: "black", // Dropdown arrow color*/}
      {/*    },*/}
      {/*    "& .MuiAutocomplete-tag": {*/}
      {/*      backgroundColor: "black", // Background color of selected items*/}
      {/*      color: "black", // Text color of selected items*/}
      {/*    },*/}
      {/*  }}*/}
      {/*  renderInput={(params) => <TextField {...params} />}*/}
      {/*/>*/}
      <Stack
        direction="column"
        alignItems="center"
        spacing={2}
        sx={{ marginTop: "10px", justifyContent: "center" }}
      >
        {homeTown && (
          <Items
            value={homeTown}
            onDelete={onDeleteHomeTown}
            onEdit={onUpdateHomeTown}
          />
        )}
        {!homeTown && (
          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            onClick={handleHomeTownButtonClicked}
            sx={{
              cursor: "pointer",
              color: "black",
              fontSize: "17px",
              borderRadius: "1rem",
              border: "1px solid #857f74",
              position: "relative",
              transition: "0.1s",
              width: "416px",
              height: "40px",
              textTransform: "none",
              "&:hover": {
                borderColor: "black",
              },
              "&:active": {
                transform: "scale(0.98)",
              },
            }}
          >
            Add a Home Town
          </Button>
        )}
        <Popover
          open={homeTownOpen}
          anchorEl={homeTownAnchorEl}
          onClose={handleHomeTownClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          PaperProps={{
            sx: {
              width: "480px",
              height: "156px",
              backdropFilter: "blur(5px)",
              position: "absolute",
              backgroundColor: "white",
              color: "black",
              boxShadow: "0px 2px 4px rgba(0,0,0,0.10)",
            },
          }}
          BackdropComponent={Backdrop}
          BackdropProps={{
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <Stack
            direction="column"
            alignItems="center"
            spacing={2}
            sx={{
              marginTop: "10px",
              justifyContent: "center",
              backgroundColor: "white",
              color: "black",
            }}
          >
            <Typography>Add a Home Town</Typography>
            <TextField
              id="homeTown"
              InputProps={{
                style: {
                  color: "black",
                  backgroundColor: "white",
                },
              }}
              onChange={onHomeTownInputChange}
              value={homeTownInput}
              size="small"
              sx={{
                width: "400px",
                border: "1px solid #857f74",
                borderRadius: "4px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#857f74",
                  },
                  "&:hover fieldset": {
                    borderColor: "#ffd700",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ffd700",
                  },
                },
              }}
            />
            <Button
              sx={{ textTransform: "none", color: "#ffd700" }}
              onClick={onHomeTownAddButtonClicked}
            >
              Save
            </Button>
          </Stack>
        </Popover>
      </Stack>{" "}
      <div>
        <button className="animated-button" onClick={handleSave}>
          <svg
            viewBox="0 0 24 24"
            className="arr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">Save</span>
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
