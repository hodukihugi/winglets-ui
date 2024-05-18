import { useEffect, useState } from "react";
import { Button, Grid, Typography, Menu, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {useAppDispatch} from "../../redux/hooks";
import {setHoroscope} from "../../redux/slices/profile.slice";

const Horoscope = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedHoroscope, setSelectedHoroscope] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const storedHoroscope = localStorage.getItem("selectedHoroscope");
    if (storedHoroscope) {
      setSelectedHoroscope(storedHoroscope);
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHoroscopeSelect = (horoscope) => {
    setSelectedHoroscope(horoscope);
    localStorage.setItem("selectedHoroscope", horoscope);
    handleClose();
  };
  const dispatch = useAppDispatch();
  dispatch(setHoroscope({
    horoscope: selectedHoroscope,
  }))

  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: "20px", textAlign: "center" }}
      >
        <Grid item>
          <Typography sx={{ color: "white", fontSize: "20px" }}>
            Star sign
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
        <div style={{ color: "white", textAlign: "center" }}>
          <Button
            onClick={handleClick}
            variant="outlined"
            sx={{
              cursor: "pointer",
              color: "#fff",
              fontSize: "17px",
              borderRadius: "1rem",
              border: "1px solid #857f74",
              position: "relative",
              transition: "0.1s",
              width: "416px",
              height: "40px",
              textTransform: "none",
              "&:hover": {
                borderColor: "white",
              },
              "&:active": {
                transform: "scale(0.98)",
              },
            }}
          >
            {selectedHoroscope
              ? `Star sign: ${selectedHoroscope}`
              : "Select Horoscope"}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
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
        </div>
      )}
    </>
  );
};

export default Horoscope;
