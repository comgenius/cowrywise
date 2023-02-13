import React, { useState, useRef } from "react";
import HomeSection from "./Homepage/HomeSection";
import BarsSection from "./Homepage/BarsSection";
import QuotesSection from "./Homepage/QuotesSection";
import StepsSection from "./Homepage/StepsSection";
import SecuritySection from "./Homepage/SecuritySection";
import PerksSection from "./Homepage/PerksSection";

const Body = () => {
  return (
    <div className="page-root" style={{ overflow: "hidden" }}>
      <div>
        <HomeSection/>

        <BarsSection/>

        <QuotesSection/>

        <StepsSection/>

        <SecuritySection/>

        <PerksSection/>
        
      </div>
    </div>
  );
};

export default Body;
