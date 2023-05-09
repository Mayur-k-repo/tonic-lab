import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import useWindowSize from "../../../hooks";

const VanillaTiltCard = ({ children }) => {
  const options = {
    scale: 1.05,
    speed: 1000,
    max: 20,
  };
  const tilt = useRef(null);
  const { width } = useWindowSize();
  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <div ref={tilt} options={options} className="w-full mobile-stop">
      {children}
    </div>
  );
};

export default VanillaTiltCard;
