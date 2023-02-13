import React from "react";

const SecuritySection = () => {
  return (
    <section className="security-section bg-blue">
      <div className="container">
        <div className="grid no-gutters">
          <div className="col-xs-12 col-md-5">
            <h2>Keeping your money safe is our business.</h2>
            <p>
              Trust is our currency. We are committed to the security of your
              money and the protection of your account.
            </p>
            <a
              href="#"
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
                We use industry-standard encryption technology to protect user
                data. We also use two-factor authentication to verify all
                customer accounts, so you can be sure that your funds are safe
                and secure.
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4 col-md-offset-1">
            <div className="check__item check__item--light">
              <h5>Assets Custody</h5>
              <p>
                Our users’ financial assets are held with a licensed custodian,
                Zenith Nominees Limited, for safekeeping to prevent
                misappropriation, misuse, theft, and/or loss, and in accordance
                with applicable law.
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="check__item check__item--light">
              <h5>Regulatory Compliance</h5>
              <p>
                Cowrywise is a duly registered fund manager with the Securities
                and Exchange Commission (SEC) of Nigeria. All our activities are
                in full compliance with regulatory requirements to the ultimate
                protection of our clients.
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4 col-md-offset-1">
            <div className="check__item check__item--light">
              <h5>Best-In-Class Assets</h5>
              <p>
                All the investment options listed on Cowrywise, are carefully
                screened, managed by professional fund managers. All the diverse
                mutual funds registered with the SEC, with standard third-party
                custodian structure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
