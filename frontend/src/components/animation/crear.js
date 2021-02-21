import React from "react";
import Lottie from "react-lottie";
import crearAnimation from "./crear.json";
import "../../index.css";

const CrearAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: crearAnimation,
  };

  return (
    <div className="flex-animation">
      <div className="anim-container">
        <Lottie options={defaultOptions} className="animation" />
      </div>
    </div>
  );
};

export default CrearAnimation;
