import React, { useState } from "react";
import {
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  Popover,
  Backdrop,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Items } from "./Items";

const HomeTown = () => {
  const [homeTownInput, setHomeTownInput] = useState("");
  const [homeTown, setHomeTown] = useState("");
  const [homeTownAnchorEl, setHomeTownAnchorEl] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const onHomeTownAddButtonClicked = () => {
    if (homeTownInput) {
      setHomeTown(homeTownInput);
      setHomeTownInput("");
    }
    setHomeTownAnchorEl(null);
  };

  const onHomeTownInputChange = (e) => {
    setHomeTownInput(e.target.value);
  };

  const onUpdateHomeTown = (newValue) => {
    setHomeTown(newValue);
  };

  const onDeleteHomeTown = () => {
    setHomeTown("");
  };

  const handleHomeTownButtonClicked = (e) => {
    setHomeTownAnchorEl(e.currentTarget);
  };

  const handleHomeTownClose = () => {
    setHomeTownAnchorEl(null);
  };

  const homeTownOpen = Boolean(homeTownAnchorEl);


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
            My Home Town
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
          {homeTown && (
            <Items
              value={homeTown}
              onDelete={onDeleteHomeTown}
              onEdit={onUpdateHomeTown}
            />
          )}
          {!homeTown && (
            <Button
              startIcon={<AddIcon />}
              variant="outlined"
              onClick={handleHomeTownButtonClicked}
              sx={{
                cursor: "pointer",
                color: "black",
                fontSize: "17px",
                borderRadius: "1rem",
                border: "1px solid black",
                position: "relative",
                transition: "0.1s",
                width: "416px",
                height: "40px",
                textTransform: "none",
                "&:hover": { borderColor: "black" },
                "&:active": { transform: "scale(0.98)" },
              }}
            >
              Add a Home Town
            </Button>
          )}
          <Popover
            open={homeTownOpen}
            anchorEl={homeTownAnchorEl}
            onClose={handleHomeTownClose}
            anchorOrigin={{ vertical: "center", horizontal: "center" }}
            transformOrigin={{ vertical: "center", horizontal: "center" }}
            PaperProps={{
              sx: {
                width: "480px",
                height: "156px",
                backdropFilter: "blur(5px)",
                position: "absolute",
                backgroundColor: "white",
                color: "black",
                boxShadow: "0px 2px 4px rgba(0,0,0,0.10)",
              },
            }}
            BackdropComponent={Backdrop}
            BackdropProps={{ sx: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
          >
            <Stack
              direction="column"
              alignItems="center"
              spacing={2}
              sx={{
                marginTop: "10px",
                justifyContent: "center",
                backgroundColor: "white",
                color: "black",
              }}
            >
              <Typography>Add a Home Town</Typography>
              <TextField
                id="homeTown"
                InputProps={{
                  style: { color: "black", backgroundColor: "white" },
                }}
                onChange={onHomeTownInputChange}
                value={homeTownInput}
                size="small"
                sx={{
                  width: "400px",
                  border: "1px solid black",
                  borderRadius: "4px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ffd700",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ffd700",
                    },
                  },
                }}
              />
              <Button
                sx={{ textTransform: "none", color: "#ffd700" }}
                onClick={onHomeTownAddButtonClicked}
              >
                Save
              </Button>
            </Stack>
          </Popover>
        </Stack>
      )}
    </>
  );
};

export default HomeTown;
