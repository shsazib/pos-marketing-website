import React from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";

const aboutus = () => {
  return (
    <>
      <section className="about_section">
        <div>
          <h1>আমাদের সম্পর্কে</h1>
          <br />
          <p>
            আমার সলিউশন একটি অনলাইন সফটওয়্যার। যেখানে সব ধরনের শপ নিখুতঁভাবে
            পরিচালনা করা সম্ভব।
          </p>

          <p>
            বাংলাদেশের ক্ষুদ্র ও মাঝারি সকল ব্যবসা ডিজিটালাইজ করার লক্ষে আমরা
            কাজ করে যাচ্ছি।
          </p>

          <p>
            বর্তমানে আমরা চেস্টা করে যাচ্ছি গ্রাহকদের জন্য সহজে ব্যবহার উপযোগী
            সফ্টওয়্যার প্রদান করার জন্য যা সহজেই তাদের ব্যবসা পরিচালনা করতে
            সহায়তা করবে।
          </p>
        </div>
        <div className="about_mid_cont">
          <div className="about_mid_cont_left">
            <h3>আমাদের উল্লেখ্য সুবিধা গুলো হলঃ</h3>
            <div className="about_benefit">
              <BsFillCheckSquareFill className="about_benefit_icon" />
              <p>সহজ অপারেটিং সিস্টেম</p>
            </div>
            <div className="about_benefit">
              <BsFillCheckSquareFill className="about_benefit_icon" />
              <p>সকল সমাধান রয়েছে এক প্ল্যাটফর্মে</p>
            </div>
            <div className="about_benefit">
              <BsFillCheckSquareFill className="about_benefit_icon" />
              <p>আকাউন্ট’স ম্যানেজমেন্ট</p>
            </div>
            <div className="about_benefit">
              <BsFillCheckSquareFill className="about_benefit_icon" />
              <p>একটি শক্তিশালী সফ্টওয়্যার ডেভলপমেন্ট টিম</p>
            </div>
            <div className="about_benefit">
              <BsFillCheckSquareFill className="about_benefit_icon" />
              <p>বিনামূল্যে কাস্টমাইজ করার শুবিধা</p>
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
