import React from "react";
import Lottie from "react-lottie";
import animWelcome from "./welcome.json";
import "../../index.css";

const AnimationWelcome = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animWelcome,
  };

  return (
    <div className="anim-container pt-0">
      <Lottie options={defaultOptions} className="animation" />
    </div>
  );
};

export default AnimationWelcome;
