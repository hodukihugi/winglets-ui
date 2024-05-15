import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/User/Login.jsx";
import Register from "./pages/User/Register";
import Policy from "./pages/Policy";
import EditProfile from "./pages/Profile/EditProfile";
import Settings from "./pages/Profile/Settings";
import Contact from "./pages/Profile/ContactAndFAQ";
import ProfileHeader from "./pages/Profile/ProfileHeader";
import Home from "./pages/Home";
import ChatScreen from "./components/homeItems/ChatScreen";
import { Alert, Snackbar } from "@mui/material";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import {
  removeToast,
  selectShowTopLoading,
  selectToasts,
} from "./redux/slices/common.slice";
import VerifyEmail from "./pages/User/EmaillVerification";

function App() {
  const dispatch = useAppDispatch();
  const showTopLoading = useAppSelector(selectShowTopLoading);
  const toasts = useAppSelector(selectToasts);

  const handleToastClose = (id) => {
    dispatch(removeToast(id));
  };

  const Toasts = () =>
    toasts.map((toast) => (
      <Snackbar
        key={toast._id}
        open
        autoHideDuration={
          toast.durationInSeconds ? toast.durationInSeconds * 1000 : 6000
        }
        onClose={() => handleToastClose(toast._id)}
      >
        <Alert
          onClose={() => handleToastClose(toast._id)}
          severity={toast.type}
          sx={{ width: "100%" }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    ));
  return (
    <Router>
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
        <Route path="/policy" element={<Policy />} />
        <Route path="/verification" element={<VerifyEmail />} />
      </Routes>
    </Router>
  );
}

export default App;
