import React, { useState } from "react";
import {Typography, Button, Grid, Box, TextField} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Slider from "@mui/material/Slider";
import {useAppDispatch} from "../../redux/hooks";
import {setHeight} from "../../redux/slices/profile.slice";

const valuetext = (value) => `${value} cm`;

const Height = () => {
  const [height, setHeight] = useState(); // Initial height range
  const [isExpanded, setIsExpanded] = useState(false); // State for expansion toggle

  const handleChange = (e) => {
    setHeight(e.target.value);
  };
  // const dispatch = useAppDispatch()
  // dispatch(setHeight({
  //     height: height,
  // }))
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
          <TextField
              id="outlined-basic"
              label="Height(cm)"
              variant="outlined"
              onChange={handleChange}
              value={height}
              className="input-field"
          />
      )}
    </Box>
  );
};

export default Height;
