import React from "react";
import DemoImg from "./img/Web-site-flyer.png";

const demo = () => {
  return (
    <>
      <section className="demo_section">
        <div className="demo_content">
          <h1>
            A <span>point-of-sale</span> system used to refer to the cash
            register at a store.
          </h1>
          <p>
            A POS system allows your business to accept payments from customers
            and keep track of sales. It sounds simple enough, but the setup can
            work in different ways, depending on whether you sell online, have a
            physical storefront, or both.
          </p>
          <p>
            A point-of-sale system used to refer to the cash register at a
            store. Today, modern POS systems are entirely digital, which means
            you can check out a customer wherever you are. All you need is a POS
            app and an internet-enabled device, such as a tablet or phone.
          </p>
        </div>
        <div className="demo_img">
          <img src={DemoImg} alt="DemoImg" />
        </div>
      </section>
    </>
  );
};

export default demo;
