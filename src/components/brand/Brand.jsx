import React from "react";
import "./brand.css";
import { FaChevronDown, FaSearch } from "react-icons/fa";

const Brand = () => {
  return (
    <section className="brand container mx-auto pt-5">
      <div className="brand__main flex flex-row justify-between items-center p-5">
        <div className="brand__main-box">
          <div className="brand__main-text">
            <h4>Locaton</h4>
            <FaChevronDown className="cursor-pointer" />
          </div>
          <p>Lekki</p>
        </div>
        <div className="brand__main-box">
          <div className="brand__main-text">
            <h4>Property Type</h4>
            <FaChevronDown className="cursor-pointer" />
          </div>
          <p>Duplex</p>
        </div>
        <div className="brand__main-box">
          <div className="brand__main-text">
            <h4>Duplex</h4>
            <FaChevronDown className="cursor-pointer" />
          </div>
          <p>$10,000</p>
        </div>
        <button className="btn-brand hover:bg-blue-600 duration-500">
          <FaSearch />
          <span>Search</span>
        </button>
      </div>
    </section>
  );
};

export default Brand;
