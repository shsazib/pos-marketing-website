import React from "react";
import Background from "./img/home-background.jpg";
import SMang from "./img/sel-mang.png";
import StoMang from "./img/sto_mang.png";
import accoMang from "./img/accou_mang.png";
import repMang from "./img/report.png";
import Desktop from "./img/Desktop.png";

import IphoneAnd from "./img/iphone-adnd.png";
import Support from "./img/customar-support.png";
import Database from "./img/datbase.png";

import PosUser from "./img/pos-use-pic.png";
import { NavLink } from "react-router-dom";
import { RiArrowRightFill } from "react-icons/ri";
import { BsYoutube, BsFacebook, BsWhatsapp } from "react-icons/bs";

import PosUserRev from "../Component/customarRev/customarRev";

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

      <section className="contact_section">
        <a href="" className="con_item con_item_whatsapp">
          <BsWhatsapp className="con_item_social con_whatsapp" />
          <div>
            <h3>Whatsapp</h3>
            <p>Messages</p>
          </div>
          <RiArrowRightFill />
        </a>
        <a href="" className="con_item con_item_facebook">
          <BsFacebook className="con_item_social con_facebook" />
          <div>
            <h3>Facebook</h3>
            <p>News Feed</p>
          </div>
          <RiArrowRightFill />
        </a>
        <a href="" className="con_item con_item_youtube">
          <BsYoutube className="con_item_social con_youtube" />
          <div>
            <h3>Youtube</h3>
            <p>Tutorial Videos</p>
          </div>
          <RiArrowRightFill />
        </a>
      </section>

      <section className="home_mang_section">
        <div className="home_mang">
          <div className="home_mang_con">
            <div>
              <h2>সেল’স ম্যানেজমেন্ট</h2>
              <p>
                দৈনন্দিন কাস্টমারের তালিকা, বেচা-বিক্রি , মানি রিসিট প্রদান এবং
                বাকিতে লেন-দেনসহ সকল কাজ করা যাবে সহজেই।
              </p>
            </div>
            <img src={SMang} alt="SMang" />
          </div>
          <div className="home_mang_con home_mang_con_warp">
            <img src={StoMang} alt="StoMang" />
            <div>
              <h2>স্টক ম্যানেজমেন্ট</h2>
              <p>স্টকে থাকা সকল পণ্যের হিসাব-নিকাশ হবে শুধু আঙুলের ইশারায়।</p>
            </div>
          </div>
          <div className="home_mang_con">
            <div>
              <h2>আকাউন্ট’স ম্যানেজমেন্ট</h2>
              <p>
                ব্যবসায়িক ছোট বড় সকল প্রকার লেন-দেনসহ লাভ-ক্ষতির হিসেব রাখা যায়
                একদম সহজে ।
              </p>
            </div>
            <img src={accoMang} alt="accoMang" />
          </div>
          <div className="home_mang_con home_mang_con_warp">
            <img src={repMang} alt="repMang" />
            <div>
              <h2>রিপোর্ট</h2>
              <p>
                ব্যবসায়িক সকল হিসাব এবং প্রতিনিয়ত আপডেট রাখতে পারবেন সহজেই।
                আপনার যেকোনো ডিভাইস থেকে যেকোনো সময় দেখতে পারবেন আপনার ব্যবসায়িক
                সেল’স সহ অন্যান্য রিপোর্ট।
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature_cards">
        <div className="feature">
          <div className="feature_card">
            <img src={IphoneAnd} alt="IphoneAnd" />
            <h3> Android এবং IPhone</h3>
            <p>
              ঘরে, বাইরে এবং অফিসে যেখানেই হক না কেনো, ব্যবসার নিয়ন্ত্রন থাকবে
              আপনার হাতের মুঠোই
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="feature_card">
            <img src={Support} alt="Support" />
            <h3>ফ্রী সাপোর্ট</h3>
            <p>
              অনলাইনে অথবা ফোন যেকোনো সময় আমরা আপনার সাপোর্ট এর জন্য প্রস্তুত
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="feature_card">
            <img src={Database} alt="Database" />
            <h3>100% নিরাপদ ডাটাবেস</h3>
            <p>এটি ব্যবসার সকল তথ্য গোপন রাখে এবং ১০০% নিরাপত্তা প্রদান করে</p>
          </div>
        </div>
      </section>

      <section className="hom_bottom_testimonuial">
        <p id="testimonuial_title">
          বাংলাদেশের হাজার হাজার ব্যবসায়ী দের আস্থা অর্জন করতে পেরে আমরা
          গর্বিত।
        </p>
        <div className="customar_rev">
          <PosUserRev />
        </div>
      </section>
    </>
  );
};

export default home;
