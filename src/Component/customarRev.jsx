import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
              ''এই সফটওয়ারে দিয়ে দোকানের দৈনিক হিসাব-নিকাশ থেকে শুরু করে,
              কাস্টমার এর তালিকা, ডিস্কাউন্ট অফার সব কিছুই সহজে করতে পারছি। এক
              কথায় অসাধারণ একটি সফটওয়ারে।''
            </p>
            <img src="https://picsum.photos/200/300" alt="Tst img" />
            <h1>রাশেদ ভুঈয়া </h1>
            <p>রেস্টুরেন্ট শপ, ঢাকা</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <p>
              এই সফটওয়ারে দিয়ে দোকানের দৈনিক হিসাব-নিকাশ থেকে শুরু করে, কাস্টমার
              এর তালিকা, ডিস্কাউন্ট অফার সব কিছুই সহজে করতে পারছি। এক কথায়
              অসাধারণ একটি সফটওয়ারে।
            </p>
            <img src="https://picsum.photos/200/300" alt="Tst img" />
            <h1>রাশেদ ভুঈয়া </h1>
            <p>রেস্টুরেন্ট শপ, ঢাকা</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <p>
              এই সফটওয়ারে দিয়ে দোকানের দৈনিক হিসাব-নিকাশ থেকে শুরু করে, কাস্টমার
              এর তালিকা, ডিস্কাউন্ট অফার সব কিছুই সহজে করতে পারছি। এক কথায়
              অসাধারণ একটি সফটওয়ারে।
            </p>
            <img src="https://picsum.photos/200/300" alt="Tst img" />
            <h1>রাশেদ ভুঈয়া </h1>
            <p>রেস্টুরেন্ট শপ, ঢাকা</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default carousel;
