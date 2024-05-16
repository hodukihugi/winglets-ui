import React, { useState } from "react";
import { Typography, Button, Grid, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InterestingItems from "./InterestingItems";

const InterestsComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = (event, newValue) => {
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
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <Typography sx={{ color: "white", fontSize: "20px" }}>
            Interests
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={toggleExpansion} style={{ color: "white" }}>
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
          onChange={handleChange}
          renderOption={(props, option, { selected }) => (
            <li {...props}>{option.title}</li>
          )}
          sx={{
            width: 416,
            marginTop: 2,
            "& .MuiInputBase-root": {
              color: "white", // Text color
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white", // Border color
            },
            "& .MuiSvgIcon-root": {
              color: "white", // Dropdown arrow color
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

export default InterestsComponent;
