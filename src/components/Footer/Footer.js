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


// import { Typography } from '@material-ui/core';
// import myData from '../../utilities/myData';
/* <div className="footer">
  <div className="footer_left">
    <Typography className="footer_name">
      {myData.name} {myData.lastname}
    </Typography>
  </div>
  <div className="footer_right">
    <Typography className="footer_year_of_development">2021</Typography>
  </div>
</div>;
 */