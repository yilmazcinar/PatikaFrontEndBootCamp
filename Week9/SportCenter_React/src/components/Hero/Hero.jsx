import React from "react";
import HeroText from "./HeroText";
import HeroButtons from "./HeroButtons";
import BrandTag from "./BrandTag";

const Hero = () => {
  return (
    <header id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <BrandTag />
            <HeroText />
            <HeroButtons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
