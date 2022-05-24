import React from "react";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="navbar w-full border-b">
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
        <button className="btn-navbar text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-600 duration-500 hidden sm:block">
          Get Started
        </button>
        <BiMenuAltRight size={30} className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
