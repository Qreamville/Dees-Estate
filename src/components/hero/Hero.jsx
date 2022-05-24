import React from "react";
import "./hero.css";
import { AiFillPlayCircle } from "react-icons/ai";
import heroImage from "../../assets/images/heroImage.png";

const Hero = () => {
  return (
    <section className="hero container flex justify-center items-center flex-col sm:flex-row mx-auto pt-12 pb-7 gap-4">
      <div className="hero__main flex flex-col items-start gap-5">
        <div className="hero-title">
          <h1 className="text-4xl">
            Helping you find the property of your dreams.
          </h1>
        </div>
        <div className="hero-body">
          <p>Creating quality urban lifestyle, building stronger communities</p>
        </div>
        <div className="hero-cta">
          <button>Learn more</button>
          <AiFillPlayCircle size={30} />
        </div>
      </div>
      <div className="hero__image flex-grow">
        <div className="circle"></div>
        <img src={heroImage} alt="hero" className="max-w-full h-auto" />
      </div>
    </section>
  );
};

export default Hero;
