import React from "react";
import { NavLink, Link } from "react-router-dom";

const navbar = () => {
  return (
    <>
      <section className="nav_section">
        <div className="nav_logo">
          <Link to="/home">
            <img
              src="https://crazy-snacks.netlify.app/static/media/Untitled-1.73c90410dcbebfa70839.png"
              alt="Logo"
            ></img>
          </Link>
        </div>
        <nav className="navbar">
          <ul className="nav_ul">
            <li>
              <NavLink to="/home">হোমপেজ</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">আমাদের সম্পর্কে</NavLink>
            </li>
            <div className="sub_menu_wrap">
              <li className="sub_menu_services">
                <NavLink to="#">সেবাসূমহ</NavLink>
                <ul className="sub_menu">
                  <li>
                    <NavLink to="#">ওয়েব ডেভেলপমেন্ট</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">ডিজিটাল মার্কেটিং</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">ডোমেইন এবং হোস্টিং</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">গ্রাফিক্স ডিজাইন</NavLink>
                  </li>
                </ul>
              </li>
            </div>
            <li>
              <NavLink to="/pricing">প্রাইসিং</NavLink>
            </li>
            <li>
              <NavLink to="/demo">ডেমো</NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default navbar;
