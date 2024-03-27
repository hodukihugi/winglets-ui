import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
          <Typography variant="h4">Login Page</Typography>
          <TextField
            error={usernameErr !== ""}
            helperText={usernameErr}
            id="username"
            label="Username"
            variant="filled"
            value={username}
            onChange={onUsernameInputChanged}
            sx={{ width: "800px" }}
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
            sx={{ width: "800px" }}
          />
          <Stack
            direction="row"
            spacing={1}
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            <span>Don't have an account?</span>
            <span
              onClick={() => navigate("/Register")}
              style={{ color: "inherit", cursor: "pointer" }}
              onMouseOver={(e) => (e.target.style.color = "red")}
              onMouseOut={(e) => (e.target.style.color = "inherit")}
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
