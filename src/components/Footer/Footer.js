import React from 'react';
import './Footer.css';
import { Typography } from '@material-ui/core';
import myData from '../../utilities/myData';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{myData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_year_of_development">2021</Typography>
      </div>
    </div>
  );
};

export default Footer;
