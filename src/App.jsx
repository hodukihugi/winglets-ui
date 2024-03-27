import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Policy from "./pages/Policy";
import EditProfile from "./pages/Profile/EditProfile";
import Contact from "./pages/Profile/ContactAndFAQ";
import ProfileHeader from "./pages/Profile/ProfileHeader";

function App() {
  return (
    <Router>
      <Routes>
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
