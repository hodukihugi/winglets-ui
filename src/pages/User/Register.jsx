import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import logo from "../../assets/image/logo.png";
import {useDispatch} from "react-redux";
import {addToast, hideTopLoading, showTopLoading} from "../../redux/slices/common.slice";
import {useRegisterMutation} from "../../redux/apis/auth.api";
import {setRegister} from "../../redux/slices/register.slice";

function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [confirmPasswordErr, setConfirmPasswordErr] = useState("");
    const[register]= useRegisterMutation();

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
                const response = await register({email: email, password: password});
                console.log(response);
                if (response && response.data && response.data.message === "signup successfully, check your mail to verify your account") {
                    dispatch(addToast({
                        type: 'success',
                        message: "email verifying"
                    }))

                    dispatch(setRegister({
                        email: email,
                    }))

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
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Stack className="Register" spacing={3}>
                <Stack spacing={3} alignItems="center">
                    <Typography variant="h4" sx={{color: "#f3a7ad", fontSize: "50px"}}>
                        Register Page
                    </Typography>
                    <img src={logo} alt="Logo" style={{width: "500px"}}/>{" "}

                        <TextField
                            error={emailErr !== ""}
                            helperText={emailErr}
                            id="Email"
                            label="Email"
                            variant="filled"
                            value={email}
                            onChange={onEmailInputChanged}
                            InputLabelProps={{
                                style: {color: "#ffffff"},
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
                            style: {color: "#ffffff"},
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
                        error={confirmPasswordErr !== ""}
                        helperText={confirmPasswordErr}
                        id="repassword"
                        label="Confirm Password"
                        type="password"
                        variant="filled"
                        value={confirmedPassword}
                        onChange={onConfirmedPasswordInputChanged}
                        InputLabelProps={{
                            style: {color: "#ffffff"},
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
                    ></TextField>
                    <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="flex-end"
                        alignItems="flex-start"
                    >
                        <span style={{color: "white"}}>Already have an account?</span>
                        <span
                            onClick={() => navigate("/Login")}
                            style={{color: "white", cursor: "pointer"}}
                            onMouseOver={(e) => (e.target.style.color = "#f3a7ad")}
                            onMouseOut={(e) => (e.target.style.color = "white")}
                        >
              Login
            </span>
                    </Stack>
                    <Stack direction='row'><Button
                        variant="contained"
                        color="primary"
                        onClick={handleRegister}
                    >
                        Register
                    </Button>

                    </Stack>

                </Stack>
            </Stack>
        </Box>
    );
}

export default Register;
