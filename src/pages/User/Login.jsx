import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import "./login.css";
import logoReal from "../../assets/image/LogoReal.svg";
import "../../assets/font/Roboto.css";

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
      setUsernameErr("Vui lòng nhập email");
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
      sx={{ backgroundColor: "white", height: "100vh", marginBottom: "16px" }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="1080px"
        className="Login"
      >
        <Stack>
          <Stack spacing={3} alignItems="center">
            <img
              src={logoReal}
              alt="Logo"
              style={{ width: "300px", height: "250px" }}
            />
            <Typography
              variant="h4"
              sx={{
                color: "#fffff",
                fontSize: "24px",
                marginBottom: "80px",
                marginTop: "0px",
                fontFamily: "'Roboto-Bold'",
              }}
            >
              Login Page
            </Typography>
            <div class="group">
              <svg
                stroke="currentColor"
                stroke-width="1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v12h16V6l-8 5-8-5zm8 5L4 6h16l-8 5z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>

              <input
                className={`input ${usernameErr ? "error" : ""}`}
                placeholder="Email"
                value={username}
                onChange={onUsernameInputChanged}
                id="password"
              />
            </div>
            <div class="group">
              <svg
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
              >
                <path
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              <input
                className={`input ${passwordErr ? "error" : ""}`}
                type="password"
                placeholder="Password"
                value={password}
                onChange={onPasswordInputChanged}
                id="password"
              />
            </div>

            <Stack
              direction="row"
              spacing={1}
              justifyContent="flex-end"
              alignItems="flex-start"
            >
              <span style={{ color: "#f3a7ad" }}>Don't have an account?</span>
              <span
                onClick={() => navigate("/Register")}
                style={{ color: "#f3a7ad", cursor: "pointer" }}
                onMouseOver={(e) => (e.target.style.color = "#EF4C72")}
                onMouseOut={(e) => (e.target.style.color = "#f3a7ad")}
              >
                Register
              </span>
            </Stack>
            <button className="loginButton" onClick={handleLogin}>
              <p>Login</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </Stack>
        </Stack>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginLeft="0px"
      >
        <div class="cssload-main">
          <div class="cssload-heart">
            <span class="cssload-heartL"></span>
            <span class="cssload-heartR"></span>
            <span class="cssload-square"></span>
          </div>
          <div class="cssload-shadow"></div>
        </div>
      </Box>
    </Box>
  );
}
export default Login;
