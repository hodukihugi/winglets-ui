import React, {useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";
import Policy from "./pages/Policy";
import EditProfile from "./pages/Profile/EditProfile";
import Contact from "./pages/Profile/ContactAndFAQ";
import ProfileHeader from "./pages/Profile/ProfileHeader";
import Home from "./pages/Home";
import {useAppSelector} from "./redux/hooks";
import {selectAuthToken} from "./redux/slices/auth.slice";
function App() {
    // const navigate = useNavigate();
    //
    // const authToken = useAppSelector(selectAuthToken);
    // useEffect(
    //     () => {
    //         if (!authToken) {
    //             console.log("No auth token found");
    //             navigate("/Login");
    //         }
    //     },
    //     [authToken]
    // );
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/profile" element={<ProfileHeader />}>
          <Route index element={<EditProfile />} />
          <Route path="faq" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </Router>
  );
}

export default App;
