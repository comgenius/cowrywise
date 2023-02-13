import React from "react";
import { Link } from "react-router-dom";

const StepsSection = () => {
  return (
    <section className="steps-section bg-alabaster">
      <div className="container">
        <div className="grid">
          <div className="hide-sm-only col col-xs-12 col-sm-6 col-sm-offset-1 col-no-gutter">
            <div className="device-mockup">
              <img
                loading="lazy"
                src="https://cowrywise.com/images/mockups/app-screenshot-investment-platform-nigeria.png"
                alt="save online Nigeria cowrywise"
              />
            </div>
          </div>
          <div className="col-xs-12 col-md-5 col-sm-10 grid flex-column">
            <h2>It only takes 5 minutes</h2>
            <div className="steps-area">
              <div className="step__item active" style={{ opacity: 1 }}>
                <span className="step__item-number" />
                <div className="step__item-content">
                  <span>Create an account</span>
                  <p>
                    Sign up for an account with your name, email and phone
                    number.
                  </p>
                </div>
              </div>
              <div className="step__item active" style={{ opacity: 1 }}>
                <span className="step__item-number" />
                <div className="step__item-content">
                  <span>Add a payment method</span>
                  <p>
                    Using your debit card or a bank transfer, setup your first
                    plan.
                  </p>
                </div>
              </div>
              <div className="step__item active" style={{ opacity: 1 }}>
                <span className="step__item-number" />
                <div className="step__item-content">
                  <span>Watch your money grow</span>
                  <p>
                    Sit back, relax &amp; let your money work for you all day,
                    everyday.
                  </p>
                </div>
              </div>
            </div>
            <Link to="/signup" className="button button--large">Sign up now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
