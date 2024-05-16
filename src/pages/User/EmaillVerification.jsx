import React, {useState} from 'react';
import {Button, Stack, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useSendEmailTokenMutation,  useVerifyEmailMutation} from "../../redux/apis/auth.api";
import {addToast, hideTopLoading, showTopLoading} from "../../redux/slices/common.slice";
import {useAppSelector} from "../../redux/hooks";
import {selectEmail} from "../../redux/slices/register.slice";

const VerifyEmail = () => {
    const email = useAppSelector(selectEmail);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [token, setToken] = useState("");
    const [resend] = useSendEmailTokenMutation();
    const [verify] = useVerifyEmailMutation();
    const handleVerifyButton = async () => {
        try {
            dispatch(showTopLoading());
            const response = await verify({
                email: email,
                verification_code: token
            });
            if (response && response.date && response.data.message === "verify email success") {
                dispatch(addToast({
                    type: 'success',
                    message: "verify successfully",
                }))

            }
            navigate("/login");
            dispatch(hideTopLoading());
        } catch (error) {
            console.log(error);
        }
    }
    const handleResend = async () => {
        try {
            dispatch(showTopLoading());
            const response = await resend({email: email});
            if (response && response.date && response.data.message === "signup successfully, check your mail to verify your account") {
                dispatch(addToast({
                    type: 'success',
                    message: "resend successfully",
                }))

            }
            dispatch(hideTopLoading());
        } catch (error) {
            console.log(error);
        }
    }

    return (<Stack>
        <Typography>{email}</Typography>
        <TextField label='Token' value={token} onChange={(e) => setToken(e.target.value)}/>
        <Button onClick={handleVerifyButton}>Verify</Button>
        <Button onClick={handleResend}>Resend token </Button>

    </Stack>)
}


export default VerifyEmail;
