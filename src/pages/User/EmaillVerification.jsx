import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  useSendEmailTokenMutation,
  useVerifyEmailMutation,
} from "../../redux/apis/auth.api";
import {
  addToast,
  hideTopLoading,
  showTopLoading,
} from "../../redux/slices/common.slice";
import { useAppSelector } from "../../redux/hooks";
import { selectEmail } from "../../redux/slices/register.slice";
import "./emailverification.css";

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
        verification_code: token,
      });
      if (
        response &&
        response.data &&
        response.data.message === "verify email success"
      ) {
        dispatch(
          addToast({
            type: "success",
            message: "verify successfully",
          })
        );
        navigate("/login");
      }
      dispatch(hideTopLoading());
    } catch (error) {
      console.log(error);
      dispatch(hideTopLoading());
    }
  };

  const handleResend = async () => {
    try {
      dispatch(showTopLoading());
      const response = await resend({ email: email });
      if (
        response &&
        response.data &&
        response.data.message ===
          "signup successfully, check your mail to verify your account"
      ) {
        dispatch(
          addToast({
            type: "success",
            message: "resend successfully",
          })
        );
      }
      dispatch(hideTopLoading());
    } catch (error) {
      console.log(error);
      dispatch(hideTopLoading());
    }
  };

  return (
    <div className="email-verification-container">
      <form className="otp-Form">
        <div className="heartbeatloader">
          <svg
            className="svgdraw"
            width="100%"
            height="100%"
            viewBox="0 0 150 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path"
              d="M 0 200 l 40 0 l 5 -40 l 5 40 l 10 0 l 5 15 l 10 -140 l 10 220 l 5 -95 l 10 0 l 5 20 l 5 -20 l 30 0"
              fill="transparent"
              strokeWidth="4"
              stroke="black"
            ></path>
          </svg>
          <div className="innercircle"></div>
          <div className="outercircle"></div>
        </div>

        <span className="mainHeading">Verification Code</span>
        <p className="otpSubheading">
          We have sent a verification code to your email
        </p>
        <div className="email-inputContainer">
          <input
            className="email-input"
            placeholder="Enter verification code"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            maxLength={10}
          />
        </div>
        <button
          type="button"
          className="verifyButton"
          onClick={handleVerifyButton}
        >
          Verify
        </button>
        <p className="resendNote">
          Didn't receive the code?{" "}
          <button type="button" className="resendBtn" onClick={handleResend}>
            Resend Code
          </button>
        </p>
      </form>
    </div>
  );
};

export default VerifyEmail;
