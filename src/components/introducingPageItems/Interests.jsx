import React, { useState } from "react";
import { Typography, Button, Grid } from "@mui/material";
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
    <>
      <Grid
        container
        spacing={2}
        justifyContent="flex-start"
        sx={{ marginTop: "10px" }}
      >
        <Grid item>
          <Typography sx={{ color: "black", fontSize: "20px" }}>
            Interests
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
          onChange={handleChange}
          renderOption={(props, option, { selected }) => (
            <li {...props}>{option.title}</li>
          )}
          style={{ width: 416 }}
          renderInput={(params) => <TextField {...params} />}
        />
      )}
    </>
  );
};

export default InterestsComponent;
