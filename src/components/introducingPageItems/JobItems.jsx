import {
  Box,
  Popover,
  Stack,
  TextField,
  Button,
  Backdrop,
} from "@mui/material";
import { useState } from "react";

export const JobItems = ({ value, onDelete, onEdit }) => {
  const [input, setInput] = useState(value);
  const [anchorEl, setAnchorEl] = useState(null);

  const onInputChanged = (e) => {
    setInput(e.target.value);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const onDeleteButtonClicked = () => {
    onDelete(value);
    handlePopoverClose();
  };

  const onDoneButtonClicked = () => {
    if (input) {
      onEdit(input);
    } else {
      onDelete(value);
    }
    handlePopoverClose();
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Box>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Button
            variant="outlined"
            onClick={handlePopoverOpen}
            sx={{
              cursor: "pointer",
              color: "black",
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
            {value}
          </Button>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            PaperProps={{
              sx: {
                width: "480px",
                height: "156px",
                backdropFilter: "blur(5px)",
                position: "absolute",
                backgroundColor: "#181a1b",
                color: "white",
                boxShadow: "0px 2px 4px rgba(0,0,0,0.10)",
              },
            }}
            BackdropComponent={Backdrop}
            BackdropProps={{
              sx: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <Box sx={{ p: 2 }}>
              <Stack direction="column" alignItems="center">
                <TextField
                  value={input}
                  InputProps={{
                    style: {
                      color: "white",
                      backgroundColor: "#181a1b",
                    },
                  }}
                  onChange={onInputChanged}
                  size="small"
                  fullWidth
                  sx={{
                    maxWidth: "400px",
                    border: "1px solid #857f74",
                    borderRadius: "1rem",
                    textTransform: "none",
                    "&:hover": {
                      border: "1px solid #ffd700",
                    },
                  }}
                />
                <Box sx={{ textAlign: "center", marginTop: "10px" }}>
                  <Button
                    onClick={onDeleteButtonClicked}
                    sx={{
                      color: "#ffd700",
                      marginRight: "10px",
                      textTransform: "none",
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={onDoneButtonClicked}
                    sx={{
                      cursor: "pointer",
                      color: "#fff",
                      fontSize: "17px",
                      borderRadius: "1rem",
                      border: "1px solid #857f74",
                      position: "relative",
                      transition: "0.1s",
                      width: "73.5px",
                      height: "40px",
                      backgroundColor: "#ffd700",
                      textTransform: "none",
                      "&:hover": {
                        borderColor: "white",
                      },
                      "&:active": {
                        transform: "scale(0.98)",
                      },
                    }}
                  >
                    Save
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Popover>
        </Stack>
      </Box>
    </>
  );
};
