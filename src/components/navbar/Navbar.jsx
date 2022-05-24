import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [activeToggle, setActiveToggle] = useState(false);
  return (
    <nav className="navbar w-full border-b ">
      <div className="container  py-3 flex justify-between items-center mx-auto">
        <div className="navbar-brand cursor-pointer">Dee's Estate</div>
        <ul className="nav-link flex items-center ">
          <li className=" hover:text-blue-800 duration-500">
            <a href="#home">Home</a>
          </li>
          <li className=" hover:text-blue-800 duration-500">
            <a href="#rent">Rent</a>
          </li>
          <li className=" hover:text-blue-800 duration-500">
            <a href="#land">Land</a>
          </li>
          <li className=" hover:text-blue-800 duration-500">
            <a href="#agent">Agent</a>
          </li>
          <li className=" hover:text-blue-800 duration-500">
            <a href="#contact-us">Contact Us</a>
          </li>
        </ul>
        <button className="btn-navbar text-white rounded-lg font-bold hover:bg-blue-600 duration-500">
          Get Started
        </button>
        {activeToggle ? (
          <RiCloseLine
            size={30}
            className="toggle-menu cursor-pointer"
            onClick={() => setActiveToggle(false)}
          />
        ) : (
          <RiMenu3Line
            size={30}
            className="toggle-menu cursor-pointer"
            onClick={() => setActiveToggle(true)}
          />
        )}
      </div>
      {/* active menu start */}
      {activeToggle && (
        <div className="navbar__menu">
          <ul className="nav-link__menu flex items-center ">
            <li className=" hover:text-blue-800 duration-500">
              <a href="#home">Home</a>
            </li>
            <li className=" hover:text-blue-800 duration-500">
              <a href="#rent">Rent</a>
            </li>
            <li className=" hover:text-blue-800 duration-500">
              <a href="#land">Land</a>
            </li>
            <li className=" hover:text-blue-800 duration-500">
              <a href="#agent">Agent</a>
            </li>
            <li className=" hover:text-blue-800 duration-500 mb-6">
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
          <button className="btn-navbar__menu text-white rounded-lg font-bold hover:bg-blue-600 duration-500">
            Get Started
          </button>
        </div>
      )}
      {/* active menu ends */}
    </nav>
  );
};

export default Navbar;
