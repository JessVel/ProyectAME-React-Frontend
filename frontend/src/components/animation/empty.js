import React from "react";
import Lottie from "react-lottie";
import emptyAnimation from "./empty.json";
import "../../index.css";

const EmptyAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: emptyAnimation,
  };

  return (
    <div className="flex-animation">
      <div className="anim-container">
        <Lottie options={defaultOptions} className="animation" />
      </div>
    </div>
  );
};

export default EmptyAnimation;
