import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./img/logo.png";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { GoTriangleDown } from "react-icons/go";

const navbar = () => {
  const [iconChange, setIconChange] = useState(false);
  const [subTogg, setSubTogg] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIconChange(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <section className="full_navbar">
        <div className="nav_section">
          <div className="nav_logo">
            <Link to="/home">
              <img src={Logo} alt="Logo"></img>
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
                  <a to={false}>সেবাসূমহ</a>
                  <ul className="sub_menu">
                    <li>
                      <a href="https://www.zealtechbd.com/" target="__blank">
                        ওয়েব ডেভেলপমেন্ট
                      </a>
                    </li>
                    <li>
                      <a href="https://www.zealtechbd.com/" target="__blank">
                        ডিজিটাল মার্কেটিং
                      </a>
                    </li>
                    <li>
                      <a href="https://www.zealtechbd.com/" target="__blank">
                        ডোমেইন এবং হোস্টিং
                      </a>
                    </li>
                    <li>
                      <a href="https://www.zealtechbd.com/" target="__blank">
                        গ্রাফিক্স ডিজাইন
                      </a>
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
        </div>

        <div className="phone_nav_section" ref={menuRef}>
          <div className="phone_nav_main">
            <div className="nav_logo">
              <Link to="/home">
                <img src={Logo} alt="Logo"></img>
              </Link>
            </div>
            <div
              onClick={() => {
                setIconChange(!iconChange);
              }}
            >
              {iconChange ? (
                <GrClose className="nav_togg_btn" />
              ) : (
                <FaBars className="nav_togg_btn" />
              )}
            </div>
          </div>

          <div className={iconChange ? "phone_nav" : "phone_nav_none"}>
            <ul className="phone_nav_ul">
              <li>
                <NavLink to="/home">হোমপেজ</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus">আমাদের সম্পর্কে</NavLink>
              </li>
              <div className="phone_nav_submenu_warp">
                <li className="phone_sub_menu_services">
                  <NavLink
                    to={false}
                    onClick={() => {
                      setSubTogg(!subTogg);
                    }}
                  >
                    সেবাসূমহ <GoTriangleDown />
                  </NavLink>
                  <ul
                    className={
                      subTogg ? "phone_sub_menu" : "phone_sub_menu_none"
                    }
                  >
                    <li>
                      <a href="https://www.zealtechbd.com/" target="__blank">
                        ওয়েব ডেভেলপমেন্ট
                      </a>
                    </li>
                    <li>
                      <a href="https://www.zealtechbd.com/" target="__blank">
                        ডিজিটাল মার্কেটিং
                      </a>
                    </li>
                    <li>
                      <a href="https://www.zealtechbd.com/" target="__blank">
                        ডোমেইন এবং হোস্টিং
                      </a>
                    </li>
                    <li>
                      <a href="https://www.zealtechbd.com/" target="__blank">
                        গ্রাফিক্স ডিজাইন
                      </a>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default navbar;
