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

const Jobs = () => {
  const [jobInput, setJobInput] = useState("");
  const [jobs, setJobs] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const onJobAddButtonClicked = () => {
    if (jobInput) {
      const isAdded = jobs.includes(jobInput);
      if (isAdded) {
        alert("This job has already been added");
      } else {
        setJobs([...jobs, jobInput]);
        setJobInput("");
        alert("This job has been added");
      }
    }
    setAnchorEl(null);
  };



  const onJobInputChange = (e) => {
    setJobInput(e.target.value);
  };

  const onUpdateJob = (newValue, index) => {
    setJobs(jobs.map((val, idx) => (idx === index ? newValue : val)));
  };

  const onDeleteJob = (value) => {
    const updatedJobs = jobs.filter((item) => item !== value);
    setJobs(updatedJobs);
  };

  const handleJobButtonClicked = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
            My Work & Education
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
          {jobs.map((job, index) => (
            <Items
              key={index}
              value={job}
              onDelete={onDeleteJob}
              onEdit={(value) => onUpdateJob(value, index)}
            />
          ))}
          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            onClick={handleJobButtonClicked}
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
            Add a job
          </Button>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
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
              <Typography>Add a job</Typography>
              <TextField
                id="job"
                InputProps={{
                  style: { color: "black", backgroundColor: "white" },
                }}
                onChange={onJobInputChange}
                size="small"
                sx={{
                  width: "400px",
                  border: "1px solid black",
                  borderRadius: "4px",
                  "&:hover": { border: "1px solid #ffd700" },
                }}
              />
              <Button
                sx={{ textTransform: "none", color: "#ffd700" }}
                onClick={onJobAddButtonClicked}
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
export default Jobs;
