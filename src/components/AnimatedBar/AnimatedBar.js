import { useState } from "react";
import "./AnimatedBar.css";

const AnimatedBar = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    };
    setStyle(newStyle);
  }, 500);
  return (
    <div className="progress">
      <div
        className="progress-done"
        style={style}
        
      >
        {/* {done}% */}
      </div>
    </div>
  );
};

export default AnimatedBar;
