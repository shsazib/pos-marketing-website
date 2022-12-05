import React from "react";
import Logo from "./img/logo.png";
import {
  BsFacebook,
  BsYoutube,
  BsLinkedin,
  BsTelephoneFill,
  BsPinFill,
} from "react-icons/bs";
import { TbWorldLongitude } from "react-icons/tb";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

const footer = () => {
  return (
    <>
      <section className="footer_section">
        <div className="footer">
          <div className="footer_logo">
            <img src={Logo} alt="logo" />
            <div className="footer_soc_icon">
              <a href="https://www.facebook.com/zealtechbd" target="_blank">
                <BsFacebook />
              </a>
              <a href="#">
                <BsYoutube />
              </a>
              <a
                href="https://www.linkedin.com/in/zealtech-bd-540253251/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
              <a href="https://www.zealtechbd.com/" target="_blank">
                <TbWorldLongitude />
              </a>
            </div>
          </div>
          <div>
            <h2>সাপোর্ট</h2>
            <p>যে কোন প্রয়োজনে আমাদের কল করুন। আমরা পাশে আছি ২৪ ঘণ্টা।</p>
            <p className="address_line">
              <BsTelephoneFill />
              <a href="tel:01977749733">
                <span>++88 01977749733</span>
              </a>
            </p>
          </div>
          <div>
            <h2>আমাদের ঠিকানা</h2>
            <p className="address_line">
              <ImLocation />
              <span>
                Ka/32/5/A (2nd Floor), Palash Tower, Shahjadpur, Badda.
              </span>
            </p>
            <p className="address_line">
              <BsPinFill />
              <span>Dhaka Division, Bangladesh.</span>
            </p>
            <p className="address_line">
              <MdEmail />
              <span>info@zealtechbd.com</span>
            </p>
          </div>
          <div className="footer_page">
            <h2>তথ্যাবলী</h2>
            <NavLink to="/home">হোমপেজ</NavLink>
            <NavLink to="/aboutus">আমাদের সম্পর্কে</NavLink>
            <a href="https://www.zealtechbd.com/">সেবাসূমহ</a>
            <NavLink to="/pricing">প্রাইসিং</NavLink>
            <NavLink to="/demo">ডেমো</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default footer;
