import React from "react";
import Lottie from "react-lottie";
import singinAnimate from "./singin.json";
import "../../index.css";

const Animation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: singinAnimate,
  };

  return (
    <div className="anim-container pt-80">
      <Lottie options={defaultOptions} className="anim" />
    </div>
  );
};

export default Animation;
