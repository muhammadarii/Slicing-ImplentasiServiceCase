import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./input.css";

import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/adminPage/Dashboard";
import UserManagement from "./pages/adminPage/UserManagement";
import Home from "./pages/landingPage/Home";
import AboutUs from "./pages/landingPage/AboutUs";
import NotFound from "./pages/landingPage/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* LoginPage */}
        <Route path="/login" element={<LoginPage />} />
        {/* adminPage */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/datasource" element={<UserManagement />} />
        {/* LandingPage */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
