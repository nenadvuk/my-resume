import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="signature fadeIn">
      <span></span>
      <span style={{ animationDelay: "150ms" }} className="fast-flicker">
        N
      </span>
      en<span className="flicker">a</span>
      <span>d </span>
      <span className="flicker">V</span>
      <span>uk</span>
      <span style={{ animationDelay: "150ms" }} className="flicker">
        a
      </span>
      <span>š</span>
      <span className="flicker">in</span>
      <span>ovi</span>
      <span className="flicker">ć</span>
    </div>
  );
};

export default Footer;
