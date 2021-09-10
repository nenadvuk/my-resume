import React from 'react';
import './Button.css';

const CustomButton = ({ text, icon }) => {
  return (
    <button className="custom_btn">
      <span className="btn_text">{text}</span>
      <span className="btn_icon_container">{icon}</span>
    </button>
  );
};

export default CustomButton;
