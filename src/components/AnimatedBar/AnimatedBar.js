import { useState, useEffect } from "react";
import "./AnimatedBar.css";

const AnimatedBar = ({ size, source }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const newStyle = {
      opacity: 1,
      width: `${size}%`
    };
    setTimeout(() => setStyle(newStyle), 100);
  },[size]);

  return (
    <div className="progress">
      <div
        className="progress-done"
        style={style}
        
      >
        {source}
      </div>
    </div>
  );
};

export default AnimatedBar;
