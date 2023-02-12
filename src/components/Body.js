import React, { useState, useRef } from "react";
import HomeSection from "./Homepage/HomeSection";
import BarsSection from "./Homepage/BarsSection";

const Body = () => {
  return (
    <div className="page-root" style={{ overflow: "hidden" }}>
      <div>
        <HomeSection/>

        <BarsSection/>
        
        <section className="quotes-section">
          <div className="container">
            <div className="grid between-lg">
              <div className="col-xs-12 col-sm-5">
                <h2>You name it, we’ve figured it out.</h2>
              </div>
            </div>
          </div>
          <div className="carousel-wrapper">
            <div className="carousel-inner">
              <div className="quotes-row">
                <a
                  href="https://cwry.se/app"
                  className="quote-item"
                  style={{
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                    visibility: "inherit",
                  }}
                >
                  <h4>Automate and build my savings</h4>
                </a>
                <a
                  href="https://cwry.se/app"
                  className="quote-item"
                  style={{
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                    visibility: "inherit",
                  }}
                >
                  <h4>Diversified long-term investing</h4>
                </a>
                <a
                  href="https://cwry.se/app"
                  className="quote-item"
                  style={{
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                    visibility: "inherit",
                  }}
                >
                  <h4>Get better returns on my money</h4>
                </a>
                <a
                  href="https://cowrywise.com/sprout"
                  className="quote-item"
                  style={{
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                    visibility: "inherit",
                  }}
                >
                  <h4>Invest my business’ cash</h4>
                </a>
                <a
                  href="https://cwry.se/app"
                  className="quote-item"
                  style={{
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                    visibility: "inherit",
                  }}
                >
                  <h4>Invest in mutual funds easily</h4>
                </a>
                <a
                  href="https://cwry.se/app"
                  className="quote-item"
                  style={{
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                    visibility: "inherit",
                  }}
                >
                  <h4>Invest with very low fees</h4>
                </a>
              </div>
            </div>
          </div>
        </section>
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
                        Using your debit card or a bank transfer, setup your
                        first plan.
                      </p>
                    </div>
                  </div>
                  <div className="step__item active" style={{ opacity: 1 }}>
                    <span className="step__item-number" />
                    <div className="step__item-content">
                      <span>Watch your money grow</span>
                      <p>
                        Sit back, relax &amp; let your money work for you all
                        day, everyday.
                      </p>
                    </div>
                  </div>
                </div>
                <a href="https://cwry.se/app" className="button button--large">
                  Sign up now
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="security-section bg-blue">
          <div className="container">
            <div className="grid no-gutters">
              <div className="col-xs-12 col-md-5">
                <h2>Keeping your money safe is our business.</h2>
                <p>
                  Trust is our currency. We are committed to the security of
                  your money and the protection of your account.
                </p>
                <a
                  href="https://cowrywise.com/security"
                  target="_blank"
                  className="button button--has-arrow"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    svg-inline=""
                    role="presentation"
                    focusable="false"
                    tabIndex={-1}
                  >
                    <path d="M21.31 14.484L9.602 26.808a.627.627 0 01-.912-.009.71.71 0 01-.007-.96L19.93 14 8.683 2.16a.71.71 0 01.007-.96.627.627 0 01.912-.008L21.31 13.516a.71.71 0 010 .968z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid no-gutters">
              <div className="col-xs-12 col-md-4">
                <div className="check__item check__item--light">
                  <h5>Top-Notch Security</h5>
                  <p>
                    We use industry-standard encryption technology to protect
                    user data. We also use two-factor authentication to verify
                    all customer accounts, so you can be sure that your funds
                    are safe and secure.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-md-4 col-md-offset-1">
                <div className="check__item check__item--light">
                  <h5>Assets Custody</h5>
                  <p>
                    Our users’ financial assets are held with a licensed
                    custodian, Zenith Nominees Limited, for safekeeping to
                    prevent misappropriation, misuse, theft, and/or loss, and in
                    accordance with applicable law.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <div className="check__item check__item--light">
                  <h5>Regulatory Compliance</h5>
                  <p>
                    Cowrywise is a duly registered fund manager with the
                    Securities and Exchange Commission (SEC) of Nigeria. All our
                    activities are in full compliance with regulatory
                    requirements to the ultimate protection of our clients.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-md-4 col-md-offset-1">
                <div className="check__item check__item--light">
                  <h5>Best-In-Class Assets</h5>
                  <p>
                    All the investment options listed on Cowrywise, are
                    carefully screened, managed by professional fund managers.
                    All the diverse mutual funds registered with the SEC, with
                    standard third-party custodian structure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="perks-section">
          <div className="container">
            <div className="grid">
              <h6>WHY COWRYWISE ?</h6>
              <div id="perks-column" className="col col-xs-12 col-no-gutter">
                <div className="perk">
                  <span
                    className="perk__question"
                    style={{ transform: "translate(0px, -30px)", opacity: 0 }}
                  >
                    Got SEC licence?
                  </span>
                  <span
                    className="perk__answer"
                    style={{ transform: "translate(0px, -30px)", opacity: 0 }}
                  >
                    Yup!
                  </span>
                </div>
                <div className="perk">
                  <span
                    className="perk__question"
                    style={{ transform: "translate(0px, 0px)", opacity: 1 }}
                  >
                    Saving Charges?
                  </span>
                  <span
                    className="perk__answer"
                    style={{ transform: "translate(0px, 0px)", opacity: 1 }}
                  >
                    Nope.
                  </span>
                </div>
                <div className="perk">
                  <span
                    className="perk__question"
                    style={{
                      transform: "translate(0px, 50px) scale(1.02, 1.02)",
                      opacity: 0,
                    }}
                  >
                    Great Interest Rates?
                  </span>
                  <span
                    className="perk__answer"
                    style={{
                      transform: "translate(0px, 50px) scale(1.06, 1.06)",
                      opacity: 0,
                    }}
                  >
                    Confam.
                  </span>
                </div>
                <div className="perk">
                  <span
                    className="perk__question"
                    style={{
                      transform: "translate(0px, 50px) scale(1.02, 1.02)",
                      opacity: 0,
                    }}
                  >
                    Maintenance Fees?
                  </span>
                  <span
                    className="perk__answer"
                    style={{
                      transform: "translate(0px, 50px) scale(1.06, 1.06)",
                      opacity: 0,
                    }}
                  >
                    No.
                  </span>
                </div>
                <div className="perk">
                  <span
                    className="perk__question"
                    style={{
                      transform: "translate(0px, 50px) scale(1.02, 1.02)",
                      opacity: 0,
                    }}
                  >
                    Convinced?
                  </span>
                  <a
                    href="https://cwry.se/app"
                    className="perk__answer perk__link"
                    style={{
                      transform: "translate(0px, 50px) scale(1.06, 1.06)",
                      opacity: 0,
                    }}
                  >
                    Sign up now.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Body;
