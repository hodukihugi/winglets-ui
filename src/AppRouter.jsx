import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useAppSelector } from "./redux/hooks";
import { selectAuthToken } from "./redux/slices/auth.slice";
import Home from "./pages/Home";
import ChatScreen from "./components/homeItems/ChatScreen";
import ProfileHeader from "./pages/Profile/ProfileHeader";
import EditProfile from "./pages/Profile/EditProfile";
import Settings from "./pages/Profile/Settings";
import Contact from "./pages/Profile/ContactAndFAQ";
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";
import Policy from "./pages/Policy";
import VerifyEmail from "./pages/User/EmaillVerification";
import QuestionAndAnswer from "./pages/User/Q&A";
import ProfileCreation from "./pages/Profile/ProfileCreation";

const AppRouter = () => {
  const authToken = useAppSelector(selectAuthToken);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authToken) {
      console.log("No auth token found");
      navigate("/Login");
    }
  }, [authToken]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat/:personId" element={<ChatScreen />} />
      <Route path="/profile" element={<ProfileHeader />}>
        <Route index element={<EditProfile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="faq" element={<Contact />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Q&A" element={<QuestionAndAnswer />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/verification" element={<VerifyEmail />} />
      <Route path="/createProfile" element={<ProfileCreation />} />
    </Routes>
  );
};
export default AppRouter;
