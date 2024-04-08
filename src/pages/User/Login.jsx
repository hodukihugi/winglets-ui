import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.png";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const onUsernameInputChanged = (e) => {
    setUsername(e.target.value);
    setUsernameErr("");
  };
  const onPasswordInputChanged = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };
  const validateForm = () => {
    let valid = true;
    if (username === "") {
      setUsernameErr("Vui lòng nhập họ và tên");
      valid = false;
    }
    if (password === "") {
      setPasswordErr("Vui lòng nhập mật khẩu");
      valid = false;
    }
    return valid;
  };
  const handleLogin = async () => {
    if (validateForm()) {
      navigate("/");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Stack className="Login" spacing={5}>
        <Stack spacing={3} alignItems="center">
          <Typography variant="h4" sx={{ color: "#f3a7ad", fontSize: "50px" }}>
            Login Page
          </Typography>
          <img src={logo} alt="Logo" style={{ width: "500px" }} />{" "}
          <TextField
            error={usernameErr !== ""}
            helperText={usernameErr}
            id="username"
            label="Username"
            variant="filled"
            value={username}
            onChange={onUsernameInputChanged}
            InputLabelProps={{
              style: { color: "#ffffff" },
            }}
            sx={{
              width: "800px",
              border: "1px solid #f3a7ad",
              borderRadius: "1rem",
              textTransform: "none",
              color: "#f3a7ad",
              "&:hover": {
                border: "1px solid #f3a7ad",
              },
              "& .MuiInputBase-root": {
                color: "#f3a7ad",
                "& fieldset": {
                  borderColor: "#f3a7ad",
                },
                "&:hover fieldset": {
                  borderColor: "#f3a7ad",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#f3a7ad",
                },
              },
            }}
          />
          <TextField
            error={passwordErr !== ""}
            helperText={passwordErr}
            value={password}
            onChange={onPasswordInputChanged}
            id="password"
            label="Password"
            type="password"
            variant="filled"
            InputLabelProps={{
              style: { color: "#ffffff" },
            }}
            sx={{
              width: "800px",
              border: "1px solid #f3a7ad",
              borderRadius: "1rem",
              textTransform: "none",
              color: "#f3a7ad",
              "&:hover": {
                border: "1px solid #f3a7ad",
              },
              "& .MuiInputBase-root": {
                color: "#f3a7ad",
                "& fieldset": {
                  borderColor: "#f3a7ad",
                },
                "&:hover fieldset": {
                  borderColor: "#f3a7ad",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#f3a7ad",
                },
              },
            }}
          />
          <Stack
            direction="row"
            spacing={1}
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            <span style={{ color: "white" }}>Don't have an account?</span>
            <span
              onClick={() => navigate("/Register")}
              style={{ color: "white", cursor: "pointer" }}
              onMouseOver={(e) => (e.target.style.color = "#f3a7ad")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              Register
            </span>
          </Stack>
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
export default Login;
