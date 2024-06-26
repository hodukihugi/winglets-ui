import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
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
import Policy from "./pages/Policy";
import QuestionAndAnswer from "./pages/Profile/Q&A";
import ProfileCreation from "./pages/Profile/ProfileCreation";
import Register from "./pages/User/Register";
import VerifyEmail from "./pages/User/EmaillVerification";
import { useDispatch } from "react-redux";
import { hideTopLoading } from "./redux/slices/common.slice";

const AppRouter = () => {
  const authToken = useAppSelector(selectAuthToken);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const publicPaths = ["/register", "/verification"];
    if (!authToken && !publicPaths.includes(location.pathname)) {
      console.log("No auth token found");
      navigate("/login");
      dispatch(hideTopLoading());
    }
  }, [authToken, location.pathname, navigate, dispatch]);

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
      <Route path="/verification" element={<VerifyEmail />} />
      <Route path="/Q&A" element={<QuestionAndAnswer />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/createProfile" element={<ProfileCreation />} />
    </Routes>
  );
};

export default AppRouter;
