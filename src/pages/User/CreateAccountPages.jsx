import { TextField, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";
import calculateZodiacSign from "./zodiacSign";
import Jobs from "./Job";
import InterestsComponent from "./Interests";
import AgePreferences from "./AgePreferences";
function App() {
  const [accountname, setAccountname] = useState("");
  const [accountemail, setAccountemail] = useState("");
  const [birthdate, setBirthdate] = useState(null);
  const [zodiacSign, setZodiacSign] = useState(null);

  const [avatar, setAvatar] = useState(null);
  const onAccountnameChanged = (e) => {
    setAccountname(e.target.value);
  };
  const onAccountemailChanged = (e) => {
    setAccountemail(e.target.value);
  };

  const handleBirthdateChange = (date) => {
    setBirthdate(date);
    const sign = calculateZodiacSign(date);
    setZodiacSign(sign);
  };
  const calculateAge = (birthdate) => {
    if (!birthdate) return null;
    const today = dayjs();
    const age = today.diff(birthdate, "year");
    return age;
  };

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };

  const handleAvatarDelete = () => {
    setAvatar(null);
  };

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "50px",
        minHeight: "100vh",
        color: "black",
      }}
    >
      <h2> Create account </h2>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Stack>
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              type="text"
              sx={{ color: "white", maxWidth: "507px" }}
              value={accountname}
              onChange={onAccountnameChanged}
              InputProps={{ style: { color: "black" } }}
            />

            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              type="text"
              sx={{ color: "white", maxWidth: "507px" }}
              value={accountemail}
              onChange={onAccountemailChanged}
              InputProps={{ style: { color: "black" } }}
            />
            <h1 style={{ fontSize: "20px", textAlign: "left" }}>
              Date of birth
            </h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={birthdate}
                onChange={handleBirthdateChange}
                sx={{ color: "white", maxWidth: "507px" }}
              />
            </LocalizationProvider>
            <h1 style={{ fontSize: "20px", textAlign: "left" }}>
              Age: {calculateAge(birthdate)}
              {zodiacSign && <span>, Zodiac: {zodiacSign}</span>}
            </h1>

            <h1 style={{ fontSize: "20px", textAlign: "left" }}>Gender</h1>
            <Grid container spacing={2} justifyContent="flex-start">
              <Grid item>
                <Button variant="outlined" sx={{ borderRadius: "20px" }}>
                  Men
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" sx={{ borderRadius: "20px" }}>
                  Women
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" sx={{ borderRadius: "20px" }}>
                  LGBT
                </Button>
              </Grid>
            </Grid>

            <h1 style={{ fontSize: "20px", textAlign: "left" }}>
              Interested in
            </h1>
            <Grid container spacing={2} justifyContent="flex-start">
              <Grid item>
                <Button variant="outlined" sx={{ borderRadius: "20px" }}>
                  Men
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" sx={{ borderRadius: "20px" }}>
                  Women
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" sx={{ borderRadius: "20px" }}>
                  LGBT
                </Button>
              </Grid>
            </Grid>
            <Jobs />
            <InterestsComponent />
            <AgePreferences />
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <div>
            <h1 style={{ fontSize: "20px", textAlign: "left" }}>Avatar</h1>
            {avatar && (
              <ImageList sx={{ width: 400, height: 400 }}>
                <ImageListItem>
                  <img
                    src={avatar}
                    alt="Avatar"
                    loading="lazy"
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <IconButton
                      color="primary"
                      aria-label="delete"
                      onClick={handleAvatarDelete}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </ImageListItem>
              </ImageList>
            )}

            <Button
              variant="contained"
              component="label"
              style={{ marginTop: "20px" }}
            >
              Upload Avatar
              <input
                type="file"
                hidden
                onChange={handleAvatarUpload}
                accept="image/*"
              />
            </Button>
          </div>
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Button variant="contained" color="primary">
          Next Page
        </Button>
      </div>
    </div>
  );
}

export default App;
