import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import img
import maleImg from "./img/male-cus.webp";
import femaleImg from "./img/female-cus.webp";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="content">
            <p>
              আমি প্রায় ২ বছর যাবত সফটওয়ারটি ব্যববহার করছি, আলহুমদুলিল্লাহ এই ২
              বছরে আমার যত ধরনের সার্ভিস প্রয়োজন হয়েছে আমি সময় মত পেয়েছি। এই
              প্রতিষ্ঠান এর সবাই খুবই আন্তরিক।
            </p>
            <img src={femaleImg} alt="femaleImg" />
            <h1>তানিয়া সুলতানা</h1>
            <p>হ্যান্ডিক্রাফ্ট শপ, ঢাকা</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <p>
              আমি যেখানেই থাকি না কেন, খুব ভাল মতোই আমার স্টক প্রোডাক্ট এর হিসাব
              রাখতে পারছি। এখন আমাকে হিসাব রাখার জন্য ওয়্যারহাউজে যেতে হয় না।
              তাই একজন হোলসেল ব্যবসায়ী হিসেবে আমি বলবো “আমার সলিউসন” সফটওয়ারটি
              সত্যিই আমার ব্যবসাকে সহজ করে দিয়েছে।
            </p>
            <img src={maleImg} alt="maleImg" />
            <h1>আবুল কালাম</h1>
            <p>স্টক ব্যবসায়ী</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <p>
              এই সফটওয়ারে দিয়ে দোকানের দৈনিক হিসাব-নিকাশ থেকে শুরু করে, কাস্টমার
              এর তালিকা, ডিস্কাউন্ট অফার সব কিছুই সহজে করতে পারছি। এক কথায়
              অসাধারণ একটি সফটওয়ারে।
            </p>
            <img src={maleImg} alt="maleImg" />
            <h1>রাশেদ ভুঈয়া </h1>
            <p>রেস্টুরেন্ট শপ, ঢাকা</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default carousel;
