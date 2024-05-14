import React, { useState } from 'react';
import {selectEmail} from "../../redux/slices/register.slice";
import {useAppSelector} from "../../redux/hooks";
// import {selectEmail} from "../../redux/slices/register.slice";

const VerifyEmail = () => {
    const email = useAppSelector(selectEmail);
    // const selectedEmail = selectEmail();
    return <>{email}</>
};

export default VerifyEmail;
