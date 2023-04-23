import React from "react";
import adobeblack from "../assets/adobe_black.png";
import pelotonblack from "../assets/peloton_black.png";
import atlassian_black from "../assets/atlassian_black.png";
import bloomberg_black from "../assets/bloomberg_black.png";
import vmware_black from "../assets/vmware_black.png";
import stripe_black from "../assets/stripe_black.png";
import linkedin_black from "../assets/linkedin_black.png";
import goldmansachs_black from "../assets/goldmansachs_black.png";

const HeroSection = () => {
  return (
    <>
      <h1>
        Skills speak louder <br /> than words
      </h1>
      <p>
        We help companies develop the strongest tech teams around. We help{" "}
        <br />
        candidates sharpen their tech skills and pursue job opportunities.
      </p>
      <div className="btn">
        <button>Sign up</button>
        <button className="btn2"> Request Demo</button>
      </div>
      <div className="below">
        Over 40% of developers worldwide and 3,000 companies use HackerRank.
      </div>
      <div className="com-img">
        <img src={pelotonblack} />
        <img src={atlassian_black} />
        <img src={bloomberg_black} />
        <img src={vmware_black} />
        <img src={stripe_black} />
        <img src={goldmansachs_black} />
        <img src={adobeblack} />
        <img src={linkedin_black} />
      </div>
    </>
  );
};

export default HeroSection;
