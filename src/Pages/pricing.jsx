import React from "react";
import { FaCheck } from "react-icons/fa";
import { RiCheckboxBlankFill } from "react-icons/ri";

const pricing = () => {
  return (
    <>
      <section className="pricing_section">
        <div className="basic_price">
          <div className="basic">
            <div className="price_heading">
              <RiCheckboxBlankFill className="p_head_icon bas_had_icon" />
              <h1>Basic</h1>
            </div>
            <div className="month_price month_p_basic">
              <div className="month_price_child">
                <span>৳</span>
                <h1>999</h1>
                <p>/MO</p>
              </div>
            </div>
            <div className="pricing">
              <div className="plan_list">
                <FaCheck className="basc_plan_list_icon" />
                <p>3 Users</p>
              </div>
              <div className="plan_list">
                <FaCheck className="basc_plan_list_icon" />
                <p>Unlimited Suppliers</p>
              </div>
              <div className="plan_list">
                <FaCheck className="basc_plan_list_icon" />
                <p>Unlimited Customers</p>
              </div>
              <div className="plan_list">
                <FaCheck className="basc_plan_list_icon" />
                <p>Stocks/Inventory</p>
              </div>
              <div className="plan_list">
                <FaCheck className="basc_plan_list_icon" />
                <p>Sales</p>
              </div>
              <div className="plan_list">
                <FaCheck className="basc_plan_list_icon" />
                <p>Unlimited Money Receipt</p>
              </div>
              <div className="plan_list">
                <FaCheck className="basc_plan_list_icon" />
                <p>Quotation</p>
              </div>
              <div className="plan_list">
                <FaCheck className="basc_plan_list_icon" />
                <p>Reports</p>
              </div>
              <div className="plan_list">
                <FaCheck className="basc_plan_list_icon" />
                <p>Accounts</p>
              </div>
              <div className="plan_list">
                <FaCheck className="basc_plan_list_icon" />
                <p>Employees</p>
              </div>
              <div className="plan_list">
                <FaCheck className="basc_plan_list_icon" />
                <p>
                  <b>Messages</b>
                </p>
              </div>
              <div className="plan_list">
                <FaCheck className="basc_plan_list_icon" />
                <p>
                  <b>24/7 Customer Support</b>
                </p>
              </div>
            </div>
            <a href="#" id="basic_call_btn" className="call_btn">
              Call Now
            </a>
          </div>
          <div className="basic_plan_badge plan_badge">
            <p>9,999৳ (One Time) Software Configaration Fee</p>
          </div>
        </div>
        <div className="standard_price">
          <div className="standard">
            <div className="price_heading">
              <RiCheckboxBlankFill className="p_head_icon standard_had_icon" />
              <h1>Standard</h1>
            </div>

            <div className="month_price month_price_standard">
              <div className="month_price_child">
                <span>৳</span>
                <h1>1499</h1>
                <p>/MO</p>
              </div>
            </div>
            <div className="pricing">
              <div className="plan_list">
                <FaCheck className="sta_plan_list_icon" />
                <p>
                  <b>5 Users</b>
                </p>
              </div>
              <div className="plan_list">
                <FaCheck className="sta_plan_list_icon" />
                <p>
                  <b>Customization Support</b>
                </p>
              </div>
              <div className="plan_list">
                <FaCheck className="sta_plan_list_icon" />
                <p>
                  <b>Online Order</b>
                </p>
              </div>
              <div className="plan_list">
                <FaCheck className="sta_plan_list_icon" />
                <p>
                  <b>Warranty/Guaranty System</b>
                </p>
              </div>
              <div className="plan_list">
                <FaCheck className="sta_plan_list_icon" />
                <p>
                  <b>Service</b>
                </p>
              </div>
              <div className="plan_list">
                <FaCheck className="sta_plan_list_icon" />
                <p>
                  <b>Investments</b>
                </p>
              </div>
              <div className="plan_list">
                <FaCheck className="sta_plan_list_icon" />
                <p>Unlimited Suppliers</p>
              </div>
              <div className="plan_list">
                <FaCheck className="sta_plan_list_icon" />
                <p>Unlimited Customers</p>
              </div>
              <div className="plan_list">
                <FaCheck className="sta_plan_list_icon" />
                <p>Stocks/Inventory</p>
              </div>
              <div className="plan_list">
                <FaCheck className="sta_plan_list_icon" />
                <p>Sales</p>
              </div>
              <div className="plan_list">
                <FaCheck className="sta_plan_list_icon" />
                <p>Unlimited Money Receipt</p>
              </div>
              <div className="plan_list">
                <FaCheck className="sta_plan_list_icon" />
                <p>Quotation</p>
              </div>
              <div className="plan_list">
                <FaCheck className="sta_plan_list_icon" />
                <p>Reports</p>
              </div>
              <div className="plan_list">
                <FaCheck className="sta_plan_list_icon" />
                <p>Accounts</p>
              </div>
              <div className="plan_list">
                <FaCheck className="sta_plan_list_icon" />
                <p>Employees</p>
              </div>
              <div className="plan_list">
                <FaCheck className="sta_plan_list_icon" />
                <p>
                  <b>Messages</b>
                </p>
              </div>
              <div className="plan_list">
                <FaCheck className="sta_plan_list_icon" />
                <p>
                  <b>24/7 Customer Support</b>
                </p>
              </div>
            </div>
            <a href="#" id="standard_call_btn" className="call_btn">
              Call Now
            </a>
          </div>
          <div className="standard_plan_badge plan_badge">
            <p>19,999৳ (One Time) Software Configaration Fee</p>
          </div>
        </div>
        <div className="premium_price">
          <div className="premium">
            <div className="price_heading">
              <RiCheckboxBlankFill className="p_head_icon premium_had_icon" />
              <h1>Premium</h1>
            </div>
            <div className="month_price month_price_premium">
              <div className="month_price_child">
                <span>৳</span>
                <h1>2599</h1>
                <p>/MO</p>
              </div>
            </div>
            <div className="pricing">
              <div className="plan_list">
                <FaCheck className="pri_plan_list_icon" />
                <p>
                  <b>10 Users</b>
                </p>
              </div>
              <div className="plan_list">
                <FaCheck className="pri_plan_list_icon" />
                <p>
                  <b>Custom Domain</b>
                </p>
              </div>
              <div className="plan_list">
                <FaCheck className="pri_plan_list_icon" />
                <p>
                  <b>E-commerce Website</b>
                </p>
              </div>
              <div className="plan_list">
                <FaCheck className="pri_plan_list_icon" />
                <p>
                  <b>Customization Support</b>
                </p>
              </div>
              <div className="plan_list">
                <FaCheck className="pri_plan_list_icon" />
                <p>
                  <b>Online Order</b>
                </p>
              </div>
              <div className="plan_list">
                <FaCheck className="pri_plan_list_icon" />
                <p>
                  <b>Warranty/Guaranty System</b>
                </p>
              </div>
              <div className="plan_list">
                <FaCheck className="pri_plan_list_icon" />
                <p>
                  <b>Service</b>
                </p>
              </div>
              <div className="plan_list">
                <FaCheck className="pri_plan_list_icon" />
                <p>
                  <b>Investments</b>
                </p>
              </div>
              <div className="plan_list">
                <FaCheck className="pri_plan_list_icon" />
                <p>Unlimited Suppliers</p>
              </div>
              <div className="plan_list">
                <FaCheck className="pri_plan_list_icon" />
                <p>Unlimited Customers</p>
              </div>
              <div className="plan_list">
                <FaCheck className="pri_plan_list_icon" />
                <p>Stocks/Inventory</p>
              </div>
              <div className="plan_list">
                <FaCheck className="pri_plan_list_icon" />
                <p>Sales</p>
              </div>
              <div className="plan_list">
                <FaCheck className="pri_plan_list_icon" />
                <p>Unlimited Money Receipt</p>
              </div>
              <div className="plan_list">
                <FaCheck className="pri_plan_list_icon" />
                <p>Quotation</p>
              </div>
              <div className="plan_list">
                <FaCheck className="pri_plan_list_icon" />
                <p>Reports</p>
              </div>
              <div className="plan_list">
                <FaCheck className="pri_plan_list_icon" />
                <p>Accounts</p>
              </div>
              <div className="plan_list">
                <FaCheck className="pri_plan_list_icon" />
                <p>Employees</p>
              </div>
              <div className="plan_list">
                <FaCheck className="pri_plan_list_icon" />
                <p>
                  <b>Messages</b>
                </p>
              </div>
              <div className="plan_list">
                <FaCheck className="pri_plan_list_icon" />
                <p>
                  <b>24/7 Customer Support</b>
                </p>
              </div>
            </div>
            <a href="#" id="premium_call_btn" className="call_btn">
              Call Now
            </a>
          </div>
          <div className="premium_plan_badge plan_badge">
            <p>49,999৳ (One Time) Software Configaration Fee</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default pricing;
