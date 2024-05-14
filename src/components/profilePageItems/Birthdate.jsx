import { Button, Grid, Stack, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Birthdate = () => {
  const [birthdate, setBirthdate] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleBirthdateChange = (date) => {
    setBirthdate(date);
  };
  const calculateAge = (birthdate) => {
    if (!birthdate) return null;
    const today = dayjs();
    const age = today.diff(birthdate, "year");
    return age;
  };
  return (
    <div>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: "20px", textAlign: "center" }}
      >
        <Grid item>
          <Typography sx={{ color: "white", fontSize: "20px" }}>
            Date Of Birth
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={toggleExpansion}
            style={{ color: "white", marginLeft: "50px" }}
          >
            {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
        </Grid>
      </Grid>
      {isExpanded && (
        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
          sx={{ marginTop: "10px", justifyContent: "center" }}
        >
          <h1 style={{ fontSize: "20px", textAlign: "left", color: "white" }}>
            Date of birth
          </h1>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            sx={{ color: "white" }}
          >
            <DatePicker
              value={birthdate}
              onChange={handleBirthdateChange}
              sx={{ color: "white", maxWidth: "507px" }}
            />
          </LocalizationProvider>
          <h1 style={{ fontSize: "20px", textAlign: "left", color: "white" }}>
            Age: {calculateAge(birthdate)}
          </h1>
        </Stack>
      )}
    </div>
  );
};
export default Birthdate;
