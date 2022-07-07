import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExportContextUser from "./context/UserContext";
import Home from "./pages/Home";
import ProjectAds from "./pages/ProjectAds";
import Artists from "./pages/Artists";
import Creations from "./pages/Creations";
import Help from "./pages/Help";
import Register from "./pages/Register";
import MyProfile from "./pages/MyProfile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyProjectAds from "./pages/MyProjectAds";
import ContactUs from "./pages/ContactUs";
import PostAnAd from "./pages/PostAnAd";
import ProtectedRoute from "./components/Protected/ProtectedRoute";
import "./App.css";

function App() {
  const { user } = useContext(ExportContextUser.UserContext);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project_Ads" element={<ProjectAds />} />
        <Route path="/Artists" element={<Artists />} />
        <Route path="/Creations" element={<Creations />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Contact_us" element={<ContactUs />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Post_An_Ad" element={<PostAnAd />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route
          path="/My_Project_Ads"
          element={
            <ProtectedRoute user={user}>
              <MyProjectAds />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
