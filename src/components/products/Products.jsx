import React from "react";
import "./products.css";
import location from "../../assets/images/location.png";
import illustration from "../../assets/images/illustration.png";
import lock from "../../assets/images/lock.png";
import home from "../../assets/images/House.png";
import { BsPencilSquare } from "react-icons/bs";

const Products = () => {
  return (
    <section className="products container mx-auto flex flex-col justify-center items-center pt-12 md:pt-28">
      <div className="products__title text-center">
        <h3>How it works.</h3>
        <p>This is how our products works</p>
      </div>
      <div className="products__cards flex flex-col md:flex-row items-center justify-between gap-9 mt-9">
        <div className="products__card flex flex-col items-center">
          <div className="card-image">
            <img src={location} alt="" className="max-w-full h-auto" />
          </div>
          <div className="card-body">
            <h4>Find Home</h4>
            <p>
              Our properties are located at prime areas where by there wont be
              problem with transportation
            </p>
          </div>
        </div>
        <div className="products__card flex flex-col items-center">
          <div className="card-image">
            <img src={illustration} alt="" className="max-w-full h-auto" />
          </div>
          <div className="card-body">
            <h4>Make Payments</h4>
            <p>
              Our estates comes with good network,portable water , 24hrs light
              and round the clock security.
            </p>
          </div>
        </div>
        <div className="products__card flex flex-col items-center">
          <div className="card-image">
            <img src={lock} alt="" className="max-w-full h-auto" />
          </div>
          <div className="card-body">
            <h4>Make it Official</h4>
            <p>
              We have been in business for over 32 years,for client outside the
              country you can trust us to deliver well.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="products__creation flex flex-col md:flex-row items-center mt-28 pt-12 gap-12 justify-center">
        <div className="products__creation-image flex-grow">
          <img src={home} alt="home" className="max-w-full h-auto" />
        </div>
        <div className="products__creation-text flex flex-col gap-4 justify-c">
          <h4>Why you should choose us.</h4>
          <p>Creating quality urban lifestyles,building stronger communities</p>
          <div className="creation-box grid grid-cols-2 gap-2">
            <h5 className="flex flex-row items-center gap-3">
              <BsPencilSquare color="#2549D3" />
              <span>World Class</span>
            </h5>
            <h5 className="flex flex-row items-center gap-3">
              <BsPencilSquare color="#2549D3" />
              Trusted
            </h5>
            <h5 className="flex flex-row items-center gap-3">
              <BsPencilSquare color="#2549D3" />
              Affordable
            </h5>
            <h5 className="flex flex-row items-center gap-3">
              <BsPencilSquare color="#2549D3" />
              Amenities
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
