import React from "react";
import "./Title.css";

const Title = ({name}) => {
  return (
    <div className={'patterns'}>
      <svg >
        <text x="6%" y="20%" >
          {name}
        </text>
      </svg>
    </div>
  );
};

export default Title;
