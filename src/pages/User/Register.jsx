import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addToast,
  hideTopLoading,
  showTopLoading,
} from "../../redux/slices/common.slice";
import { useRegisterMutation } from "../../redux/apis/auth.api";
import { setRegister } from "../../redux/slices/register.slice";
import logoReal from "../../assets/image/LogoReal.svg";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");
  const [register] = useRegisterMutation();

  const onEmailInputChanged = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  const onPasswordInputChanged = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };
  const onConfirmedPasswordInputChanged = (e) => {
    setConfirmedPassword(e.target.value);
    setConfirmPasswordErr("");
  };
  const handleValidation = () => {
    let valid = true;
    if (email === "") {
      setEmailErr("Vui lòng nhập họ và tên");
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
  const dispatch = useDispatch();
  const handleRegister = async () => {
    if (handleValidation()) {
      try {
        dispatch(showTopLoading());
        const response = await register({ email: email, password: password });
        console.log(response);
        if (
          response &&
          response.data &&
          response.data.message ===
            "signup successfully, check your mail to verify your account"
        ) {
          dispatch(
            addToast({
              type: "success",
              message: "email verifying",
            })
          );

          dispatch(
            setRegister({
              email: email,
            })
          );

          navigate("/verification");
        }

        dispatch(hideTopLoading());
      } catch (error) {
        console.log(error);
      }
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
                className={`input ${emailErr ? "error" : ""}`}
                type="email"
                placeholder="Email"
                value={email}
                onChange={onEmailInputChanged}
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
                className={`input ${confirmPasswordErr ? "error" : ""}`}
                type="password"
                placeholder="Confirm Password"
                value={confirmedPassword}
                onChange={onConfirmedPasswordInputChanged}
                id="password"
              />
            </div>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="flex-end"
              alignItems="flex-start"
            >
              <span style={{ color: "#f3a7ad" }}>Already have an account?</span>
              <span
                onClick={() => navigate("/Login")}
                style={{ color: "#f3a7ad", cursor: "pointer" }}
                onMouseOver={(e) => (e.target.style.color = "#EF4C72")}
                onMouseOut={(e) => (e.target.style.color = "#f3a7ad")}
              >
                Login
              </span>
            </Stack>
            <button className="registerButton" onClick={handleRegister}>
              <p>Register</p>
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

export default Register;
