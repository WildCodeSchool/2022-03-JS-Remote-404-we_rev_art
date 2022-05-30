import React from "react";
import Button from "./Button";
import buttonData from "../data/buttonData";
import home from "../images/home_img.jpg";

import "../style/Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <section className="hero-text">
        <h1 className="hero-h1">Find a digital artist to animate your art </h1>
        <p className="hero-p">
          Publish your project for free and work with motion, 2D, 3D, XR artists
          to give a new digital life to your physical artwork.
        </p>
        <Button buttonData={buttonData[0]} />
      </section>
      <img
        src={home}
        alt="painting of two women dancing during the night"
        className="hero-img"
      />
    </div>
  );
}

export default Hero;
