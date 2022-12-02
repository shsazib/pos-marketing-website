import React from "react";
import Background from "./img/home-background.jpg";
import SMang from './img/sel-mang.jpg';
import StoMang from './img/sto_mang.jpg';
import accoMang from './img/accou_mang.jpg';
import repMang from './img/report.jpg';
import Desktop from "./img/Desktop.png";
import { NavLink } from "react-router-dom";

const home = () => {
  return (
    <>
      <section id="home_bg_section">
        <div className="home_bg">
          <img className="home_bg_img" src={Background} alt="Background"></img>
          <div className="home_bg_content">
            <div>
              <h1>
                ডিজিটাল উপায়ে হোক আপনার <br /> ব্যবসার সকল সমাধান !
              </h1>
              <h3>
                আপনার ব্যাবসার সকল সমস্যা সমাধানে <br />
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
      <section className="home_mang_section">
        <div className="home_mang">
          <div className="home_mang_con">
            <div>
              <h2>সেল’স ম্যানেজমেন্ট</h2>
              <p>দৈনন্দিন কাস্টমারের তালিকা, বেচা-বিক্রি , মানি রিসিট প্রদান এবং বাকিতে লেন-দেনসহ সকল কাজ করা যাবে সহজেই।</p>
            </div>
            <img src={SMang} alt="SMang" />
          </div>
          <div className="home_mang_con">
            <img src={StoMang} alt="StoMang" />
            <div>
              <h2>স্টক ম্যানেজমেন্ট</h2>
              <p>স্টকে থাকা সকল পণ্যের হিসাব-নিকাশ হবে শুধু আঙুলের ইশারায়।</p>
            </div>
          </div>
          <div className="home_mang_con">
            <div>
              <h2>আকাউন্ট’স ম্যানেজমেন্ট</h2>
              <p>ব্যবসায়িক ছোট বড় সকল প্রকার লেন-দেনসহ লাভ-ক্ষতির হিসেব রাখা যায় একদম সহজে ।</p>
            </div>
            <img src={accoMang} alt="accoMang" />
          </div>
          <div className="home_mang_con">
            <img src={repMang} alt="repMang" />
            <div>
              <h2>রিপোর্ট</h2>
              <p>ব্যবসায়িক সকল হিসাব এবং প্রতিনিয়ত আপডেট রাখতে পারবেন সহজেই। আপনার যেকোনো ডিভাইস থেকে যেকোনো সময় দেখতে পারবেন আপনার ব্যবসায়িক সেল’স সহ অন্যান্য রিপোর্ট।</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default home;
