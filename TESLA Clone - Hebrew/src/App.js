import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import "./Style/Navbarstyle.css";
import Menu from "./Components/Menu";
import HomePage from "./Components/HomePage";
import CarDetailsM3 from "./Components/CarDetailsM3";
import DesignTeslaM3 from "./Components/DesignTeslaM3";
import Register from "./Components/Register";
import zIndex from "@mui/material/styles/zIndex";
import Login from "./Components/Login";
import TestDrive from "./Components/TestDrive";
import AdminPage from "./Components/AdminPage";
import OrderPayment from "./Components/OrderPayment";
import UserProfile from "./Components/UserProfile";
import Newsletter from "./Components/Newsletter";
import CarDetailsMS from "./Components/CarDetailsMS";
import DesignTeslaModelS from "./Components/DesignTeslaModelS";
import CarDetailsMX from "./Components/CarDetailsMX";
import DesginTeslaModelX from "./Components/DesginTeslaModelX";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <div style={{ position: "fixed", width: "100%", zIndex: 10 }}>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && <Menu />}
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carDetailsM3" element={<CarDetailsM3 />} />
        <Route path="/designTeslaM3" element={<DesignTeslaM3 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/testdrive" element={<TestDrive />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/orderpayment" element={<OrderPayment />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/carDetailsMS" element={<CarDetailsMS />} />
        <Route path="/designTeslaMS" element={<DesignTeslaModelS />} />
        <Route path="/carDetailsMX" element={<CarDetailsMX />} />
        <Route path="/designTeslaMX" element={<DesginTeslaModelX />} />
      </Routes>
    </div>
  );
}

export default App;
