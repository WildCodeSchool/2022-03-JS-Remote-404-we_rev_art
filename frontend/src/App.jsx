import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectAds from "./pages/ProjectAds";
import Artists from "./pages/Artists";
import Creations from "./pages/Creations";
import Help from "./pages/Help";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project_Ads" element={<ProjectAds />} />
        <Route path="/Artists" element={<Artists />} />
        <Route path="/Creations" element={<Creations />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/My_Account" element={<MyAccount />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
