import React, { useState } from "react";
import { Typography, Button, Grid, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InterestingItems from "./InterestingItems";

const HobbyComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleHobbyChange = (event, newValue) => {
    if (newValue.length > 5) {
      return;
    }

    setSelectedOptions(newValue);
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
        backgroundColor: "white",
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <Typography sx={{ color: "black", fontSize: "20px" }}>
            Hobby
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={toggleExpansion} style={{ color: "black" }}>
            {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
        </Grid>
      </Grid>
      {isExpanded && (
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={InterestingItems}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          value={selectedOptions}
          onChange={handleHobbyChange}
          renderOption={(props, option, { selected }) => (
            <li {...props}>{option.title}</li>
          )}
          sx={{
            width: 416,
            marginTop: 2,
            "& .MuiInputBase-root": {
              color: "black", // Text color
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white", // Border color
            },
            "& .MuiSvgIcon-root": {
              color: "black", // Dropdown arrow color
            },
            "& .MuiAutocomplete-tag": {
              backgroundColor: "white", // Background color of selected items
              color: "black", // Text color of selected items
            },
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      )}
    </Box>
  );
};

export default HobbyComponent;
