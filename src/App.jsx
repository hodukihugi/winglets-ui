import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";
import Policy from "./pages/Policy";
import EditProfile from "./pages/Profile/EditProfile";
import Settings from "./pages/Profile/Settings";
import Contact from "./pages/Profile/ContactAndFAQ";
import ProfileHeader from "./pages/Profile/ProfileHeader";
import Home from "./pages/Home";
import Introduce from "./pages/User/Introduce";
import ChatScreen from "./components/homeItems/ChatScreen";
function App() {

  // const toasts = useAppSelector(selectToasts);
  // const Toasts = () =>
  //     toasts.map(toast => (
  //         <Snackbar
  //             key={toast._id}
  //             open
  //             autoHideDuration={toast.durationInSeconds ? toast.durationInSeconds * 1000 : 6000}
  //             onClose={() => handleToastClose(toast._id)}
  //         >
  //           <Alert onClose={() => handleToastClose(toast._id)} severity={toast.type} sx={{width: '100%'}}>
  //             {toast.message}
  //           </Alert>
  //         </Snackbar>
  //     ));
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
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </Router>
  );
}

export default App;
