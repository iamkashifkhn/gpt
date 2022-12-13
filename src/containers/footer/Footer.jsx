import React from "react";
import "./footer.css";
import gptLogo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="gpt__footer section__padding">
      <div className="gpt__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="gpt__footer-btn">
        <p> Get Early Access</p>
      </div>

      <div className="gpt__footer-links">
        <div className="gpt__footer-logo">
          <img src={gptLogo} alt="gptLogo" />
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>

        <div className="gpt__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="gpt__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="gpt__footer-copyrights">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
