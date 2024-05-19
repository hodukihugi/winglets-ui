import {Route, Routes} from "react-router-dom";
import Register from "./pages/User/Register";
import React from "react";
import VerifyEmail from "./pages/User/EmaillVerification";

const RegisterRouter = () =>{
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/verification" element={<VerifyEmail />} />
        </Routes>
    )
}
export default RegisterRouter;