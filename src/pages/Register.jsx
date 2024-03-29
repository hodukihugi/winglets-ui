import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

  const onUsernameInputChanged = (e) => {
    setUsername(e.target.value);
    setUsernameErr("");
  };
  const onPasswordInputChanged = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };
  const onConfirmedPasswordInputChanged = (e) => {
    setConfirmedPassword(e.target.value);
    setConfirmPasswordErr("");
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
    if (confirmedPassword === "") {
      setConfirmPasswordErr("Vui lòng nhập mật khẩu");
      valid = false;
    }
    if (password.length < 8 && password !== "") {
      setPasswordErr("Mật khẩu phải có ít nhất 8 kí tự");
      valid = false;
    }
    if (confirmedPassword !== password && password !== "") {
      setConfirmPasswordErr("Mật khẩu không khớp");
      valid = false;
    }
    return valid;
  };

  const handleRegister = () => {
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
      <Stack className="Register" spacing={5}>
        <Stack spacing={3} alignItems="center">
          <Typography variant="h4">Register Page</Typography>
          <TextField
            error={usernameErr !== ""}
            helperText={usernameErr}
            id="username"
            label="Username"
            variant="filled"
            value={username}
            onChange={onUsernameInputChanged}
            sx={{ width: "1000px" }}
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
            sx={{ width: "1000px" }}
          />
          <TextField
            error={confirmPasswordErr !== ""}
            helperText={confirmPasswordErr}
            id="repassword"
            label="Confirm Password"
            type="password"
            variant="filled"
            value={confirmedPassword}
            onChange={onConfirmedPasswordInputChanged}
            sx={{ width: "1000px" }}
          ></TextField>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            <span>Already have an account?</span>
            <span
              onClick={() => navigate("/Login")}
              style={{ color: "inherit", cursor: "pointer" }}
              onMouseOver={(e) => (e.target.style.color = "red")}
              onMouseOut={(e) => (e.target.style.color = "inherit")}
            >
              Login
            </span>
          </Stack>

          <Button variant="contained" color="primary" onClick={handleRegister}>
            Register
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
export default Register;
