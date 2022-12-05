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
import MessengerCustomerChat from "react-messenger-customer-chat";

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
        <MessengerCustomerChat
          pageId="<PAGE_ID>"
          appId="<APP_ID>"
          htmlRef="<REF_STRING>"
        />
      </BrowserRouter>
    </>
  );
};

export default App;
