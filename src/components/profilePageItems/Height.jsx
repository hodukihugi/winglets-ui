import React, { useState } from "react";
import { Typography, Button, Grid, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";

const valuetext = (value) => `${value} cm`;

const Height = () => {
  const [heightRange, setHeightRange] = useState([200]); // Initial height range
  const [isExpanded, setIsExpanded] = useState(false); // State for expansion toggle

  const handleChange = (event, newValue) => {
    setHeightRange(newValue);
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
        textAlign: "center",
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <Typography sx={{ color: "white", fontSize: "20px" }}>
            Height
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={toggleExpansion} style={{ color: "white" }}>
            {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
        </Grid>
      </Grid>
      {isExpanded && (
        <Slider
          getAriaLabel={() => "Height"}
          value={heightRange}
          onChange={handleChange}
          aria-label="Default"
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          defaultValue={50}
          max={250}
          sx={{ width: 416, marginTop: 2, color: "white" }}
        />
      )}
    </Box>
  );
};

export default Height;
