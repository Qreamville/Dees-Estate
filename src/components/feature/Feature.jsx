import React from "react";
import "./feature.css";
import palace from "../../assets/images/Palace.png";
import ivy from "../../assets/images/Ivy.png";
import rexona from "../../assets/images/Rexona.png";

const Feature = () => {
  return (
    <section className="feature container mx-auto pt-12 md:mt-28 flex flex-col justify-center">
      <div className="feature__heading text-center">
        <h3>Our Featured Properties.</h3>
        <p>
          One of our biggest product to be featured and that has sold out the
          most.
        </p>
      </div>
      <div className="feature__btn my-10 justify-center md:justify-end">
        <button>View More</button>
      </div>
      <div className="feature__cards flex flex-col md:flex-row gap-4 justify-between w-full items-center">
        <div className="feature__card  bg-white flex flex-col">
          <div className="card-image">
            <img src={palace} alt="palace" />
          </div>
          <div className="card-body mt-3">
            <p>The Palace</p>
            <p>Duplex</p>
            <p>Lekki, phase 2</p>
            <p>$2,000</p>
          </div>
        </div>
        <div className="feature__card  bg-white flex flex-col">
          <div className="card-image">
            <img src={ivy} alt="palace" />
          </div>
          <div className="card-body mt-3">
            <p>IVY RORY</p>
            <p>Duplex</p>
            <p>Lekki, phase 2</p>
            <p>$2,000</p>
          </div>
        </div>
        <div className="feature__card  bg-white flex flex-col">
          <div className="card-image">
            <img src={rexona} alt="palace" />
          </div>
          <div className="card-body mt-3">
            <p>REXONA</p>
            <p>Duplex</p>
            <p>Lekki, phase 2</p>
            <p>$2,000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
