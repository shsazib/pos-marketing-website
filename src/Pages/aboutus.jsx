import React from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";

const aboutus = () => {
  return (
    <>
      <section className="about_section">
        <div>
          <h1>আমাদের সম্পর্কে</h1>
          <br />
          <p className="about_top_name">
          <b>zealtech pos</b> একটি অনলাইন <b>pos</b> সফটওয়্যার যার ভিতরে আপনি ছোট বড় সকল ব্যবসার হিসাব নিকাশ রাখতে পারবেন খুব সহজে।
          </p>

          <p>
          এর মাধ্যমে একটি ব্যবসাকে খুব সহজেই ডিজিটালাইজড করা যাবে সেইসাথে গ্রাহকদের কথা চিন্তা করে সফটওয়্যার এর ইন্টারফেস অনেক সহজ করা হয়েছে যাতে যে কেউ তার ব্যবসাকে সফটওয়ারের মাধ্যমে পরিচালনা করতে পারে ।
          </p>
        </div>
        <div className="about_mid_cont">
          <div className="about_mid_cont_left">
            <h3 className="about_top_name">কেন <b> zealtech pos </b> ব্যবহার করবেন ?</h3>
            <div className="about_benefit">
              <BsFillCheckSquareFill className="about_benefit_icon" />
              <p>ইউজার ফ্রেন্ডলি</p>
            </div>
            <div className="about_benefit">
              <BsFillCheckSquareFill className="about_benefit_icon" />
              <p>এক জায়গায় সকল সমস্যার সমাধান</p>
            </div>
            <div className="about_benefit">
              <BsFillCheckSquareFill className="about_benefit_icon" />
              <p>অনলাইন ভিত্তিক তাই দেশের যেকোনো প্রান্ত থেকে চালাতে পারবেন</p>
            </div>
            <div className="about_benefit">
              <BsFillCheckSquareFill className="about_benefit_icon" />
              <p> Windows / Linux / Mac সকল অপারেটিং সিস্টেমেই ব্যবহার করতে পারবেন</p>
            </div>
            <div className="about_benefit">
              <BsFillCheckSquareFill className="about_benefit_icon" />
              <p>কাস্টমার সুবিধা</p>
            </div>
            <div className="about_benefit">
              <BsFillCheckSquareFill className="about_benefit_icon" />
              <p>সার্বক্ষণিক গ্রাহক সেবা</p>
            </div>
          </div>
          <div className="about_mid_cont_video">
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
          </div>
        </div>
        <div>
          <p>
            আমরা আমাদের গ্রাহকদের চাহিদার উপর সব সময় প্রাধান্য দিয়ে থাকি।
            বর্তমানে সফ্টওয়্যার বাজার ক্রমাগত বেড়ে চলেছে এবং অনলাইন
            সফ্টওয়্যারের চাহিদার পরিমাণ একই সাথে বৃদ্ধি পাচ্ছে । গবেষণা
            অনযুায়ী দেখা গেছে বর্তমানে প্রায় ৮৮% ব্যবসা প্রতিষ্ঠান সফটওয়্যার
            উপর নির্ভরশীল।
            <br />
            <br />
            এছাড়া বর্তমানে ব্যবসায়ীরা সাধারণত সফটওয়্যার এর মাধ্যমেই একাধিক শাখা
            পরিচালনা করে থাকেন। সেই বিষয়টি মাথায় রেখে আমরা রেখেছি এক প্লাটফর্মে
            একাধিক শাখা পরিচালনা করার বিশেষ সুবিধা। <br />
            আমরা আমাদের সকল ক্ষেত্রে গ্রাহকদের মতামত সরাসরি প্রাধান্য দিয়ে থাকি।
            আমরা চাই যুগের সাথে তাল মিলিয়ে বাংলাদেশ এর সকল ব্যবসা গড়ে উঠুক এবং
            সকল ব্যবসা হক সমদ্ধৃশালী।
          </p>
          <br />
          <p>
            আমাদের অফিস এর ঠিকানা, <br />
            কে এ/৩২/৫/এ (২য় তলা), পলাশ টাওয়ার <br />
            শাহজাদপুর, বাড্ডা।
          </p>
        </div>
      </section>
    </>
  );
};

export default aboutus;
