import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Stack, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Contact = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const handlePrivacyPolicyButtonClicked = () => {
    navigate("/policy");
  };

  return (
    <div
      style={{
        marginLeft: "25%",
        backgroundColor: "white",
        height: "100vh",
        width: "75%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        sx={{
          height: "80px",
          borderBottom: "1px solid #857f74",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "black" }}>Date Profile</h1>
      </Stack>
      <Stack
        direction="column"
        alignItems="center"
        spacing={2}
        sx={{ marginTop: "30px", justifyContent: "center" }}
      >
        <Button
          startIcon={<AddIcon />}
          variant="outlined"
          onClick={handlePrivacyPolicyButtonClicked}
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
          Privacy and Policy
        </Button>
        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
          sx={{ marginTop: "20px", textAlign: "center" }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ marginTop: "20px", textAlign: "center" }}
          >
            <Typography sx={{ color: "black", fontSize: "20px" }}>
              Contact Us
            </Typography>
            <Button
              onClick={toggleExpansion}
              style={{ color: "black", marginTop: "5px" }}
            >
              {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Button>
          </Stack>
          {isExpanded && (
            <Stack
              direction="column"
              alignItems="center"
              spacing={2}
              sx={{
                marginTop: "10px",
                justifyContent: "center",
                border: "1px solid #857f74",
                padding: "10px",
              }}
            >
              <Typography sx={{ color: "black" }}>
                Email: 22028153@vnu.edu.vn
              </Typography>
              <Typography sx={{ color: "black" }}>
                Online request form:{" "}
                <a
                  href="https://courses.uet.vnu.edu.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "black" }}
                >
                  https://courses.uet.vnu.edu.vn
                </a>
              </Typography>
              <Typography sx={{ color: "black" }}>
                Postal address: Trường Đại học Công nghệ, Đại học Quốc gia Hà
                Nội
              </Typography>
            </Stack>
          )}
        </Stack>
      </Stack>
    </div>
  );
};

export default Contact;
