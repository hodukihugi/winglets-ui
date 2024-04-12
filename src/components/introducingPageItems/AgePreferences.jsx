import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useState } from "react";
import { Typography, Button, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function valuetext(value) {
  return `${value} years`;
}

const  AgePreferences = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const [ageRange, setAgeRange] = useState([18, 40]);

  const handleChange = (event, newValue) => {
    setAgeRange(newValue);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="flex-start"
        sx={{ marginTop: "10px" }}
      >
        <Grid item>
          <Typography sx={{ color: "black", fontSize: "20px" }}>
            Age Preferences
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={toggleExpansion} style={{ color: "black" }}>
            {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
        </Grid>
      </Grid>
      {isExpanded && (
        <Box sx={{ width: 416 }}>
          <Slider
            getAriaLabel={() => "Age Preferences"}
            value={ageRange}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={16}
            max={80}
          />
        </Box>
      )}
    </>
  );
}
export default AgePreferences;