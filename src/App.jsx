import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/navbar";
import Footer from "./Component/footer";
import Home from "./Pages/home";
import Aboutus from "./Pages/aboutus";
import Pricing from "./Pages/pricing";
import Demo from "./Pages/demo";
import "./css/master.css";
import ScrollTop from "./Component/scrollTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
