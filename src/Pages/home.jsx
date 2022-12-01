import React from "react";
import Background from "./img/home-background.jpg";
import Desktop from "./img/Desktop.png";
import { NavLink } from "react-router-dom";

const home = () => {
  return (
    <>
      <section id="home_section">
        <div className="home_bg">
          <img className="home_bg_img" src={Background} alt="Background"></img>
          <div className="home_bg_content">
            <div>
              <h1>
                ডিজিটাল উপায়ে হোক আপনার <br /> ব্যবসার সকল সমাধান !
              </h1>
              <h3>
                আপনার ব্যাবসার সকল সমস্যা সমাধানে <br />{" "}
                <span>zealtechpos</span> আছে আপনার পাশে
              </h3>
              <div className="home_bg_content_btn">
                <NavLink to="#">View Demo</NavLink>
                <NavLink to="#">Call for Order</NavLink>
              </div>
            </div>
            <img className="desktop" src={Desktop} alt="Desktop" />
          </div>
        </div>
      </section>
    </>
  );
};

export default home;
