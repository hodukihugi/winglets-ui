import { useEffect, useState } from "react";
import { Button, Grid, Typography, Menu, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Stack } from "@mui/system";

const Horoscope = () => {
  const [horoscopeAnchorEL, setHoroscopeAnchorEL] = useState(null);
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
    setHoroscopeAnchorEL(event.currentTarget);
  };

  const handleClose = () => {
    setHoroscopeAnchorEL(null);
  };

  const handleHoroscopeSelect = (horoscope) => {
    setSelectedHoroscope(horoscope);
    localStorage.setItem("selectedHoroscope", horoscope);
    handleClose();
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{
          marginTop: "20px",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <Grid item>
          <Typography sx={{ color: "black", fontSize: "20px" }}>
            Star sign
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={toggleExpansion}
            style={{ color: "black", marginLeft: "50px" }}
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
          sx={{
            marginTop: "10px",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Button
            onClick={handleClick}
            variant="outlined"
            sx={{
              cursor: "pointer",
              color: "#000",
              fontSize: "17px",
              borderRadius: "1rem",
              border: "1px solid #857f74",
              position: "relative",
              transition: "0.1s",
              width: "416px",
              height: "40px",
              textTransform: "none",
              backgroundColor: "white", // Ensure background is white
              "&:hover": {
                borderColor: "#ffd700",
              },
              "&:active": {
                transform: "scale(0.98)",
              },
              boxShadow: "none", // Remove any box shadows
            }}
          >
            {selectedHoroscope
              ? `Star sign: ${selectedHoroscope}`
              : "Select Horoscope"}
          </Button>
          <Menu
            anchorEl={horoscopeAnchorEL}
            open={Boolean(horoscopeAnchorEL)}
            onClose={handleClose}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "white",
                color: "black",
                boxShadow: "none", // Ensure no box shadow on menu
                border: "1px solid #857f74", // Match the button border
              },
            }}
          >
            {[
              "Aries",
              "Taurus",
              "Gemini",
              "Cancer",
              "Leo",
              "Virgo",
              "Libra",
              "Scorpio",
              "Sagittarius",
              "Capricorn",
              "Aquarius",
              "Pisces",
            ].map((horoscope) => (
              <MenuItem
                key={horoscope}
                onClick={() => handleHoroscopeSelect(horoscope)}
                sx={{
                  backgroundColor: "white", // Ensure menu items have white background
                  "&:hover": {
                    backgroundColor: "#f0f0f0", // Light grey on hover
                  },
                }}
              >
                {horoscope}
              </MenuItem>
            ))}
          </Menu>
        </Stack>
      )}
    </>
  );
};

export default Horoscope;
