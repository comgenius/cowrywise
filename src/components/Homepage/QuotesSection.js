import React from "react";

const QuotesSection = () => {
  return (
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
  );
};

export default QuotesSection;
